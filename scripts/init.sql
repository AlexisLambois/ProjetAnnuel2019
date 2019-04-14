drop table if exists enregistrements;
drop table if exists utilisateur;

create table enregistrements(
	id serial PRIMARY KEY,
	name varchar(255),
	email varchar(255),
	phonenumber varchar(255),
	comment varchar(255),
	type integer,
	date_demande date
);

create table utilisateur(
	login varchar(255) PRIMARY KEY,
	password varchar(255),
	role varchar(255),
	actif boolean
);

insert
	into
		public.utilisateur (login,
		"password",
		"role",
		actif)
	values('root',
	'root',
	'ADMIN',
	true);

insert
	into
		public.enregistrements ("name",
		email,
		phonenumber,
		"comment",
		"type",
		date_demande)
	values('test',
	'test@test.fr',
	'0678068888',
	'Alexis Lambois.docx',
	1,
	'2019-04-12');

insert
	into
		public.enregistrements ("name",
		email,
		phonenumber,
		"comment",
		"type",
		date_demande)
	values('test',
	'test@test.fr',
	'0678068888',
	'Alexis Lambois.docx',
	1,
	'2019-04-12');

insert
	into
		public.enregistrements ("name",
		email,
		phonenumber,
		"comment",
		"type",
		date_demande)
	values('test',
	'test@test.fr',
	'0678068888',
	'Alexis Lambois.docx',
	1,
	'2019-04-12');

insert
	into
		public.enregistrements ("name",
		email,
		phonenumber,
		"comment",
		"type",
		date_demande)
	values('test',
	'test@test.fr',
	'0678068888',
	'Alexis Lambois.docx',
	1,
	'2019-04-12');

insert
	into
		public.enregistrements ("name",
		email,
		phonenumber,
		"comment",
		"type",
		date_demande)
	values('test',
	'test@test.fr',
	'0678068888',
	'Alexis Lambois.docx',
	1,
	'2019-04-12');
	
INSERT INTO public.enregistrements
(id, "name", email, phonenumber, "comment", "type", date_demande)
VALUES(6, 'http://localhost:4200/#/audit', 'test@test.fr', '0678066689', 'test', 2, '2019-04-13');
