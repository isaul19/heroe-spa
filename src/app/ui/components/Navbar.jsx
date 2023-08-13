import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../auth/hooks/useContext";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const { state, logout } = useAppContext();

  const onLogout = async () => {
    await logout({ lastPath: currentPath });

    navigate("/login", {
      replace: true,
    });
  };

  const pathIs = (prop) => (prop === currentPath ? true : "");

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={`nav-item nav-link ${pathIs("/marvel") && "text-primary"}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink className={`nav-item nav-link ${pathIs("/dc") && "text-primary"}`} to="/dc">
            DC
          </NavLink>

          <NavLink
            className={`nav-item nav-link ${pathIs("/search") && "text-primary"}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link">{state.user}</span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
