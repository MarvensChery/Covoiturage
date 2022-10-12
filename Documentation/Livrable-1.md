Le premier livrable consiste à:

* Concevoir le modèle logique de données (schéma relationnel);
* Écrire le modèle physique de données (SQL pour Sql Serveur);
* Identifier les requêtes nécessaires aux besoins de l'application (CRUD);
* Écrire les spécifications de la couche d'accès aux données (CRUD);
* Programmer un fake en Node.js pour chaque fonction d'interrogation dans la couche d'accès de données;
* Écrire une série de tests en Nodes.js pour les fonctions de sélection.

### Date de remise

**Groupe 1:** 27 octobre à 14h

**Groupe 2:** 26 octobre à 9h

## Étapes

Faire un fork du projet **Covoiturage**. Spécifications du fork:

* Nom du projet: **Covoiturage**
* Projet privé;
* Le professeur est membre, il a le rôle **Maintainer**;

Initialisez le wiki de votre projet à partir du wiki du projet **Covoiturage**. Les pages de ce wiki sont dans le dossier **\\Documentation** du projet.

Concevez le modèle logique de donnnées. À la page **Modèle logique de données**, insérez une image de votre modèle et fournir des explications au besoin.

Faites approuver votre modèle logique.

Concevez le modèle physique de données. Ce modèle est un script SQL Serveur complet. Spécifications du modèle physique:

* Nom du fichier: **CreationTables.sql**
* Emplacement du fichier: dossier **\\SQL** du projet
* Nom de la base de données: **Covoiturage**
* Nom des tables au pluriel (exemple: Utilisateurs)
* Nom des colonnes utilisant la casse "chameau" (exemple : lieuDepart)

Identifiez les requêtes nécessaires aux besoins de l'application et les rédiger à la page **CRUD** du wiki en suivant l'exemple présenté.