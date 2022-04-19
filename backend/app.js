const express = require('express')
const app = express()

// NAO ESQUECER DE DAR node server.js PRA STARTA SERVIDOR!!!!!


//importa conexao com MongoDB
const archivoBD = require('./conectar')



app.get('/', (req, res) => {
    res.end('Bem vindo ao servidor!!')
})

// CONFIGURAR SERVER BASICO
app.listen(5000, function() {
    console.log('servidor on')
})