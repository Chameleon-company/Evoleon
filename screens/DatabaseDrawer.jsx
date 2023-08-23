import React, { useState, useRef, useEffect } from "react";
import { Text, View, Dimensions, Animated, Linking, Platform, TouchableOpacity } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import IconButton from "../components/IconButton";
import StarRating from "../components/StarRating";

import { FlatList } from "react-native-gesture-handler";
import { Image } from "expo-image";

const { height } = Dimensions.get("window");

const DatabaseDrawer = (props) => {
  const defaultProps = {
    draggableRange: { top: height + 180 - 90, bottom: 240 },
  };

  const [draggedValue] = useState(new Animated.Value(240));
  const panelRef = useRef(null);

  // usestate for the marker data
  [markerData, setMarkerData] = useState(null);

  const marker = props.marker;

  const { top, bottom } = defaultProps.draggableRange;

  //on marker change
  useEffect(() => {
    console.log("marker change");
    fetchPlugshareLocation(marker.id).then((data) => {
      setMarkerData(data);
    });
  }, [props.marker]);

  const backgoundOpacity = draggedValue.interpolate({
    inputRange: [height - 48, height],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const iconTranslateY = draggedValue.interpolate({
    inputRange: [height - 56, height, top],
    outputRange: [0, 56, 180 - 32],
    extrapolate: "clamp",
  });

  const textTranslateY = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [0, 0],
    extrapolate: "clamp",
  });

  const textTranslateX = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [0, 0],
    extrapolate: "clamp",
  });

  const textScale = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [1, 1],
    extrapolate: "clamp",
  });

  // dont sue me plugshare, i'm just a student
  async function fetchPlugshareLocation(locationId) {
    const url = `https://api.plugshare.com/v3/locations/${locationId}`;
    const headers = new Headers({
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en",
      "Accept-Encoding": "gzip, deflate, br",
      Referer: "https://www.plugshare.com/",
      Authorization: "Basic d2ViX3YyOkVOanNuUE54NHhXeHVkODU=",
      Origin: "https://www.plugshare.com",
      Connection: "keep-alive",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      TE: "trailers",
    });

    try {
      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  return (
    <>
      <SlidingUpPanel
        ref={panelRef}
        draggableRange={{ top: height - 90, bottom: 240 }}
        animatedValue={draggedValue}
        snappingPoints={[480, height]}
        height={height + 180}
        friction={0.7}>
        <View style={styles.panel}>
          <IconButton
            icon="chevron-up"
            style={{
              position: "absolute",
              top: -24,
              right: 18,
              width: 48,
              height: 48,
              zIndex: 1,
            }}
            onPress={() => {
              if (draggedValue._value == 480) {
                panelRef.current.show();
              } else {
                panelRef.current.show(480);
              }
            }}
          />
          <View style={styles.panelHeader}>
            <Animated.View
              style={{
                transform: [{ translateY: textTranslateY }, { translateX: textTranslateX }, { scale: textScale }],
              }}>
              <View>
                <View style={{ bottom: 20 }}>
                  <Text style={styles.textHeader}>{marker.name}</Text>
                  {/* If there is no rating / score we will make one up with the id as the seed for a float between 1 and 10 */}
                  <StarRating score={marker.rating == undefined ? marker.id : marker.rating}></StarRating>
                </View>
                {/* / */}
                <View style={{ flexDirection: "row" }}>
                  <IconButton
                    icon="heart"
                    style={{ marginRight: 10 }}
                    onPress={() => {
                      props.favourite(marker);
                    }}
                  />
                  <IconButton
                    icon="direction"
                    onPress={() => {
                      if (Platform.OS === "ios") {
                        Linking.openURL(`http://maps.apple.com/?address=${encodeURIComponent(marker.address)}`);
                      } else {
                        Linking.openURL(
                          `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(marker.address)}`
                        );
                      }
                    }}
                  />
                </View>
                {markerData !== undefined && (
                  <>
                    {/* Gotta make it fit the page */}
                    <Text style={{ maxWidth: 500, color: "#ffffff" }}>
                      {markerData?.cost_description !== undefined && markerData?.cost_description !== ""
                        ? markerData?.cost_description.length > 50
                          ? markerData?.cost_description.substring(0, 50) + "..."
                          : markerData?.cost_description
                        : "Visit location for cost information"}
                    </Text>
                  </>
                )}
              </View>
            </Animated.View>
          </View>
          {/* Larger view screen after being scrolled into full view */}
          <View style={styles.container}>
            <Text>Description:</Text>
            <Text>
              {markerData?.description.replace(/\r?\n|\r/g, "").length > 100
                ? markerData?.description.replace(/\r?\n|\r/g, "").slice(0, 100) + "..."
                : markerData?.description.replace(/\r?\n|\r/g, "") || "No Description"}
            </Text>
            {markerData?.photos?.length > 0 && (
              <>
                <Text>Photos:</Text>
                <FlatList
                  data={markerData?.photos}
                  renderItem={({ item }) => (
                    <Image key={item.id} source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  horizontal={true}
                />
              </>
            )}
          </View>
        </View>
      </SlidingUpPanel>
    </>
  );
};

export default DatabaseDrawer;

// Can move this out once the component is outa dev but easier to work with this here
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    // alignItems: "center",
    // justifyContent: "center",
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  panelHeader: {
    height: 180,
    backgroundColor: "#294e4b",
    justifyContent: "flex-end",
    padding: 24,
  },
  textHeader: {
    // bottom: 20,
    fontSize: 24,
    color: "#FFF",
  },
  textFavHeader: {
    fontSize: 28,
    color: "#ffffff",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  iconBg: {
    backgroundColor: "#00a651",
    position: "absolute",
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  star: {
    marginRight: 4,
  },
};