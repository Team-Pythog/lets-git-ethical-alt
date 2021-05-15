import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

  const initialValues = {
    username: '',
    password: '',
  }

  const [values, setValues] = useState(initialValues);

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(values);
    setValues(initialValues)
  }

  function inputChangeHandler(event) {

    let { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  return (

    <body className="w-full h-screen bg-blue-300">
      <div className="w-1/3 p-4 m-auto my-8 text-center text-green-800 bg-red-300 border border-white rounded-lg place-self-center">
        <h1 className="text-2xl text-center">Lets - Git - Ethical</h1>
        <form className="p-3 m-2"onSubmit={submitHandler} >
          <div className="p-2 my-2">
            <label htmlFor="username">User Name  </label>
            <input type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
          </div>

          <div>
            <label htmlFor="password">Password  </label>
            <input type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
          </div>

          <button className="w-full my-2 bg-green-300 rounded-lg" type="submit">Sign In</button>

        </form>
      </div>
    </body>


  );
}