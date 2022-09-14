# Potions-Shop

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

### Environment

Make sure to create a new file at the root of the project called `.env`. Then write in the file these following lines:
```dosini
ADMIN_USER=             # Complete with your username
ADMIN_PWD=              # Complete with your password
DB_NAME=potions_shop    # The name of the database, it should not be changed
```
This data will allow you to connect the database, Express and the back-end together.

### Docker

If you don't have `Docker` on your interface, you can either download it on <a href="https://www.docker.com/" target="_blank">Docker</a> official website or follow the instructions they provide. Once you have it, launch the software.

Check out if `Docker` is ready, then go at the root of the project with your terminal.

## Launch the website

Now, run:
```bash
$> docker-compose build # for the back-end and the front-end
$> docker-compose up -d # everything is up without showing process data
```

At last, open a new tab on your favorite browser and look for: `http://localhost:5001` where the project is launched.

## How to log in

To sign in the website, use the following credentials:
- email: `visitor@anymail.com`
- password: `password`

## Shutdown the project

Once you want to stop the project processes, go at the root of the project and run:
```bash
$> docker-compose down
```

You can also use your `Docker Desktop` to delete the project's volumes.


## Any feedback?

Feel free to open an issue or to send me a message at `heloise@villepin-it.com`