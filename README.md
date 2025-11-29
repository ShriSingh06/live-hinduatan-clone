📰 LiveHindustan Clone (Next.js & Tailwind CSS)
This project is a responsive, feature-rich clone of the LiveHindustan front page, built using Next.js 14 (Pages Router) and styled with Tailwind CSS. It was created as a demonstration of modern web development techniques, specifically focusing on data fetching, dynamic routing, and image optimization within the Next.js framework.

✨ Key Features
Next.js Pages Router: Utilizes the traditional Pages Router for routing and data fetching.

ISR Data Fetching: Implements getStaticProps with Incremental Static Regeneration (ISR) (revalidate: 60) for the home page, providing a balance of static performance and frequent data updates, ideal for a news portal.

Dynamic Routing: Articles are accessed via dynamic routes (e.g., /article/[slug]).

Next/Image Optimization: Uses the <Image> component for efficient loading and optimization of article images.

Responsive UI: Fully responsive design using Tailwind CSS, adapting to both desktop and mobile layouts.

SEO Metadata: Includes basic SEO considerations with <Head> metadata (title, description).

Mock API: Data is sourced from a local JSON file (src/data/mockData.json) to simulate a real-world API.

🚀 Getting Started
Follow these steps to get a copy of the project up and running on your local machine.

Prerequisites
You must have Node.js (LTS version recommended) and npm installed on your system.

Installation
Clone the Repository:

Bash

git clone https://github.com/YOUR_GITHUB_USERNAME/livehindustan-clone.git
cd livehindustan-clone
Install Dependencies:

Bash

npm install
(Note: The project is configured with specific stable versions of Next.js, Tailwind, and PostCSS to avoid common Turbopack/CSS chunking errors.)

💡 Running the Development Server
Due to persistent module resolution issues with the default Next.js development compiler (Turbopack) in some environments, the project is best run using the stable Webpack compiler, which we enforce using an environment variable.

Run the following command in your PowerShell (Windows) or standard terminal:

Windows PowerShell / Command Prompt
PowerShell

$env:NEXT_WEBPACK_NO_TURBOPACK=1 ; npm run dev
Linux / macOS
Bash

NEXT_WEBPACK_NO_TURBOPACK=1 npm run dev
Your application will now be accessible at: http://localhost:3000

📂 Project Structure
The key files and directories are located in src/:

livehindustan-clone/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NewsCard.tsx
│   │   └── MainHeadline.tsx
│   ├── data/
│   │   └── mockData.json    <- Fake API data source
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx        <- Home Page (using getStaticProps + ISR)
│   │   └── article/[slug].tsx <- Dynamic Article Page
│   └── styles/
│       └── globals.css      <- Tailwind directives
├── next.config.js           <- Next.js configuration (JavaScript required)
├── postcss.config.js        <- PostCSS configuration for Tailwind
└── tailwind.config.ts       <- Tailwind CSS content paths
📜 Justification for getStaticProps (ISR)
The Pages Router was chosen for this project to implement traditional Next.js data fetching methods.

We chose getStaticProps with revalidate: 60 (ISR) for the main index page because:

Speed: It pre-renders the page as static HTML, ensuring the fastest possible initial load time.

Freshness: The revalidate: 60 option ensures that the page is regenerated in the background every 60 seconds if a user requests it, keeping the content fresh without requiring a full build or sacrificing performance on every request (like getServerSideProps would). This pattern is optimal for high-traffic news sites.

🤝 Contributing
Feel free to fork this project and add features like:

Search functionality (client-side or server-side).

Category-specific filtering.

A real public news API instead of mock data.

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

Developed By: [Shriyansh Singh]
