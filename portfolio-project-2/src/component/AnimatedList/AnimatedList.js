import React, { useState, useEffect } from 'react';

const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];

function AnimatedList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the current index to move to the next question
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 3000); // Change question every 3 seconds (adjust as needed)

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="animated-list">
      {questions.map((question, index) => (
        <div
          key={index}
          className={`list-item ${index === currentIndex ? 'active' : ''}`}
        >
          {question}
        </div>
      ))}
    </div>
  );
}

export default AnimatedList;
