# MinhTriTech Landing Page — Backend

A lightweight REST API backend for the MinhTriTech landing page, built with **Node.js**, **Express**, and **PostgreSQL**.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [Express](https://expressjs.com/) | Web framework |
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [postgres](https://github.com/porsager/postgres) | PostgreSQL client |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |
| [cors](https://github.com/expressjs/cors) | Cross-Origin Resource Sharing middleware |

---

## Project Structure

```
.
├── src/
│   ├── app.js      # Express application entry point
│   └── db.js       # PostgreSQL connection setup
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **PostgreSQL** database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MinhTriTech/MinhTriTech-Landing-Page-backend.git
   cd MinhTriTech-Landing-Page-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL=postgres://user:password@host:port/database
   PORT=5000
   ```

   | Variable | Description | Default |
   |---|---|---|
   | `DATABASE_URL` | PostgreSQL connection string | — |
   | `PORT` | Port the server listens on | `5000` |

---

## Running the Application

### Development (with hot-reload via nodemon)

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env`).

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Health check — returns `"Backend running"` |
| `GET` | `/test` | Queries the `test_names` table and returns all rows |

---

## License

[ISC](https://opensource.org/licenses/ISC)
