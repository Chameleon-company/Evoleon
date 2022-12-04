export const getChargerLocationAmenityAvailable = (evChargerLocationVal) => {
    
    var amenityListString = "Available: "
    var count = 0;

    if(evChargerLocationVal.Restroom == true){
      amenityListString += "restroom, ";
      count++;
    }
    if(evChargerLocationVal.Park == true){
      amenityListString += "park, ";
      count++;
    }
    if(evChargerLocationVal.Dining == true){
      amenityListString += "dining, ";
      count++;
    }
    if (count == 0){
      amenityListString = "";
    }
    return amenityListString;
  }