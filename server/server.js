const express = require('express')
const app = express()


app.get('/api/hello', //END POINT API (Application Programming Interface)
    function (req, res) //req - request (to co wyslano mi), res(response - odpowiedz do zwrocenia)
    {
        res.send('Hello World!')
    }
)

app.listen(3000)