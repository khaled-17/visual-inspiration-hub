// Filename - Components/Modeswitcher.js

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
  
export default function Modeswitcher() {


	
	const [isDarkMode, setDarkMode] = useState(() => localStorage.getItem('theme') || 'light');



	// to add default theme to local storage 
	localStorage.theme?null:localStorage.setItem('theme','light')

	const toggleDarkMode = (checked) => {
		const newTheme = isDarkMode === 'light' ? 'dark' : 'light';
	  setDarkMode(newTheme);
		localStorage.setItem('theme', newTheme);
	};
	
	 

 if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	document.documentElement.classList.add('dark')
  } else {
	document.documentElement.classList.remove('dark')
  }
  

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode==='dark'}
      onChange={toggleDarkMode}
      size={120}
    />
  );
} 