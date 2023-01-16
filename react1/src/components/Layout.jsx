import { NavLink, Outlet } from "react-router-dom";

const setActive=({isActive})=>isActive?"active-link":"";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/posts" className={setActive}>Post</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>2023</footer>
    </>
  );
};
export default Layout;
