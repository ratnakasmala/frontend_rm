import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Resource from '../network/Resource'

const styles = StyleSheet.create({

  multiButtonContainer: {
    margin: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})


export default class detailquickleave extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <View>
        <View style={{ padding: 20 }}>
          <Text>DateQuickLeave: {this.data.dateQuickLeave}</Text>
          <Text>StartTime: {this.data.startTime}</Text>
          <Text>FinishTime: {this.data.finishTime}</Text>
          <Text>Purpose: {this.data.purpose}</Text>
          <Text>DepartementOrGroup: {this.data.departementOrGroup}</Text>       
          <Text>ProjectName: {this.data.projectName}</Text>
          <Text>RequestTo: {this.data.requestTo}</Text>
          <Text>Note: {this.data.note}</Text>
        </View>
        <View style={styles.multiButtonContainer}>
          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditquickleaveScreen", {
              data: this.state.data[index]
            })
          }}>
            <View style={{ backgroundColor: "#2ecc71", padding: 5, justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 15 }}>
              <Image style={{ width: 13, height: 13, tintColor: "#FFF" }} source={require("../assets/images/edit.png")} />
            </View>
          </TouchableOpacity>

          {/* <Button color="#ff0000"
            onPress={() => this.props.navigation.navigate("EditquickleaveScreen")} raised icon={{ name: 'av-timer' }} title='Cancel'
          /> */}
        </View>
      </View>

    )
  }
}