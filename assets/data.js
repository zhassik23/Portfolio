import image from "assets/images/photo.png";
import logo from "assets/logos/logo.png";
import alux from "assets/logos/alux_logo.png";
import athena_plus from "assets/logos/athena_plus_logo.png";
import kashim from "assets/logos/kashim_logo.png";
import key_horse from "assets/logos/key_horse_logo.png";
import cv from "assets/files/Zhassulan_Serikuly_CV.pdf";
import recommendation1 from "assets/files/Characteristics.pdf";
import recommendation2 from "assets/files/Recommendations.pdf";
import qazaq_taxi from "assets/images/qazaq-taxi.png";
import tez_zhet from "assets/images/tez-zhet.png";
import geonomix from "assets/images/geonomix.png";
import rakhat from "assets/images/rakhat.png";
import tahit from "assets/images/tahit.png";
import yaq from "assets/images/yaq.png";
import qonys_toi from "assets/images/qonys-toi.png";
import rento from "assets/images/rento.png";
import new_navat from "assets/images/new_navat.png";
import midas_event from "assets/images/midas_event.png";
import sxodim from "assets/images/sxodim.png";
import m1_service from "assets/images/m1-service.png";
import check_market from "assets/images/check_market.png";
import art_galery from "assets/images/art-galery.png";
import unistory from "assets/images/unistory.png";
import torgsoft from "assets/images/torgsoft.png";
import youngs_store from "assets/images/youngs_store.png";
import md_stadt from "assets/images/md_stadt.png";
import age_counter from "assets/images/age_counter.png";
import calculator from "assets/images/calculator.png";
import number_speller from "assets/images/number_speller.png";
import coffee_boom from "assets/images/coffee_boom.png";
import portfolio from "assets/images/portfolio.png";

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
    projects: [
        {
            name: "Qazaq Taxi Application",
            link: "https://play.google.com/store/apps/details?id=com.driver.qazaqtaxi&pli=1",
            description: "App for taxi drivers and passengers, key feature is you can order Lady car type for more secure travel. Also I have prepared Admin, B2B websites for Qazaq Taxi.",
            stack: "Vue.js, Nuxt.js, Vuetify, SCSS, CSS",
            image: qazaq_taxi
        }, {
            name: "Tez Zhet",
            link: "https://tez-zhet.netlify.app",
            description: "Website for ordering dishes and products using nuxt.",
            stack: "Nuxt.js, CSS, SCSS",
            image: tez_zhet
        }, {
            name: "Kagis > Geonomix",
            link: "https://alauzo.kz/",
            description: "Multifunctional platform. Within the framework of regional geographic information systems / platforms, digital twins (object / city / territory), provision of interdepartmental public services, implementation of the functions of state bodies, interdepartmental automation, industry GIS, digital registers of state property, archives of documentation, monitoring of the activities of departments and subordinate enterprises, dispatching, situational centers and operational management centers.",
            stack: "Vue.js, HTML, CSS, Django.py, PostgresSQL",
            image: geonomix
        }, {
            name: "Rakhat",
            link: "https://rakhat.a-lux.dev",
            description: "Single page website for Rakhat compang with 360 degree camera. Prepared with Vue3.",
            stack: "Vue.js, SCSS",
            image: rakhat
        }, {
            name: "Tahit",
            link: "https://tahit.netlify.app",
            description: "Multi page project in two languages with authorization and authentication for Profile account. In the catalog its comfortable filter for finding some items.",
            stack: "Vue.js, JavaScript, SCSS",
            image: tahit
        }, {
            name: "YAQ - Альпинист Товаров",
            link: "https://alpenist-tovarov.netlify.app",
            description: "The Alpinist-Products online store, known as yaq, is a network of multi-brand sports stores offering equipment for outdoor activities, hiking, trekking, skyrunning, running and other sports and outdoor activities. The React framework was used to implement this site. This project has a rather complex filtering point where the user can search for goods by category, by color, by gender, by size, by type, and sort the goods as they wish.",
            stack: "React.js",
            image: yaq
        }, {
            name: "Qonys Toi",
            link: "https://qonys-toi.netlify.app",
            description: "Invitation website for event prepared with React.",
            stack: "React.js",
            image: qonys_toi
        }, {
            name: "Rento",
            link: "https://rentokz.netlify.app",
            description: "Startapp project written on react with own admin panel for both users and hosts, and also simple users. Online service for booking sport facilities. Website has phone number verification before registering the user and resetting password.",
            stack: "React.js, Redux, Firebase",
            image: rento
        }, {
            name: "New Navat",
            link: "https://newnavat.kz",
            description: "Multilingual site of the new, sensational, fifth point of Teahouse Navat, which is located in the city of Almaty. Website is unusual in that each page block is the same size, allowing for the benefits of snap scrolling.",
            stack: "HTML, JavaScript, CSS, jQuery",
            image: new_navat
        }, {
            name: "Midas EVENT",
            link: "https://midasevent.kz",
            description: "A company that organizes various kinds of events. Famous for the organization of the show program in the 'NEBO' and the concert of Irina Kairatovna. Each part of the landing page has its own unusual animation.",
            stack: "HTML, JavaScript, CSS, jQuery",
            image: midas_event
        }, {
            name: "Sxodim.kz",
            link: "https://github.com/zhassulaan/sxodim",
            description: "My first full-stack project written in django framework of python and react framework of javascript.",
            stack: "React.js, Django.py",
            image: sxodim
        }, {
            name: "M1 Service",
            link: "https://m1-service.netlify.app",
            description: "...",
            stack: "Nuxt.js, SCSS, TypeScript",
            image: m1_service
        }, {
            name: "ЧЕК МАРКЕТ",
            link: "https://github.com/zhassulaan/check-market",
            description: "Multi-page site written in next.js. The hardest part of this site is the large number of modals and forms. This company is engaged in consultations, design, sale of equipment, installation and adjustment of security systems, warranty and post-warranty service, technical support.",
            stack: "Next.js",
            image: check_market
        }, {
            name: "Art - Galery",
            link: "https://art-galery.netlify.app",
            description: "Website with products that can be searched. You can add product to favourites.",
            stack: "Reacct.js, SCSS",
            image: art_galery
        }, {
            name: "Unistory",
            link: "https://unistory.netlify.app",
            description: "Application on React, with connecting a crypto wallet and displaying information from the backend.",
            stack: "React.ts, CSS, Typescript",
            image: unistory
        }, {
            name: "Torg Soft",
            link: "https://torgsoft.netlify.app",
            description: "The site of the Torgsoft company, which is suitable for accounting for both retail and wholesale trade. The program specializes in automating the following areas: clothing and footwear stores; building and household materials stores; children's shops; stationery stores; salons of curtains, fabrics and accessories; enterprises for the production of various products; online stores and warehouses.",
            stack: "HTML, JavaScript, CSS",
            image: torgsoft
        }, {
            name: "Korean Clothes Store",
            link: "https://youngsstore.netlify.app",
            description: "Personal website for a shop that sells stylish Korean clothes. Here you can view products, place an order and apply for a job. It's fully responsive, so you can use it on any device.",
            stack: "HTML, CSS, JavaScript, Bootstrap, jQuery",
            image: youngs_store
        }, {
            name: "MD Stadt",
            link: "https://md-stadt.netlify.app",
            description: "Description: App for tourists of Kazakhstan with beautiful places in our cities. Written in Nuxt 3.",
            stack: "Nuxt.js, Vue, SCSS, CSS, Typescript",
            image: md_stadt
        }, {
            name: "Age Counter",
            link: "https://zhassulaan.github.io/AgeCounter",
            description: "An application that calculates how many years, months, days, hours... you have lived since you were born. Now you can calculate your age in more detail.",
            stack: "JavaScript, CSS, HTML, moment.js",
            image: age_counter
        }, {
            name: "iPhone’s Calculator",
            link: "https://zhassulaan.github.io/Calculator",
            description: "Simple Calculator. It's designed as our modern iPhones calculator. Here you can solve problems of varying complexity. It reduces the number of mistakes, so you could use it for your examination.",
            stack: "JavaScript, HTML, CSS",
            image: calculator
        }, {
            name: "Number speller",
            link: "https://zhassulaan.github.io/Number-speller",
            description: "Number to word counter converter in three languages.",
            stack: "JavaScript, HTML, CSS",
            image: number_speller
        }, {
            name: "Coffee Boom",
            link: "https://zhassulaan.github.io/CoffeeBoom",
            description: "Webpage for coffee court. It's a simple single page website. You can switch pages by tags. Here it uses some animations to make a smooth transition.",
            stack: "JavaScript, jQuery, HTML, CSS",
            image: coffee_boom
        }, {
            name: "Portfolio Website",
            link: "https://zhassulaan.github.io/Portfolio",
            description: "Portfolio web-page that introduces me. This project is made to show my abilities and information, such as education, skills and work experience. Thanks to this page, you don't have to download a PDF file and read boring text on one text file.",
            stack: "HTML, CSS, JavaScript, jQuery",
            image: portfolio
        }
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
