# StayFinder – Full Stack

StayFinder is a **production-ready full-stack web application** inspired by Airbnb.
It allows users to explore listings, create and manage properties, upload images, and share reviews with secure authentication.

 **Live Demo:** https://stayfinder-jfue.onrender.com/

---

##  Features

###  Authentication & Authorization

* Secure user authentication using **Passport.js**
* Session-based login system
* Authorization:

  * Only listing owners can edit/delete listings
  * Only review owners can modify their reviews

---

###  Listings Management

* Create, Edit, Delete listings
* Upload listing images via **Cloudinary**
* View all listings in a responsive grid
* Detailed listing page with full information

---

###  Reviews & Ratings

* Add reviews with 1–5 star ratings
* Edit and delete reviews
* Dynamic star rating UI
* Review ownership protection

---

###  Search Functionality

* Search listings by:

  * Title
  * Description
  * Location
  * Country
* Case-insensitive search using MongoDB regex

---

###  Flash Messages

* Real-time success & error alerts using **connect-flash**

---

###  Data Validation

* Server-side validation using **Joi**
* Client-side validation using **Bootstrap**

---

##  Tech Stack

###  Frontend

* HTML5, CSS3, Bootstrap 5
* EJS (Embedded JavaScript Templates)

###  Backend

* Node.js
* Express.js

###  Database

* MongoDB Atlas (Cloud Database)
* Mongoose ODM

###  Authentication

* Passport.js
* Passport-Local-Mongoose

###  Cloud & Deployment

* **Cloudinary** – Image storage
* **Render** – Backend hosting
* **MongoDB Atlas** – Cloud database

###  Tools & Libraries

* Multer (File Upload)
* Joi (Validation)
* Express-Session
* Connect-Mongo (Session Store)
* Method-Override
* Connect-Flash
* EJS-Mate (Layouts)

---

##  Project Structure (MVC Architecture)

```bash
StayFinder/
│
├── models/         # Database Schemas (User, Listing, Review)
├── routes/         # Route Definitions
├── controllers/    # Business Logic
├── views/          # EJS Templates
│   ├── layouts/
│   ├── listings/
│   ├── reviews/
│   ├── users/
│   └── includes/
│
├── public/         # Static Files (CSS, JS)
├── utils/          # Utility Functions
├── middleware.js   # Custom Middleware
├── schema.js       # Joi Validation Schemas
├── cloudConfig.js  # Cloudinary Setup
├── app.js          # Main Application Entry Point
└── package.json
```

---

##  Installation & Local Setup

###  Clone Repository

```bash
git clone https://github.com/your-username/StayFinder.git
cd StayFinder
```

###  Install Dependencies

```bash
npm install
```

###  Run the Application

```bash
node app.js
```

 Visit: http://localhost:8080

---
##  Demo Login
_________________________________________
|      Email       | Username | Password |
|------------------|----------|----------|
| abu@gmail.com    |   abu    |   abu    |
| darda@gmail.com  |  darda   |  darda   |
| mallik@gmail.com |  mallik  |  mallik  |
------------------------------------------

##  Deployment

This project is fully deployed and running in production:

*  **Backend Hosting:** Render
*  **Database:** MongoDB Atlas
*  **Image Storage:** Cloudinary

 Live URL: https://stayfinder-jfue.onrender.com/

---

##  Application Flow

```text
Client → Routes → Controllers → Models → Database → Views → Response
```

---

##  Image Upload Flow

```text
User Form → Multer → Cloudinary → Image URL stored in MongoDB
```

---

##  Authentication Flow

```text
Signup → User.register()
Login → Passport.authenticate()
Session → req.user available globally
```

---

##  Search Flow

```text
Search Input → /listings/search → MongoDB Regex Query → Filtered Results
```

---

##  Key Concepts Implemented

* MVC Architecture
* RESTful Routing
* Middleware (Authentication, Authorization, Validation)
* Session Management
* File Upload Handling
* Cloud Integration
* Error Handling Middleware

---

##  Error Handling

* Custom `ExpressError` class
* Centralized error middleware
* 404 Page handling for undefined routes

---

##  Future Enhancements

*  Wishlist / Favorites System
*  Map Integration (Mapbox)
*  Payment Gateway Integration
*  Advanced Responsive Design
*  Notification System

---

##  Author

**Abu Darda Mallik**

---

##  License

This project is licensed under the ISC License.

---

##  Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---
