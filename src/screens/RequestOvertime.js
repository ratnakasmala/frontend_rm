import React, { Component } from 'react'
import { Text, Image, ScrollView, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Resource from '../network/Resource'
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown'


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

export default class RequestOvertime extends Component {

  constructor(props) {
    super(props)

    this.state = {
      typeOvertime: "",
      datenow: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      departement: "",
      group:"",
      projectName: "",
      requestTo: "",
      transportReimbursement: "",
      mealReimbursement: "",
      proofAttachment: ""

    }
  }

  submitOvertime() {
    let body = {
      "typeOvertime": this.state.typeOvertime,
      "datenow": this.state.datenow,
      "startTime": this.state.startTime,
      "finishTime": this.state.finishTime,
      "totalOvertime": this.state.totalOvertime,
      "departement": this.state.departement,
      "group": this.state.group,
      "projectName ": this.state.projectName,
      "requestTo": this.state.requestTo,
      "transportReimbursement": this.state.transportReimbursement,
      "mealReimbursement": this.state.mealReimbursement,
      "proofAttachment": this.state.proofAttachment
    }

    Resource.createOvertime(body)
      .then((res) => {
        this.resetForm();
        alert("Submit Successfully")
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }
  resetForm() {
    this.setState({
      typeOvertime: "",
      datenow: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      departement: "",
      group:"",
      projectName: "",
      requestTo: "",
      transportReimbursement: "",
      mealReimbursement: "",
      proofAttachment: ""

    })
  }

  render() {
    let data = [{
      value: 'Scrum Master',
    }, {
      value: "Accounting",
    }, {
      value: 'Art Director',
    }, {
      value: 'Graphic Design',
    }, {
      value: ' Technology Support',
    },{
      value:'Sales And Marketing',
    },{ 
      value:'Product Owner',
    },{
      value:'Human Resources'
    }];
    let group=[{
      value:' Software Tailor Group',
    },{
      value:'Enablement',
    },{
      value:'Mokki',
    },{
      value:'Brain Resources Group',
    },{
      value:'Loyalti Express',
    },{
      value:'Technology Support'
    }]
    let project = [{
      value: 'E-workplace Moonlay',
    }, {
      value: 'Optimal Harvesting of Forest Age Classes',
    }, {
      value: ' A Unified Analysis'

    }];
    
    let request = [{
      value: 'Yongkie Saputra',
    }, {
      value: 'Shellyana Sunargo',
    }, {
      value: 'Juliana',
    }, {
      value: 'Sam Smith Walker',

    }];
    let type_overtime = [{
      value: 'Reimbursement',
    }, {
      value: 'Quick Leave'

    }]
    return (
      <View style={{ marginTop: 10 }}>
        <ScrollView>
          <View style={{ text: { fontSize: 100, marginTop: 200 }, padding: 10 }}>
            <Text style={{ textAlign: "left", marginBottom: -25 }}>Type Overtime</Text>
            <Dropdown
              style={myStyle.form}
              data={type_overtime}
            />
          </View>
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
          <Text style={{ textAlign: "left", marginLeft: 10 }}>Start Time</Text>
          <DatePicker
            style={{ width: 350, backgroundColor: "#EFEFEF" }}
            date={this.state.start_time}
            mode="time"
            format="H:mm"
            placeholder="H:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => { this.setState({ start_time: date }) }}
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
          />
          <Text style={{ textAlign: "left", marginLeft: 10 }}>Finish Time</Text>
          <DatePicker
            style={{ width: 350, backgroundColor: "#EFEFEF" }}
            date={this.state.finish_time}
            mode="time"
            format="H:mm"
            placeholder="H:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => { this.setState({ finish_time: date }) }}
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
          />
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text style={{ textAlign: "left", marginBottom: -25 }}>Departemen</Text>
            <Dropdown
              style={myStyle.form}
              data={data}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text style={{ textAlign: "left", marginBottom: -25 }}>Group</Text>
            <Dropdown
              style={myStyle.form}
              data={group}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text style={{ textAlign: "left", marginBottom: -25 }}>Project Name</Text>
            <Dropdown
              style={myStyle.form}
              data={project}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text style={{ textAlign: "left", marginBottom: -25 }}>Request To</Text>

            <Dropdown
              style={myStyle.form}
              data={request}
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Transport Reimbursement </Text>
            <TextInput
              style={myStyle.form}
              placeholder="IDR"
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Meal Reimbursement </Text>
            <TextInput
              style={myStyle.form}
              placeholder="IDR"
            />
          </View>
          <View style={{ text: { fontSize: 100, marginTop: 10 }, padding: 10 }}>
            <Text>Proof Attachment</Text>
          </View>
          <Image
            source={require('E:/MATERI KULIAH/semester 7/Kerja Praktek/ReactNavigationReimbursement/frontend/React_Reimbursement-Front-End/src/assets/images/camera.png')}
            style={{
              width: 40, height: 40, justifyContent: 'center', flex: 5, marginLeft: 10,
              flexDirection: 'row',
            }}
          />
          <View style={styles.container}>
            <TouchableOpacity style={styles.submit} onPress={() => this.submitOvertime()}>
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

