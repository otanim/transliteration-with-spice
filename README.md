This is a tool that allows to generate all common used transliterations.

## Supported transliterations
- Armenian -> Cyrillic (Russian, ru)
- Armenian -> ASCII (English, en)
- Russian -> ASCII (English, en)

## Install

```sh
$ npm install transliteration-with-spice --save
```


## Usage

```javascript
const transliterate = require('transliteration-with-spice');
// The function takes 2 arguments,
// 1st argument is the text that needs to be transliterated,
// 2nd argument is ISO-639-1 language code to which the text needs to be transliterated,
// 2nd argument is an optional, the default value is "en".

const translitsHY2EN = transliterate('բարե՛ւ աշխարհ');
console.log(translits.join(', '));
// barev ashkharh, barev askharh, barev ashxarh, barev asxarh

const translitsHY2RU = transliterate("բարե՛ւ աշխարհ", 'ru');
console.log(translits.join(', '));
// барев ашхар, барев ашхарх

const translitsRU2EN = transliterate('привет мир!');
console.log(translits.join(', '));
// privet mir!, privyot mir!, privot mir!
```