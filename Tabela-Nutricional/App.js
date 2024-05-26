import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Home from './Screen/Home'
import CadastrarComida from './Screen/CadastrarComida'
import ListComida from './Screen/ListComida'
import EditarComida from './Screen/EditarComida';
import CadastrarRefeicao from './Screen/CadastroRefeicao';
import listRefeicao from './Screen/ListRefeicao';
import EditarRefeicao from './Screen/EditarRefeicao';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const MainNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Cadastrar Comida'
        component={CadastrarComida}
        options={{
          headerShown: false
        }}
      />

        <Stack.Screen
        name='Cadastrar Refeição'
        component={CadastrarRefeicao}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}

const ListaComida = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Lista de Comida"
        component={ListComida}
        options={{
          headerShown: false
        }}
      />

<Stack.Screen
        name="Editar Comida"
        component={EditarComida}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}

const ListaRefeicao = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Lista de Refeição"
        component={listRefeicao}
        options={{
          headerShown: false
        }}
      />

<Stack.Screen
        name="Editar Refeição"
        component={EditarRefeicao}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#F2C159'},
      headerTitleStyle: { color: "#FFF" },
    }}>

    <Tab.Screen
      name="Home"
      component={MainNavigator}
      options={{
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Lista Comida"
      component={ListaComida}
      options={{
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Lista Refeição"
      component={ListaRefeicao}
      options={{
        headerShown: false
      }}
    />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


{/* <Image
        style={styles.imagem}
        source='https://icones.pro/wp-content/uploads/2021/04/icone-de-nourriture-jaune-symbole-png.png'
        /> */}