import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
    if (typeof icon !== 'string') {
        console.error('Icon name must be a string:', icon);
        return null;
    }

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
    },

    pressed: {
        opacity: 0.7,
    },
});
