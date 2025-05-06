# ❌ Sorry-as-a-Service'eh

<p align="center">
  <img src="https://raw.githubusercontent.com/3xHelix/sorry-as-a-service/main/assets/imgs/saas-with-no-logo-cannuck.png" width="800" alt="Sorry-as-a-Service'eh Banner" width="70%"/>
</p>


Ever needed a polite way to say “sorry, eh”?
This tiny API delivers random, overly apologetic, overly polite, and occasionally hilarious Canadian-style rejections — ideal for any situation: awkward social moments, workplace letdowns, ghosting politely, or just because you're Canadian and feel bad about everything.

Built for humans, humility, and humor. Sorry in advance. 🍁

---

## 🚀 API Usage

**Base URL**
```
https://naas.sh/eh
```

**Method:** `GET`
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request
```http
GET /eh
```

### ✅ Example Response
```json
{
  "reason": "Sorry, I’d say yes, but the geese advised against it."
}
```

Use it in apps, bots, landing pages, Slack integrations, apology notes, or wherever you need a polite (or hilariously Canadian) “sorry, eh?”

---

## 🛠️ Self-Hosting

Want to run it yourself? It’s lightweight and simple.

### 1. Clone this repository
```bash
git clone https://github.com/3xHelix/sorry-as-a-service.git
cd sorry-as-a-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:4242/eh
```

You can also change the port using an environment variable:
```bash
PORT=9090 npm start
```

---

## 📁 Project Structure

```
no-as-service/
├── index.js            # Express API
├── sorries.json        # 600+ universally polite Canadian-style sorry reasons, eh [More to come soon'eh]
├── package.json
└── README.md
```

---

## 📦 package.json

For reference, here’s the package config:

```json
{
  "name": "sorry-as-service'eh",
  "version": "1.0.0",
  "description": "A lightweight API that returns random, polite Canadian-style rejection or 'sorry' reasons, eh.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "hotheadhacker, adapted by 3xHelix",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## 👤 Author
##      Credits

This project is a fork of [No-as-a-Service](https://github.com/hotheadhacker/no-as-a-service) by [hotheadhacker](https://github.com/hotheadhacker).
Big thanks to them for the original concept and API. This version has been transformed into **Sorry-as-a-Service'eh** (SaaS'eh) with a twist of Canadian politeness, eh!

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)
Adapted with Canadian ‘sorry, eh’ willpower and a whole lot of maple syrup by [3xHelix](https://github.com/3xHelix/)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no'eh.
