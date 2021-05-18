import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Linking,
  Alert,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Moment from "moment";

Moment.locale("pt-BR");

const { width } = Dimensions.get("screen");

const ItemModal = ({ open, item, onClose }) => {
  const handleCall = async number => {
    let url = "";

    if (Platform.OS === "ios") url = `telprompt:${String(number).trim()}`;
    else url = `tel:${String(number).trim()}`;

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      Linking.openURL(url);
    } else {
      Alert.alert("Ops...", "Url não pode ser aberta.");
    }
  };

  const handleEmail = async email => {
    const url = `mailto:${email}`;

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      Linking.openURL(url);
    } else {
      Alert.alert("Ops...", "Url não pode ser aberta.");
    }
  };

  return (
    <Modal
      transparent={true}
      visible={open}
      onRequestClose={onClose}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.close}
            activeOpacity={0.5}
            onPress={onClose}>
            <Icon name="close-outline" color="#FFF" size={20} />
          </TouchableOpacity>
          <View style={styles.topContainer}>
            <View>
              <Image
                source={{ uri: item?.picture?.medium }}
                style={styles.image}
              />
            </View>
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.nameText}>
                {item?.name?.first} {item?.name?.last}
              </Text>
              <Text style={styles.emailText}>{item?.email}</Text>
              <View style={styles.dataContainer}>
                <View style={{ marginRight: 14 }}>
                  <Text style={styles.label}>Birthday</Text>
                  <Text style={styles.infoText}>
                    {Moment(item?.dob?.date).utc().format("DD/MM/YYYY")}
                  </Text>
                </View>
                <View>
                  <Text style={styles.label}>Idade</Text>
                  <Text style={styles.infoText}>{item?.dob?.age}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.labelAddress}>Endereço</Text>
            <Text style={styles.textAddress}>
              Rua {item?.location?.street?.name},{" "}
              {item?.location?.street?.number} - {item?.location?.city} -{" "}
              {item?.location?.country}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonCall}
              activeOpacity={0.5}
              onPress={() => handleCall(item?.cell)}>
              <Text style={styles.textCall}>Ligar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEmail}
              activeOpacity={0.5}
              onPress={() => handleEmail(item?.email)}>
              <Text style={styles.textEmail}>Enviar Email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000050",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: width - 70,
    minHeight: 200,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
  },
  close: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "#a1a2d5",
    zIndex: 100,
    borderRadius: 18,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  topContainer: {
    flexDirection: "row",
  },
  nameText: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "left"
  },
  emailText: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 11,
    marginBottom: 15,
    color: "#888",
  },
  dataContainer: {
    width: 184,
    padding: 8,
    flexDirection: "row",
    backgroundColor: "#a1a2d5",
    borderRadius: 8,
  },
  label: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 12,
    color: "#FFF",
    marginBottom: 2,
  },
  infoText: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 13,
    color: "#FFF",
  },
  addressContainer: {
    width: "100%",
    marginTop: 10,
  },
  labelAddress: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 12,
  },
  textAddress: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 12,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  buttonCall: {
    width: "47%",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a1a2d5",
    alignItems: "center",
    justifyContent: "center",
  },
  textCall: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
    color: "#a1a2d5",
  },
  buttonEmail: {
    width: "47%",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#a1a2d5",
    alignItems: "center",
    justifyContent: "center",
  },
  textEmail: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
    color: "#FFF",
  },
});

ItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemModal;
