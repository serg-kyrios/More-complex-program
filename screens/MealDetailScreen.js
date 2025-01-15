import { View, Text, StyleSheet, Image, ScrollView, color } from 'react-native';
import { useLayoutEffect } from 'react';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    function headerButtonPressHandler() {
        //console.log('Pressed!');
    }

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    //console.log('Route Params:', route);
    // useLayoutEffect(() => {
    //     navigation.setOptions({ title: selectedMeal.title });
    // }, [navigation, selectedMeal.title]);
    // console.log(selectedMeal);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        // icon='star'
                        icon='star-outline'
                        color='white'
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        });
    }, [navigation, headerButtonPressHandler]);
    //

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />

            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle> Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle> Steps </Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    screen: {
        flex: 1, // займати весь екран
        justifyContent: 'center', // вирівнювання по вертикалі
        alignItems: 'center', // вирівнювання по горизонталі
        backgroundColor: '#f8f8f8',
    },
    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        color: 'white',
    },
    detailText: {
        color: '#666',
        color: 'white',
    },
    subtitle: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',

        textAlign: 'center',
    },
    subtitleContainer: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 6,
        margin: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
