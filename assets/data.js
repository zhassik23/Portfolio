import image from "assets/images/photo.png";
import logo from "assets/logos/logo.png";
import alux from "assets/logos/alux_logo.png";
import athena_plus from "assets/logos/athena_plus_logo.png";
import kashim from "assets/logos/kashim_logo.png";
import key_horse from "assets/logos/key_horse_logo.png";
import cv from "assets/files/Zhassulan_Serikuly_CV.pdf";
import recommendation1 from "assets/files/Characteristics.pdf";
import recommendation2 from "assets/files/Recommendations.pdf";

const info = {
    name: "Serikuly Zhassulan",
    position: ["Web Developer",  "Software Engineer", "Nuxt.js / Vue.js", "React.js / Next.js", "Django.py"],
    image: image,
    description: "Experienced and versatile Web Developer adept in Vue.js (Nuxt.js), React.js (Next.js), and Django.py. Demonstrates a strong flair for creativity and an ability to deliver innovative solutions. Possesses a proven track record of making informed, independent decisions, coupled with a dedicated team-oriented approach. Committed to ongoing self-improvement and professional growth, consistently embracing new challenges to broaden horizons.",
    logo: logo,
    phone: "+7 (775) 976-41-65",
    gmail: "serikuly.zhassulan@gmail.com",
    location: "Almaty, Kazakhstan",
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
        hh: "https://hh.kz/applicant/resumes/5d166231ff0ae9aa040039ed1f4d6772377352",
        github: "https://github.com/zhassulaan",
        telegram: "https://msng.link/o/?young_flovver=tg",
        whatsapp: "https://wa.me/77759764165",
        facebook: "https://www.facebook.com/young.flovver",
        instagram: "https://instagram.com/zhassulaan__?igshid=YmMyMTA2M2Y"
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
    },
    experience: [
        {
            name: "TOO 'КасХИМ'",
            position: "Software Engineer",
            icon: "fa-solid fa-laptop-code",
            logo: kashim,
            date: "January, 2021 - March, 2021 / Atyrau",
            responsibilities: [
                'Preparing responsive front-end interfaces using HTML, CSS, and JavaScript.',
                'Converting design mockups into high-quality code.',
                'Developing supporting code for web apps.',
                'Participating in daily stand-up meetings and workshops.',
                'Сomputer diagnostics to investigate issues, as well as to provide technical assistance and support.'
            ]
        }, {
            name: "Athena Plus",
            position: "Frontend Developer (React.js, Next.js)",
            icon: "fa-brands fa-react",
            logo: athena_plus,
            date: "Jum, 2021 - May, 2022 / Almaty",
            responsibilities: [
                'Creating logos and animations for websites, contributing to the overall visual branding and UX.',
                'Developing and implementing reusable code components for our clients projects, ensuring functionality and optimal performance.',
                'Utilizing JavaScript framework (React, Next) to implement user interface designs.',
                'Binding scripts to the user interface that provide visualization and animation of the site pages.',
                'Establishing smooth integration between the frontend and backend systems of the website.'
            ]
        }, {
            name: "A - Lux",
            position: "Frontend Developer (Nuxt.js, Vue.js)",
            icon: "fa-brands fa-vuejs",
            logo: alux,
            date: "March, 2022 - August, 2022 / Almaty",
            responsibilities: [
                'Led the front-end development of new projects and played a key role in the modernization of existing projects.',
                'Creating visually appealing web pages based on design layouts to optimize User Interface and Experience.',
                'Cooperation with Backend Developers for smooth merge of backend systems, facilitating seamless data exchange between two components.',
                'Implementing internationalization (i18n) tools to support customization of user interfaces and content in different languages, making it easier to localize apps.'
            ]
        }, {
            name: "Key Horse",
            position: "Full-stack Developer (Vue.js, Django.py, PostgresSQL)",
            icon: "fa-solid fa-server",
            logo: key_horse,
            date: "June, 2022 - November, 2023 / Almaty",
            responsibilities: [
                'Working with microservices and libraries to enhance the scalability and modularity of the service architecture.',
                'Played a pivotal role in the end-to-end development of multiple internal projects and company tools.',
                'Adding and implementing new utility features to optimize functionality and improve the overall performance of the service.',
                'Creating APIs for a diverse range of forms, catalogs and interactive components, enriching user experiences and enabling smooth data exchange.',
                'Identifying and resolving errors / bugs during the layout phase, resulting in a consistent user interface.'
            ]
        }
    ],
    qualification: [
        {},
    ],
    skills: [
        {
            title: "Programming Languages",
            subtitle: "Aproximately 4 years",
            icon: "fa-solid fa-code",
            list: [
                {
                    key: "js",
                    name: "Java Script",
                    percentage: 96
                }, {
                    key: "ts",
                    name: "Type Script",
                    percentage: 88
                }, {
                    key: "react_next",
                    name: "React / Next .js",
                    percentage: 92
                }, {
                    key: "vue_nuxt",
                    name: "Vue / Nuxt .js",
                    percentage: 98
                }, {
                    key: "django",
                    name: "Django.py",
                    percentage: 84
                }, {
                    key: "css",
                    name: "CSS",
                    percentage: 100
                }, {
                    key: "sass",
                    name: "SCSS",
                    percentage: 100
                }, {
                    key: "less",
                    name: "Less",
                    percentage: 85
                }, {
                    key: "bootstrap",
                    name: "Bootstrap",
                    percentage: 77
                }, {
                    key: "html",
                    name: "HTML",
                    percentage: 100
                }
            ]
        }, {
            title: "Data Base",
            subtitle: "More than 4 years",
            icon: "fa-solid fa-clapperboard",
            list: [
                {
                    key: "my_sql",
                    name: "MySQL",
                    percentage: 80
                }, {
                    key: "pl_sql",
                    name: "Oracle PL / SQL",
                    percentage: 80
                }, {
                    key: "postgres_sql",
                    name: "PostgresSQL",
                    percentage: 89
                }, {
                    key: "sqlite",
                    name: "SQLite",
                    percentage: 77
                }
            ]
        }, {
            title: "Designer",
            subtitle: "More than 6 years",
            icon: "fa-solid fa-object-group",
            list: [
                {
                    key: "adobe_photoshop",
                    name: "Adobe Photoshop",
                    percentage: 88
                }, {
                    key: "figma",
                    name: "Figma",
                    percentage: 95
                }, {
                    key: "fusion",
                    name: "Fusion 360°",
                    percentage: 76
                }, {
                    key: "coreldraw",
                    name: "CorelDRAW",
                    percentage: 76
                }
            ]
        }, {
            title: "Languages",
            subtitle: "From birth",
            icon: "fa-solid fa-language",
            list: [
                {
                    key: "english",
                    name: "English",
                    percentage: "Upper-Intermediate",
                    link: "https://drive.google.com/file/d/1FDTru0F0fmUbImlWmFKx1PQ9QbS0zvqR"
                }, {
                    key: "kazakh",
                    name: "Kazakh",
                    percentage: "Native"
                }, {
                    key: "russian",
                    name: "Russian",
                    percentage: "Fluent"
                }, {
                    key: "turkish",
                    name: "Turkish",
                    percentage: "Upper-Intermediate"
                }, {
                    key: "chinese",
                    name: "Chinese",
                    percentage: "Intermediate",
                    link: "https://drive.google.com/file/d/1Nc2r3H21SrN_16sO473fxIXHeC-gScnL"
                }
            ]
        }
    ]
}

export default info;
