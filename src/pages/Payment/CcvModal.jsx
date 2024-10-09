import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCardCcv } from "../../store/action/ShoppingCartAction";

export default function CcvModal({ orderPaymentData, direction }) {
  const dispatch = useDispatch();
  const cardCcv = useSelector((store) => store.ShoppingCart.payment.card_ccv);

  const defaultValues = {
    card_ccv: "",
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
    reset(defaultValues);
  }, [reset]);

  const onSubmit = (data) => {
    document.getElementById("ccv_modal").close();
    console.log(data);
    dispatch(setCardCcv(data));
    reset(defaultValues);
  };

  useEffect(() => {
    if (cardCcv) {
      direction();
    }
  }, [cardCcv]);

  return (
    <div>
      <dialog
        id="ccv_modal"
        className="modal-bottom sm:modal-middle md:w-5/12 rounded-lg py-2 px-4 mobileCardPadding shadow-2xl bg-white"
      >
        <div className="modal-box min-w-72">
          <div className="flex justify-between">
            <h3 className="font-bold sh4">Enter CCV</h3>
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
            {orderPaymentData?.card_no && (
              <div className="flex justify-end">
                <div className="flex flex-col items-end sh4 w-full gap-5">
                  <div className="flex items-center w-full ">
                    <div className="w-1/4 text-start">
                      <input
                        {...register("card_ccv", {
                          required: true,
                          minLength: 3,
                          maxLength: 3,
                          pattern: /^\d{3}$/,
                        })}
                        className="border bg-white h-10 px-2 my-2 w-full"
                        placeholder="CCV"
                        type="number"
                      />
                      {errors.card_ccv && (
                        <div className="form-error text-dangerTextColor text-sm">
                          CCV must be 3 digits
                        </div>
                      )}
                    </div>
                    <p className="w-3/4 text-end">
                      {orderPaymentData.card_no.slice(0, 4) +
                        " " +
                        orderPaymentData.card_no.slice(4, 6) +
                        "** **** " +
                        orderPaymentData.card_no.slice(-4)}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-left pl-4">
                      {orderPaymentData?.name_on_card}
                    </p>
                    <p className="text-right pr-4">
                      {orderPaymentData?.expire_month}/
                      {orderPaymentData?.expire_year}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="bg-color3 text-white rounded-md py-2 px-10 sh4 my-2"
              disabled={!isValid}
            >
              Order
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
