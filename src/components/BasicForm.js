import useInput2 from '../hooks/useInput2'

const BasicForm = props => {
  // First Name
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: FirstNameHasError,
    valueChangeHandler: FirstNameChangeHandler,
    valueBlurHandler: FirstNameBlurHandler,
    resetValue: resetFirstName,
  } = useInput2(value => value.trim() !== '')

  // Last Name
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    resetValue: resetLastName,
  } = useInput2(value => value.trim() !== '')

  // Email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput2(value => value.includes('@'))

  let formIsValid = false

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    if (
      !enteredFirstNameIsValid ||
      !enteredFirstNameIsValid ||
      !enteredEmailIsValid
    ) {
      return
    }

    resetFirstName()
    resetLastName()
    resetEmailInput()
  }

  const customFirstNameClasses = FirstNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const customLastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control'

  const customEmailClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={customFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={FirstNameBlurHandler}
            onChange={FirstNameChangeHandler}
            value={enteredFirstName}
          />
          {FirstNameHasError && (
            <p className="error-text">First Name can't be empty</p>
          )}
        </div>
        <div className={customLastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name can't be empty</p>
          )}
        </div>
      </div>
      <div className={customEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email should include '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
