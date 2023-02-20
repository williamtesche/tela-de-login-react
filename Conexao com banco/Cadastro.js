const Sequilize = require('sequiliza')
const sequilize = new Sequilize('cadastro', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

sequilize.authenticate().then(function(){
    console.log("conectado com sucesso")
}).catch(function(erro) {
    console.log("Falha ao se conectar: "+erro )
})