use Covoiturage


create table Utilisateurs(
	noUtilisateur int primary key identity(10,10),
	nom varchar(60) not null,
	prenom varchar(60) not null,
	adresse varchar(60) not null,
	adresseCourriel varchar(60) not null,
	noTelephone varchar(60) not null,
	mdp varchar(60) not null
)

create table DeplacementDemandes(
	noDemande int primary key identity(100,100),
	destination varchar(60) not null,
	depart varchar(60) not null,
	date date not null,
	heure varchar(60) not null,
	noUtilisateur int foreign key references Utilisateurs(noUtilisateur)
)

create table Villes(
	noVille int primary key,
	nomVille varchar(60) not null
)

create table Offres(
	noOffres int primary key identity (1000,1000),
	noUtilisateur int,
	destination varchar(60) not null,
	depart varchar(60) not null,
	date date not null,
	heure varchar(60) not null,
	trajet varchar(60),
	nbPlaceOfferte int not null,
	cout float not null default 5,
	paiementVirementInteract varchar(60) not null,
	paiementComptant varchar(60) not null,
	constraint CHK_PAIEMENT_VIREMENT CHECK (upper(paiementVirementInteract)='O' or upper(paiementVirementInteract)='N' ),
	constraint CHK_PAIEMENT_COMPTANT CHECK (upper(paiementComptant)='O' or upper(paiementComptant)='N' ),
	constraint FK_Offres foreign key (noUtilisateur) references Utilisateurs(noUtilisateur)
)

create table Reservations(
	noReservation int identity(10,10),
	noOffres int foreign key references Offres(noOffres) not null,
	noUtilisateur int foreign key references Utilisateurs(noUtilisateur) not null
)

alter table DeplacementDemandes
alter column heure varchar(60)

select * from Utilisateurs
select * from Offres
select * from Villes
select * from Reservations
select * from DeplacementDemandes
