// Run with `npx nodemon path/to/script.js --ignore 'data_w.json'`

const fs = require('fs')
const path = require('path')

const data = {
  'title': 'Test2',
}

fs.writeFile(path.join(__dirname, './dummy-data/data_w.json'), JSON.stringify(data), (err) => {
  console.log(err ? err : 'Write finished.')
})
