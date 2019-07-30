
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import mainScreen from '../screens/main'


//Tampilan History dab Button Request
import indexBusinessTripScreen from '../screens/indexBusinessTrip'
import indexOvertimeScreen from '../screens/indexOvertime'
import indexMedicalScreen from '../screens/indexMedical'
import indexQuickLeaveScreen from '../screens/indexQuickLeave'

//Form/ Attribut yang tersedia
import RequestBusinessTripScreen from '../screens/RequestBusinessTrip'
import RequestQuickLeaveScreen from '../screens/RequestQuickLeave'
import RequestMedicalScreen from '../screens/RequestMedical'
import RequestOvertimeScreen from '../screens/RequestOvertime'

//Feature untuk empat Entity
import detailbusinesstripScreen from '../screens/detailbusinesstrip'
import detailquickleaveScreen from '../screens/detailquickleave'
import detailmedicalScreen from '../screens/detailmedical'
import detailovertimeScreen from '../screens/detailovertime'

import EditScreen from '../screens/edit'
import EditbusinesstripScreen from '../screens/editbusinesstrip'
import EditmedicalScreen from '../screens/editmedical'
import EditovertimeScreen from '../screens/editovertime'
import EditquickleaveScreen from '../screens/editquickleave'

import profileScreen from '../screens/profile'

const HeaderStyle = () => ({
  headerStyle: {
    backgroundColor: 'biru',
    textAlign: 'center',
    fontWeight: 'normal',
    padding:10
  },
  headerTintColor: 'hitam',
})

const MainTab = createMaterialTopTabNavigator({
  MainTab: {
    screen: mainScreen,
    navigationOptions: (props) => ({
      title: "Request Reimbursement",
    })
  }

});

export default Main = createStackNavigator({
  MainScreen: {
    screen: MainTab,
    navigationOptions: (props) => ({
      title: "Beranda",
    })
  },
 
  DetailbusinesstripScreen: {
    screen: detailbusinesstripScreen,
    navigationOptions: (props) => ({
      title: "Detailbusinesstrip",
    })
  },

  DetailmedicalScreen: {
    screen: detailmedicalScreen,
    navigationOptions: (props) => ({
      title: "Detailmedical",
    })
  },

  DetailovertimeScreen: {
    screen: detailovertimeScreen,
    navigationOptions: (props) => ({
      title: "Detailovertime",
    })
  },

  DetailquickleaveScreen: {
    screen: detailquickleaveScreen,
    navigationOptions: (props) => ({
      title: "Detailquickleave",
    })
  },

  
  IndexOvertimeScreen: {
    screen: indexOvertimeScreen,
    navigationOptions: (props) => ({
      title: "IndexOvertime",
    })
  },



  IndexMedicalScreen: {
    screen: indexMedicalScreen,
    navigationOptions: (props) => ({
      title: "IndexMedical",
    })
  },
  IndexBusinessTripScreen: {
    screen: indexBusinessTripScreen,
    navigationOptions: (props) => ({
      title: "IndexBusinessTrip",
    })
  },
  IndexQuickLeaveScreen: {
    screen: indexQuickLeaveScreen,
    navigationOptions: (props) => ({
      title: "IndexQuickLeave",
    })
  },

  RequestQuickLeaveScreen: {
    screen: RequestQuickLeaveScreen,
    navigationOptions: (props) => ({
      title: "RequestQuickLeave",
    })
  },

  RequestMedicalScreen: {
    screen: RequestMedicalScreen,
    navigationOptions: (props) => ({
      title: "RequestMedical",
    })
  },


  RequestOvertimeScreen: {
    screen: RequestOvertimeScreen,
    navigationOptions: (props) => ({
      title: "RequestOvertime",
    })
  },

  RequestBusinessTripScreen: {
    screen: RequestBusinessTripScreen,
    navigationOptions: (props) => ({
      title: "RequestBusinessTrip",
    })
  },
  EditScreen: {
    screen: EditScreen,
    navigationOptions: (props) => ({
      title: "Edit",
    })
  },

EditbusinesstripScreen: {
  screen: EditbusinesstripScreen,
  navigationOptions: (props) => ({
    title: "Editbusinesstrip",
  })
},
EditmedicalScreen: {
  screen: EditmedicalScreen,
  navigationOptions: (props) => ({
    title: "Editmedical",
  })
},
EditquickleaveScreen: {
  screen: EditquickleaveScreen,
  navigationOptions: (props) => ({
    title: "Editquickleave",
  })
},
EditovertimeScreen: {
  screen: EditovertimeScreen,
  navigationOptions: (props) => ({
    title: "Editovertime",
  })
}





},



  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: HeaderStyle,
  });
