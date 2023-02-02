Le deuxième livrable consiste créer un jeu de données et écrire un script de modification de données.  
Mandat individuel  
Pondération de la note: 15%

**Code à produire:**

* Un script de création d'un jeu de données pour les tests;
* Un script de modification de données.

**Forme de la remise:**

* Un dernier commit sur votre branche (exxxxxxx-2) portant le nom **Remise livrable 2**;
* Un merge request de votre branche (exxxxxxx-2) vers la branche **dev** du cours;
* Titre de la demande de fusion: **Gr x, Nom de famille, Prénom, Livrable 2**

### Date de remise

**Groupe 1:** 9 novembre à 8h

**Groupe 2:** 10 novembre à 17h

# Étapes

## Étape 1

Dans GitKaraken, créez un tag **Livrable1** sur le commit de votre branche exxxxxxx correspondant à votre remise et poussez ce tag sur votre dépôt. Attention, c'est ce tag qui déterminera ce qui sera corrigé ainsi que la pénalité de retard s'il y a lieu.

Créez une branche ayant comme nom votre numéro de dossier (exxxxxxx) suivi des caractères "-2", à partir de votre branche exxxxxxx.

**Exemple:** e1234567-2

## Étape 2: Données de tests

L'étape consiste à écrire les énoncés SQL pour créer un jeu de données initiales représentant l'historique donné plus bas. Certaines opérations sont décrites en référence aux clé primaires que j'ai supposées être des champs compteurs. Si votre schéma utilise d'autres types de clés, remplacez simplement mes valeurs de clés par les vôtres.

**Historique**

L'utilisatrice 1 s'inscrit: Aida Loutfi, 15 chemin Paquette, aida@gmail.com, 819-326-4856, mdp: bonjour!\
L'utilisateur 2 s'inscrit: Bob Smith, 42 chemin du Lac Quenouille, bob@gmail.com, 514-352-6837, bonjour!\
L'utilisatrice 3 s'inscrit: Yasmine Touré, chemin Drapeau, yasmine@gmail.com, 450-384-3245, bonjour!\
L'utilisateur 4 s'inscrit: Pierre Leblanc, 21 chemin Léveillée, pierre@gmail.com, 819-326-1367, bonjour!\
Offre de déplacement 1: Aida offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 8-11-2022, 12:30, Arrêt à la Coop, comptant et Interac, 3 places\
Offre de déplacement 2: Aida offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 8-11-2022, 14:30, comptant et Interac, 3 places\
Offre de déplacement 3: Yasmine offre un déplacement à St-Donat: départ de Val-des-Lacs, 8-11-2022, 12:30, Arrêt à la Coop, comptant, 2 places\
Offre de déplacement 4: Yasmine offre un déplacement à Val-des-Lacs: départ de St-Donat, 8-11-2022, 15:30, comptant, 2 places\
Offre de déplacement 5: Yasmine offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 9-11-2022, 10:00, Arrêt à la Coop, comptant, 2 places\
Offre de déplacement 6: Yasmine offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 9-11-2022, 12:00, comptant, 2 places\
Offre de déplacement 7: Bob offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 9-11-2022, 9:00, Arrêt à l'hôtel de ville, Interac, 3 places\
Offre de déplacement 8: Bob offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 9-11-2022, 12:00, Interac, 3 places\
Réservation 1: Pierre réserve le déplacement 3\
Réservation 2: Pierre réserve le déplacement 4\
Réservation 3: Bob réserve le déplacement 1\
Réservation 4: Bob réserve le déplacement 2\
Demande de déplacement 1: Bob demande un déplacement de Val-des-Lacs à Ste-Agathe, 10-11-2022, 9:00\
Demande de déplacement 2: Bob demande un déplacement de Ste-Agathe à Val-des-Lacs, 10-11-2022, 12:00\
Demande de déplacement 3: Pierre demande un déplacement de Val-des-Lacs à Ste-Agathe, 10-11-2022, 15:00\
Demande de déplacement 4: Pierre demande un déplacement de Ste-Agathe à Val-des-Lacs, 10-11-2022, 16:00

**Spécifications du fichier SQL**

* Nom du fichier: **DonneesTests.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Le fichier SQL doit s'exécuter sans erreur à partir des tables créées selon votre script de création de tables du livrable 1;

Pour spécifier des valeurs de date et d'heures en SQL, vous pouvez utiliser la fonction cast():

cast('2022-11-01' as Date)

cast('10:30' as Time)

Si vous vous rendez compte que votre modele physique contient des erreurs, vous pouvez refaire un deuxième fichier de création de tables, que vous nommerez **CreationTables2.sql**.

## Étape 3: Modification des données

L'étape consiste écrire les énoncés SQL représentant les manipulations données plus bas. Certaines opérations sont décrites en référence aux clé primaires que j'ai supposées être des champs compteurs. Si votre schéma utilise d'autres types de clés, remplacez simplement mes valeurs de clés par les vôtres.\
Attention!: pour faire les opérations demandées, les utilisateurs doivent faire les opérations telles que décrites dans les fonctionnalités.

**Opérations**

Aida se connecte\
Aida demande la liste des déplacements offerts\
Aida filtre la liste par destination\
Aida filtre la liste par date de départ\
Aida demande d'afficher ses déplacements\
Aida clique sur son offre de Val-des-Lacs vers Ste-Agathe pour voir toute l'info et les réservations\
Bob se connecte\
Bob demande la liste des déplacements demandés\
Bob demande de voir son profil Bob modifie son numéro de téléphone\
Pierre se connecte\
Pierre demande de voir son profil\
Pierre change son mot de passe pour _Salut!_\
Pierre affiche ses déplacements\
Pierre modifie sa demande de déplacement 4. Heure de retour 17:00\
Pierre annule sa réservation 2\
Afficher la liste des déplacements offerts\
Afficher la liste des déplacement demandés

**Spécifications du fichier SQL**

* Nom du fichier: **Requetes.sql**;
* Emplacement du fichier: dossier **/SQL** du projet;
* Le fichier SQL doit s'exécuter sans erreur à partir des tables créées selon votre script de création de tables du livrable 1;