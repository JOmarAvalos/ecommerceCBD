-- DataBase: cbd
-- Schema: 
    -- cbddesarrollo
    -- cbdproduccion

---------------------------------------
-- cbddesarrollo.cbd_cata_perfil
---------------------------------------

create table cbddesarrollo.cbd_cata_perfil
(
  cve_perfil serial NOT NULL,
  nombre character varying(20) NOT NULL,
  ban_activo integer NOT NULL,
  CONSTRAINT cbd_cata_perfil_pkey PRIMARY KEY (cve_perfil)
);

INSERT INTO cbddesarrollo.cbd_cata_perfil (nombre, ban_activo) VALUES ('Administrador', 1);
INSERT INTO cbddesarrollo.cbd_cata_perfil (nombre, ban_activo) VALUES ('Operador', 1);



---------------------------------------
-- cbddesarrollo.cbd_cata_menu
---------------------------------------

create table cbddesarrollo.cbd_cata_menu
(
  cve_menu serial NOT NULL,
  nombre character varying(20) NOT NULL,
  orden integer NOT NULL,
  ban_activo integer NOT NULL,
  CONSTRAINT cbd_cata_menu_pkey PRIMARY KEY (cve_menu)
);

INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Clientes', 1, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Pedidos', 2, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Inventario', 3, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Usuarios', 4, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Reportes', 5, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Blog', 6, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('FrontEnd', 7, 1);
INSERT INTO cbddesarrollo.cbd_cata_menu (nombre, orden, ban_activo) VALUES ('Venta al mayoreo', 8, 1);



---------------------------------------
-- cbddesarrollo.cbd_perfil_menu
---------------------------------------

create table cbddesarrollo.cbd_perfil_menu
(
  cve_perfil_menu serial NOT NULL,
  id_perfil integer NOT NULL,
  id_menu integer NOT NULL,
  id_usuario_crea integer NOT NULL,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL DEFAULT now(),
  fch_modificacion timestamp without time zone,

  CONSTRAINT cbd_perfil_menu_pkey PRIMARY KEY (cve_perfil_menu)

  CONSTRAINT fkey_cbd_perfil_menu_cbd_cata_perfil_id FOREIGN KEY (id_perfil)
      REFERENCES cbddesarrollo.cbd_cata_perfil (cve_perfil) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_perfil_menu_cbd_cata_menu_id FOREIGN KEY (id_menu)
      REFERENCES cbddesarrollo.cbd_cata_menu (cve_menu) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 1, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 2, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 3, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 4, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 5, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 6, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 7, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 8, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (2, 1, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (2, 2, 1, now());
INSERT INTO cbddesarrollo.cbd_cata_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (2, 8, 1, now());



---------------------------------------
-- cbddesarrollo.cbd_usuarios
---------------------------------------

create table cbddesarrollo.cbd_usuarios
(
  cve_usuario serial NOT NULL,
  usuario character varying(15) NOT NULL,
  contrasena character varying(50) NOT NULL,
  nombre character varying(100) NOT NULL,
  paterno character varying(100) NOT NULL,
  materno character varying(100) NOT NULL,
  email character varying(80) NOT NULL,
  id_perfil integer NOT NULL,
  id_usuario_crea integer NOT NULL,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL DEFAULT now(),
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_usuarios_pkey PRIMARY KEY (cve_usuario)

  CONSTRAINT fkey_cbd_usuarios_cbd_cata_perfil_id FOREIGN KEY (id_perfil)
      REFERENCES cbddesarrollo.cbd_cata_perfil (cve_perfil) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

INSERT INTO cbddesarrollo.cbd_usuarios (usuario, contrasena, nombre, paterno, materno, email, id_perfil, id_usuario_crea, fch_creacion, ban_activo) 
    VALUES ('ADMINGENERAL', '2758d92e216577218ec0c153d3b54dd2', 'NOMBRE', 'PATERNO', 'MATERNO', 'correo@mail.com', 1, 1, now(), 1);
INSERT INTO cbddesarrollo.cbd_usuarios (usuario, contrasena, nombre, paterno, materno, email, id_perfil, id_usuario_crea, fch_creacion, ban_activo) 
    VALUES ('OPERGENERAL', '122bc22b05f4cb0febe1ca403cec9de4', 'NOMBRE', 'PATERNO', 'MATERNO', 'correo@mail.com', 2, 1, now(), 1);




