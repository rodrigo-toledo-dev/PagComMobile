import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: "row",
    marginTop: 30
  },
  leftIconHeader: {
    marginLeft: 14
  },
  root: {
    flex: 1
  },
  textBlue: {
    textAlign: "center",
    fontSize: 14,
    color: "#1d6c98",
    fontWeight: "bold"
  },
  iconMenu: {
    marginTop: 150,
    width: 90,
    height: 115,
    resizeMode: "contain"
  },
  groupedView: {
    alignItems: 'center',
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom: 10,
    marginTop: 10
  },
  buttonAccounts: {
    borderBottomWidth:1,
    borderBottomColor: '#ccc',
    paddingBottom: 4
  },





  inputDate: {
    flex: 1,
    height: 60,
    color: "#808080",
    borderColor: "#BC8276",
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17,
    justifyContent: 'center'
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
