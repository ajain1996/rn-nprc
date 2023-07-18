import React, { useRef } from 'react'

import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
} from 'react-native'

import Modal from 'react-native-modal'

import Button from './Button';

import MText from './Text';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { w } from '../utils';


interface ModalProps {
  visible: boolean;
  setVisible: Function;
  onSubmit?: () => void;
  onPressSecondaryButton?: () => void;
  buttonText?: string;
  title?: string;
  description?: string;
  image?: ImageSourcePropType;
  children?: React.ReactNode;
  showButton?: boolean;
  hideOnSubmit?: boolean;
  secondaryButtonText?: string;
  titleStyle?: TextStyle;
  titleContainerStyle?: ViewStyle;
  descStyle?: TextStyle;
  descContainerStyle?: ViewStyle;
  loading?: boolean;
  closeOnSubmit?: boolean;
  onCloseCallback?: () => void;
  topContainer?: React.ReactElement;
  primaryDisabled?: boolean;
  modalContainer?: ViewStyle;
}
const AppModal = ({
  children,
  visible,
  setVisible,
  image,
  onSubmit,
  buttonText,
  title,
  description,
  showButton,
  hideOnSubmit,//hide on press submit button, default: true
  secondaryButtonText,
  onPressSecondaryButton,
  titleStyle,
  titleContainerStyle,
  descStyle,
  descContainerStyle,
  loading,
  closeOnSubmit,//Preventing backdrop close, default: true
  onCloseCallback,
  topContainer,
  primaryDisabled,
  modalContainer,
}: ModalProps) => {
  const handleSubmit = () => {
    onSubmit && onSubmit();
    hideOnSubmit && onClose();
  };

  const handleSecondaryButton = () => {
    onPressSecondaryButton && onPressSecondaryButton();
    hideOnSubmit && onClose();
  };

  const onClose = () => {
    closeOnSubmit && setVisible(false)
    onCloseCallback && onCloseCallback()
  };

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      backdropOpacity={0.4}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      onBackdropPress={onClose}
      onDismiss={onClose}
      style={[styles.modalContainer, modalContainer]}>
      <View style={styles.modal}>
        <View style={Styles.tabIndicator} />
        {/* <ProgressBar indeterminate color={Colors.primary} /> */}
        {image && (
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.img} />
          </View>
        )}
        {topContainer}
        {!!title && <View style={[styles.titleContainer, titleContainerStyle]}>
          <MText style={[styles.title, titleStyle ? titleStyle : {}]}>{title}</MText>
        </View>}
        {children}
        {!!description &&
          <View style={[styles.descContainer, descContainerStyle]}>
            <MText style={[styles.text, descStyle ? descStyle : {}]}>{description}</MText>
          </View>
        }
        <View style={Styles.verticalMargin}>
          {showButton && (
            <Button loading={loading}
              disabled={loading || primaryDisabled}
              text={buttonText ? buttonText : "Proceed"}
              onPress={handleSubmit} />
          )}
          {secondaryButtonText && (
            <Button
              text={secondaryButtonText}
              onPress={handleSecondaryButton}
              style={Styles.marginTopMid}
              background={Colors.disabled}
            />
          )}
        </View>
      </View>
    </Modal>
  )
};

AppModal.defaultProps = {
  visible: false,
  // setVisible: ,
  // onSubmit: ,
  title: '',
  description: '',
  showButton: true,
  hideOnSubmit: true,
  closeOnSubmit: true,
  primaryDisabled: false,
}

export default AppModal

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    width: '100%',
    paddingHorizontal: Size.l + Size.xs,
    paddingBottom: Size.s,
    paddingTop: Size.xs,
    borderTopLeftRadius: Size.s,
    borderTopRightRadius: Size.s,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: Size.m + 1,
    // fontFamily: fonts.NotoSansMedium,
  },
  text: {
    color: Colors.subText,
    textAlign: 'center',
  },
  img: {
    width: w(30),
    height: w(30),
  },
  titleContainer: {
    marginBottom: Size.l,
    alignItems: 'center',
  },
  descContainer: {
    // marginBottom: Size.xs,
    alignItems: 'center',
  },
  imageContainer: {
    ...Styles.alignCenter,
    ...Styles.marginBottom,
    marginTop: Size.m,
  },
});
