# Todo App 📝

A modern, responsive **Todo App** built with **React** and **Vite**, featuring **dark mode**, **categories**, **search functionality**, and **localStorage persistence**. Designed to help you **organize tasks efficiently**.

---

## **Table of Contents**

* [Features](#features)
* [Demo](#demo)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Folder Structure](#folder-structure)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

---

## **Features**

* ✅ Add, edit, and delete tasks
* ✅ **Categories** with colorful labels
* ✅ **Search tasks** by title
* ✅ **Dark mode** toggle
* ✅ **Persist tasks** using `localStorage`
* ✅ Responsive layout for mobile and desktop
* ✅ Separate **Active** and **Completed** task lists
* ✅ Hover and active effects on buttons

---

## **Demo**

Live demo: [Add your Netlify/GitHub Pages link here]

## **Technologies**

* **React** - Frontend library
* **Vite** - Fast React bundler
* **Tailwind CSS** - Utility-first CSS framework
* **Lucide Icons** - SVG icons for UI
* **LocalStorage** - Browser persistence

---

## **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/todoApp.git
cd todoApp
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## **Usage**

1. Click **Add Task** to create a new task
2. Enter **Title**, **Description**, and select a **Category**
3. Use the **search bar** to filter tasks
4. Toggle **dark mode** using the switch in the header
5. Mark tasks as completed or delete them
6. Your tasks are automatically saved in **localStorage**

---

## **Folder Structure**

```
todoApp/
│
├─ public/                 # Public assets (favicon, images)
├─ src/
│  ├─ components/          # Reusable components
│  │  ├─ Header.jsx
│  │  ├─ AddTaskButton.jsx
│  │  ├─ TaskForm.jsx
│  │  ├─ SearchBar.jsx
│  │  ├─ TaskList.jsx
│  │  └─ CompletedList.jsx
│  ├─ App.jsx              # Main application
│  ├─ main.jsx             # Entry point
│  └─ index.css            # Tailwind imports
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## **Deployment**

You can deploy this project using **Netlify**:

1. Push your code to **GitHub**
2. Go to [Netlify](https://www.netlify.com/) → **New site → Import from Git**
3. Connect your GitHub repository
4. Build settings:

   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
5. Deploy the site and share the link

---

## **Contributing**

Contributions are welcome!

1. Fork the repository
2. Create your branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature/feature-name`
5. Open a Pull Request

---

## **License**

This project is **MIT licensed**.

---

I can also **add badges at the top** for license, build, and Netlify status, which makes it look more professional on GitHub.

Do you want me to do that next?
