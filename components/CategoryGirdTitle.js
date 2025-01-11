import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function CategoryGirdTitle(title, color, onPress, navigation) {
    return (
        <View style={[styles.gridItem, { backgroundColor: title.color }]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={title.onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGirdTitle;
{
    /* <h2 className='categories-grid-title'>{props.title}</h2>; */
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white', //ios only
        shadowColor: 'black', //ios only
        shadowOpacity: 0.25, //ios only
        shadowOffset: { width: 0, height: 2 }, //ios only
        shadowRadius: 8, //ios only
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //android only - for shadow
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
