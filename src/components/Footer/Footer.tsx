import { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <div className="flex justify-center text-slate-500 p-10 ">
    <p className="-mt-8 text-center text-black-300">
          Made with ♡ by{' '}
          <a
            href="https://saurish.com/?utm_source=uranium"
            className="underline"
          >
            Saurish
          </a>
          . &copy; Uranium 2022. All rights reserved.
      <script async src="https://cse.google.com/cse.js?cx=1236b84bea0d14837">
                         </script>
        </p>
    </div>
  )
}

export default Footer
