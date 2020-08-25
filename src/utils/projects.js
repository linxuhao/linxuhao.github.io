
const projects = [
    {
        id: "Trayinia",
        platform: "PC",
        type: "Game",
        year: "2017",
        keywords: ["Unity 3D", "C#", "Arcade"],
        descriptions: ["Trayinia is a two player cooperative arcade game ",
            "Designed to be played on arcadia's(a UTC student game making association) arcade machine ",
            "Players have to cooperate to reach a maximun high score ",
            "and then turn on each other to absorb the score for himself "],
        media: [
            {
                type: "web",
                content: "https://siyu6974.github.io/Trayinia/"
            }
        ],
        github: "private"
    },
    {
        id: "Air Hockey",
        platform: "PC",
        type: "Game",
        year: "2017",
        keywords: ["Unity 3D", "C#", "Mixte Reality", "Realtime Image Processing", "Motion Capture "],
        descriptions: ["Air Hockey is a reality mixte hockey game ",
            "Real objects will be detected by a web cam ",
            "A image processing algorithm will calculate and project player's avatar in virtual space ",
            "so players can 'hit' the virtual ball with their real hand xD "],
        media: [
            {
                type: "web",
                content: "https://linxuhao.github.io/AirHockey/"
            },
            {
                type: "video",
                content: "../../public/ressources/AirHockey_reborn.mp4"
            }
        ],
        github: "https://github.com/linxuhao/AirHockey/"
    },
    {
        id: "Colorant",
        platform: "Web/Mobile",
        type: "Game",
        year: "2018",
        keywords: ["Java", "Javascript", "Multi Agents", "Simulation", "Mobile as controller "],
        descriptions: ["Colorant is a collaborative drawing and simulation game ",
            "by using web sockets, and a Server backed with Java EE ",
            "Players can draw on a single screen together with their phone as controller "],
        media: [
            {
                type: "image",
                content: "../../public/ressources/AirHockey_reborn.mp4"
            },
            {
                type: "web",
                content: "D:/MyProjets/Javascripts/PersonalPage/ReactPersonalPage/public/ressources/colorant_presentation/presentation.html"
            }
        ],
        github:"private"
    },
    {
        id: "Agir",
        platform: "Cross Platform Mobile",
        type: "Game",
        year: "2016",
        keywords: ["Ionic2", "Typescript"],
        descriptions: ["Agir 'Do it' offers 4 interactive experiences ",
            "adapt, rock, light up, and forget ",
            "Each scene comes as an answer to contemporary injunctions ",
            "being flexible, dynamic and mobile, finding one's way, forgetting in order to move forward... "
        ],
        media: [
            {
                type: "appstore_google",
                content: "https://play.google.com/store/apps/details?id=com.tx.agir"
            },
            {
                type: "appstore_apple",
                content: "https://appsto.re/cn/WDN8fb.i"
            }
        ],
        github:"private"
    },
    {
        id: "Selenuim-auto-web",
        platform: "Desktop-Windows",
        type: "App",
        year: "2020",
        keywords: ["JavaFx", "Selenium"],
        descriptions: ["A simple Gui to configure actions to execute automaticly on web ",
            "Including navigate, fill, click and select",
            "Can save and load configuration from file"
        ],
        media: [],
        github:"https://github.com/linxuhao/Selenuim-auto-web"
    },
];
export default projects;