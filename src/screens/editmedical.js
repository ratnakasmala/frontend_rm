import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
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

export default class editmedical extends Component {

  constructor(props){
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      dateRequestMedical : this.data.dateRequestMedical,
      medicationType : this.data.medicationType,
      totalCostNominal : this.data.totalCostNominal,
      totalCostReimburse : this.data.totalCostReimburse,
      proofAttach : this.data.proofAttach
     
    }
  }

  submitMedical(){
    let body = {
      "dateRequestMedical" : this.data.dateRequestMedical,
      "medicationType" : this.data.medicationType,
      "totalCostNominal" : this.data.totalCostNominal,
      "totalCostReimburse" : this.data.totalCostReimburse,
      "proofAttach" : this.data.proofAttach
    }

    Resource.editMedical(body, this.data.id)
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
      dateRequestMedical : "",
      medicationType : "",
      totalCostNominal : "",
      totalCostReimburse : "",
      proofAttach : ""
      
    })
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={myStyle.form} 
          value={this.state.dateRequestMedical}
          onChangeText={(dateRequestMedical) => this.setState({dateRequestMedical})}
          placeholder="dateRequestMedical"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.medicationType}
          onChangeText={(medicationType) => this.setState({medicationType})}
          placeholder={"medicationType"}
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.totalCostNominal}
          onChangeText={(totalCostNominal) => this.setState({totalCostNominal})}
          placeholder="totalCostNominal"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.totalCostReimburse }
          onChangeText={(totalCostReimburse ) => this.setState({totalCostReimburse })}
          placeholder="totalCostReimburse "
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.proofAttach}
          onChangeText={(proofAttach) => this.setState({proofAttach})}
          placeholder="proofAttach"
        />
        
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitMedical()}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}