import { useEffect, useState } from "react";
import CustomerRegister from "./CustomerRegister";
import StoreRegister from "./StoreRegister";
import axios from "axios";
import { fetchRoles } from "../../store/action/ClientReducerAction";
import { useDispatch, useSelector } from "react-redux";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 1000,
});

export default function LoginRegister() {
  const rolesData = useSelector((store) => store.Client.roles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoles());
  }, []);

  const [customer, setCustomer] = useState("customerRegister");

  return (
    <main className="">
      <section className="max-w-[1200px] mx-auto py-5">
        {customer === "customerRegister" && (
          <CustomerRegister
            setCustomer={setCustomer}
            rolesData={rolesData}
            instance={instance}
          />
        )}
        {customer === "storeRegister" && (
          <StoreRegister
            setCustomer={setCustomer}
            rolesData={rolesData}
            instance={instance}
          />
        )}
      </section>
    </main>
  );
}
