import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
//import CategoryGirdTitle from './components/CategoryGirdTitle';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='dark' />;
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='MealsCategories'
                        component={CategoriesScreen}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                    />
                </Stack.Navigator>
                {/* <CategoriesScreen /> Moved to componet */}
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
