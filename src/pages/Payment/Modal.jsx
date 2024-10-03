import { useForm } from "react-hook-form";
import { createAddress } from "../../store/action/ClientReducerAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Modal({ addressData }) {
  const userData = useSelector((store) => store.Client.user);
  const dispatch = useDispatch();

  const defaultValues = {
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    reset(addressData || defaultValues);
  }, [addressData, reset]);

  const onSubmit = (data) => {
    document.getElementById("address_modal").close();
    dispatch(createAddress(data, userData.token));
    console.log(data);
    reset(defaultValues);
  };

  return (
    <div>
      <dialog
        id="address_modal"
        className=" modal-bottom sm:modal-middle md:w-5/12 rounded-lg py-2 px-4 mobileCardPadding shadow-2xl"
      >
        <div className="modal-box min-w-72">
          <div className="flex justify-between">
            <h3 className="font-bold sh4">Add Address</h3>
            <div id="modal-title">
              <form method="dialog">
                <button>
                  <i className="fa-solid fa-x text-red-700"></i>
                </button>
              </form>
            </div>
          </div>
          <hr className="my-2"></hr>
          <form
            className="flex flex-col text-secondTextColor"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("title", { required: true, minLength: 2 })}
              className="border bg-white  h-10 px-5 my-2"
              placeholder="Home Address"
              type="text"
            />
            {errors.title && (
              <div className="form-error text-dangerTextColor text-sm ">
                Min 3 length
              </div>
            )}
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
              {...register("surname", { required: true, minLength: 3 })}
              className="border bg-white  h-10 px-5 my-2"
              placeholder="Surname"
              type="text"
            />
            {errors.surname && (
              <div className="form-error text-dangerTextColor text-sm ">
                Min 3 length
              </div>
            )}
            <input
              {...register("phone", {
                required: true,
                pattern: /^05\d{9}$/,
              })}
              className="border bg-white h-10 px-5 my-2"
              placeholder="05XXXXXXXXX"
              type="number"
            />
            {errors.phone && (
              <div className="form-error text-dangerTextColor text-sm ">
                Min 3 length
              </div>
            )}
            <input
              {...register("city", { required: true, minLength: 3 })}
              className="border bg-white  h-10 px-5 my-2"
              placeholder="İstanbul"
              type="text"
            />
            {errors.city && (
              <div className="form-error text-dangerTextColor text-sm ">
                Min 3 length
              </div>
            )}
            <input
              {...register("district", { required: true, minLength: 3 })}
              className="border bg-white  h-10 px-5 my-2"
              placeholder="Esenler"
              type="text"
            />
            {errors.district && (
              <div className="form-error text-dangerTextColor text-sm ">
                Min 3 length
              </div>
            )}
            <input
              {...register("neighborhood", { required: true, minLength: 3 })}
              className="border bg-white  h-10 px-5 my-2"
              placeholder="Address Details"
              type="text"
            />
            {errors.neighborhood && (
              <div className="form-error text-dangerTextColor text-sm ">
                Min 3 length
              </div>
            )}
            <button
              type="submit"
              className="bg-color3 text-white rounded-md py-2 px-10 sh4 my-2"
              disabled={!isValid}
            >
              Save
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
