const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');

// Definindo a rota para obter notícias
router.get('/noticias', newsController.obterNoticias);

// Adicionando uma rota para o caminho raiz, se necessário
router.get('/', (req, res) => {
  res.redirect('/noticias'); // Redireciona para a página de notícias
});

module.exports = router;