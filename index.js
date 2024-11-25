const express = require('express'); // Corrigido para 'express'
const app = express();
const path = require('path'); // Corrigido para 'path'
const newsRoutes = require('./src/routes/news'); // Importar as rotas

app.set('view engine', 'ejs'); // Configurar EJS como motor de visualização
app.set('views', path.join(__dirname, 'src/views')); // Define o diretório das visualizações

app.use(express.static(path.join(__dirname, 'public'))); // Para arquivos estáticos

// Usar as rotas para notícias
app.use('/', newsRoutes); // Corrigido para 'newsRoutes'

// Iniciar o servidor
const PORTA = process.env.PORT || 3000; // Corrigido para 'PORT'
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`); // Corrigido para 'PORTA'
});