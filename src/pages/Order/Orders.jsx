import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrders } from "../../store/action/ClientReducerAction";

export default function Orders() {
  const dispatch = useDispatch();
  const userToken = useSelector((store) => store.Client.user.token);

  useEffect(() => {
    if (userToken) {
      dispatch(fetchUserOrders(userToken));
    }
  }, [dispatch, userToken]);

  const orders = useSelector((store) => store.Client.user.orders);

  return (
    <div className="bg-lightTextGray py-10">
      <div className="max-w-[1200px] mx-auto mobileCardPadding  min-w-[364px]">
        <h2 className="sh3 mb-4 text-textColor">Your Orders</h2>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg shadow-lg p-4 mb-8 bg-white sh6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="sh4 font-bold mb-2">Order ID: {order.id}</h3>
                <p>
                  <strong>Order Date:</strong>{" "}
                  {new Date(order.order_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Price:</strong> {order.price} TL
                </p>
                <p>
                  <strong>Card Holder:</strong> {order.card_name} (**** ****
                  **** {order.card_no.toString().slice(-4)})
                </p>
              </div>
              <h4 className="sh5 mt-4 mb-2">Products</h4>
              <div className="flex flex-wrap gap-4">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-start border p-4 rounded-lg shadow min-w-[200px] w-full md:w-[calc(30%-16px)]"
                  >
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="h-24 object-contain rounded-lg mb-2 mr-4"
                    />
                    <div className="flex flex-col flex-grow">
                      <h5 className="font-bold">{product.name}</h5>
                      <p className="overflow-hidden text-ellipsis line-clamp-2">
                        {product.description}
                      </p>
                      <p>
                        <strong>Price:</strong> {product.price} TL
                      </p>
                      <p>
                        <strong>Quantity:</strong> {product.count}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
}
