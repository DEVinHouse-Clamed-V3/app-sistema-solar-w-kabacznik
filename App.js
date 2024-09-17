import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { planetas } from './planeta';
import Planet from './Planet';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={ styles.areaHeader }>
        <Text style={ styles.titleHeader }>Vamos Explorar</Text>
        < Image style={ styles.image } 
        source={require("./assets/header_image.png")}/>
      </View>

      <View>
        <Text style={styles.titleHeader}>Planetas</Text>
        <Text style={styles.textHeader}>
          Aqui você vai encontrar informações sobre os planetas do nosso 
          sistema solar.
        </Text>
      </View>

      <ScrollView style={ styles.list }>
        <FlatList 
        data={planetas}
        keyExtractor={item => item.nome}
        renderItem={({ item, index }) => (
          <Planet planeta={item} index={index} />
        )}
        />
       {/*  { 
          planetas.map((planeta, index) => (
            <Planet planeta={planeta} index={index} />
          ))
        } */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 40,
  },
  areaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    gap: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
    elevation: 2,
  },
  titleHeader: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,  
  },
  textHeader: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  list: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 60,
  },
});
