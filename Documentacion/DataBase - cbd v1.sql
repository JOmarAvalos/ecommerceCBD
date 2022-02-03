-- DataBase: disofgis
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

  CONSTRAINT cbd_perfil_menu_pkey PRIMARY KEY (cve_perfil_menu),

  CONSTRAINT fkey_cbd_perfil_menu_cbd_cata_perfil_id FOREIGN KEY (id_perfil)
      REFERENCES cbddesarrollo.cbd_cata_perfil (cve_perfil) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_perfil_menu_cbd_cata_menu_id FOREIGN KEY (id_menu)
      REFERENCES cbddesarrollo.cbd_cata_menu (cve_menu) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 1, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 2, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 3, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 4, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 5, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 6, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 7, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (1, 8, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (2, 1, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (2, 2, 1, now());
INSERT INTO cbddesarrollo.cbd_perfil_menu (id_perfil, id_menu, id_usuario_crea, fch_creacion) VALUES (2, 8, 1, now());



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

  CONSTRAINT cbd_usuarios_pkey PRIMARY KEY (cve_usuario),

  CONSTRAINT fkey_cbd_usuarios_cbd_cata_perfil_id FOREIGN KEY (id_perfil)
      REFERENCES cbddesarrollo.cbd_cata_perfil (cve_perfil) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

INSERT INTO cbddesarrollo.cbd_usuarios (usuario, contrasena, nombre, paterno, materno, email, id_perfil, id_usuario_crea, fch_creacion, ban_activo) 
    VALUES ('ADMINGENERAL', '2758d92e216577218ec0c153d3b54dd2', 'NOMBRE', 'PATERNO', 'MATERNO', 'correo@mail.com', 1, 1, now(), 1);
INSERT INTO cbddesarrollo.cbd_usuarios (usuario, contrasena, nombre, paterno, materno, email, id_perfil, id_usuario_crea, fch_creacion, ban_activo) 
    VALUES ('OPERGENERAL', '122bc22b05f4cb0febe1ca403cec9de4', 'NOMBRE', 'PATERNO', 'MATERNO', 'correo@mail.com', 2, 1, now(), 1);


---------------------------------------
-- cbddesarrollo.cbd_cata_genero
---------------------------------------

create table cbddesarrollo.cbd_cata_genero
(
  cve_genero serial NOT NULL,
  nombre character varying(20) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_genero_pkey PRIMARY KEY (cve_genero)
);

INSERT INTO cbddesarrollo.cbd_cata_genero (nombre, ban_activo) VALUES ('Masculino', 1);
INSERT INTO cbddesarrollo.cbd_cata_genero (nombre, ban_activo) VALUES ('Femenino', 1);


---------------------------------------
-- cbddesarrollo.cbd_cata_tipo_identificacion
---------------------------------------

create table cbddesarrollo.cbd_cata_tipo_identificacion
(
  cve_tipo_identificacion serial NOT NULL,
  nombre character varying(20) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_tipo_identificacion_pkey PRIMARY KEY (cve_tipo_identificacion)
);

INSERT INTO cbddesarrollo.cbd_cata_tipo_identificacion (nombre, ban_activo) VALUES ('CURP', 1);
INSERT INTO cbddesarrollo.cbd_cata_tipo_identificacion (nombre, ban_activo) VALUES ('INE', 1);
INSERT INTO cbddesarrollo.cbd_cata_tipo_identificacion (nombre, ban_activo) VALUES ('IFE', 1);
INSERT INTO cbddesarrollo.cbd_cata_tipo_identificacion (nombre, ban_activo) VALUES ('DNI', 1);


---------------------------------------
-- cbddesarrollo.cbd_cata_ubicacion
---------------------------------------

create table cbddesarrollo.cbd_cata_ubicacion
(
  cve_ubicacion serial NOT NULL,
  pais character varying(50) NOT NULL,
  estado character varying(100) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_ubicacion_pkey PRIMARY KEY (cve_ubicacion)
);

INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Aguascalientes', 1);
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Baja California', 1);
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Baja California Sur', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Campeche', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'CDMX', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Coahuila', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Colima', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Chiapas', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Chihuahua', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Durango', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Estado de México', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Guanajuato', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Guerrero', 1);
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Hidalgo', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Jalisco', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Michoacán', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Morelos', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Nayarit', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Nuevo León', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Oaxaca', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Puebla', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Querétaro', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Quintana Roo', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'San Luis Potosí', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Sinaloa', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Sonora', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Tabasco', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Tamaulipas', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Tlaxcala', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Veracruz', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Yucatán', 1); 
INSERT INTO cbddesarrollo.cbd_cata_ubicacion (pais, estado, ban_activo) VALUES ('México', 'Zacatecas', 1);


---------------------------------------
-- cbddesarrollo.cbd_cata_tipo_cliente
---------------------------------------

create table cbddesarrollo.cbd_cata_tipo_cliente
(
  cve_tipo_cliente serial NOT NULL,
  nombre character varying(20) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_tipo_cliente_pkey PRIMARY KEY (cve_tipo_cliente)
);

INSERT INTO cbddesarrollo.cbd_cata_tipo_cliente (nombre, ban_activo) VALUES ('Minorista', 1);
INSERT INTO cbddesarrollo.cbd_cata_tipo_cliente (nombre, ban_activo) VALUES ('Mayorista', 1);


---------------------------------------
-- cbddesarrollo.cbd_direcciones_entrega
---------------------------------------

create table cbddesarrollo.cbd_direcciones_entrega
(
  cve_direccion_entrega serial NOT NULL,
  nombre_persona_recibe character varying(200) NOT NULL,
  pais character varying(50) NOT NULL,
  estado character varying(50) NOT NULL,
  municipio character varying(50) NOT NULL,
  colonia character varying(50) NOT NULL,
  calle character varying(100) NOT NULL,
  numero_exterior character varying(10) NOT NULL,
  numero_interior character varying(10) NOT NULL,
  cp character varying(10) NOT NULL,
  telefono character varying(20) NOT NULL,
  instruccion_extra character varying(200), 
  id_usuario_crea integer,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL DEFAULT now(),
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_direcciones_entrega_pkey PRIMARY KEY (cve_direccion_entrega)
);


---------------------------------------
-- cbddesarrollo.cbd_direcciones_facturacion
---------------------------------------

create table cbddesarrollo.cbd_direcciones_facturacion
(
  cve_direccion_facturacion serial NOT NULL,
  nombre character varying(200) NOT NULL,
  rfc character varying(20) NOT NULL,
  pais character varying(50) NOT NULL,
  estado character varying(50) NOT NULL,
  municipio character varying(50) NOT NULL,
  colonia character varying(50) NOT NULL,
  calle character varying(100) NOT NULL,
  numero_exterior character varying(10) NOT NULL,
  numero_interior character varying(10) NOT NULL,
  cp character varying(10) NOT NULL,
  telefono character varying(20) NOT NULL,
  id_usuario_crea integer,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL DEFAULT now(),
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_direcciones_facturacion_pkey PRIMARY KEY (cve_direccion_facturacion)
);


---------------------------------------
-- cbddesarrollo.cbd_clientes
---------------------------------------

create table cbddesarrollo.cbd_clientes
(
  cve_cliente serial NOT NULL,
  nombre character varying(100) NOT NULL,
  paterno character varying(100) NOT NULL,
  materno character varying(100),
  email character varying(80) NOT NULL,
  contrasena character varying(50) NOT NULL,
  telefono character varying(30) NOT NULL,
  fch_nacimiento timestamp without time zone NOT NULL,
  id_genero integer NOT NULL,
  id_tipo_identificacion integer NOT NULL,
  identificacion_numero character varying(30) NOT NULL,
  id_ubicacion integer NOT NULL,
  id_tipo_cliente integer NOT NULL,
  id_direccion_entrega integer,
  id_direccion_facturacion integer,
  id_usuario_crea integer,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL DEFAULT now(),
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_clientes_pkey PRIMARY KEY (cve_cliente),

  CONSTRAINT fkey_cbd_clientes_cbd_cata_genero_id FOREIGN KEY (id_genero)
      REFERENCES cbddesarrollo.cbd_cata_genero (cve_genero) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_cata_tipo_identificacion_id FOREIGN KEY (id_tipo_identificacion)
      REFERENCES cbddesarrollo.cbd_cata_tipo_identificacion (cve_tipo_identificacion) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_cata_ubicacion_id FOREIGN KEY (id_ubicacion)
      REFERENCES cbddesarrollo.cbd_cata_ubicacion (cve_ubicacion) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_cata_tipo_cliente_id FOREIGN KEY (id_tipo_cliente)
      REFERENCES cbddesarrollo.cbd_cata_tipo_cliente (cve_tipo_cliente) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_direcciones_entrega_id FOREIGN KEY (id_direccion_entrega)
      REFERENCES cbddesarrollo.cbd_direcciones_entrega (cve_direccion_entrega) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_direcciones_facturacion_id FOREIGN KEY (id_direccion_facturacion)
      REFERENCES cbddesarrollo.cbd_direcciones_facturacion (cve_direccion_facturacion) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);


---------------------------------------
-- cbddesarrollo.cbd_cata_pedio_estatus
---------------------------------------

create table cbddesarrollo.cbd_cata_pedio_estatus
(
  cve_pedido_estatus serial NOT NULL,
  nombre character varying(20) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_pedio_estatus_pkey PRIMARY KEY (cve_pedido_estatus)
);

INSERT INTO cbddesarrollo.cbd_cata_pedio_estatus (nombre, ban_activo) VALUES ('Pendiente', 1);
INSERT INTO cbddesarrollo.cbd_cata_pedio_estatus (nombre, ban_activo) VALUES ('Enviado', 1);
INSERT INTO cbddesarrollo.cbd_cata_pedio_estatus (nombre, ban_activo) VALUES ('Cancelado', 1);
INSERT INTO cbddesarrollo.cbd_cata_pedio_estatus (nombre, ban_activo) VALUES ('Devuelto', 1);


---------------------------------------
-- cbddesarrollo.cbd_pedidos
---------------------------------------

create table cbddesarrollo.cbd_pedidos
(
  cve_pedido serial NOT NULL,
  id_cliente integer NOT NULL,
  fch_pedido timestamp without time zone NOT NULL,
  total numeric(10,2) NOT NULL,
  costo_envio numeric(10,2) NOT NULL,
  iva numeric(10,2) NOT NULL,
  guia character varying(20),
  id_pedido_estatus integer NOT NULL,
  id_direccion_entrega integer NOT NULL,
  id_direccion_facturacion integer,
  numero_banco_pago character varying(20),
  fch_envio timestamp without time zone,
  id_usuario_modifica integer,
  fch_modificacion timestamp without time zone,

  CONSTRAINT cbd_pedidos_pkey PRIMARY KEY (cve_pedido),

  CONSTRAINT fkey_cbd_pedidos_cbd_clientes_id FOREIGN KEY (id_cliente)
      REFERENCES cbddesarrollo.cbd_clientes (cve_cliente) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_pedidos_cbd_cata_pedio_estatus_id FOREIGN KEY (id_pedido_estatus)
      REFERENCES cbddesarrollo.cbd_cata_pedio_estatus (cve_pedido_estatus) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_pedidos_cbd_direcciones_entrega_id FOREIGN KEY (id_direccion_entrega)
      REFERENCES cbddesarrollo.cbd_direcciones_entrega (cve_direccion_entrega) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_pedidos_cbd_direcciones_facturacion_id FOREIGN KEY (id_direccion_facturacion)
      REFERENCES cbddesarrollo.cbd_direcciones_facturacion (cve_direccion_facturacion) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

