import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Storage} from '../utils/Storage';
import FText from '../component/FText';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: Props) => {
  const dimensions = Dimensions.get('window');

  const getDataPrefs = async () => {
    try {
      const retrievedData = await Storage.getItem<boolean>(
        Storage.KEY_FIRST_LOAD,
      );
      navigation.replace(retrievedData !== null ? 'Login' : 'Login');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await getDataPrefs();
      clearTimeout(timeoutId);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        resizeMode="cover"
        style={{
          width: (56 * dimensions.width) / 414,
          height: (56 * dimensions.width) / 414,
          borderRadius: (56 * dimensions.width) / 414,
        }}
      />
      <FText typo="largeTitle" style={{paddingLeft: 16}}>
        React Core
      </FText>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
