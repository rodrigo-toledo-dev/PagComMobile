import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5
  },
  root: {
    flex: 1
  },
  contentViewRow: {
    height: '100%',
  },
  textOne: {
    textAlign: "center",
    fontSize: 17,
    color: "#1d6c98",
    fontWeight: "bold"
  },
  textTwo: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    color: "#808080"
  },
  textThree: {
    textAlign: "center",
    fontSize: 14,
    color: "#808080"
  },
  iconMenu: {
    width: 75,
    height: 45,
    resizeMode: "stretch",
    alignSelf: 'center',
  },
  value: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#1d6c98",
    fontSize: 15
  },
  transaction: {
    fontWeight: "bold",
    color: "#1d6c98",
    fontSize: 15
  },
  viewLine: {
    borderBottomColor: "#1d6c98",
    borderBottomWidth: 5,
    marginBottom: 10,
  }
});
