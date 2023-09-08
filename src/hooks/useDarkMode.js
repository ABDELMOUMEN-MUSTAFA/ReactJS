import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      dark ? "dark" : "light"
    );

    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
