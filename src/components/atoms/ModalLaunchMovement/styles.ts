import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';
import { useStore } from '../../../store/useStore';

export const ComponentStyles = () => {
  const { toLaunchMovement } = useStore();
  return StyleSheet.create({
    backView: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0, 0.5)',
      position: 'absolute',
      display: `${toLaunchMovement ? 'flex' : 'none'}`,
    },
    frontView: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    modalView: {
      backgroundColor: THEME.COLORS.CARD.BACKGROUND_THIRTY,
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      padding: 10,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,
    },
    flatList: {
      borderTopColor: THEME.COLORS.BACKGROUND_APP,
      borderTopWidth: 1,
      borderBottomColor: THEME.COLORS.BACKGROUND_APP,
      borderBottomWidth: 1,
    },
    headerDelete: {
      width: 30,
      textAlign: 'left',
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.SM,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerDate: {
      width: 70,
      fontSize: THEME.TEXT.SM,
      color: THEME.COLORS.TEXT_DARK,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerCategory: {
      flex: 1,
      fontSize: THEME.TEXT.SM,
      color: THEME.COLORS.TEXT_DARK,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerValue: {
      fontSize: THEME.TEXT.SM,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
      color: THEME.COLORS.TEXT_DARK,
      flex: 1,
      maxWidth: 70,
      textAlign: 'right',
    },
    textTitle: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.MD,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    body: {
      justifyContent: 'center',
      height: 600,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: THEME.COLORS.BACKGROUND_APP,
    },
    table: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      marginTop: 5,
      paddingTop: 5,
      borderRadius: 10,
      marginBottom: 5,
      color: THEME.COLORS.TEXT_DARK,
    },
    buttons: {
      width: 25,
      justifyContent: 'flex-start',
      marginRight: 5,
    },
    date: {
      width: 75,
      color: THEME.COLORS.TEXT_DARK,
    },
    category: {
      flex: 1,
      color: THEME.COLORS.TEXT_DARK,
    },
    value: {
      width: 80,
      textAlign: 'right',
      color: THEME.COLORS.TEXT_DARK,
    },
  });
};
