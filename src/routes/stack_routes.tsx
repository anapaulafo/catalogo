import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'
import TabRoutes from './tab_routes'
import DetailsScreen from '../screens/detail_screen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}