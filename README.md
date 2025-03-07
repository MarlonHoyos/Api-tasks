## CRUD TASKS API LARAVEL

Para poder clonar el reposirotio ingresar siguiente linea:

```bash
    git clone https://github.com/MarlonHoyos/Api-tasks.git
```

## Instalacion de la API - Backend 

Primero ingresamos a la sub carpeta apiTasks:

```bash
    cd apiTasks
```

Se realiza la instalacion de las dependencias con composer:

```bash
    composer install
```

Ahora realizaremos las migraciones de nuestra base de datos,
esto teniendo en cuenta que ya tienes un servidor de postgres instalado y una base de datos
llamada apiTasks:

```bash
    php artisan migrate
```

A constinuacion se correran el Seeder "UserSeeders",
el cual creara nuestro usuario por defecto para el logueo
y retornara nuestro token para las diferentes rutas del API:

```bash
    php artisan db:seed --class=UserSeeder
```

ya estariamos listo para correr nuestro servidor y levantar nuestra API:

```bash
  php artisan serve
```

Documentacion de los Endpoints en POSTMAN:

https://documenter.getpostman.com/view/28756060/2sAYdoE6pv




## Instalacion - Front

Necesitamos primeramente instalar nuestras dependencias o librerias:

```bash
  npm run install
```

Y para inicializar nuestro front haremos uso del siguiente comando:

```bash
  npm run start
```

con esto ya tendriamos lista nuestra api crud de tareas, tanto el frontend como el backend.

## NOTA

ya que el proyecto no se alcanzo a dockerizar hasta este punto, tenemos que recordar
que para que funcione correctamente debemos inicializar tanto el backend como el frontend.

Espero que te agrade el proyecto. 

## AUTOR

Marlon Fernando Hoyos Chacon
