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
import LawyerNew from "./lawyers/lawyer-new";
import LawyerDetails from "./lawyers/lawyer-details";
import RegionsList from "./regions/regions-list";
import RegionNew from "./regions/region-new";
import RegionDetails from "./regions/region-details";
import CorrespondentsList from "./correspondents/correspondents-list";
import CorrespondentNew from "./correspondents/correspondent-new";
import CorrespondentDetails from "./correspondents/correspondent-details";
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
        "Add a Correspondent": "Добавить Корреспондента",
        "Add a Lawyer": "Добавить Адвоката",
        "Add a Region": "Добавить Регион",
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
        "Claim with specified registration number already exists": "Дело с данным номером уже существует",
        "must not be blank": "Обязательно для заполнения"
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
        path: "lawyers/new",
        element: <LawyerNew />,
      },
      {
        path: "lawyers/:lawyerSsn",
        element: <LawyerDetails />,
      },
      {
        path: "regions",
        element: <RegionsList />,
      },
      {
        path: "/regions/new",
        element: <RegionNew />,
      },
      {
        path: "regions/:regionId",
        element: <RegionDetails />,
      },
      {
        path: "correspondents",
        element: <CorrespondentsList />,
      },
      {
        path: "/correspondents/new",
        element: <CorrespondentNew />,
      },
      {
        path: "/correspondents/:correspondentId",
        element: <CorrespondentDetails />,
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
