This is a transliteration tool.

## Supported languages
- Armenian
- Russian


## Install

```sh
$ npm install translit-to-ascii --save
```


## Usage

```javascript
const transliterate = require('translit-to-ascii');

const translitsHY = transliterate("բարե՛ւ աշխարհ");
console.log(translits.join(', '));
// barev ashkharh, barev askharh, barev ashxarh, barev asxarh

const translitsRU = transliterate("привет мир!");
console.log(translits.join(', '));
// privet mir!, privyot mir!, privot mir!
```