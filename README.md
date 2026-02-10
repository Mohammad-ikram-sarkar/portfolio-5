# Portfolio Website

This is a modern, responsive portfolio website built with React and Vite. It showcases my skills, projects, and professional journey as a Full Stack Web Developer. The application is designed as a Single Page Application (SPA) with smooth scrolling navigation and interactive elements.

## Features

- **Single Page Architecture (SPA)**: seamless navigation between sections without page reloads.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Interactive UI**: Utilizing Framer Motion for engaging animations and transitions.
- **Dark/Light Mode**: Built-in theme toggle for better user experience.
- **Modern Tech Stack**: Built with React, Tailwind CSS, and Shadcn UI components.
- **Contact Form**: Integrated contact section for easy communication.

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Routing**: React Router (for SPA structure)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfolio-5.git
    cd portfolio-5
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**

    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── ui/          # Shadcn UI primitives
│   └── ...
├── Hero/            # Main layout components
│   ├── Home.jsx     # Main landing page composing all sections
│   └── Header.jsx   # Top navigation with scroll spy
├── page/            # Section components
│   ├── Project.jsx  # Projects section
│   ├── Skill.jsx    # Skills section
│   ├── Experience.jsx # Journey/Experience section
│   └── Contact.jsx  # Contact section
└── App.jsx          # Application entry point
```

## Customization

-   **Content**: Update the data arrays in `Home.jsx`, `Project.jsx`, `Skill.jsx`, and `Experience.jsx` to reflect your own information.
-   **Images**: Replace images in only the `src/assets` folder.
-   **Theme**: Customize colors and styles in `tailwind.config.js` and `index.css`.

## License

This project is open-source and available under the [MIT License](LICENSE).
