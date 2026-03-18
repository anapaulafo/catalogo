import { ProductCard } from "../components/product_card";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, Product } from "../routes/app_routes";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Tabs">;

export default function HomeScreen() {
    const navigation = useNavigation<NavProp>();

    const products: Product[] = [
        {
            id: 1,
            name: "Mouse",
            price: 19.99,
            picture: require("../../assets/mouse.jpeg"),
            description: "Mouse sem fio com conexão estável e design ergonômico.",
        },
        {
            id: 2,
            name: "Teclado",
            price: 29.99,
            picture: require("../../assets/teclado.jpeg"),
            description: "Teclado mecânico compacto com ótimo feedback tátil.",
        },
        {
            id: 3,
            name: "Headset",
            price: 39.99,
            picture: require("../../assets/headset.jpeg"),
            description: "Headset com cancelamento de ruído e som imersivo.",
        },
    ];

    return (
        <View>
            <ScrollView>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        picture={product.picture}
                        onPress={() => navigation.navigate("Details", { product })}
                    />
                ))}
            </ScrollView>
        </View>
    );
}