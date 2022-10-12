## Inscription

Les utilisateurs doivent s'inscrire pour utiliser le service. À l'inscription, l'utilisateur entre les informations suivantes:

* Prénom, nom;
* Adresse (numéro civique, rue, appartement);
* Adresse courriel;
* Numéro de téléphone;
* Mot de passe (entré 2 fois pour confirmation)

La ville de l'utilisateur n'a pas besoin d'être saisie car tous les utilisateurs proviennent de la même ville.

## Accueil

La page d'accueil est affichée lorsque l'utilisateur n'est pas connecté. Un texte de bienvenue présente le but de l'application.

Des liens permettent de se connecter ou s'inscrire.

## Connexion

Les utilisateurs se connectent à l'application avec leur courriel et mot de passe. Une fois connectés, la liste des déplacements offerts est affichée.

## Profil

Un utilisateur connecté peut modifier son profil. Un changement de mot de passe ou d'adresse courriel déconnecte l'utilisateur. Il devra se reconnecter pour continuer.

## Déconnexion

La déconnexion ramène l'utilisateur à l'accueil.

## Liste des déplacements offerts

Les déplacements offerts sont affichés en ordre chronologique. Seuls les offres à venir sont affichées. Pour chaque offre on affiche:

* La destination;
* Le départ;
* La date;
* L'heure;
* Le nombre de places restantes.

La liste des offres peut être filtrée par destination.

Chaque déplacement est un lien vers la page de réservation. Un clic sur ce lien conduit à la réservation d'un déplacement.

## Réservation d'un déplacement

Au clic sur un déplacement, la page de réservation est affichée pour ce déplacement. En plus de l'information présentée à la page des déplacements offerts, les informations suivantes sont affichées:

* Trajet: texte précisant le trajet effectué, au besoin;
* Nombre de places offertes;
* Coût du déplacement;
* Modes de paiement acceptés.

Un bouton permet de réserver le déplacement. L'utilisateur est inscrit en tant que passager et un courriel est envoyé au conducteur. Le courriel contient:

* Le nom du passager;
* Son adresse;
* Son numéro de téléphone;
* Son adresse courriel.

Un bouton permet de demander des précisions. L'utilisateur peut entrer un message qui est envoyé par courriel au conducteur.

## Offrir un déplacement

Un utilisateur connecté peut offrir un déplacement. Un formulaire est affiché où il peut entrer les informations suivantes:

* La destination: choix parmi une liste;
* Le départ: choix parmi une liste;
* La date;
* L'heure;
* Modes de paiement acceptés: cases à cocher (Comptant, Virement Interac);
* Le nombre de passagers.

Les choix de destinations et des départs proviennent de la base de données.

## Liste des déplacements demandés

Les déplacements demandés sont affichés en ordre chronologique. Pour chaque demande on affiche:

* La destination;
* Le départ;
* La date;
* L'heure.

La liste des demandes peut être filtrée par destination.

## Mes déplacements

Un utilisateur peut afficher la liste des déplacements qu'il offre et qu'il demande, ainsi que ses réservations (2 listes). Seuls les offres, demandes et résevations à venir sont affichées. 

**Déplacements offerts:**

L'information affichée pour chaque offre est la même que pour la liste des déplacements offerts. 

Un clic sur une offre affiche les informations complètes de l'offre ainsi que la liste des passagers (même information pour chaque passager que dans le courriel de réservation).

S'il n'y a pas de passagers, l'offre peut être modfiée ou supprimée. 

**Déplacements demandés:**

L'information affichée pour chaque demande est la même que pour la liste des déplacements demandés.

Un clic sur une demande affiche les informations complètes de la demande. 

La demande peut être modfiée ou supprimée.

**Réservations:**

L'information affichée pour chaque réservation est la même que pour la liste des déplacements offerts.

## 