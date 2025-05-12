"use client";

import { useState } from "react";
import api from "@/lib/api-client";
import Link from "next/link";
import Cookies from "js-cookie";
import {toast} from "sonner";
import {useLocaleRouter} from "@/lib/use-locale-router";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { push } = useLocaleRouter();


    const login = async () => {
        try {
            const res = await api.post("/auth/login", { email, password });

            const { tokens, user } = res.data.data;

            localStorage.setItem("token", tokens.accessToken);
            Cookies.set("refresh_token", tokens.refreshToken, { secure: true, sameSite: "Lax" });
            localStorage.setItem("user", JSON.stringify(user));

            push("/dashboard");
        } catch (err) {
            toast.error('Login Failed : '+err)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">Login to NodeMS</h1>

                <input
                    className="w-full p-3 border rounded-md"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-full p-3 border rounded-md"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={login}
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}
