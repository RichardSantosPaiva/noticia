const fs = require('fs').promises; // Usar promises

async function obterNoticia() {
  try {
    const data = await fs.readFile('./data/data.json', 'utf8'); // Caminho correto para o JSON
    const jsonData = JSON.parse(data);
    return jsonData.noticias; // Retornar o array de notícias
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return []; // Retornar um array vazio em caso de erro
  }
}

module.exports = { obterNoticia };