import React from "react";

export default function useKeyup(key: string, callback: () => void) {
  React.useEffect(() => {
    function keyPressEscape(event: KeyboardEvent) {
      if (event.key === key) {
        callback();
      }
    }

    window.addEventListener("keyup", keyPressEscape);
    return () => {
      window.removeEventListener("keyup", keyPressEscape);
    };
  }, []);
}
