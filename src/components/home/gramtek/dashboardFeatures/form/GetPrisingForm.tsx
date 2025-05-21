import useResponsive from "@/hooks/useResponsive";
import { SubmitHandler, useForm } from "react-hook-form";
import "./style.scss";
import { motion } from "motion/react";
import { viewportMargin, viewportOnce } from "@/utils/anim";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
};

const GetPrisingForm = () => {
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

  const { isMobile } = useResponsive();

  return (
    <motion.form
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.3,
        },
      }}
      viewport={{ once: viewportOnce, margin: viewportMargin }}
      onSubmit={handleSubmit(onSubmit)}
      className="pricing_form"
    >
      <div className="form_group">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      {!isMobile && <div className="line" />}
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
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      {!isMobile && <div className="line" />}
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
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>
      {!isMobile && <div className="line" />}
      <button type="submit">Submit</button>
    </motion.form>
  );
};

export default GetPrisingForm;
