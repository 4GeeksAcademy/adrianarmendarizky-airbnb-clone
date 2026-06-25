export interface Listing {
  id: string;
  title: string;
  pricePerNight: number;
  rating: number;
  photoUrl: string;
}

export interface Room extends Listing {
  reviewCount: number;
  location: string;
  host: {
    name: string;
    yearsHosting: number;
    avatarUrl: string;
  };
  amenities: { icon: string; label: string }[];
  photos: string[];
}
