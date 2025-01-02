import React, { useState, useEffect} from 'react';
import { motion } from "framer-motion";
import './App.css';


function App() {

  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 30
  };

  const [popupType, setPopupType] = useState<string>('morning')
  const [morningStartClock, setMorningStartClock] = useState<string>('10:00');
  const [morningEndClock, setMorningEndClock] = useState<string>('11:30');
  
  const Clock = ({ startClock, endClock, state }: any) => {

    const [clockStart, setClockStart] = useState<any>(undefined);
    const [clockDistanse, setClockDistance] = useState<any>(undefined);
    function timeSuber() {
      var cs = 0
      var cd = 0
      var startList = startClock.split(':')
      var endList = endClock.split(':')
      var ResMin = Number(endList[1]) - Number(startList[1])
      var ResHour = Number(endList[0]) - Number(startList[0])

      var StartResMin = Number(startList[1])
      var StartResHour = Number(startList[0]) - 12

      if (Math.abs(StartResMin) == 30)
        cs += 1
      cs = cs + (StartResHour / (0.5))
      setClockStart((cs * 15) - 90)

      if (Math.abs(ResMin) == 30)
        cd += 1
      cd = cd + (ResHour / (0.5))
      setClockDistance(cd * (1 / 24))

    }
    useEffect(() => {
      timeSuber();
    }, [])


    return (
      <>
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: clockDistanse }}
          transition={{
            duration: 2,
            // repeat: Infinity,
            // repeatType: "loop",
          }}
          cx="50"
          cy="50"
          r="45"
          stroke="#0042FE"
          strokeWidth="5"
          fill="none"
          transform={`rotate(${clockStart} 50 50)`}
          strokeLinecap="round"
          // strokeDasharray={2 * Math.PI * 50}
          strokeLinejoin="round"
          className=" flex absolute z-10"
        />
      </>
    )
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
    <div  className="flex bg-gray-50 flex-col gap-2 w-full max-w-32 border border-gray-300 justify-center items-center p-2 rounded-2xl">      
    <div onClick={() => {setPopupType('morning')}} className={`flex justify-center items-center relative ${true ? `bg-green-200` : `bg-red-200`} rounded-[50%]`}>

      <img  className=" w-[100px] absolute z-20" src="/icons/clock1.svg" alt="not found" />
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        className="flex relative z-0"
      >
                

          <Clock startClock={morningStartClock} endClock={morningEndClock} />

      </motion.svg>
    </div>

    <div  className={`flex gap-2 p-1 border justify-center items-center ${true ? `border-primary-300 bg-primary-50` : `border-red-300 bg-red-50`}  rounded-md`}>
    <div className={`switch cursor-pointer ${true ? `bg-primary-400` : `bg-red-400`}`} data-isOn={true}
      >
        <motion.div className="handle bg-primary-50" layout transition={spring} />
      </div>
    <p className={`${true ? `text-primary-700` : `text-red-700`} text-BodyText/14/Bold`}>morning</p>
    </div>
  </div>
  </div>
  );
}

export default App;