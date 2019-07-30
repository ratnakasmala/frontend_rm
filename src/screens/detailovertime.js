import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default class detailovertime extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <View>
        <View style={{ padding: 20 }}>
          <Text>TypeOvertime: {this.data.typeOvertime}</Text>
          <Text>DateOvertime: {this.data.dateOvertime}</Text>
          <Text>StartTime: {this.data.startTime}</Text>
          <Text>FinishTime: {this.data.finishTime}</Text>
          <Text>TotalOvertime: {this.data.totalOvertime}</Text>
          <Text>DepartementOrGroup: {this.data.departementOrGroup}</Text>
          <Text>ProjectName: {this.data.projectName}</Text>
          <Text>RequestTo: {this.data.requestTo}</Text>
          <Text>TransportReimbursement: {this.data.transportReimbursement}</Text>
          <Text>MealReimbursement: {this.data.mealReimbursement}</Text>
          <Text>ProofAttachment: {this.data.proofAttachment}</Text>
        </View>

        <View style={styles.multiButtonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("EditovertimeScreen")} raised icon={{ name: 'av-timer' }} title='Edit'
          />
          <Button color="#ff0000"
            onPress={() => this.props.navigation.navigate("EditovertimeScreen")} raised icon={{ name: 'av-timer' }} title='Cancel'
          />
        </View>
      </View>

    )
  }
}