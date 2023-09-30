import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold tracking-widest md:flex md:gap-12">
      <Link className="font-bold  hover:text-stone-800" to={"/menu"}>
        menu
      </Link>
      <p>👤 {username}</p>
    </div>
  );
}

export default Username;
