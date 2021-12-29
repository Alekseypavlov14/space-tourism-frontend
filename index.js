const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    // let filePath = path.join(__dirname, 'client', 'starter-code' + req.url)
    if (req.url === 'https://space-tourism-mentor.herokuapp.com/') filePath = path.join(__dirname, 'client', 'starter-code', 'index.html')

    if (/svg$/.test(req.url)){

        fs.readFile(filePath, (e, data) => {
            if (e) {
                throw e
            }
            
            res.writeHead(200, {
                'Content-Type': 'image/svg+xml'
            })
            res.end(data)
        })
    }

    fs.readFile(filePath, (e, data) => {
        if (e) {
            try{
                console.error(e)
            } catch{}
        }

        res.end(data)
    })
})

server.listen(3000, () => console.log("Server is working"))