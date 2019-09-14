import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  mainView: {
    flexDirection: "column",
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  mainBalanceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  balanceView: {
    flex: 1
  },

  scanOptionsView: {
    width: 90,
    alignItems: 'flex-end',
  },

  iconRight: {
    width: 80,
    height: 40,
    marginTop: 10,
    marginBottom: 5,
    resizeMode: "contain",
  },
  logoBottom: {
    resizeMode: "stretch",
    width: 60,
    height: 30,
    marginLeft: 10
  },
  textValue: {
    textAlign: "center",
    fontSize: 26,
    color: "#808080",
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  textBalance: {
    textAlign: "center",
    fontSize: 20,
    color: "#808080"
  },

  textBlueBrl: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    fontSize: 20,
    color: "#1d6c98",
    fontWeight: "bold"
  },

  textGrayBold: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#808080",
    fontWeight: "bold"
  },

  textGrayBoldBottom: {
    color: "#808080",
    fontWeight: "bold"
  },

  contentViewRow: {
    flexDirection: "column",
    justifyContent: 'center',
    padding: 30,
  },

  contentViewBgBlue: {
    marginTop: 10,
    backgroundColor: "#1e6b95",
    height: 450,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },

  contentViewQrCode: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1e6b95",
    marginTop: 10,
  },

  contentViewBgWhite: {
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#1e6b95",
    borderWidth: 4,
    paddingBottom: 10,
    paddingTop: 10,
  },

  contentViewBgQRCode: {
    height: 270,
    width: 270,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#000',
  },

  contentViewBgBarCode: {
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
  },

  contentViewBalance: {
    flexDirection: "row",
  },

  contentMenuView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },

  contentViewBgCodeWhite: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 330
  },

  textWhiteBold: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold"
  },

  footerButtonContainer: {
    width: 160,
  },



  topTransactionsView: {
    height: 100,
    alignItems: 'center',
    justifyContent: "center"
  },
  transactionsTitleText:{
    textAlign: 'center',
    marginTop: 50,
    fontSize: 17,
    color: '#808080'
  },

  iconMenu: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },

  tabBackground: {
    backgroundColor: "transparent"
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    marginTop: 10,
    alignContent: "center",
    width: 300,
    height: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 0
  },
  modalHeader: {
    height: 45,
    backgroundColor: "#15638C",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTextTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#FFFFFF"
  },
  modalBottomView: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  modalBottomViewRow: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 0
  },
  modalViewTextContent: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalTextContent: {
    marginTop: 90,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  },
  leftButton: {
    backgroundColor: "#f55442",
    height: 50,
    width: "50%",
    borderBottomLeftRadius: 10
  },
  rightButton: {
    backgroundColor: "#15638C",
    width: "50%",
    height: 50,
    borderBottomRightRadius: 10
  },
  touchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  modalTextButton: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#FFFFFF"
  },

  input: {
    flex: 1,
    height: 44,
    color: "#808080",
    borderColor: "#808080",
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonContainer: {
    marginLeft: 28,
    marginRight: 28,
    borderRadius: 5,
    height: 46,
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1a638d'
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17
  },
  buttonKeyboard: {
    height: 40,
    width: 80,
    resizeMode: "stretch"
  },
  buttonViewRow: {
    alignSelf: 'center',
    flexDirection: "row",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  }
});
