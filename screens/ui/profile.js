// @flow
import React, { PureComponent } from "react";
import { ScrollView, View, Dimensions, ActivityIndicator, FlatList,Text,TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { updateFirstName, updateLastName, updateEmail, updatePhone } from "../action/profile";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Profile extends PureComponent {
  
    constructor(props) {
        super(props);
        this.state = {
            profileDetails: this.props.route.params ? this.props.route.params.detail :null,
            firstName:this.props.route.params ? this.props.route.params.detail.firstName :null,
            lastName:this.props.route.params ? this.props.route.params.detail.lastName :null,
            email:this.props.route.params ? this.props.route.params.detail.email :null,
            phone:this.props.route.params ? this.props.route.params.detail.phone :null,
        };
  }

  onChangeText(value,name){
    if(name=="firstName"){
        if(value.length === 0 || !value){
            alert("First Name is an mandotory field")
        }else{
            this.props.updateFirstName(value)
        }
    }else if(name=="lastName"){
        if(value.length === 0 || !value){
            alert("Last Name is an mandotory field")
        }else{
            this.props.updateLastName(value)
        }
    }else if(name=="email"){
        this.props.updateEmail(value)
    }else if(name=="phone"){
        this.props.updatePhone(value)
    }
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          {
              this.state.profileDetails ?
              <View>
                <View style={{alignItems:"center", justifyContent:"center"}}>
                    <View style={{backgroundColor:"#ff8c00", height:100, width:100, borderRadius:50, margin:10}}></View>
                </View>

                <View style={{backgroundColor:"#f2f0f0",width:deviceWidth, marginTop:10}}><Text style={{margin:10, fontWeight:"bold", fontSize:18}}>Main Information</Text></View>
                <View style={{borderBottomWidth:1, marginLeft:10,borderBottomColor:"#e6e3e3",}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{margin:10, fontSize:16}}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value)=> this.onChangeText(value,"firstName")}
                            value={this.props.profileData.firstName}
                        />
                    </View>
                </View>
                <View style={{marginLeft:10}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{margin:10, fontSize:16}}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value)=>this.onChangeText(value,"lastName")}
                            value={this.props.profileData.lastName}
                        />
                    </View>
                </View>

                <View style={{backgroundColor:"#f2f0f0",width:deviceWidth}}><Text style={{margin:10, fontWeight:"bold", fontSize:18}}>Sub Information</Text></View>
                <View style={{borderBottomWidth:1, marginLeft:10,borderBottomColor:"#e6e3e3",}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{margin:10, fontSize:16}}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value)=>this.onChangeText(value,"email")}
                            value={this.props.profileData.email}
                        />
                    </View>
                </View>
                <View style={{borderBottomWidth:1, marginLeft:10,borderBottomColor:"#e6e3e3",}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{margin:10, fontSize:16}}>Phone</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value)=>this.onChangeText(value,"phone")}
                            value={this.props.profileData.phone}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
              </View>
              :
              <View style={{alignItems:"center", justifyContent:"center", margin:10}}>
                  <Text>No Record!</Text>
              </View>
          }
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    scrollContainer:{
        backgroundColor:"white",
        height:deviceHeight
    },
    input: {
        height: 30,
        width: deviceWidth-130,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#e6e3e3",
        padding:5
    },

})

const mapStateToProps = state => {
    return {
        profileData: state.profileData,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateFirstName: (fisrtName) => dispatch(updateFirstName(fisrtName)),
        updateLastName: (lastName) => dispatch(updateLastName(lastName)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePhone: (phone) => dispatch(updatePhone(phone)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
