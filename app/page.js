export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 700, margin: "0 auto" }}>
      <h1>Running Coach App</h1>
      <p>Webapp Coach / Atleta (Next.js + Supabase)</p>

      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/coach">Coach</a></li>
        <li><a href="/athlete">Atleta</a></li>
      </ul>
    </main>
  );
}
