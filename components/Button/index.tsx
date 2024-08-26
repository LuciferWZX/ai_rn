
import {TouchableOpacity} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import {useTheme} from "@react-navigation/native";
import { ThemedText } from "../ThemedText";
import {ReactNode} from "react";
interface ButtonProps {
    children?:ReactNode
    disabled?:boolean
    isLoading?:boolean
    containerClassName?:string
}
const Button = (props:ButtonProps) => {
    const {children,disabled,containerClassName,isLoading}=props
  const {colors}=useTheme()
  return(
      <TouchableOpacity
          activeOpacity={0.7}
          disabled={disabled||isLoading}
          onPress={()=>{}}
          style={{backgroundColor:colors.primary}}
          className={`rounded-xl min-h-[64px] justify-center items-center ${containerClassName?containerClassName:''}`}>
          <ThemedText className={`font-bold text-lg `}>
              {children}
          </ThemedText>
      </TouchableOpacity>
  )
}
export default Button
