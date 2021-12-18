import Nav from './components/Navbar/Nav'
import Column from './components/Column/Column'
import './App.css'
import useDarkMode from './components/CustomHook/useDarkMode'


function App() {
  const [darkMode, toggleTheme] = useDarkMode()
  return (
    <>
      <Nav />
      <Column />
    </>
  );
}

export default App;
