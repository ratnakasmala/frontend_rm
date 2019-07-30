import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
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
    marginBottom: 20
  },
})


export default class RequestQuickLeave extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datenow: "",
      start_time: "",
      finish_time: "",
      total_overtime: "",
      purpose: "",
      departement: "",
      group:'',
      project_name: "",
      request_to: "",
      note:""
    }
  }
  submitTask() {
    let body = {
      "datenow": this.state.datenow,
      "start_time": this.state.start_time,
      "finish_time": this.state.finish_time,
      "total_overtime": this.state.total_overtime,
      "purpose": this.state.purpose,
      "departement": this.state.departement,
      "group":this.state.group,
      "project_name": this.state.project_name,
      "request_to": this.state.request_to,
      "note":this.state.note
    }
    Resource.createTask(body)
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
      datenow: "",
      start_time: "",
      finish_time: "",
      total_overtime: "",
      purpose: "",
      departement: "",
      group:'',
      project_name: "",
      request_to: "",
      note:""
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
            <Text>Purpose </Text>
            <TextInput
              style={myStyle.form}
            />
          </View>
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
            <Text> Note </Text>
            <TextInput
              style={myStyle.form}
            />
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.submit}onPress={() => this.submitTask()}>
              <Text>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View >
    )
  }
}
