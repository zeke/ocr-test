const path = require('path')
const Tesseract = require('tesseract.js')

const file = require('fs').readFileSync(path.join(__dirname, 'list.jpg'))

Tesseract.recognize(file)
  .progress(message => console.log(message))
  .catch(err => console.error(err))
  .then(result => console.log(result))
  .finally(resultOrError => console.log(resultOrError))
