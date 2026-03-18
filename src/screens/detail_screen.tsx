import { View, Text, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image source={product.picture} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>R${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    image: { width: "100%", height: 260, borderRadius: 8, marginBottom: 16 },
    name: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
    price: { fontSize: 20, color: "#854ade", marginBottom: 12 },
    description: { fontSize: 16, color: "#444" },
});