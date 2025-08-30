# 🎉 Random Quote Generator (React + Vite + Tailwind)

A simple and elegant **Random Quote Generator** built with **React, Vite, and Tailwind CSS**.  
It fetches a random quote from the [Hashnode Free API](https://api.freeapi.app/api/v1/public/quotes/quote/random) and displays it beautifully.

---

## 🚀 Features
- Fetches **random quotes** with author and tags.
- Beautiful **gradient background** with a modern UI.
- **Loading state** while fetching quotes.
- Built with **React (Vite)** and styled using **Tailwind CSS**.

---

## 🛠️ Tech Stack
- **React 18** (via Vite)
- **Axios** (for API calls)
- **Tailwind CSS** (for styling)

---

## 📦 Installation

Clone this repository:

```bash
git clone https://github.com/your-username/quote-app.git
cd quote-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🖼️ Screenshot

![App Screenshot](./screenshot.png)

---

## 🔗 API Reference

API used:  
`https://freeapi.hashnode.space/api-guide/apireference/getARandomQuote`

Example Response:
```json
{
  "statusCode": 200,
  "data": {
    "author": "Alan Watts",
    "content": "No work or love will flourish out of guilt, fear...",
    "tags": ["Future", "Life"],
    "authorSlug": "alan-watts",
    "length": 169,
    "dateAdded": "2022-03-12",
    "dateModified": "2023-04-14",
    "id": 246
  },
  "message": "Quote fetched successfully",
  "success": true
}
```

---

## ⚡ Usage

1. Start the app.
2. Click **"Get a Quote"** button.
3. Enjoy inspirational quotes!

---

