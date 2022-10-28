import React from 'react'

const TopForm = (props) => {
    const onChangeHandler = (e) => {
        props.setItem({...props.item, [e.target.name]: e.target.value})
        console.log(props.item)
    }
    return (
        <div>
            <form>
            <div class="form-group">
                <label for="firstname">First Name </label>
                <input type="text" className="form-control form-text text-muted" name="fname" onChange={onChangeHandler}/>
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" className="form-control form-text text-muted" name="lname" onChange={onChangeHandler}/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control form-text text-muted" name="email" onChange={onChangeHandler}/>
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" className="form-control form-text text-muted" name="password" onChange={onChangeHandler}/>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control form-text text-muted" name="cpassword" onChange={onChangeHandler}/>
            </div>
            </form>
        </div>
    )
}

export default TopForm;

