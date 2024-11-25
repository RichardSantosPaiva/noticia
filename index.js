const express = require('express');
const app = express();
const path = require('path');
const newsRoutes = require('./src/routes/news'); // Importar as rotas

app.set('view engine', 'ejs'); // Configurar EJS como motor de visualização
app.set('views', path.join(__dirname, 'src/views')); // Definir o diretório das views

app.use(express.static(path.join(__dirname, 'public'))); // Para arquivos estáticos

// Usar as rotas para notícias
app.use('/', newsRoutes); // As rotas começam aqui

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});