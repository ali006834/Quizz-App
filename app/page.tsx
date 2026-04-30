// Quiz bileşenini components klasöründen alıyoruz.
// Bu sayede ana sayfada quiz'i gösterebiliriz.
import { Quiz } from "../components/Quiz"

// Home adında bir React bileşeni tanımlıyoruz.
// Bu, uygulamanın ana sayfası olacak.
export default function Home() {
  return (
    <main>
      <h1>Basit Quiz App</h1>
      <Quiz />
    </main>
  )
}