import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'

const Login = () => (
  <View style={styles.root}>
    <KeyboardAwareScrollView
      style={{ flex: 1, width: '100%' }}
      keyboardShouldPersistTaps="always"
    >
      <TextInput
        style={styles.input}
        value={{}}
        onChangeText={{}}
        placeholder="Email"
        onBlur={{}}
        autoCompleteType="username"
        placeholderTextColor="#aaaaaa"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={{}}
        onChangeText={{}}
        placeholder="Password"
        onBlur={{}}
        secureTextEntry
        placeholderTextColor="#aaaaaa"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={{}}>
        <Text style={styles.buttonTitle}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don&apos;t have an account?{' '}
          <Text onPress={{}} style={styles.footerLink}>
            Sign up
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  </View>
)

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Login.defaultProps = {
  navigation: { navigate: () => null },
}

export default Login
