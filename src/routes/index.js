// src/routes/index.js

const express = require('express');
const router = express.Router();
const { Player } = require('../server'); // Importa o modelo Player do server.js

// Rota para adicionar um jogador
router.post('/adicionar-jogador', async (req, res) => {
    const { name } = req.body;

    try {
        const novoJogador = await Player.create({ name });
        res.status(201).json(novoJogador);
    } catch (err) {
        console.error('Erro ao adicionar jogador:', err);
        res.status(500).json({ error: 'Erro ao adicionar jogador.' });
    }
});

module.exports = router;

