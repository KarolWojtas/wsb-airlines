import { useState, useEffect } from "react";

export default function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(
    document.documentElement.scrollTop
  );

  useEffect(() => {
    function handleScroll() {
      setScrollTop(document.documentElement.scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollTop;
}
