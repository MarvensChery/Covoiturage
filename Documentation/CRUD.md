# Insertion

### Inscription de l'utilisateur
`insert into Utilisateurs(noUtilisateur,nom,prenom,adresse,adresseCourriel,noTelephone)`
`values (10,@nom,@prenom,@adresse,@adresseCourriel,@noTelephone)`

### Inscrire un offres
`insert into Offres(noOffres,destination,depart,date,heure,trajet,nbPlaceOfferte,cout,``paiementVirementInteract,paiementComptant)`
`values (10,@destination,@depart,@date,@heure,@trajet,@nbPlaceOfferte,@cout,``@paiementVirementInteract,@paiementComptant)`


### Reserver un deplacement
`insert into Reservations`
`values(@noReservation,@noOffres,@noUtilisateur)`

# Modification

### Changer le profil utilisateur le nom
`update Utilisateurs`
`set nom = @nom`
`where noUtilisateur = @noUtilisateur`

### Changer le profil utilisateur le prenom
`update Utilisateurs`
`set prenom = @prenom`
`where noUtilisateur = @noUtilisateur`

### Changer le profil utilisateur l'adresse
`update Utilisateurs`
`set adresse = @adresse`
`where noUtilisateur = @noUtilisateur`

### Changer le profil utilisateur l'adresse courriel
`update Utilisateurs`
`set adresseCourriel = @adresseCourriel`
`where noUtilisateur = @noUtilisateur`

### Changer le profil utilisateur le numero telephone
`update Utilisateurs`
`set noTelephone = @noTelephone`
`where noUtilisateur = @noUtilisateur`


### modifier un offre de l utilisateur destination
`update Offres`
`set destination = @destination`
`where noOffres = @noOffres`


### modifier un offre de l utilisateur depart
`update Offres`
`set depart = @depart`
`where noOffres = @noOffres`


### modifier un offre de l utilisateur date
`update Offres`
`set date = @date`
`where noOffres = @noOffres`


### modifier un offre de l utilisateur heure
`update Offres`
`set heure = @heure`
`where noOffres = @noOffres`



### modifier un offre de l utilisateur information du trajet
`update Offres`
`set trajet = @trajet`
`where noOffres = @noOffres`


### modifier un offre de l utilisateur nombre de place offerte
`update Offres`
`set nbPlaceOfferte = @nbPlaceOfferte`
`where noOffres = @noOffres`



### modifier un offre de l utilisateur le cout
`update Offres`
`set cout = @cout`
`where noOffres = @noOffres`




### modifier un offre de l utilisateur paiement par virement
`update Offres`
`set paiementVirementInteract = @paiementVirementInteract`
`where noOffres = @noOffres`



### modifier un offre de l utilisateur paiement comptant
`update Offres`
`set paiementComptant = @paiementComptant`
`where noOffres = @noOffres`



### modifier d�placements demand�s destination
`update DeplacementDemandes`
`set destination = @destination`
`where noDemande = @noDemande`


### modifier d�placements demand�s depart
`update DeplacementDemandes`
`set depart = @depart`
`where noDemande = @noDemande`


### modifier d�placements demand�s date
`update DeplacementDemandes`
`set date = @date`
`where noDemande = @noDemande`


### modifier d�placements demand�s heure
`update DeplacementDemandes`
`set heure = @heure`
`where noDemande = @noDemande`

# Suppression

### Supprimer une offres
`delete from Offres`
`where noOffres = @noOffres2`


### Supprimer reservation de l'utilisateur
`delete from Reservations`
`where noReservation = @noReservation and noUtilisateur = @noUtilisateur`


### Supprimer un Utilisateur
`delete from Utilisateurs`
`where noUtilisateur = @noUtilisateur2`


### Supprimer un deplacement demande
`delete from DeplacementDemandes`
`where noDemande = @noDemande`

# Sélection

#### Toutes les offres de déplacement

`select *`
`from Offres` 
`where date > getdate() `

#### Les offres de déplacement d'un utilisateur

`select * from Offres`

`where noOffres= @noOffres`

### Afficher liste offert en ordre chronologique
`select destination, depart, date, heure, nbPlaceOfferte`
`from Offres`
`order by date`

### Afficher liste offert en ordre de destination
`select destination, depart, date, heure, nbPlaceOfferte`
`from Offres`
`order by destination`

### Afficher table reservation
`select offre.noOffres,destination,depart,date,heure,trajet,nbPlaceOfferte,cout,``paiementVirementInteract,paiementComptant`
`from Reservations as res join Offres as offre`
`on res.noOffres = offre.noOffres`

###Courriel qui affiche information Utilisateurs au conducteur
`select nom,adresse,noTelephone,adresseCourriel`
`from Utilisateurs`
`where noUtilisateur = @noUtilisateur`

### Afficher liste des deplacement demandee
`select *`
`from DeplacementDemandes`

### Afficher liste des deplacement demandee filtree par destination
`select *`
`from DeplacementDemandes`
`order by destination`

### Afficher liste des deplacement demandee filtree par date
`select *`
`from DeplacementDemandes`
`order by date`

### Afficher liste des d�placement demand�e de l'utilisateur
`select * `
`from DeplacementDemandes`
`where noUtilisateur = @noUtilisateur`

### Un clic sur une offre affiche les informations compl�tes de l'offre ainsi que la liste des passagers
`select offre.noOffres,destination,depart,date,heure,trajet,cout,nbPlaceOfferte,cout,``paiementVirementInteract,paiementComptant,nom,prenom`
`from Offres as offre, Reservations as res, Utilisateurs as util`
`where offre.noOffres = res.noOffres and res.noUtilisateur=util.noUtilisateur `

### Utilisateur se connecte
`select adresseCourriel,mdp`
`from Utilisateurs`
`where noUtilisateur= @noUtilisateur and mdp=@mdp`

### Afficher information de l'offre offerte de l'utilisateur
`select *`
`from Offres`
`where noUtilisateur = 10`


### Afficher information de l'offre offerte de l'utilisateur sur une offre specifique
`select *`
`from Offres`
`where noUtilisateur = 10 and noOffres=2000`
