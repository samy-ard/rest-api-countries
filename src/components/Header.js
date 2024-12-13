import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setDarkMode] = useState(false);

  // Helper Functions
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${
      value || ""
    }${expires}; SameSite=None; Secure; path=/`;
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }

  // Apply Dark Mode Based on Cookie
  useEffect(() => {
    const mode = getCookie("mode");
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        eraseCookie("mode");
        setCookie("mode", "dark", 30);
      } else {
        document.documentElement.classList.remove("dark");
        eraseCookie("mode");
        setCookie("mode", "light", 30);
      }
      return newMode;
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row align-center space-between">
          <div className="col-auto">
            <h1 className="brand">Where in the world?</h1>
          </div>
          <div className="col-auto">
            <div className="mode">
              <input
                id="switcher"
                type="checkbox"
                className="mode-switcher"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <label htmlFor="switcher" className="mode-label">
                <span className="mode-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256Z"
                      fill="var(--icon-fill)"
                      fillOpacity="1"
                      stroke="var(--icon-stroke)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="mode-text">Dark Mode</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
