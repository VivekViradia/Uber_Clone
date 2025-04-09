# Uber Clone

A full-stack ride-sharing application clone that replicates core functionalities of Uber.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Backend Overview](#backend-overview)
  - [Backend Routes](#backend-routes)
- [Frontend Overview](#frontend-overview)
  - [Frontend Features](#frontend-features)
- [API Documentation](#api-documentation)
  - [Base URL](#base-url)
  - [Authentication](#authentication)
  - [Error Handling](#error-handling)
  - [Endpoints](#endpoints)
- [Contributing](#contributing)

---

## Features
- User and Captain authentication (registration, login, logout)
- Real-time location tracking
- Ride booking and management
- JWT-based authentication
- Modular backend and frontend architecture

---

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and ride data.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **Socket.IO**: Real-time communication for ride updates.

### Frontend
- **React.js**: Frontend library for building user interfaces.
- **Next.js**: Framework for server-side rendering and routing.
- **Redux Toolkit**: State management for frontend.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **npm** (Node Package Manager)

---

### Installation

#### Backend Setup
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `Backend` directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     ```

4. Start the backend server:
   ```bash
   npx nodemon
   ```

   The backend server will run on `http://localhost:5000`.

---

#### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the `frontend` directory.
   - Add the following variables:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
     ```

4. Start the frontend server:
   ```bash
   npm run dev
   ```

   The frontend server will run on `http://localhost:3000`.

---

## Backend Overview

The backend is built with Node.js and Express.js. It provides RESTful APIs for user and captain authentication, ride management, and more.

### Backend Routes

#### 1. **Authentication Routes**
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/v1/caption/register` | Register a new captain          |
| POST   | `/api/v1/caption/login`    | Login as a captain              |
| GET    | `/api/v1/caption/profile`  | Get captain profile (protected) |
| POST   | `/api/v1/caption/logout`   | Logout a captain                |

#### 2. **User Routes**
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/v1/users/register` | Register a new user             |
| POST   | `/api/v1/users/login`    | Login as a user                 |
| GET    | `/api/v1/users/profile`  | Get user profile (protected)    |
| POST   | `/api/v1/users/logout`   | Logout a user                   |

#### 3. **Ride Routes**
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/v1/rides/book`     | Book a ride                     |
| GET    | `/api/v1/rides/:id`      | Get ride details                |
| PATCH  | `/api/v1/rides/:id`      | Update ride status              |

---

## Frontend Overview

The frontend is built with React.js and Next.js. It provides a user-friendly interface for booking rides, managing profiles, and more.

### Frontend Features
- **User Authentication**: Register and login as a user or captain.
- **Ride Booking**: Book a ride and track its status.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication
The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the `Authorization` header:
```
Authorization: Bearer <token>
```

### Error Handling
The API uses conventional HTTP response codes:

| Status Code | Description             |
|-------------|-------------------------|
| 200         | Success                 |
| 201         | Created                 |
| 400         | Bad Request             |
| 401         | Unauthorized            |
| 403         | Forbidden               |
| 404         | Not Found               |
| 500         | Internal Server Error   |

---

### Endpoints

#### 1. **User Registration**
**Endpoint:** `POST /users/register`

**Request Body:**
```json
{
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
}
```

**Response:**
```json
{
    "user": {
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john@example.com",
        "_id": "user_id"
    },
    "token": "jwt_token_string"
}
```

---

#### 2. **Captain Login**
**Endpoint:** `POST /caption/login`

**Request Body:**
```json
{
    "email": "captain@example.com",
    "password": "password123"
}
```

**Response:**
```json
{
    "message": "Login successful",
    "token": "jwt_token_string"
}
```

---

#### 3. **Book a Ride**
**Endpoint:** `POST /rides/book`

**Request Body:**
```json
{
    "pickupLocation": "Location A",
    "dropoffLocation": "Location B",
    "rideType": "car"
}
```

**Response:**
```json
{
    "ride": {
        "_id": "ride_id",
        "pickupLocation": "Location A",
        "dropoffLocation": "Location B",
        "status": "pending"
    }
}
```

---

## Contributing
1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

---

Let me know if you need further updates or clarifications!