import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { PageLoading, SearchInput, ListView, ItemModal } from "../../components";
import api from "../../service/api";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [usersBkp, setUsersBkp] = useState([]);

  useEffect(async () => {
    getData();
  }, []);

  useEffect(() => {
    if (search) {
      const filter = users.filter(
        item =>
          String(item.email).includes(search.toLowerCase()) ||
          String(item.name.first)
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          String(item.name.last).toLowerCase().includes(search.toLowerCase()),
      );
      setUsers(filter);
    } else {
      setUsers(usersBkp);
    }
  }, [search]);

  async function getData() {
    try {
      const response = await api.get("/api/?results=12");
      setUsers(response.data.results);
      setUsersBkp(response.data.results);
      setLoading(false);
      console.log("response->", response.data);
    } catch (error) {
      setLoading(false);
      console.log("error->", error);
    }
  }

  const handleSelected = (item) => {
    setSelected(item);
    setOpenModal(true);
  }

  if (loading) {
    return <PageLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lista de Pessoas</Text>
      </View>
      <View>
        <SearchInput
          value={search}
          onChange={value => setSearch(value)}
          onErase={() => setSearch("")}
        />
      </View>
      <View style={styles.listContainer}>
        <ListView data={users} onSelectedItem={(value) => handleSelected(value)} />
      </View>
      <ItemModal open={openModal} item={selected} onClose={() => setOpenModal(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  titleContainer: {
    marginVertical: 10,
    width: "100%",
  },
  titleText: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 22,
    textTransform: "uppercase",
  },
  listContainer: {
    marginBottom: 40,
  },
});

export default Home;
