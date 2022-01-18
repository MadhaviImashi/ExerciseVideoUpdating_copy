let csvToJson = require('convert-csv-to-json')

let fileInputName = 'matchReport.csv'
let fileOutputName = 'matchReport.json'

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName)

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)
console.log('after calling method...')

// generate JSON FILE by executing: 
// cd src/convertCsvToJson
// node convertCsvToJson.js