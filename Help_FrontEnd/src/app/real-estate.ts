export interface RealEstate {
  status: number;
  data: Data;
}

export interface Data {
  home_search: HomeSearch;
  
}

export interface HomeSearch { 
  results: Result[];
}

export interface Result {
  photos: Photo[] | null; 
  list_price_min: number | null;
  href: string;
  when_indexed: string;
  last_sold_price: any;
  property_id: string;  
  listing_id: string;
  price_reduced_amount: any;
  location: Location;
  last_update_date: string;  
  permalink: string;
  list_date: any;
  open_houses: any;
  last_sold_date: any;
  last_price_change_date: any;
  description: Description;  
  photo_count: number | null;
  list_price: any; 
  list_price_max: number | null;
  tags: string[] | null;  
  status: string;
  flags: Flags;
  community: any;
  matterport: boolean;
  primary_photo: PrimaryPhoto | null;
}

export interface Photo {
  title: any;
  description: any;
  tags: any;
  href: string;
  type: any;
}

export interface Location { 
  address: Address;
  search_areas: SearchArea[];
  neighborhoods: any;
}

export interface Address {  
  street_number: string;
  state: string; 
  state_code: string; 
  postal_code: string;  
  street_name: string;
  country: string;
  coordinate?: Coordinate;
  line: string;
  city: string;
}

export interface Coordinate {
  lon: number;
  lat: number;
}

export interface SearchArea {
  city: string;
  state_code: string;
}

export interface Description {
  garage_max: any | null;
  sqft_min: number | null;
  baths_partial_calc: any | null;
  baths_1qtr: any | null;
  beds_max: number | null;
  lot_sqft: any | null;
  sub_type: any | null;
  garage: any;
  baths_3qtr: any | null;
  garage_min: any | null;
  beds_min: number | null;
  baths_min: number | null;
  name: string | null;
  baths_half: any | null;
  sqft: any | null;
  year_built: any | null;
  baths: any | null;
  baths_full: any | null;
  sqft_max: number | null;
  baths_max: number | null;
  baths_full_calc: any | null;
  beds: any | null;
  type: string | null;
}

export interface Flags {
  is_deal_available: any;  
  is_for_rent: boolean; 
}

export interface PrimaryPhoto {
  href: string;
  type: any;
  description: any;
}
