"use client";

import { motion } from "motion/react";
import "./style.scss";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Handle form submission here
    try {
      console.log(data);
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.form
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
      onSubmit={handleSubmit(onSubmit)}
      className="contact_form"
    >
      <div className="form_group_container">
        <div className="form_group">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="form_group">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="form_group">
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
      </div>
      <div className="form_group">
        <textarea
          placeholder="Message"
          rows={5}
          required={false}
          {...register("message")}
        />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </motion.form>
  );
};

export default ContactUsForm;
