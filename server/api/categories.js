import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Müzik',
        id_ID: 'Song',
      },
    },
    {
      id: 2,
      title: {
        en: 'Uygulama',
        id_ID: 'App',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web tasarım',
        id_ID: 'Web Design',
      },
    },
  ]
})
