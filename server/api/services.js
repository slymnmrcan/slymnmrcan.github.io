import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Flutter  ',
      description: {
        en: 'Ben flutter kullanarak modern ve gelişmiş mobil uygulamalar geliştiriyorum',
        id_ID: 'I build modern and advanced applications with using flutter .',
      },
      icon: 'devicon:flutter',
      image: null,
    },
    {
      id: 2,
      title: 'CyberSecurty',
      description: {
        en: 'Web siteleri için güvenlik testleri yapıyorum',
        id_ID: 'I do security tests for websites ',
      },
      image: null,
    },
    {
      id: 3,
      title: '.Net',
      description: {
        en: '.Net ile gelişmiş ve modern web apileri geliştiriyorum',
        id_ID: 'i develop modern and advanced web apis ',
      },
      icon: 'devicon:.net',
      image: null,
    },
   
  ]
})
