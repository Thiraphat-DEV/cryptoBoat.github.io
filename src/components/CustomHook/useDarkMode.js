import {useState, useEffect} from 'react'


const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true: false)

	const isDark = () => {
		if(darkMode) {
			document.body.classList.add('dark-mode')
			localStorage.setItem('theme', 'dark')
		}
		else{
			document.body.classList.remove('dark-mode')
			localStorage.setItem('theme', 'light')
		}
	}

	const toggleTheme =  () => {
		setDarkMode(!darkMode)
	}

	useEffect(() => {
		isDark()
	}, [darkMode])
	
	return [darkMode, toggleTheme];
}  

export default useDarkMode;