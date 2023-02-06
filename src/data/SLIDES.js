import image from '../assets/banner.png';

const SLIDES = [
    {
        id: 1,
        background: "#F4EFE9",
        url: image,
        text: "New Shoes",
        button: {
            url: "/",
            text: "Приобрести"
        }
    },

    {
        id: 2,
        background: "#FFFFFF",
        url: "https://nike-off.ru/wp-content/uploads/2021/09/nike-air-force-1-low-07-what-the-NY-CT3610_100-3-scaled.jpg",
        text: "Nike Air Force",
        button: {
            url: "/",
            text: "Купить"
        }
    },

    {
        id: 3,
        background: "#FFFFFF",
        url: "https://sneaker-street.ru/image/import_files/96/96ff4dc9-8d69-11eb-a673-1831bf25c56a_59d3761d-90c0-11eb-a673-1831bf25c56a__w-825__h-825__f-webp.jpeg",
        text: "CHUCK TAYLOR ALL STAR",
        button: {
            url: "/",
            text: "Купить"
        }
    },
];

export default SLIDES;