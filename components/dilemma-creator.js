import { useState } from 'react'

export default function DilemmaCreator({ token, createEvent }) {
  const reset = {
    title: '',
    image: '',
    text: '',
    response_0: '',
    response_1: '',
  };
  const [values, setValues] = useState(reset);

  function submitHandler(event) {
    event.preventDefault();
    createEvent(token, values);
    setValues(reset);
  }

  function inputChangeHandler(event) {
    let { name, value, type } = event.target;

    if (type === "number") {
      value = parseFloat(value);
    }
    setValues({ ...values, [name]: value });
  }
  return (
    <div className="w-5/6 p-3 m-auto text-green-800 bg-red-300 rounded-lg">
      <form className="grid grid-flow-row grid-flow-col gap-4" onSubmit={submitHandler}>
        <input type="text" placeholder='Name of Dilemma' name='title' value={values.title} onChange={inputChangeHandler} required />
        <input  type="file" name="image" accept="image/png, image/jpeg, image/gif" value={values.image} onChange={inputChangeHandler} />
        <input className="h-20" type="text" placeholder='Your Dilemma' name='text' value={values.text} onChange={inputChangeHandler} required />
        <input type="text" placeholder='Answer 1' name='response_0' value={values.response_0} onChange={inputChangeHandler} required />
        <input type="text" placeholder='Answer 2' name='response_1' value={values.response_1} onChange={inputChangeHandler} required />
        <input className="bg-green-300 rounded-lg" type="submit" />
      </form>
    </div>
  );
}