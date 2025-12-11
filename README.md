# MongoDB CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB using Mongoose ODM.

## Features

- Create, Read, Update, and Delete users
- RESTful API design
- MongoDB integration with Mongoose

## Prerequisites

- Node.js installed
- MongoDB installed and running locally, or access to a MongoDB Atlas cluster

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Configuration

Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
```

## Running the Application

To start the server in production mode:
```
npm start
```

To start the server in development mode with nodemon:
```
npm run dev
```

## API Endpoints

### User Routes

- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user by ID
- `PATCH /users/:id` - Update a specific user by ID
- `DELETE /users/:id` - Delete a specific user by ID

### User Schema

```javascript
{
  name: String,     // Required
  email: String,    // Required, Unique
  age: Number,      // Optional
  createdAt: Date   // Auto-generated
}
```

## Examples

### Create a User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'
```

### Get All Users
```bash
curl http://localhost:3000/users
```

### Get a Specific User
```bash
curl http://localhost:3000/users/{userId}
```

### Update a User
```bash
curl -X PATCH http://localhost:3000/users/{userId} \
  -H "Content-Type: application/json" \
  -d '{"age":31}'
```

### Delete a User
```bash
curl -X DELETE http://localhost:3000/users/{userId}
```
