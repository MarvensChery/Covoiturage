## Accueil

La page d'accueil est affichée lorsque l'utilisateur n'est pas connecté. Un texte de bienvenue présente le but de l'application.

Des liens permettent de se connecter ou s'inscrire.

## Connexion

Les utilisateurs se connectent à l'application avec leur courriel et mot de passe. Une fois connectés, la liste des déplacements offerts est affichée.

## Déconnexion

La déconnexion ramène l'utilisateur à l'accueil.

# Inscription et profil

## Inscription

Les utilisateurs doivent s'inscrire pour utiliser le service. À l'inscription, l'utilisateur entre les informations suivantes:

* Prénom, nom;
* Adresse (numéro civique, rue, appartement);
* Adresse courriel;
* Numéro de téléphone;
* Mot de passe (entré 2 fois pour confirmation)

L’utilisateur doit cocher une case pour confirmer qu’il a 18 ans ou plus. Cette information n'est pas conservée.   
La ville de l'utilisateur n'a pas besoin d'être saisie car tous les utilisateurs proviennent de la même ville.

## Profil

Un utilisateur connecté peut modifier son profil. Un changement de mot de passe ou d'adresse courriel déconnecte l'utilisateur. Il devra se reconnecter pour continuer.

# Déplacements offerts

## Offrir un déplacement

Un utilisateur connecté peut offrir un déplacement. Un formulaire est affiché où il peut entrer les informations suivantes:

* La destination: choix parmi une liste provenant de la bd;
* Le départ: choix parmi une liste provenant de la bd;
* La date;
* L'heure;
* Le trajet: texte précisant le trajet effectué et possibilités d’arrêts au besoin;
* Les modes de paiement acceptés: cases à cocher (Comptant, Virement Interac);
* Le nombre de places offertes.

Pour le moment, le coût des transports est fixé à 5$, mais il est possible qui pourra varier en fonction du départ et de la destination.

## Liste des déplacements offerts

Les déplacements offerts sont affichés en ordre chronologique. Seuls les offres à venir sont affichées. Pour chaque offre on affiche:

* La destination;
* Le lieu de départ;
* La date;
* L'heure;
* Le nombre de places **restantes**.

La liste des offres peut être filtrée par destination ou par date de départ.

Chaque déplacement est un lien vers la page de réservation. Un clic sur ce lien conduit à la réservation d'un déplacement.

## Réserver un déplacement

Au clic sur un déplacement, la page de réservation est affichée pour ce déplacement. En plus de l'information présentée à la page des déplacements offerts, les informations suivantes sont affichées:

* Le trajet: texte précisant le trajet effectué et possibilités d’arrêts au besoin;
* Coût du déplacement;
* Modes de paiement acceptés.

Un bouton permet de réserver le déplacement. L'utilisateur est inscrit en tant que passager et un courriel est envoyé au conducteur. Le courriel contient:

* Le nom du passager;
* Son adresse;
* Son numéro de téléphone;
* Son adresse courriel.

Un bouton permet de demander des précisions. L'utilisateur peut entrer un message pour obtenir des précisions. Les précisions demandées ainsi que les informations d'identification du passager (voir plus haut) sont envoyés par courriel au conducteur.

## Liste des déplacements demandés

Les déplacements demandés (à venir) sont affichés en ordre chronologique. Pour chaque demande on affiche:

* La destination;
* Le départ;
* La date;
* L'heure.

La liste des demandes peut être filtrée par destination ou date de départ.

## Mes déplacements

Un utilisateur peut afficher la liste des déplacements qu'il offre et qu'il demande, ainsi que ses réservations (3 listes). Seules les offres, demandes et résevations à venir sont affichées. L'information est affichée par ordre chronologique.

**Déplacements offerts:**

L'information affichée pour chaque offre est la même que celle de la liste des déplacements offerts.

Un clic sur une offre affiche les informations complètes de l'offre ainsi que la liste des passagers (même information pour chaque passager que dans le courriel de réservation).

L'offre peut être modifiée ou annulée (supprimée) en tout temps jusqu’à 1 heure avant l’heure de départ. S’il y a eu réservation pour ce déplacement, un courriel d’annulation ou de modification est automatiquement envoyé au(s) membre(s) ayant fait la réservation.

**Déplacements demandés:**

L'information affichée pour chaque demande est la même que celle de la liste des déplacements demandés.

Un clic sur une demande affiche les informations complètes de la demande.

La demande peut être modfiée ou supprimée.

**Réservations:**

L'information affichée pour chaque réservation est la même que celle de la liste des déplacements offerts.

La réservation peut être annulée (supprimée) en tout temps jusqu’à 1 heure avant l’heure de départ. Un courriel d’annulation est automatiquement envoyé conducteur.