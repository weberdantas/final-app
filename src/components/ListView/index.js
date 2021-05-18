import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { height } = Dimensions.get('screen')

const ListView = ({ data, onSelectedItem }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} activeOpacity={0.6} onPress={() => onSelectedItem(item)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.picture?.thumbnail }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.name?.first} {item.name?.last}</Text>
          <Text style={styles.text}>{item.email}</Text>
          <Text style={styles.text}>Idade: {item.dob?.age}</Text>
        </View>
        <View style={styles.chevron}>
          <Icon name="chevron-forward-outline" color="#AAA" size={20} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index)}
      style={{ maxHeight: height - 240 }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 80,
    backgroundColor: "#FFF",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  chevron: {
    position: "absolute",
    right: 8,
    top: 30
  },
  imageContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 18
  },
  textContainer: {
    justifyContent: "center"
  },
  textName: {
    fontFamily: "Ubuntu-Bold",
    marginBottom: 2,
    textAlign: "left"
  },
  text: {
    fontFamily: "Ubuntu-Regular",
    marginBottom: 2,
    textAlign: "left"
  },
});

ListView.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectedItem: PropTypes.func.isRequired,
};

export default ListView;
