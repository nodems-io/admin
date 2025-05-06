"use client";

import { useState } from "react";
import api from "@/lib/api-client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        try {
            await api.post("/register", { email, password });
            router.push("/login");
        } catch (err) {
            alert("Register failed");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto space-y-4">
            <h1 className="text-xl font-semibold">Register</h1>
            <input
                className="border p-2 w-full"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border p-2 w-full"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register} className="bg-green-600 text-white px-4 py-2 rounded">
                Register
            </button>
        </div>
    );
}
