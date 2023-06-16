export interface RealEstate {
  status: number
  data: Data
}

export interface Data {
  home_search: HomeSearch
  // geo: Geo
}

export interface HomeSearch {
  // total: number
  // count: number
  results: Result[]
}

export interface Result {
  photos: Photo[]
  // branding: Branding
  // other_listings: OtherListings
  list_price_min: number
  href: string
  when_indexed: string
  last_sold_price: any
  property_id: string
  // advertisers: Advertiser[]
  // virtual_tours: any
  // seller_promotion: any
  listing_id: string
  // price_reduced_amount: any
  location: Location
  last_update_date: string
  // source: Source
  permalink: string
  list_date: any
  open_houses: any
  last_sold_date: any
  last_price_change_date: any
  description: Description
  //last_price_change_amount: any
  //price_reduced_date: any
  //property_history: any
  photo_count: number
  list_price: any
  // lead_attributes: LeadAttributes
  list_price_max: number
  tags: string[]
  // pet_policy: PetPolicy
  // products: Products
  // suppression_flags: SuppressionFlags
  status: string
  flags: Flags
  community: any
  matterport: boolean
  primary_photo: PrimaryPhoto
}

export interface Photo {
  title: any
  description: any
  tags: any
  href: string
  type: any
}

// export interface Branding {}

// export interface OtherListings {
//   rdc: Rdc[]
// }

// export interface Rdc {
//   listing_id: string
//   status: string
//   primary?: boolean
// }

// export interface Advertiser {
//   office: Office
//   broker: any
//   name: any
//   mls_set: any
//   email: any
//   nrds_id: any
//   type: string
//   slogan: any
//   photo: any
//   href: any
//   phones: any
//   fulfillment_id: any
// }

// export interface Office {
//   phones: Phone[]
//   lead_email?: LeadEmail
//   photo: any
//   name: string
//   fulfillment_id: any
//   href?: string
//   mls_set: any
//   email?: string
// }

// export interface Phone {
//   trackable: any
//   number?: string
//   ext: any
//   primary: boolean
//   type: string
// }

// export interface LeadEmail {
//   to: string
//   cc: any
// }

export interface Location {
  // county: County
  address: Address
  search_areas: SearchArea[]
  neighborhoods: any
}

// export interface County {
//   name: string
//   state_code: string
//   fips_code: string
// }

export interface Address {
  //street_post_direction: any
  street_number: string
  state: string
  //street_suffix: string
  state_code: string
  //unit: any
  postal_code: string
  //street_direction: any
  street_name: string
  country: string
  // coordinate: Coordinate
  line: string
  city: string
}

// export interface Coordinate {
//   lon: number
//   lat: number
// }

export interface SearchArea {
  city: string
  state_code: string
}

// export interface Source {
//   agents: any
//   community_id: number
//   id: string
//   listing_id: string
//   name: string
//   raw: any
//   type: string
// }

export interface Description {
  garage_max: any
  sqft_min: number
  baths_partial_calc: any
  baths_1qtr: any
  beds_max: number
  lot_sqft: any
  sub_type: any
  garage: any
  baths_3qtr: any
  garage_min: any
  beds_min: number
  baths_min: number
  name: string
  baths_half: any
  sqft: any
  year_built: any
  baths: any
  baths_full: any
  sqft_max: number
  baths_max: number
  baths_full_calc: any
  beds: any
  type: string
}

// export interface LeadAttributes {
//   show_contact_an_agent: boolean
// }

// export interface PetPolicy {
//   cats: boolean
//   dogs: boolean
//   dogs_large: boolean
//   dogs_small: boolean
//   text: string
// }

// export interface Products {
//   products: string[]
//   product_attributes: any
// }

// export interface SuppressionFlags {
//   has_suppress_management_company_logo: boolean
//   has_suppress_list_date: boolean
//   has_suppress_management_company_other_listings: boolean
//   has_suppress_management_company_name: boolean
//   has_suppress_management_company_url: boolean
//   has_suppress_foreclosure: boolean
// }

export interface Flags {
  // is_deal_available: any
  // is_senior_community: any
  // is_new_listing: any
  is_for_rent: boolean
  // is_garage_present: any
}

export interface PrimaryPhoto {
  href: string
  type: any
  description: any
}

// export interface Geo {
//   parents: Parent[]
//   recommended_zips: RecommendedZips
//   recommended_cities: RecommendedCities
//   recommended_counties: RecommendedCounties
//   geo_statistics: GeoStatistics4
//   recommended_neighborhoods: RecommendedNeighborhoods
// }

// export interface Parent {
//   name: string
//   geo_type: string
//   slug_id: string
// }

// export interface RecommendedZips {
//   geos: Geo2[]
// }

// export interface Geo2 {
//   slug_id: string
//   postal_code: string
//   geo_type: string
//   geo_statistics: GeoStatistics
// }

// export interface GeoStatistics {
//   housing_market: HousingMarket
// }

// export interface HousingMarket {
//   median_rent_price: number
// }

// export interface RecommendedCities {
//   geos: Geo3[]
// }

// export interface Geo3 {
//   slug_id: string
//   city: string
//   state_code: string
//   geo_type: string
//   geo_statistics: GeoStatistics2
// }

// export interface GeoStatistics2 {
//   housing_market: HousingMarket2
// }

// export interface HousingMarket2 {
//   median_rent_price?: number
// }

// export interface RecommendedCounties {
//   geos: Geo4[]
// }

// export interface Geo4 {
//   slug_id: string
//   geo_statistics: GeoStatistics3
//   state_code: string
//   geo_type: string
//   county: string
// }

// export interface GeoStatistics3 {
//   housing_market: HousingMarket3
// }

// export interface HousingMarket3 {
//   median_rent_price?: number
// }

// export interface GeoStatistics4 {
//   market_trends: MarketTrends
// }

// export interface MarketTrends {
//   age_days: number
//   listing_price: number
//   listing_price_sqft: number
//   median_sold_price: number
//   rental_listing_price: number
//   month_to_month: MonthToMonth
//   active_listing_count: number
// }

// export interface MonthToMonth {
//   active_rental_listing_count_percent_change: number
// }

// export interface RecommendedNeighborhoods {
//   geos: Geo5[]
// }

// export interface Geo5 {
//   city: string
//   state_code: string
//   slug_id: string
//   neighborhood: string
//   geo_type: string
//   geo_statistics: GeoStatistics5
// }

// export interface GeoStatistics5 {
//   housing_market: HousingMarket4
// }

// export interface HousingMarket4 {
//   median_rent_price?: number
// }
