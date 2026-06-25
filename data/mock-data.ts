import type { Listing, Room } from "@/types/models";

export const listings: Listing[] = [
  { id: "listing-1", title: "Loft in Panama City Beach", pricePerNight: 142, rating: 4.9, photoUrl: "https://picsum.photos/seed/panama-loft/900/600" },
  { id: "listing-2", title: "Cabin in Red River Gorge", pricePerNight: 198, rating: 4.96, photoUrl: "https://picsum.photos/seed/rrg-cabin/900/600" },
  { id: "listing-3", title: "City walking experience stay", pricePerNight: 120, rating: 4.8, photoUrl: "https://picsum.photos/seed/city-experience/900/600" },
  { id: "listing-4", title: "Beachfront condo in Tampa", pricePerNight: 175, rating: 4.88, photoUrl: "https://picsum.photos/seed/tampa-condo/900/600" },
  { id: "listing-5", title: "House with chef service", pricePerNight: 240, rating: 4.74, photoUrl: "https://picsum.photos/seed/chef-service/900/600" },
  { id: "listing-6", title: "Mountain retreat in Asheville", pricePerNight: 165, rating: 4.92, photoUrl: "https://picsum.photos/seed/asheville-retreat/900/600" },
  { id: "listing-7", title: "Treehouse near Asheville", pricePerNight: 188, rating: 4.95, photoUrl: "https://picsum.photos/seed/asheville-treehouse/900/600" },
  { id: "listing-8", title: "Riverside cabin near Asheville", pricePerNight: 159, rating: 4.85, photoUrl: "https://picsum.photos/seed/asheville-riverside/900/600" },
  { id: "listing-9", title: "Condo in Panama City Beach", pricePerNight: 168, rating: 4.83, photoUrl: "https://picsum.photos/seed/panama-condo/900/600" },
  { id: "listing-10", title: "A-frame cabin in Red River Gorge", pricePerNight: 211, rating: 4.97, photoUrl: "https://picsum.photos/seed/rrg-aframe/900/600" },
  { id: "listing-11", title: "Treehouse in Red River Gorge", pricePerNight: 229, rating: 4.91, photoUrl: "https://picsum.photos/seed/rrg-treehouse/900/600" },
  { id: "listing-12", title: "Lakefront home in Tampa", pricePerNight: 205, rating: 4.79, photoUrl: "https://picsum.photos/seed/tampa-lakefront/900/600" },
  { id: "listing-13", title: "Cozy cabin in Gatlinburg", pricePerNight: 189, rating: 4.86, photoUrl: "https://picsum.photos/seed/gatlinburg-cabin/900/600" },
  { id: "listing-14", title: "Mountain chalet in Gatlinburg", pricePerNight: 215, rating: 4.93, photoUrl: "https://picsum.photos/seed/gatlinburg-chalet/900/600" },
  { id: "listing-15", title: "Modern home in Nashville", pricePerNight: 245, rating: 4.89, photoUrl: "https://picsum.photos/seed/nashville-home/900/600" },
  { id: "listing-16", title: "Food tour experience in Nashville", pricePerNight: 95, rating: 4.88, photoUrl: "https://picsum.photos/seed/nashville-foodtour/900/600" },
  { id: "listing-17", title: "Beach house in Destin", pricePerNight: 260, rating: 4.94, photoUrl: "https://picsum.photos/seed/destin-beachhouse/900/600" },
  { id: "listing-18", title: "Gulfview condo in Destin", pricePerNight: 178, rating: 4.82, photoUrl: "https://picsum.photos/seed/destin-condo/900/600" },
  { id: "listing-19", title: "Private chef service in Cincinnati", pricePerNight: 150, rating: 4.81, photoUrl: "https://picsum.photos/seed/cincinnati-chefservice/900/600" },
  { id: "listing-20", title: "Loop apartment in Chicago", pricePerNight: 199, rating: 4.87, photoUrl: "https://picsum.photos/seed/chicago-loop/900/600" },
];

const locations = [
  "Panama City Beach, Florida", "Slade, Kentucky", "Austin, Texas", "Tampa, Florida",
  "Santa Fe, New Mexico", "Asheville, North Carolina", "Asheville, North Carolina",
  "Asheville, North Carolina", "Panama City Beach, Florida", "Slade, Kentucky",
  "Slade, Kentucky", "Tampa, Florida", "Gatlinburg, Tennessee", "Gatlinburg, Tennessee",
  "Nashville, Tennessee", "Nashville, Tennessee", "Destin, Florida", "Destin, Florida",
  "Cincinnati, Ohio", "Chicago, Illinois",
];

const hostNames = [
  "Camila", "Noah", "Ari", "Jordan", "Lucia", "Mason", "Priya", "Owen", "Sofia",
  "Derek", "Maya", "Theo", "Nina", "Caleb", "Ivy", "Marcus", "Renee", "Felix", "Talia", "Hugo",
];

const yearsHostingByIndex = [5, 8, 3, 6, 7, 4, 2, 9, 6, 4, 3, 10, 5, 7, 2, 8, 4, 6, 3, 9];

export const rooms: Room[] = listings.map((listing, index) => ({
  ...listing,
  reviewCount: 84 + index * 19,
  location: locations[index],
  host: {
    name: hostNames[index],
    yearsHosting: yearsHostingByIndex[index],
    avatarUrl: `https://picsum.photos/seed/host-${index + 1}/160/160`,
  },
  amenities: [
    { icon: "Wi-Fi", label: "Fast wifi" },
    { icon: "AC", label: "Air conditioning" },
    { icon: "PK", label: "Free parking" },
    { icon: "KT", label: "Kitchen" },
    { icon: "WS", label: "Washer" },
    { icon: "PT", label: "Patio" },
  ],
  photos: [
    `https://picsum.photos/seed/room-${index + 1}-1/1200/800`,
    `https://picsum.photos/seed/room-${index + 1}-2/1200/800`,
    `https://picsum.photos/seed/room-${index + 1}-3/1200/800`,
    `https://picsum.photos/seed/room-${index + 1}-4/1200/800`,
  ],
}));