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
      "theme-respiratory",
      "theme-autism",
      "theme-mens",
      "theme-female",
      "theme-skin"
    );

    // Normalize the path: strip out the base URL (e.g. "/awareness" in production)
    const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // "/awareness" in prod, "" in dev
    const path = location.pathname.replace(base, "");

    // Apply themes based on route
    if (path.startsWith("/autism")) {
      html.classList.add("theme-autism"); // Autism Care
    } else if (path.startsWith("/menscare")) {
      html.classList.add("theme-mens"); // Mens Care
    } else if (path.startsWith("/femalecare")) {
      html.classList.add("theme-female"); // Female Care
    } else if (path.startsWith("/skincare")) {
      html.classList.add("theme-skin"); // Skin Care
    } else if (path.startsWith("/digestivecare")) {
      html.classList.add("theme-digestive"); // Digestive Care
    } else if (path.startsWith("/nervmindcare")) {
      html.classList.add("theme-mind"); // Nervous & Mind Care
    } else if (path.startsWith("/urologycare")) {
      html.classList.add("theme-urology"); // Urology Care
    } else if (path.startsWith("/autoimmunecare")) {
      html.classList.add("theme-autoimmune"); // Autoimmune Care
    } else if (path.startsWith("/entcare")) {
      html.classList.add("theme-ent"); // ENT Care
    } else if (path.startsWith("/hairbeautycare")) {
      html.classList.add("theme-hair"); // Hair & Beauty Care
    } else if (path.startsWith("/childcare")) {
      html.classList.add("theme-child"); // Child Care
    } else if (path.startsWith("/orthocare")) {
      html.classList.add("theme-ortho"); // Ortho Care
    } else if (path.startsWith("/respiratorycare")) {
      html.classList.add("theme-respiratory"); // Respiratory Care
    } else {
      // Fallback
      html.classList.add("theme-autism");
    }
  }, [location.pathname]);

  return children;
}
