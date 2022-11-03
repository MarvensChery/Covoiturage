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

async function obtenirOffres() {
  const resultat = await knex('offres')
    .select('*')
    .orderBy('date');

  return resultat;
}

async function obtenirDemandes() {
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

function ajouterDemande(demande) {
  let resultat = 1;
  knex('demandes').insert(demande)
    .then((id) => {
      console.log(id);
    });
  return resultat;
}

module.exports = {
  obtenirOffres,
  obtenirDemandes,
  ajouterDemande,
};
