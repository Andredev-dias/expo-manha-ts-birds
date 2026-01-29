import { View, Text, StyleSheet } from "react-native"
import { Image } from 'expo-image'

export const Item = ({ name, age, date, image }: { name: string, age: string, date: string, image: string }) => {
    return (
        <View style={s.itemList}>
            <Image style={s.imageStyle} source={image} />
            <Text style={s.txt}>{name}</Text>
            <Text style={s.txt2}>Idade: {age}</Text>
            <Text style={s.txt3}>{date}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    itemList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#4186a4d4',
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    txt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: -2, height: 2 }, 
        textShadowRadius: 10, 
    },
    txt2: {
        color: '#093753c3',
        fontSize: 14,
        fontWeight: 'bold'
    },
    txt3: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'regular'
    }
})