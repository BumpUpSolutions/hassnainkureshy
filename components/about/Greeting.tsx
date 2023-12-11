import React, { useEffect } from 'react';

export const Greeting = () => {
  useEffect(() => {
    const phrases = ["Full Stack Engineer", "Mobile Application Developer", "Solutions Architect"];
    let currentPhrase = 0;
    let currentLetter = 0;
    let typingSpeed = 150;
    let deletingSpeed = 50;
    let isDeleting = false;

    const type = () => {
      const display = document.getElementById("typing") as HTMLElement;
      const text = phrases[currentPhrase];

      if (isDeleting) {
        currentLetter--;
        if (currentLetter < 0) {
          currentPhrase = (currentPhrase + 1) % phrases.length;
          isDeleting = false;
        }
      } else {
        currentLetter++;
      }

      display.textContent = text.substring(0, currentLetter);

      if (!isDeleting && currentLetter === text.length) {
        isDeleting = true;
        setTimeout(type, typingSpeed * 10);
      } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    type();
  }, []);

  return (
    <div>
      <p className="text-6xl font-bold mb-2">Hello,</p>
      <p className="text-5xl font-semibold mb-4 text-orange-500">I&#39;m Hassnain Kureshy;</p>
      <div className="typing-effect">
        <span id="typing"></span>
      </div>
    </div>
  )
};
