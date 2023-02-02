use Covoiturage
<<<<<<< HEAD

-- Insertion dans la table utilisateur
insert into Utilisateurs
values ('goble','bob','Val-des-Lacs','bob@gmail.com','438-666-555','a'),
		('chan','sara','chemin Paquette','sara@gmail.com','438-789-555','a'),
		('lee','simon','chemin drapeau','simon@gmail.com','438-789-666','a'),
		('smith','john','chemin drapeau','john@gmail.com','438-999-888','a')


-- Insertion dans la table Deplacement demandé
insert into DeplacementDemandes
values('Ste-Agathe','Val-des-Lacs',cast('2023-10-11'as date),cast('11:30'as time),10),
		('Ste-Agathe','Val-des-Lacs',cast('2023-10-11'as date),cast('16:00'as time),20),
		('St-Donat','Ste-Agathe',cast('2023-12-11'as date),cast('15:00'as time),20),
		('St-Donat','Ste-Agathe',cast('2023-12-15'as date),cast('16:00'as time),20)


-- Insertion dans la table Offres
insert into Offres(noUtilisateur,destination,depart,date,heure,trajet,nbPlaceOfferte,paiementVirementInteract,paiementComptant) 
values(10,'Val-des-Lacs','Ste-Agathe',cast('2023-02-11'as date),cast('10:00'as time),'',5,'o','o'),
		(10,'Val-des-Lacs','Ste-Agathe',cast('2023-02-15'as date),cast('10:00'as time),'',5,'o','o'),
		(10,'Val-des-Lacs','Ste-Agathe',cast('2023-02-16'as date),cast('10:00'as time),'',5,'o','o'),
		(20,'Val-des-Lacs','St-Donat',cast('2023-02-11'as date),cast('16:00'as time),'arret au hotel',5,'n','o'),
		(30,'St-donat','Val-des-Lacs',cast('2023-02-11'as date),cast('10:00'as time),'',5,'o','n'),
		(30,'Val-des-Lacs','St-donat',cast('2023-02-11'as date),cast('17:00'as time),'arret au hotel',5,'o','n'),
		(20,'Val-des-Lacs','Ste-Agathe',cast('2023-02-11'as date),cast('10:00'as time),'arret au hotel',5,'n','o')
		

-- Insertion dans la table Reservation
insert into Reservations
values(2000,40),
		(3000,10),
		(1000,30),
		(3000,40)





-- Insertion dans la table Ville
insert into Villes(noVille,nomVille)
values (100,'St-Donat'),
		(200,'Ste-Agathe'),
		(300,'Val-des-Lacs')

select * from Utilisateurs
select * from Offres
select * from Villes
select * from Reservations
select * from DeplacementDemandes
=======
>>>>>>> Dev
