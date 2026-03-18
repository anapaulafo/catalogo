import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  MainTabs: undefined
  Details: { id: number;
    name: string;
      price: number;
      picture: ImageSourcePropType;
      description: string; }
}