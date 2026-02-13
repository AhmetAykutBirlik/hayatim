"use client";
import { useState, useEffect } from "react";
import Home from "./page_content";

export default function PasswordGate() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    // Şifre: canikom
    const CORRECT_PASSWORD = "canikom";

    useEffect(() => {
        const auth = localStorage.getItem("is_auth");
        if (auth === "true") setIsAuthenticated(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toLowerCase() === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            localStorage.setItem("is_auth", "true");
            setError(false);
        } else {
            setError(true);
            setPassword("");
        }
    };

    if (isAuthenticated) {
        return <Home />;
    }

    return (
        <div className="min-h-screen bg-[#fff9f9] flex items-center justify-center px-4">
            <div className="max-w-md w-full glass-card p-10 rounded-[2.5rem] shadow-2xl text-center border-2 border-[#ffccd5]">
                <div className="mb-8 text-5xl">🔐</div>
                <h1 className="text-3xl font-bold text-[#c9184a] mb-4 font-serif">Kilitli Bölge</h1>
                <p className="text-gray-600 mb-8 italic">
                    Bu sürprizi görmek için sana özel şifreyi girmelisin...
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Şifreyi buraya yaz..."
                        className="w-full px-6 py-4 rounded-full border-2 border-[#ffccd5] focus:border-[#ff4d6d] outline-none transition-all text-center text-lg placeholder:text-pink-200"
                    />
                    {error && (
                        <p className="text-red-500 text-sm font-medium animate-bounce">
                            Yanlış şifre birtanem, tekrar dene! ❤️
                        </p>
                    )}
                    <button
                        type="submit"
                        className="w-full py-4 bg-[#ff4d6d] text-white rounded-full font-bold text-lg hover:bg-[#c9184a] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Sürprizi Aç 💘
                    </button>
                </form>

                <p className="mt-8 text-pink-300 text-xs uppercase tracking-widest">
                    Sadece aşkla girilebilir
                </p>
            </div>
        </div>
    );
}
