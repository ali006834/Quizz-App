// Question adında bir veri tipi tanımlıyoruz.
// Bu tip, her sorunun hangi alanları içermesi gerektiğini söyler.
export type Question = {
  id: number           // Soru numarası / benzersiz kimlik
  text: string         // Sorunun metni
  choices: string[]    // Seçenekler dizisi
  answer: number       // Doğru seçeneğin dizideki indexi
}

// questions adında bir dizi oluşturuyoruz.
// Bu dizi, Question tipi kullanılarak yazılan soruları içerir.
export const questions: Question[] = [
  {
    id: 1,
    text: "Next.js hangi kütüphane üzerine kurulur?",
    choices: ["Angular", "React", "Vue", "Svelte"],
    answer: 1, // Burada 1 demek, doğru cevabın "React" olduğu anlamına gelir
  },
  {
    id: 2,
    text: "TypeScript'in amacı nedir?",
    choices: [
      "Sayfayı hızlı yüklemek",
      "Veri tiplerini kontrol etmek",
      "CSS yazmak",
      "Sunucu çalıştırmak"
    ],
    answer: 1, // Bu da doğru cevabın ikinci seçenek olduğunu gösterir
  },
  {
    id: 3,
    text: "React'te değişen veriyi saklamak için hangi yapı kullanılır?",
    choices: ["state", "props", "css", "html"],
    answer: 0, // 0 demek, doğru cevabın ilk seçenek yani "state" olduğu demek
  }
]