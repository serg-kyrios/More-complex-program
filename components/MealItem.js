import { View, Text } from 'react-native';
function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{imageUrl}</Text>
            <Text>{duration}</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
        </View>
    );
}
export default MealItem;
