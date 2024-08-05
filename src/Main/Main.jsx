import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
function Main() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main_in container">
        <div className="main_card">
          <div className="main_card_left">
            <img src="src/Images/pngtree-education-coding-logo-with-simple-and-modern-design-image_379616.jpg" alt="Study" />
          </div>
          <div className="main_card_right">
            <h1>Frontend dasturchiman, 16 yoshdaman. HTML, CSS, va JavaScriptni yaxshi bilaman va zamonaviy frontend texnologiyalar, xususan React bilan ishlashda tajribaga egaman. Dinamik va interaktiv veb-saytlar yaratishga qiziqaman. O'z portfolio saytini yaratganman va Telegramda frontend rivojlanishi haqida blog yuritaman. Instagramda podkastlardan foydali bo'limlarni bo'lishadigan kanal ochishni rejalashtirmoqdaman. Programmalashga bo'lgan muhabbatim va yangiliklarni o'rganishga intilishim meni doimiy rivojlanishga undaydi.</h1>
            <button onClick={() => navigate('/study')}>SEE ALL</button>
          </div>
        </div>
        <div className="main_card">
          <div className="main_card_left">
            <img src="src/Images/job_img.jpg" alt="Job" />
          </div>
          <div className="main_card_right">
            <h1>Frontend dasturlash bo'yicha mijozlar uchun loyihalarni bajarish.
HTML, CSS, JavaScript va React kabi texnologiyalar yordamida mijozlar talablari asosida veb-sahifalar va ilovalarni ishlab chiqish.
Mijozlar bilan samarali muloqot qilish va ularning ehtiyojlarini tushunish.
Loyihalarni vaqtida va sifatli bajarish orqali mijozlarning qoniqishini ta'minlash.
Mijozlarning loyihalarini optimallashtirish va ularni yanada yaxshilash uchun maslahatlar berish.</h1>
            <button onClick={() => navigate('/job')}>SEE ALL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
