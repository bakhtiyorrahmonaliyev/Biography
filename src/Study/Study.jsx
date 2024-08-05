import React from 'react';
import './Study.css';

const Study = () => {
    return (
        <div className="study">
            <div className="study_in container">
                <h2 className="study-title">O'qish Tajribasi</h2>

                <div className="study-card">
                    <img src="src/Images/importance-of-school-education.webp" alt="School" className="study-logo" />
                    <div className="study-content">
                        <h3>Maktab</h3>
                        <p>2020 - Hozirgi vaqt</p>
                        <ul>
                            <li>Fanlar bo'yicha chuqur bilim olish.</li>
                            <li>Maktabdagi loyihalarda ishtirok etish.</li>
                            <li>Akademik va ijodiy rivojlanish.</li>
                        </ul>
                    </div>
                </div>

                <div className="study-card">
                    <img src="src/Images/How-to-create-an-online-course.jpg" alt="English Course" className="study-logo" />
                    <div className="study-content">
                        <h3>Ingliz Tili Kursi</h3>
                        <p>2021 - Hozirgi vaqt</p>
                        <ul>
                            <li>Ingliz tili bilimlarini rivojlantirish.</li>
                            <li>IELTS imtihoniga tayyorgarlik ko'rish.</li>
                            <li>Yozish, o'qish, tinglash va gapirish ko'nikmalarini oshirish.</li>
                        </ul>
                    </div>
                </div>

                <div className="study-card">
                    <img src="src/Images/online-synchronous-class-1024x661.jpg" alt="Online Learning" className="study-logo" />
                    <div className="study-content">
                        <h3>Online O'qish</h3>
                        <p>2022 - Hozirgi vaqt</p>
                        <ul>
                            <li>Rus tilini o'rganish.</li>
                            <li>Online kurslarda ishtirok etish.</li>
                            <li>Yangi bilim va ko'nikmalarni olish.</li>
                        </ul>
                    </div>
                </div>

                <div className="skills-section">
                    <h2>Ko'nikmalar</h2>
                    <ul className="skills-list">
                        <li>Frontend Dasturlash</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Ingliz Tili</li>
                        <li>Rus Tili</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Study;
