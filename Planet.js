import { StyleSheet, View, Text, Image } from "react-native";

export default function Planet({ planeta }) {
    return (
        <View style={ styles.area }>
            <View style={ styles.areaList }>
                <Text  style={ styles.titleList }>{ planeta.nome }</Text>
                <Image 
                style={ styles.imageList }
                source={{ uri: planeta.img }}/>
            </View>

            <View>
                <View style={styles.areaDescription}>
                    <Text style={styles.description}>
                    Velocidade Orbital Média
                    </Text>
                    <Text style={styles.value}>
                    { planeta.velocidadeOrbitalMediaKmS } km/s
                    </Text>
                </View>

                <View style={styles.areaDescription}>
                    <Text style={styles.description}>Satélites</Text>
                    <Text style={styles.value}>
                    { planeta.quantidadeSatelites }
                    </Text>
                </View>

                <View style={styles.areaDescription}>
                    <Text style={styles.description}>Área da Superfície</Text>
                    <Text style={styles.value}>
                    { planeta.areaSuperficieKm2 } km²
                    </Text>
                </View>

                <View style={styles.areaDescription}>
                    <Text style={styles.description}>Período de Rotação</Text>
                    <Text style={styles.value}>
                    { planeta.periodoRotacaoDias }D
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
      area: {
        marginBottom: 40,
        padding: 20,
        backgroundColor: '#333',
        borderRadius: 8,
      },
      areaList : {
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleList: {
        color: 'orange',
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      imageList: {
        width: 300,
        height: 300,
        borderRadius: 8,
        marginBottom: 20,
      },
      areaDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      description: {
        color: 'orange',
        fontSize: 18,
        fontWeight: 'bold',
      },
      value: {
        color: '#fff',
        fontSize: 18,
    },
});