// src/server.js

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

// Conexão com o banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Definição do modelo Player (jogador)
const Player = sequelize.define('Player', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Sincroniza o modelo com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado e modelos sincronizados.');
    })
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Middleware para processar JSON
app.use(express.json());

// Rotas
const routes = require('./routes');
app.use('/', routes);

// Servidor escutando na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
