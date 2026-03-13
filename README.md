# Photo Gallery Web App

This project is a **React + Vite Photo Gallery Application** built as part of a **Frontend React Internship Pre-Screening Assignment**.

The application fetches photos from a public API and displays them in a responsive gallery. Users can search photos by author name and mark photos as favourites.

---

## 🚀 Features

* Fetch photos from **Picsum Photos API**
* Display images in a **responsive grid layout**
* **Search photos** by author name
* **Favourite photos ❤️**
* Save favourites using **localStorage**
* State management using **useReducer**
* Performance optimization using **useMemo** and **useCallback**
* API fetching handled through a **custom hook**

---

## 🛠 Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript (ES6)
* React Hooks

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
│
├── hooks
│   └── useFetchPhotos.js
│
├── reducer
│   └── favouritesReducer.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔗 API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

This API returns a list of random photos along with the author names.

---

## ▶️ How to Run the Project

### 1. Clone the repository

```
git clone https://github.com/sgarvit7/photo-gallery.git
```

### 2. Navigate to the project folder

```
cd photo-gallery
```

### 3. Install dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

## 📌 Assignment Requirements Covered

✔ React + Vite project setup
✔ Tailwind CSS styling
✔ API data fetching
✔ Responsive grid layout
✔ Real-time search filtering
✔ Favourite toggle using **useReducer**
✔ Favourites saved in **localStorage**
✔ Custom hook for API logic
✔ Performance optimization with **useMemo** and **useCallback**

---

## 👨‍💻 Author

**Garvit**

GitHub:
https://github.com/sgarvit7
