import {DefaultTheme} from '@react-navigation/native';
import {TextStyle} from 'react-native/types';

interface FontStylesProps extends TextStyle {
  fontSize: number;
  fontWeight?: 'normal' | 'bold' | '400' | '500' | '600' | '700';
  letterSpacing?: number;
  lineHeight?: number;
  color?: string;
}

interface ColorsProps {
  primary: string;
  primarySub: string;
  primaryBackground: string;
  primaryBorder: string;

  secondary1: string;
  secondarySub1: string;
  secondaryBackground1: string;
  secondaryBorder1: string;

  secondary2: string;
  secondarySub2: string;
  secondaryBackground2: string;
  secondaryBorder2: string;

  secondary3: string;
  secondarySub3: string;
  secondaryBackground3: string;
  secondaryBorder3: string;

  secondary4: string;
  secondarySub4: string;
  secondaryBackground4: string;
  secondaryBorder4: string;

  border1: string;
  border2: string;

  info: string;
  infoSub: string;
  infoBackground: string;
  infoBorder: string;

  success: string;
  successSub: string;
  successBackground: string;
  successBorder: string;

  warning: string;
  warningSub: string;
  warningBackground: string;
  warningBorder: string;

  error: string;
  errorSub: string;
  errorBackground: string;
  errorBorder: string;

  white: string;
  grey1: string;
  grey2: string;
  disable: string;
  black: string;

  placeHolder: string;
  subtitle: string;
  body: string;
  label: string;
  title: string;
}

declare module '@react-navigation/native' {
  export interface DefaultTheme {
    dark: boolean;
    fonts: {
      largeTitle: FontStylesProps;
      title1: FontStylesProps;
      title2: FontStylesProps;
      title3: FontStylesProps;
      title4: FontStylesProps;
      title5: FontStylesProps;
      title6: FontStylesProps;

      bodyText1: FontStylesProps;
      bodyText2: FontStylesProps;

      buttonText1: FontStylesProps;
      buttonText2: FontStylesProps;
      buttonText3: FontStylesProps;
      buttonText4: FontStylesProps;
      buttonText5: FontStylesProps;

      subtitle1: FontStylesProps;
      subtitle2: FontStylesProps;
      subtitle3: FontStylesProps;
      subtitle4: FontStylesProps;

      label1: FontStylesProps;
      label2: FontStylesProps;
      label3: FontStylesProps;
      label4: FontStylesProps;
      label5: FontStylesProps;

      placeholder1: FontStylesProps;
      placeholder2: FontStylesProps;
    };
    colors: ColorsProps;
  }
}

const FTheme: DefaultTheme = {
  ...DefaultTheme,
  fonts: {
    largeTitle: {
      fontSize: 38,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 48,
      color: '#161C24',
    },
    title1: {
      fontSize: 24,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 32,
      color: '#161C24',
    },
    title2: {
      fontSize: 20,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 28,
      color: '#161C24',
    },
    title3: {
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 24,
      color: '#161C24',
    },
    title4: {
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0,
      lineHeight: 24,
      color: '#161C24',
    },
    title5: {
      fontSize: 14,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    title6: {
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },

    bodyText1: {
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 28,
      color: '#161C24',
    },
    bodyText2: {
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },

    buttonText1: {
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: 24,
      color: '#161C24',
    },
    buttonText2: {
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    buttonText3: {
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    buttonText4: {
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 0,
      lineHeight: 16,
      color: '#161C24',
    },
    buttonText5: {
      fontSize: 12,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 16,
      color: '#161C24',
    },

    subtitle1: {
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 24,
      color: '#161C24',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    subtitle3: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 16,
      color: '#161C24',
    },
    subtitle4: {
      fontFamily: 'Inter',
      fontSize: 1,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 14,
      color: '#161C24',
    },

    label1: {
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0,
      lineHeight: 24,
      color: '#161C24',
    },
    label2: {
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    label3: {
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    label4: {
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
    label5: {
      fontSize: 12,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 16,
      color: '#161C24',
    },

    placeholder1: {
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 28,
      color: '#161C24',
    },
    placeholder2: {
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 22,
      color: '#161C24',
    },
  },
  colors: {
    primary: '#366AE2',
    primarySub: '#4D7AE5',
    primaryBackground: '#EDF2FD',
    primaryBorder: '#BCCDF5',

    secondary1: '#FC6B03',
    secondarySub1: '#47D16C',
    secondaryBackground1: '#FFEDE1',
    secondaryBorder1: '#FEC49A',

    secondary2: '#3AAC6D',
    secondarySub2: '#40BF79',
    secondaryBackground2: '#E8F7EF',
    secondaryBorder2: '#C6ECD7',

    secondary3: '#DEA821',
    secondarySub3: '#E1B137',
    secondaryBackground3: '#FBF5E4',
    secondaryBorder3: '#F5E5BC',

    secondary4: '#AC67E4',
    secondarySub4: '#B87DE8',
    secondaryBackground4: '#F6EEFC',
    secondaryBorder4: '#E7D4F7',

    border1: 'rgba(0, 53, 128, 0.08)',
    border2: 'rgba(0, 53, 128, 0.2)',

    info: '#366AE2',
    infoSub: '#4D7AE5',
    infoBackground: '#EDF2FD',
    infoBorder: '#BCCDF5',

    success: '#39AC6D',
    successSub: '#40BF79',
    successBackground: '#E8F7EF',
    successBorder: '#C6ECD7',

    warning: '#FC6B03',
    warningSub: '#FD7A1C',
    warningBackground: '#FFF3EB',
    warningBorder: '#FED3B3',

    error: '#E14337',
    errorSub: '#E4584E',
    errorBackground: '#FCEEED',
    errorBorder: '#F5C0BC',

    white: '#FFFFFF',
    grey1: '#F2F5F8',
    grey2: '#E6EAF0',
    disable: '#CFD7E3',
    black: '#1C2530',

    placeHolder: 'rgba(22, 28, 36, 0.4)',
    subtitle: 'rgba(22, 28, 36, 0.6)',
    body: 'rgba(22, 28, 36, 0.8)',
    label: 'rgba(22, 28, 36, 0.9)',
    title: '#00204D',
  },
};

export default FTheme;
