import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';

const CreateScreen = ({data, setData}) => {
  const [itemName, setItemName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null); 

  const addItemHandler = () => {
    if(itemName == '' || stockAmount == ''){
        Alert.alert("No Field Should be Empty")
        return;
    }
    
    setIsEdit(false);
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount,
    };
    setData([...data, newItem]);
    setItemName('');
    setStockAmount('');
  };

  const deleteItemhandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const editItemHandler = (item) => {
    setIsEdit(true);
    setItemName(item.name);
    setStockAmount(item.stock)
    setEditItemId(item.id);
  }
  const updateItemHandler = () =>{
    setData(data.map((item) => (
        item.id == editItemId ? {...item , name: itemName, stock : stockAmount} : item
    )))
    setItemName("");
    setStockAmount("");

  }



  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />

      <TextInput
        placeholder="Enter stock amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmount}
        onChangeText={setStockAmount}
      />

      <Pressable style={styles.addButton} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isEdit ? "EDIT ITEM IN STOCK" : "ADD ITEM IN STOCK"} </Text>
      </Pressable>

      <View style={{marginTop: 10}}>
        <Text style={styles.headingText}>All Item in the Stock</Text>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F68FFF'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              

              <View style={{flexDirection: 'row', gap: 25}}>
              <Text style={styles.itemText}>{item.stock}</Text>

              <Pressable onPress={() => editItemHandler(item)}>
              <Text style={styles.itemText}>Edit</Text>
              </Pressable>


                <Pressable onPress={() => deleteItemhandler(item.id)}>
                <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#D7F6BFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  addButton: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
  },
});
