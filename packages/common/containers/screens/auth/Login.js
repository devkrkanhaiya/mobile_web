import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions, Button, TextInput } from 'react-native';
// import usersActions from '../../actions/users';
// import usersSelectors from '../../selectors/users';

const { height, width } = Dimensions.get('window')


class Login extends Component {








  render() {
    return (
      <View style={{ height: height }}>
        <Text>ddd</Text>

        <View style={{ height: height / 2 }}>

          <TextInput
            placeholder="Email"
          />

          <View style={{ marginHorizontal: 30 }}>
            <Button
              title="Press me"
            />

          </View>

        </View>
        {/* <View style={{ backgroundColor: 'red', height: '33%' }}>
          <Text>Hi for testing1</Text>
        </View>

        <View style={{ backgroundColor: 'green', flex: '33%' }}>
          <Text>Hi for testing2</Text>
        </View>

        <View style={{ backgroundColor: 'yellow', flex: '33%' }}>
          <Text>Hi for testing3 </Text>
        </View> */}

      </View>



    );
  }
}

const mapStateToProps = (state) => ({
  // users: usersSelectors.getUsersData(state),
});

const mapDispatchToProps = (dispatch) => ({
  // getUsers: () => dispatch(usersActions.getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
