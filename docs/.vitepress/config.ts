import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Design Patterns',
  description: 'Learn design patterns',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/FactoryMethod/' },
    ],
    sidebar: {
      '/about/': [
        { text: 'Factory Method', link: '/about/FactoryMethod/' },
      ],
    }
  }
})
