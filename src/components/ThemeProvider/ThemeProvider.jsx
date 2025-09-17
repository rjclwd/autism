// ThemeProvider.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ThemeProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    // Remove previous themes
    html.classList.remove("theme-blue", "theme-green");

    if (location.pathname.startsWith("/menscare")) {
      html.classList.add("theme-green");
    } else if (location.pathname.startsWith("/autism")) {
      html.classList.add("theme-blue");
    } else if (location.pathname.startsWith("/femalecare")) {
      html.classList.add("theme-pink")
    } else {
      // fallback theme (optional)
      html.classList.add("theme-blue");
    }
  }, [location.pathname]);

  return children;
}
