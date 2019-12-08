# FrontFest App

(a.k.a. Event Toolbox)

Based on the original code of the [BilboStack App](https://github.com/sirikon/bilbostack-app) (thank you! ❤️)

This software is intended to provide tools to event organizers. Including:

- Talk listing
- Talk details
- Talk voting with comment
- Talk question submission
- Global voting summary for admins
- (To Do) Single-talk voting summary for speakers

## Requirements

- Node
- PostgreSQL
- Redis

There is a `docker-compose.yml` file inside `docker/eventtoolbox-devenv` that you can use to start a development environment (PostgreSQL, Redis and Adminer) using **Docker**.

You can do this by running `yarn devenv:up`.

## Development

### Quickstart

Install yarn if not already installed

```
npm -g install yarn
```

Then

```bash
yarn install
yarn devenv:up
yarn migrate
yarn start
```

And visit the application in [localhost:8000](http://localhost:8000).

### Commands

These are the special commands that you will need to work with this.

Run them like `yarn <command>`.

 - `test:docker`: Will run the tests inside Docker (see **Tests** section).
 - `devenv:up`: Starts the development environment.
 - `devenv:down`: Stops the development environment.
 - `migrate`: Run migrations, updating the database schema.
 - `lint`: Run lint check.
 - `lint:fix`: Run lint check **and** fix the things that can be fixed automatically.
 - `prod:up`: Start app in production mode.
 - `prod:down`: Stop app when running in production mode.

### Tests

The tests are inside the `test` folder. Run them with the command `yarn test`.

Tests can also run inside Docker. All the files involved in this process are inside `docker/testing` and you can run it by calling `yarn test:docker` or running `run.sh` inside `docker/testing`.

## Running in production

The npm script for starting the app in production mode will:

- Build the Docker image locally.
- Run the built Docker image with all the service dependencies.
- Start listening on the specified PORT.
- Run migrations against the PostgreSQL database.

For configuring this, you **must** create a `.env` file on the project's root folder like this:

```
POSTGRES_PASSWORD=verysecret
PORT=8080
BASE_URL=https://example.com
ADMIN_USER=admin
ADMIN_PASSWORD=password
```

- `POSTGRES_PASSWORD`: The 'postgres' user in PostgreSQL database will take this password.
- `PORT`: The server will run locally on this port.
- `BASE_URL`: The server's url (including protocol, like `https`).
- `ADMIN_USER`: Administrator user.
- `ADMIN_PASSWORD`: Administrator password.

All this will create a data folder with the PostgreSQL persistent information.

### Using a pre-compiled Docker image

Inside `docker-compose.yml`, in `services.app`, replace `image: eventtoolbox` with the name of the correct image (including registry url) and remove the `build` parameter.
