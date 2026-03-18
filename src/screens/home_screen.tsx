import { ProductCard } from "../components/product_card";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
    const products = [
        { id: 1, name: "Mouse", price: 19.99, picture: require("../../assets/mouse.jpeg") },
        { id: 2, name: "Teclado", price: 29.99, picture: require("../../assets/teclado.jpeg") },
        { id: 3, name: "Headset", price: 39.99, picture: require("../../assets/headset.jpeg") },
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
                    />
                ))}
            </ScrollView>
        </View>
    );
}