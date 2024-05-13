# Bootcamp Data Analyst

This docker compose file provide MySQL and PostgreSQL database instance for your bootcamp needs.

## Preparation

- ensure you have `docker` installed on your machine.
- copy `.env.example` to `.env`. make changes as your needs; then save the file.

## MySQL

Run the DB Server Instance:

```sh
docker compose up mysql
```

Your MySQL database server will be running in `127.0.0.1:3366`. use username and password you've defined before in `.env` to authenticate.

Example using CLI:

```sh
mysql -u [MYSQL_PASSWORD] -p -h 127.0.0.1 -P 3366 [MYSQL_DATABASE]
```

## PostgreSQL

Run the DB Server Instance:

```sh
docker compose up postgres
```

Your PostgreSQL database server will be running in `127.0.0.1:5433`. Use username and password you've defined before in `.env` to authenticate.

Example using CLI:

```sh
psql -p 5433 -U [POSTGRES_USER] -W -h 127.0.0.1 [POSTGRES_DB]
```
