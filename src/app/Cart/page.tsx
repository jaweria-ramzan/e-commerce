import { ShoppingBag } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="px-[124px] w-full h-svh mt-16">
      <div className="font-bold text-3xl">Shopping Cart</div>
      <div className="flex flex-col justify-center items-center mt-9">
        <ShoppingBag size={150} />
        <div className="font-bold text-3xl mt-3">
          Your shopping bag is empty
        </div>
      </div>
    </div>
  );
};

export default page;
