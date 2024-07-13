import { Route, Routes as RoutesDOM } from "react-router-dom";

import Home from "../pages/Home";
import { Details } from "../pages/Details";
import { List } from "../pages/List";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<Home />} />
      <Route path="/details/:type/:id" element={<Details />} />
      <Route path="/list" element={<List />} />
      <Route path="/register" element={<Register />} />
    </RoutesDOM>
  );
};
