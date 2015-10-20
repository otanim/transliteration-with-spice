'use strict';

var characterMap = {
    'Ա':'A',
    'ա':'a',
    'Բ':'B',
    'բ':'b',
    'Գ':'G',
    'գ':'g',
    'Դ':'D',
    'դ':'d',
    'Ե':'E',
    'ե':'e',
    'Զ':'Z',
    'զ':'z',
    'Է':'E\'',
    'է':'e\'',
    'Ը':'Y\'',
    'ը':'y\'',
    'Թ':'T\'',
    'թ':'t\'',
    'Ժ':'Zh',
    'ժ':'zh',
    'Ի':'I',
    'ի':'i',
    'Լ':'L',
    'լ':'l',
    'Խ':'Kh',
    'խ':'kh',
    'Ծ':'Ts\'',
    'ծ':'ts\'',
    'Կ':'K',
    'կ':'k',
    'Հ':'H',
    'հ':'h',
    'Ձ':'Dz',
    'ձ':'dz',
    'Ղ':'gh',
    'ղ':'gh',
    'Ճ':'Tch',
    'ճ':'tch',
    'Մ':'M',
    'մ':'m',
    'Յ':'Y',
    'յ':'y',
    'Ն':'N',
    'ն':'n',
    'Շ':'Sh',
    'շ':'sh',
    'Ո':'Vo',
    'ո':'o',
    'Չ':'Ch',
    'չ':'ch',
    'Պ':'P',
    'պ':'p',
    'Ջ':'J',
    'ջ':'j',
    'Ռ':'R',
    'ռ':'r',
    'Ս':'S',
    'ս':'s',
    'Վ':'V',
    'վ':'v',
    'Տ':'T',
    'տ':'t',
    'Ր':'R',
    'ր':'r',
    'Ց':'Ts',
    'ց':'ts',
    'Ու':'U',
    'ՈՒ':'U',
    'ու':'u',
    'Փ':'P',
    'փ':'p',
    'Ք':'Q',
    'ք':'q',
    'Եւ':'Ev',
    'ԵՒ':'Ev',
    'եւ':'ev',
    'և':'ev',
    'Օ':'O',
    'օ':'o',
    'Ֆ':'F',
    'ֆ':'f'
  };


function toASCII(string)
{

  if (string === null || string === undefined) {
    return string;
  }

  if (typeof string !== 'string') {
    throw new TypeError('Unmatched type: please use a string.');
  }
  
  return string.split('').map(function (character) {
    if (character.charCodeAt(0) > 127) {
      return typeof characterMap[character] !== 'undefined' ?
        characterMap[character] : '-';
    } else {
      return character;
    }
  }).join('');
}


module.exports = { 'toASCII': toASCII };
