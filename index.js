const _ = require('lodash');
let _characterMap = require('./characterMap');

const sortObjectByKeyLengthDesc = (_object) => {
    let keyArray = Object.keys(_object);

    const object = {};

    keyArray = keyArray.slice().sort((a, b) => {
        return b.length - a.length;
    });

    keyArray.forEach(function (item) {
        object[item] = _object[item]
    })

    return object;
}

for (let key in _characterMap) {
    _characterMap[key].map = sortObjectByKeyLengthDesc(_characterMap[key].map);
}

module.exports = (text, uglifyToLanguage = 'en') => {
    let characterMap = _.cloneDeep(_characterMap);
    if (typeof text !== 'string') throw new Error('Unmatched type: please use a string.');
    
    const listOfUglifyToLanguages = [...new Set(Object.keys(characterMap).map(key => key.split('-')[1]))];
    if (!listOfUglifyToLanguages.includes(uglifyToLanguage)) throw new Error(`Unmatched language "${uglifyToLanguage}", please use of of those: "${listOfUglifyToLanguages.join(', ')}"`);

    if (typeof text === 'undefined') return text;

    characterMap = _.pickBy(characterMap, (value, key) => {
        const _uglifyToLanguage = key.split('-')[1];
        return _uglifyToLanguage === uglifyToLanguage;
    });

    //clean ups
    for (let language in characterMap) {
        const {toCleanUp = []} = characterMap[language];
        for (let toCleanUpCharacter of toCleanUp) {
            const regExp = new RegExp(toCleanUpCharacter, 'g');
            text = text.replace(regExp, '');
        }
    }

    //conversion
    const texts = [text];
    for (let language in characterMap) {
        const {map: data} = characterMap[language];
        for (let key in data) {
            const regExp = new RegExp(key, 'g');
            const values = data[key];
            for (let textIndex = 0; textIndex < texts.length; textIndex++) {
                const text = texts[textIndex];
                for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
                    const value = values[valueIndex];
                    const textReplaced = text.replace(regExp, value);
                    const isTextChanged = textReplaced !== text;
                    if (!isTextChanged) continue;

                    if (valueIndex > 0) {
                        texts.push(textReplaced);
                    } else {
                        texts[textIndex] = textReplaced;
                    }
                }
            }
        }
    }

    return texts;
}
