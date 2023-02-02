/* eslint-disable radix */
/* eslint-disable consistent-return */
//
// Accès à la bd via Knex
//
const express = require('express');
// eslint-disable-next-line import/order
const knex = require('./dal');
const path = require('path');

const app = express();
app.use(express.static('HtmlCovoiturage'));
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));

// -- Afficher les offres
// eslint-disable-next-line consistent-return
app.get('/covoiturage/offres', async (requete, reponse) => {
  try {
    const rows = await knex.obtenirOffresChronologique();

    const nouveauTab = rows.map((r) => ({
      noOffres: r.noOffres,
      noUtilisateur: r.noUtilisateur,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      nbPlaceOfferte: r.nbPlaceOfferte,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

app.get('/covoiturage/offresDetailer', async (requete, reponse) => {
  try {
    const rows = await knex.obtenirOffres();

    const nouveauTab = rows.map((r) => ({
      noOffres: r.noOffres,
      noUtilisateur: r.noUtilisateur,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      trajet: r.trajet,
      nbPlaceOfferte: r.nbPlaceOfferte,
      cout: r.cout,
      paiementVirementInteract: r.paiementVirementInteract,
      paiementComptant: r.paiementComptant,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

app.get('/covoiturage/offresUtilisateur/:id', async (requete, reponse) => {
  const noUtilisateur = requete.params.id;
  try {
    const rows = await knex.obtenirOffreUtilisateur(noUtilisateur);

    const nouveauTab = rows.map((r) => ({
      noOffres: r.noOffres,
      noUtilisateur: r.noUtilisateur,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      nbPlaceOfferte: r.nbPlaceOfferte,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

app.get('/covoiturage/infoOffre/:id', async (requete, reponse) => {
  const noOffre = requete.params.id;
  try {
    const rows = await knex.obtenirInformationOffre(noOffre);

    const nouveauTab = rows.map((r) => ({
      noOffres: r.noOffres,
      noUtilisateur: r.noUtilisateur,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      trajet: r.trajet,
      nbPlaceOfferte: r.nbPlaceOfferte,
      cout: r.cout,
      paiementVirementInteract: r.paiementVirementInteract,
      paiementComptant: r.paiementComptant,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

app.get('/covoiturage/ReservationUtilisateur/:id', async (requete, reponse) => {
  const noUtilisateur = requete.params.id;
  try {
    const rows = await knex.obtenirReservationUtilisateur(noUtilisateur);

    const nouveauTab = rows.map((r) => ({
      noOffres: r.noOffres,
      noReservation: r.noReservation,
      noUtilisateur: r.noUtilisateur,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      trajet: r.trajet,
      nbPlaceOfferte: r.nbPlaceOfferte,
      cout: r.cout,
      paiementVirementInteract: r.paiementVirementInteract,
      paiementComptant: r.paiementComptant,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

app.get('/covoiturage/ListeReservationOffre/:id', async (requete, reponse) => {
  const noOffres = requete.params.id;
  try {
    const rows = await knex.obtenirReservationOffreUtilisateur(noOffres);

    const nouveauTab = rows.map((r) => ({
      noUtilisateur: r.noUtilisateur,
      nom: r.nom,
      prenom: r.prenom,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

// Afficher la liste des deplacement demande de utilisateur
app.get('/covoiturage/demandeDemandeeUtilisateur/:id', async (requete, reponse) => {
  const noUtilisateur = requete.params.id;
  try {
    const rows = await knex.obtenirDeplacementDemandeeUtilisateur(noUtilisateur);
    const nouveauTab = rows.map((r) => ({
      noDemande: r.noDemande,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      noUtilisateur: r.noUtilisateur,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

// Afficher info deplacement demande specifique utilisateur
app.get('/covoiturage/demandeDemandee', async (requete, reponse) => {
  try {
    const rows = await knex.obtenirDeplacementDemandee();
    const nouveauTab = rows.map((r) => ({
      noDemande: r.noDemande,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      noUtilisateur: r.noUtilisateur,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

// Afficher info deplacement demande specifique utilisateur
app.get('/covoiturage/demandeDemandeeUtilisateurSpecifique/:id', async (requete, reponse) => {
  const noDemande = requete.params.id;
  try {
    const rows = await knex.obtenirDeplacementDemandeeSpecifique(noDemande);
    const nouveauTab = rows.map((r) => ({
      noDemande: r.noDemande,
      destination: r.destination,
      depart: r.depart,
      date: r.date.toLocaleDateString('en-CA'),
      heure: r.heure.substring(0, 5),
      noUtilisateur: r.noUtilisateur,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

// Afficher utilisateur info avec noUtilisateur
app.get('/covoiturage/infoUtilisateur/:id', async (requete, reponse) => {
  const noUtilisateur = requete.params.id;
  const rows = await knex.obtenirInformationUtilisateur(noUtilisateur);

  try {
    const nouveauTab = rows.map((r) => ({
      noUtilisateur: r.noUtilisateur,
      nom: r.nom,
      prenom: r.prenom,
      adresse: r.adresse,
      adresseCourriel: r.adresseCourriel,
      noTelephone: r.noTelephone,
    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

// Utilisateur se connecte
// eslint-disable-next-line consistent-return
app.get('/covoiturage/connectionUtilisateur/:id/:id2', async (requete, reponse) => {
  const email = requete.params.id;
  const mdp = requete.params.id2;
  try {
    const rows = await knex.obtenirConnectionUtilisateur(email, mdp);

    const nouveauTab = rows.map((r) => ({
      noUtilisateur: r.noUtilisateur,
      nom: r.nom,
      prenom: r.prenom,
      adresse: r.adresse,
      adresseCourriel: r.adresseCourriel,
      noTelephone: r.noTelephone,

    }));
    console.log(nouveauTab);
    return reponse.json(nouveauTab);
  } catch (error) {
    reponse.status(500).json();
  }
});

// ############################# route pour les utilisateurs
// Afficher la page accueil
app.get('/', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/Accueil.html'));
});

app.get('/covoiturage/inscription', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/inscription.html'));
});

app.get('/covoiturage/connexion', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/connexion.html'));
});

app.get('/covoiturage/PageUtilisateur/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/PageUtilisateur.html'));
});

app.get('/covoiturage/PageOffres/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/listedeplacementoffert.html'));
});

app.get('/covoiturage/ConsulterOffre/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/ConsulterOffreSpecifique.html'));
});

app.get('/covoiturage/FaireUneReservation/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/FaireReservation.html'));
});

app.get('/covoiturage/ListeReservation/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/ListeReservation.html'));
});

app.get('/covoiturage/FaireUneOffre/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/offrirdeplacement.html'));
});

app.get('/covoiturage/ModifierMotDePasse/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/ChangerMotDePasse.html'));
});

app.get('/covoiturage/ListeDeplacementDemandeeUtilisateur/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/ListeDeplacementDemande.html'));
});

app.get('/covoiturage/ConsulterDeplacementDemandeeSpecifique/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/ConsulterDemandeSpecifique.html'));
});

app.get('/covoiturage/ListeVosOffres/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/vosoffres.html'));
});

app.get('/covoiturage/ConsulterVosOffres/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/Consultervosoffresdetail.html'));
});

app.get('/covoiturage/ListeDeplacementDemandee/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/ListeDeplacementDemandeGeneral.html'));
});

app.get('/covoiturage/FaireDeplacementDemandee/:id', async (requete, reponse) => {
  reponse.sendFile(path.join(__dirname, 'HtmlCovoiturage/FaireDeplacementDemandee.html'));
});

// Route Pour modifier Utilisateur
app.post('/covoiturage/modifierNomUtilisateur', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noUtilisateur: parseInt(req.body.noUtilisateur),
        nom: req.body.nom,
      };

      await knex.modifierUtilisateurNom(etudiant.noUtilisateur, etudiant.nom);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierPrenomUtilisateur', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noUtilisateur: parseInt(req.body.noUtilisateur),
        prenom: req.body.prenom,
      };

      await knex.modifierUtilisateurPrenom(etudiant.noUtilisateur, etudiant.prenom);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierAdresseUtilisateur', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noUtilisateur: parseInt(req.body.noUtilisateur),
        adresse: req.body.adresse,
      };

      await knex.modifierUtilisateurAdresse(etudiant.noUtilisateur, etudiant.adresse);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierAdresseCourrielUtilisateur', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noUtilisateur: parseInt(req.body.noUtilisateur),
        adresseCourriel: req.body.adresseCourriel,
      };

      await knex.modifierUtilisateurCourriel(etudiant.noUtilisateur, etudiant.adresseCourriel);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierNoTelephoneUtilisateur', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noUtilisateur: parseInt(req.body.noUtilisateur),
        noTelephone: req.body.noTelephone,
      };

      await knex.modifierUtilisateurTelephone(etudiant.noUtilisateur, etudiant.noTelephone);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierMotDePasse', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noUtilisateur: parseInt(req.body.noUtilisateur),
        mdp: req.body.mdp,
      };

      await knex.modifierUtilisateurMdp(etudiant.noUtilisateur, etudiant.mdp);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Route Pour Modifier deplacement demande
// modifier destination deplacement demande
app.post('/covoiturage/modifierDemandeeDestination', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noDemande: req.body.noDemande,
        destination: req.body.destination,
      };

      await knex.modifierDeplacementDemandeeDestination(etudiant.noDemande, etudiant.destination);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierDemandeeDepart', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noDemande: req.body.noDemande,
        depart: req.body.depart,
      };

      await knex.modifierDeplacementDemandeeDepart(etudiant.noDemande, etudiant.depart);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierDemandeeDate', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noDemande: req.body.noDemande,
        date: req.body.date,
      };

      await knex.modifierDeplacementDemandeeDate(etudiant.noDemande, etudiant.date);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierDemandeeHeure', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noDemande: req.body.noDemande,
        heure: req.body.heure,
      };

      await knex.modifierDeplacementDemandeeHeure(etudiant.noDemande, etudiant.heure);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Route Modifier Offres
app.post('/covoiturage/modifierOffresDestination', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        destination: req.body.destination,
      };

      await knex.modifierOffresDestination(etudiant.noOffres, etudiant.destination);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresDepart', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        depart: req.body.depart,
      };

      await knex.modifierOffresDepart(etudiant.noOffres, etudiant.depart);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresDate', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        date: req.body.date,
      };

      await knex.modifierOffresDate(etudiant.noOffres, etudiant.date);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresHeure', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        heure: req.body.heure,
      };

      await knex.modifierOffresHeure(etudiant.noOffres, etudiant.heure);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresTrajet', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        trajet: req.body.trajet,
      };

      await knex.modifierOffresTrajet(etudiant.noOffres, etudiant.trajet);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresNbPlaceOffertes', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        nbPlaceOfferte: req.body.nbPlaceOfferte,
      };

      await knex.modifierOffresnbPlace(etudiant.noOffres, etudiant.nbPlaceOfferte);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresCout', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres,
        cout: req.body.cout,
      };

      await knex.modifierOffresCout(etudiant.noOffres, etudiant.cout);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresPaiementComptant', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres3,
        comptant: req.body.comptant,
      };

      await knex.modifierOffresComptant(etudiant.noOffres, etudiant.comptant);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

app.post('/covoiturage/modifierOffresPaiementInteract', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        noOffres: req.body.noOffres2,
        paimentInteract: req.body.paimentInteract,
      };

      await knex.modifierOffresVirement(etudiant.noOffres, etudiant.paimentInteract);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Route pour ajouter utilisateur, reservation, offres, deplacement demandee
app.post('/InscriptionUtilisateur', async (req, rep) => {
  try {
    if (req.body.id !== '') {
      const etudiant = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        adresseCourriel: req.body.adresseCourriel,
        noTelephone: req.body.noTelephone,
        mdp: req.body.mdp,
      };

      await knex.ajouterUtilisateur(etudiant);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'L\'identifiant ne doit pas être vide',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Ajouter un reservation
app.post('/FaireReservation/:id', async (req, rep) => {
  const noUtilisateur = req.params.id;
  try {
    if (req.body.id !== '') {
      const reservation = {
        noOffres: req.body.noOffres,
        noUtilisateur,
      };

      await knex.ajouterReservations(reservation);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'Reservation pas fait',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Ajouter une offre
app.post('/FaireOffre/:id', async (req, rep) => {
  const noUtilisateur = req.params.id;
  try {
    if (req.body.id !== '') {
      const offre = {
        noUtilisateur,
        destination: req.body.destination,
        depart: req.body.depart,
        date: req.body.date,
        heure: req.body.heure,
        trajet: req.body.trajet,
        nbPlaceOfferte: req.body.nbPlaceOfferte,
        cout: req.body.cout,
        paiementVirementInteract: req.body.paiementVirementInteract,
        paiementComptant: req.body.paiementComptant,
      };

      await knex.ajouterOffres(offre);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'Offre pas fait',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Ajouter un Deplacement Demandee
app.post('/FaireDeplacementDemandee/:id', async (req, rep) => {
  const noUtilisateur = req.params.id;
  try {
    if (req.body.id !== '') {
      const DeplacementDemandee = {
        destination: req.body.Destination,
        depart: req.body.Depart,
        date: req.body.Date,
        heure: req.body.Heure,
        noUtilisateur,
      };

      await knex.ajouterDemandeDeplacement(DeplacementDemandee);
      rep.status(200).json({
        success: true,
      });
    } else {
      rep.status(200).json({
        success: false,
        error: 'Deplacement Demandee pas fait',
      });
    }
  } catch (error) {
    rep.status(500).json({
      success: false,
      erreur: error,
    });
  }
});

// Route de Suppression

// Supprimer Deplacement Demande
app.delete('/covoiturage/SupprimerDeplacementDemandee/:id', async (req, rep) => {
  try {
    const nbrDeplacementDemandeeSupprime = await knex.supprimerDemandeDeplacement(req.params.id);

    if (nbrDeplacementDemandeeSupprime === 0) {
      rep.status(200).json({
        supprime: false,
        message: 'Deplacement Demandee n\'a pas été supprimé',
      });
    } else {
      rep.status(200).json({
        supprime: true,
      });
    }
  } catch (error) {
    rep.status(500).json({
      supprime: false,
      message: error,
    });
  }
});

// Supprimer un offre
app.delete('/covoiturage/SupprimerOffre/:id', async (req, rep) => {
  try {
    const nbrDeplacementDemandeeSupprime = await knex.supprimerOffres(req.params.id);

    if (nbrDeplacementDemandeeSupprime === 0) {
      rep.status(200).json({
        supprime: false,
        message: 'Offre n\'a pas été supprimé',
      });
    } else {
      rep.status(200).json({
        supprime: true,
      });
    }
  } catch (error) {
    rep.status(500).json({
      supprime: false,
      message: error,
    });
  }
});

// Supprimer une Reservation
app.delete('/covoiturage/SupprimerReservation/:id/:id2', async (req, rep) => {
  try {
    // eslint-disable-next-line max-len
    const nbrDeplacementDemandeeSupprime = await knex.supprimerReservation(req.params.id, req.params.id2);

    if (nbrDeplacementDemandeeSupprime === 0) {
      rep.status(200).json({
        supprime: false,
        message: 'Reservation n\'a pas été supprimé',
      });
    } else {
      rep.status(200).json({
        supprime: true,
      });
    }
  } catch (error) {
    rep.status(500).json({
      supprime: false,
      message: error,
    });
  }
});

app.listen(5000, () => {
  console.log('Serveur en exécution');
  console.log('http://localhost:5000');
});
