import React from 'react';
import useForm from 'react-hook-form';

import './UserForm.scss';

type FormData = {
  firstName: string;
  lastName: string;
};

function UserForm() {
  const { register, setValue, handleSubmit, watch, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName); 
  });

  // Watches input
  console.log(watch('firstName'));

  return (
      <div className="userForm-container">
        <form onSubmit={onSubmit}>
          <input type="text" name="firstName" placeholder="First Name" ref={register({ required: true })} />
          <br/>
          <input type="text" name="lastName" placeholder="Last Name" ref={register({ required: true })} />
          <br/>
          <div className="dobPicker">
            <span>Date of Birth </span>
            <input type="date" name="dob" />
          </div>
          <br />
          <input type="submit" />
        </form>
      </div>
  );
}

export default UserForm;
