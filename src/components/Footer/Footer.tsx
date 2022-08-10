import { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <div className="flex justify-center text-slate-500 p-10 ">
    <p className="-mt-8 text-center text-black-300">
          Click here to access{' '}
          <a
            href="https://mydash.fun/"
            className="underline"
          >
            Dashboard
          </a>
          . &copy; Paul Pon Raj 2022. All rights reserved.
     </p>
    </div>
  )
}

export default Footer
