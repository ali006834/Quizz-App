// Quiz bileşenini components klasöründen alıyoruz.
// Bu sayede ana sayfada quiz'i gösterebiliriz.
import { Quiz } from "../components/Quiz"

// Home adında bir React bileşeni tanımlıyoruz.
// Bu, uygulamanın ana sayfası olacak.
export default function Home() {
  return (
    <main>
      <h1>Basit Quiz App</h1>

      <section>
        <h2>Projenin Amacı</h2>
        <p>Bu uygulama, temel React / Next.js / TypeScript bilgilerini pekiştirmek için hazırlanmış bir quiz projesidir. Kullanıcıların sorulara cevap verip puanlarını görmesini sağlıyor.</p>
      </section>

      <section>
        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Client-side state yönetimi (`useState`)</li>
        </ul>
      </section>

      <Quiz />
    </main>
  )
}