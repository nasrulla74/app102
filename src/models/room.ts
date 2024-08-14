import { StaticImageData } from "next/image";

type CoverImage = {
  url: string;
};

export type Image = {
  _key: string;
  url: string;
};

type Amenity = {
  _key: string;
  amenity: string;
  icon: string;
};

type RoomType = {
  _key: string;
  name: string;
  image: StaticImageData[];
};

type Slug = {
  _type: string;
  current: string;
};

export type Room = {
  _id: string;
  coverImage: CoverImage;
  description: string;
  dimension: string;
  discount: number;
  images: Image[];
  isBooked: boolean;
  isFeatured: boolean;
  name: string;
  numberOfBeds: number;
  offeredAmenities: Amenity[];
  price: number;
  slug: Slug;
  specialNote: string;
  type: string;
};

export type CreateBookingDto = {
  user: string;
  hotelRoom: string;
  checkinDate: string;
  checkoutDate: string;
  numberOfDays: number;
  adults: number;
  children: number;
  totalPrice: number;
  discount: number;
};

export type BannerDto = {
  image: Image;
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  discount: string;
  saleTime: string;
};

export type ProductDto = {
  image: [];
  slug: Slug;
  name: string;
  about: string;
  f_facilities: [];
  facilities: [];
  hotel_type: string;
  client: string;
  airport_distance: string;
  transfer_types: string;
  no_of_rooms: string;
  location: string;
  images: Image[];
  room_types: RoomType[];
};
