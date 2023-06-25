import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import ErrorPage from "./error-page";
import CasesList from "./cases/cases-list";
import CaseDetails from "./cases/case-details";
import CaseNew from "./cases/case-new";
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
import casesReducer from "./cases/cases-slice";
import lawyersReducer from "./lawyers/lawyers-slice";
import regionsReducer from "./regions/regions-slice";

const store = configureStore({
  reducer: {
    cases: casesReducer,
    lawyers: lawyersReducer,
    regions: regionsReducer,
  },
});

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        "Add Case": "Добавить Дело",
        "Case Count": "Кол-во Дел",
        Case_one: "Дело",
        Case_few: "Дела",
        "First Name": "Имя",
        Home: "Главная",
        ID: "Идентификатор",
        "Last Name": "Фамилия",
        Lawyer_one: "Адвокат",
        Lawyer_few: "Адвокаты",
        Number: "Номер",
        Region_one: "Регион",
        Region_few: "Регионы",
        Save: "Сохранить",
        SSN: "Идентификатор",
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
        path: "cases",
        element: <CasesList />,
      },
      {
        path: "cases/new",
        element: <CaseNew />,
      },
      {
        path: "cases/:caseId",
        element: <CaseDetails />,
      },
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
