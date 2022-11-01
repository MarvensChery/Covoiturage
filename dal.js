const knex = require('knex')({
  client: 'mssql',
  connection: {
    host: 'sv55.cmaisonneuve.qc.ca',
    user: '3D1',
    password: 'Projet3689',
    database: 'covoiturage',
    options: {
      enableArithAbort: false,
    },
  },
  pool: { min: 0, max: 7 },
});

async function offres() {
  const resultat = await knex('offres')
    .select('*')
    .orderBy('date');

  return resultat;
}

async function demandes() {
  const resultat = await knex('utilisateurs')
    .join('demandes', 'utilisateurs.idUtilisateur', 'demandes.idUtilisateur')
    .select('utilisateurs.idUtilisateur', 'nomFamille', 'prenom', 'depart', 'destination')
    .orderBy('date');

  const retour = [];
  let idCourant = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const ligne of resultat) {
    if (ligne.idUtilisateur !== idCourant) {
      retour.push({
        idUtilisateur: ligne.idUtilisateur,
        nomFamille: ligne.nomFamille,
        prenom: ligne.prenom,
        demandes: [],
      });
    }
    retour[retour.length - 1].demandes.push({
      depart: ligne.depart,
      destination: ligne.destination,
    });

    idCourant = ligne.idUtilisateur;
  }

  return retour;
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

exports.offres = offres;
exports.demandes = demandes;
exports.elementsCompetencesDunProgramme = elementsCompetencesDunProgramme;
