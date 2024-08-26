import {Link} from "expo-router";
import {LinkComponent} from "expo-router/build/link/Link";
import {ComponentPropsWithoutRef} from "react";
import {useTheme} from "@react-navigation/native";

interface ThemeLinkProps extends ComponentPropsWithoutRef<LinkComponent>{

}
const ThemeLink = (props:ThemeLinkProps) => {
    const theme = useTheme()

    const {...restProps}=props
    return <Link {...restProps} style={{color:theme.colors.primary}}/>
}
export default ThemeLink
