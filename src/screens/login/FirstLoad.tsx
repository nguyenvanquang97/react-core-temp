import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../component/FText';
import FTextInput from '../../component/FTextInput';

const FirstLoad = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 200}}>
        <FText typo="largeTitle">Chào mừng bạn đến với Ebig.co</FText>
        <FTextInput
          label={'Day la text field'}
          value={''}
          onClear={() => {}}
          onChangeText={() => {}}
        />
      </View>
    </View>
  );
};

export default FirstLoad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 59,
    paddingHorizontal: 16,
    
  },
});
