import { FunctionComponent, useState } from 'react'

const BreakComponent: FunctionComponent = () => {
  const [pomodora, setPomodora] = useState<number>(25)
  const [shortBreak, setShortBreak] = useState<number>(5)
  const [longBreak, setLongBreak] = useState<number>(15)

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center p-10 gap-10 grow">
        <div className="flex flex-col bg-slate-200 rounded-lg p-4 shadow-md hover:cursor-pointer hover:bg-slate-100 hover:shadow-lg">
          <div>Pomodora Time</div>
          <div className=" flex justify-center">{pomodora}</div>
        </div>
        <div className="flex flex-col bg-slate-200 rounded-lg p-4 shadow-md hover:cursor-pointer hover:bg-slate-100 hover:shadow-lg">
          <div>Short Break</div>
          <div className=" flex justify-center">{shortBreak}</div>
        </div>
        <div className="flex flex-col bg-slate-200 rounded-lg p-4 shadow-md hover:cursor-pointer hover:bg-slate-100 hover:shadow-lg">
          <div>Long Break</div>
          <div className="flex justify-center">{longBreak}</div>
        </div>
      </div>
    </>
  )
}

export default BreakComponent
