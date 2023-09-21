import React, { useState, useRef, useEffect } from "react";
import { Dimensions, Animated, Linking, Platform, TouchableOpacity, ScrollView } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import IconButton from '../components/IconButton';
import StarRating from '../components/StarRating';
import { Image } from 'expo-image';
const { height, width } = Dimensions.get('window');

import { Text, View, useTheme } from '../components/Themed';
import { createMapStyle } from '../styles/mapStyle';

const DatabaseDrawer = (props) => {
  // This is the map style
  const colorScheme = useTheme();
  const MapStyle = createMapStyle(colorScheme);
  const dragRanges = {
    top: height - 260,
    middle: height + 180 - 180,
    bottom: 240,
  };

  const [draggedValue] = useState(new Animated.Value(dragRanges.bottom));
  const panelRef = useRef(null);
  const marker = props.marker;
  const [chevronType, setChevronType] = useState('chevron-up');
  // usestate for the marker data
  [markerData, setMarkerData] = useState(null);
  const [allowDragging, setAllowDragging] = useState(true);

  useEffect(() => {
    const listenerId = draggedValue.addListener(({ value }) => {
      console.log('Panel Position:', value); // for debugging
      if (value == dragRanges.top) {
        setChevronType('chevron-down');
        // console.log(backgroundColor);
      } else {
        setChevronType('chevron-up');
      }
    });

    return () => {
      draggedValue.removeListener(listenerId);
    };
  }, []);
  //on marker change
  useEffect(() => {
    console.log('marker change');
    fetchPlugshareLocation(marker.id).then((data) => {
      setMarkerData(data);
    });
  }, [props.marker]);

  const textTranslateY = draggedValue.interpolate({
    inputRange: [dragRanges.bottom, dragRanges.top],
    outputRange: [0, 0],
    extrapolate: 'clamp',
  });

  const textTranslateX = draggedValue.interpolate({
    inputRange: [dragRanges.bottom, dragRanges.top],
    outputRange: [0, 0],
    extrapolate: 'clamp',
  });

  const textScale = draggedValue.interpolate({
    inputRange: [dragRanges.bottom, dragRanges.top],
    outputRange: [1, 1],
    extrapolate: 'clamp',
  });

  // dont sue me plugshare, i'm just a student
  async function fetchPlugshareLocation(locationId) {
    const url = `https://api.plugshare.com/v3/locations/${locationId}`;
    const headers = new Headers({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en',
      'Accept-Encoding': 'gzip, deflate, br',
      Referer: 'https://www.plugshare.com/',
      Authorization: 'Basic d2ViX3YyOkVOanNuUE54NHhXeHVkODU=',
      Origin: 'https://www.plugshare.com',
      Connection: 'keep-alive',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      TE: 'trailers',
    });

    try {
      const response = await fetch(url, { method: 'GET', headers });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  return (
    <>
      <SlidingUpPanel
        ref={panelRef}
        allowDragging={allowDragging}
        draggableRange={{ top: dragRanges.top, bottom: dragRanges.bottom }}
        animatedValue={draggedValue}
        snappingPoints={[dragRanges.top, dragRanges.middle]}
        height={height + 180}
        friction={0.7}
      >
        {/* view for entire panel */}
        <View style={MapStyle.panel}>
          {/* right buttons on header */}
          <IconButton
            icon={chevronType}
            style={MapStyle.chevronButton}
            onPress={() => {
              if (draggedValue._value == 480) {
                panelRef.current.show();
              } else {
                panelRef.current.show(480);
              }
            }}
          />
          <IconButton
            icon={'circle-with-cross'}
            style={MapStyle.closeButton}
            onPress={() => {
              props.setVisibility(false);
            }}
          />
          {/* main panel header  */}
          <View style={MapStyle.panelHeader}>
            <Animated.View
              style={{
                transform: [{ translateY: textTranslateY }, { translateX: textTranslateX }, { scale: textScale }],
              }}
            >
              <Text style={MapStyle.textHeader}>{marker.name}</Text>
              {/* If there is no rating / score we will make one up with the id as the seed for a float between 1 and 10 */}
              <StarRating
                containerStyle={MapStyle.starRating}
                score={marker.rating == undefined ? marker.id : marker.rating}
              ></StarRating>
              {/* / */}
              {markerData !== undefined && (
                <>
                  {/* Gotta make it fit the page */}
                  <Text style={MapStyle.costText}>
                    {markerData?.cost_description !== undefined && markerData?.cost_description !== ''
                      ? markerData?.cost_description.length > 50
                        ? markerData?.cost_description.substring(0, 50) + '...'
                        : markerData?.cost_description
                      : 'Visit location for cost information'}
                  </Text>
                </>
              )}
              <View style={MapStyle.heartIcon}>
                <IconButton
                  icon="heart"
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    props.favourite(marker);
                  }}
                />
                <IconButton
                  style={MapStyle.directionsIcon}
                  icon="direction"
                  onPress={() => {
                    if (Platform.OS === 'ios') {
                      Linking.openURL(`http://maps.apple.com/?address=${encodeURIComponent(marker.address)}`);
                    } else {
                      Linking.openURL(
                        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(marker.address)}`
                      );
                    }
                  }}
                />
              </View>
            </Animated.View>
          </View>
          {/* Larger view screen after being scrolled into full view */}
          <ScrollView
            resizeMode="contain"
            onTouchStart={() => setAllowDragging(false)}
            onTouchEnd={() => setAllowDragging(true)}
            onTouchCancel={() => setAllowDragging(true)}
          >
            <Text style={MapStyle.bodyDescriptionHeader}>Description</Text>
            <Text style={MapStyle.bodyDescriptionText}>
              {markerData?.description !== undefined ? markerData?.description : 'No description available'}
            </Text>
            {markerData?.photos !== undefined && (
              <View style={MapStyle.bodyPhotoView}>
                {markerData?.photos.map((photo, index) => (
                  <Image
                    key={index}
                    style={[
                      {
                        width: width - 10, // 10 pixels less than the screen width
                        height: (width - 10) * 0.75, // Maintain aspect ratio
                      },
                      MapStyle.bodyPhoto,
                    ]}
                    source={{ uri: photo.url }}
                  />
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </SlidingUpPanel>
    </>
  );
};

export default DatabaseDrawer;