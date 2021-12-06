import { createContext, useEffect, useState, useLayoutEffect } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [previousStepIndex, setPreviousSetIndex] = useState(-1)

  const [steps, setSteps] = useState({
    1: {},
    2: {},
    3: {},
    4: {}
  })

  useEffect(() => {
    const stepsString = window.localStorage.getItem('steps')
    const stepIndexString = window.localStorage.getItem('stepIndex')
    if (stepsString) {
      const steps = JSON.parse(stepsString)
      setSteps(steps)
    }
    if (stepIndexString) {
      const stepIndex = JSON.parse(stepIndexString)
      setStepIndex(stepIndex)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('steps', JSON.stringify(steps))
  }, [steps])


  useEffect(() => {
    window.localStorage.setItem('stepIndex', stepIndex)
  }, [stepIndex])

  const changeChoice = (step, key, deleteKey = false) => {
    let newStep = null;

    newStep = { ...steps[step], [key]: true }
    if (deleteKey) delete newStep[key]
    setSteps({ ...steps, [step]: newStep })
  }

  const changeIndexState = (index) => {
    const pre = stepIndex
    setStepIndex(index)
    setPreviousSetIndex(pre)
  }

  const states = {
    step1: steps[1],
    step2: steps[2],
    step3: steps[3],
    step4: steps[4],
    stepIndex,
    previousStepIndex
  }
  const setters = { changeIndexState, changeChoice }

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {children}
    </GlobalContext.Provider>
  );
}
