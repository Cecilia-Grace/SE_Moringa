# ☕ Coffee Shop Management System

A modern React-based Coffee Shop web application that allows users to browse coffees, search items, and for admins to add, edit, and manage coffee inventory using a REST API.

---

## 🚀 Features


### 🔐 Admin Side (Admin Portal)

* Add new coffee products
* Edit existing coffee details
* Update coffee using PATCH requests
* Sidebar-style form for better UX
* Real-time UI updates after changes

### 🏠 Authentication

* Login system using context
* Protected routes for admin access
* Logout functionality

---

## 🧠 Tech Stack

* React (Functional Components)
* React Hooks (useState, useEffect, useContext)
* React Router DOM
* Context API (Global State Management)
* REST API (JSON Server / Backend)
* CSS (Custom responsive design)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── AdminPortal.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│
├── context/
│   ├── CoffeeContext.jsx
│   ├── AuthContext.jsx
│
├── App.jsx
├── main.jsx
└── App.css
```

---

## ⚙️ API Setup

This project uses a local JSON server.

### Run backend:

```bash
json-server --watch db.json --port 3000
```

### Example endpoint:

```
GET    /coffees
POST   /coffees
PATCH  /coffees/:id
DELETE /coffees/:id
```

---

## 🧪 Core Logic Highlights

### Add Coffee

* Uses POST request
* Updates state using Context

### Update Coffee (PATCH)

* Sends updated fields to API
* Re-renders updated list

### Delete Coffee

* Removes item from backend
* Updates UI instantly

### Search

```js
coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
```

---


---

## 📱 Responsive Design

* Desktop: 3 coffee cards per row
* Tablet: 2 per row
* Mobile: 1 per row
* Sidebar becomes stacked on small screens

---

## 🔐 Auth Flow

1. User logs in via Login component
2. AuthContext stores login state
3. ProtectedRoute blocks unauthorized access
4. Navbar remains persistent

---

## 👩🏽‍💻 Author

Built by **Cecilia Matini**

---

## 📌 Status

✔ Functional
✔ Responsive
✔ CRUD implemented
✔ Context-based architecture
