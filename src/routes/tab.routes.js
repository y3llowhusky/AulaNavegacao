import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Service from "../screens/Service";
import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Criando a constante Tab para configurar nossa navegação
const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerTintColor:"red"}}>
            <Tab.Screen name="Home" component={Home} 
            options={{tabBarIcon:()=><Feather name="home" color="red" size={20}/>}}/>

            <Tab.Screen name="Login" component={Login}
            options={{tabBarIcon:()=><MaterialCommunityIcons name="login" color="red" size={20}/>}}/>

            <Tab.Screen name="Service" component={Service}
            options={{tabBarIcon:()=><MaterialIcons name="miscellaneous-services" color="red" size={20}/>}}/>
        </Tab.Navigator>
    )
}