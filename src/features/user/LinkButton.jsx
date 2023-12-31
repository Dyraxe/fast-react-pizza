import { Link, useNavigate } from "react-router-dom";
const styleClass = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button className={styleClass} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link className={styleClass} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
