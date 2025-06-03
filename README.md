Markdown

# Photography Portfolio Website

This is a responsive photography portfolio website showcasing various photography works, services, and an "About Me" section. It includes interactive elements implemented using JavaScript and jQuery.

## Features

### Website Structure and Design
* **Semantic HTML:** The website is structured using semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.) for better organization and accessibility.
* **Multiple Pages:** Includes five distinct pages: Home, Portfolio, About, Services, and Contact.
* **Navigation:** All pages are linked via a consistent navigation menu.
* **Responsive Design:** Utilizes Bootstrap 5 and custom CSS (Flexbox, Grid) to ensure proper display across different devices (PC, tablet, phone).
* **Aesthetics:** The design is intended to be user-friendly and visually appealing.

### Interactive JavaScript Functionality

The website incorporates dynamic and interactive features primarily through `main.js`, `script.js`, and `jquery.js`.

* **Dynamic Welcome Message:** The welcome message on the homepage changes dynamically.
* **Image Interaction:** Gallery images on the homepage have a click effect (scale transformation).
* **Random Photo Generator:** Generates a random photo ID and displays whether it's even/odd and greater/less than 5.
* **Price Comparator:** Allows users to compare two input prices and determine which is more expensive or if they are equal.
* **Photography Categories:** A dynamic list where users can add and delete photography categories, with data persisted in local storage.
* **Dynamic Photo Grid:** Programmatically generates a grid of featured photos using loops.
* **Toggle Gallery:** A button to fade in/out the gallery images on the homepage.
* **Audio Interaction:** Plays a sound when a specific button is clicked.
* **Higher-Order Functions & Objects:** Demonstrates the use of higher-order functions for event handling and JavaScript objects to manage content updates.

### Forms and Data Validation
* **Contact Form:** A functional contact form for users to send messages.
* **Client-Side Validation:** Form fields are marked as required to ensure data entry before submission.

### Code Optimization
* **Image Optimization:** Utilizes `.webp` format for some images to improve performance.

## Technologies Used

* **HTML5:** For semantic structuring of the content.
* **CSS3:** For styling, layout (Flexbox, Grid), and responsiveness.
* **Bootstrap 5:** A popular CSS framework for responsive design.
* **Font Awesome:** For icons used across the website.
* **JavaScript (ES6+):** For interactive elements, DOM manipulation, and dynamic content.
* **jQuery:** A fast, small, and feature-rich JavaScript library for simplified DOM manipulation and event handling.

## File Structure

.
├── css/
│   ├── about.css
│   ├── contact.css
│   ├── home.css
│   ├── portfolio.css
│   └── services.css
├── images/
│   ├── photographer.webp
│   ├── landscape1.webp
│   ├── landscape2.webp
│   └── landscape3.webp
│   ├── (other images like urban.jpg, portrait.jpg, event.jpg, etc.)
├── js/
│   ├── jquery.js
│   ├── main.js
│   └── script.js
├── audio/
│   └── click.mp3
├── about.html
├── contact.html
├── home.html
├── portfolio.html
├── services.html
└── README.md


## Setup and Usage

To run this project locally:

1.  **Clone the repository** (if hosted on Git) or download the project files.
2.  **Open the `home.html` file** in your web browser.
3.  Navigate through the different pages using the **navigation bar**.
4.  Interact with the **buttons and input fields** on the homepage to see the JavaScript functionalities in action.

## Deployment

The project is designed to be easily deployed on hosting services such as GitHub Pages, Netlify, or Vercel. Once deployed, it should be accessible via an external URL