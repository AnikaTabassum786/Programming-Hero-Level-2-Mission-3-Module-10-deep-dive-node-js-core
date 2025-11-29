const path = require('path');

console.log('Current file Info:\n')
console.log('filename: ',__filename);
console.log('Directory:',__dirname);

console.log('============')

const filePath = '/anika/documents/nextLevel.pdf'

console.log('analyze Path:', filePath,'\n')
console.log('Directory:', path.dirname(filePath))
console.log('Base name:', path.basename(filePath))
console.log('File Extension', path.extname(filePath))
console.log('File Name', path.basename(filePath,path.extname(filePath)))

console.log('---------------------------')

const parsed = path.parse(filePath)
console.log('Parsed path object:',parsed)
console.log('formatted path:', path.format(parsed))