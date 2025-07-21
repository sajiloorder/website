export const dummy_menu_categories = [
  {
    id: 1,
    name: "Momo",
    description: "Delicious Nepali dumplings available in steamed, fried, and jhol varieties.",
    image_url: "https://example.com/images/categories/momo.jpg",
    is_active: true,
    is_highlighted: true,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  },
  {
    id: 2,
    name: "Chowmein & Noodles",
    description: "Stir-fried noodles served with vegetables, chicken, or buff – a local fast food favorite.",
    image_url: "https://example.com/images/categories/chowmein.jpg",
    is_active: true,
    is_highlighted: true,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  },
  {
    id: 3,
    name: "Burgers & Sandwiches",
    description: "Juicy burgers and stuffed sandwiches made with local and international flavors.",
    image_url: "https://example.com/images/categories/burger.jpg",
    is_active: true,
    is_highlighted: false,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  },
  {
    id: 4,
    name: "Pizza",
    description: "Hot and cheesy pizzas with a variety of toppings, from veggie to meat lovers.",
    image_url: "https://example.com/images/categories/pizza.jpg",
    is_active: true,
    is_highlighted: true,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  },
  {
    id: 5,
    name: "Indian & South Asian Cuisine",
    description: "Spicy and flavorful curries, biryanis, and thali sets inspired by Indian cuisine.",
    image_url: "https://example.com/images/categories/indian.jpg",
    is_active: true,
    is_highlighted: false,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  },
  {
    id: 6,
    name: "Bakery & Snacks",
    description: "Freshly baked pastries, cookies, and savory tea-time snacks.",
    image_url: "https://example.com/images/categories/bakery.jpg",
    is_active: true,
    is_highlighted: false,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  },
  {
    id: 7,
    name: "Drinks & Alcohol",
    description: "Chilled beverages, milk teas, soft drinks, and a wide selection of alcoholic drinks.",
    image_url: "https://example.com/images/categories/drinks.jpg",
    is_active: true,
    is_highlighted: true,
    created_at: "2025-07-21T12:00:00Z",
    updated_at: "2025-07-21T12:00:00Z"
  }
]


export const dummy_menu_items = [
  {
    id: 1,
    name: "Steamed Chicken Momo",
    description: "Tasty steamed chicken momo prepared fresh with local ingredients.",
    category: 1,
    price: 701.75,
    image_url: "/images/burger.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 2,
    name: "Fried Veg Momo",
    description: "Tasty fried veg momo prepared fresh with local ingredients.",
    category: 1,
    price: 781.39,
    image_url: "/images/burger.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 3,
    name: "Buff Jhol Momo",
    description: "Tasty buff jhol momo prepared fresh with local ingredients.",
    category: 1,
    price: 743.9,
    image_url: "https://example.com/images/items/buff_jhol_momo.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 4,
    name: "Chicken Chowmein",
    description: "Nepali-style stir-fried noodles with chicken and seasonal vegetables.",
    category: 2,
    price: 820.5,
    image_url: "https://example.com/images/items/chicken_chowmein.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 5,
    name: "Buff Chowmein",
    description: "Classic buff chowmein with tangy sauces and crunchy veggies.",
    category: 2,
    price: 795.2,
    image_url: "https://example.com/images/items/buff_chowmein.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 6,
    name: "Veg Noodles",
    description: "Simple and satisfying vegetable noodles made with love.",
    category: 2,
    price: 705.9,
    image_url: "https://example.com/images/items/veg_noodles.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 7,
    name: "Chicken Burger",
    description: "Crispy fried chicken patty with lettuce and mayo in a toasted bun.",
    category: 3,
    price: 699.5,
    image_url: "https://example.com/images/items/chicken_burger.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 8,
    name: "Veg Sandwich",
    description: "Layered sandwich stuffed with fresh veggies and cheese.",
    category: 3,
    price: 599.9,
    image_url: "https://example.com/images/items/veg_sandwich.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 9,
    name: "Chicken Pizza",
    description: "Medium-sized pizza topped with chicken, onion, and capsicum.",
    category: 4,
    price: 1185.0,
    image_url: "https://example.com/images/items/chicken_pizza.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 10,
    name: "Veg Pizza",
    description: "Veggie delight pizza with cheese, tomato, olives, and jalapeños.",
    category: 4,
    price: 1080.0,
    image_url: "https://example.com/images/items/veg_pizza.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 11,
    name: "Paneer Butter Masala",
    description: "Creamy paneer curry served with naan or rice.",
    category: 5,
    price: 950.0,
    image_url: "https://example.com/images/items/paneer_butter_masala.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 12,
    name: "Chicken Biryani",
    description: "Fragrant rice layered with chicken and Indian spices.",
    category: 5,
    price: 1100.0,
    image_url: "https://example.com/images/items/chicken_biryani.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 13,
    name: "Mixed Thali Set",
    description: "Complete Nepali-Indian thali with rice, dal, curry, pickle, and curd.",
    category: 5,
    price: 980.0,
    image_url: "https://example.com/images/items/thali_set.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 14,
    name: "Choco Donut",
    description: "Soft and chocolatey donut glazed with dark chocolate.",
    category: 6,
    price: 230.0,
    image_url: "https://example.com/images/items/choco_donut.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 15,
    name: "Veg Puff",
    description: "Crispy puff stuffed with spiced vegetables.",
    category: 6,
    price: 120.0,
    image_url: "https://example.com/images/items/veg_puff.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 16,
    name: "Iced Lemon Tea",
    description: "Chilled tea with lemon and mint, perfect for summer.",
    category: 7,
    price: 330.0,
    image_url: "https://example.com/images/items/iced_lemon_tea.jpg",
    is_available: true,
    is_popular: false,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 17,
    name: "Milk Tea (Cold)",
    description: "Sweet cold milk tea with tapioca pearls.",
    category: 7,
    price: 360.0,
    image_url: "https://example.com/images/items/cold_milk_tea.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  },
  {
    id: 18,
    name: "Kingfisher Beer",
    description: "Premium lager beer served chilled.",
    category: 7,
    price: 470.0,
    image_url: "https://example.com/images/items/beer.jpg",
    is_available: true,
    is_popular: true,
    created_at: "2025-07-21T09:26:35.527665Z",
    updated_at: "2025-07-21T09:26:35.527665Z"
  }
]



// const categories = [
//     { name: 'Burger', image: '/images/burger.jpg' },
//     { name: 'Biryani', image: '/images/mutton.jpg' },
//     { name: 'Momo', image: '/images/chilly momo.jpg' },
//     { name: 'Roll', image: '/images/chicken katti.jpg' },
//     { name: 'Drinks', image: '/images/drinks.jpg' },
//     { name: 'Combo', image: '/images/combo.jpeg' },
//     { name: 'Sekwa', image: '/images/sekwa.jpg' },
//     { name: 'Breakfast', image: '/images/burger.jpg' },
//     { name: 'Salad', image: '/images/salad.jpg' },
//     { name: 'Pizza', image: '/images/burger.jpg' },
//     { name: 'Offer', image: '/images/chilly momo.jpg' },
//     { name: 'Recommended', image: '/images/combo.jpeg' },
//     { name: 'popular', image: '/images/drinks.jpg' },
// ];