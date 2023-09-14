# React Context

PROTOTURK kanalının [React Context Kullanımı](https://www.youtube.com/watch?v=us0HlRThOi0) adlı videosundaki kaynak kodların biraz değiştirilmiş hali. Vite build tool'u ile gelen varsayılan stylesheet kodları kullanıldı.

Tıklayarak [canlıda](https://context-page.vercel.app/) görebilirsiniz.

## Özet

Kısaca React context, bir verinin birden fazla bileşen (component) içinde durmadan `props` yoluyla iletilmesi yerine, derindeki bir bileşene daha kolay bir şekilde iletilmesini sağlar. Kaynak kod içinde `theme` ve `logoText` verilerini, iç içe bulunan `<Footer />` ve `<ThemeSwitcher />` ile `<Header />` bileşenlerinden ayrı ayrı geçirmek yerine `useContext` API'si kullanılmıştır.
