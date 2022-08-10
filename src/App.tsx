import { useEffect, useState } from 'react'
import AppBar from './components/AppBar'
import BreakComponent from './components/BreakComponent/BreakComponent'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="md:px-14 lg:px-36 xl:px-80 h-screen bg-slate-50 dark:bg-slate-900">
      <AppBar theme={theme} setTheme={setTheme} />
      <BreakComponent />
      <Footer />
      <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-black px-2">
                <span class="relative w-full">
                <script async src="https://cse.google.com/cse.js?cx=1236b84bea0d14837">
                         </script>
                    <div class="gcse-search"></div>
    </div>
  )
}

export default App
