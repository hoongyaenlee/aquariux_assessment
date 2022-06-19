import React, { PureComponent } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { updateUserList,modifyList} from "./screens/action/profile";

import Home from "./screens/ui/home.js";
import Profile from "./screens/ui/profile.js";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  iconStyle:{
    color: "#ff8c00", fontSize: 25 
  },
  textStyle: {
    color:"#ff8c00", fontSize:16
  },
})

class App extends PureComponent{

  constructor(props) {
    super(props);
  }

  onSave(){
    this.props.modifyList(this.props.profileData)
    return true
  }

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Contacts" 
            component={Home} 
            options={{
              headerLeft: () => (
                <TouchableOpacity><MaterialIcons style={styles.iconStyle} name="search" /></TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity><MaterialIcons style={styles.iconStyle} name="add" /></TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen 
            name="Profile"
            component={Profile}
            options={({ navigation, route }) => ({
              headerLeft: () => (
                <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={styles.textStyle}>Cancel</Text></TouchableOpacity>
              ),
              headerTitle: props => <Text></Text>,
              headerRight: () => (
                <TouchableOpacity onPress={async()=> {
                  await this.onSave()
                  navigation.goBack()
                }}>
                  <Text style={styles.textStyle}>Save</Text></TouchableOpacity>
              ),          
            })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
    
  }
  
}

const mapStateToProps = state => {
  return {
      profileData: state.profileData,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateUserList: (list) => dispatch(updateUserList(list)),
    modifyList: (list) => dispatch(modifyList(list)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

