export const botMessages = [
  {
    id: "640c81bd4572",
    value: "start",
    message:
      "Welcome to Halleck Vineyard fellow wine enthusiast ! I am Halle, your Virtual Concierge and Wine Educator, here to be your guide. Ask me anything about Wine & Halleck",
    suggestions: [
      {
        id: "929b5e5ad5e5",
        value: "taste",
        title: "Taste our wines",
        selected: false,
        handler: () => {},
      },
      {
        id: "3607c0bab08a",
        value: "membership",
        title: "Explore our Memberships",
        selected: false,
        handler: () => {},
      },
      {
        id: "44e6bdabeaa4",
        value: "shop",
        title: "Shop our wines",
        selected: false,
        handler: () => {},
      },
      {
        id: "a0d1c1bb9c36",
        value: "events",
        title: "Events",
        selected: false,
        handler: () => {},
      },
      {
        id: "ca0d74cff5c6",
        value: "faq",
        title: "Ask a Question",
        selected: false,
        handler: () => {},
      },
    ],
    media: {
      image: ``,
      content: ``,
      price: "",
      label: "",
    },
    sender: "bot",
  },
];

export const replyMessages = [
  {
    id: "d65e4843aec8",
    value: "taste",
    message: `Here are some experiences you shouldn't miss to "Join us at our Halleck Estate for a sublime tasting experience"`,
    media: {
      image: `./Mask group.png`,
      label: "Sonoma Wine Testing",
      price: "$65",
      content: `20 guests max per wine tasting | Open Thursday thru Sunday | seated wine tastings at 11 am & 3 pm | Reservations Required | $78pp for groups of 7-12`,
    },
    suggestions: [],
    sender: "bot",
  },
  {
    id: "cb3cfc1e13c6",
    value: "taste",
    message: `Here are some experiences you shouldn't miss to "Join us at our Halleck Estate for a sublime tasting experience"`,
    media: {
      image: `./Mask group.png`,
      label: "Sonoma Wine Testing",
      price: "$65",
      content: `20 guests max per wine tasting | Open Thursday thru Sunday | seated wine tastings at 11 am & 3 pm | Reservations Required | $78pp for groups of 7-12`,
    },
    suggestions: [],
    sender: "bot",
  },
  {
    id: "940t81bd4572",
    value: "shop",
    message:
      "We have so many good wines so let's figure out your preference. Is there something specific you are looking for? You can choose any of the options below or type your favorite",
    suggestions: [
      {
        id: "929b5e5ad5e3",
        value: "wines",
        title: "North Coast",
        selected: false,
        handler: () => {},
      },
      {
        id: "3607c0bab08k",
        value: "wines",
        title: "Russian River Valley",
        selected: false,
        handler: () => {},
      },
      {
        id: "44e6bdabeao4",
        value: "wines",
        title: "Sonoma Coast",
        selected: false,
        handler: () => {},
      },
      {
        id: "30d1c1bb9c36",
        value: "wines",
        title: "Sonoma Mountain",
        selected: false,
        handler: () => {},
      },
    ],
    media: {
      image: ``,
      content: ``,
      price: "",
      label: "",
    },
    sender: "bot",
  },
  {
    id: "e40t81bd4572",
    value: "wines",
    message:
      "Here are some Upcoming Events. If You want to Explore more you can click on the link",
    suggestions: [
    ],
    media: {
      image: ``,
      content: ``,
      price: "",
      label: "",
    },
    sender: "bot",
  },
  {
    id: "e40t81bd4572",
    value: "events",
    message:
      "Here are some Upcoming Events. If You want to Explore more you can click on the link",
    suggestions: [
      {
        id: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
        name: "Wine Tour Adventure",
        region: "Turkish",
        year: 2025,
        price: 20889,
        imageUrl: "../../images/events/turkish.png",
      },
      {
        id: "h1b2c3d4-e5f6-7890-g1h2-i7j4k5l6m7n8",
        name: "Vineyard Harvest Party",
        region: "Halleck",
        year: 2025,
        price: 145,
        imageUrl: "../../images/events/halleck.png",
      },
      {
        id: "h152c3d4-e5f6-7890-g1h2-i7j4k5l6m7n8",
        name: "Vineyard Harvest Party",
        region: "Halleck",
        year: 2025,
        price: 145,
        imageUrl: "../../images/events/halleck.png",
      },
      {
        id: "s1b2c3d4-e5f6-7890-g1h2-i7j4k5l6m7n8",
        name: "Vineyard Harvest Party",
        region: "Halleck",
        year: 2025,
        price: 145,
        imageUrl: "../../images/events/turkish.png",
      },
    ],
    media: {
      image: ``,
      content: ``,
      price: "",
      label: "",
    },
    sender: "bot",
  },
];

export const wines = [
  {
    id: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    name: "Pinot Noir Hillside Cuvee",
    region: "Sonoma Coast",
    year: 2019,
    price: 55.0,
    imageUrl: "../../images/wines/pinot-noir.png",
  },
  {
    id: "b2c3d4e5-f6g7-8901-h2i3-j4k5l6m7n8o9",
    name: "Dry White Zinfandel",
    region: "Russian River Valley",
    year: 2020,
    price: 34.0,
    imageUrl: "../../images/wines/dry-white.png",
  },
  {
    id: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7y8",
    name: "Pinot Noir Hillside Cuvee",
    region: "Sonoma Coast 2",
    year: 2019,
    price: 55.0,
    imageUrl: "../../images/wines/pexels-brettjordan-917831.jpg",
  },
  {
    id: "b2c3d4e5-f6g7-8901-h2i3-j4k5l6m5n8o9",
    name: "Dry White Zinfandel",
    region: "Russian River Valley 2",
    year: 2020,
    price: 34.0,
    imageUrl: "../../images/wines/pexels-brettjordan-2308939.jpg",
  },
];
