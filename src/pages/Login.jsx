import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [customer, setCustomer] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="bg-gradient-to-r from-cyan-500 to-color3">
      <section className="max-w-[1200px] mx-auto py-20">
        <div className="flex flex-col   gap-5  sm:w-[470px] sm:px-[72px] w-[360px] px-10 py-16 border-2 shadow-lg border-textColor rounded-lg bg-white mx-auto">
          <p className="mx-auto sh3">{customer ? "" : "Seller "}Sign Up</p>
          {customer ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <input
                {...register("name", { required: true, minLength: 3 })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Name"
              />
              <input
                {...register("email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="E-mail"
              />
              <input
                type="password"
                {...register("password", { min: 18, max: 99 })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Password"
              />
              <input
                type="password"
                {...register("password2", { min: 18, max: 99 })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Re-Enter Password"
              />

              <input
                type="submit"
                className="px-16 py-4 bg-textColor text-white rounded-lg"
              />
            </form>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <input
                {...register("name", { required: true, minLength: 3 })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Name"
                type="text"
              />
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="E-mail"
                type="text"
              />
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
                })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Password"
              />
              <input
                type="password"
                {...register("password2", { required: true, min: 18 })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Re-Enter Password"
              />
              <input
                {...register("name", { required: true, minLength: 3 })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Store Name"
              />
              <input
                {...register("Phone", {
                  required: true,
                  pattern:
                    /([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
                })}
                className="border border-textColor rounded-md h-10 px-5 text-textColor"
                placeholder="Phone Number"
                type="number"
              />

              <input
                type="submit"
                className="px-16 py-4 bg-textColor text-white rounded-lg"
              />
            </form>
          )}

          <div className="flex flex-row  justify-around">
            <button className="text-textColor sh5 mx-2">Sign In</button>
            <button
              className="text-textColor sh5 mx-2"
              onClick={() => {
                setCustomer(!customer);
              }}
            >
              {customer ? "Become Seller" : "Customer Sign Up"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
