module.exports = {
    title: '橘子 的blog',
    description: '俺也一样!',
    base: "/blog/",
    dest: "dist/",
    theme: "ououe",
    themeConfig: {
        cover: "./background.jpg",
        logo: "./logo.png",
        backgroundImage: false,
        search: true,
        pageGroup: 5,
        postTime: {
            createTime: "创建时间：",
            lastUpdated: "更新于：",
        },
        nav: [{
                text: "Home",
                link: "/",
            },
            {
                text: "2022",
                link: "/2022/"
            },
            {
                text: "2021",
                link: "/2021/"
            },
            {
                text: "关于",
                link: "/about"
            },
            {
                text: "Github",
                link: "https://github.com/Elpmis007/blog",
            },
        ],
    },
}