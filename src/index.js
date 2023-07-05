import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import ErrorPage from "./error-page";
import ClaimsList from "./claims/claims-list";
import ClaimDetails from "./claims/claim-details";
import ClaimNew from "./claims/claim-new";
import LawyersList from "./lawyers/lawyers-list";
import LawyerDetails from "./lawyers/lawyer-details";
import RegionsList from "./regions/regions-list";
import RegionDetails from "./regions/region-details";
import CorrespondentsList from "./correspondents/correspondents-list";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import claimsReducer from "./claims/claims-slice";
import lawyersReducer from "./lawyers/lawyers-slice";
import regionsReducer from "./regions/regions-slice";
import correspondentsReducer from "./correspondents/correspondents-slice";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const store = configureStore({
  reducer: {
    claims: claimsReducer,
    lawyers: lawyersReducer,
    regions: regionsReducer,
    correspondents: correspondentsReducer,
  },
});

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        "Add a Claim": "Добавить Дело",
        Correspondent_one: "Корреспондент",
        Correspondent_few: "Корреспонденты",
        "Creation Date": "Дата Документа",
        "Creation Number": "Номер Документа",
        "Arrival Date": "Дата Поступления",
        "Claim Count": "Кол-во Дел",
        Claim_one: "Дело",
        Claim_few: "Дела",
        Deadline: "Срок Исполнения",
        Defendant: "Подсудимый",
        "First Name": "Имя",
        Home: "Главная",
        ID: "Идентификатор",
        "Last Name": "Фамилия",
        Lawyer_one: "Адвокат",
        Lawyer_few: "Адвокаты",
        "Registration Number": "Регистрационный Номер",
        Region_one: "Регион",
        Region_few: "Регионы",
        Responsible: "Ответственный Исполнитель",
        SSN: "Идентификатор",
        Save: "Сохранить",
        Summary: "Краткое Содержание Документа",
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
        path: "claims",
        element: <ClaimsList />,
      },
      {
        path: "claims/new",
        element: <ClaimNew />,
      },
      {
        path: "claims/:claimNumber",
        element: <ClaimDetails />,
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
      {
        path: "correspondents",
        element: <CorrespondentsList />,
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
