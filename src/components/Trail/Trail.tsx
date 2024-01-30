import React, { FC } from 'react';
import './Trail.scss';
import User from '../../Model/User';
import * as Yup from 'yup';
import { useFormik } from 'formik';


interface TrailProps {
  addToUsersList: (user: User) => void;
}

const Trail: FC<TrailProps> = (props: TrailProps) => {
  const addUser = () => {
    props.addToUsersList(new User(myForm.values.id, myForm.values.name, myForm.values.userName, myForm.values.email));
    myForm.resetForm();
  };
  const myForm = useFormik({
    initialValues: new User('', '', '', ''),
    onSubmit: addUser,
    validationSchema: Yup.object().shape({
      id: Yup.string()
        .required('ID is required')
        .matches(/^[0-9]+$/, 'ID must contain only numbers')
        .min(9),
      name: Yup.string().required().min(2),
      userName: Yup.string().required().min(2),
      email: Yup.string().required().email(),
    }),
  });

  return <div className="trail">


    <div className="align">

      <div className="grid align__item">

        <div className="register">

          <h2>Add user</h2>

          <form onSubmit={myForm.handleSubmit} className="form">

            <div className="form__field">
              <label htmlFor='id'>Id</label>
              <input name='id' value={myForm.values.id} onChange={myForm.handleChange} className={myForm.errors.id ? 'form-control is-invalid' : 'form-control'} type="text" id="id"></input>
              {myForm.errors.id ? <div className='error-message'>{myForm.errors.id}</div> : ''}
            </div>

            <div className="form__field">
              <label htmlFor='name'>Name</label>
              <input name='name' value={myForm.values.name} onChange={myForm.handleChange} className={myForm.errors.name ? 'form-control is-invalid' : 'form-control'} type="text" id="name"></input>
              {myForm.errors.name ? <div className='error-message'>{myForm.errors.name}</div> : ''}
            </div>
            <div className="form__field">
              <label htmlFor="userName">Username</label>
              <input type="text" name='userName' value={myForm.values.userName} onChange={myForm.handleChange} className={myForm.errors.userName ? 'form-control is-invalid' : 'form-control'} id="username" />
              {myForm.errors.userName ? <div className='error-message'>{myForm.errors.name}</div> : ''}
            </div>
            <div className='form__field'>
              <label htmlFor="email">email</label>
              <input type="text" id="email" name='email' value={myForm.values.email} onChange={myForm.handleChange} className={myForm.errors.email ? 'form-control is-invalid' : 'form-control'} />
              {myForm.errors.email ? <div className='error-message'>{myForm.errors.email}</div> : ''}
            </div>


            <div className="form__field">
              {/* <input type="submit" onClick={props.addToUsersList} value="Sign Up" /> */}
              <button type='submit' className='btn btn-outline-secondary' >Add</button>
            </div>

          </form>


        </div>

      </div>

    </div>


  </div>
};


export default Trail;
// import React, { FC } from 'react';
// import './Trail.scss'; // Update the import to match your file name
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import User from '../../Model/User';

// interface UserDetailsProps {
//   addToUsersList: (user: User) => void;
// }

// const UserDetails: FC<UserDetailsProps> = (props: UserDetailsProps) => {
//   const addUser = () => {
//     props.addToUsersList(new User(myForm.values.id, myForm.values.name, myForm.values.userName, myForm.values.email));
//     myForm.resetForm();
//   };

//   const myForm = useFormik({
//     initialValues: new User('', '', '', ''),
//     onSubmit: addUser,
//     validationSchema: Yup.object().shape({
//       id: Yup.string()
//         .required('ID is required')
//         .matches(/^[0-9]+$/, 'ID must contain only numbers')
//         .min(9),
//       name: Yup.string().required().min(2),
//       userName: Yup.string().required().min(2),
//       email: Yup.string().required().email(),
//     }),
//   });

//   return (
//     <div className='user-details-form'>
//       <form onSubmit={myForm.handleSubmit} className='form'>
//         <h2>Add User</h2>
//         <div className='form__field'>
//           <label htmlFor='id'>Id</label>
//           <input
//             name='id'
//             value={myForm.values.id}
//             onChange={myForm.handleChange}
//             className={myForm.errors.id ? 'form-control is-invalid' : 'form-control'}
//             type='email'
//             placeholder='info@mailaddress.com'
//           />
//           {myForm.errors.id ? <div className='error-message'>{myForm.errors.id}</div> : ''}
//         </div>
//         <div className='form__field'>
//           <label htmlFor='email'>Email</label>
//           <input
//             name='email'
//             value={myForm.values.email}
//             onChange={myForm.handleChange}
//             className={myForm.errors.email ? 'form-control is-invalid' : 'form-control'}
//             type='email'
//             placeholder='info@mailaddress.com'
//           />
//           {myForm.errors.email ? <div className='error-message'>{myForm.errors.email}</div> : ''}
//         </div>

//         <div className='form__field'>
//           <label htmlFor='email'>Email</label>
//           <input
//             name='email'
//             value={myForm.values.email}
//             onChange={myForm.handleChange}
//             className={myForm.errors.email ? 'form-control is-invalid' : 'form-control'}
//             type='email'
//             placeholder='info@mailaddress.com'
//           />
//           {myForm.errors.email ? <div className='error-message'>{myForm.errors.email}</div> : ''}
//         </div>

//         <div className='form__field'>
//           <input type='submit' value='Sign Up' className='btn btn-outline-secondary' />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserDetails;
