export default function Home() {
  return (
    <main style={{padding:40,fontFamily:"Arial"}}>
      <h1>Running Coach Platform</h1>
      <p>Piattaforma allenamento runner</p>

      <div style={{marginTop:20}}>
        <a href="/login">Login</a>
      </div>

      <div>
        <a href="/coach">Area Coach</a>
      </div>

      <div>
        <a href="/athlete">Area Atleta</a>
      </div>
    </main>
  );
}
