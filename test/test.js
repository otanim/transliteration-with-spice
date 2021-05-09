//packages
const transliterate = require('../');
const characterMap = require('../characterMap');

//tests
describe('integrity check', () => {
    it('case mismatch check', function (done) {
        for (let language in characterMap) {
            const {map: data} = characterMap[language];
            for (let key in data) {
                const values = data[key];
                const isKeyUpperCase = key[0] === key[0].toUpperCase();
                let isAllValuesUpperCase = true;
                let isAllValuesLowerCase = true;
                for (let value of values) {
                    if (value === '') continue;
                    if (!/^\D$/.test(values)) continue;

                    const isValueUpperCase = value[0] === value[0].toUpperCase();
                    if (isValueUpperCase) {
                        isAllValuesLowerCase = false;
                    } else {
                        isAllValuesUpperCase = false;
                    }
                }

                if (values[0] && ((isKeyUpperCase && !isAllValuesUpperCase) || (!isKeyUpperCase && !isAllValuesLowerCase))) {
                    return done(new Error(`Case mismatch detected, language: ${language}, key: ${key}, values: ${values}`));
                }
            }
        }

        done();
    });
    it('missing letter check', function (done) {
        for (let language in characterMap) {
            const {map: data} = characterMap[language];
            for (let key in data) {
                const isKeyUpperCase = key[0] === key[0].toUpperCase();
                const keyAlter1 = `${isKeyUpperCase ? key[0].toLowerCase() : key[0].toUpperCase()}${key.substr(1)}`;
                const keyAlter2 = isKeyUpperCase ? key.toLowerCase() : key.toUpperCase();
                if (!data[keyAlter1] && !data[keyAlter2]) {
                    return done(new Error(`Missing alter value for ${key}`));
                }
            }
        }

        done();
    });
});

describe('samples', () => {
    describe('to en', () => {
        it('hy: բարեւ', function (done) {
            const textOrigin = 'բարեւ';
            const textResult = 'barev';
            const translits = transliterate(textOrigin, );
            console.log(translits);
            if (!translits.includes(textResult)) {
                return done(new Error(`Text result for "${textResult}" have not been generated: "${translits.join(', ')}".`));
            }

            done();
        });
        it('ru: привет', function (done) {
            const textOrigin = 'привет';
            const textResult = 'privet';
            const translits = transliterate(textOrigin, );
            console.log(translits);
            if (!translits.includes(textResult)) {
                return done(new Error(`Text result for "${textResult}" have not been generated: "${translits.join(', ')}".`));
            }

            done();
        });

        it('hy: բարե՛ւ աշխարհ', function (done) {
            const textOrigin = 'բարե՛ւ աշխարհ';
            const textResult = 'barev ashkharh';
            const translits = transliterate(textOrigin, );
            console.log(translits);
            if (!translits.includes(textResult)) {
                return done(new Error(`Text result for "${textResult}" have not been generated: "${translits.join(', ')}".`));
            }

            done();
        });
        it('ru: привет мир!', function (done) {
            const textOrigin = 'привет мир!';
            const textResult = 'privet mir!';
            const translits = transliterate(textOrigin, );
            console.log(translits);
            if (!translits.includes(textResult)) {
                return done(new Error(`Text result for "${textResult}" have not been generated: "${translits.join(', ')}".`));
            }

            done();
        });
    });
    describe('to ru', () => {
        it('hy: բարեւ', function (done) {
            const textOrigin = 'բարեւ';
            const textResult = 'барев';
            const translits = transliterate(textOrigin, 'ru');
            console.log(translits);
            if (!translits.includes(textResult)) {
                return done(new Error(`Text result for "${textResult}" have not been generated: "${translits.join(', ')}".`));
            }

            done();
        });
        it('hy: բարե՛ւ աշխարհ', function (done) {
            const textOrigin = 'բարե՛ւ աշխարհ';
            const textResult = 'барев ашхар';
            const translits = transliterate(textOrigin, 'ru');
            console.log(translits);
            if (!translits.includes(textResult)) {
                return done(new Error(`Text result for "${textResult}" have not been generated: "${translits.join(', ')}".`));
            }

            done();
        });
    });
});
