<header>
    <!--Nav-->
    <nav aria-label="menu nav" class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div class="flex flex-wrap items-center">
            <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                <a href="#" aria-label="Home">
                    <span class="text-xl pl-2"><i class="em em-grinning"></i></span>
                </a>
            </div>

<div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-black px-2">
                <span class="relative w-full">
                <script async src="https://cse.google.com/cse.js?cx=1236b84bea0d14837">
                         </script>
                    <div class="gcse-search"></div>
                        </svg>
                    </div>
                </span>
            </div>
            
        </div>
    </nav>
</header>
import { FunctionComponent, useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { BiSun } from 'react-icons/bi'

interface Props {
  // eslint-disable-next-line no-unused-vars
  setTheme: (val: any) => void
  theme: 'light' | 'dark'
}

const AppBar: FunctionComponent<Props> = (props: Props) => {
  const { setTheme, theme } = props

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between p-6 gap-10">
        <div className="text-4xl tracking-widest font-extrabold font-mono text-slate-600 dark:text-slate-100">
          Pomodora
        </div>
        <div className="flex gap-8">
          <div
            className="m-auto hover:cursor-pointer dark:text-slate-50"
            onClick={handleTheme}
          >
            {theme === 'light' ? <FaRegMoon size={24} /> : <BiSun size={24} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBar
