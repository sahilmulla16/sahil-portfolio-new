# AI Development Rules - Sahil Portfolio

## Tech Stack
- **React (v18)**: Core frontend library for building the user interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Primary utility-first framework for all styling and responsive design.
- **GSAP (GreenSock)**: Used for complex, high-performance animations and scroll-triggered effects.
- **Framer Motion**: Used for simple component-level transitions, gestures, and entry/exit animations.
- **Three.js**: Powering 3D interactive elements and background scenes.
- **React Icons**: Source for all iconography (Fa, Si, etc.).
- **React Scroll**: Handles smooth navigation and active section tracking.

## Library Usage Rules
- **Styling**: Always use **Tailwind CSS** classes. Avoid writing custom CSS in `index.css` unless it's for global resets or complex third-party overrides.
- **Animations (Scroll)**: Use **GSAP** with `ScrollTrigger` for any animation that depends on the user's scroll position or requires complex sequencing.
- **Animations (UI)**: Use **Framer Motion** for simple hover effects, modal transitions, or basic "fade-in" components where GSAP might be overkill.
- **3D Content**: Keep **Three.js** implementations modular within dedicated components (like `ThreeScene.jsx`) to maintain performance.
- **Icons**: Prefer **Lucide React** (if available) or **React Icons**. Ensure icons are consistent in size and color within their context.
- **Class Management**: Use `clsx` and `tailwind-merge` (imported as `cn` utility if created) to handle conditional Tailwind classes cleanly.
- **Navigation**: Use `Link` from `react-scroll` for internal section jumping to maintain the smooth-scroll behavior.
- **State Management**: Use standard React `useState` and `useEffect` hooks. For complex global state, consider Context API before adding external libraries.