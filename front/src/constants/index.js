import food from '../assets/icons/food.svg';
import hotel from '../assets/icons/hotel.svg';
import place from '../assets/icons/place.svg';
import shop from '../assets/icons/shop.svg';

export const navLinks = [
  { href: "/", label: "home" },
  { href: "/login", label: "login" },
  { href: "/signup", label: "sign up" },
];

export const banner = [
  {
    title: "TravHelper",
    subtitle: "Discover. Plan. Experience.",
    text: "TravHelper is a web application designed to streamline the trip planning process for users. Whether you're planning a weekend getaway or a long vacation, TravHelper aims to provide a comprehensive solution for managing your travel itinerary. From booking air tickets to arranging local transportation, finding suitable accommodations, and even suggesting popular dining options, TravHelper has got you covered."
  },
];

export const boxes = [
  {
    src: food,
    label: "food",
    alt: "food icon",
  },
  {
    src: hotel,
    label: "hotels",
    alt: "hotels icon",
  },
  {
    src: place,
    label: "places",
    alt: "places icon",
  },
  {
    src: shop,
    label: "shops",
    alt: "shops icon",
  },
];