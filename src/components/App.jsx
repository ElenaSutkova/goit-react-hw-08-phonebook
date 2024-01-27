import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUserThunk } from "Store/DataUser/userThunk";
import Navigation from "./Navigation/Navigation";
import { PublicRoute } from "./Public/PublicRoute";
import SignUp from "pages/SignUp";
import Login from "../pages/Login";
import { PrivateRoute } from "./Private/PrivateRoute";
import Contacts from "pages/Contacts";
import style from './App.module.css'

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk())
  }, [dispatch]);

  return (
    <div className={style.div}>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  )
};

