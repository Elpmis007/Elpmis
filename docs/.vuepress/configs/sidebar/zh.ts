import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: 'About me',
      children: [
        '/guide/getting-started.md',
        '/guide/share.md',
      ],
    },
    {
      text: '测试',
      children: [
        '/2022/2022-03-23.md',
      ],
    },
  ]
}
