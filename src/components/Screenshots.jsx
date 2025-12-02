import React, { useEffect, useRef } from 'react'
import './Screenshots.css'

const Screenshots = () => {
  // List of all screenshot files in public/features directory
  const screenshotFiles = [
    'academicPerformance.jpg',
    'attendanceCalculator3.jpg',
    'attendanceMatrix.jpg',
    'attendanceMatrix2.jpg',
    'attendenceCalculator.jpg',
    'attendenceCalculator2.jpg',
    'calender.jpg',
    'calenderTimeline.jpg',
    'cgpaGpaTools.jpg',
    'cgpaGpaTools2.jpg',
    'colourCustomizations.jpg',
    'customTheme.jpg',
    'dayWiseAttendence.jpg',
    'exam.jpg',
    'features1.jpg',
    'features2.jpg',
    'features3.jpg',
    'fonts.jpg',
    'friendsSchedule.jpg',
    'friendsSchedule2.jpg',
    'laundry.jpg',
    'marksHistory.jpg',
    'messMenu.jpg',
    'profilePage.jpg',
    'themesDark.jpg',
    'themesLight.jpg',
    'widgetCustomizations.jpg'
  ];

  const screenshots = screenshotFiles.map((file, index) => ({
    id: index + 1,
    src: `/features/${file}`,
    alt: `VITVerse ${file
      .replace('.jpg', '')
      .replace(/([A-Z])/g, ' $1')
      .trim()}`
  }));

  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Continuous smooth scrolling animation
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Pixels per frame

    const animate = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const initTimer = setTimeout(() => {
      const scrollTrack = scrollContainer.querySelector('.screenshots-scroll');
      if (scrollTrack) {
        const children = Array.from(scrollTrack.children);
        children.forEach(child => {
          const clone = child.cloneNode(true);
          clone.setAttribute('data-cloned', 'true');
          scrollTrack.appendChild(clone);
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="screenshots section">
      <div className="screenshots-container" ref={containerRef}>
        <div className="screenshots-scroll">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="screenshot-item">
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="screenshot-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
