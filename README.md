This is a tool that allows to generate all common used transliterations.

## Supported transliterations
- Armenian -> Cyrillic (Russian, ru)
- Armenian -> ASCII (English, en)
- Russian -> ASCII (English, en)

## Install

```sh
$ npm install translit-to-ascii --save
```


## Usage

```javascript
const transliterate = require('translit-to-ascii');

const translitsHY2EN = transliterate('բարե՛ւ աշխարհ');
console.log(translits.join(', '));
// barev ashkharh, barev askharh, barev ashxarh, barev asxarh

const translitsHY2EN = transliterate("բարե՛ւ աշխարհ", 'ru');
console.log(translits.join(', '));
// барев ашхар, барев ашхарх

const translitsRU2EN = transliterate('привет мир!');
console.log(translits.join(', '));
// privet mir!, privyot mir!, privot mir!
```