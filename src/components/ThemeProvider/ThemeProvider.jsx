// ThemeProvider.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ThemeProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    // Remove all previous themes
    html.classList.remove(
      "theme-blue",
      "theme-green",
      "theme-pink",
      "theme-orangepink",
      "theme-digestive",
      "theme-mind",
      "theme-urology",
      "theme-autoimmune",
      "theme-ent",
      "theme-hair",
      "theme-child",
      "theme-ortho",
      "theme-respiratory"
    );

    // Apply based on route
    if (location.pathname.startsWith("/autism")) {
      html.classList.add("theme-autism");             // Autism Care
    } else if (location.pathname.startsWith("/menscare")) {
      html.classList.add("theme-mens");            // Mens Care
    } else if (location.pathname.startsWith("/femalecare")) {
      html.classList.add("theme-female");             // Female Care
    } else if (location.pathname.startsWith("/skincare")) {
      html.classList.add("theme-skin");       // Skin Care
    } else if (location.pathname.startsWith("/digestivecare")) {
      html.classList.add("theme-digestive");        // Digestive Care
    } else if (location.pathname.startsWith("/mindcare")) {
      html.classList.add("theme-mind");             // Nervous & Mind Care
    } else if (location.pathname.startsWith("/urologycare")) {
      html.classList.add("theme-urology");          // Urology Care
    } else if (location.pathname.startsWith("/autoimmunecare")) {
      html.classList.add("theme-autoimmune");       // Autoimmune Care
    } else if (location.pathname.startsWith("/entcare")) {
      html.classList.add("theme-ent");              // ENT Care
    } else if (location.pathname.startsWith("/hairbeautycare")) {
      html.classList.add("theme-hair");             // Hair & Beauty Care
    } else if (location.pathname.startsWith("/childcare")) {
      html.classList.add("theme-child");            // Child Care
    } else if (location.pathname.startsWith("/orthocare")) {
      html.classList.add("theme-ortho");            // Ortho Care
    } else if (location.pathname.startsWith("/respiratorycare")) {
      html.classList.add("theme-respiratory");      // Respiratory Care
    } else {
      // fallback
      html.classList.add("theme-blue");
    }
  }, [location.pathname]);

  return children;
}
