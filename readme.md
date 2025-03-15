# Visa Ease Backend

**Live Site URL (Frontend):** [https://visa-ease-backend.vercel.app/](https://visa-ease-backend.vercel.app/)

The Visa Ease Backend is the server-side component of the Visa Ease platform. It provides APIs for managing visa-related data, user information, and application processes. Built with **Express.js** and **MongoDB**, this backend ensures seamless communication between the frontend and the database.

---

## Key Features

- **📄 Visa Management:** APIs to fetch, add, update, and delete visa information.
- **👤 User Management:** Store and retrieve user data for personalized experiences.
- **📝 Visa Applications:** Handle visa application submissions and updates.
- **🔒 Secure Operations:** Use of MongoDB for secure and efficient data storage.
- **🌐 RESTful APIs:** Well-structured endpoints for easy integration with the frontend.

---

## Technologies Used

- **Backend Framework:** Express.js
- **Database:** MongoDB (Atlas for cloud storage)
- **Middleware:** CORS, JSON parsing
- **Environment Management:** Dotenv for environment variables
- **Deployment:** Vercel (for frontend), Render/Heroku (for backend)

---

## API Endpoints

### Users
- **POST `/users`**: Add a new user.
- **GET `/users`**: Fetch all users.

### Visas
- **GET `/all-visa`**: Fetch all visa details.
- **GET `/all-visa/:id`**: Fetch a specific visa by ID.
- **POST `/added-visa`**: Add a new visa.
- **PUT `/added-visa/:id`**: Update a visa by ID.
- **DELETE `/added-visa/:id`**: Delete a visa by ID.

### Visa Applications
- **POST `/applied-visa/:id`**: Submit a visa application.
- **GET `/applied-visa`**: Fetch all visa applications.
- **DELETE `/applied-visa/:id`**: Delete a visa application by ID.

---

## Getting Started

To set up and run the Visa Ease Backend locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/fahmidurshanto/visa-ease-backend.git