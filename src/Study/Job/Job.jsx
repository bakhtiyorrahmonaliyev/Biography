import React from 'react';
import './Job.css';

const Job = () => {
  return (
    <div className="job-container">
      <h2 className="job-title">Ish Tajribasi</h2>

      <div className="job-card">
        <img src="src/Images/442269ac56eddaecd3fa3dd752c38870_1920x.webp" alt="Upwork" className="job-logo" />
        <div className="job-content">
          <h3>Freelancer</h3>
          <h4>Upwork</h4>
          <p>2023 - Hozirgi vaqt</p>
          <ul>
            <li>Frontend dasturlash bo'yicha mijozlar uchun loyihalarni bajarish.</li>
            <li>HTML, CSS, JavaScript va React yordamida veb-sahifalar va ilovalarni ishlab chiqish.</li>
            <li>Mijozlar bilan samarali muloqot qilish va ularning ehtiyojlarini tushunish.</li>
            <li>Loyihalarni vaqtida va sifatli bajarish orqali mijozlarning qoniqishini ta'minlash.</li>
            <li>Mijozlarning loyihalarini optimallashtirish va ularni yanada yaxshilash uchun maslahatlar berish.</li>
          </ul>
        </div>
      </div>

      <div className="job-card">
        <img src=" src/Images/education-school-logo-design_586739-1335.avif"alt="Codial Academy" className="job-logo" />
        <div className="job-content">
          <h3>Assistant Teacher</h3>
          <h4>Codial Academy</h4>
          <p>2023 - Hozirgi vaqt</p>
          <ul>
            <li>Boshlovchi dasturchilar uchun frontend dasturlash kurslari bo'yicha darslar o'tish.</li>
            <li>HTML, CSS, JavaScript va React kabi texnologiyalar bo'yicha chuqur bilim berish.</li>
            <li>Talabalarning kodlarini tekshirish va ularga kod optimallashtirish bo'yicha ko'rsatmalar berish.</li>
            <li>O'quvchilarga loyihalarni yaratishda yordam berish va ularni real dunyo misollariga asoslangan muammolarni hal qilishga tayyorlash.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
