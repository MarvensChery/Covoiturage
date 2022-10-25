const knex = require('knex')({
  client: 'mssql',
  connection: {
    host: 'sv55.cmaisonneuve.qc.ca',
    user: '3D1',
    password: 'Projet3689',
    database: 'college',
    options: {
      enableArithAbort: false,
    },
  },
  pool: { min: 0, max: 7 },
});

async function competencesDunProgramme(idProgramme) {
  const resultat = await knex('competences')
    .select('idProgramme', 'code', 'enonce')
    .where({
      idProgramme,
    })
    .orderBy('code');

  return resultat;
}

async function elementsCompetencesDunProgramme(idProgramme) {
  const resultat = await knex('competences')
    .join('elementCompetences', 'competences.id', 'elementCompetences.idCompetence')
    .select('idProgramme', 'code', 'enonce', 'no', 'element')
    .where({
      idProgramme,
    })
    .orderBy('code');

  return resultat;
}

exports.competencesDunProgramme = competencesDunProgramme;
exports.elementsCompetencesDunProgramme = elementsCompetencesDunProgramme;
