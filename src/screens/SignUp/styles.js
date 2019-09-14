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
  }
});
