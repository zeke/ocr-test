const path = require('path')
const Tesseract = require('tesseract.js')

Tesseract.recognize(path.join(__dirname, 'list.jpg'))
  .progress(message => console.log(message))
  .catch(err => console.error(err))
  .then(result => console.log(result))
  .finally(resultOrError => console.log(resultOrError))
