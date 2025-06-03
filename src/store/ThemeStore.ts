import { create } from "zustand"; // Zustand store for theme management
import { persist } from "zustand/middleware"; // Middleware for persistence

type Theme = "light" | "dark"

interface ThemeStore {
    theme: Theme,
    toggleTheme: () => void;
}

// Create a Zustand store for managing the theme
// The store will persist the theme preference across sessions
export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: 
                typeof window !== "undefined" &&  // check if it is on a browser
                window.matchMedia("(prefers-color-scheme: dark)").matches // check if the user prefers dark mode
                ? "dark"
                : "light",
            toggleTheme: () => { // Function to toggle the theme
                // Toggle between light and dark themes
                const newTheme: Theme = get().theme === "light" ? "dark" : "light";// Determine the new theme
                if(typeof document !== "undefined") { // Ensure we are in a browser environment
                    // Update the document's class to reflect the new theme
                    document.documentElement.classList.toggle( 
                        "dark",
                        newTheme === "dark"
                    );
            }
                set({ theme: newTheme });
            },
        }),
        {
            name: "theme",
            onRehydrateStorage: () => (state) => {
                if (state?.theme === "dark") {
                document.documentElement.classList.add("dark");
                } else {
                document.documentElement.classList.remove("dark");
                }
            },
        }
    ))