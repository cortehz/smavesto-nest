Portfolio API
A REST-API, developed with NestJS and Prisma. The project uses PostgreSQL as a relational database and relies on a modular architecture as well as full type safety to provide a performant and scalable foundation for portfolio applications.

Tech Stack
Backend: NestJS (TypeScript)

ORM: Prisma

Database: PostgreSQL

---

## Local Setup

1. **Prerequisites** — Node.js >= 22 and a running PostgreSQL instance.

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment** — create a `.env` file in the project root (or edit the existing one) with your database URL:

   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/<your_database_name>
   ```

4. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

5. **Run migrations**

   ```bash
   npx prisma migrate dev
   ```

6. **Seed the database** — populates sample users, portfolios, and holdings:

   ```bash
   tsx prisma/seed.ts
   ```

7. **Start the server**

   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:3000`.

8. **Swagger docs** — open `http://localhost:3000/api` in the browser to explore the API interactively.

9. **Run tests**

   ```bash
   npm test
   ```
