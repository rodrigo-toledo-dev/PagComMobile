import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  logo:{
    resizeMode: 'contain',
    width: 200,
    height: 100,
    marginBottom: 20,
  },

  input: {
    alignSelf: 'stretch',
    height: 44,
    color: "#125a80",
    borderColor: "#125a80",
    borderWidth: 3,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 17,
  },

  button: {
    marginTop: 15,
    marginBottom: 15,
  },

  forgotPasswordText: {
    color: "#125a80",
    fontSize: 17,
  },
});
