const path = require('path');

module.exports = {
  mode: 'development',
  entry: './path/to/your/entry/file.js', // Changez cela selon le chemin de votre fichier d'entrée
  output: {
    filename: 'main.js', // Nom du fichier compilé
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
  },
};
