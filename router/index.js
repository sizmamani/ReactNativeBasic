import React from 'react'
import Login from '../views/Login'
import Register from '../views/Register'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const AuthStack = createStackNavigator({  
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({  
      headerTitle: "Login Page"
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Register Page"
    })
  }
});



export default createAppContainer(AuthStack)



