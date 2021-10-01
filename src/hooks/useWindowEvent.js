import React from "react";

// Custom Hook for Localstorage event.
// Would have been use for localStorage.clear() if the user didn't validate anything in one hour
export const useWindowEvent = (event, callback) => {
    React.useEffect(() => {
      window.addEventListener(event, callback);
      return () => window.removeEventListener(event, callback);
    }, [event, callback]);
  }
