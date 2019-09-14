import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%'
  },

  mainView: {
    flexDirection: "column",
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },



  mainBalanceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginBottom: 20,
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

  buttonContainer: {
    width: 170,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17
  },
  contentMenuView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },

  topTransactionsView: {
    height: 100,
    alignItems: 'center',
    justifyContent: "center"
  },

  transactionsView: {
    marginTop: 20,
    height: '50%',
  },

  transactionsTitleText:{
    textAlign: 'center',
    marginTop: 50,
    fontSize: 17,
    color: '#808080'
  },

  iconMenu: {
    width: 115,
    height: 115
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
  }
});
