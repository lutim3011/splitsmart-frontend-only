import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/css/index.css";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";

const proTheme = extendTheme(theme);
const extendedConfig = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
};
const myTheme = extendTheme(extendedConfig, proTheme);
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "src/components/Groups/Groups";
import Signup from "src/components/Signup/Signup";
import RecoilNexus from "recoil-nexus";
import { Signin } from "src/components/Signin";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <ChakraBaseProvider theme={myTheme}>
        <RouterProvider router={router} />
      </ChakraBaseProvider>
    </RecoilRoot>
  </React.StrictMode>
);
