import image from "assets/images/photo.png";
import cv from "assets/files/Zhassulan_Serikuly_CV.pdf";
import recommendation1 from "assets/files/Characteristics.pdf";
import recommendation2 from "assets/files/Recommendations.pdf";

const info = {
    name: "Serikuly Zhassulan",
    position: ["Web Developer",  "Software Engineer", "Nuxt.js / Vue.js", "React.js / Next.js", "Django.py"],
    image: image,
    description: "Experienced and versatile Web Developer adept in Vue.js (Nuxt.js), React.js (Next.js), and Django.py. Demonstrates a strong flair for creativity and an ability to deliver innovative solutions. Possesses a proven track record of making informed, independent decisions, coupled with a dedicated team-oriented approach. Committed to ongoing self-improvement and professional growth, consistently embracing new challenges to broaden horizons.",
    stats: [
        {
            key: "Project works",
            value: 23
        }, {
            key: "Language profiency",
            value: 5
        }, {
            key: "Companies worked",
            value: 4
        }
    ],
    links: {
        phone: "tel:+77759764165",
        gmail: "mailto:serikuly.zhassulan@gmail.com",
        linkedin: "https://www.linkedin.com/in/serikulyzhassulan",
        github: "https://github.com/zhassulaan",
        telegram: "https://msng.link/o/?young_flovver=tg",
        hh: "https://hh.kz/applicant/resumes/5d166231ff0ae9aa040039ed1f4d6772377352"
    },
    documents: {
        cv: cv,
        recomendations: [
            {
                cheif: "Mammadov E.",
                file: recommendation1,
                description: "TOO 'KasHIM' - August, 2021 / Atyrau"
            }, {
                cheif: "Sain S.",
                file: recommendation2,
                description: "'Athena plus' - May, 2022 / Almaty"
            }
        ]
    }
}

export default info;
