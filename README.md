# CiberQuizz CUCEI API

## Descripción general

El juego sera la version basica de **Trivia Crack** (preguntados), pero enfocado a tematicas de programacion.

* Usuarios ganan puntos en cada juego
* Ruleta que define tematica
* Base de datos de preguntas por tematica
* Las tematicas tienen un color y un icono o figura que le identifica
* Los usuarios pueden dar de alta nuevas preguntas, pero deben ser aprobadas por un administrador
* Las partidas seran siempre en modo duelo (con tiempo) y se puede elegir un oponente aleatorio o solo de tu grupo de amistades
* Las preguntas aparecen al usuario con tiempo y con tres opciones a elegir. Siempre aparecera la categoria de la pregunta
* En caso de no responder en tiempo, se pasa a la siguiente pregunta y se considera como respuesta erronea
* Al elegir una respuesta se indica si la respuesta fue correcta o no, pero NO se indica la respuesta correcta
* Para cada categoria deben tener un banco de preguntas de aprox 45 preguntas
* Las partidas deben ser de 10 preguntas cada una
* Las partidas muestran preguntas y categorias de manera aleatoria asi como las opciones
* Deben contar con 6 categorias, ejemplo (base de datos, ingenieria de software, algoritmia, historia, logica, web, redes, etc)

## Módulos

Los módulos que contiene esta aplicación son los siguientes:

* Usuarios: Módulo que gestiona a los usuarios y administradores de la plataforma.
* Categorías: Módulo que gestiona las categorías.
* Login: Módulo encargado de realizar la autenticación en la plataforma.
* Jugar: Módulo encargado de instanciar una partida, gestionar dicha instancia y gestionar e instanciar los detalles de dicha instancia en una tabla aparte para guardar el conjunto de preguntas, jugadores, rewpuestas, fecha, etc.
* Preguntas: Módulo que gestiona las preguntas de la aplicación.

**Nota** Entiéndase por gestionar el realizar las operaciones básicas sobre los datos(Agregar, Mostrar, Buscar, Modificar y Eliminar).

## Usuarios y roles

La aplicación contará con 2 tipos de roles:

* Usuario: Acceso a los módulos de juego, login y preguntas con permisos restringidos en alguno de esos módulos.
* Administrador: Acceso a todos los módulos sin restricción de presmisos.

## Caractarísticas técnicas de instalación

En escencia no se requiere una instalación, pues se trata de una aplicación en la web, pero si se desea gestionar mejor, puede instalarse alguna versión de PGAdmin y solicitar las credenciales de la base de datos al desarrollador para que pueda acceder a la base de datos directamente.

## URL demo

ciberquizz-cucei.herokuapp.com

## Usuarios demo

No se cuenta actualmente con usuarios demo ya que al momento se han encontrado problemas con la conexión a la base de datos y por ende no hemos podido crear dichos usuarios.

## Colaboradores

* Castolo Ávila Leonardo Daniel.    213389101
