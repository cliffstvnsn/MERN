import React from 'react'

const BottomForm = (props) => {
    const {
        fname, lname, email, password, cpassword
    } = props.item
    return (
        <div>
            <p>Your Form Data</p>
            <p>First Name</p>
            <p>{fname}</p>
            <p>Last Name</p>
            <p>{lname}</p> 
            <p>Email address</p>
            <p>{email}</p> 
            <p>Password</p>
            <p>{password}</p> 
            <p>Confirm Password</p>
            <p>{cpassword}</p> 
        </div >
    )
}

export default BottomForm;