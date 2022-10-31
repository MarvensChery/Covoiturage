Le deuxième livrable consiste à valider le modèle de données.

**Documentation à produire:**

* Les spécifications de la couche d'accès aux données (DAL);

**Code à produire:**

* Le code de la couche d'accès aux données (DAL);
* Un fake en Node.js pour chaque fonction d'interrogation dans la couche d'accès de données;
* Une série de tests en Nodes.js pour les fonctions de sélection.

### Date de remise

**Groupe 1:**

**Groupe 2:**

# Étapes

## Étape 1: Données de tests
L'étape consiste à créer un jeu de données initiales retrésentant l'historique suivant:

L'utilisateur 1 s'inscrit: Aida Loutfi, 15 chemin Paquette, aida@gmail.com, 819-326-4856, mdp: bonjour!  
L'utilisateur 2 s'inscrit: Bob Smith, 42 chemin du Lac Quenouille, bob@gmail.com, 514-352-68374, bonjour!  
L'utilisateur 3 s'inscrit: Yasmine Touré, chemin Drapeau, yasmine@gmail.com, 450-384-3245, bonjour!  
Aida offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 8-11-2022, 12:30, Arrêt à la Coop, comptant et Interac, 3 places  
Aida offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 8-11-2022, 14:30, comptant et Interac, 3 places  
Yasmine offre un déplacement à St-Donat: départ de Val-des-Lacs, 8-11-2022, 12:30, Arrêt à la Coop, comptant, 2 places  
Yasmine offre un déplacement à Val-des-Lacs: départ de St-Donat, 8-11-2022, 15:30, comptant, 2 places  
Yasmine offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 9-11-2022, 10:00, Arrêt à la Coop, comptant, 2 places  
Yasmine offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 9-11-2022, 12:00, comptant, 2 places  
