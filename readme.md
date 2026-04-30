# Quiz App

Bu projeyi ben, temel React ve TypeScript mantığını öğrenmek için yaptım. Amacım, quiz adımlarını kendi kodumla yazarken hem komponent yapısını hem de durum yönetimini (`useState`) pekiştirmekti.

## Neden bu projeyi yaptım?
- Frontend tarafında `Next.js` ve `TypeScript` ile pratik yapmak istedim.
- Soruların ekranı, seçeneklerin listelenmesi ve doğru cevabın kontrolü gibi temel adımları yönetmek için iyi bir alıştırma oldu.
- Backend veya veritabanı olmadan, sadece istemci tarafı mantığını öğrenmek istedim.

## Bu projede ne öğrendim?
- `React` bileşenleri nasıl çalışır.
- `useState` ile sorunun hangi adımda olduğunu, kullanıcının puanını ve quizin bitiş durumunu nasıl saklayabilirim.
- `TypeScript` ile soru verilerini bir tip (`Question`) altında tutmanın kodu nasıl daha güvenli hale getirdiğini gördüm.
- `Next.js` projesinde `app/page.tsx` ve `components` yapısının nasıl organize edildiğini deneyimledim.

## Nasıl çalışır?
- `data/questions.ts` içinde soruları ve seçenekleri saklıyorum.
- `components/Quiz.tsx` içinde kullanıcı cevap verdiğinde puanı hesaplıyorum.
- Quiz bittiğinde toplam skoru ekrana yazdırıyorum.

## GitHub için neden güzel durur?
- Projeyi bir repo olarak eklerken, `Next.js + TypeScript` izini gösteriyor.
- Basit ama öğretici bir frontend uygulaması olduğu için başlangıç seviyesi projeler arasında açıklayıcı olur.
- Kodun nasıl yapılandırıldığını ve ne öğrendiğimi README içinde yazınca, bakan kişi yaptığım işi hemen anlayabilir.
