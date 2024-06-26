## NestJS First Touch

> 👨‍💻 Developed by Matheus Ramalho de Oliveira  
🏗️ Brazilian Software Engineer  
✉️ kastorcode@gmail.com  
🦫 [LinkedIn](https://br.linkedin.com/in/kastorcode) • [Instagram](https://instagram.com/kastorcode)

---

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="64" />
</p>

<p align="center">
  This project is my first contact with NestJS. NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. This backend is a CRUD for common and partner users who can register events. The app is multi-tenancy and works on the following concepts: Docker Compose as containerization tool, PostgreSQL as database, pgAdmin as database frontend, NestJS as backend framework, NestJS modules, controllers, providers, interceptors, and guards, RESTful API as communication protocol, JWT as authentication, Prisma as ORM and migrations, Decorator and DTO design patterns.
</p>

---

### Installation and execution

1. Make a clone of this repository;
2. Open the project folder in a terminal;
3. Run `yarn` to install dependencies;
4. Run `yarn start:dev` to launch the server in watch mode at `http://localhost:3000`;
5. Run `docker compose up` to load [PostgreSQL](https://postgresql.org) and [pgAdmin](https://pgadmin.org) into Docker containers;
6. Run `npx prisma db pull` to execute migrations and sync Prisma schema with database;
7. pgAdmin is a PostgreSQL frontend that can be accessed at `http://localhost:80`;
8. The `api.http` file has CURL requests that can be made using the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.

---

<p align="center">
  <big><b>&lt;kastor.code/&gt;</b></big>
</p>