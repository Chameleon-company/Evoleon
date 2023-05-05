//This is no longer needed and will be deletead in the future

// import {getuserIsAuthenticated, addOrRemoveChargerFromUserFavouriteListInFirestore, evChargerLocationIsInFavourites} from '../web/firebase' 

// export const getChargerLocationAmenityAvailable = (evChargerLocationVal) => {
    
//     var amenityListString = "Available: "
//     var count = 0;

//     if(evChargerLocationVal.Restroom == true){
//       amenityListString += "restroom, ";
//       count++;
//     }
//     if(evChargerLocationVal.Park == true){
//       amenityListString += "park, ";
//       count++;
//     }
//     if(evChargerLocationVal.Dining == true){
//       amenityListString += "dining, ";
//       count++;
//     }
//     if (count == 0){
//       amenityListString = "";
//     }
//     return amenityListString;
//   }


//   export const addorRemoveEvChargerLocationToUserFavouritesInDatabase = (evChargerLocationVal) => {
//     if(getuserIsAuthenticated()){
//       addOrRemoveChargerFromUserFavouriteListInFirestore(evChargerLocationVal);
//     } else {
//       console.log("User needs to sign in to add charger to favourites");
//     }
//   }


//     //Find the correct images for the map markers and the favourite icon in the popup
//     const locationInFavourites = require('../assets/Favourited.png');
//     const locationNotInFavourites = require('../assets/Favourite.png');
//     const mapMarkers = require('../assets/EvoleonFinal.png');
//     export let currentFavouriteIconInPopup = locationNotInFavourites;
  
//     export let getCorrectIconIfLocationInFavourites= (val) => {
//       if(evChargerLocationIsInFavourites(val) == true){
//         currentFavouriteIconInPopup = locationInFavourites;
//         return locationInFavourites;
//       } else {
//         currentFavouriteIconInPopup = locationNotInFavourites;
//         return mapMarkers;
//       }
//     }
  