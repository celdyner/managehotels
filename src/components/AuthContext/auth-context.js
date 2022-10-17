import React from "react";
import {useState, useEffect, usecallBack } from "react";



const AuthContext = React.createContext({
    token: "",
    userId: "",
    role:"",
    isLoggedIn: false,
    login:(token, userId, username, role) => {},
    logout: () => {},

});





const tokenRemainingExperationTime = () => {
        const





}