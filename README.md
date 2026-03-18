#  Go Backend

##  Overview
Today I started building a backend application using Go (Golang) with Gin framework, GORM ORM, and PostgreSQL.  
The goal was to understand backend basics and build a simple CRUD API.

---

## What I Learned
- Basics of Go language (syntax, structure, functions)
- How to create a Go module using `go mod init`
- Difference between `go get` and `go install`
- Introduction to ORM (GORM)
- Connecting Go with PostgreSQL
- Project structure (model, controller, routes, database)
- Debug vs Release mode in Gin

---

## What I Built
- Backend server using Gin
- PostgreSQL connection using GORM
- User model
- CRUD APIs:
  - GET → Fetch users
  - POST → Create user
  - PUT → Update user
  - DELETE → Delete user
- Auto migration using GORM

---

## Project Structure


## API Endpoints

| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| GET    | /users              | Get all users      |
| POST   | /users/create       | Create new user    |
| PUT    | /users/:id          | Update user        |
| DELETE | /users/:id          | Delete user        |

---

## Sample Request

### Create User
```json
{
  "name": "abc",
  "email": "abc@gmai.com"
}