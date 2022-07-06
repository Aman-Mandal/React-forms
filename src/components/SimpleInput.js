import { useRef, useState } from 'react'

const SimpleInput = props => {
  // const inputRef = useRef()
  const [enteredInput, setEnteredInput] = useState('')
  const [enteredInputIsValid, setEnteredInputIsValid] = useState(false)
  const [enteredInputIsTouched, setEnteredInputIsTouched] = useState(false)

  // using State
  const inputChangeHandler = event => {
    setEnteredInput(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setEnteredInputIsTouched(true)

    if (enteredInput.trim() === '') {
      setEnteredInputIsValid(false)
      return
    }

    // console.log(inputRef.current.value)
    console.log(enteredInput)
    setEnteredInputIsValid(true)

    // inputRef.current.value = '' ==> NOT IDEAL
    setEnteredInput('')
  }

  const enteredInputIsInvalid = !enteredInputIsValid && enteredInputIsTouched

  const customClasses = enteredInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={customClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={inputRef}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          value={enteredInput}
        />
        {enteredInputIsInvalid && (
          <p className="error-text">Name can't be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
