"use client";
//app/account/page.js
import { SignupFormDemo } from "@/components/PageAccount/SignupFormDemo";

import { useState, useEffect } from "react";
import app from "../../../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logged from "@/components/PageUserLogged/Logged";

export default function FormLogin() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {user ? <Logged/> : <SignupFormDemo />}
        </div>
    );
}