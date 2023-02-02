Le deuxième livrable consiste créer un jeu de données et écrire un script de modification de données.\
Mandat en équipe de 2.\
Pondération de la note: 30%

**À produire:**

* La revue de code du livrable 1 de votre coéquipier-ère;
* Le code corrigé de votre livrable 1;
* Le code de la couche d'accès aux données (DAL);
* Une série de tests en Nodes.js pour les fonctions de sélection.

**Forme de la remise:**

* Un dernier commit sur votre branche (exxxxxxx-3) portant le nom **Remise livrable 3**;
* Un merge request de votre branche (exxxxxxx-3) vers la branche **dev** du cours;
* Titre de la demande de fusion: **Gr x, Nom de famille, Prénom, Livrable 3**

### Date de remise: 30 novembre à minuit

# Étapes

## Étape 1

Créez une branche ayant comme nom votre numéro de dossier (exxxxxxx) suivi des caractères "-3", à partir de votre branche exxxxxxx-2.

**Exemple:** e1234567-3

## Étape 2 (15%): revue de code

Vous devez faire la revue de code de votre coéquipier. Il s'agit de débuter une revue de code et y ajouter autant de commentaires qu'il y a d'éléments à corriger. Votre coéquipier corrige ensuite les modifications, sur sa branche et vous révisez ses modications, jusqu'à ce que vous soyez d'accord tous les deux sur la validité du code.

### Critères à valider

**Fichier de création des tables:**

* Nom du fichier: **CreationTables.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Nom de la base de données: **Covoiturage**;
* Nom des tables au pluriel (exemple: Utilisateurs);
* Nom des colonnes utilisant la casse "chameau" (exemple : lieuDepart);
* Nom de colonnes significatifs, en français et bien orthographiés;
* Une clé primaire par table;
* Toutes les clés étrangères nécessaires, avec contraintes d'intégrité référentielle;
* contraintes NOT NULL lorsque la donnée est requise;
* Le fichier SQL sans erreur d'exécution;
* Les tables générées correspondent exactement au schéma relationnel (corriger le schéma relationnel au besoin).

**Fichier du jeu de données:**

* Nom du fichier: **DonneesTests.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Le fichier SQL s'exécute sans erreur;
* Les cas nécessaires aux tests sont représentés: Exemple:
  * Utilisateurs ayant 0, 1, plusieurs offres;
  * Offres ayant 0, 1, maximum de réservations;
  * Etc.

**Fichier des requêtes nécessaires au fonctionnement de l'application:**

* Nom du fichier: **Requetes.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Le fichier SQL s'exécute sans erreur;
* Tous les accès à la bd (CRUD) nécessaires au fonctionnement de l'application sont présents.

## Étape 3 (10%): corrections suite à la revue de code

Il s'agit de corriger toutes les erreurs mentionnées par votre coéquipier en faisant les commits nécessaires sur la branche du livrable 1. C'est un processus itératif qui se termine lorsque vous considérez tous les deux que votre code est valide et aux normes.

## Étape 4 (40%): couche d'accès aux données

Écrivez le code d'accès aux données dans le fichier **dal.js**, en suivant les spécifications pour chaque type de requêtes.

### Requêtes de sélection

**Nom de la fonction:** obtenirXxx()

Exmple: obtenirDemande(idDemande), obtenirOffreEtReservations(idOffre).

**Retour de la fonction:**

* un objet lorsque la fonction doit retourner une seule ligne d'une table;
* un tableau d'objet(s) lorsque la fonction doit retourner une collection de lignes d'une table;
* un objet contenant un objet ou un tableau d'objets(s) lorsque la fonction doit retourner une jointure d'une seule ligne avec une seule ou plusieurs lignes d'une autre table;
* un tableau d'objet(s) contenants un objet ou un tableau d'objet(s) lorsque la fonction doit retourner une jointure d'une collection de lignes, chacune avec une seule ou plusieurs lignes d'une autre table

#### Exemples

obtenirDemande(idDemande) retourne:

```js
{ "idDemande": 1,   
  "depart": "Val-des-Lacs",  
  "destination": "Ste-Agathe",   
  "date": 2022-11-10,   
  "heure": 12:30,  
  "idUtilisateur": 2,  
}   
```

obtenirDemandesAVenir() retourne:

```js
[{ "idDemande": 1,   
   "depart": "Val-des-Lacs",  
   "destination": "Ste-Agathe",   
   "date": 2022-11-10,   
   "heure": 12:30,  
   "idUtilisateur": 2,  
 }, 
 { "idDemande": 2,   
   "depart": "Ste-Agathe",  
   "destination": "Val-des-Lacs",   
   "date": 2022-11-10,   
   "heure": 14:30,  
   "idUtilisateur": 2,  
 }]  
```

obtenirUtilisateurEtDemandes() retourne:

```js
{ idUtilisateur: 2,
  nomFamille: "Loutfi",
  prenom: "Aida",
  ...
  demandes: [
    { "idDemande": 1,   
      "depart": "Val-des-Lacs",  
      "destination": "Ste-Agathe",   
      "date": 2022-11-10,   
      "heure": 12:30,  
      "idUtilisateur": 2,  
    }, 
    { "idDemande": 2,   
      "depart": "Ste-Agathe",  
      "destination": "Val-des-Lacs",   
      "date": 2022-11-10,   
      "heure": 14:30,  
      "idUtilisateur": 2,  
    }]
}  
```

obtenirUtilisateurEtDemandes() pour un utilisateur qui n'a pas de demandes retourne:

```js
{ idUtilisateur: 2,
  nomFamille: "Loutfi",
  prenom: "Aida",
  ...
  demandes: []
}  
```

### Requêtes d'insertion

**Nom de la fonction:** ajouterXxx()

Exemple: ajouterDemande(demande) où demande est un objet contenant l'entité à ajouter.

**Retour de la fonction:** id de la ligne ajoutée.

### Requêtes de modification

**Nom de la fonction:** modifierXxx()

Exemple: modifierDemande(demande) où demande est un objet contenant les colonnes de l'entité à ajouter ainsi que son id.

**Retour de la fonction:** nombre de lignes modifiées.

### Requêtes de suppression

**Nom de la fonction:** supprimerXxx()

Exemple: supprimerDemande(idDemande)

**Retour de la fonction:** nombre de lignes supprimées.

## Étape 5 (35%): Test des requêtes de sélection

Il s'agit d'écrire une série de tests unitaires dans le fichier **dal.test.js** pour valider les requêtes de sélection.

Attention: vous devaez valider seulement les requêtes de sélection.