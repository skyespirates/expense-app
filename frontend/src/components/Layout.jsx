import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Expense App</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
