import ImageColors from "react-native-image-colors";

export const getImageColors = async (uri: string) =>{    
    const result = await ImageColors.getColors(uri, {})
    
    let primary
    let secondary

    if (result.platform == "android") {
        primary = result.dominant
        secondary = result.average
    }

    if (result.platform == "ios") {
        primary = result.primary
        secondary = result.secondary
    }

    return [ primary, secondary ]
}