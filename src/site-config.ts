export const siteConfig = {
  author: 'Marcus Ang',
  title: 'My Personal Website',
  subtitle: 'About Me',
  description: 'More about me',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'marcusajh0802@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/marcusjhang',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/marcus-ang-jh/',
      icon: 'i-simple-icons-linkedin',
      header: 'i-ri-linkedin-line',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Books',
        href: '/blog/books',
      },
      {
        text: 'Work',
        href: '/blog/work',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Books',
        href: '/blog/books',
      },
      {
        text: 'Work',
        href: '/blog/work',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
