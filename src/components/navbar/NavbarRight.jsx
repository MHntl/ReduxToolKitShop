import React, { useEffect } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search..."
        />
        <AiOutlineSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div className="relative">
        <div className="absolute flex items-center justify-center -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5">
          {carts.reduce((totalQty, itemAmount) => {
            return totalQty + itemAmount.quantity;
          }, 0)}
        </div>
        <Link to={"/cart"}>
          <SlBasket size={28} />
        </Link>
      </div>
    </div>
  );
};

export default NavbarRight;
