import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Name',
      content: {
        en: 'Türkçe.',
        id_ID: 'English.',
      },
      image: '/images/.png',
    },
  ]
})
