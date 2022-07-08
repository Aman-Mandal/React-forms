import { useRef, useState } from 'react'

const SimpleInput = props => {
  // Name States
  const inputRef = useRef()
  const [enteredNameInput, setenteredNameInput] = useState('')
  const [enteredNameInputIsTouched, setenteredNameInputIsTouched] =
    useState(false)
  const enteredNameInputIsValid = enteredNameInput.trim() !== ''
  const enteredNameInputIsInvalid =
    !enteredNameInputIsValid && enteredNameInputIsTouched

  // Email States
  const [enteredEmailInput, setEnteredEmailInput] = useState('')
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false)

  const emailChangeHandler = event => {
    setEnteredEmailInput(event.target.value)
  }

  const emailBlurHandler = event => {
    setEnteredEmailIsTouched(true)
  }

  const enteredEmailIsValid = enteredEmailInput.includes('@')
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched

  let formIsValid = false

  if (enteredNameInputIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  // using State
  const nameChangeHandler = event => {
    setenteredNameInput(event.target.value)
  }

  const inputBlurHandler = event => {
    setenteredNameInputIsTouched(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setenteredNameInputIsTouched(true)
    setEnteredEmailIsTouched(true)

    if (!enteredNameInputIsValid) {
      return
    }

    // inputRef.current.value = '' ==> NOT IDEAL
    setenteredNameInput('')
    setenteredNameInputIsTouched(false)
    
    setEnteredEmailInput('')
    setEnteredEmailIsTouched(false)
    console.log('submitted')
  }

  const customNameClasses = enteredNameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const customEmailClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={customNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredNameInput}
        />
        {enteredNameInputIsInvalid && (
          <p className="error-text">Name can't be empty.</p>
        )}
      </div>

      <div className={customEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailInput}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Email should include '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
