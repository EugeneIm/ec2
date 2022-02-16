const express = require('express')
const { json } = require('express/lib/response')
const app = express()
app.use(express.json())

const foods = ["Pudding", "Turkey", "Gravy", "Chicken Pot Pie", "gingersnaps"]

app.get("/api/foods", (req, res) => {
  res.send(foods);
})

app.post("/api/foods", (req, res) => {
  const foodName = req.body.name
  foods.push(foodName)
  res.send(foodName);
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
