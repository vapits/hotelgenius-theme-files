/*******    
* You can't use this file for production,
* server will ignore it.
*/
{  
   "name": "Rallegra", // Add your theme name
   "id": "", // Set an ID for your
   "version": "1.0", // Set your version
   "themeFile": "http://yourdomain.com/theme_name.zip", // The url that the theme zip file is uploaded (zip file should contain the themes root contents and folders)
   "description": "", // Set a desciption for your theme
   "category" : "Boutique", // Set the category of your theme
   "style" : "Luxury, Historic, Design, Holiday, Business, Romantic", // Set styles of your theme seperated by comma
   "type" : "premium", // Set the type of your theme (premium or standard)
   "demoUrl" : "", // Is a static version of the me availble online? Set it here
   "demoData" : "http://rallegra.hotelgenius.co", // From which demo theme you will take the data? (no need to change)
   "demoPropertyID" : "54881658cca2fd9d341d74de", // Demo themes property ID (no need to change)
   "previewImgDesktop": "imgs/screenshots/desktop.jpg", // Desktop preview screenshot (path starts from your themes root)
   "previewImgMobile": "imgs/screenshots/mobile.jpg", // Responsive preview screenshot (path starts from your themes root)
   "standardPreview": "http://rallegra-st.hotelgenius.co", // Standard version demo (no need to change)
   "menus": [
      {
         "id": "default" // Leave it as it is
      },
      {
         "id": "alternative" // Leave it as it is
      }
   ],
   "pages" : [
      {
         "name": "Home Page", // Set the name of template (this example contains all available templates)
         "templateSlug": "home", // set the templateSlug for the template (this example contains all available templates)
         "content": "page", // Set type
         "description": "This is the Home Page",
         "styles": [
            {
               "name": "Default", // Default view for this page type (*required)
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/homepage_1.jpg" // path starts from your themes root
            }
         ]
      },
      {
         "name": "Rooms Page",
         "templateSlug": "accommodation",
         "content": "page",
         "description": "This is the Rooms Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/rooms_1.jpg"
            },
            {
               "name": "Alternative",  // Alternative view for this page type (*optional)
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/rooms_2.jpg"
            }
         ]
      },
      {
         "name": "Room Single Page",
         "content": "room_type",
         "description": "This is the Room Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/rooms_single_1.jpg"
            }
         ]
      },
      {
         "name": "Facilities Page",
         "templateSlug": "facilities",
         "content": "page",
         "description": "This is the Facilities Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/facilities_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/facilities_2.jpg"
            }
         ]
      },
      {
         "name": "Facility Single Page",
         "content": "facility",
         "description": "This is the Facility Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/facility_single_1.jpg"
            }
         ]
      },
      {
         "name": "Location Page",
         "templateSlug": "location",
         "content": "page",
         "description": "This is the Location Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/location_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/location_2.jpg"
            }
         ]
      },
      {
         "name": "Location Single Page",
         "content": "location",
         "description": "This is the Location Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/location_single_1.jpg"
            }
         ]
      },
      {
         "name": "Galleries Page",
         "templateSlug": "galleries",
         "content": "page",
         "description": "This is the Galleries list Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/gallery_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/gallery_2.jpg"
            }
         ]
      },
      {
         "name": "Gallery Single Page",
         "content": "gallery",
         "description": "This is the Gallery Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/gallery_single_1.jpg"
            }
         ]
      },
      {
         "name": "Contact Page",
         "templateSlug": "contact",
         "content": "page",
         "description": "This is the Contact Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/contact_1.jpg"
            }
         ]
      },
      {
         "name": "Offers Page",
         "templateSlug": "offers",
         "content": "page",
         "description": "This is the Offers Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/offers_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/offers_2.jpg"
            },
            {
               "name": "Group template",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/offers_3.jpg"
            }
         ]
      },
      {
         "name": "Offer Page",
         "content": "offer",
         "description": "This is the Offer Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/offers_single_1.jpg"
            }
         ]
      },
      {
         "name": "Blog Page",
         "templateSlug": "blog",
         "content": "page",
         "description": "This is the Blog Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/blog_1.jpg"
            }
         ]
      },
      {
         "name": "Blog Single Page",
         "content": "blog",
         "description": "This is the Blog Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/blog_single_1.jpg"
            }
         ]
      },
      {
         "name": "Single Page",
         "templateSlug": "item",
         "content": "page",
         "description": "This is a Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/single_page_1.jpg"
            },
            {
               "name": "Group template",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/single_page_2.jpg"
            }
         ]
      },
      {
         "name": "Events Page",
         "templateSlug": "events",
         "content": "page",
         "description": "This is the Events Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/events_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/events_2.jpg"
            }
         ]
      },
      {
         "name": "Single Event Page",
         "content": "event",
         "description": "This is a Single Event Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/event_single_1.jpg"
            }
         ]
      },
      {
         "name": "Reviews Page",
         "templateSlug": "reviews",
         "content": "page",
         "description": "This is the Reviews Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/reviews_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/reviews_2.jpg"
            }
         ]
      },
      {
         "name": "Review Page",
         "content": "review",
         "description": "This is the Review Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/reviews_single_1.jpg"
            }
         ]
      },
      {
         "name": "Awards Page",
         "templateSlug": "awards",
         "content": "page",
         "description": "This is the Awards Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/awards_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/awards_2.jpg"
            }
         ]
      },
      {
         "name": "Award Page",
         "content": "award",
         "description": "This is the Award Single Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/awards_single_1.jpg"
            }
         ]
      },
      {
         "name": "Press Page",
         "content": "page",
         "templateSlug": "press",
         "description": "This is the Press Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/press_1.jpg"
            },
            {
               "name": "Alternative",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/press_2.jpg"
            }
         ]
      },
      {
         "name": "Single Press Page",
         "content": "press",
         "description": "This is a Single Press Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/press_single_1.jpg"
            }
         ]
      },
      {
         "name": "Landing Page",
         "content": "landing_page",
         "description": "This is the Landing Page",
         "styles": [
            {
               "name": "Default",
               "demoUrl": "", // depricated
               "screenshot": "imgs/screenshots/landing_page__1.jpg"
            }
         ]
      }

   ],
   "fontCustom": [
      {
         "name": "Oranienbaum", // The name of the font
         "description": "This font supports latin & Cyrillic languages. Well-combined with Times as body text font.", // Inform user what is the use and the languages support for this font
         "styleName": "'Oranienbaum', Times, serif" // The CSS name (important to spell it correctly)
      },
      {
         "name": "Abel",
         "description": "This font supports latin languages. Well-combined with Arial as body text font.",
         "styleName": "'Abel', sans-serif"
      },
      {
         "name": "Slabo 27px",
         "description": "This font supports latin languages. Well-combined with Arial as body text font.",
         "styleName": "'Slabo 27px', serif"
      },
      {
         "name": "Roboto Condensed",
         "description": "This font supports latin, Greek & Cyrillic languages.",
         "styleName": "'Roboto Condensed', sans-serif"
      },
      {
         "name": "Roboto",
         "description": "This font supports latin & Greek languages. Well-combined with Arial as body text font.",
         "styleName": "'Advent Pro', sans-serif"
      }
   ],
   "fontSystem": [
      {
         "name": "Times New Roman - serif", // Leave all fonts in this array untouched or ad web safe fonts.
         "styleName": "\"Times New Roman\", Times, serif" // The CSS name
      },
      {
         "name": "Georgia - serif",
         "styleName": "Georgia, serif"
      },
      {
         "name": "Palatino Linotype, Book Antiqua - serif",
         "styleName": "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif"
      },
      {
         "name": "Arial , Helvetica, sans-serif",
         "styleName": "Arial, Helvetica, sans-serif"
      },
      {
         "name": "Arial Black, Gadget - sans-serif",
         "styleName": "\"Arial Black\", Gadget, sans-serif"
      }
   ],
   "palletes": [
      {
         "name": "Light cherry Palette (default)", // Set the pallete name
         "description": "", // Give a description for the user (ex. nice for summer)
         "color1": "rgba(255,255,255,1)", // You can use any kind of color type but we strongly recommend RGBA
         "color2": "rgba(250,245,242,1)",
         "color3": "rgba(235,81,101,1)",
         "color4": "rgba(235,81,101,1)",
         "color5": "rgba(40,40,40,1)"
      },
      {
         "name": "Dark cherry Palette",
         "description": "",
         "color1": "rgba(231,231,231,1)",
         "color2": "rgba(61,60,60,1)",
         "color3": "rgba(196,71,87,1)",
         "color4": "rgba(196,71,87,1)",
         "color5": "rgba(138,123,123,1)"
      },
      {
         "name": "Gold Palette",
         "description": "",
         "color1": "rgba(255,255,255,1)",
         "color2": "rgba(250,245,242,1)",
         "color3": "rgba(192,124,25,1)",
         "color4": "rgba(192,124,25,1)",
         "color5": "rgba(0,0,0,1)"
      },
      {
         "name": "Yellow Palette",
         "description": "",
         "color1": "rgba(255,255,255,1)",
         "color2": "rgba(243,242,241,1)",
         "color3": "rgba(36,100,148,1)",
         "color4": "rgba(255,255,255,1)",
         "color5": "rgba(253,153,29,1)"
      }
   ],
   "effects": {}, // Leave it empty but keep it in file.
   "strings": [
      {
         "id": "string_1", // Id must NOT contain spaces and must be unique
         "default": "BOOK NOW", // Set the default text (prefer english)
         "translations": {
            "en": "BOOK NOW" // Set text for each supported language (including the default)
         }
      },
      {
         "id": "book_now_2",
         "default": "BOOK NOW 2",
         "translations": {
            "en": "BOOK NOW"
         }
      },
      {
         "id": "string_2",
         "default": "Explore the Hotel",
         "translations": {
            "en": "Explore the Hotel"
         }
      },
      {
         "id": "string_3",
         "default": "MENU",
         "translations": {
            "en": "MENU"
         }
      },
      {
         "id": "string_4",
         "default": "Please call us at",
         "translations": {
            "en": "Please call us at"
         }
      }
   ]
}