import {
    id,
    View,
    Text,
    Pressable,
    StyleSheet,
    Image,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from './MealDetails';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        console.log('Meal ID:', id);
        navigation.navigate('MealDetail', {
            mealId: 'm1',
        });
    }

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (
                    styles.button, pressed ? styles.buttonPressed : null
                )}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
}
export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    container: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4, // для тіні на Android
        shadowColor: 'black', // для тіні на iOS
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //android only - for shadow
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden', //Rounding corners on iOS
    },
    buttonPressed: {
        opacity: 0.5,
    },
});
