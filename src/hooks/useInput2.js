import { useState } from 'react'

const useInput2 = validateValue => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value)
  }

  const valueBlurHandler = event => {
    setIsTouched(true)
  }

  const resetValue = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    resetValue,
    valueChangeHandler,
    valueBlurHandler,
  }
}

export default useInput2
