import React, { Component } from 'react'
import Resource from '../network/Resource'
import { Text, Image,ScrollView, TouchableOpacity, StyleSheet, TextInput, View } from 'react-native'
import DatePicker from 'react-native-datepicker'


const styles = StyleSheet.create({
  submit: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#228b22',
    marginRight: 30,
    borderRadius: 8
  },
  cancel: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#8b0000',
    borderRadius: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
const myStyle = StyleSheet.create({
  form: {
    borderColor: "#EFEFEF",
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
})


export default class RequestMedical extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dateRequestMedical: "",
      medicationType: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      proofAttachment:""
    }
  }

  submitMedical() {
    let body = {
      "datenow": this.state.datenow,
      "medicationType": this.state.medicationType,
      "totalCostNominal": this.state.totalCostNominal,
      "totalCostReimburse": this.state.totalCostReimburse,
      "proofAttachment":this.state.proofAttachment
    }

    Resource.createMedical(body)
      .then((res) => {
        this.resetForm();
        alert(JSON.stringify(res));
        alert("Submit Successfully")
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }
  resetForm() {
    this.setState({
      dateRequestMedical: "",
      medicationType: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      proofAttachment:""
    })
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <ScrollView>
          <Text style={{ textAlign: "left", marginLeft: 10 }}>Date</Text>
          <DatePicker
            style={{ width: 350, backgroundColor: "#EFEFEF" }}
            date={this.state.datenow}
            mode="date"
            placeholder="YYYY-MM-DD"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2100-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 10
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(datenow) => { this.setState({ datenow: datenow }) }}
          />
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Medication Type </Text>
            <TextInput
              style={myStyle.form}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Total Cost Nominal </Text>
            <TextInput
              style={myStyle.form}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Total Cost Reimbursement</Text>
            <TextInput
              style={myStyle.form}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Proof Attachment</Text>
          </View>
          <Image
            source={require('E:/MATERI KULIAH/semester 7/Kerja Praktek/ReactNavigationReimbursement/frontend/React_Reimbursement-Front-End/src/assets/images/camera.png')}
            style={{ width: 40, height: 40, marginLeft: 10 }}
          />

          <View style={styles.container}>
            <TouchableOpacity style={styles.submit}onPress={() => this.submitMedical()}>
              <Text>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}