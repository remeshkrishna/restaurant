/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search bar
 *  - RestaurantCardContainer
 *      - RestaurantCard
 *          - image
 *          - name of restaurant
 *          - Rating, time to deliver, price
 *          - place
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

let restaurants = [
    {
      "info": {
        "id": "604273",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Gowtham Complex",
        "areaName": "Sivanadha Colony",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "61955",
        "avgRatingString": "4.4",
        "totalRatingsString": "3.1K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/chinese-wok-gowtham-complex-sivanadha-colony-rest604273",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "50314",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "DB Road",
        "areaName": "RS Puram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/pizza-hut-db-road-rs-puram-rest50314",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "67645",
        "name": "Night Lion by Madhampatty Pakashala",
        "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
        "locality": "Peelamedu",
        "areaName": "Peelamedu",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Haleem"
        ],
        "avgRating": 4.3,
        "parentId": "377170",
        "avgRatingString": "4.3",
        "totalRatingsString": "70K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 6.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹449",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "259"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/night-lion-by-madhampatty-pakashala-peelamedu-rest67645",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "604228",
        "name": "Big Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_604228.JPG",
        "locality": "P&T Colony Road",
        "areaName": "Sivanadha Colony",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "434792",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/big-bowl-p-and-t-colony-road-sivanadha-colony-rest604228",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "737927",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/41c8f4e8-8579-4742-a5dd-37a224347a7c_737927.JPG",
        "locality": "Cross cut Road",
        "areaName": "Gandhipuram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.8K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/kfc-cross-cut-road-gandhipuram-rest737927",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "50456",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/7c43eb27-ee49-4dc4-b13d-5ba08f6f6058_50456.jpg",
        "locality": "RS Puram",
        "areaName": "Ram Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "31K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "1.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/burger-king-rs-puram-ram-nagar-rest50456",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "50956",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/324630d1-d1ba-4697-a685-77f7e47b5999_50956.JPG",
        "locality": "SaiBaba Colony",
        "areaName": "Saibaba Colony",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "2456",
        "avgRatingString": "4.2",
        "totalRatingsString": "13K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/dominos-pizza-saibaba-colony-rest50956",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "614321",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/03244992-4b76-4cfe-b1b5-137573e16c13_614321.JPG",
        "locality": "Bharathi Park Road",
        "areaName": "Saibaba Colony",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.4,
        "parentId": "2",
        "avgRatingString": "4.4",
        "totalRatingsString": "4.0K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹200 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/subway-bharathi-park-road-saibaba-colony-rest614321",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "56506",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/116099fe-08c2-42c6-99a6-b0ff9afa7bb8_56506.jpg",
        "locality": "Fun Republic Mall",
        "areaName": "Avinashi Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "29K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/mcdonalds-fun-republic-mall-avinashi-road-rest56506",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "90253",
        "name": "HMR - Hotel Muthu Rowther",
        "cloudinaryImageId": "cddf4b783435fedc281d1262ae9b92c3",
        "locality": "Kuniamuthur",
        "areaName": "Kuniyamuthur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "South Indian",
          "Arabian",
          "Seafood",
          "Juices"
        ],
        "avgRating": 4.4,
        "parentId": "18000",
        "avgRatingString": "4.4",
        "totalRatingsString": "34K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 7.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "7.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/hmr-hotel-muthu-rowther-kuniamuthur-kuniyamuthur-rest90253",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "799922",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/130105e4-3e07-44d8-a781-aaba30619dbf_799922.JPG",
        "locality": "Sai Baba Colony",
        "areaName": "Sai Baba Colony",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.7,
        "parentId": "573509",
        "avgRatingString": "4.7",
        "totalRatingsString": "654",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "586"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/the-belgian-waffle-co-sai-baba-colony-rest799922",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "61502",
        "name": "Hyderabad Biriyani Hotel",
        "cloudinaryImageId": "j5ppnjc32bvsal2biicg",
        "locality": "Gandhipuram",
        "areaName": "Gandhipuram",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Hyderabadi",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.4,
        "parentId": "4969",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 11,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "2.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/hyderabad-biriyani-hotel-gandhipuram-rest61502",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "379905",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/935f8d3e-e685-48bc-9b36-21efa0f472c4_379905.jpg",
        "locality": "Sir Shanmugam Road",
        "areaName": "RS Puram",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "739",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/baskin-robbins-ice-cream-desserts-sir-shanmugam-road-rs-puram-rest379905",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "826487",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/d5480383-5a6c-4324-8abe-926f4d4c5d3c_826487.JPG",
        "locality": "DB Road",
        "areaName": "RS Puram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 3.6,
        "parentId": "306806",
        "avgRatingString": "3.6",
        "totalRatingsString": "46",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/pastas-by-pizza-hut-db-road-rs-puram-rest826487",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "420287",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "u3y59a581efrways5tqq",
        "locality": "RS Puram",
        "areaName": "Ram Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "10761",
        "avgRatingString": "4.4",
        "totalRatingsString": "135",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:45:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "2.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/mcdonalds-gourmet-burger-collection-rs-puram-ram-nagar-rest420287",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "125768",
        "name": "Night Out",
        "cloudinaryImageId": "x9sormed4oudyhf0boiu",
        "locality": "Puliakulam",
        "areaName": "Peelamedu",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Tandoor",
          "Biryani",
          "Kebabs",
          "South Indian",
          "Barbecue",
          "Italian",
          "Beverages"
        ],
        "avgRating": 3.8,
        "parentId": "6995",
        "avgRatingString": "3.8",
        "totalRatingsString": "23K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 02:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "2.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/night-out-puliakulam-peelamedu-rest125768",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "487136",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/349cad04-7959-4369-87a0-d80b02200a29_487136.JPG",
        "locality": "Vilankurchi Village",
        "areaName": "Thanner Pandal Rd",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "21809",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.4K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 7.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/faasos-wraps-rolls-and-shawarma-vilankurchi-village-thanner-pandal-rd-rest487136",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "487140",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/71f19615-7ee7-46c1-9c9d-ec9c7dbe1704_487140.jpg",
        "locality": "Vilankurchi Village",
        "areaName": "Thanner Pandal Rd",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Thalis",
          "North Indian",
          "Biryani"
        ],
        "avgRating": 4.5,
        "parentId": "4925",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.3K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 7.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/lunchbox-meals-and-thalis-vilankurchi-village-thanner-pandal-rd-rest487140",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "189293",
        "name": "The Red Box",
        "cloudinaryImageId": "iiv2onnzp4ffsrwjmj7i",
        "locality": "Peelamedu",
        "areaName": "Peelamedu",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Chinese"
        ],
        "avgRating": 4.3,
        "parentId": "1636",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.7K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chinese.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.6",
            "ratingCount": "1.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/the-red-box-peelamedu-rest189293",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "459711",
        "name": "CakeZone Patisserie",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/18/f8120e9f-9352-4b79-9e25-ef07a50ed260_459711.jpg",
        "locality": "SAIBABA COLONY",
        "areaName": "NSR Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Sweets",
          "Ice Cream"
        ],
        "avgRating": 4.4,
        "parentId": "7003",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.9K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-05 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-faf347b3-d113-48b0-8bc8-d2301b30ed5b"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/coimbatore/cakezone-patisserie-saibaba-colony-nsr-road-rest459711",
        "type": "WEBLINK"
      }
    }
  ];
// fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data)
//     restaurants = data.data.cards.filter((item)=>item.card.card.id=="top_brands_for_you")[0].card.card.gridElements.infoWithStyle.restaurants
//     console.log(restaurants);
// })

const HeaderComponent = ()=>{
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

const RestaurantCard = (obj)=>{
    props=obj.props
    return (
        <div className="restaurant-card">
            <div className="hotel-image">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.cloudinaryImageId} />
            </div>
            <h3>{props.name}</h3>
            <div className="rating-container">
                <img src="https://w7.pngwing.com/pngs/689/388/png-transparent-star-favorite-rating-award-like-feedback-3d-icon.png"/>
                <span>{props.avgRating}</span>
                <span>{props.sla?props.sla.slaString:""}</span>
            </div>
            <div className="cuisine">{props.cuisines?props.cuisines.join(','):""}</div>
            <div className="place">{props.areaName}</div>
        </div>
    )
}
const BodyComponent = ()=>{
    return (
    <div className="body">
        <div className="searchbar-container">I am searchbar</div>
        <div className="restaurant-card-container">
            {restaurants.map((rest)=> <RestaurantCard key={rest.info.id} props={rest.info}/> )}
        </div>
    </div>
);}

const AppLayout = ()=>{
    return (
    <div className="applayout">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );}
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<AppLayout/>)
