import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import YourMainComponent from './components/YourMainComponents';

function App() {
  return (
    <ThemeProvider>
      <YourMainComponent />
    </ThemeProvider>
  );
}

export default App;
