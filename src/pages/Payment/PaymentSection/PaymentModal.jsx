import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createCardData } from "../../../store/action/ClientReducerAction";
import { setCardCcv } from "../../../store/action/ShoppingCartAction";

export default function PaymentModal({ paymentData }) {
  const userData = useSelector((store) => store.Client.user);
  const dispatch = useDispatch();

  const defaultValues = {
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
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
    reset(paymentData || defaultValues);
  }, [paymentData, reset]);

  const onSubmit = (data) => {
    delete data.card_ccv;
    document.getElementById("payment_modal").close();
    dispatch(createCardData(data, userData.token));
    reset(defaultValues);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);

  return (
    <div>
      <dialog
        id="payment_modal"
        className="modal-bottom sm:modal-middle md:w-5/12 rounded-lg py-2 px-4 mobileCardPadding shadow-2xl bg-white"
      >
        <div className="modal-box min-w-72">
          <div className="flex justify-between">
            <h3 className="font-bold sh4">Add Payment</h3>
            <div id="modal-title">
              <form method="dialog">
                <button>
                  <i className="fa-solid fa-x text-red-700"></i>
                </button>
              </form>
            </div>
          </div>
          <hr className="my-2" />
          <form
            className="flex flex-col text-secondTextColor"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("card_no", {
                required: true,
                minLength: 16,
                maxLength: 16,
              })}
              className="border bg-white h-10 px-5 my-2"
              placeholder="Card Number"
              type="number"
            />
            {errors.card_no && (
              <div className="form-error text-dangerTextColor text-sm">
                Card number must be 16 digits
              </div>
            )}

            <select
              {...register("expire_month", { required: true })}
              className="border bg-white h-10 px-5 my-2"
            >
              <option value="">Select Month</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            {errors.expire_month && (
              <div className="form-error text-dangerTextColor text-sm">
                Month is required
              </div>
            )}

            <select
              {...register("expire_year", { required: true })}
              className="border bg-white h-10 px-5 my-2"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.expire_year && (
              <div className="form-error text-dangerTextColor text-sm">
                Year is required
              </div>
            )}

            <input
              {...register("name_on_card", {
                required: true,
                pattern: /^[a-zA-Z\s]+$/,
              })}
              className="border bg-white h-10 px-5 my-2"
              placeholder="Name on Card"
              type="text"
            />
            {errors.name_on_card && (
              <div className="form-error text-dangerTextColor text-sm">
                Please enter a valid name
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
