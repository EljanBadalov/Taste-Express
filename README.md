# 🚚 Ləzzət Express - Order Engine Backend Logic

A modern JavaScript project demonstrating ES6 asynchronous programming concepts using Promises, including Promise chaining, Promise combinators, and synchronous error handling.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Promises](https://img.shields.io/badge/Promises-Async_Programming-blue?style=for-the-badge)
![Holberton](https://img.shields.io/badge/Holberton-Full_Stack-EF4135?style=for-the-badge)

---

# 🌟 Overview

**Ləzzət Express** is a backend simulation project built to practice modern JavaScript asynchronous programming. The application mimics a food delivery platform by simulating order confirmations, restaurant availability, driver assignment, cache lookups, and address validation using native ES6 Promise APIs.

The project focuses on understanding asynchronous workflows without using **async/await**, relying entirely on Promise methods and synchronous exception handling.

---

# ✨ Features

- **Promise Creation** using `new Promise()`
- **Promise Chaining** with `then()`, `catch()`, and `finally()`
- **Parallel Operations** using `Promise.all()`
- **Fault-Tolerant Processing** using `Promise.allSettled()`
- **Fastest Response Selection** using `Promise.race()`
- **Instant Promise Resolution** with `Promise.resolve()` and `Promise.reject()`
- **Synchronous Validation** using `try`, `catch`, `throw`, and `finally`
- **Network Request Simulation** using `setTimeout()`
- **ES6 Module Architecture** using `import` / `export`

---

# 🛠️ Tech Stack

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js
- **Architecture:** ES Modules
- **Concepts:** Promises, Error Handling
- **Testing:** Provided main.js files

---

# 📂 Project Structure

```text
Lazzat-Express/
├── package.json
│
├── 0-confirm_order.js          # Creating Promises
├── 1-handle_operation.js       # then / catch / finally
├── 2-load_menus.js             # Promise.all()
├── 3-open_restaurants.js       # Promise.allSettled()
├── 4-driver_race.js            # Promise.race()
├── 5-cache.js                  # Promise.resolve() / Promise.reject()
├── 6-validate_address.js       # try / catch / throw / finally
│
├── 0-main.js
├── 1-main.js
├── 2-main.js
├── 3-main.js
├── 4-main.js
├── 5-main.js
├── 6-main.js
│
└── README.md
```

---

# 📚 Learning Objectives

After completing this project, you should be able to explain:

- What a Promise is
- Promise states:
  - Pending
  - Fulfilled
  - Rejected
- Creating custom Promises
- Using `resolve()` and `reject()`
- Chaining with:
  - `then()`
  - `catch()`
  - `finally()`
- Running asynchronous operations in parallel using `Promise.all()`
- Handling successful and failed Promises using `Promise.allSettled()`
- Selecting the fastest Promise using `Promise.race()`
- Returning already-settled Promises using:
  - `Promise.resolve()`
  - `Promise.reject()`
- Handling synchronous exceptions with:
  - `try`
  - `catch`
  - `throw`
  - `finally`

---

# 🚀 Running the Project

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd Lazzat-Express
```

Run any task:

```bash
node 0-main.js
```

or

```bash
node 3-main.js
```

or

```bash
node 6-main.js
```

---

# 📖 Core Concepts Demonstrated

| Task | Concept |
|------|---------|
| Task 0 | Creating Promises |
| Task 1 | then / catch / finally |
| Task 2 | Promise.all |
| Task 3 | Promise.allSettled |
| Task 4 | Promise.race |
| Task 5 | Promise.resolve / Promise.reject |
| Task 6 | try / catch / throw / finally |

---

# 🎯 Skills Gained

- ES6 Modules
- Promise-based Asynchronous Programming
- Error Handling
- JavaScript Event Loop Fundamentals
- Parallel Async Operations
- Promise Combinators
- Clean Function Design
- Backend Logic Simulation

---

# 👨‍💻 Author

**Ruslan Badalov**

Holberton School Azerbaijan — Full Stack Software Engineering
