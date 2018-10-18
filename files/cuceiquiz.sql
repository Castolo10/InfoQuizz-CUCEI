--
-- PostgreSQL database cluster dump
--

-- Started on 2018-09-19 22:15:27

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE empleado;
ALTER ROLE empleado WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'md5e3f3a28ce20539ddc314d26f616d9bff';
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md54a2ffd6f46d72ba975778178bc41a770';
CREATE ROLE socio;
ALTER ROLE socio WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'md5a32ebcd70005bda474a4dbf0d3ff8cb9';






--
-- Database creation
--

REVOKE ALL ON DATABASE template1 FROM PUBLIC;
REVOKE ALL ON DATABASE template1 FROM postgres;
GRANT ALL ON DATABASE template1 TO postgres;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


\connect postgres

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.12
-- Dumped by pg_dump version 9.5.12

-- Started on 2018-09-19 22:15:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2141 (class 0 OID 0)
-- Dependencies: 2140
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 2 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2144 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 2145 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 184 (class 1259 OID 24653)
-- Name: lista_amigos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lista_amigos (
    username character varying(15),
    friend_username character varying(15)
);


ALTER TABLE public.lista_amigos OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 24656)
-- Name: preguntas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.preguntas (
    id_quest integer NOT NULL,
    status character varying(10),
    content character varying(40),
    opt_1 character varying(30),
    opt_2 character varying(30),
    category character varying(12),
    id_res integer
);


ALTER TABLE public.preguntas OWNER TO postgres;

--
-- TOC entry 2146 (class 0 OID 0)
-- Dependencies: 185
-- Name: COLUMN preguntas.id_res; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.preguntas.id_res IS '
';


--
-- TOC entry 182 (class 1259 OID 24643)
-- Name: respuestas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.respuestas (
    id_res integer NOT NULL,
    points integer,
    id_quest integer,
    username character varying(15),
    status character varying(15)
);


ALTER TABLE public.respuestas OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 24661)
-- Name: temáticas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."temáticas" (
    category character varying(12) NOT NULL,
    content character varying(20)
);


ALTER TABLE public."temáticas" OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 24648)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    username character varying(15) NOT NULL,
    name character varying(30),
    mail character varying(20),
    password character varying(15),
    permisos boolean
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 2147 (class 0 OID 0)
-- Dependencies: 183
-- Name: COLUMN "user".permisos; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public."user".permisos IS '
';


--
-- TOC entry 187 (class 1259 OID 24666)
-- Name: user_question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_question (
    username character varying(15),
    id_quest integer
);


ALTER TABLE public.user_question OWNER TO postgres;

--
-- TOC entry 2131 (class 0 OID 24653)
-- Dependencies: 184
-- Data for Name: lista_amigos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lista_amigos (username, friend_username) FROM stdin;
\.


--
-- TOC entry 2132 (class 0 OID 24656)
-- Dependencies: 185
-- Data for Name: preguntas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.preguntas (id_quest, status, content, opt_1, opt_2, category, id_res) FROM stdin;
\.


--
-- TOC entry 2129 (class 0 OID 24643)
-- Dependencies: 182
-- Data for Name: respuestas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.respuestas (id_res, points, id_quest, username, status) FROM stdin;
\.


--
-- TOC entry 2133 (class 0 OID 24661)
-- Dependencies: 186
-- Data for Name: temáticas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."temáticas" (category, content) FROM stdin;
\.


--
-- TOC entry 2130 (class 0 OID 24648)
-- Dependencies: 183
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (username, name, mail, password, permisos) FROM stdin;
\.


--
-- TOC entry 2134 (class 0 OID 24666)
-- Dependencies: 187
-- Data for Name: user_question; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_question (username, id_quest) FROM stdin;
\.


--
-- TOC entry 2007 (class 2606 OID 24665)
-- Name: pk_cate; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."temáticas"
    ADD CONSTRAINT pk_cate PRIMARY KEY (category);


--
-- TOC entry 2005 (class 2606 OID 24660)
-- Name: pk_quest; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT pk_quest PRIMARY KEY (id_quest);


--
-- TOC entry 2001 (class 2606 OID 24647)
-- Name: pk_res; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.respuestas
    ADD CONSTRAINT pk_res PRIMARY KEY (id_res);


--
-- TOC entry 2003 (class 2606 OID 24652)
-- Name: pk_user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_user PRIMARY KEY (username);


--
-- TOC entry 2011 (class 2606 OID 24684)
-- Name: fk_cat; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT fk_cat FOREIGN KEY (category) REFERENCES public."temáticas"(category);


--
-- TOC entry 2010 (class 2606 OID 24674)
-- Name: fk_friend; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista_amigos
    ADD CONSTRAINT fk_friend FOREIGN KEY (friend_username) REFERENCES public."user"(username);


--
-- TOC entry 2012 (class 2606 OID 24689)
-- Name: fk_qres; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntas
    ADD CONSTRAINT fk_qres FOREIGN KEY (id_res) REFERENCES public.respuestas(id_res);


--
-- TOC entry 2014 (class 2606 OID 24699)
-- Name: fk_quest; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_question
    ADD CONSTRAINT fk_quest FOREIGN KEY (id_quest) REFERENCES public.preguntas(id_quest);


--
-- TOC entry 2008 (class 2606 OID 24679)
-- Name: fk_resu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.respuestas
    ADD CONSTRAINT fk_resu FOREIGN KEY (username) REFERENCES public."user"(username);


--
-- TOC entry 2009 (class 2606 OID 24669)
-- Name: fk_userf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista_amigos
    ADD CONSTRAINT fk_userf FOREIGN KEY (username) REFERENCES public."user"(username);


--
-- TOC entry 2013 (class 2606 OID 24694)
-- Name: fk_userq; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_question
    ADD CONSTRAINT fk_userq FOREIGN KEY (username) REFERENCES public."user"(username);


--
-- TOC entry 2143 (class 0 OID 0)
-- Dependencies: 7
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2018-09-19 22:15:30

--
-- PostgreSQL database dump complete
--

\connect template1

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.12
-- Dumped by pg_dump version 9.5.12

-- Started on 2018-09-19 22:15:30

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2095 (class 0 OID 0)
-- Dependencies: 2094
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- TOC entry 1 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2098 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 2097 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2018-09-19 22:15:38

--
-- PostgreSQL database dump complete
--

-- Completed on 2018-09-19 22:15:38

--
-- PostgreSQL database cluster dump complete
--

