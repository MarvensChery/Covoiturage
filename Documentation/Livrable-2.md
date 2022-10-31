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
L'étape consiste à créer un jeu de données initiales retrésentant l'historique donné plus bas. Certaines transactions sont décrites en référence aux clé primaires que j'ai supposées des champs compteurs. Si votre schéma utilise d'autres types de clés, remplacez simplement mes valeurs de clés par les vôtres.  

**Historique**

L'utilisatrice 1 s'inscrit: Aida Loutfi, 15 chemin Paquette, aida@gmail.com, 819-326-4856, mdp: bonjour!  
L'utilisateur 2 s'inscrit: Bob Smith, 42 chemin du Lac Quenouille, bob@gmail.com, 514-352-68374, bonjour!  
L'utilisatrice 3 s'inscrit: Yasmine Touré, chemin Drapeau, yasmine@gmail.com, 450-384-3245, bonjour!  
L'utilisateur 4 s'inscrit: Pierre Leblanc, 21 chemin Léveillée, pierre@gmail.com, 819-326-1367, bonjour!  
Déplacement 1: Aida offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 8-11-2022, 12:30, Arrêt à la Coop, comptant et Interac, 3 places  
Déplacement 2: Aida offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 8-11-2022, 14:30, comptant et Interac, 3 places  
Déplacement 3: Yasmine offre un déplacement à St-Donat: départ de Val-des-Lacs, 8-11-2022, 12:30, Arrêt à la Coop, comptant, 2 places  
Déplacement 4: Yasmine offre un déplacement à Val-des-Lacs: départ de St-Donat, 8-11-2022, 15:30, comptant, 2 places  
Déplacement 5: Yasmine offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 9-11-2022, 10:00, Arrêt à la Coop, comptant, 2 places  
Déplacement 6: Yasmine offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 9-11-2022, 12:00, comptant, 2 places  
Déplacement 7: Bob offre un déplacement à Ste-Agathe: départ de Val-des-Lacs, 9-11-2022, 9:00, Arrêt à l'hôtel de ville, Interac, 3 places  
Bob offre un déplacement à Val-des-Lacs: départ de Ste-Agathe, 9-11-2022, 12:00, Interac, 3 places  
Pierre fait une réservation: il réserve
