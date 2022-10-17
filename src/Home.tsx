import React from 'react';
import { useForm } from "react-hook-form";
import Header from "./pages/Header";
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";

type FormValues = {
  name: string;
  email: string;
  gender: string;
  status: string;

};

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();
const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();
    const onSubmit = () => {
        navigate('/about');

  };

  return (

   
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header
        description="PostM is a Post manager, just register and start posting."
      />
      <label htmlFor="name">Name:</label>
      <input
        {...register("name", { required: "This is required." })}
        id="name"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">email:</label>
      <input {...register("email", { required: true, minLength: 5 })} />

      <label htmlFor="gender">Gender</label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>

      <input type="submit" />
    </form>
   
  )
}


export default HomePage;
