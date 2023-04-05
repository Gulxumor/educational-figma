import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import { navLink } from "../mock.js/Navbar";

const Root = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navLink.map(
            ({ id, path, element, isPrivate }) =>
              !isPrivate && <Route id={id} path={path} element={element} />
          )}
          {navLink?.map(
            ({ id, to, element, isPrivate }) =>
              isPrivate && (
                <Route
                  key={id}
                  path={to}
                  element={token ? element : <Navigate to={"/sign-up"} />}
                />
              )
          )}
          <Route />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Root;
