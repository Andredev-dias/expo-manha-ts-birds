import { Header } from "@/components/header";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dados from '@/assets/constants/mock'
import { Item } from "@/components/item";

export default function List() {

    const voltar = () => {
        router.push('/')
    }

    return (
     <>
        <Header image={require('@/assets/images/headerImg.jpg')} />
            <View>
                <TouchableOpacity onPress={voltar}>
                    <Text style={s.backBtn}>🔙</Text>
                </TouchableOpacity>
            </View>
        
        <SafeAreaView style={s.wrapList}>
                <FlatList data={dados} renderItem={({ item }) => (
                    <Item name={item.nome} image={item.imagem} date={item.nascimento} age={item.idade} />
                )}>
                </FlatList>
        </SafeAreaView>
        </>
    )
}

const s = StyleSheet.create({
    wrapList:{
        flex: 1
    },
    backBtn: {
        fontSize: 40,
        position: 'absolute',
        top: -250
    }
})