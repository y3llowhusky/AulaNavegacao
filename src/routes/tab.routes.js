import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Service from "../screens/Service";

// Criando a constante Tab para configurar nossa navegação
const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerTintColor:"red"}}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="Service" component={Service}/>
        </Tab.Navigator>
    )
}