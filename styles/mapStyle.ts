import { StyleSheet } from 'react-native';

export const createMapStyle = (colorScheme) =>
  StyleSheet.create({
    // styles for the map in DatabaseMap
    ViewStyle: {
      flex: 1,
      backgroundColor: colorScheme.background,
      position: 'relative',
    },
    // Styles for the map in DatabaseScreen
    sideContainer: {
      marginTop: 10,
      zIndex: 1, // on top of map
      position: 'absolute',
      right: 10,
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.5)',
      borderRadius: 25,
      padding: 8,
    },

    MapMarkerText: {},
    MapMarkerBody: {},

    // These are the styles for the DatabaseDrawer

    panel: {
      flex: 1,
      backgroundColor: 'white',
      position: 'relative',
    },

    panelHeader: {
      height: 180,
      // backgroundColor: '#294e4b',
      backgroundColor: '#294e4b',
      justifyContent: 'flex-end',
      padding: 24,
    },
    textHeader: {
      fontSize: 24,
      color: '#FFF',
      paddingBottom: 8,
    },
    starRating: {
      paddingBottom: 8,
    },
    costText: {
      color: '#FFF',
      paddingBottom: 8,
    },
    chevronButton: {
      position: 'absolute',
      top: -24,
      right: 82,
      width: 48,
      height: 48,
      zIndex: 1,
    },
    closeButton: {
      position: 'absolute',
      top: -24,
      right: 18,
      width: 48,
      height: 48,
      zIndex: 1,
    },
    heartIcon: {
      flexDirection: 'row',
    },
    directionsIcon: {},

    // body of the card
    bodyDescriptionHeader: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
    },

    bodyDescriptionText: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
    },

    bodyPhotoView: { alignItems: 'center' },

    bodyPhoto: {
      // these are set within the component as width and height are defined there
      // width: width - 10, // 10 pixels less than the screen width
      // height: (width - 10) * 0.75, // Maintain aspect ratio
      borderRadius: 10, // Rounded corners
      marginBottom: 10, // Space between images
    },

    // idk yet what these are
    IconStyle: {
      height: 50,
      width: 50,
      marginLeft: 10,
    },

    IconPosition: {
      flexDirection: 'row',
      backgroundColor: 'rgba(52, 52, 52, 0)',
      alignContent: 'center',
      marginBottom: 10,
    },
  });
