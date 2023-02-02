<<<<<<< HEAD
use Covoiturage


/* Déclaration des variables */
declare @noOffres int = 3000
declare @noOffres2 int = 8000
declare @noUtilisateur int = 20
declare @noUtilisateur2 int = 40
declare @nom varchar(60) = 'nom1'
declare @prenom varchar(60) = 'prenom1'
declare @adresse varchar(60) = 'adresse1'
declare @adresseCourriel varchar(60) = 'bob@gmail.com'
declare @noTelephone varchar(60) = '438-669-888'
declare @destination varchar(60) = 'destination1'
declare @depart varchar(60) = 'depart1'
declare @date date = '2022-09-11'
declare @heure time = cast('9:00'as time)
declare @trajet varchar(60) = ''
declare @nbPlaceOfferte int = 8
declare @cout float = 6
declare @paiementVirementInteract varchar(60) = 'N'
declare @paiementComptant varchar(60) = 'N'
declare @noReservation int = 40
declare @noDemande int = 300
declare @destinationFiltre varchar(60) = 'St-Donat'
declare @dateFiltre date = cast('2023-10-11'as date)
declare @mdp varchar(60) = 'a'


/* Sélection */

-- Afficher les offres
select * 
from Offres 
where date > getdate()


-- Afficher liste offert en ordre chronologique
select destination, depart, date, heure, nbPlaceOfferte
from Offres
where date > getdate()
order by date,heure


-- Afficher liste offert en ordre de destination
select destination, depart, date, heure, nbPlaceOfferte
from Offres
where date > getdate()
order by destination


-- Afficher table reservation
select offre.noOffres,res.noUtilisateur,destination,depart,date,heure,trajet,nbPlaceOfferte,cout,paiementVirementInteract,paiementComptant
from Reservations as res join Offres as offre
on res.noOffres = offre.noOffres


--Courriel qui affiche information Utilisateurs au conducteur
select nom,adresse,noTelephone,adresseCourriel
from Utilisateurs
where noUtilisateur = @noUtilisateur


-- Afficher liste des deplacement demandee
select *
from DeplacementDemandes
where date > getdate()


-- Afficher liste des deplacement demandee filtree par destination
select *
from DeplacementDemandes
where destination = @destinationFiltre and date > getdate()


-- Afficher liste des deplacement demandee filtree par date
select *
from DeplacementDemandes
where date = @dateFiltre


-- Afficher liste des d�placement demand�e de l'utilisateur
select * 
from DeplacementDemandes
where noUtilisateur = @noUtilisateur


--Un clic sur une offre affiche les informations compl�tes de l'offre ainsi que la liste des passagers
select offre.noOffres,destination,depart,date,heure,trajet,cout,nbPlaceOfferte,cout,paiementVirementInteract,paiementComptant,nom,prenom
from Offres as offre, Reservations as res, Utilisateurs as util
where offre.noOffres = res.noOffres and res.noUtilisateur=util.noUtilisateur and offre.noOffres = @noOffres



-- Afficher utilisateur info avec email
select *
from Utilisateurs
where adresseCourriel = @adresseCourriel

--Utilisateur se connecte
select adresseCourriel,mdp
from Utilisateurs
where noUtilisateur= @noUtilisateur and mdp=@mdp

--Afficher information de l'offre offerte de l'utilisateur
select *
from Offres
where noUtilisateur = 10


--Afficher information de l'offre offerte de l'utilisateur sur une offre specifique
select *
from Offres
where noUtilisateur = 10 and noOffres=2000

/* Insertion */

-- Inscription de l'utilisateur
insert into Utilisateurs
values (50,@nom,@prenom,@adresse,@adresseCourriel,@noTelephone,@mdp)

-- Inscrire un offres
insert into Offres(noOffres,destination,depart,date,heure,trajet,nbPlaceOfferte,cout,paiementVirementInteract,paiementComptant)
values (8000,@noUtilisateur2,@destination,@depart,@date,@heure,@trajet,@nbPlaceOfferte,@cout,@paiementVirementInteract,@paiementComptant)


-- Reserver un deplacement
insert into Reservations
values(@noReservation,@noOffres,@noUtilisateur)

--Inscrire un demande de deplacement
insert into DeplacementDemandes
values (500,'Ste-Agathe','St-Donat',cast('2023-02-11'as date),cast('10:00'as time),10)


/* Modification */

--Changer le profil utilisateur le nom
update Utilisateurs
set nom = @nom
where noUtilisateur = @noUtilisateur

--Changer le profil utilisateur le prenom
update Utilisateurs
set prenom = @prenom
where noUtilisateur = @noUtilisateur

--Changer le profil utilisateur l'adresse
update Utilisateurs
set adresse = @adresse
where noUtilisateur = @noUtilisateur

--Changer le profil utilisateur l'adresse courriel
update Utilisateurs
set adresseCourriel = @adresseCourriel
where noUtilisateur = @noUtilisateur

--Changer le profil utilisateur le numero telephone
update Utilisateurs
set noTelephone = @noTelephone
where noUtilisateur = @noUtilisateur


-- modifier un offre de l utilisateur destination
update Offres
set destination = @destination
where noOffres = @noOffres


-- modifier un offre de l utilisateur depart
update Offres
set depart = @depart
where noOffres = @noOffres


-- modifier un offre de l utilisateur date
update Offres
set date = @date
where noOffres = @noOffres


-- modifier un offre de l utilisateur heure
update Offres
set heure = @heure
where noOffres = @noOffres



-- modifier un offre de l utilisateur information du trajet
update Offres
set trajet = @trajet
where noOffres = @noOffres


-- modifier un offre de l utilisateur nombre de place offerte
update Offres
set nbPlaceOfferte = @nbPlaceOfferte
where noOffres = @noOffres



-- modifier un offre de l utilisateur le cout
update Offres
set cout = @cout
where noOffres = @noOffres




-- modifier un offre de l utilisateur paiement par virement
update Offres
set paiementVirementInteract = @paiementVirementInteract
where noOffres = @noOffres



-- modifier un offre de l utilisateur paiement comptant
update Offres
set paiementComptant = @paiementComptant
where noOffres = @noOffres



-- modifier d�placements demand�s destination
update DeplacementDemandes
set destination = @destination
where noDemande = @noDemande


-- modifier d�placements demand�s depart
update DeplacementDemandes
set depart = @depart
where noDemande = @noDemande


-- modifier d�placements demand�s date
update DeplacementDemandes
set date = @date
where noDemande = @noDemande


-- modifier d�placements demand�s heure
update DeplacementDemandes
set heure = @heure
where noDemande = @noDemande




/* Suppression */

--Supprimer une offres
delete from Offres
where noOffres = @noOffres2


--Supprimer reservation de l'utilisateur
delete from Reservations
where noReservation = @noReservation and noUtilisateur = @noUtilisateur2


-- Supprimer un Utilisateur
delete from Utilisateurs
where noUtilisateur = 50


-- Supprimer un deplacement demande
delete from DeplacementDemandes
where noDemande = @noDemande

=======
/* Déclaration des variables */
declare @idUtilisateur int = 420

/* Sélection */
select * from Offres where idUtilisateur = @idUtilisateur

/* Insertion */

/* Modification */
update Programmes set Avancement = 'allo' where id = 420

/* Suppression */

>>>>>>> Dev
