import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flex: 1
  },
  list: {
    marginLeft: 0
  },
  image: {
    marginLeft: 10,
    resizeMode: "contain",
    marginTop: 7,
    width: 74,
    height: 26
  },
  value: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#125a80",
    fontSize: 20
  },
  debit: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#8c8c8c",
    fontSize: 15
  },
  viewLine: {
    marginLeft: 5,
    marginRight: 5,
    borderBottomColor: "#8c8c8c",
    borderBottomWidth: 5
  }
});
