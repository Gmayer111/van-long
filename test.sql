--
-- PostgreSQL database dump
--

-- Dumped from database version 15.13 (Homebrew)
-- Dumped by pg_dump version 15.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Dish; Type: TABLE; Schema: public; Owner: gaelmayer
--

CREATE TABLE public."Dish" (
    id integer NOT NULL,
    price double precision NOT NULL,
    "dishServiceId" integer NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "labelEN" text NOT NULL,
    "labelFR" text NOT NULL
);


ALTER TABLE public."Dish" OWNER TO gaelmayer;

--
-- Name: DishService; Type: TABLE; Schema: public; Owner: gaelmayer
--

CREATE TABLE public."DishService" (
    id integer NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    slug text NOT NULL,
    "titleEN" text NOT NULL,
    "titleFR" text NOT NULL
);


ALTER TABLE public."DishService" OWNER TO gaelmayer;

--
-- Name: DishService_id_seq; Type: SEQUENCE; Schema: public; Owner: gaelmayer
--

CREATE SEQUENCE public."DishService_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DishService_id_seq" OWNER TO gaelmayer;

--
-- Name: DishService_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gaelmayer
--

ALTER SEQUENCE public."DishService_id_seq" OWNED BY public."DishService".id;


--
-- Name: Dish_id_seq; Type: SEQUENCE; Schema: public; Owner: gaelmayer
--

CREATE SEQUENCE public."Dish_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Dish_id_seq" OWNER TO gaelmayer;

--
-- Name: Dish_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gaelmayer
--

ALTER SEQUENCE public."Dish_id_seq" OWNED BY public."Dish".id;


--
-- Name: Extra; Type: TABLE; Schema: public; Owner: gaelmayer
--

CREATE TABLE public."Extra" (
    id integer NOT NULL,
    "labelFR" text NOT NULL,
    "labelEN" text NOT NULL,
    "dishServiceId" integer NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Extra" OWNER TO gaelmayer;

--
-- Name: Extra_id_seq; Type: SEQUENCE; Schema: public; Owner: gaelmayer
--

CREATE SEQUENCE public."Extra_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Extra_id_seq" OWNER TO gaelmayer;

--
-- Name: Extra_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gaelmayer
--

ALTER SEQUENCE public."Extra_id_seq" OWNED BY public."Extra".id;


--
-- Name: Picture; Type: TABLE; Schema: public; Owner: gaelmayer
--

CREATE TABLE public."Picture" (
    id integer NOT NULL,
    "dishServiceId" integer,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "pictureUrl" text NOT NULL,
    "descriptionEN" text NOT NULL,
    "descriptionFR" text NOT NULL
);


ALTER TABLE public."Picture" OWNER TO gaelmayer;

--
-- Name: Picture_id_seq; Type: SEQUENCE; Schema: public; Owner: gaelmayer
--

CREATE SEQUENCE public."Picture_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Picture_id_seq" OWNER TO gaelmayer;

--
-- Name: Picture_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gaelmayer
--

ALTER SEQUENCE public."Picture_id_seq" OWNED BY public."Picture".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: gaelmayer
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO gaelmayer;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: gaelmayer
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO gaelmayer;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gaelmayer
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: gaelmayer
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO gaelmayer;

--
-- Name: Dish id; Type: DEFAULT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Dish" ALTER COLUMN id SET DEFAULT nextval('public."Dish_id_seq"'::regclass);


--
-- Name: DishService id; Type: DEFAULT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."DishService" ALTER COLUMN id SET DEFAULT nextval('public."DishService_id_seq"'::regclass);


--
-- Name: Extra id; Type: DEFAULT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Extra" ALTER COLUMN id SET DEFAULT nextval('public."Extra_id_seq"'::regclass);


--
-- Name: Picture id; Type: DEFAULT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Picture" ALTER COLUMN id SET DEFAULT nextval('public."Picture_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Dish; Type: TABLE DATA; Schema: public; Owner: gaelmayer
--

COPY public."Dish" (id, price, "dishServiceId", "updatedAt", "createdAt", "labelEN", "labelFR") FROM stdin;
1	7	14	2025-06-10 14:39:45.449	2025-06-10 14:39:45.449	Crispy Spring rolls with ground pork	Nems au porc
2	8.5	14	2025-06-10 14:40:08.656	2025-06-10 14:40:08.656	Steamed dumpling with ground pork and ham (Banh cuon)	Crêpes vietnamiennes au porc (Banh cuon)
3	5	14	2025-06-10 14:40:28.909	2025-06-10 14:40:28.909	Spring roll with pork and shrimp (Goi cuon)	Rouleau de printemps au porc et aux crevettes (Goi cuon)
4	7	14	2025-06-10 14:42:14.178	2025-06-10 14:42:14.178	Fried shrimps ravioli (Tom chien)	Raviolis frits aux crevettes (Tom chien)
\.


--
-- Data for Name: DishService; Type: TABLE DATA; Schema: public; Owner: gaelmayer
--

COPY public."DishService" (id, "updatedAt", "createdAt", slug, "titleEN", "titleFR") FROM stdin;
14	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	starters	Our starters	Nos entrées
15	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	salads	Our salads	Nos salades
16	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	soups	Our soups	Nos soupes
17	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	pork-dishes	Our pork dishes	Nos plats de porc
18	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	chicken-dishes	Our chicken dishes	Nos plats au poulet
19	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	beef-dishes	Our beef dishes	Nos plats au boeuf
20	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	shrimp-dishes	Our shrimp dishes	Nos plats aux crevettes
21	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	fish-dishes	Our fish dishes	Nos plats au poisson
22	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	specialities	Our specialities	Nos spécialités
23	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	grill-dishes	Our grill dishes *	Nos grillades *
24	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	side-dishes	Our side dishes	Nos accompagnements
25	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	desserts	Our desserts	Nos desserts
26	2025-06-10 16:32:19.23	2025-06-10 16:32:19.23	drinks	Our drinks *	Nos boissons *
\.


--
-- Data for Name: Extra; Type: TABLE DATA; Schema: public; Owner: gaelmayer
--

COPY public."Extra" (id, "labelFR", "labelEN", "dishServiceId", "updatedAt", "createdAt") FROM stdin;
\.


--
-- Data for Name: Picture; Type: TABLE DATA; Schema: public; Owner: gaelmayer
--

COPY public."Picture" (id, "dishServiceId", "updatedAt", "createdAt", "pictureUrl", "descriptionEN", "descriptionFR") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: gaelmayer
--

COPY public."User" (id, email, "updatedAt", "createdAt") FROM stdin;
1	gaelmayer@yahoo.fr	2025-06-09 16:28:53.92	2025-06-09 16:28:53.92
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: gaelmayer
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
3030f2fa-8cb8-424e-8141-b77f2ae14479	c7d68b6ce60289fdc197766c1a816be74cfc5964de9e2274f101078f6bd5f78d	2025-06-03 23:04:12.058186+02	20241016195056_init	\N	\N	2025-06-03 23:04:12.037083+02	1
932acc80-44a4-468f-939d-9922f726c73e	adcac1258e8b0a3063a7ed2e782f84dc44ba27f715d3f30234069095615ebc29	2025-06-03 23:04:12.156091+02	20250323152742_rename_dishs_and_pictures_languages_property	\N	\N	2025-06-03 23:04:12.148441+02	1
a7adc49b-5585-4df4-a486-4e0fc786da92	d8dd8d821e07850e15194429dc010f5adfc92bafff5d6147946971ff3e43f633	2025-06-03 23:04:12.063345+02	20241106211744_dishs	\N	\N	2025-06-03 23:04:12.059165+02	1
87e44553-1173-452e-b573-565926eb387f	62082740529afdad2323107b3427f30e7277c3de0810139b7fd410321806094b	2025-06-03 23:04:12.074402+02	20241107212220_dishs	\N	\N	2025-06-03 23:04:12.064557+02	1
cef29196-e12b-45e4-9b55-e22939b7bf09	3b9320bc2c7813938b5ad6b42ebe047de52c776c76a060344ad7cc826874ed22	2025-06-03 23:04:12.084414+02	20241107215427_change_label_dish_type	\N	\N	2025-06-03 23:04:12.075808+02	1
7c9daff6-685e-4956-bdd4-1c4e4a306862	2506be68e7aa2b6fada94ffebaac627f3e1a07bfd844f24b7adb366ead739923	2025-06-03 23:04:12.16758+02	20250325091512_create_extras_table	\N	\N	2025-06-03 23:04:12.157224+02	1
8bab44f2-e975-4e80-b708-b56250478cf5	d8212070aff4e26fa87aef96d30ed50b395f1ea65c2046ff68e3d7265b2d63a4	2025-06-03 23:04:12.095828+02	20241119145932_modified_price_dish_type	\N	\N	2025-06-03 23:04:12.085571+02	1
5cf2087d-d19a-4c92-bdb7-fbc389492c84	709b05d1f9c2b8954b9af28a7b18da8edc26d60a70570b0bf0cae67c5d6af817	2025-06-03 23:04:12.100619+02	20241217165451_added_picture_unique_constraint	\N	\N	2025-06-03 23:04:12.096819+02	1
8334d9f2-e4ae-4f2b-8b02-cf5c631d33d6	a7e824a0f72f206e9c2d867dd6b796473d98c5ad65848fcab9f26cbec8f02693	2025-06-03 23:04:12.107035+02	20250105174526_replace_imageurl_by_pictureurl	\N	\N	2025-06-03 23:04:12.101639+02	1
0ea68489-4a99-4319-98eb-4abbe13ecf15	e12e41e60ee937b7ca5f3f11b222b77f41e41e655761f24e9ad7c3759288a08d	2025-06-03 23:04:12.119004+02	20250209182748_create_user_auth	\N	\N	2025-06-03 23:04:12.108499+02	1
4c61b2b5-1299-4d67-bc65-5fbb00153e1d	361c24b2afad86690230d5230d604aa668aece1ce17c31540f7a3b7ee9b49fd3	2025-06-03 23:04:12.123807+02	20250313213412_added_slug	\N	\N	2025-06-03 23:04:12.120156+02	1
72de68f4-aef0-4335-8354-6b36c14e6bd9	3953e17753ec9b8d28ff6d274c382615fe67aa42b682e9254b8905153bc56fcf	2025-06-03 23:04:12.129245+02	20250313214656_default_now_all_updated_at	\N	\N	2025-06-03 23:04:12.124996+02	1
578b9c23-48f5-4f64-b05a-316283f883bb	5197d4f2d3ade200faeaacaae543716de53e268bb26fba514319fc1559de8a02	2025-06-03 23:04:12.135939+02	20250317224900_remove_verification_token	\N	\N	2025-06-03 23:04:12.130298+02	1
9f34da35-dfd7-46ae-8e67-c7b2adcf27d8	735001480c524d97ee54b068d7a047f0392275d7a3ab795f822e2f8f6ef8232c	2025-06-03 23:04:12.142554+02	20250321095717_add_english_tables_properties	\N	\N	2025-06-03 23:04:12.136909+02	1
2ba16f84-f08e-42be-bc67-5ce2b89a02b0	a81d7446ffe371822402d9adc724d44a3d3013c87fd26ba452429b57d9ff7a16	2025-06-03 23:04:12.147322+02	20250323144519_dishs_service_locale_title_properties	\N	\N	2025-06-03 23:04:12.143434+02	1
\.


--
-- Name: DishService_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaelmayer
--

SELECT pg_catalog.setval('public."DishService_id_seq"', 26, true);


--
-- Name: Dish_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaelmayer
--

SELECT pg_catalog.setval('public."Dish_id_seq"', 4, true);


--
-- Name: Extra_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaelmayer
--

SELECT pg_catalog.setval('public."Extra_id_seq"', 1, false);


--
-- Name: Picture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaelmayer
--

SELECT pg_catalog.setval('public."Picture_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaelmayer
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: DishService DishService_pkey; Type: CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."DishService"
    ADD CONSTRAINT "DishService_pkey" PRIMARY KEY (id);


--
-- Name: Dish Dish_pkey; Type: CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Dish"
    ADD CONSTRAINT "Dish_pkey" PRIMARY KEY (id);


--
-- Name: Extra Extra_pkey; Type: CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Extra"
    ADD CONSTRAINT "Extra_pkey" PRIMARY KEY (id);


--
-- Name: Picture Picture_pkey; Type: CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Picture"
    ADD CONSTRAINT "Picture_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Dish_labelEN_key; Type: INDEX; Schema: public; Owner: gaelmayer
--

CREATE UNIQUE INDEX "Dish_labelEN_key" ON public."Dish" USING btree ("labelEN");


--
-- Name: Dish_labelFR_key; Type: INDEX; Schema: public; Owner: gaelmayer
--

CREATE UNIQUE INDEX "Dish_labelFR_key" ON public."Dish" USING btree ("labelFR");


--
-- Name: Extra_labelEN_key; Type: INDEX; Schema: public; Owner: gaelmayer
--

CREATE UNIQUE INDEX "Extra_labelEN_key" ON public."Extra" USING btree ("labelEN");


--
-- Name: Extra_labelFR_key; Type: INDEX; Schema: public; Owner: gaelmayer
--

CREATE UNIQUE INDEX "Extra_labelFR_key" ON public."Extra" USING btree ("labelFR");


--
-- Name: Picture_pictureUrl_key; Type: INDEX; Schema: public; Owner: gaelmayer
--

CREATE UNIQUE INDEX "Picture_pictureUrl_key" ON public."Picture" USING btree ("pictureUrl");


--
-- Name: Dish Dish_dishServiceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Dish"
    ADD CONSTRAINT "Dish_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES public."DishService"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Extra Extra_dishServiceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Extra"
    ADD CONSTRAINT "Extra_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES public."DishService"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Picture Picture_dishServiceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gaelmayer
--

ALTER TABLE ONLY public."Picture"
    ADD CONSTRAINT "Picture_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES public."DishService"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

