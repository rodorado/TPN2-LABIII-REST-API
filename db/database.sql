CREATE DATABASE Dorado_Vazquez;
USE Dorado_Vazquez;


CREATE TABLE Usuarios(
idUsuario INT AUTO_INCREMENT UNIQUE NOT NULL,
nombre varchar(255) NOT NULL,
contraseña varchar(255) UNIQUE NOT NULL,
tipoUsuario varchar(255) NOT NULL, 
PRIMARY KEY (idUsuario)
);


CREATE TABLE Productos (
idProducto int AUTO_INCREMENT UNIQUE NOT NULL,
 `name` varchar(255) NOT NULL,
`description` varchar(255) NOT NULL,
price DECIMAL (10, 3) NOT NULL,
discount DECIMAL (10, 3),
primary key (idProducto)
);

-- INSERT DE USUARIOS
INSERT INTO Usuarios(nombre, contraseña, tipoUsuario) VALUES ('Lucas', '1234','admin');
INSERT INTO Usuarios(nombre, contraseña, tipoUsuario) VALUES ('Rocio', '102030','admin');
INSERT INTO Usuarios(nombre, contraseña, tipoUsuario) VALUES ('Carlos', '100200300','user');
INSERT INTO Usuarios(nombre, contraseña, tipoUsuario) VALUES ('Fabi', '2345','user');
INSERT INTO Usuarios(nombre, contraseña, tipoUsuario) VALUES ('Gonza', '6789','user');

-- INSERT DE PRODUCTOS
INSERT INTO Productos(`name`, `description`, price, discount) VALUES ('Samsung Galaxy S23', 'Celular Samsung Galaxy Serie S23', 360.000, 0.30);
INSERT INTO Productos(`name`, `description`, price, discount) VALUES ('Samsung Galaxy S23 ULTRA', 'Celular Samsung Galaxy Serie S23 ULTRA', 750.000, 0.30);
INSERT INTO Productos(`name`, `description`, price, discount) VALUES ('¡Phone 17 PRO', 'Celular ¡Phone 14 PRO', 850.000, 0.30);
INSERT INTO Productos(`name`, `description`, price, discount) VALUES ('Motorla 634', 'Celular Motorola MOTO G34', 190.000, 0.30);
INSERT INTO Productos(`name`, `description`, price, discount) VALUES ('Samsung Galaxy S23+', 'Celular Samsung Galaxy Serie S23+', 550.000, 0.30);

SELECT * FROM Usuarios;
SELECT * FROM Productos;

