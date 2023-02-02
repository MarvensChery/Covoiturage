/* eslint-disable no-undef */
const knex = require('./dal');

test('Afficher information de la table offres', async () => {
  const rows = await knex.obtenirOffres();
  const date = new Date('2023-02-11');
  const date2 = new Date('2023-02-15');
  const date3 = new Date('2023-02-16');
  const rowAttendu = [{
    noOffres: 1000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'o', trajet: '',
  },
  {
    noOffres: 2000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date2, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'o', trajet: '',
  },
  {
    noOffres: 3000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date3, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'o', trajet: '',
  },
  {
    noOffres: 4000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'St-Donat', date, heure: '16:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'n', trajet: 'arret au hotel',
  },
  {
    noOffres: 5000, noUtilisateur: 30, destination: 'St-donat', depart: 'Val-des-Lacs', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'n', paiementVirementInteract: 'o', trajet: '',
  },
  {
    noOffres: 6000, noUtilisateur: 30, destination: 'Val-des-Lacs', depart: 'St-donat', date, heure: '17:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'n', paiementVirementInteract: 'o', trajet: 'arret au hotel',
  },
  {
    noOffres: 7000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'n', trajet: 'arret au hotel',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher les offres en ordre chronologique', async () => {
  const rows = await knex.obtenirOffresChronologique();
  const date = new Date('2023-02-11');
  const date2 = new Date('2023-02-15');
  const date3 = new Date('2023-02-16');
  const rowAttendu = [{
    noOffres: 4000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'St-Donat', date, heure: '16:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 5000, noUtilisateur: 30, destination: 'St-donat', depart: 'Val-des-Lacs', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 6000, noUtilisateur: 30, destination: 'Val-des-Lacs', depart: 'St-donat', date, heure: '17:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 7000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 1000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 2000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date2, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 3000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date3, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher les offres en ordre de destination', async () => {
  const rows = await knex.obtenirOffresDestination();
  const date = new Date('2023-02-11');
  const date2 = new Date('2023-02-15');
  const date3 = new Date('2023-02-16');
  const rowAttendu = [{
    noOffres: 5000, noUtilisateur: 30, destination: 'St-donat', depart: 'Val-des-Lacs', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 6000, noUtilisateur: 30, destination: 'Val-des-Lacs', depart: 'St-donat', date, heure: '17:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 7000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 1000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 2000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date2, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 3000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date3, heure: '10:00:00.0000000', nbPlaceOfferte: 5,
  },
  {
    noOffres: 4000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'St-Donat', date, heure: '16:00:00.0000000', nbPlaceOfferte: 5,
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher la table de reservation', async () => {
  const rows = await knex.obtenirReservation();
  const date = new Date('2023-02-15');
  const date3 = new Date('2023-02-11');
  const date4 = new Date('2023-02-16');
  const rowAttendu = [{
    noOffres: 2000, noUtilisateur: 40, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  },
  {
    noOffres: 3000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date4, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  },
  {
    noOffres: 1000, noUtilisateur: 30, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date3, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  },
  {
    noOffres: 3000, noUtilisateur: 40, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date4, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  }];

  // eslint-disable-next-line no-undef
  expect(rows).toEqual(rowAttendu);
});

test('Afficher information de l utilisateur 10', async () => {
  const rows = await knex.obtenirInformationUtilisateur(10);

  expect(rows).toEqual([{
    adresse: 'Val-des-Lacs', adresseCourriel: 'bob@gmail.com', noTelephone: '438-666-555', noUtilisateur: 10, nom: 'goble', prenom: 'bob',
  }]);
});

test('retourne vide si essaye afficher utilisateur existe pas', async () => {
  const rows = await knex.obtenirInformationUtilisateur(100);

  expect(rows).toEqual([]);
});

test('Afficher la table de deplacement demandee', async () => {
  const rows = await knex.obtenirDeplacementDemandee();
  const date = new Date('2023-10-11');
  const date2 = new Date('2023-12-15');
  const date3 = new Date('2023-12-11');
  const rowAttendu = [{
    noDemande: 100, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '11:30:00.0000000', noUtilisateur: 10,
  },
  {
    noDemande: 200, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '16:00:00.0000000', noUtilisateur: 20,
  },
  {
    noDemande: 300, destination: 'St-Donat', depart: 'Ste-Agathe', date: date3, heure: '15:00:00.0000000', noUtilisateur: 20,
  },
  {
    noDemande: 400, destination: 'St-Donat', depart: 'Ste-Agathe', date: date2, heure: '16:00:00.0000000', noUtilisateur: 20,
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher la table de deplacement demandee filtrer par destination Ste-Agathe', async () => {
  const rows = await knex.obtenirDeplacementDemandeeFiltreDestination('Ste-Agathe');
  const date = new Date('2023-10-11');
  const rowAttendu = [{
    noDemande: 100, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '11:30:00.0000000', noUtilisateur: 10,
  },
  {
    noDemande: 200, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '16:00:00.0000000', noUtilisateur: 20,
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher une table vide si donne destination qui existe pas', async () => {
  const rows = await knex.obtenirDeplacementDemandeeFiltreDestination('abc');

  expect(rows).toEqual([]);
});

test('Afficher la table de deplacement demandee filtrer par date le 2023-10-11', async () => {
  const date = new Date('2023-10-11');
  const rows = await knex.obtenirDeplacementDemandeeFiltreDate(date);
  const rowAttendu = [{
    noDemande: 100, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '11:30:00.0000000', noUtilisateur: 10,
  },
  {
    noDemande: 200, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '16:00:00.0000000', noUtilisateur: 20,
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher la table de deplacement demandee vide si donne une date qui est pas dans table', async () => {
  const date = new Date('2025-10-11');
  const rows = await knex.obtenirDeplacementDemandeeFiltreDate(date);

  expect(rows).toEqual([]);
});

test('Afficher la table de deplacement demandee de l utilisateur 20', async () => {
  const date = new Date('2023-10-11');
  const date2 = new Date('2023-12-15');
  const date3 = new Date('2023-12-11');
  const rows = await knex.obtenirDeplacementDemandeeUtilisateur(20);
  const rowAttendu = [{
    noDemande: 200, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '16:00:00.0000000', noUtilisateur: 20,
  },
  {
    noDemande: 300, destination: 'St-Donat', depart: 'Ste-Agathe', date: date3, heure: '15:00:00.0000000', noUtilisateur: 20,
  },
  {
    noDemande: 400, destination: 'St-Donat', depart: 'Ste-Agathe', date: date2, heure: '16:00:00.0000000', noUtilisateur: 20,
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher la table de deplacement demandee vide si donne un utilisateur qui existe pas', async () => {
  const rows = await knex.obtenirDeplacementDemandeeUtilisateur(60);

  expect(rows).toEqual([]);
});

test('Afficher Information de l utilisateur 10 avec son email ', async () => {
  const rows = await knex.obtenirInfoUtisateurEmail('bob@gmail.com');
  const rowAttendu = [{
    noUtilisateur: 10, nom: 'goble', prenom: 'bob', adresse: 'Val-des-Lacs', adresseCourriel: 'bob@gmail.com', noTelephone: '438-666-555',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher Information de l utilisateur vide si entre mauvais email ', async () => {
  const rows = await knex.obtenirInfoUtisateurEmail('sadasf');

  expect(rows).toEqual([]);
});

test('Afficher Information utilisateur 10 lorsqu il se connecte ', async () => {
  const rows = await knex.obtenirConnectionUtilisateur('bob@gmail.com', 'a');
  const rowAttendu = [{
    noUtilisateur: 10, nom: 'goble', prenom: 'bob', adresse: 'Val-des-Lacs', adresseCourriel: 'bob@gmail.com', noTelephone: '438-666-555',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher Information utilisateur vide lorque entre mauvais email et mdp', async () => {
  const rows = await knex.obtenirConnectionUtilisateur('sad', 'bgf');

  expect(rows).toEqual([]);
});

test('Afficher Information des offres que utilisateur 20 donne ', async () => {
  const rows = await knex.obtenirOffresDeUtilisateur(20);
  const date = new Date('2023-02-11');
  const rowAttendu = [{
    noOffres: 4000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'St-Donat', date, heure: '16:00:00.0000000', trajet: 'arret au hotel', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'n', paiementComptant: 'o',
  },
  {
    noOffres: 7000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', trajet: 'arret au hotel', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'n', paiementComptant: 'o',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher Information des offres vide si utilisateur donne pas offre ', async () => {
  const rows = await knex.obtenirOffresDeUtilisateur(40);

  expect(rows).toEqual([]);
});

test('Afficher une l offre 1000 qui est donner par utilisateur 10', async () => {
  const rows = await knex.obtenirOffresSpecifiqueDeUtilisateur(10, 1000);
  const date = new Date('2023-02-11');
  const rowAttendu = [{
    noOffres: 1000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher une l offre vide si existe pas', async () => {
  const rows = await knex.obtenirOffresSpecifiqueDeUtilisateur(10, 10000);

  expect(rows).toEqual([]);
});

test('Afficher information offre specifique 1000', async () => {
  const rows = await knex.obtenirInformationOffre(1000);
  const date = new Date('2023-02-11');
  const rowAttendu = [{
    noOffres: 1000, noUtilisateur: 10, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'o', trajet: '',
  }];
  expect(rows).toEqual(rowAttendu);
});

test('Afficher information offre specifique vide si existe pas', async () => {
  const rows = await knex.obtenirInformationOffre(10000);

  expect(rows).toEqual([]);
});

test('Afficher les reservations de utilisateur 40', async () => {
  const rows = await knex.obtenirReservationUtilisateur(40);
  const date2 = new Date('2023-02-15');
  const date3 = new Date('2023-02-16');
  const rowAttendu = [{
    noOffres: 2000, noReservation: 10, noUtilisateur: 40, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date2, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  },
  {
    noOffres: 3000, noReservation: 40, noUtilisateur: 40, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date: date3, heure: '10:00:00.0000000', trajet: '', nbPlaceOfferte: 5, cout: 5, paiementVirementInteract: 'o', paiementComptant: 'o',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher les reservations vide de utilisateur 20 car pas de reservation', async () => {
  const rows = await knex.obtenirReservationUtilisateur(20);

  expect(rows).toEqual([]);
});

test('Afficher information deplacement demande 100', async () => {
  const rows = await knex.obtenirDeplacementDemandeeSpecifique(100);
  const date = new Date('2023-10-11');
  const rowAttendu = [{
    noDemande: 100, noUtilisateur: 10, destination: 'Ste-Agathe', depart: 'Val-des-Lacs', date, heure: '11:30:00.0000000',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher information des offres donnée de utilisateur 20 ', async () => {
  const rows = await knex.obtenirOffreUtilisateur(20);
  const date = new Date('2023-02-11');
  const rowAttendu = [{
    noOffres: 4000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'St-Donat', date, heure: '16:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'n', trajet: 'arret au hotel',
  },
  {
    noOffres: 7000, noUtilisateur: 20, destination: 'Val-des-Lacs', depart: 'Ste-Agathe', date, heure: '10:00:00.0000000', nbPlaceOfferte: 5, cout: 5, paiementComptant: 'o', paiementVirementInteract: 'n', trajet: 'arret au hotel',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher information des offres donnée vide utilisateur 40 qui donne aucune offre ', async () => {
  const rows = await knex.obtenirOffreUtilisateur(40);

  expect(rows).toEqual([]);
});

test('Afficher liste des utilisateurs qui ont reserver offre 1000', async () => {
  const rows = await knex.obtenirReservationOffreUtilisateur(1000);
  const rowAttendu = [{
    noUtilisateur: 30, nom: 'lee', prenom: 'simon',
  }];

  expect(rows).toEqual(rowAttendu);
});

test('Afficher liste des utilisateurs vide pour offre 7000 qui a pas de reservation', async () => {
  const rows = await knex.obtenirReservationOffreUtilisateur(7000);

  expect(rows).toEqual([]);
});
