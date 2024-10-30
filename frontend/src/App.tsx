// React-router-dom
import { Outlet } from "react-router-dom";
// material UI
import { Button } from "@mui/material";

// components
import { Header } from "./shared/components/header/header";

export const App = () => {
  return (
    <>
      <Header>
        <Outlet />
        <Button>Test</Button>
      </Header>
    </>
  );
};
