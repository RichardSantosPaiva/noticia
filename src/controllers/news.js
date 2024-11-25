const Noticia = require('../models/news.js');

exports.obterNoticias = async (req, res) => {
  const noticias = await Noticia.obterNoticia(); // Esperar pela leitura das notícias

  // Renderizar a view com as notícias passadas como objeto
  res.render('news/index.ejs', { noticias });
};