import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export const returnUserProfile = (image: ImageSourcePropType) => {
    return (
        <Image
            source={image} resizeMode="contain"
            style={styles.profileImage}
        />
    );
}

export const renderMusicIcon = (icon: ImageSourcePropType) => {
    return (
        <Image
            source={icon} resizeMode="contain"
            style={styles.iconImage}
        />
    );
}

const styles = StyleSheet.create({
    profileImage: {
        width: 28,
        height: 28,
        borderRadius: 100,
    },
    iconImage: {
        width: 15,
        height: 15,
    }
})