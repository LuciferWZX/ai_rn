import {Tabs,Redirect} from "expo-router";
import {TabMenuType} from "@/types";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {TabBarMaterialIconsIcon} from "@/components";
import {useTheme} from "@react-navigation/native";

const TabsLayout = () => {
    const theme = useTheme()
    const tabs:TabMenuType[]=[
        {
            key:'chat',
            title:'会话',
            tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} color={color} />
            ),
        },
        {
            key:'profile',
            title:'账户',
            tabBarIcon: ({ color, focused }) => (
                <TabBarMaterialIconsIcon name={focused ? 'manage-accounts' : 'manage-accounts'} color={color} />
            ),
        }
    ]
    return(
        <Tabs
            screenOptions={{
                // tabBarShowLabel:false,
                tabBarActiveTintColor:theme.colors.primary
            }}>
            {tabs.map(tab=>{
                return(
                    <Tabs.Screen
                        key={tab.key}
                        name={tab.key}
                        options={{
                            headerShown:false,
                            tabBarIcon:tab.tabBarIcon,
                            title:tab.title,

                    }} />
                )
            })}
        </Tabs>
    )
}
export default TabsLayout
