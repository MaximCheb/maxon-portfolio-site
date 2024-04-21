const projects = [
	{
		origin:"hotel",
        id:0,
        uuid:"4a870588-98a9-4720-830d-d971b0d03cc7",
        title: "projectHotelTitle",
		img: "/images/projects/hotel1.jpg",
        // slider:[
        //     {
        //         img:"/images/projects/",
        //         caption:"projectHotelSlider1"
        //     }
        // ],
        roles:[
            "roleProjectManager",
            "roleSystemAnalitic",
            "roleDesigner",
            "rolePhpDeveloper",
            "roleDbDeveloper"
        ],
        description:"projectHotelDescription",
        date:"projectHotelDates",
		applink: [],
        gitLink: 'https://github.com',
        tech: [
            "yii2","php","mysql"
        ],
        ready: 75.0,
        state: "stateFreezed",
	},
	{
        origin:"runa",
        id:1,
        uuid:"7d776372-c6c3-41b9-8fad-ad596bc9fd41",
        title: 'projectRunaTitle',
		img: "images/projects/runawfe2.png",
        description:"projectRunaDescription",
        date:"projectRunaDates",
		skills: 'React, PHP, MySql',
		gitLink: 'https://github.com',
        ready: 25.0,
        state: "stateFreezed",
        tech: [
            "java8",
            "wildfly"
        ],
        roles:[
            "roleJavaDeveloper"
        ],
	},
	{
        origin:"disdoc",
        id:2,
        uuid:"9797a07c-89d6-4b8a-bceb-cc2917b61ddb",
        title: 'projectDisdocTitle',
        description:"projectDisdocDescription",
        date:"projectDisdocDates",
		img: "images/projects/gcc7.png",
		gitLink: 'https://github.com',
        state: "statePrototype",
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
        origin:"portfolio",
        id:3,
        uuid:"018eaf05-6dfb-73a8-9252-2585cbac8603",
        title: 'projectPortfolioTitle',
        description:"projectPortfolioDescription",
        date:"projectPortfolioDates",
		img: "images/projects/portfolio.png",
		gitLink: "https://github.com/MaximCheb/maxon-portfolio-site",
        state: "stateMVP",
        tech: [
            "reactjs","javascript"
        ],
        roles:[
            "roleProjectManager",
            "roleFrontendDeveloper"
        ],
        applink: ["/"],
        releases: [{version:"0.0.0",caption:"init"},{}]
	},
];

export {projects}