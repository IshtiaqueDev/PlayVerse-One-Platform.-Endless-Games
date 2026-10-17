# 🎮 PlayVerse — One Platform. Endless Games.

> **Play. Compete. Connect. Repeat.**

PlayVerse is a full-stack multiplayer gaming platform designed to bring multiple interactive games together in one place. Our goal is to build a seamless gaming experience where players can explore games, challenge friends, compete in real time, and track their progress.

We're building PlayVerse as a collaborative software engineering project, focusing on **Data Structures & Algorithms, real-time communication, scalable architecture, and clean code**.

---

##  Our Vision

One platform. Multiple games. Endless possibilities.

Instead of switching between different websites to play different games, PlayVerse aims to provide a unified platform where users can discover games, play with friends, and compete through a shared gaming experience.

## Planned Features

-  **Multi-Game Platform** — Multiple games under one platform.
-  **Real-Time Multiplayer** — Play against other users using Socket.IO.
-  **Player Interaction** — Challenge friends and join multiplayer sessions.
-  **Leaderboards & Rankings** — Track performance and compete for the top position.
-  **Authentication** — Secure registration and login.
-  **Modern Gaming UI** — A responsive interface with a neon-inspired gaming aesthetic.
-  **DSA-Focused Game Logic** — Apply problem-solving, algorithms, and data structures to game mechanics.

*Features will be implemented progressively as development continues.*

## 🕹️ Games

Our planned game collection includes:

| Game                  | Status  |
| --------------------- | ------- |
|  Chess              | Planned |
|  Tic-Tac-Toe         | Planned |
|  Connect Four       | Planned |
|  Battleship         | Planned |
|  Simon Says         | Planned |
|  Rock Paper Scissors | Planned |

We aim to prioritize polished, playable experiences over shipping many incomplete games.

## Tech Stack

**Frontend**

- React
- JavaScript
- CSS / Bootstrap (where appropriate)

**Backend**

- Node.js
- Express.js
- Socket.IO

**Database**

- MongoDB
- Mongoose

**Development & Collaboration**

- Git
- GitHub
- VS Code

## 🏗️ Project Architecture

```text
PlayVerse/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── games/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── sockets/
│   └── server.js
│
├── .gitignore
└── README.md
```

*The structure may evolve as the project grows.*

## 👨‍💻 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- MongoDB or a MongoDB Atlas connection, when database integration is added

### 1. Clone the repository

```bash
git clone <YOUR-REPOSITORY-URL>
cd <YOUR-REPOSITORY-FOLDER>
```

### 2. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Set up the backend

Open a second terminal from the project root:

```bash
cd backend
npm install
npm run dev
```

> **Note:** These commands assume the frontend and backend have their respective `package.json` files and development scripts. Setup instructions will be updated as the application is implemented.

### 4. Configure environment variables

Create local `.env` files for the required configuration, such as database connection details and server ports.

Never commit real credentials, database passwords, or secret keys to GitHub.

## Team Collaboration

PlayVerse is developed collaboratively using Git and GitHub.

Our workflow:

1. Pull the latest changes from `main`.
2. Create a separate branch for your assigned feature.
3. Develop and test your changes.
4. Commit your work with a meaningful message.
5. Push your branch to GitHub.
6. Open a Pull Request for review.
7. Merge into `main` after approval.

**Branch naming examples:**

```text
feature/game-lobby
feature/chess
feature/tic-tac-toe
feature/multiplayer
fix/responsive-layout
```

We use code reviews and clear communication to keep development organized and reduce conflicts.

##  What We're Learning & Building

Through PlayVerse, we're applying and improving our skills in:

- Full-stack web development with the MERN stack
- Real-time systems using Socket.IO
- Data Structures & Algorithms through interactive game logic
- Authentication and database design
- API development and frontend-backend integration
- Git, GitHub, branching, and collaborative code reviews
- Debugging, testing, and software architecture

##  Development Roadmap

- [ ] Initialize frontend and backend applications
- [ ] Build the core dashboard and game lobby
- [ ] Implement the first playable game
- [ ] Add user authentication
- [ ] Develop real-time multiplayer functionality
- [ ] Introduce leaderboards and player statistics
- [ ] Expand the game collection
- [ ] Improve testing, performance, and deployment

## 👥 Meet the Team

PlayVerse is built by a collaborative team of computer science students passionate about software engineering, gaming, and problem-solving.

| Team Member | Role | GitHub |
|---|---|---|
| **Vaniza Batool** | Full Stack Developer && Software Engineer | [@Vaniza-Batool](https://github.com/vanizabatool-cs) |
| **Bilal Ali** |  Full Stack Developer | [@github-username](https://github.com/github-username) |
| **Ishtiaque Ali** | Full-Stack Developer | [@IshtiaqueDev](https://github.com/IshtiaqueDev) |

*We collaborate through GitHub, feature branches, code reviews, and pull requests to build PlayVerse together.*

## 📌 Project Status

**Currently in development.**

PlayVerse is a work in progress. Features, architecture, and documentation will evolve as the project develops.

---
