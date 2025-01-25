import React from 'react'
import { useForm} from "react-hook-form"
import './App.css'
const App = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data)
  {
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <div>
        <label> First Name:</label>
        <input {...register('firstName', { required: true})}
        aria-invalid={errors.firstName ? "true" : "false"}/>
        {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
      </div>

      <div>
        <label> middle Name:</label>
        <input className={errors.middleName ? 'input-error':""}{...register('middleName',{minLength:{value:6, message:'min length should be 6'}})}/>
        {errors.middleName && <p className='error-msg'>{errors.middleName.message}</p>}
      </div>

      <div>
        <label> last Name:</label>
        <input {...register('lastname')}/>
      </div>
      <input type="submit" disable={isSubmitting} 
      value={isSubmitting ? "Submitting":"submit"}/>
    </form>
  )
}

export default App