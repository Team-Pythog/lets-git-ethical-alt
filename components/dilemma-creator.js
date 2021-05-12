import { useState } from 'react'

export default function DilemmaCreator({ token, createEvent }) {
  // const reset = {
  //   title: '',
  //   image: '',
  //   text: '',
  //   response_0: '',
  //   response_1: '',
  // };
  // const [values, setValues] = useState(reset);

  // function submitHandler(event) {
  //   event.preventDefault();
  //   createEvent(values);
  //   setValues(reset);
  // }

  // function inputChangeHandler(event) {
  //     let { name, value, type } = event.target;

  //     if (type === "number") {
  //       value = parseFloat(value);
  //     }
  //     setValues({ ...values, [name]: value });
  //   }
  return (
    <div className="">
      <form>
        <input type="text" placeholder='Title' name='title' required/>
        <input type="file" name="image" accept="image/png, image/jpeg, image/gif"/>
        <input type="text" placeholder='Content' name='text' required/>
        <input type="text" placeholder='Answer 1' name='response_0' required/>
        <input type="text" placeholder='Answer 2' name='response_1' required/>
        <input type="submit"/>
      </form>
    </div>
  );
} 

// <form onSubmit={submitHandler}>
// <input type="text" placeholder='Title' name='title' value={values.title} onChange={inputChangeHandler} required/>
// <input type="file" name="image" accept="image/png, image/jpeg, image/gif" value={values.image}  onChange={this.handleImageChange}/>
// <input type="text" placeholder='Content' name='text' value={values.text} onChange={inputChangeHandler} required/>
// <input type="text" placeholder='Answer 1' name='response_0' value={values.response_0} onChange={inputChangeHandler} required/>
// <input type="text" placeholder='Answer 2' name='response_1' value={values.response_1} onChange={inputChangeHandler} required/>
// <input type="submit"/>
// </form>