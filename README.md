# Uber Clone

A full-stack ride-sharing application clone that replicates core functionalities of Uber.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [Base URL](#base-url)
  - [Authentication](#authentication)
  - [Error Handling](#error-handling)
  - [Endpoints](#endpoints)

## Features
- User authentication (registration, login)
- Real-time location tracking
- Ride booking and management
- [Add more features as implemented]

## Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Socket.IO

### Frontend
[Add frontend technologies]

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- [Add other prerequisites]

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
cd Backend
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

4. Start the server
```bash
npm start
```

## API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication
The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

### Error Handling
The API uses conventional HTTP response codes:

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

### Endpoints

#### 1. User Registration
Create a new user account in the system.

**Endpoint:** `POST /users/register`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
    "fullName": {
        "firstName": "John",     // Required, minimum 3 characters
        "lastName": "Doe"        // Required, minimum 3 characters
    },
    "email": "john@example.com", // Required, valid email format
    "password": "password123"    // Required, minimum 6 characters
}
```

**Success Response:**
- Status Code: `201 Created`
```json
{
    "user": {
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john@example.com",
        "_id": "user_id",
        "socketId": null
    },
    "token": "jwt_token_string"
}
```

**Error Response:**
- Status Code: `400 Bad Request`
```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullName.firstName",
            "location": "body"
        }
    ]
}
```

**Validation Rules:**
| Field | Validation |
|-------|------------|
| firstName | Required, minimum 3 characters |
| lastName | Required, minimum 3 characters |
| email | Required, valid email format, must be unique |
| password | Required, minimum 6 characters |

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request