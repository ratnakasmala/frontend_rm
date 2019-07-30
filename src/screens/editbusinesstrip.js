import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Resource from '../network/Resource'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#EFEFEF", 
    backgroundColor: "#FEFEFE",
    borderWidth: 1, 
    height: 30, 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    marginBottom: 10
  }
})

export default class editbusinesstrip extends Component {

  constructor(props){
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      dateBusinessTrip : this.data.dateBusinessTrip
      
      
    }
  }

  submitBusinessTrip(){
    let body = {
      "dateBusinessTrip" : this.state.dateBusinessTrip
     
    
    }

    Resource.editBusinessTrip(body, this.data.id)
    .then((res) => {
      this.resetForm();
      alert("Edit Sukses")
    })
    .catch((err) => {
      alert(JSON.stringify(err))
    })
  }

  resetForm(){
    this.setState({
      purpose : "",
      department : "",
      projectName : ""
      
    })
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={myStyle.form} 
          value={this.state.dateBusinessTrip}
          onChangeText={(dateBusinessTrip) => this.setState({dateBusinessTrip})}
          placeholder="Purpose"
        />
        
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitBusinessTrip()}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}