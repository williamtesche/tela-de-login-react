const Sequelize = require('sequelize')
const sequelize = new Sequelize('willian', 'root',"", {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso")
}).catch(function(erro) {
    console.log("Falha ao se conectar: "+erro )
})

const Postagem = sequelize.define('postagens', {
    email:  {
        type: Sequelize.STRING
    },

    passoword: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})