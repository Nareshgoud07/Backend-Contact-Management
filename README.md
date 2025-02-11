# Contact Management Application

## Overview

This is a **Contact Management API** built using **Node.js, Express.js, and MongoDB**. It provides CRUD (Create, Read, Update, Delete) operations for managing contacts.

## Features

- Create a new contact
- Retrieve all contacts
- Retrieve a specific contact by ID
- Update a contact's details
- Delete a contact
- Proper error handling and HTTP status codes

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Version Control:** Git & GitHub

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps to Run the Project

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/contact-management.git
   cd contact-management
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the Server**

   - Development mode:
     ```sh
     node server.js
     ```

## API Endpoints & Testing

You can test the API using **Postman** or **cURL**.

### **1. Create a Contact (POST)**

- **Method:** `POST`
- **URL:** `http://localhost:5000/contacts`
- **Headers:**
  - `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "address": "Hyderabad"
  }
  ```

### **2. Retrieve All Contacts (GET)**

- **Method:** `GET`
- **URL:** `http://localhost:5000/contacts`

### **3. Retrieve a Contact by ID (GET)**

- **Method:** `GET`
- **URL:** `http://localhost:5000/contacts/{contact_id}`
- Replace `{contact_id}` with the actual contact's ID.

### **4. Update a Contact (PUT)**

- **Method:** `PUT`
- **URL:** `http://localhost:5000/contacts/{contact_id}`
- **Headers:**
  - `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "phone": "9876543210",
    "address": "Updated Hyderabad"
  }
  ```

### **5. Delete a Contact (DELETE)**

- **Method:** `DELETE`
- **URL:** `http://localhost:5000/contacts/{contact_id}`

##

##

