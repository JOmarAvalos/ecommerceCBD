-- DataBase: disofgis_cbd
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
  id_ubicacion integer NOT NULL,
  id_tipo_cliente integer NOT NULL,
  id_usuario_crea integer,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL DEFAULT now(),
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_clientes_pkey PRIMARY KEY (cve_cliente),

  CONSTRAINT fkey_cbd_clientes_cbd_cata_genero_id FOREIGN KEY (id_genero)
      REFERENCES cbddesarrollo.cbd_cata_genero (cve_genero) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_cata_ubicacion_id FOREIGN KEY (id_ubicacion)
      REFERENCES cbddesarrollo.cbd_cata_ubicacion (cve_ubicacion) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_clientes_cbd_cata_tipo_cliente_id FOREIGN KEY (id_tipo_cliente)
      REFERENCES cbddesarrollo.cbd_cata_tipo_cliente (cve_tipo_cliente) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);


---------------------------------------
-- cbddesarrollo.cbd_direcciones_entrega
---------------------------------------

create table cbddesarrollo.cbd_direcciones_entrega
(
  cve_direccion_entrega serial NOT NULL,
  id_cliente integer NOT NULL,
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

  CONSTRAINT cbd_direcciones_entrega_pkey PRIMARY KEY (cve_direccion_entrega),

  CONSTRAINT fkey_cbd_direcciones_entrega_cbd_clientes_id FOREIGN KEY (id_cliente)
      REFERENCES cbddesarrollo.cbd_clientes (cve_cliente) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);


---------------------------------------
-- cbddesarrollo.cbd_direcciones_facturacion
---------------------------------------

create table cbddesarrollo.cbd_direcciones_facturacion
(
  cve_direccion_facturacion serial NOT NULL,
  id_cliente integer NOT NULL,
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

  CONSTRAINT cbd_direcciones_facturacion_pkey PRIMARY KEY (cve_direccion_facturacion),

  CONSTRAINT fkey_cve_direccion_facturacion_cbd_clientes_id FOREIGN KEY (id_cliente)
      REFERENCES cbddesarrollo.cbd_clientes (cve_cliente) MATCH SIMPLE
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
-- cbddesarrollo.cbd_cata_metodo_pago
---------------------------------------

create table cbddesarrollo.cbd_cata_metodo_pago
(
  cve_metodo_pago serial NOT NULL,
  nombre character varying(20) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_metodo_pago_pkey PRIMARY KEY (cve_metodo_pago)
);

INSERT INTO cbddesarrollo.cbd_cata_metodo_pago (nombre, ban_activo) VALUES ('Scotiabank', 1);


---------------------------------------
-- cbddesarrollo.cbd_pedidos
---------------------------------------

create table cbddesarrollo.cbd_pedidos
(
  cve_pedido serial NOT NULL,
  id_cliente integer NOT NULL,
  telefono_contacto character varying(30),
  subtotal numeric(10,2) NOT NULL,
  descuento numeric(10,2) NOT NULL,
  iva numeric(10,2) NOT NULL,
  costo_envio numeric(10,2) NOT NULL,
  total numeric(10,2) NOT NULL,
  guia_envio character varying(20),
  id_pedido_estatus integer NOT NULL,
  id_direccion_entrega integer NOT NULL,
  id_direccion_facturacion integer,
  id_metodo_pago integer NOT NULL,
  numero_referencia_pago character varying(20),
  fecha_creacion timestamp without time zone NOT NULL,
  fch_envio timestamp without time zone,
  fch_cancelacion timestamp without time zone,
  fch_devolucion timestamp without time zone,
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
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_pedidos_cbd_cata_metodo_pago_id FOREIGN KEY (id_metodo_pago)
      REFERENCES cbddesarrollo.cbd_cata_metodo_pago (cve_metodo_pago) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);


---------------------------------------
-- cbddesarrollo.cbd_cata_categoria_articulo
---------------------------------------

create table cbddesarrollo.cbd_cata_categoria_articulo
(
  cve_categoria_articulo serial NOT NULL,
  nombre character varying(30) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_categoria_articulo_pkey PRIMARY KEY (cve_categoria_articulo)
);

INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Aceite', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Bálsamo', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Bebidas', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Cápsulas', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Cuidado personal', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Gomitas', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Gotas', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Hempettes', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Mascotas', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Sticks', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Vapes', 1);
INSERT INTO cbddesarrollo.cbd_cata_categoria_articulo (nombre, ban_activo) VALUES ('Wraps y conos', 1);

---------------------------------------
-- cbddesarrollo.cbd_cata_subcategoria_articulo
---------------------------------------

create table cbddesarrollo.cbd_cata_subcategoria_articulo
(
  cve_subcategoria_articulo serial NOT NULL,
  nombre character varying(30) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_subcategoria_articulo_pkey PRIMARY KEY (cve_subcategoria_articulo)
);

INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Aceite', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Alivio del dolor', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Baterías', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Cartuchos', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Energia', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Fórmula nocturna', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Gatos', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Multivitamínico', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Oso', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Para dormir', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Perros', 1);
INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (nombre, ban_activo) VALUES ('Veganas', 1);

---------------------------------------
-- cbddesarrollo.cbd_cata_marcas
---------------------------------------

create table cbddesarrollo.cbd_cata_marcas
(
  cve_marca serial NOT NULL,
  nombre character varying(50) NOT NULL,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_cata_marca_pkey PRIMARY KEY (cve_marca)
);

INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('JustCBD', 1);
INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('GreatFul', 1);
INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('CBDbies', 1);
INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('TJGreens', 1);
INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('HempMeds', 1);
INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('CBDLife', 1);
INSERT INTO cbddesarrollo.cbd_cata_marcas (nombre, ban_activo) VALUES ('HighHemp', 1);

---------------------------------------
-- cbddesarrollo.cbd_articulos
---------------------------------------

create table cbddesarrollo.cbd_articulos
(
  cve_articulo serial NOT NULL,
  id_marca integer NOT NULL,
  sku character varying(20) NOT NULL,
  nombre character varying(100) NOT NULL,
  id_categoria_articulo integer NOT NULL,
  id_subcategoria_articulo integer,
  concentracion character varying(30),
  presentacion character varying(30),
  sabor character varying(30),
  descripcion_corta character varying(500) NOT NULL,
  descripcion_larga text,
  precio numeric(10,2) NOT NULL,
  precio_con_descuento numeric(10,2),
  inventario_cantidad integer NOT NULL,
  orden integer NOT NULL,
  id_usuario_crea integer NOT NULL,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL,
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_articulos_pkey PRIMARY KEY (cve_articulo),

  CONSTRAINT fkey_cbd_articulos_cbd_cata_marcas_id FOREIGN KEY (id_marca)
      REFERENCES cbddesarrollo.cbd_cata_marcas (cve_marca) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_articulos_cbd_cata_categoria_articulo_id FOREIGN KEY (id_categoria_articulo)
      REFERENCES cbddesarrollo.cbd_cata_categoria_articulo (cve_categoria_articulo) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

INSERT INTO cbddesarrollo.cbd_articulos (marca, sku, nombre, id_categoria_articulo, id_subcategoria_articulo, concentracion, presentacion, sabor, descripcion_corta, descripcion_larga, precio, precio_con_descuento, inventario_cantidad, orden, id_usuario_crea, fch_creacion, ban_activo) VALUES ();
--/// Revisar: articulos.sql ///---


---------------------------------------
-- cbddesarrollo.cbd_pedido_articulos
---------------------------------------

create table cbddesarrollo.cbd_pedido_articulos
(
  cve_pedido_articulo serial NOT NULL,
  id_pedido integer NOT NULL,
  id_articulo integer NOT NULL,
  cantidad integer NOT NULL,
  precio_unitario numeric(10,2) NOT NULL,

  CONSTRAINT cbd_pedido_articulos_pkey PRIMARY KEY (cve_pedido_articulo),

  CONSTRAINT fkey_cbd_pedido_articulos_cbd_pedidos_id FOREIGN KEY (id_pedido)
      REFERENCES cbddesarrollo.cbd_pedidos (cve_pedido) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,

  CONSTRAINT fkey_cbd_pedido_articulos_cbd_articulos_id FOREIGN KEY (id_articulo)
      REFERENCES cbddesarrollo.cbd_articulos (cve_articulo) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);


---------------------------------------
-- cbddesarrollo.cbd_articulo_fotografias
---------------------------------------

create table cbddesarrollo.cbd_articulo_fotografias
(
  cve_articulo_fotografia serial NOT NULL,
  id_articulo integer NOT NULL,
  nombre character varying(30) NOT NULL,
  descripcion character varying(100),
  ruta character varying(100) NOT NULL,
  ruta_miniatura character varying(100) NOT NULL,
  orden character varying(100) NOT NULL,
  id_usuario_crea integer NOT NULL,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL,
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_articulo_fotografias_pkey PRIMARY KEY (cve_articulo_fotografia),

  CONSTRAINT fkey_cbd_articulo_fotografias_cbd_articulos_id FOREIGN KEY (id_articulo)
      REFERENCES cbddesarrollo.cbd_articulos (cve_articulo) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);



---------------------------------------
-- cbddesarrollo.cbd_articulos_historico
---------------------------------------

create table cbddesarrollo.cbd_articulos_historico
(
  cve_articulo integer,
  id_marca integer,
  sku character varying(20),
  nombre character varying(100),
  id_categoria_articulo integer,
  id_subcategoria_articulo integer,
  concentracion character varying(30),
  presentacion character varying(30),
  sabor character varying(30),
  descripcion_corta character varying(500),
  descripcion_larga text,
  precio numeric(10,2),
  precio_con_descuento numeric(10,2),
  inventario_cantidad integer,
  orden integer,
  id_usuario_crea integer,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone,
  fch_modificacion timestamp without time zone,
  ban_activo integer
);

---------------------------------------
-- cbddesarrollo.cbd_pedidos_historico
---------------------------------------

create table cbddesarrollo.cbd_pedidos_historico
(
  cve_pedido integer,
  id_cliente integer,
  telefono_contacto character varying(30),
  subtotal numeric(10,2),
  descuento numeric(10,2),
  iva numeric(10,2),
  costo_envio numeric(10,2),
  total numeric(10,2),
  guia_envio character varying(20),
  id_pedido_estatus integer,
  id_direccion_entrega integer,
  id_direccion_facturacion integer,
  id_metodo_pago integer,
  numero_referencia_pago character varying(20),
  fecha_creacion timestamp without time zone,
  fch_envio timestamp without time zone,
  fch_cancelacion timestamp without time zone,
  fch_devolucion timestamp without time zone,
  id_usuario_modifica integer,
  fch_modificacion timestamp without time zone
);


---------------------------------------
-- cbddesarrollo.cbd_blog
---------------------------------------

create table cbddesarrollo.cbd_blog
(
  cve_blog serial NOT NULL,
  titulo character varying(100) NOT NULL,
  imagen_ruta character varying(100) NOT NULL,
  descripcion character varying(1000) NOT NULL,
  autor character varying(100) NOT NULL,
  id_usuario_crea integer NOT NULL,
  id_usuario_modifica integer,
  fch_creacion timestamp without time zone NOT NULL,
  fch_modificacion timestamp without time zone,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_blog_pkey PRIMARY KEY (cve_blog)
);


---------------------------------------
-- cbddesarrollo.cbd_ventas_mayoreo
---------------------------------------

create table cbddesarrollo.cbd_ventas_mayoreo
(
  cve_venta_mayoreo serial NOT NULL,
  nombre character varying(100) NOT NULL,
  email character varying(80) NOT NULL,
  mensaje character varying(1000) NOT NULL,
  fch_creacion timestamp without time zone  NOT NULL,
  fch_modificacion timestamp without time zone,
  id_usuario_modifica integer,
  ban_activo integer NOT NULL,

  CONSTRAINT cbd_ventas_mayoreo_pkey PRIMARY KEY (cve_venta_mayoreo)
);

---------------------------------------
-- cbddesarrollo.cbd_ventas_mayoreo_seguimiento
---------------------------------------

create table cbddesarrollo.cbd_ventas_mayoreo_seguimiento
(
  cve_venta_mayoreo_seguimiento serial NOT NULL,
  id_venta_mayoreo integer NOT NULL,
  mensaje character varying(1000) NOT NULL,
  id_usuario_crea integer NOT NULL,
  fch_creacion timestamp without time zone  NOT NULL,

  CONSTRAINT cve_venta_mayoreo_seguimiento_pkey PRIMARY KEY (cve_venta_mayoreo_seguimiento),

  CONSTRAINT fkey_cbd_ventas_mayoreo_seguimiento_cbd_ventas_mayoreo_id FOREIGN KEY (id_venta_mayoreo)
      REFERENCES cbddesarrollo.cbd_ventas_mayoreo (cve_venta_mayoreo) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);



ALTER TABLE cbddesarrollo.cbd_articulos ADD COLUMN informe character varying(100);
