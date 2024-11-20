import { useEffect } from "react";
import { useState } from "react";

const useHeaderBackground = (scrollThreshold) => {
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > scrollThreshold) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);
  return hasBackground;
};

export default useHeaderBackground;
