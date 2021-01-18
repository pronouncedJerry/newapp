import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import styles from './styles'

const NewGame = () => (
  <View style={styles.container}>
    <View style={styles.keyboardawarescrollview}>
      <TextInput style={styles.input} placeholder="Player name" />
      <Button
        style={styles.button}
        title="Add Player"
        color="white"
        backgroundColor={colors.lightPurple}
      />
    </View>
  </View>
)

NewGame.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

NewGame.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default NewGame
