import React from 'react';
import Dialog from 'react-native-paper/src/components/Dialog/Dialog';
import Portal from 'react-native-paper/src/components/Portal/Portal';
import ActivityIndicator from 'react-native-paper/src/components/ActivityIndicator';
import {Pulse, Bounce} from 'react-native-animated-spinkit';
import DialogContent from 'react-native-paper/src/components/Dialog/DialogContent';
import FTheme from '../styles/FTheme';
import {SvgXml} from 'react-native-svg';
import {View} from 'react-native';

const avatar =
  '<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="white"/><defs><radialGradient id="paint0_radial_5869_24798" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.655 11.7372) scale(46.4516 46.4616)"><stop stop-color="#54D5FF"/><stop offset="1" stop-color="#2700FF"/></radialGradient><radialGradient id="paint1_radial_5869_24798" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.655 11.7372) scale(46.4516 46.4616)"><stop stop-color="#54D5FF"/><stop offset="1" stop-color="#2700FF"/></radialGradient><radialGradient id="paint2_radial_5869_24798" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.655 11.7372) scale(46.4516 46.4616)"><stop stop-color="#54D5FF"/><stop offset="1" stop-color="#2700FF"/></radialGradient></defs><path d="M44.8861 18.8227H14.449C14.449 14.9986 17.5275 11.9194 21.3507 11.9194H44.8861V18.8227Z" fill="url(#paint0_radial_5869_24798)"/><path d="M44.8861 44.3993H21.3507C17.5275 44.3993 14.449 41.3202 14.449 37.4961H44.8861V44.3993Z" fill="url(#paint1_radial_5869_24798)"/><path d="M39.4244 31.6358H12.0657C10.1789 31.6358 8.63965 30.0962 8.63965 28.209C8.63965 26.3218 10.1789 24.7822 12.0657 24.7822H39.4244V31.6358Z" fill="url(#paint2_radial_5869_24798)"/></svg>';
interface FLoadingProps {
  visible: boolean;
  loadFullScreen?: boolean;
}

const FLoading: React.FC<FLoadingProps> = ({visible, loadFullScreen = true}) =>
  loadFullScreen ? (
    <Portal>
      <Dialog
        visible={visible}
        dismissable={false}
        // dismissableBackButton={false}
        style={{
          height: 0,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: 'transparent',
        }}>
        <DialogContent
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
        </DialogContent>
      </Dialog>
    </Portal>
  ) : (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
    </View>
  );

export default FLoading;
