# Doctor Appointment Web App

Live Site: [Doctor Appointment](https://unrivaled-churros-35e2bd.netlify.app/)

## 📌 Overview

This is a full-featured doctor appointment booking platform designed to provide users with a seamless experience in finding and scheduling appointments with medical professionals. Built using modern web technologies, it ensures fast load times, clean design, and efficient client-side navigation.

---

## 🚀 Getting Started

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/doctor-appointment-app.git
   cd doctor-appointment-app
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```

The app should now be running at `http://localhost:5173` (or the port shown in your terminal).

---

## 🔧 Features

* Browse a curated list of certified doctors with real-time availability
* Lazy-loading of components for improved initial load performance
* Book appointments using a simulated persistent system via localStorage
* Dynamic routing to detailed doctor pages
* Animated platform statistics (e.g., patient count, reviews)
* Toast notifications for booking confirmation or error feedback
* Custom 404 error page and blog viewing functionality

---

## 🧰 Tech Stack

* **React.js** – Frontend UI and component-based architecture
* **React Router DOM** – Handles client-side routing and dynamic routes
* **Tailwind CSS** – Utility-first CSS framework for responsive styling
* **React CountUp** – Animated number counter for statistics
* **React Icons** – Icon library for consistent visuals
* **React Toastify** – Toast notifications for user actions

---

## 🏗️ App Structure

* **Components** – Reusable UI elements like DoctorCard, Details, Services, etc.
* **Pages** – Routed views such as Home, Blogs, Appointment, and ErrorPage
* **Routing** – Client-side navigation and dynamic routing using `createBrowserRouter`
* **State Management** – Appointment state handled using localStorage for now
* **Assets** – Static images and icons

```
src/
├── components/
│   ├── Doctor/Doctor.jsx
│   ├── Doctors/Doctors.jsx
│   ├── Services/Services.jsx
│   ├── Details/Details.jsx
│   └── LoadingSpinner/LoadingSpinner.jsx
├── pages/
│   ├── Home/Home.jsx
│   ├── Appointment/Appointment.jsx
│   ├── Blogs/Blogs.jsx
│   ├── Root/Root.jsx
│   └── ErrorPage/ErrorPage.jsx
├── routes/
│   └── Routes.jsx
├── utils/
│   └── localStorageHandler.js
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🌐 Routes

| Path               | Description                      |
| ------------------ | -------------------------------- |
| `/`                | Home page with doctor list       |
| `/viewDetails/:id` | Detailed view of selected doctor |
| `/my-bookings`     | Booked appointments list         |
| `/blogs`           | Health-related blog section      |

---

## 💡 Future Improvements

* Backend integration with Firebase/MongoDB
* Authentication & user management
* Admin dashboard for managing doctor listings
* Doctor availability based on calendar slots

---

## 👨‍💻 Author

Developed by: **Iftikar Rahaman**
Undergraduate Student, CSE
**BRAC University**


