import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Working on it!")
        setFirstName("");
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters")
        } else {
            setLastNameError("")
        }
    
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be at least 8 characters")
        } else {
            setConfirmPasswordError("")
        }
    }
    return (
        <>
        <form className='col-5 mx-auto my-5' onSubmit={handleSubmit}>
            <h2 className="text-center">Create User</h2>
            <label>First Name:</label>
            <input type="text"
                name="firstName"
                value={firstName}
                className="form-control"
                onChange={handleFirstName}
            />
            {
                firstNameError ? <p>{ firstNameError }</p>
                : ""
            }
            <label>Last Name:</label>
            <input type="text"
                name="lastName"
                value={lastName}
                className="form-control"
                onChange={handleLastName}
            />
            {
                lastNameError ? <p>{ lastNameError }</p>
                : ""
            }
            <label>Email:</label>
            <input type="text"
                name="email"
                value={email}
                className="form-control"
                onChange={handleEmail}
            />
            {
                emailError ? <p>{ emailError }</p>
                : ""
            }
            <label>Password:</label>
            <input type="password"
                name="password"
                value={password}
                className="form-control"
                onChange={handlePassword}
            />
            {
                passwordError ? <p>{ passwordError }</p>
                : ""
            }
            <label>Confirm Password:</label>
            <input type="password"
                name="confirmPassword"
                value={confirmPassword}
                className="form-control"
                onChange={handleConfirmPassword}
            />
            {
                confirmPasswordError ? <p>{ confirmPasswordError }</p>
                : ""
            }
            <input type="submit" value="Create User" className="btn btn-primary my-2"/>
        </form>
        <div className="col-5 my-5 mx-auto">
            <h4 className="text-center">Create User From Data</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        </>
    );
}

export default HookForm;