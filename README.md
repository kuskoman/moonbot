# Moonbot

Moonbot is a Discord bot used (at this moment) to play music on channel.

## Installation

Moonbot can be used with already prepared Docker containers with required services,
or can be configured to work with custom instances of these services.

### Setting up services using Docker and Docker Compose

When used with Docker and Docker Compose bot still lives outside of containers-
only Lavalink and Redis instances are contenerized.

To setup services using Docker make sure you have [Docker](https://docs.docker.com/)
and [Docker Compose](https://docs.docker.com/compose/) installed.

- [Docker installation](https://docs.docker.com/get-docker/)
- [Docker Compose installation](https://docs.docker.com/compose/install/)

Docker Compose is by default shipped with Docker on Windows, so its separate installation
in most cases will not be required.

After Docker and Docker Compose installation is complete we can run our container.

```shell
docker-compose up
```

We may want to detach from containers (to make it running 'in background') by using:

```shell
docker-compose up -d
```

On Linux based systems you may need to use `sudo` to run the command with root privillages.

When running our containers first time we need to give the `lavalink` service some time
to build.

After services are ready you can proceed to [setting up bot](#setting up bot).

### Setting up services without Docker

In some cases you may want to set up services without using Docker.

To do that, you have to create instances of [Redis](https://redis.io/) and [Lavalink](https://github.com/Frederikam/Lavalink).
You can find Lavalink [server configuration guide in its readme](https://github.com/Frederikam/Lavalink#server-configuration).
Redis installation is covered in [its documentation](https://redis.io/topics/quickstart), or in many guides in the internet.

### Setting up bot

#### Bot dependencies

Bot requires [Node](https://nodejs.org/en/) runtime and [Yarn](https://yarnpkg.com/) package manager to work.
You may also try to use [npm](https://www.npmjs.com/get-npm) instead of Yarn, however differences between
bot behavior when using Yarn and npm won't be considered as bugs- only Yarn is supported.

#### Configuration

Bot reads configuration from `config.json` file. You can get scaffold of this file by copying `config.sample.json` to
`config.json`.
When using Docker Compose you usually want to leave default configuration options (except these related to Discord API, not bot services).

#### Running bot

You can run bot wihout building it to files using:

```shell
yarn start
```

If you also want bot to restart after each change you make you may want to use:

```shell
yarn dev
```

#### Building bot

Bot can be built using:

```shell
yarn build
```

**Important**: building bot has different rules than just running it, so in early versions of bot this command may throw errors
disallowing to build bot to files.

After bot is built you can run bot using:

```shell
node dist/
```
