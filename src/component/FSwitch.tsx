import {StyleSheet} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

type FSwitchProps = {
  status: boolean;
};

export default function FSwitch({status}: FSwitchProps) {
  const [isEnabled, setIsEnabled] = useState(status ? status : false);
  const toggleSwitch = () => setIsEnabled(status);

  useEffect(() => {
    setIsEnabled(status);
  }, [status]);
  Animatable.initializeRegistryWithDefinitions({
    moveRight: {
      0: {
        translateX: 0,
      },
      1: {
        translateX: 20,
      },
    },
    moveLeft: {
      0: {
        translateX: 20,
      },
      1: {
        translateX: 0,
      },
    },
  });
  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <Animatable.View
        style={[
          styles.switch,
          {backgroundColor: isEnabled ? '#1890FF' : '#cccccc'},
        ]}>
        <Animatable.View
          duration={400}
          animation={isEnabled ? 'moveRight' : 'moveLeft'}
          style={[styles.circle]}></Animatable.View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    width: 44,
    height: 24,
    backgroundColor: '#cccccc',
    borderRadius: 24,
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
  circle: {
    height: 22,
    width: 22,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
});
