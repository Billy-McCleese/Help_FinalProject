import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Favorite } from './favorite';
import { Review } from './review';
import { User } from './user';
import { RealEstate } from './real-estate';
import { AuthUser } from './auth-user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private readonly url = 'https://localhost:7105/api/';
  private readonly externalUrl =
    'https://us-real-estate.p.rapidapi.com/v2/for-rent-by-zipcode?zipcode=';

  //MLSAPI
  GetRentalDataByZip(
    zip: number,
    limit: number,
    offset: number,
    sort: string
  ): Observable<RealEstate> {
    // Make the HTTP request with options

    return this.http.get<RealEstate>(
      `${this.url}RealEstate/rent-by-zipcode?zipcode=48188&limit=10&offset=1&sort=lowest_price`
    );

    // return of({
    //   status: 200,
    //   data: {
    //     home_search: {
    //       total: 123,
    //       count: 10,
    //       results: [
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ap.rdcpix.com/03352d0dd048844342d4c148c470f91cl-m233128779s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ap.rdcpix.com/03352d0dd048844342d4c148c470f91cl-m4106170596s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ap.rdcpix.com/03352d0dd048844342d4c148c470f91cl-m3675595205s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: [
    //             {
    //               name: null,
    //               photo: null,
    //               type: 'Office',
    //             },
    //           ],
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '2941161148',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //             ],
    //           },
    //           list_price_min: null,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/531-Janette-Ave_Windsor_ON_N9A-4Z6_M92445-54683',
    //           when_indexed: '2022-08-20T00:36:56.470Z',
    //           last_sold_price: null,
    //           property_id: '9244554683',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '5192525010',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: null,
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email:
    //                   '2cf7bbb095+syndication+c516133085@email2.showmojo.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '2941161148',
    //           price_reduced_amount: null,
    //           location: {
    //             county: null,
    //             address: {
    //               street_post_direction: null,
    //               street_number: '531',
    //               state: 'Ontario',
    //               street_suffix: 'Ave',
    //               state_code: 'ON',
    //               unit: null,
    //               postal_code: 'N9A 4Z6',
    //               street_direction: null,
    //               street_name: 'Janette',
    //               country: 'Canada',
    //               coordinate: {
    //                 lon: -83.04437,
    //                 lat: 42.31265,
    //               },
    //               line: '531 Janette Ave',
    //               city: 'Windsor',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'windsor',
    //                 state_code: 'on',
    //               },
    //             ],
    //             neighborhoods: null,
    //           },
    //           last_update_date: '2022-08-19T23:12:31Z',
    //           source: {
    //             agents: null,
    //             community_id: null,
    //             id: 'SWJO',
    //             listing_id: 'c516133085',
    //             name: 'ShowMojo',
    //             raw: null,
    //             type: 'unit_rental',
    //           },
    //           permalink: '531-Janette-Ave_Windsor_ON_N9A-4Z6_M92445-54683',
    //           list_date: null,
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: null,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: null,
    //             lot_sqft: null,
    //             sub_type: 'condo',
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: null,
    //             baths_min: null,
    //             name: null,
    //             baths_half: null,
    //             sqft: null,
    //             year_built: null,
    //             baths: 0,
    //             baths_full: null,
    //             sqft_max: null,
    //             baths_max: null,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'condos',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 9,
    //           list_price: 700,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: null,
    //           tags: ['dining_room', 'laundry_room', 'rental_property'],
    //           pet_policy: null,
    //           products: null,
    //           suppression_flags: {
    //             has_suppress_foreclosure: true,
    //             has_suppress_list_date: true,
    //           },
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: null,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: false,
    //           primary_photo: {
    //             href: 'https://ap.rdcpix.com/03352d0dd048844342d4c148c470f91cl-m233128779s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/3dc5c3b56842a3d272b3dcfbed4a38d2c-f622741521s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/3dc5c3b56842a3d272b3dcfbed4a38d2c-f2905700516s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/3dc5c3b56842a3d272b3dcfbed4a38d2c-f593098450s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '613504221',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //             ],
    //           },
    //           list_price_min: 727,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/1401-Chene-St_Detroit_MI_48207_M40234-39627',
    //           when_indexed: '2022-08-20T03:44:00.989Z',
    //           last_sold_price: null,
    //           property_id: '4023439627',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'MHT Housing Inc.',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'Parkview Senior Apartments',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '613504221',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '1401',
    //               state: 'Michigan',
    //               street_suffix: 'St',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48207',
    //               street_direction: null,
    //               street_name: 'Chene',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.02713,
    //                 lat: 42.34397,
    //               },
    //               line: '1401 Chene St',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower East Central',
    //                 state_code: 'MI',
    //                 id: '6e2bf028-e476-5e8c-96fc-850908a7d4ac',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Elmwood Park',
    //                 state_code: 'MI',
    //                 id: '32b85805-046f-51ba-afff-e1cb58af300a',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-08-17T14:24:30Z',
    //           source: {
    //             agents: null,
    //             community_id: 3212999,
    //             id: 'CSTR',
    //             listing_id: '1dqdmr7',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '1401-Chene-St_Detroit_MI_48207_M40234-39627',
    //           list_date: '2021-12-10T02:20:45Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 431,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 1,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 0,
    //             baths_min: 1,
    //             name: 'Parkview Senior Apartments',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1973,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 536,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 3,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 775,
    //           tags: [
    //             'community_no_fee',
    //             'community_elevator',
    //             'central_air',
    //             'forced_air',
    //             'pets_allowed',
    //             'floor_plan',
    //           ],
    //           pet_policy: {
    //             cats: true,
    //             dogs: true,
    //             dogs_large: false,
    //             dogs_small: true,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: false,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/3dc5c3b56842a3d272b3dcfbed4a38d2c-f622741521s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/6c1d04ac9d1df1dc1027f7d3933e327dc-f3072641860s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/6c1d04ac9d1df1dc1027f7d3933e327dc-f2491200504s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/6c1d04ac9d1df1dc1027f7d3933e327dc-f1810303625s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '585160229',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //               {
    //                 listing_id: '557876541',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '548436757',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '583240781',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '2915461074',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '565409477',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '571391341',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '571382985',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //             ],
    //           },
    //           list_price_min: 750,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/1600-Antietam-Ave_Detroit_MI_48207_M48834-43298',
    //           when_indexed: '2022-08-20T03:41:11.053Z',
    //           last_sold_price: null,
    //           property_id: '4883443298',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                   {
    //                     trackable: null,
    //                     number: '5869999974',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                   {
    //                     trackable: true,
    //                     number: '5869999974',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'London Property Corporation - City Place Detroit',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '5869999974',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'City Place Detroit',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '585160229',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '1600',
    //               state: 'Michigan',
    //               street_suffix: 'Ave',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48207',
    //               street_direction: null,
    //               street_name: 'Antietam',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.03658,
    //                 lat: 42.34294,
    //               },
    //               line: '1600 Antietam Ave',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower East Central',
    //                 state_code: 'MI',
    //                 id: '6e2bf028-e476-5e8c-96fc-850908a7d4ac',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Lafayette Park',
    //                 state_code: 'MI',
    //                 id: '7514ae43-4e22-542b-a6d7-6ffd3f8c50f7',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-07-13T01:53:57Z',
    //           source: {
    //             agents: null,
    //             community_id: 1302091,
    //             id: 'CSTR',
    //             listing_id: 'hmk20b0',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '1600-Antietam-Ave_Detroit_MI_48207_M48834-43298',
    //           list_date: '2021-09-16T23:39:33Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 480,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 1,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 0,
    //             baths_min: 1,
    //             name: 'City Place Detroit',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1965,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 580,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 36,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 950,
    //           tags: [
    //             'community_no_fee',
    //             'community_elevator',
    //             'community_gym',
    //             'central_air',
    //             'forced_air',
    //             'disability_features',
    //             'view',
    //             'pets_allowed',
    //             'basketball_court',
    //             'tennis_court',
    //             'tennis',
    //             'basketball',
    //             'baseball',
    //           ],
    //           pet_policy: {
    //             cats: true,
    //             dogs: true,
    //             dogs_large: true,
    //             dogs_small: false,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: true,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/6c1d04ac9d1df1dc1027f7d3933e327dc-f3072641860s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/8d50fa5007c04ca3054d3d8884fa5bf5c-f4165902505s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/8d50fa5007c04ca3054d3d8884fa5bf5c-f715088262s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/8d50fa5007c04ca3054d3d8884fa5bf5c-f1499528200s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '589778717',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //               {
    //                 listing_id: '548725729',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '548725733',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '549668485',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '548574585',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '2915467922',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '571387597',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '571410833',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //             ],
    //           },
    //           list_price_min: 752,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/1511-1st-St_Detroit_MI_48226_M31949-49001',
    //           when_indexed: '2022-08-20T03:53:21.996Z',
    //           last_sold_price: null,
    //           property_id: '3194949001',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                   {
    //                     trackable: null,
    //                     number: '7347670384',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                   {
    //                     trackable: true,
    //                     number: '7347670384',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'Rock Companies',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '7347670384',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'Town Residences',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '589778717',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '1511',
    //               state: 'Michigan',
    //               street_suffix: 'St',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48226',
    //               street_direction: null,
    //               street_name: '1st',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.05524,
    //                 lat: 42.33274,
    //               },
    //               line: '1511 1st St',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Downtown Detroit',
    //                 state_code: 'MI',
    //                 id: '8503bffb-2bdf-59c8-a223-296d1f07a8b5',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-08-16T02:24:04Z',
    //           source: {
    //             agents: null,
    //             community_id: 1403930,
    //             id: 'CSTR',
    //             listing_id: 'jzefpd7',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '1511-1st-St_Detroit_MI_48226_M31949-49001',
    //           list_date: '2021-09-16T23:39:33Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 400,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 0,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 0,
    //             baths_min: 1,
    //             name: 'Town Residences',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1920,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 475,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 24,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 1040,
    //           tags: [
    //             'community_no_fee',
    //             'community_elevator',
    //             'community_gym',
    //             'central_air',
    //             'forced_air',
    //             'dishwasher',
    //             'hardwood_floors',
    //             'view',
    //             'pets_allowed',
    //             'modern_kitchen',
    //             'rental_property',
    //             'farm',
    //           ],
    //           pet_policy: {
    //             cats: true,
    //             dogs: true,
    //             dogs_large: false,
    //             dogs_small: false,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: true,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/8d50fa5007c04ca3054d3d8884fa5bf5c-f4165902505s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/0e2f7a4d6e9246174ce9db37430665cfc-f782768004s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/0e2f7a4d6e9246174ce9db37430665cfc-f2015777739s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/0e2f7a4d6e9246174ce9db37430665cfc-f2400830097s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '613504957',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //               {
    //                 listing_id: '548725805',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '2915477161',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //             ],
    //           },
    //           list_price_min: 760,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/2001-Chene-St_Detroit_MI_48207_M47131-55490',
    //           when_indexed: '2022-08-20T03:30:31.614Z',
    //           last_sold_price: null,
    //           property_id: '4713155490',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'Huntington Management',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'Chene Park Commons',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '613504957',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '2001',
    //               state: 'Michigan',
    //               street_suffix: 'St',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48207',
    //               street_direction: null,
    //               street_name: 'Chene',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.02695,
    //                 lat: 42.34714,
    //               },
    //               line: '2001 Chene St',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower East Central',
    //                 state_code: 'MI',
    //                 id: '6e2bf028-e476-5e8c-96fc-850908a7d4ac',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Elmwood Park',
    //                 state_code: 'MI',
    //                 id: '32b85805-046f-51ba-afff-e1cb58af300a',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-08-09T14:21:46Z',
    //           source: {
    //             agents: null,
    //             community_id: 3215531,
    //             id: 'CSTR',
    //             listing_id: '7j29xww',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '2001-Chene-St_Detroit_MI_48207_M47131-55490',
    //           list_date: '2021-12-10T02:20:45Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 850,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 2,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 1,
    //             baths_min: 1,
    //             name: 'Chene Park Commons',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1991,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 950,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 7,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 925,
    //           tags: [
    //             'community_no_fee',
    //             'central_air',
    //             'forced_air',
    //             'dishwasher',
    //             'hardwood_floors',
    //           ],
    //           pet_policy: {
    //             cats: false,
    //             dogs: false,
    //             dogs_large: false,
    //             dogs_small: false,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: false,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/0e2f7a4d6e9246174ce9db37430665cfc-f782768004s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/fa018000d2d0d46a144b84e745160d96c-f1282958744s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/fa018000d2d0d46a144b84e745160d96c-f1750561925s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/fa018000d2d0d46a144b84e745160d96c-f955665867s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '594162173',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //             ],
    //           },
    //           list_price_min: 779,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/457-Brainard-St_Detroit_MI_48201_M35797-43122',
    //           when_indexed: '2022-08-20T03:45:20.405Z',
    //           last_sold_price: null,
    //           property_id: '3579743122',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                   {
    //                     trackable: null,
    //                     number: '3134624123',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                   {
    //                     trackable: true,
    //                     number: '3134624123',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: '2630391-1109@showmetherent.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'RentLinxBasic',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: '2630391-1109@showmetherent.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '3134624123',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'KMG Prestige',
    //                 fulfillment_id: null,
    //                 href: 'https://www.showmetherent.com/457-Brainard-Street-Detroit-MI-48201',
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '594162173',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '457',
    //               state: 'Michigan',
    //               street_suffix: 'St',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48201',
    //               street_direction: null,
    //               street_name: 'Brainard',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.062247,
    //                 lat: 42.346134,
    //               },
    //               line: '457 Brainard St',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower Woodward',
    //                 state_code: 'MI',
    //                 id: 'ee8bcec8-b34d-5e14-a8ab-6d3b1b5dfb32',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Midtown',
    //                 state_code: 'MI',
    //                 id: '07ce464e-9222-5393-905a-74a7057dfab2',
    //               },
    //             ],
    //           },
    //           last_update_date: '2021-11-04T00:07:28Z',
    //           source: {
    //             agents: null,
    //             community_id: 1477629,
    //             id: 'RLXB',
    //             listing_id: '2630391',
    //             name: 'RentLinxBasic',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '457-Brainard-St_Detroit_MI_48201_M35797-43122',
    //           list_date: '2021-10-11T21:29:44Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 720,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 2,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 2,
    //             baths_min: 1,
    //             name: 'KMG Prestige',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1916,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 720,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 13,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 779,
    //           tags: ['pets_allowed', 'community_no_fee', 'park'],
    //           pet_policy: {
    //             cats: false,
    //             dogs: false,
    //             dogs_large: false,
    //             dogs_small: false,
    //             text: null,
    //           },
    //           products: {
    //             products: ['basic'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: {
    //             has_suppress_management_company_logo: true,
    //             has_suppress_management_company_other_listings: true,
    //             has_suppress_management_company_name: true,
    //             has_suppress_management_company_url: true,
    //             has_suppress_foreclosure: true,
    //           },
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: false,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/fa018000d2d0d46a144b84e745160d96c-f1282958744s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/0e0c91410079f765bd887c82c52f9bf2c-f1422640949s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/0e0c91410079f765bd887c82c52f9bf2c-f2789766833s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/0e0c91410079f765bd887c82c52f9bf2c-f1211395042s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '2916866348',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //             ],
    //           },
    //           list_price_min: 800,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/1935-Chene-Ct_Detroit_MI_48207_M91925-91821',
    //           when_indexed: '2022-08-20T02:24:56.172Z',
    //           last_sold_price: null,
    //           property_id: '9192591821',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                   {
    //                     trackable: null,
    //                     number: '3134990769',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                   {
    //                     trackable: true,
    //                     number: '3134990769',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'Princeton Management',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '3134990769',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'Regency Towers & Place',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '2916866348',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '1935',
    //               state: 'Michigan',
    //               street_suffix: 'Ct',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48207',
    //               street_direction: null,
    //               street_name: 'Chene',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.028599,
    //                 lat: 42.345395,
    //               },
    //               line: '1935 Chene Ct',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower East Central',
    //                 state_code: 'MI',
    //                 id: '6e2bf028-e476-5e8c-96fc-850908a7d4ac',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Elmwood Park',
    //                 state_code: 'MI',
    //                 id: '32b85805-046f-51ba-afff-e1cb58af300a',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-07-25T20:25:37Z',
    //           source: {
    //             agents: null,
    //             community_id: 2218492,
    //             id: 'CSTR',
    //             listing_id: '9z4qn47',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '1935-Chene-Ct_Detroit_MI_48207_M91925-91821',
    //           list_date: '2021-09-16T23:39:33Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 372,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 1,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 0,
    //             baths_min: 1,
    //             name: 'Regency Towers & Place',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1970,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 520,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 50,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 860,
    //           tags: [
    //             'community_no_fee',
    //             'community_gym',
    //             'central_air',
    //             'forced_air',
    //             'pets_allowed',
    //             'medicalcare',
    //             'shopping',
    //           ],
    //           pet_policy: {
    //             cats: true,
    //             dogs: true,
    //             dogs_large: false,
    //             dogs_small: true,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: true,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/0e0c91410079f765bd887c82c52f9bf2c-f1422640949s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/e167ce056a14d394e3475d8bc994ad21c-f571770767s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/e167ce056a14d394e3475d8bc994ad21c-f3587552205s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/e167ce056a14d394e3475d8bc994ad21c-f4255214020s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '585170201',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //               {
    //                 listing_id: '548725809',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '565507777',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //               {
    //                 listing_id: '571390609',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //             ],
    //           },
    //           list_price_min: 814,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/1301-Orleans-St_Detroit_MI_48207_M37500-47227',
    //           when_indexed: '2022-08-20T03:41:32.503Z',
    //           last_sold_price: null,
    //           property_id: '3750047227',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                   {
    //                     trackable: null,
    //                     number: '5864744616',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                   {
    //                     trackable: true,
    //                     number: '5864744616',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'The Fourmidable Group',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '5864744616',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'Lafayette Towers',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '585170201',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '1301',
    //               state: 'Michigan',
    //               street_suffix: 'St',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48207',
    //               street_direction: null,
    //               street_name: 'Orleans',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.0326,
    //                 lat: 42.34046,
    //               },
    //               line: '1301 Orleans St',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower East Central',
    //                 state_code: 'MI',
    //                 id: '6e2bf028-e476-5e8c-96fc-850908a7d4ac',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Lafayette Park',
    //                 state_code: 'MI',
    //                 id: '7514ae43-4e22-542b-a6d7-6ffd3f8c50f7',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-07-13T01:53:57Z',
    //           source: {
    //             agents: null,
    //             community_id: 1314881,
    //             id: 'CSTR',
    //             listing_id: 'r8h66x0',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink: '1301-Orleans-St_Detroit_MI_48207_M37500-47227',
    //           list_date: '2021-09-16T23:39:33Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 414,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 3,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 0,
    //             baths_min: 1,
    //             name: 'Lafayette Towers',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1963,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 2156,
    //             baths_max: 2,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 50,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 3000,
    //           tags: [
    //             'community_no_fee',
    //             'community_elevator',
    //             'community_gym',
    //             'central_air',
    //             'forced_air',
    //             'dishwasher',
    //             'pets_allowed',
    //             'swimming_pool',
    //             'views',
    //           ],
    //           pet_policy: {
    //             cats: true,
    //             dogs: false,
    //             dogs_large: false,
    //             dogs_small: false,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: true,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/e167ce056a14d394e3475d8bc994ad21c-f571770767s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: [
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/a53d4402aafecbf36f0d173e82fdcc7dc-f696796064s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/a53d4402aafecbf36f0d173e82fdcc7dc-f3887627238s-w1024_h768.jpg',
    //               type: null,
    //             },
    //             {
    //               title: null,
    //               description: null,
    //               tags: null,
    //               href: 'https://ar.rdcpix.com/a53d4402aafecbf36f0d173e82fdcc7dc-f973616236s-w1024_h768.jpg',
    //               type: null,
    //             },
    //           ],
    //           branding: {},
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '585170589',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //               {
    //                 listing_id: '548725893',
    //                 status: 'off_market',
    //                 primary: null,
    //               },
    //             ],
    //           },
    //           list_price_min: 850,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/2160-2170-E-Jefferson-Ave_Detroit_MI_48207_M36400-08816',
    //           when_indexed: '2022-08-20T03:42:43.140Z',
    //           last_sold_price: null,
    //           property_id: '3640008816',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: null,
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                   {
    //                     trackable: null,
    //                     number: '5862618259',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                   {
    //                     trackable: true,
    //                     number: '5862618259',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: {
    //                   to: 'rentalservice@move.com',
    //                   cc: null,
    //                 },
    //                 photo: null,
    //                 name: 'Cynex Enterprises, Inc.',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '5862618259',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'office',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: 'Pasadena Apartments',
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: null,
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'community',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: null,
    //           seller_promotion: null,
    //           listing_id: '585170589',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '2170',
    //               state: 'Michigan',
    //               street_suffix: 'Ave',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48207',
    //               street_direction: 'E',
    //               street_name: 'Jefferson',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.02452,
    //                 lat: 42.33691,
    //               },
    //               line: '2170 E Jefferson Ave',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Rivertown - Warehouse District',
    //                 state_code: 'MI',
    //                 id: '321d88c6-28bb-5cb5-89c1-0dfe8917243c',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-06-01T21:50:47Z',
    //           source: {
    //             agents: null,
    //             community_id: 1315375,
    //             id: 'CSTR',
    //             listing_id: 'yrksfvt',
    //             name: 'CoStar',
    //             raw: null,
    //             type: 'community',
    //           },
    //           permalink:
    //             '2160-2170-E-Jefferson-Ave_Detroit_MI_48207_M36400-08816',
    //           list_date: '2022-06-01T21:50:47Z',
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: null,
    //           description: {
    //             garage_max: null,
    //             sqft_min: 500,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: 2,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: 0,
    //             baths_min: 1,
    //             name: 'Pasadena Apartments',
    //             baths_half: null,
    //             sqft: null,
    //             year_built: 1902,
    //             baths: null,
    //             baths_full: null,
    //             sqft_max: 900,
    //             baths_max: 1,
    //             baths_full_calc: null,
    //             beds: null,
    //             type: 'apartment',
    //           },
    //           last_price_change_amount: null,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: 73,
    //           list_price: null,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: 1000,
    //           tags: [
    //             'community_no_fee',
    //             'community_elevator',
    //             'central_air',
    //             'forced_air',
    //             'disability_features',
    //             'dishwasher',
    //             'hardwood_floors',
    //           ],
    //           pet_policy: {
    //             cats: false,
    //             dogs: false,
    //             dogs_large: false,
    //             dogs_small: false,
    //             text: null,
    //           },
    //           products: {
    //             products: ['showcase_community'],
    //             product_attributes: null,
    //           },
    //           suppression_flags: null,
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: false,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: false,
    //           primary_photo: {
    //             href: 'https://ar.rdcpix.com/a53d4402aafecbf36f0d173e82fdcc7dc-f696796064s-w1024_h768.jpg',
    //             type: null,
    //             description: null,
    //           },
    //         },
    //         {
    //           photos: null,
    //           branding: [
    //             {
    //               name: null,
    //               photo: null,
    //               type: 'Office',
    //             },
    //           ],
    //           other_listings: {
    //             rdc: [
    //               {
    //                 listing_id: '2923009179',
    //                 status: 'for_rent',
    //                 primary: true,
    //               },
    //             ],
    //           },
    //           list_price_min: null,
    //           href: 'https://www.realtor.com/realestateandhomes-detail/633-Prentis-St_Detroit_MI_48201_M93910-50515',
    //           when_indexed: '2022-08-20T03:19:52.813Z',
    //           last_sold_price: null,
    //           property_id: '9391050515',
    //           advertisers: [
    //             {
    //               office: {
    //                 phones: [
    //                   {
    //                     trackable: null,
    //                     number: '3132859570',
    //                     ext: null,
    //                     primary: false,
    //                     type: 'primary',
    //                   },
    //                 ],
    //                 lead_email: null,
    //                 photo: null,
    //                 name: null,
    //                 fulfillment_id: null,
    //                 href: null,
    //                 mls_set: null,
    //                 email: 'rentalservice@move.com',
    //               },
    //               broker: null,
    //               name: null,
    //               mls_set: null,
    //               email: null,
    //               nrds_id: null,
    //               type: 'management',
    //               slogan: null,
    //               photo: null,
    //               href: null,
    //               phones: null,
    //               fulfillment_id: null,
    //             },
    //           ],
    //           virtual_tours: [
    //             {
    //               href: 'https://www.showmetherent.com/633-Prentis-St-Detroit-MI-48201-2',
    //             },
    //           ],
    //           seller_promotion: null,
    //           listing_id: '2923009179',
    //           price_reduced_amount: null,
    //           location: {
    //             county: {
    //               name: 'Wayne',
    //               state_code: 'MI',
    //               fips_code: '26163',
    //             },
    //             address: {
    //               street_post_direction: null,
    //               street_number: '633',
    //               state: 'Michigan',
    //               street_suffix: 'St',
    //               state_code: 'MI',
    //               unit: null,
    //               postal_code: '48201',
    //               street_direction: null,
    //               street_name: 'Prentis',
    //               country: 'USA',
    //               coordinate: {
    //                 lon: -83.067746,
    //                 lat: 42.351727,
    //               },
    //               line: '633 Prentis St',
    //               city: 'Detroit',
    //             },
    //             search_areas: [
    //               {
    //                 city: 'detroit',
    //                 state_code: 'mi',
    //               },
    //             ],
    //             neighborhoods: [
    //               {
    //                 city: 'Detroit',
    //                 level: 'macro_neighborhood',
    //                 name: 'Lower Woodward',
    //                 state_code: 'MI',
    //                 id: 'ee8bcec8-b34d-5e14-a8ab-6d3b1b5dfb32',
    //               },
    //               {
    //                 city: 'Detroit',
    //                 level: 'neighborhood',
    //                 name: 'Midtown',
    //                 state_code: 'MI',
    //                 id: '07ce464e-9222-5393-905a-74a7057dfab2',
    //               },
    //             ],
    //           },
    //           last_update_date: '2022-07-14T13:29:05Z',
    //           source: {
    //             agents: null,
    //             community_id: null,
    //             id: 'RXUN',
    //             listing_id: '4667578',
    //             name: 'RentlinxUnits',
    //             raw: null,
    //             type: 'unit_rental',
    //           },
    //           permalink: '633-Prentis-St_Detroit_MI_48201_M93910-50515',
    //           list_date: null,
    //           open_houses: null,
    //           last_sold_date: null,
    //           last_price_change_date: '2022-05-20T00:40:56.92Z',
    //           description: {
    //             garage_max: null,
    //             sqft_min: null,
    //             baths_partial_calc: null,
    //             baths_1qtr: null,
    //             beds_max: null,
    //             lot_sqft: null,
    //             sub_type: null,
    //             garage: null,
    //             baths_3qtr: null,
    //             garage_min: null,
    //             beds_min: null,
    //             baths_min: null,
    //             name: null,
    //             baths_half: null,
    //             sqft: null,
    //             year_built: null,
    //             baths: 1,
    //             baths_full: 1,
    //             sqft_max: null,
    //             baths_max: null,
    //             baths_full_calc: 1,
    //             beds: 0,
    //             type: 'single_family',
    //           },
    //           last_price_change_amount: 81,
    //           price_reduced_date: null,
    //           property_history: null,
    //           photo_count: null,
    //           list_price: 900,
    //           lead_attributes: {
    //             show_contact_an_agent: true,
    //           },
    //           list_price_max: null,
    //           tags: null,
    //           pet_policy: null,
    //           products: null,
    //           suppression_flags: {
    //             has_suppress_foreclosure: true,
    //             has_suppress_list_date: true,
    //           },
    //           status: 'for_rent',
    //           flags: {
    //             is_deal_available: null,
    //             is_senior_community: null,
    //             is_new_listing: null,
    //             is_for_rent: true,
    //             is_garage_present: null,
    //           },
    //           community: null,
    //           matterport: false,
    //           primary_photo: null,
    //         },
    //       ],
    //     },
    //     geo: {
    //       parents: [
    //         {
    //           name: 'Detroit',
    //           geo_type: 'city',
    //           slug_id: 'Detroit_MI',
    //         },
    //         {
    //           name: 'Wayne',
    //           geo_type: 'county',
    //           slug_id: 'Wayne-County_MI',
    //         },
    //         {
    //           name: 'Michigan',
    //           geo_type: 'state',
    //           slug_id: 'Michigan',
    //         },
    //       ],
    //       recommended_zips: {
    //         geos: [
    //           {
    //             slug_id: '48205',
    //             postal_code: '48205',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48234',
    //             postal_code: '48234',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48212',
    //             postal_code: '48212',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48238',
    //             postal_code: '48238',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48206',
    //             postal_code: '48206',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48214',
    //             postal_code: '48214',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1825,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48207',
    //             postal_code: '48207',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1850,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48204',
    //             postal_code: '48204',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48202',
    //             postal_code: '48202',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1687,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48203',
    //             postal_code: '48203',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48213',
    //             postal_code: '48213',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48215',
    //             postal_code: '48215',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48209',
    //             postal_code: '48209',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48201',
    //             postal_code: '48201',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1650,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48210',
    //             postal_code: '48210',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48208',
    //             postal_code: '48208',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48218',
    //             postal_code: '48218',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48226',
    //             postal_code: '48226',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1600,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48216',
    //             postal_code: '48216',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: '48217',
    //             postal_code: '48217',
    //             geo_type: 'postal_code',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //         ],
    //       },
    //       recommended_cities: {
    //         geos: [
    //           {
    //             slug_id: 'Detroit_MI',
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1475,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Warren_MI',
    //             city: 'Warren',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1800,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Royal-Oak_MI',
    //             city: 'Royal Oak',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2250,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Southfield_MI',
    //             city: 'Southfield',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1750,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Farmington-Hills_MI',
    //             city: 'Farmington Hills',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1880,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Livonia_MI',
    //             city: 'Livonia',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2000,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Dearborn_MI',
    //             city: 'Dearborn',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1830,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Bloomfield-Township_MI',
    //             city: 'Bloomfield Township',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2475,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'West-Bloomfield-Township_MI',
    //             city: 'West Bloomfield Township',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2800,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Rochester-Hills_MI',
    //             city: 'Rochester Hills',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2400,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Westland_MI',
    //             city: 'Westland',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Troy_MI',
    //             city: 'Troy',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1995,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Birmingham_MI',
    //             city: 'Birmingham',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2800,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Ferndale_MI',
    //             city: 'Ferndale',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1520,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Grosse-Pointe-Woods_MI',
    //             city: 'Grosse Pointe Woods',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2250,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Grosse-Pointe-Farms_MI',
    //             city: 'Grosse Pointe Farms',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Grosse-Pointe-Park_MI',
    //             city: 'Grosse Pointe Park',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1500,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Grosse-Pointe_MI',
    //             city: 'Grosse Pointe',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'Sterling-Heights_MI',
    //             city: 'Sterling Heights',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2000,
    //               },
    //             },
    //           },
    //           {
    //             slug_id: 'St.-Clair-Shores_MI',
    //             city: 'St. Clair Shores',
    //             state_code: 'MI',
    //             geo_type: 'city',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1750,
    //               },
    //             },
    //           },
    //         ],
    //       },
    //       recommended_counties: {
    //         geos: [
    //           {
    //             slug_id: 'Wayne-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1500,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Wayne',
    //           },
    //           {
    //             slug_id: 'Oakland-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2100,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Oakland',
    //           },
    //           {
    //             slug_id: 'Macomb-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1700,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Macomb',
    //           },
    //           {
    //             slug_id: 'Washtenaw-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 2475,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Washtenaw',
    //           },
    //           {
    //             slug_id: 'Monroe-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1000,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Monroe',
    //           },
    //           {
    //             slug_id: 'Lucas-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 925,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Lucas',
    //           },
    //           {
    //             slug_id: 'Livingston-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1400,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Livingston',
    //           },
    //           {
    //             slug_id: 'Genesee-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1000,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Genesee',
    //           },
    //           {
    //             slug_id: 'Lorain-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 850,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Lorain',
    //           },
    //           {
    //             slug_id: 'Ingham-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1200,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Ingham',
    //           },
    //           {
    //             slug_id: 'Wood-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 995,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Wood',
    //           },
    //           {
    //             slug_id: 'Jackson-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Jackson',
    //           },
    //           {
    //             slug_id: 'Lenawee-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 900,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Lenawee',
    //           },
    //           {
    //             slug_id: 'Lapeer-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Lapeer',
    //           },
    //           {
    //             slug_id: 'Ottawa-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Ottawa',
    //           },
    //           {
    //             slug_id: 'Erie-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Erie',
    //           },
    //           {
    //             slug_id: 'Clinton-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Clinton',
    //           },
    //           {
    //             slug_id: 'Shiawassee-County_MI',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'MI',
    //             geo_type: 'county',
    //             county: 'Shiawassee',
    //           },
    //           {
    //             slug_id: 'Fulton-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Fulton',
    //           },
    //           {
    //             slug_id: 'Huron-County_OH',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //             state_code: 'OH',
    //             geo_type: 'county',
    //             county: 'Huron',
    //           },
    //         ],
    //       },
    //       geo_statistics: {
    //         market_trends: null,
    //       },
    //       recommended_neighborhoods: {
    //         geos: [
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Brush-Park_Detroit_MI',
    //             neighborhood: 'Brush Park',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Lafayette-Park_Detroit_MI',
    //             neighborhood: 'Lafayette Park',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Midtown_Detroit_MI',
    //             neighborhood: 'Midtown',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1350,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Downtown-Detroit_Detroit_MI',
    //             neighborhood: 'Downtown Detroit',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Elmwood-Park_Detroit_MI',
    //             neighborhood: 'Elmwood Park',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Art-Center_Detroit_MI',
    //             neighborhood: 'Art Center',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1750,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Woodbridge_Detroit_MI',
    //             neighborhood: 'Woodbridge',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Core-City_Detroit_MI',
    //             neighborhood: 'Core City',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Jeffries_Detroit_MI',
    //             neighborhood: 'Jeffries',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Wayne-State_Detroit_MI',
    //             neighborhood: 'Wayne State',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Islandview_Detroit_MI',
    //             neighborhood: 'Islandview',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1950,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Southwest-Detroit_Detroit_MI',
    //             neighborhood: 'Southwest Detroit',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Rivertown-Warehouse-District_Detroit_MI',
    //             neighborhood: 'Rivertown - Warehouse District',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: 1950,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'North-End_Detroit_MI',
    //             neighborhood: 'North End',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Gold-Coast_Detroit_MI',
    //             neighborhood: 'Gold Coast',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'New-Center-Commons_Detroit_MI',
    //             neighborhood: 'New Center Commons',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Gratiot-Grand_Detroit_MI',
    //             neighborhood: 'Gratiot-Grand',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'West-Side-Industrial_Detroit_MI',
    //             neighborhood: 'West Side Industrial',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Pingree-Park_Detroit_MI',
    //             neighborhood: 'Pingree Park',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //           {
    //             city: 'Detroit',
    //             state_code: 'MI',
    //             slug_id: 'Poletown-East_Detroit_MI',
    //             neighborhood: 'Poletown East',
    //             geo_type: 'neighborhood',
    //             geo_statistics: {
    //               housing_market: {
    //                 median_rent_price: null,
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   },
    // });
  }

  // Favorite Methods

  getFavorites(): Observable<Favorite[]> {
    const url = `${this.url}Favorite`;
    return this.http.get<Favorite[]>(url);
  }

  getFavorite(id: number): Observable<Favorite> {
    const url = `${this.url}Favorite${id}`;
    return this.http.get<Favorite>(url);
  }

  createFavorite(favorite: Favorite): Observable<Favorite> {
    const url = `${this.url}Favorite`;
    return this.http.post<Favorite>(url, favorite);
  }

  updateFavorite(id: number, favorite: Favorite): Observable<any> {
    const url = `${this.url}Favorite${id}`;
    return this.http.put(url, favorite);
  }

  deleteFavorite(CompleteAddress: string): Observable<any> {
    const url = `${this.url}Favorite/${CompleteAddress}`;
    return this.http.delete(url);
  }
  // User Methods

  getUsers(): Observable<User[]> {
    const url = `${this.url}User`;
    return this.http.get<User[]>(url);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.url}User/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: User): Observable<User> {
    const url = `${this.url}User`;
    return this.http.post<User>(url, user);
  }

  loginUser(user: User): Observable<AuthUser> {
    const url = `${this.url}User/login`;
    return this.http.post<AuthUser>(url, user);
  }

  updateUser(id: number, user: User): Observable<any> {
    const url = `${this.url}/User/${id}`;
    return this.http.put(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.url}/User/${id}`;
    return this.http.delete(url);
  }

  // Review Methods

  getReviews(): Observable<Review[]> {
    const url = `${this.url}Review`;
    return this.http.get<Review[]>(url);
  }

  getReview(id: number): Observable<Review> {
    const url = `${this.url}/Review/${id}`;
    return this.http.get<Review>(url);
  }

  createReview(review: Review): Observable<Review> {
    const url = `${this.url}Review`;
    return this.http.post<Review>(url, review);
  }

  updateReview(id: number, review: Review): Observable<any> {
    const url = `${this.url}/Review/${id}`;
    return this.http.put(url, review);
  }

  deleteReview(id: number): Observable<any> {
    const url = `${this.url}/Review/${id}`;
    return this.http.delete(url);
  }
  // //Our API
  // GetFavorites(): Observable<Favorite[]>{
  //   return this.http.get<Favorite[]>(this.url + 'Favorite');
  // }

  // AddFavorite(favoriteToAdd: Favorite): Observable<Favorite[]>{
  //   return this.http.post<Favorite[]>(this.url + 'Favorite', favoriteToAdd);
  // }

  // GetReviews(): Observable<Review[]>{
  //   return this.http.get<Review[]>(this.url + 'Review');
  // }

  // AddReview(reviewToAdd: Review): Observable<Review[]>{
  //   return this.http.post<Review[]>(this.url + 'Review', reviewToAdd);
  // }

  // GetUsers(): Observable<User[]>{
  //   return this.http.get<User[]>(this.url + 'User');
  // }
}
