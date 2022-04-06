import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Keyboard,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import List from './src/components/List';
import GoalButton from './src/components/GoalButton';

const App = () => {
  const [enteredGoalText, setEnteredGoalRext] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
     setModalIsVisible(true)
  }

  const inputRef = useRef(null);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalRext(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText === '') {
      return null;
    } else {
      setCourseGoals(currentCourseGoals => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
      setEnteredGoalRext('')
      inputRef?.current?.blur();
    }
  };

  const deleteGoalHandler = () => {
    console.warn("Delete")
  }

  return (
    <KeyboardAvoidingView style={styles.appContainer}>
      <Button title='Add New Button' color={"black"} onPress={startAddGoalHandler}/>
     {modalIsVisible && <View style={styles.inputContainer}>
       <Modal animationType={'slide'}>
         <View>
         <TextInput
          style={styles.textInput}
          placeholder="Type Your Goals here"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          ref={inputRef}
          multiline={true}
        />
        <GoalButton addGoalHandler={addGoalHandler} />
         </View>
       
       </Modal>
        
      </View>}
      <View style={styles.goalsContainer}>
        <List courseGoals={courseGoals} deleteGoalHandler={deleteGoalHandler}/>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#eb4034',
    marginBottom: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
