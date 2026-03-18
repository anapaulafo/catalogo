import { Text, Image, Pressable, StyleSheet, ImageSourcePropType } from "react-native";

type ProductCardProps = {
    name: string;
    price: number;
    picture: ImageSourcePropType;
    onPress?: () => void;
};

export function ProductCard({ name, price, picture, onPress }: ProductCardProps) {
    return (
        <Pressable style={styles.card} onPress={onPress} disabled={!onPress}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>R${price.toFixed(2)}</Text>
            <Image source={picture} style={styles.picture} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        color: "#854ade",
    },
    picture: {
        width: "100%",
        height: 300,
    },
});