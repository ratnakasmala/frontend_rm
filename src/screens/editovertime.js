import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
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

export default class editovertime extends Component {

  constructor(props) {
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      typeOvertime: this.data.typeOvertime,
      dateOvertime: this.data.dateOvertime,
      startTime: this.data.startTime,
      finishTime: this.data.finishTime,
      totalOvertime: this.data.totalOvertime,
      departementOrGroup: this.data.departementOrGroup,
      projectName: this.data.projectName,
      requestTo: this.data.requestTo,
      transportReimbursement: this.data.transportReimbursement,
      mealReimbursement: this.data.mealReimbursement,
      proofAttcahment: this.data.proofAttcahment


    }
  }

  submitTask() {
    let body = {
      "typeOvertime": this.state.typeOvertime,
      "dateOvertime": this.state.dateOvertime,
      "startTime": this.state.startTime,
      "finishTime": this.state.finishTime,
      "totalOvertime": this.state.totalOvertime,
      "departementOrGroup": this.state.departementOrGroup,
      "projectName": this.state.projectName,
      "department": this.state.department,
      "requestTo": this.state.requestTo,
      "transportReimbursement": this.state.transportReimbursement,
      "mealReimbursement": this.state.mealReimbursement,
      "projectName": this.state.proofAttcahment


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

  resetForm() {
    this.setState({
      typeOvertime: "",
      dateOvertime: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      departementOrGroup: "",
      projectName: "",
      requestTo: "",
      transportReimbursement: "",
      mealReimbursement: "",
      proofAttcahment: ""

    })
  }

  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput
          style={myStyle.form}
          value={this.state.typeOvertime}
          onChangeText={(typeOvertime) => this.setState({ typeOvertime })}
          placeholder="typeOvertime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.dateOvertime}
          onChangeText={(dateOvertime) => this.setState({ dateOvertime })}
          placeholder={"dateOvertime"}
        />
        <TextInput
          style={myStyle.form}
          value={this.state.startTime}
          onChangeText={(startTime) => this.setState({ startTime })}
          placeholder="startTime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.finishTime}
          onChangeText={(finishTime) => this.setState({ finishTime })}
          placeholder="finishTime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.totalOvertime}
          onChangeText={(totalOvertime) => this.setState({ totalOvertime })}
          placeholder={"totalOvertime"}
        />
        <TextInput
          style={myStyle.form}
          value={this.state.departementOrGroup}
          onChangeText={(departementOrGroup) => this.setState({ departementOrGroup })}
          placeholder="departementOrGroup"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.projectName}
          onChangeText={(projectName) => this.setState({ projectName })}
          placeholder="projectName"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.requestTo}
          onChangeText={(requestTo) => this.setState({ requestTo })}
          placeholder={"requestTo"}
        />
        <TextInput
          style={myStyle.form}
          value={this.state.transportReimbursement}
          onChangeText={(transportReimbursement) => this.setState({ transportReimbursement })}
          placeholder="transportReimbursement"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.mealReimbursement}
          onChangeText={(mealReimbursement) => this.setState({ mealReimbursement })}
          placeholder={"mealReimbursement"}
        />
        <TextInput
          style={myStyle.form}
          value={this.state.proofAttcahment}
          onChangeText={(proofAttcahment) => this.setState({ proofAttcahment })}
          placeholder="proofAttcahment"
        />

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.submitTask()}>
          <View style={{ backgroundColor: "#F7CA18", padding: 10 }}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}