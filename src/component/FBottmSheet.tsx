import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import ActivityIndicator from 'react-native-paper/src/components/ActivityIndicator';
import FTheme from '../styles/FTheme';
import {Pulse, Bounce} from 'react-native-animated-spinkit';
import {SvgXml} from 'react-native-svg';

const avatar =
  '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="white"/><defs><radialGradient id="paint0_radial_5869_24798" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.655 11.7372) scale(46.4516 46.4616)"><stop stop-color="#54D5FF"/><stop offset="1" stop-color="#2700FF"/></radialGradient><radialGradient id="paint1_radial_5869_24798" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.655 11.7372) scale(46.4516 46.4616)"><stop stop-color="#54D5FF"/><stop offset="1" stop-color="#2700FF"/></radialGradient><radialGradient id="paint2_radial_5869_24798" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.655 11.7372) scale(46.4516 46.4616)"><stop stop-color="#54D5FF"/><stop offset="1" stop-color="#2700FF"/></radialGradient></defs><path d="M44.8861 18.8227H14.449C14.449 14.9986 17.5275 11.9194 21.3507 11.9194H44.8861V18.8227Z" fill="url(#paint0_radial_5869_24798)"/><path d="M44.8861 44.3993H21.3507C17.5275 44.3993 14.449 41.3202 14.449 37.4961H44.8861V44.3993Z" fill="url(#paint1_radial_5869_24798)"/><path d="M39.4244 31.6358H12.0657C10.1789 31.6358 8.63965 30.0962 8.63965 28.209C8.63965 26.3218 10.1789 24.7822 12.0657 24.7822H39.4244V31.6358Z" fill="url(#paint2_radial_5869_24798)"/></svg>';

interface FBottomSheetProps {
  isVisible: boolean;
  isLoading?: boolean;
  closeModal: () => void;
  children: ReactNode;
  style?: ViewStyle;
}

const FBottomSheet: React.FC<FBottomSheetProps> = ({
  isVisible,
  closeModal,
  children,
  style,
  isLoading = false,
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={isVisible ? 'rgba(0, 32, 77, 0.8)' : undefined}
      />
      <Modal
        avoidKeyboard={true}
        isVisible={isVisible}
        onBackdropPress={isLoading ? undefined : closeModal}
        onSwipeComplete={isLoading ? undefined : closeModal}
        backdropColor={FTheme.colors.title}
        backdropOpacity={0.8}
        swipeDirection={isLoading ? undefined : 'down'}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View
          /** block user interaction func */
          pointerEvents={isLoading ? 'none' : 'auto'}
          style={[
            styles.container,
            style,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.dotBTS}></View>
          </View>
          {children}
          {isLoading ? (
            <>
              <Pulse
                size={150}
                color={FTheme.colors.primary}
                style={{position: 'absolute'}}></Pulse>
              <Bounce
                size={80}
                color="rgba(54, 106, 226, 0.6)"
                style={{position: 'absolute'}}></Bounce>
              <ActivityIndicator
                size={60}
                color={FTheme.colors.primary}
                style={{position: 'absolute'}}
              />
              <SvgXml
                xml={avatar}
                width={50}
                height={50}
                style={{position: 'absolute'}}
              />
            </>
          ) : null}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: 'white',
  },
  dotBTS: {
    width: 32,
    height: 4,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 4,
    marginTop: 8,
  },
});

export default FBottomSheet;
