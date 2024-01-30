import React, { FC } from 'react';
import './userDetials.scss';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import User from '../../Model/User';
import { debugPort } from 'process';

interface UserDetialsProps {
  addToUsersList: (s: User) => void
}

const UserDetials: FC<UserDetialsProps> = (props: UserDetialsProps) => {
  const addUser = () => {
    props.addToUsersList(new User(myForm.values.id, myForm.values.name, myForm.values.userName, myForm.values.email));
    myForm.resetForm();
  }
  const myForm = useFormik({
    initialValues: new User("", "", "", ""), onSubmit: addUser, validationSchema: Yup.object().shape({
      id: Yup.string()
        .required('ID is required')
        .matches(/^[0-9]+$/, 'ID must contain only numbers').min(9),
      name: Yup.string().required().min(2),
      userName: Yup.string().required().min(2),
      email: Yup.string().required().email()
    })
  })

  return <div className=' user-details-form'>
    <form onSubmit={myForm.handleSubmit} >
      <h3 >Add User</h3>
      <div>
        <label htmlFor='id'>Id</label>
        <input name='id' value={myForm.values.id} onChange={myForm.handleChange} className={myForm.errors.id ? 'form-control is-invalid' : 'form-control'} type="text" placeholder="id" id="id"></input>
        {myForm.errors.id ? <div className='error-message'>{myForm.errors.id}</div> : ''}
      </div>

      <div>
        <label htmlFor="name" >Name</label>
        <input type='string' placeholder='name' id='name' name='name' value={myForm.values.name} onChange={myForm.handleChange} className={myForm.errors.name ? 'form-control is-invalid' : 'form-control'}></input>
        {myForm.errors.name ? <div className='error-message'>{myForm.errors.name}</div> : ''}
      </div>
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" placeholder="UserName" name='userName' value={myForm.values.userName} onChange={myForm.handleChange} className={myForm.errors.userName ? 'form-control is-invalid' : 'form-control'} id="username" />
        {myForm.errors.userName ? <div className='error-message'>{myForm.errors.userName}</div> : ''}
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="text" placeholder="email" id="email" name='email' value={myForm.values.email} onChange={myForm.handleChange} className={myForm.errors.email ? 'form-control is-invalid' : 'form-control'} />
        {myForm.errors.email ? <div className='error-message'>{myForm.errors.email}</div> : ''}
      </div>

      <div>
        <button type='submit' className='btn btn-outline-secondary' >Add</button>
      </div>
    </form>
  </div>
};



export default UserDetials;
