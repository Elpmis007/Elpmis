module.exports = {
    title: '橘子的blog',
    description: '俺也一样!',
    base: "/blog/",
    dest: "dist/",
    theme: "ououe",
    evergreen: true,
    locales: { '/': { lang: 'zh-CN' }},
    themeConfig: {
        cover: "./cover.jpg",
        logo: "./logo.png",
        backgroundImage: true,
        search: true,
        pageGroup: 5,
        postTime: {
            createTime: "创建时间",
            lastUpdated: "最后修改",
        },
        nav: [{
                text: "主页",
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
                text: "标签",
                link: "/tag/"
            },
            // { text: '分类', link: '/category/' },
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
    plugins: [
        [
            'vuepress-plugin-helper-live2d', {
                // 是否开启控制台日志打印(default: false)
                log: false,
                live2d: {
                    // 是否启用(关闭请设置为false)(default: true)
                    enable: true,
                    // 模型名称(default: hibiki)>>>取值请参考：
                    // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                    model: 'shizuku', //hijiki  shizuku
                    display: {
                        position: "right", // 显示位置：left/right(default: 'right')
                        width: 135, // 模型的长度(default: 135)
                        height: 300, // 模型的高度(default: 300)
                        hOffset: 65, //  水平偏移(default: 65)
                        vOffset: 0, //  垂直偏移(default: 0)
                    },
                    mobile: {
                        show: false // 是否在移动设备上显示(default: false)
                    },
                    react: {
                        opacity: 1 // 模型透明度(default: 0.8)
                    }
                }
            }
        ],
        'last-reading',
        // add vuepress-plugin-container
        ['container', {
            type: 'right',
            defaultTitle: ''
        }],
        ['container', {
            type: 'tip',
            before: info => `<div class="tip"><p class="title">${info}</p>`,
            after: '</div>'
        }],
        ['container', {
            type: 'warning',
            before: info => `<div class="warning"><p class="title">${info}</p>`,
            after: '</div>'
        }],
        ['container', {
            type: 'danger',
            before: info => `<div class="danger"><p class="title">${info}</p>`,
            after: '</div>'
        }],
        // permalink for posts
        ['blog-multidir', {
            postsDir: {
                posts: 'posts/:year/:month/:day/:slug'
            }
        }],
    ]
}