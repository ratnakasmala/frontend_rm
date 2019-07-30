import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity, FlatList, Text, View, Image, Alert } from 'react-native';
import { Icon, Right,Card, CardItem, Left, Body, Thumbnail } from 'native-base'
// import { Button } from 'react-native-elements'
import Resource from '../network/Resource'


export default class indexBusinessTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true })

    Resource.getBusinessTrip()
      .then((res) => {
        this.setState({ loading: false, data: res.data })
      })
      .catch((err) => {
        alert(err)
      })
  }
  render() {
    return (
      <View>
       <Card style={{ borderRadius: 20, backgroundColor : "#228b22"}}>
          <CardItem bordered button onPress={() => this.props.navigation.navigate("RequestBusinessTripScreen")} style={{ height: 70 }}>
            <Left>
              <Thumbnail source={require("../assets/images/button.png")} />
              <Body>
                <Text>Request</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}

          data={this.state.data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailbusinesstripScreen",
                {
                  data: this.state.data[index]
                })
            }}>

              <View style={{ marginBottom: 20, padding: 20, borderBottomColor: "#aaa", borderBottomWidth: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text>{item.dateBusinessTrip}</Text>
                  <Text>{item.from}</Text>
                  <Text>{item.to}</Text>
                </View>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
                  this.props.navigation.navigate("EditbusinesstripScreen", {
                    data: this.state.data[index]
                  })
                }}>
                  <View style={{ backgroundColor: "#2ecc71", padding: 5, justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 15 }}>
                    <Image style={{ width: 13, height: 13, tintColor: "#FFF" }} source={require("../assets/images/edit.png")} />
                  </View>
                </TouchableOpacity>

              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}