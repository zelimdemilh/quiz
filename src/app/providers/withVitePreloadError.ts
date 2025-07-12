import { ReactNode } from "react";

// FYI
// https://github.com/vitejs/vite/issues/11804
// https://vitejs.dev/guide/build#load-error-handling
const withVitePreloadError = (component: () => ReactNode) =>
  function withVitePreloadErrorProvider() {
    window.addEventListener("vite:preloadError", (event) => {
      console.log(event);
      window.location.reload();
    });
    return component();
  };

export default withVitePreloadError;
