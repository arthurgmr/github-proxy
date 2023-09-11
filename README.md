<h1 align="center">GitHub Proxy</h1>
<br>

# ✨ Technologies

This project was developed with the following technologies: 

- Node.js
- Typescript
- Express
- TSyring
- Docker
- Jest

# 💻 Project

GitHub Proxy

# 🚀 How to execute

- Clone the repository
- Run `npm install` to install all dependencies;
- Run `docker-compose up` to create the container app and database;
- Create .env file with GITHUB_TOKEN key; 
## JEST Unit Test
- Run `npm test` to execute all units tests;

# Routes

- BaseURL: `localhost:3333/`

## Routes
- GET ("/users") - This endpoint returns a list of GitHub users and the link for the next page.;
- GET ("/users/{username}/details") - This endpoint returns the details of a GitHub user;
- GET ("/users/{username}/repos") - This endpoint returns a list with all user repositories;

# :closed_book: License <a name="-license" style="text-decoration:none"></a>

This project is under the MIT license LICENSE

Made with love by Arthur Machado