// @flow
import React, { PureComponent } from "react";
import { View, FlatList,Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { updateUserList, updateId, updateFirstName, updateLastName, updateEmail, updatePhone } from "../action/profile";

class Home extends PureComponent {
    static navigationOptions = {
        title: 'Welcome',
    };
  
    constructor(props) {
        super(props);
        this.state = {
            refreshing:false,
        };
  }

  navigateToProfile(item){
    this.props.navigation.navigate("Profile",{detail:item})
    this.props.updateId(item.id)
    this.props.updateFirstName(item.firstName)
    this.props.updateLastName(item.lastName)
    this.props.updateEmail(item.email)
    this.props.updatePhone(item.phone)
  }

  renderInfo(items){
    let item = items.item
    return(
        <TouchableOpacity style={styles.listWrap} onPress={()=>{this.navigateToProfile(item)}}>
            <View style={styles.listStyle}>
                <View style={styles.center}>
                    <View style={styles.circleView} />
                </View>
                <View style={styles.center}>
                    <Text style={styles.textStyle}>
                        {item.firstName}
                    </Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
  }

  handleRefresh = () => {
    this.setState({refreshing:true})
    setTimeout(()=>{this.setState({refreshing: false})}, 1000)
  };

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.listView}>
                <FlatList 
                    data={this.props.profileData.userList}
                    renderItem={(item)=>this.renderInfo(item)}
                    showsVerticalScrollIndicator={false}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                >
                </FlatList>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    listView: {
        marginTop:10,
      
    },
    listStyle: {
        height:80,
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    circleView:{
        height:50,
        width:50,
        borderRadius:30,
        backgroundColor:"#ff8c00"
    },
    textStyle:{
        marginLeft:10,
    },
    center:{
        justifyContent:"center"
    },
    listWrap:{
        height:80,
        borderBottomWidth:0.5,
        borderBottomColor:"#d9d7d7",
        marginHorizontal:10
    }
  })

const mapStateToProps = state => {
    return {
        profileData: state.profileData,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateUserList: (list) => dispatch(updateUserList(list)),
        updateId: (id) => dispatch(updateId(id)),
        updateFirstName: (fisrtName) => dispatch(updateFirstName(fisrtName)),
        updateLastName: (lastName) => dispatch(updateLastName(lastName)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePhone: (phone) => dispatch(updatePhone(phone)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Home));
