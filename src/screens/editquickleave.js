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

export default class editquickleave extends Component {

  constructor(props){
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      purpose : this.data.purpose,
      department : this.data.department,
      projectName : this.data.projectName
      
    }
  }

  submitTask(){
    let body = {
      "purpose" : this.state.purpose,
      "department" : this.state.department,
      "projectName" : this.state.projectName
    
    }

    Resource.editTask(body, this.data.id)
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
          value={this.state.purpose}
          onChangeText={(purpose) => this.setState({purpose})}
          placeholder="Purpose"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.department}
          onChangeText={(department) => this.setState({department})}
          placeholder={"Department"}
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.projectName}
          onChangeText={(projectName) => this.setState({projectName})}
          placeholder="ProjectName"
        />
        
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitTask()}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}