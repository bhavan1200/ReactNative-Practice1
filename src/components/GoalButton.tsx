import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';

interface GoalButtonProps {
    addGoalHandler: () => null | undefined
}

const GoalButton = (props: GoalButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={props.addGoalHandler}>
          <Text>Add </Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 46,
        height: 46,
        backgroundColor: '#eb4034',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
      },
})

export default GoalButton