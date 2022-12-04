import { StyleSheet } from 'react-native';

export const MapStyle = StyleSheet.create({

  ViewStyle: {
    flex: 1,
  },

  MarkerPopupStyle: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: 150,
    width: 250,
    borderRadius: 25,

    //Position the 4 button icons to bottom edge of popup view
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  MarkerPopupStyleTextTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
    fontSize: 20,
    marginBottom: 0
  },
  MarkerPopupStyleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15
  },

  IconStyle: {
    height: 50,
    width: 50,
    marginLeft: 10
  },

  IconPosition: {
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignContent: 'center',
    marginBottom: 10
  }
})