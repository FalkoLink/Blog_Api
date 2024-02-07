# Blog_API

This is a simple CRUD API for a blogging platform built using Node.js and MongoDB. It allows users to perform CRUD operations on blog posts, including creating, reading, updating, and deleting posts.

## Features

- Create a new blog post
- Retrieve all blog posts
- Retrieve a single blog post by ID
- Update a blog post by ID
- Delete a blog post by ID
- Data validation to ensure all blog post submissions contain a title and body
- Proper error handling for database errors and bad requests

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/simple-blog-api.git

2. **Set up MongoDB**:
  - Install MongoDB locally or use MongoDB Atlas.
  - Set the MongoDB connection URI in config.js file to connect to your database.

3. **Start the server**:
  - node index.js

## API Endpoints

  - **POST /blogs**: Create a new blog post.
  - **GET /blogs**: Retrieve all blog posts.
  - **GET /blogs/:id**: Retrieve a single blog post by ID.
  - **PUT /blogs/:id**: Update a blog post by ID.
  - **DELETE /blogs/:id**: Delete a blog post by ID.

## Dependencies

  - **express**: Web framework for Node.js
  - **mongoose**: MongoDB object modeling for Node.js
  - **body-parser**: Middleware for parsing request bodies
  - **express-validator**: Middleware for data validation and sanitization
