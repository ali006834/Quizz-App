"use client"

// Bu satır Next.js'e "bu bileşen tarayıcıda çalışacak" diyor.
// React'in client-side özelliklerini kullanabilmek için gerekli.
import { useState } from "react"

// Soru verilerini questions.ts dosyasından alıyoruz.
// Bu sayede quiz bileşeni soruları kullanabilir.
import { questions } from "../data/questions"

// Quiz adında bir React bileşeni tanımlıyoruz.
// Bu bileşen quiz uygulamasının ana mantığını içerir.
export function Quiz() {
  // currentIndex: hangi soruda olduğumuzu saklar.
  // Başlangıçta 0 (ilk soru).
  const [currentIndex, setCurrentIndex] = useState(0)

  // score: kullanıcının puanı.
  // Başlangıçta 0.
  const [score, setScore] = useState(0)

  // finished: quiz bitti mi?
  // Başlangıçta false (henüz bitmedi).
  const [finished, setFinished] = useState(false)

  // question: şu anki soruyu al.
  // questions dizisinden currentIndex ile seçiyoruz.
  const question = questions[currentIndex]

  // handleAnswer: kullanıcı bir cevap seçtiğinde çalışır.
  // selectedIndex: kullanıcının seçtiği seçeneğin numarası (0,1,2,3).
  function handleAnswer(selectedIndex: number) {
    // Eğer seçilen index, doğru cevap indexi ile aynıysa...
    if (selectedIndex === question.answer) {
      // Puanı 1 artır.
      setScore(score + 1)
    }

    // Sonraki soru indexini hesapla.
    const nextIndex = currentIndex + 1

    // Eğer daha soru varsa...
    if (nextIndex < questions.length) {
      // currentIndex'i güncelle, sonraki soruya geç.
      setCurrentIndex(nextIndex)
    } else {
      // Sorular bitti, finished'i true yap.
      setFinished(true)
    }
  }

  // Eğer quiz bitti ise (finished true ise)...
  if (finished) {
    // Sonuç ekranını göster.
    return (
      <div>
        <h2>Quiz bitti</h2>
        <p>Puanın: {score} / {questions.length}</p>
      </div>
    )
  }

  // Quiz devam ediyorsa, soru ekranını göster.
  return (
    <div>
      <h2>Soru {currentIndex + 1} / {questions.length}</h2>
      <p>{question.text}</p>
      <div>
        {/* question.choices dizisini map ile dolaş.
            Her seçenek için bir buton oluştur. */}
        {question.choices.map((choice, index) => (
          <button key={index} onClick={() => handleAnswer(index)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  )
}