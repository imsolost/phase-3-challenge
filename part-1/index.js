const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use( bodyParser.json() )

app.get('/api/supported-operations', (req, res) => {
  res.send({"/": "division",
           "+": "addition",
           "-": "subtration",
           "*": "multiplication"})
})

app.get('/api/square', (req, res) => {
  const num = req.query.number
  res.send({"result": num * num})
})

app.post('/api/compute', (req, res) => {
  const operator = req.body.operator
  const operands = req.body.operands

  if (operator === '-') {
    res.send({"result": operands[0] - operands[1]})
  }
  if (operator === '*') {
    res.send({"result": operands[0] * operands[1]})
  }
  if (operator === '/') {
    res.send({"result": operands[0] / operands[1]})
  }
  if (operator === '+') {
    res.send({"result": operands[0] + operands[1]})
  }
  else {
    res.status(404).send({'error': `invalid operator ${operator}. Valid operators are /, +, -, *`})
  }
})

app.listen( 3000, () => {
  console.log('API is listening on port 3000!')
})
