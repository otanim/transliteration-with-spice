This is a transliteration tool.

## Supported languages
- Armenian
- Russian


## Install

```sh
$ npm install --save translit-to-ascii
```


## Usage

```javascript
const translitarate = require('translit-to-ascii');

const translitsHY = translitarate("բարե՛ւ աշխարհ");
console.log(translits.join(', '));
// barev ashkharh, barev askharh, barev ashxarh, barev asxarh

const translitsRU = translitarate("привет мир!");
console.log(translits.join(', '));
// privet mir!, privyot mir!, privot mir!
```