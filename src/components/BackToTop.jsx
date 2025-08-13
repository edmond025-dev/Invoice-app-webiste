import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid"; // Tailwind Heroicons

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
