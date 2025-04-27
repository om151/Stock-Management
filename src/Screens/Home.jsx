import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AllItems from './AllItems';
import CreateScreen from './Create';




const Home = () => {
  const [view, SetView] = useState(0);

  const[data,setData] = useState([
    { id: 1, name: "Wheat", stock: 5, unit: "Kg" },
    { id: 2, name: "Rice", stock: 10, unit: "Kg" },
    { id: 3, name: "Sugar", stock: 28, unit: "Kg" },
    { id: 4, name: "Corn", stock: 22, unit: "Kg" },
    { id: 5, name: "Barley", stock: 7, unit: "Kg" }
  ])

  return (
    <SafeAreaView style={styles.cointainer}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btnContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => SetView(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => SetView(1)}>
          <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 2 ? {backgroundColor: 'green'} : null,
          ]}
          onPress={() => SetView(2)}>
          <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data = { data.filter((item) => item.stock < 20)} />}
      {view === 2 && <CreateScreen data={data} setData={setData} />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cointainer: {
    width: '100%',
    height: '100%',
    padding: '10%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
