import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/action/ClientReducerAction";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 1000,
});

export default function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "",
    password: "",
    remember: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    mode: "all",
  });

  const onSubmit = async (data) => {
    try {
      const res = await dispatch(setUser(data));
      if (res.status === 200) {
        history.goBack() || history.push("/");
      } else if (res.response.status === 401) {
        toast.error(res.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5  px-10 py-16 sm:w-[550px] mx-auto">
        <p className="mx-auto sh3 text-textColor">Sign In</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-secondTextColor"
        >
          <input
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className="border  h-10 px-5 my-2"
            placeholder="E-mail"
            type="text"
          />
          {errors.email && (
            <div className="form-error text-dangerTextColor text-sm">
              Incorrect email entry
            </div>
          )}
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            className="border  h-10 px-5 my-2"
            placeholder="Password"
          />
          <div className="flex flex-row gap-1 justify-start items-center">
            <label>
              <input
                type="checkbox"
                {...register("remember")}
                placeholder="Remember Me!"
                className="w-5"
              />
              Remember Me!
            </label>
          </div>
          {loading ? (
            <button
              type="submit"
              className="px-16 py-4 bg-primaryColor text-white rounded-lg my-2 flex justify-center items-center"
              disabled={!isValid}
            >
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            </button>
          ) : (
            <button
              type="submit"
              className="sh5 px-16 py-4 bg-primaryColor text-white rounded-lg my-2"
              disabled={!isValid}
            >
              Sign In
            </button>
          )}
        </form>
        <div className="flex flex-row  justify-around">
          <Link to="/signup">
            <button className="text-textColor sh5 mx-2">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
