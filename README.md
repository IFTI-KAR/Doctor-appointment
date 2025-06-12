# Doctor Appointment Web App

Live Site: [Doctor Appointment](https://unrivaled-churros-35e2bd.netlify.app/)

## 📌 Overview

This project is a modern and responsive doctor appointment booking platform built with **React.js**. Users can browse through a curated list of experienced doctors, read about their qualifications and specialties, and book appointments seamlessly. The project focuses on simplicity, performance, and a clean user experience.

---

## ⚙️ Features

* 🔍 View a list of doctors with their details (name, education, registration number, experience, and availability)
* 🧠 Lazy-loaded doctor components for optimized performance
* 📅 Book appointments using localStorage to simulate a persistent system
* 📊 Real-time statistics section showing total doctors, reviews, patients, and staff using `react-countup`
* 🧭 Client-side routing and dynamic routes for doctor details using `react-router`
* 🧾 View detailed blog content and error handling with custom error page
* 🧹 Toast notifications for user feedback on booking status

---

## 📁 Folder Structure

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
│   └── Routes.jsx (React Router configuration)
├── utils/
│   └── localStorageHandler.js
├── assets/ (icons & images)
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔧 Technologies Used

* **React.js**
* **React Router DOM** for routing
* **Tailwind CSS** for responsive styling
* **React Icons**
* **React CountUp** for animated counters
* **Toastify** for toast messages

---

## 🧪 Key Components Explained

### `Doctor.jsx`

Displays individual doctor details such as name, education, image, and experience with a "View Details" link.

### `Doctors.jsx`

Renders a grid layout of doctors and supports a lazy-loading mechanism to show more doctors on demand.

### `Services.jsx`

Shows a count-up animation of platform stats like number of doctors, patients, reviews, and staff.

### `Routes.jsx`

Defines the routing logic using `createBrowserRouter`, supporting `/`, `/viewDetails/:id`, `/my-bookings`, and `/blogs` routes.

### `localStorageHandler.js`

Handles the simulation of a backend using browser localStorage for booking and removing doctor appointments.

---

## 📥 Installation & Setup

```bash
npm install
npm run dev
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

Developed by: **\[Your Name]**
Student, BRAC University
CSE Department

---

## 📜 License

This project is licensed under the MIT License.
