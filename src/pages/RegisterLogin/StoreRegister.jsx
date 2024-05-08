import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RotatingLines } from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 1000,
});

export default function StoreRegister({ setCustomer, rolesData }) {
  const history = useHistory();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    role_id: "2",
    store: { name: "", phone: "", tax_no: "", bank_account: "" },
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    mode: "all",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log("butona basıldı");
      setLoading(true);
      const formData = { ...data };
      delete formData.password2;
      const response = await instance.post("/signup", formData);
      console.log(response.data.message);
      history.goBack();
      toast.success(
        "You need to click link in email to activate your account!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  const passwordcurrent = watch("password", "");

  return (
    <div className="flex flex-col gap-5  px-10 py-16 sm:w-[550px] mx-auto">
      <p className="mx-auto sh3 text-textColor">Seller Sign Up</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-secondTextColor"
      >
        <input
          {...register("name", { required: true, minLength: 3 })}
          className="border bg-white  h-10 px-5 my-2"
          placeholder="Name"
          type="text"
        />
        {errors.name && (
          <div className="form-error text-dangerTextColor text-sm ">
            Min 3 length
          </div>
        )}
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
        <select
          {...register("role_id", { required: true })}
          className="border  h-10 px-5 my-2"
        >
          {rolesData &&
            rolesData.map((data) => {
              if (data.code === "store") {
                return (
                  <option
                    value={data.id}
                    key={data.id}
                    selected={data.id === 3 ? true : false}
                  >
                    {data.code}
                  </option>
                );
              }
            })}
        </select>
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: {
              value:
                /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
              message: "şifre doğru gir",
            },
          })}
          className="border  h-10 px-5 my-2"
          placeholder="Password"
        />
        {errors.password && (
          <div className="form-error text-dangerTextColor text-sm">
            Min 8 char, Upper & Lower case, Special char, Least 1 numb
          </div>
        )}
        <input
          type="password"
          {...register("password2", {
            validate: (value) => value === passwordcurrent,
          })}
          className="border  h-10 px-5 my-2"
          placeholder="Re-Type Password"
        />
        {errors.password2 && (
          <div className="form-error text-dangerTextColor text-sm">
            Have to macth Password
          </div>
        )}
        <input
          {...register("store.name", {
            required: true,
            minLength: 3,
          })}
          className="border  h-10 px-5 my-2"
          placeholder="Store Name"
        />
        {errors.store?.name && (
          <div className="form-error text-dangerTextColor text-sm ">
            Min 3 char
          </div>
        )}
        <input
          {...register("store.phone", {
            required: true,
            pattern:
              /(^[0\s]?[\s]?)([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
          })}
          className="border  h-10 px-5 my-2"
          placeholder="Phone Number"
          type="number"
        />
        {errors.store?.phone && (
          <div className="form-error text-dangerTextColor text-sm">
            Valid format is `05XX XXX XX XX`
          </div>
        )}
        <input
          {...register("store.tax_no", {
            required: true,
            pattern: /T\d\d\d\dV\d\d\d\d\d\d$/gi,
          })}
          className="border  h-10 px-5 my-2"
          placeholder="Store Tax ID"
          type="text"
        />
        {errors.store?.tax_no && (
          <div className="form-error text-dangerTextColor text-sm">
            Valid format is `TXXXXVXXXXXX`
          </div>
        )}
        <input
          {...register("store.bank_account", {
            required: true,
            pattern: /^TR\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d$/i,
          })}
          className="border  h-10 px-5 my-2"
          placeholder="Store Bank Account"
        />
        {errors.store?.bank_account && (
          <div className="form-error text-dangerTextColor text-sm">
            Valid format is `TRXXXX XXXX XXXX XXXX` 16 Digit Numb
          </div>
        )}
        {loading ? (
          <button
            type="submit"
            className="px-16 py-4 bg-textColor text-white rounded-lg my-2 flex justify-center items-center"
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
            className="px-16 py-4 bg-textColor text-white rounded-lg my-2"
            disabled={!isValid}
          >
            Sign Up
          </button>
        )}
      </form>
      <div className="flex flex-row  justify-around">
        <button className="text-textColor sh5 mx-2">Sign In</button>
        <button
          className="text-textColor sh5 mx-2"
          onClick={() => {
            setCustomer("customerRegister");
          }}
        >
          Customer Sign Up
        </button>
      </div>
    </div>
  );
}
