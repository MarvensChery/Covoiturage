Le premier livrable consiste à produire de la documentation et du code pour mettre en place la base de données.

**Documentation à produire:**

* Le modèle logique de données (schéma relationnel);
* Les requêtes SQL nécessaires aux besoins de l'application (CRUD);

**Code à produire:**

* Le modèle physique de données (SQL pour Sql Serveur);
* Un script de création d'un jeu de données de tests;
* Un fichier exemple des requêtes SQL nécessaires aux besoins de l'application;

**Forme de la remise:**

* Un merge request de votre branche (numéro de dossier) vers la branche **dev** du cours;
* Titre de la demande de fusion: **Gr x, Nom de famille, Prénom, Livrable 1**

### Date de remise

**Groupe 1:** 27 octobre à 17h

**Groupe 2:** 26 octobre à 9h

# Étapes

## Étape 1

Faire un fork du projet **Covoiturage**. Spécifications du fork:

* Nom du projet: **Covoiturage**
* Projet privé;
* Le professeur est membre, il a le rôle **Maintainer**;

Clonez votre projet.

À partir de la branche Dev de votre projet, créez une branche ayant comme nom votre numéro de dossier.

## Étape 2

Le projet **Covoiturage** a un wiki associé. J'ai copié les pages de ce wiki dans le dossier **/Documentation** du projet. **Contrairement à ce que j'ai dit initialement, il n'est pas nécessaire de cloner le wiki. Vous pouvez modifier vos pages de wiki directement dans le dossier /Documentation du projet.**

Vous pouvez donc consulter le wiki du projet à deux endroits:

* Sur le wiki du projet de la classe;
* Directement sur votre projet dans Gitlab: **Menu Dépôt, Fichiers...** Ensuite vous cliquez sur le dossier **/Documentation** et sur la page que vous voulez visualiser.

**Modification d'une page de wiki:**

Lorsque vous visualiser une page du wiki dans votre dossier **/Documentation** sur GitLab, vous pouvez modifier cette page de deux façons en choisissant une action dans la liste déroulante en bleu:

* Éditer, ou
* Ouvrir dans l'EDI web (environnement de développement intégré) pour modifier cotre code.

En sauvegardant les modifications, vous créez un commit sur la branche sélectionnée. **Assurez vous d'inscrire un message de commit significatif** du genre: _Modification de la documentation_.

## Étape 3: modèle logique de données

Concevez le modèle logique de donnnées. Dans le dossier **/Documentation/uploads**, insérez une image de votre modèle logique nommée **schema-relationnel.png**.

Faites approuver votre modèle logique en le remettant sur Lea par la remise de travaux.

Spécifications du modèle logique:

* Nom du fichier: **schema-relationnel.png**;
* Emplacement du fichier: dossier **/Documentation/uploads** du projet;
* Nom des tables au pluriel (exemple: Utilisateurs);
* Nom des colonnes utilisant la casse "chameau" (exemple : lieuDepart);
* Représentation des clés primaires et des clés étrangères;
* Repésentation des relations et des multiplicités.

## Étape 4: modèle physique de données

Concevez le modèle physique de données. Ce modèle est un script SQL Serveur complet. Spécifications du modèle physique:

* Nom du fichier: **CreationTables.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Nom de la base de données: **Covoiturage**;
* Nom des tables au pluriel (exemple: Utilisateurs);
* Nom des colonnes utilisant la casse "chameau" (exemple : lieuDepart);
* Le fichier SQL doit s'exécuter sans erreur et correspondre à votre schéma relationnel.

Vous pouvez le tester sur un serveur Sql Serveur local (ex: Sql Express).

## Étape 5: requêtes SQL nécessaires aux besoins de l'application

Identifiez les requêtes nécessaires aux besoins de l'application et les rédiger à la page **CRUD** du wiki (**/Documentation/CRUD.md**) en suivant l'exemple présenté.

Complétez ensuite un fichier **/SQL/Requetes.sql** en suivant l'exemple dans le fichier. Spécifications du fichier de requêtes:

* Nom du fichier: **Requetes.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Le fichier SQL doit s'exécuter sans erreur et correspondre et générer des résultats valides.

## Étape 6: script de création d'un jeu de données de tests

Écrivez un script SQL contenant une série d'insertions de données de tests dans les tables. Le but des données de tests est vérifier la validité de votre modèle de données ainsi que des différentes requêtes SQL nécessaires aux besoins de l'application. Spécifications du script de données de tests:

* Nom du fichier: **DonneesTests.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Le fichier SQL doit s'exécuter sans erreur et insérer les lignes nécessaires pour des données de tests complètes.

Les données de tests doivent permettre vérifier que:

* Le modèle de données supporte les fonctionnalités demandées;
* Les requêtes nécessaires aux besoins de l'application sont correctes;

Qualité d'un bon jeu de données de tests:

* Représentation de tous les cas habituels;
* Représentation des cas limites;
* Concision;
* Clarté;