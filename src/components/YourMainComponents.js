import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import '../App.css';  // Corrected import statement

const YourMainComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Welcome to Our App</h1>
      <h2>A light-on-dark color scheme, better known as dark mode, dark theme or night mode<br></br>
      is a color scheme that uses light-colored text, icons, and graphical user interface elements on a dark background.</h2>
      <ThemeToggle />
      
    </div>
  );
};

export default YourMainComponent;
