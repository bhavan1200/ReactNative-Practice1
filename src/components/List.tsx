import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React from 'react'

interface ListProps {
    courseGoals: string[];
    deleteGoalHandler: () => void
}

const List = (props: ListProps) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressedItems} onPress={props.deleteGoalHandler}>
      <FlatList
          data={props.courseGoals}
          renderItem={itemData => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalsText}>{itemData.item}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        fontSize: 15,
        padding: 10,
        margin: 5,
        borderRadius: 7,
        backgroundColor: '#eb4034',
        width: '70%',
      },
      goalsText: {
        color: '#fff',
      },
      pressedItems: {
        opacity: 0.5
      }
})

export default List