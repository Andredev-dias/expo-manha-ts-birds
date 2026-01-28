import { Header } from "@/components/header";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function List() {
    return (
        <SafeAreaView>
            <Header image={require('@/assets/images/headerImg.jpg')} />
            <View>
                <Text>TESTE</Text>
            </View>
        </SafeAreaView>
    )
}