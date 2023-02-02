<<<<<<< HEAD
/* eslint-disable max-len */
const knex = require('knex')({
  client: 'mssql',
  connection: {
    host: '127.0.0.1',
    user: 'sa',
    password: '123',
    database: 'Covoiturage',
    options: {
      port: 1433,
      encrypt: false,
      trustServerCertificate: true,
    },
  },
});

// -- Afficher les offres
function obtenirOffres() {
  return knex('Offres')
    .select('*')
    .where('date', '>=', new Date().toLocaleDateString('en-CA'));
}

// Afficher Offres chronologique
function obtenirOffresChronologique() {
  return knex('Offres')
    .select('noOffres', 'noUtilisateur', 'destination', 'depart', 'date', 'heure', 'nbPlaceOfferte')
    .where('date', '>=', new Date().toLocaleDateString('en-CA'))
    .orderBy('date', 'heure');
}

// Afficher Offres ordre de destination
function obtenirOffresDestination() {
  return knex('Offres')
    .select('noOffres', 'noUtilisateur', 'destination', 'depart', 'date', 'heure', 'nbPlaceOfferte')
    .where('date', '>=', new Date().toLocaleDateString('en-CA'))
    .orderBy('destination');
}

function obtenirReservation() {
  return knex('Reservations')
    .join('Offres', 'Reservations.noOffres', 'Offres.noOffres')
    .select('Offres.noOffres', 'Reservations.noUtilisateur', 'destination', 'depart', 'date', 'heure', 'trajet', 'nbPlaceOfferte', 'cout', 'paiementVirementInteract', 'paiementComptant');
}

function obtenirInformationUtilisateur(noUtilisateur) {
  return knex('Utilisateurs')
    .select('noUtilisateur', 'nom', 'prenom', 'adresse', 'adresseCourriel', 'noTelephone')
    .where('noUtilisateur', noUtilisateur);
}

function obtenirDeplacementDemandee() {
  return knex('DeplacementDemandes')
    .select('*')
    .where('date', '>=', new Date().toLocaleDateString('en-CA'));
}

// Afficher liste des deplacement demandee filtree par destination
function obtenirDeplacementDemandeeFiltreDestination(destinationDemande) {
  return knex('DeplacementDemandes')
    .select('*')
    .where('date', '>=', new Date().toLocaleDateString('en-CA')).andWhere('destination', destinationDemande);
}

// Afficher liste des deplacement demandee filtree par date
function obtenirDeplacementDemandeeFiltreDate(uneDate) {
  return knex('DeplacementDemandes')
    .select('*')
    .where('date', '>=', new Date().toLocaleDateString('en-CA')).andWhere('date', uneDate);
}

// Afficher liste des deplacement demandee de l'utilisateur
function obtenirDeplacementDemandeeUtilisateur(noUtilisateur) {
  return knex('DeplacementDemandes')
    .select('*')
    .where('noUtilisateur', noUtilisateur);
}

// Afficher utilisateur info avec email
function obtenirInfoUtisateurEmail(email) {
  return knex('Utilisateurs')
    .select('noUtilisateur', 'nom', 'prenom', 'adresse', 'adresseCourriel', 'noTelephone')
    .where('adresseCourriel', email);
}

// Utilisateur se connecte
function obtenirConnectionUtilisateur(email, mdp) {
  return knex('Utilisateurs')
    .select('noUtilisateur', 'nom', 'prenom', 'adresse', 'adresseCourriel', 'noTelephone')
    .where('adresseCourriel', email).andWhere('mdp', mdp);
}

// Afficher information de l'offre offerte de l'utilisateur
function obtenirOffresDeUtilisateur(noUtilisateur) {
  return knex('Offres')
    .select('noOffres', ' noUtilisateur', 'destination', 'depart', 'date', 'heure', 'trajet', 'nbPlaceOfferte', 'cout', 'paiementVirementInteract', 'paiementComptant')
    .where('noUtilisateur', noUtilisateur);
}

// Afficher information de l'offre offerte de l'utilisateur sur une offre specifique
function obtenirOffresSpecifiqueDeUtilisateur(noUtilisateur, noOffre) {
  return knex('Offres')
    .select('noOffres', 'noUtilisateur', 'destination', 'depart', 'date', 'heure', 'trajet', 'nbPlaceOfferte', 'cout', 'paiementVirementInteract', 'paiementComptant')
    .where('noUtilisateur', noUtilisateur).andWhere('noOffres', noOffre);
}

// Ajouter ######################################################

// Afficher information d'un offre
function obtenirInformationOffre(noOffre) {
  return knex('Offres')
    .select('noOffres', 'noUtilisateur', 'destination', 'depart', 'date', 'heure', 'trajet', 'nbPlaceOfferte', 'cout', 'paiementVirementInteract', 'paiementComptant')
    .where('noOffres', noOffre);
}

function obtenirReservationUtilisateur(noUtilisateur) {
  return knex('Offres')
    .join('Reservations', 'Reservations.noOffres', 'Offres.noOffres')
    .select('Reservations.noOffres', 'noReservation', 'Reservations.noUtilisateur', 'destination', 'depart', 'date', 'heure', 'trajet', 'nbPlaceOfferte', 'cout', 'paiementVirementInteract', 'paiementComptant')
    .where('Reservations.noUtilisateur', noUtilisateur);
}

function obtenirDeplacementDemandeeSpecifique(noDemande) {
  return knex('DeplacementDemandes')
    .select('*')
    .where('noDemande', noDemande);
}

function obtenirOffreUtilisateur(noUtilisateur) {
  return knex('Offres')
    .select('*')
    .where('noUtilisateur', noUtilisateur);
}

// Avoir liste Reservation d une offre
function obtenirReservationOffreUtilisateur(noOffres) {
  return knex('Reservations')
    .join('Utilisateurs', 'Utilisateurs.noUtilisateur', 'Reservations.noUtilisateur')
    .select('Reservations.noUtilisateur', 'nom', 'prenom')
    .where('noOffres', noOffres);
}

// ----------------------Insertion----------------------------

// Inscrire un Utilisateur
function ajouterUtilisateur(demande) {
  knex('Utilisateurs').insert(demande)
    .returning('noUtilisateur')
    .then((noUtilisateur) => {
      console.log(`inserer${noUtilisateur}`);
    });
}

// console.log(ajouterUtilisateur({noUtilisateur:50,nom:'Sasha',prenom:'Sache',adresse:'Val-des-Lacs',adresseCourriel:'sasha@gmail.com',noTelephone:'514-222-555',mdp:'a'}))

// Inscrire un demande de deplacement
function ajouterDemandeDeplacement(demande) {
  knex('DeplacementDemandes').insert(demande)
    .returning('noDemande')
    .then((noDemande) => {
      console.log(`inserer${noDemande}`);
    });
}

// ajouterDemandeDeplacement({noDemande:500,destination:'Ste-Agathe',depart:'Ste-Agathe',date:'2023-10-16',heure:'17;00',noUtilisateur:10})

// Ajouter une offres
function ajouterOffres(demande) {
  knex('Offres').insert(demande)
    .returning('noOffres')
    .then((noOffres) => {
      console.log(`inserer${noOffres}`);
    });
}

// ajouterOffres({noOffres:8000,noUtilisateur:40,destination:'St-donat',depart:'Ste-Agathe',date:'2023-10-11',heure:'15:00',trajet:'',nbPlaceOfferte:8,cout:6,paiementVirementInteract:'o',paiementComptant:'o'})

// Reserver un deplacement
function ajouterReservations(demande) {
  knex('Reservations').insert(demande)
    .returning('noReservation')
    .then((noReservation) => {
      console.log(`inserer${noReservation}`);
    });
}

// ajouterReservations({noReservation:50,noOffres:7000,noUtilisateur:10})

// ------------------Modification---------------------------------------

// Changer le profil utilisateur le nom
function modifierUtilisateurNom(idDemande, nom) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande)
    .update('nom', nom).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierUtilisateurNom(50,'Bob')

// Changer le profil utilisateur le prenom
function modifierUtilisateurPrenom(idDemande, prenom) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande)
    .update('prenom', prenom).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierUtilisateurPrenom(50,'Bobette')

// Changer le profil utilisateur adresse
function modifierUtilisateurAdresse(idDemande, adresse) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande)
    .update('adresse', adresse).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierUtilisateurAdresse(50,'St-Donat')

// Changer le profil utilisateur l'adresse courriel
function modifierUtilisateurCourriel(idDemande, adresseCourriel) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande)
    .update('adresseCourriel', adresseCourriel).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierUtilisateurCourriel(50,'b@gmail.com')

// Changer le profil utilisateur le numero telephone

function modifierUtilisateurTelephone(idDemande, telephone) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande)
    .update('noTelephone', telephone).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierUtilisateurTelephone(50,'514-333-888')

// Modifier le mot de pass utilisateur
function modifierUtilisateurMdp(idDemande, mdp) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande)
    .update('mdp', mdp).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierUtilisateurMdp(50,'b')

// modifier un offre de l utilisateur destination
function modifierOffresDestination(idDemande, destination) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('destination', destination).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresDestination(8000,'Ste-Agathe')

// modifier un offre de l utilisateur depart
function modifierOffresDepart(idDemande, depart) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('depart', depart).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresDepart(8000,'St-Donat')

// modifier un offre de l utilisateur date
function modifierOffresDate(idDemande, date) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('date', date).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresDate(8000,'2023-12-20')

// modifier un offre de l utilisateur heure
function modifierOffresHeure(idDemande, heure) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('heure', heure).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresHeure(8000,'17:00')

// modifier un offre de l utilisateur information du trajet
function modifierOffresTrajet(idDemande, trajet) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('trajet', trajet).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresTrajet(8000,'somewhere')

// modifier un offre de l utilisateur nombre de place offerte
function modifierOffresnbPlace(idDemande, nbPlace) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('nbPlaceOfferte', nbPlace).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresnbPlace(8000,9)

// modifier un offre de l utilisateur le cout
function modifierOffresCout(idDemande, cout) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('cout', cout).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresCout(8000,5)

// modifier un offre de l utilisateur paiement par virement
function modifierOffresVirement(idDemande, paiementVirement) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('paiementVirementInteract', paiementVirement).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresVirement(8000,'n')

// modifier un offre de l utilisateur paiement comptant
function modifierOffresComptant(idDemande, paiementComptant) {
  knex('Offres')
    .where('noOffres', idDemande)
    .update('paiementComptant', paiementComptant).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierOffresComptant(8000,'n')

// modifier deplacements demandes destination
function modifierDeplacementDemandeeDestination(idDemande, destination) {
  knex('DeplacementDemandes')
    .where('noDemande', idDemande)
    .update('destination', destination).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierDeplacementDemandeeDestination(500,'Val-des-Lacs')

// modifier deplacements demandes depart
function modifierDeplacementDemandeeDepart(idDemande, depart) {
  knex('DeplacementDemandes')
    .where('noDemande', idDemande)
    .update('depart', depart).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierDeplacementDemandeeDepart(500,'St-Donat')

// modifier deplacements demandes date
function modifierDeplacementDemandeeDate(idDemande, date) {
  knex('DeplacementDemandes')
    .where('noDemande', idDemande)
    .update('date', date).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierDeplacementDemandeeDate(500,'2024-11-15')

// modifier deplacements demandes heure
function modifierDeplacementDemandeeHeure(idDemande, heure) {
  knex('DeplacementDemandes')
    .where('noDemande', idDemande)
    .update('heure', heure).then((countRows) => {
      console.log(`update nbLigne: ${countRows}`);
    });
}

// modifierDeplacementDemandeeHeure(500,'18:00')

// ---------------------Suppression------------------------

// Supprimer une offres
function supprimerOffres(idDemande) {
  knex('Offres')
    .where('noOffres', idDemande).del()
    .then((countRows) => {
      console.log(`delete nbLigne: ${countRows}`);
    });
}

// supprimerOffres(8000)

// Supprimer une offres
function supprimerReservation(idReservation, idUtilisateur) {
  knex('Reservations')
    .where('noReservation', idReservation).andWhere('noUtilisateur', idUtilisateur).del()
    .then((countRows) => {
      console.log(`delete nbLigne: ${countRows}`);
    });
}

// supprimerReservation(50,10)

// Supprimer un Utilisateur
function supprimerUtilisateur(idDemande) {
  knex('Utilisateurs')
    .where('noUtilisateur', idDemande).del()
    .then((countRows) => {
      console.log(`delete nbLigne: ${countRows}`);
    });
}

// supprimerUtilisateur(50)

// Supprimer un deplacement demandee
function supprimerDemandeDeplacement(idDemande) {
  knex('DeplacementDemandes')
    .where('noDemande', idDemande).del()
    .then((countRows) => {
      console.log(`delete nbLigne: ${countRows}`);
    });
}

// supprimerDemandeDeplacement(500)

module.exports = {
  obtenirOffres,
  obtenirOffresChronologique,
  obtenirOffresDestination,
  obtenirReservation,
  obtenirInformationUtilisateur,
  obtenirDeplacementDemandee,
  obtenirDeplacementDemandeeFiltreDestination,
  obtenirDeplacementDemandeeFiltreDate,
  obtenirDeplacementDemandeeUtilisateur,
  obtenirInfoUtisateurEmail,
  obtenirConnectionUtilisateur,
  obtenirOffresDeUtilisateur,
  obtenirOffresSpecifiqueDeUtilisateur,
  ajouterUtilisateur,
  ajouterDemandeDeplacement,
  ajouterOffres,
  ajouterReservations,
  modifierUtilisateurNom,
  modifierUtilisateurPrenom,
  modifierUtilisateurAdresse,
  modifierUtilisateurCourriel,
  modifierUtilisateurTelephone,
  modifierUtilisateurMdp,
  modifierOffresDestination,
  modifierOffresDepart,
  modifierOffresDate,
  modifierOffresHeure,
  modifierOffresTrajet,
  modifierOffresnbPlace,
  modifierOffresCout,
  modifierOffresVirement,
  modifierOffresComptant,
  modifierDeplacementDemandeeDestination,
  modifierDeplacementDemandeeDepart,
  modifierDeplacementDemandeeDate,
  modifierDeplacementDemandeeHeure,
  supprimerOffres,
  supprimerReservation,
  supprimerUtilisateur,
  supprimerDemandeDeplacement,
  obtenirInformationOffre,
  obtenirReservationUtilisateur,
  obtenirDeplacementDemandeeSpecifique,
  obtenirOffreUtilisateur,
  obtenirReservationOffreUtilisateur,
=======
// const knex = require('knex')({
//   client: 'mssql',
//   connection: {
//     host: '127.0.0.1\\sqlexpress',
//     user: 'xxx',
//     password: 'xxx',
//     database: 'covoiturage',
//     options: {
//       enableArithAbort: false,
//     },
//   },
//   pool: { min: 0, max: 7 },
// });

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

async function obtenirOffre(idOffre) {
  const resultat = await knex('offres')
    .select('*')
    .where('idOffre', idOffre);

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
  const resultat = 1;
  knex('demandes').insert(demande)
    .then((id) => {
      console.log(id);
    });
  return resultat;
}

module.exports = {
  obtenirOffres,
  obtenirOffre,
  obtenirDemandes,
  ajouterDemande,
>>>>>>> Dev
};
