# Age Calculator — Precision Chronological Age & Time Engine

A clean, responsive frontend web application built with pure Vanilla JavaScript, semantic HTML5, and modern CSS3 that calculates precise chronological age in years, months, and days from any selected birth date with dynamic calendar boundary checks.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Demo-06b6d4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://syedabsar99.github.io/age-calculator/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](script.js)
[![HTML5 & CSS3](https://img.shields.io/badge/Stack-HTML5%20%26%20CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white)](style.css)
[![License](https://img.shields.io/badge/License-MIT-6366f1?style=for-the-badge)](LICENSE)

---

## Preview

![Age Calculator Preview](preview.png)

> **Live Demo:** [syedabsar99.github.io/age-calculator](https://syedabsar99.github.io/age-calculator/)

---

## Overview

Developed by **Syed Noor Ul Absar**, this application solves the classic calendar arithmetic problem of calculating exact age across varying month lengths (28, 29, 30, and 31 days) and leap years without relying on external libraries or date-time frameworks like Moment.js or date-fns.

It features a modern dark-gradient card interface, strict date boundaries preventing future-date selection, and real-time DOM updates.

---

## Key Features

- **Exact Calendar Arithmetic** — Accurately computes differences between birth date and current date across years, months, and days, adjusting for borrow-days based on preceding month lengths.
- **Future Date Restriction** — Dynamically restricts the HTML5 date input's `max` attribute to the current calendar date (`toISOString().split("T")[0]`).
- **Validation & Empty State Handling** — Validates user selection before triggering calculation, preventing false or negative outputs.
- **Micro-Animations & Visual Focus** — Smooth hover transforms and vibrant gradient button feedback.
- **Fully Mobile Responsive** — Media-query optimized card layout adapting fluidly on smartphones, tablets, and desktop displays.

---

## Tech Stack

| Layer | Technologies | Details |
| :--- | :--- | :--- |
| **Structure** | Semantic HTML5 | Clean input wrappers, accessible labels, meta tags |
| **Styling** | Modern CSS3 | Linear gradients, Flexbox, custom form controls, media queries |
| **Logic** | Vanilla JavaScript (ES6+) | Native Date object manipulation, calendar math, DOM event handling |
| **Hosting** | GitHub Pages | Fast CDN deployment with HTTPS |

---

## Project Structure

```text
age-calculator/
├── .gitignore         # Git ignore configuration
├── index.html         # Application layout and input container
├── LICENSE            # MIT open-source license
├── preview.png        # High-resolution application preview screenshot
├── README.md          # Comprehensive repository documentation
├── script.js          # Core age calculation algorithm & DOM handlers
└── style.css          # Design system, layout, and mobile responsive rules
```

---

## Getting Started

No build tools or package installations are required.

### 1. Clone the repository
```bash
git clone https://github.com/syedabsar99/age-calculator.git
```

### 2. Open locally
Launch `index.html` directly in your web browser:
```bash
cd age-calculator
start index.html
```

Or run via any static web server:
```bash
npx serve .
# or
python -m http.server 8080
```

---

## Author & Contact

**Syed Noor Ul Absar**
- **Role**: Frontend Web Developer
- **Education**: Bachelor of Computer Applications (BCA), Chandigarh University (8.35 SGPA)
- **Portfolio**: [syedabsar99.github.io/portfolio](https://syedabsar99.github.io/portfolio/)
- **GitHub**: [@syedabsar99](https://github.com/syedabsar99)
- **LinkedIn**: [linkedin.com/in/syed-noor-ul-absar-7b6408365](https://www.linkedin.com/in/syed-noor-ul-absar-7b6408365/)
- **Email**: syedabsar99@gmail.com

---

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use, modify, and distribute for educational or personal use.
