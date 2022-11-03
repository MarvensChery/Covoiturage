//
// Accès à la bd via Knex
//
const express = require('express');
const dal = require('./dal');

const app = express();

app.get('/obtenirOffres', async (req, res) => {
  const modele = await dal.obtenirOffres();
  res.send(modele);
});

app.get('/obtenirDemandes', async (req, res) => {
  const modele = await dal.obtenirDemandes();
  res.send(modele);
});

app.get('/ajouterDemande', async (req, res) => {
  const id = await dal.ajouterDemande({
    depart: 'Val-des-Lacs',
    destination: 'St-Donat',
    // date: Date(2022, 11, 15),
    // heure: Date(0, 0, 0, 10, 30),
    idUtilisateur: 3,
  });
  res.send(id);
});

app.listen(5000, () => {
  console.log('Serveur en exécution');
  console.log('http://localhost:5000');
});
