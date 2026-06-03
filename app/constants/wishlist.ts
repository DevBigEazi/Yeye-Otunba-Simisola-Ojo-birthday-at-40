/**
 * Wishlist Constants for Simi's 40th Birthday
 * Exports all items with their metadata, prices, wishlist wish URLs, and image assets.
 */

export const WISHLIST_IMAGES = {
  // Beauty
  fentyMascara: "/wishlistImages/Fenty Hella Thicc Volumizing Mascara.jpeg",
  fentyFoundation: "/wishlistImages/Fenty Pro Filt'r Soft Matte Foundation.jpeg",
  fentyPowder: "/wishlistImages/FentyInvisimatteSettingBlottingPowder.jpeg",
  fentyConcealer: "/wishlistImages/FentyWereEvenLongwearConcealer345C .jpeg",
  makeupOrganiser: "/wishlistImages/MakeupBagofDreams—LargeVelvetOrganiser.png",
  charlotteSpray: "/wishlistImages/Charlotte Tilbury Airbrush Setting Spray 200ml.png",
  urbanDecaySpray: "/wishlistImages/Urban Decay All Nighter Setting Spray 240ml.jpeg",

  // Fashion & Bags
  quencherTumbler: "/wishlistImages/QuencherH20FlutedTumbler.jpeg",
  guessBag: "/wishlistImages/Guess Women's Meridian Bucket Bag.jpg",
  tommyBackpack: "/wishlistImages/Tommy Hilfiger Essential Backpack.jpg",
  mkCameraBag: "/wishlistImages/Michael Kors Bryant Camera Bag.jpg",
  newBalanceTrainers: "/wishlistImages/New Balance 9060 Trainers - Black.png",
  vibramShoes: "/wishlistImages/Vibram V-Train 2.0 Womens All Black.png",
  radleyTote: "/wishlistImages/Radley Townley Large Zip-Top Tote Bag.png",

  // Accessories
  wscWatchStrap: "/wishlistImages/WsC Link Bracelet — Rose Gold Apple Watch Strap.webp",
  givenchyPerfume: "/wishlistImages/Givenchy L'Interdit Eau de Parfum 50ml.png",
  milaneseStrapGold: "/wishlistImages/Milanese Loop Apple Watch Strap - Gold.png",
  bossSunglasses: "/wishlistImages/BOSS Women's Round Sunglasses.png",
  goldAnklet: "/wishlistImages/9ct Yellow Gold Forzatina Anklet.png",
  guessWatchGold: "/wishlistImages/Guess Women's Chrono Dial Watch.png",
} as const;

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  category: 'BEAUTY' | 'FASHION & BAGS' | 'ACCESSORIES';
  image: string;
  buyUrl: string;
  received: boolean;
  receivedBy?: string;
}

export const WISHLIST_ITEMS: WishlistItem[] = [
  {
    id: "quencher-tumbler",
    name: "Stanley Adventure Quencher H2.0 Fluted Tumbler 0.8L",
    price: 44.00,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.quencherTumbler,
    buyUrl: "https://www.wishlist.com/wish/AjNqzx",
    received: false
  },
  {
    id: "makeup-organiser",
    name: "Charlotte Tilbury Makeup Bag of Dreams — Large Velvet Organiser",
    price: 45.00,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.makeupOrganiser,
    buyUrl: "https://www.wishlist.com/wish/9e1wN8",
    received: false
  },
  {
    id: "fenty-powder",
    name: "Fenty Beauty Invisimatte Instant Setting + Blotting Powder",
    price: 24.00,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.fentyPowder,
    buyUrl: "https://www.wishlist.com/wish/Z1YgRG",
    received: false
  },
  {
    id: "fenty-concealer",
    name: "Fenty Beauty We're Even Hydrating Longwear Concealer 345c",
    price: 25.00,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.fentyConcealer,
    buyUrl: "https://www.wishlist.com/wish/Wv6zKm",
    received: false
  },
  {
    id: "fenty-mascara",
    name: "Fenty Beauty Hella Thicc Volumizing Mascara Cuz I'm Black",
    price: 21.00,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.fentyMascara,
    buyUrl: "https://www.wishlist.com/wish/bpdwVM",
    received: false
  },
  {
    id: "fenty-foundation",
    name: "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation 400",
    price: 17.50,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.fentyFoundation,
    buyUrl: "https://www.wishlist.com/wish/0o9enB",
    received: false
  },
  {
    id: "charlotte-spray",
    name: "Charlotte Tilbury Airbrush Flawless Setting Spray 200ml",
    price: 43.35,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.charlotteSpray,
    buyUrl: "https://www.wishlist.com/wish/oe5PZo",
    received: false
  },
  {
    id: "urban-decay-spray",
    name: "Urban Decay All Nighter Setting Spray 240ml",
    price: 44.00,
    category: "BEAUTY",
    image: WISHLIST_IMAGES.urbanDecaySpray,
    buyUrl: "https://www.wishlist.com/wish/KvoAmA",
    received: false
  },
  {
    id: "guess-bag",
    name: "Guess Women's Meridian Bucket Bag",
    price: 109.00,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.guessBag,
    buyUrl: "https://www.wishlist.com/wish/bpd69K",
    received: false
  },
  {
    id: "tommy-backpack",
    name: "Tommy Hilfiger Essential Backpack",
    price: 98.00,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.tommyBackpack,
    buyUrl: "https://www.wishlist.com/wish/vZwKwb",
    received: true, // Marked as received per user request
    receivedBy: "Otunba"
  },
  {
    id: "mk-camera-bag",
    name: "Michael Kors Bryant Camera Bag",
    price: 145.00,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.mkCameraBag,
    buyUrl: "https://www.wishlist.com/wish/oe5652",
    received: false
  },
  {
    id: "wsc-watch-strap",
    name: "WsC Link Bracelet — Rose Gold Apple Watch Strap",
    price: 89.00,
    category: "ACCESSORIES",
    image: WISHLIST_IMAGES.wscWatchStrap,
    buyUrl: "https://www.wishlist.com/wish/Bj3131",
    received: false
  },
  {
    id: "givenchy-perfume",
    name: "Givenchy L'Interdit Eau de Parfum 50ml",
    price: 100.00,
    category: "ACCESSORIES",
    image: WISHLIST_IMAGES.givenchyPerfume,
    buyUrl: "https://www.wishlist.com/wish/nz45a2",
    received: false
  },
  {
    id: "new-balance-trainers",
    name: "New Balance 9060 Trainers — Black",
    price: 160.00,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.newBalanceTrainers,
    buyUrl: "https://www.wishlist.com/wish/eg4op8",
    received: false
  },
  {
    id: "vibram-shoes",
    name: "Vibram V-Train 2.0 Womens All Black",
    price: 95.00,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.vibramShoes,
    buyUrl: "https://www.wishlist.com/wish/vZwoJV",
    received: false
  },
  {
    id: "radley-tote",
    name: "Radley The Townley Large Zip-Top Tote Bag - Black",
    price: 90.30,
    category: "FASHION & BAGS",
    image: WISHLIST_IMAGES.radleyTote,
    buyUrl: "https://www.wishlist.com/wish/Bj3L62",
    received: false
  },
  {
    id: "milanese-strap-gold",
    name: "WsC Milanese Loop Apple Watch Strap - Gold",
    price: 39.00,
    category: "ACCESSORIES",
    image: WISHLIST_IMAGES.milaneseStrapGold,
    buyUrl: "https://www.wishlist.com/wish/xJgdg2",
    received: true,
    receivedBy: "Sola"
  },
  {
    id: "boss-sunglasses",
    name: "BOSS Women's Round Sunglasses",
    price: 139.00,
    category: "ACCESSORIES",
    image: WISHLIST_IMAGES.bossSunglasses,
    buyUrl: "https://www.wishlist.com/wish/lvWAq1",
    received: true,
    receivedBy: "Funmi"
  },
  {
    id: "gold-anklet",
    name: "9ct Yellow Gold Forzatina Anklet",
    price: 79.00,
    category: "ACCESSORIES",
    image: WISHLIST_IMAGES.goldAnklet,
    buyUrl: "https://www.wishlist.com/wish/Wv62om",
    received: true,
    receivedBy: "Bayo"
  },
  {
    id: "guess-watch-gold",
    name: "Guess Women's Chrono Dial Gold Tone Bracelet Watch",
    price: 150.00,
    category: "ACCESSORIES",
    image: WISHLIST_IMAGES.guessWatchGold,
    buyUrl: "https://www.wishlist.com/wish/QveYOL",
    received: true,
    receivedBy: "Simisola"
  }
];
