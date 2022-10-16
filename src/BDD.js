const info = [
  {
    name: "Subway",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==",
    note: "4.5",
    drive_time: "20 - 30mn",
  },
  {
    name: "McDonald's",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODQ1NDA4Zi1lOGFmLTRkMDUtYWI4YS0yNWMwYzVjMGI4YWUuanBlZw==",
    note: "3.9",
    drive_time: "15 - 25mn",
  },
  {
    name: "O'Tacos",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mOGQ5MjU5ZS00YjIzLTRkNWYtOWQ1YS0wNjBlNjE2NDI4Y2QuanBlZw==",
    note: "4.4",
    drive_time: "15 - 25mn",
  },
  {
    name: "Pizza Hut",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWY1Y2IzMi0yZjYxLTQ5OWQtYjZjOC1iZWIzMDM0MmM4M2IuanBlZw==",
    note: "4.1",
    drive_time: "20 - 30mn",
  },
  {
    name: "Momiji",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWExZDYxOC0wZTQwLTRiZjItYjRjNS1hZTAyZDQ2Y2Y1Y2UuanBlZw==",
    note: "4.3",
    drive_time: "20 - 30mn",
  },
  {
    name: "Food Time",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jNTMxMTVhOC0wZjExLTQ5YmUtYjIyNi0yYTc5YjgzMTA4MmI=",
    note: "4.2",
    drive_time: "25 - 35mn",
  },
  {
    name: "L'escale",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81OTI5MzU4Ni01NDk4LTQ5YTYtOGMzZS1lMzYzNTBkYmMzMTMuanBlZw==",
    note: "4.5",
    drive_time: "20 - 30mn",
  },
  {
    name: "M&A",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTU0NDA4NzMyMjk3Ni13NTUwLTdiLmpwZw==",
    note: "4.3",
    drive_time: "20 - 30mn",
  },
  {
    name: "Burger's Friens",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81Mzk3YWEzOC0yYjRhLTRmOTItYmU4Ny1kZDE5YWEzNGU4MTQuanBlZw==",
    note: "3.8",
    drive_time: "30 - 40mn",
  },
];
const tags = [
  {
    category: "Pizza",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png",
  },
  {
    category: "Italian",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/italian.png",
  },
  {
    category: "Japanese",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/japanese.png",
  },
  {
    category: "Sushi",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/sushi.png",
  },
  {
    category: "Alcool",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png",
  },
  {
    category: "Commerces",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/specialty_foods.jpg",
  },
  {
    category: "Epicerie",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png",
  },
  {
    category: "Courses",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png",
  },
  {
    category: "Les mieux notés",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png",
  },
  {
    category: "Offres",
    img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png",
  },
];
module.exports = {
  info,
  tags,
};

//odoo erp
// Territoire à vivre, sécurité sociale, monnaie local : subvention / PHP
// Coopération : installer next cloud, google agenda, / PHP
// dolibard
// DJANGO VUE.JS envronnement numeric de traval ENT : IIZ ANGLAIS.COM
// mise en relative
// 2023 : PYTHON JS / sprint 1 à 3 semaine sur un projet :

// strapi
// sprint : 10h, NEXT CLOUD , ADRESS MAIL,  SALLON DE DISCUTION ET AGENDA PRO, RED MAIN, OPEN SOURCE, TEMPS PAASER SURE UJN TICKET NOTER DANS RED MAIN, GITLAB, ELEMENT, BIG BLUE BUTTON, ZOOM
// combien dans l'entreprise ? apprentie:félisie, mouna,

// facturé 20h par mois a des clients pour me dégager un salaire : niveau expert (30 et 45euro pour les devs)
// FRANCOIS : maitre d'apprentissage : bête sur python -> réseau et installation.
