export const plan = [
  {
    type: "arcade",
    periodCharges: {
      monthly: "9",
      yearly: "90",
    },
    icon: "images/icon-arcade.svg",
    monthFree: "2 months free",
  },
  {
    type: "advanced",
    periodCharges: {
      monthly: "12",
      yearly: "120",
    },
    icon: "images/icon-advanced.svg",
    monthFree: "2 months free",
  },
  {
    type: "pro",
    periodCharges: {
      monthly: "15",
      yearly: "150",
    },
    icon: "images/icon-pro.svg",
    monthFree: "2 months free",
  },
];

export const addOns = [
  {
    access: "online service",
    periodCharges: {
      monthly: "1",
      yearly: "10",
    },
    feature:'Access to multiplayer games',
    name:'onlineService'
  },
  {
    access: "larger storage",
    periodCharges: {
      monthly: "2",
      yearly: "20",
    },
    feature:'Extra 1TB of cloud save',
    name:'largerStorage'
  },
  {
    access: "customizable profile",
    periodCharges: {
      monthly: "$2",
      yearly: "20",
    },
    feature:'custom theme on your profile',
    name:'customizableProfile'
  },
];
