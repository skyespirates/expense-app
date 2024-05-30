import { Outlet } from "react-router-dom";
import Stack from "@components/Stack";
const Layout = () => {
  return (
    <div>
      <Stack variant="h">
        <h1 className="header">Expense App</h1>
      </Stack>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
