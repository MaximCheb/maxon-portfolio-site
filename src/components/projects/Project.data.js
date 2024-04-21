const projects = [
	{
		origin:"hotel",
        id:0,
        uuid:"4a870588-98a9-4720-830d-d971b0d03cc7",
        title: "projectHotelTitle",
		img: "/images/projects/hotel1.jpg",
        slider:[
            {
                img:"/images/projects/",
                caption:"projectHotelSlider1"
            }
        ],
        files:[],
        roles:[
            "roleProjectManager",
            "roleSystemAnalitic",
            "roleDesigner",
            "rolePhpDeveloper",
            "roleDbDeveloper"
        ],
        description:"projectHotelDescription",
		applink: [],
        gitLink: 'https://github.com',
        tech: [
            "yii2","php","mysql"
        ],
        ready: 75.0,
        dates:"projectHotelDates",
        state: "stateFreezed",
	},
	{
        origin:"runa",
        id:1,
        uuid:"7d776372-c6c3-41b9-8fad-ad596bc9fd41",
        title: 'RunaWFE internal storage bot',
		img: "images/projects/runawfe2.png",
		skills: 'React, PHP, MySql',
		gitLink: 'https://github.com',
        ready: 25.0,
        state: "stateFreezed",
        tech: [
            "java8",
            "wildfly"
        ],
        roles:[
            "roleProjectManager",
            "roleSystemAnalitic",
            "roleDesigner",
            "rolePhpDeveloper",
            "roleDbDeveloper"
        ],
	},
	{
        origin:"disdoc",
        id:2,
        uuid:"9797a07c-89d6-4b8a-bceb-cc2917b61ddb",
        title: 'Game concept creator',
		img: "images/projects/gcc7.png",
		gitLink: 'https://github.com',
        state: "statePrePreMVP",
        tech: [
            "flutter", "dart",
            "spring", "java17"
        ],
        roles:[
            "roleProjectManager",
            "roleSystemAnalitic",
            "roleDesigner",
            "rolePhpDeveloper",
            "roleDbDeveloper"
        ],
	},
    {
        origin:"potfolio",
        id:3,
        uuid:"018eaf05-6dfb-73a8-9252-2585cbac8603",
        title: 'My portfolio site',
		img: "images/projects/gcc7.png",
		gitLink: "https://github.com/MaximCheb/maxon-portfolio-site",
        state: "stateMVP",
        tech: [
            "reactjs","javascript"
        ],
        roles:[
            "roleProjectManager",
            "roleFrontendDeveloper"
        ],
        applink: ["current:/home"],
        releases: [{version:"0.0.0",caption:"init"},{}]
	},
	// {
	// 	title: 'Dating app',
	// 	img: project04,
	// 	imgBig: project04Big,
	// 	skills: 'React Native',
    //     ready: 25.0,
	// },
	// {
	// 	title: 'Landing',
	// 	img: project05,
	// 	imgBig: project05Big,
	// 	skills: 'HTML, SCSS, JS',
    //     ready: 25.0,
	// },
	// {
	// 	title: 'Gaming community',
	// 	img: project06,
	// 	imgBig: project06Big,
	// 	skills: 'React, PHP, MySql',
    //     ready: 25.0,
	// },
];

export {projects}