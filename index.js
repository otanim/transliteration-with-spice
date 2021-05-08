let characterMap = require('./characterMap');

const sortObjectByKeyLengthDesc = (_object) => {
    let keyArray = Object.keys(_object);

    const object = {};

    keyArray = keyArray.slice().sort().reverse();

    keyArray.forEach(function (item) {
        object[item] = _object[item]
    })

    return object;
}

for (let key in characterMap) {
    characterMap[key] = sortObjectByKeyLengthDesc(characterMap[key]);
}

module.exports = (text) => {
    if (typeof text !== 'string') throw new Error('Unmatched type: please use a string.');

    if (typeof text === 'undefined') return text;

    //clean ups
    for (let language in characterMap) {
        const data = characterMap[language];
        for (let key in data) {
            const value = data[key][0];
            if (value === '') {
                const regExp = new RegExp(key, 'g');
                text = text.replace(regExp, value);
            }
        }
    }

    //conversion
    const texts = [text];
    for (let language in characterMap) {
        const data = characterMap[language];
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
