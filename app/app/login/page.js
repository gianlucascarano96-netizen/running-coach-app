"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function signIn() {
    setMsg("...");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setMsg(error.message);
    setMsg("Login ok ✅ Ora vai su /coach o /athlete");
  }

  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 420, margin: "0 auto" }}>
      <h1>Login</h1>

      <input
        style={{ width: "100%", padding: 10, marginBottom: 8 }}
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ width: "100%", padding: 10, marginBottom: 8 }}
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={{ width: "100%", padding: 10 }} onClick={signIn}>
        Entra
      </button>

      <p style={{ marginTop: 12 }}>{msg}</p>
    </main>
  );
}
