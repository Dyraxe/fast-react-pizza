import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartPriceAndQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const state = useSelector(
    (state) => state.cart,
    (a, b) => {
      return a.cart.length === b.cart.length;
    },
  );

  const { total, quantity } = getCartPriceAndQuantity(state);
  if (!quantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm  uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {quantity} pizza{quantity > 0 && "s"}
        </span>
        <span>{formatCurrency(total)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
