Portfolio API
A REST-API, developed with NestJS and Prisma. The project uses PostgreSQL as a relational database and relies on a modular architecture as well as full type safety to provide a performant and scalable foundation for portfolio applications.

Tech Stack
Backend: NestJS (TypeScript)

ORM: Prisma

Database: PostgreSQL

---

## Local Setup

1. **Prerequisites** — Node.js >= 22 and Docker installed.

2. **Start a PostgreSQL database with Docker**

   ```bash
   docker run --name smavesto-db -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
   ```

   To stop/start it later:
   ```bash
   docker stop smavesto-db
   docker start smavesto-db
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Configure environment** — create a `.env` file in the project root (or edit the existing one):

   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
   ```

5. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

6. **Run migrations**

   ```bash
   npx prisma migrate dev
   ```

7. **Seed the database** — populates sample users, portfolios, and holdings:

   ```bash
   tsx prisma/seed.ts
   ```

8. **Start the server**

   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:3000`.

9. **Swagger docs** — open `http://localhost:3000/api` in the browser to explore the API interactively.

10. **Run tests**

    ```bash
    npm test
    ```
