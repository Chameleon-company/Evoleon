import { Text, View, Dimensions, Animated } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { TouchableOpacity } from "react-native";
const { height } = Dimensions.get("window");
import React, { useRef } from "react";
import IconButton from "../components/IconButton";
import { Entypo } from "@expo/vector-icons";
import StarRating from "../components/StarRating";
export default class DatabaseDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    draggableRange: { top: height + 180 - 64, bottom: 180 },
  };

  _draggedValue = new Animated.Value(180);

  render() {
    const marker = this.props.marker;

    const { top, bottom } = this.props.draggableRange;

    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height - 48, height],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const iconTranslateY = this._draggedValue.interpolate({
      inputRange: [height - 56, height, top],
      outputRange: [0, 56, 180 - 32],
      extrapolate: "clamp",
    });

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: "clamp",
    });

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -112],
      extrapolate: "clamp",
    });

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.7],
      extrapolate: "clamp",
    });

    // dont sue me plugshare, i'm just a student
    async function fetchPlugshareLocation(locationId) {
      const url = `https://api.plugshare.com/v3/locations/${locationId}`;
      const headers = new Headers({
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0",
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
    // on database drawer open, fetch the data from plugshare
    fetchPlugshareLocation(185320).then((data) => {
      marker.data = data;
    });

    return (
      <>
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[480, height]} //this defines the snapping points of the view.
          height={height + 180}
          friction={0.7}
        >
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
                if (this._draggedValue._value == 480) {
                  this._panel.show();
                } else {
                  this._panel.show(480);
                }
              }}
            />
            <View style={styles.panelHeader}>
              <Animated.View
                style={{
                  transform: [
                    { translateY: textTranslateY },
                    { translateX: textTranslateX },
                    { scale: textScale },
                  ],
                }}
              >
                <View>
                  <Text style={styles.textHeader}>{marker.name}</Text>
                  <IconButton
                    icon="heart"
                    onPress={() => {
                      this.props.favourite(marker);
                    }}
                  />
                  {marker.data !== undefined && (
                    <Text>{marker.data.cost_description}</Text>
                  )}
                  {/* Since they don't have rankings we are just randomly picking a value */}
                  <StarRating
                    score={
                      marker.rating == undefined ? marker.id : marker.rating
                    }
                  ></StarRating>
                </View>
              </Animated.View>
            </View>
            <View style={styles.container}>
              <Text>Bottom sheet content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </>
    );
  }
}

// Can move this out once the component is outa dev but easier to work with this here

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
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
    paddingBottom: 70, //this takes the text to the top of the panel
    fontSize: 28,
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
