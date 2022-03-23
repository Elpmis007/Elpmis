import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '2022',
      children: [
        '/guide/getting-started.md',
        '/guide/share.md',
      ],
    },
  ],
  '/2022/': [
    {
      text: 'test',
      children: [
        '/2022/2022-03-23.md',
      ],
    },
  ],
}
