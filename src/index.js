import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import ErrorPage from "./error-page";
import LawyersList from "./lawyers/lawyers-list";
import LawyerDetails from "./lawyers/lawyer-details";
import RegionsList from "./regions/regions-list";
import RegionDetails from "./regions/region-details";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import lawyersReducer from "./lawyers/lawyers-slice";
import regionsReducer from "./regions/regions-slice";

const store = configureStore({
  reducer: {
    lawyers: lawyersReducer,
    regions: regionsReducer,
  },
});

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        "First Name": "Имя",
        Home: "Главная",
        ID: "Идентификатор",
        "Last Name": "Фамилия",
        Lawyer_one: "Адвокат",
        Lawyer_few: "Адвокаты",
        Region_one: "Регион",
        Region_few: "Регионы",
        Title: "Название",
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lawyers",
        element: <LawyersList />,
      },
      {
        path: "lawyers/:lawyerId",
        element: <LawyerDetails />,
      },
      {
        path: "regions",
        element: <RegionsList />,
      },
      {
        path: "regions/:regionId",
        element: <RegionDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
