import express from 'express'
const app = express()
const port = 3000
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Server running on the port: http://localhost:${port}`)
}) 