# VIX Core Initiative Final Project - E-commerce Product Display

This is the final project for the VIX Core Initiative program by Rakamin Academy. The goal is to build a single-page application (SPA) that displays products from an e-commerce API. This application is designed to dynamically feature men's and women's products, with a user interface that changes according to the product category.

## ✨ Key Features

- **Dynamic Product Display**: Fetches product data from the [Fake Store API](https://fakestoreapi.com/).
- **Product Navigation**: A "Next Product" button to browse through items.
- **Category-Based Dynamic Styling**: The page background and component styles automatically change based on the product category (`men's clothing` or `women's clothing`).
- **Unavailable Product Handling**: A dedicated display for products that fall outside the desired categories.
- **Modern Tech Stack**: Built with Vue 3, Vite, and TypeScript for a fast and efficient development experience.

---

## 🛠️ Tech Stack

- **Framework**: [Vue.js](https://vuejs.org/) (v3)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [Bun](https://bun.sh/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Styling**: Vanilla CSS (no frameworks)

---

## 📂 Project Structure

```
.
├── .vscode/
├── public/
│   └── favicon.ico
├── src/
│   ├── api/
│   │   └── index.ts
│   ├── assets/
│   │   ├── style/
│   │   │   └── page.css
│   │   ├── bg-pattern.svg
│   │   ├── logo.svg
│   │   └── sad-face.png
│   ├── components/
│   │   ├── ProductDisplay.vue
│   │   ├── Rating.vue
│   │   └── Welcome.vue
│   ├── router/
│   │   └── index.ts
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── ProductView.vue
│   ├── App.vue
│   └── main.ts
├── .gitignore
├── README.md
├── bun.lock
├── env.d.ts
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

---

## 🚀 Installation and Setup

To run this project in your local environment, follow these steps:

**Prerequisites:**

- [Node.js](https://nodejs.org/) (v22.11.0 or higher)
- [Bun](https://bun.sh/docs/installation)

**Steps:**

1.  **Clone this repository:**

    ```bash
    git clone https://github.com/fathurrahman20/ecommerce-catalog.git
    cd ecommerce-catalog
    ```

2.  **Install dependencies using Bun:**

    ```bash
    bun install
    ```

3.  **Run the development server:**

    ```bash
    bun dev
    ```

    or

    ```bash
    bun run dev
    ```

    The application will be running and accessible at `http://localhost:5173`.

---

## 📄 API Reference

This application uses the [Fake Store API](https://fakestoreapi.com/docs) to fetch product data.

- **Endpoint**: `https://fakestoreapi.com/products/{id}`
- **Method**: `GET`
- **Details**: `{id}` is a number from 1 to 20. The application will increment the `id` each time the "Next Product" button is clicked. If the `id` reaches 20, it will loop back to 1.

---

## ✍️ Author

- **Name**: Fathurrahman
- **LinkedIn**: [(Fathurrahman)](https://www.linkedin.com/in/fathurrahman-profile/)

---

## 🙏 Acknowledgments

- [Rakamin Academy](https://rakamin.com/) and [Core Initiative](https://coreinitiative.id//) for the learning opportunity and this challenging final project.
- [Fake Store API](https://fakestoreapi.com/) for providing free data for this project.

---
