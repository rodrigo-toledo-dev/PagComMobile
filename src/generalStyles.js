import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%'
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#808080',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    color: '#808080',
    flex: 1,
    fontSize: 17,
    height: 60,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  requiredInput: {
    borderColor: '#BC8276',
    height: 60,
    color: '#808080',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17,
    flex: 1
  },
  inputSmallOne: {
    width: 100,
    height: 60,
    color: '#808080',
    borderColor: '#808080',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 20,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17
  },
  inputSmallTwo: {
    flex: 1,
    height: 60,
    color: '#808080',
    borderColor: '#808080',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17
  },
  inputSmallThree: {
    width: 100,
    height: 60,
    color: '#808080',
    borderColor: '#808080',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 20,
    marginLeft: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17
  },
  inputDate: {
    color: '#808080',
    fontSize: 17,
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
  },
  datePickerInput: {
    marginLeft: 36,
    borderBottomWidth: 2,
    borderColor: '#BC8276',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    color: '#808080',
    fontSize: 17,
    height: 60,
  },
  datePickerIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  viewRowInput: {
    flexDirection: 'row',
    flex: 1,
  },
  keyboardContainer: {
    marginTop: 10,
    marginBottom: 10,
  },

  mainActionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    height: 60,
    justifyContent: 'center',
    marginBottom: 5,
    // marginLeft: 5,
    // marginRight: 5,
    marginTop: 15,
  },
  buttonContainerWithBg: {
    alignItems: 'center',
    flex: 1,
    height: 60,
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 15,
    backgroundColor: '#1a638d'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
  },
  footer: {
    backgroundColor: 'transparent',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textBlueTitle: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#1d6c98",
    fontWeight: "bold"
  },
  textBlue: {
    color: "#15638C",
    fontWeight: "bold"
  },
  h1: {
    fontSize: 20,
  },
  text: {
    color: '#808080',
  },

  textGray: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    color: "#808080"
  },

  textGrayBold: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    color: "#808080",
    fontSize: 17,
    fontWeight: 'bold'
  },

  indicator: {
    marginBottom: 10,
  },
});
