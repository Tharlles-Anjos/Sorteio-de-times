// src/routes/index.js

const express = require('express');
const router = express.Router();
const { Player } = require('../server'); // Importa o modelo Player do server.js

// Rota para adicionar um jogador
router.post('/adicionar-jogador', async (req, res) => {
    const { name, age, position } = req.body;

    try {
        const novoJogador = await Player.create({ name, age, position });
        res.status(201).json(novoJogador);
    } catch (err) {
        console.error('Erro ao adicionar jogador:', err);
        res.status(500).json({ error: 'Erro ao adicionar jogador.' });
    }
});

// Rota para listar todos os jogadores
router.get('/listar-jogadores', async (req, res) => {
    try {
        const jogadores = await Player.findAll();
        res.status(200).json(jogadores);
    } catch (err) {
        console.error('Erro ao buscar jogadores:', err);
        res.status(500).json({ error: 'Erro ao buscar jogadores.' });
    }
});

module.exports = router;


