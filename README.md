#Potions-Shop

A little website where you can sell and buy the best potions on the market.


## Frameworks and tools

### Back-end
- NodeJS / npm
- TypeScript
- Docker
- MongoDB / mongoose
- Express

### Front-end
- ReactJS 
- NodeJS / npm
- HTML / CSS
- Fonts: Roboto and Lobster

## Installation

To install dependencies for the front-end, go in the `front` directory and run:
```bash
$> npm install
```

Make sure to create a new file at the root of the project called `.env`. Then write in the file these following lines:
```dosini
ADMIN_USER=             # Complete with your username
ADMIN_PWD=              # Complete with your password
DB_NAME=potions_shop    # The name of the database, it should not be changed
```
This data will allow you to connect the database, Express and the back-end together.

## Build and start the API

If you don't have `Docker` on your interface, you can either download it on <a href="https://www.docker.com/" target="_blank">Docker</a> official website or follow the instructions they provide. Once you have it, launch the software.

Check out if `Docker` is ready, then go at the root of the project with your terminal and run:
```bash
$> docker-compose build # for the back-end section
$> docker-compose up -d # the database and back-end are up to receive and send data
```

## Launch the client interface

In the `front` directory, run:
```bash
$> npm run start
```

A new page will open in your default browser.
To sign in the website, use the following credentials:
- email: `visitor@anymail.com`
- password: `password`

## Shutdown the project

Once you want to stop the project processes, first use `ctrl + c` for the front command running. Then, say yes when it askes you if you want to stop it.
<br/>
Go then at the root of the project and run:
```bash
$> docker-compose down
```

You can also use your `Docker Desktop` to delete the project's volumes.