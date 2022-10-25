//
// Accès à la bd via Knex
//
const express = require('express');
const dal = require('./dal');

const app = express();

app.get('/competences-programme', async (req, res) => {
  const idProgramme = Number(req.query.id);
  const modele = await dal.competencesDunProgramme(idProgramme);
  res.send(modele);
});

app.get('/elements-competences-programme', async (req, res) => {
  const idProgramme = Number(req.query.id);
  const modele = await dal.elementsCompetencesDunProgramme(idProgramme);
  res.send(modele);
});

app.listen(5000, () => {
  console.log('Serveur en exécution');
  console.log('http://localhost:5000');
});
