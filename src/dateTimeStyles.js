import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputDate: {
    flex: 1,
    height: 44,
    color: "#808080",
    borderColor: "#808080",
    borderWidth: 3,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17
  },

  datePickerIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },

  datePickerInput: {
    marginLeft: 36,
    color: '#808080',
    fontSize: 17,
    borderWidth: 0
  },
});
