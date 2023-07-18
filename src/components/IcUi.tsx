import React from 'react'

import { useTheme } from '@react-navigation/native';

import { View, ViewStyle, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { Checkbox, ProgressBar, RadioButton } from 'react-native-paper';

import { SvgUri } from 'react-native-svg';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { Icon, Icons } from './Icon';
import MText from './Text';
import Row from './Row';
import { w } from '../utils';



type Props = {
  icon?: string;
  iconType?: Function;
  svg?: any;
  title: string;
  onPress?: () => void;
  selected?: boolean;
  boldText?: boolean;
  style?: ViewStyle;
  svgUri?: string;
}
export const SelectionButton = ({ icon, iconType, svg, svgUri, title, onPress, selected, boldText, style }: Props) => {
  const isIconExist = icon && iconType;
  // const iconContainer = isIconExist || svg || svgUri;
  const textStyles = isIconExist || svg || svgUri && { marginLeft: Size.s };
  const SvgIcon = svg;
  const selectedStyle = selected && styles.selectedStyles;
  const theme = useTheme()
  const selectedColor = selected ? Colors.primary : theme.colors.text
  return (
    <TouchableOpacity activeOpacity={0.7}
      onPress={onPress}
      style={[styles.btnContainer, selectedStyle, style]}>
      {isIconExist ? <Icon type={iconType} name={icon} /> :
        svg ? <SvgIcon /> :
          svgUri ? <SvgUri uri={svgUri} color={selectedColor} /> : null}
      <MText
        color={selectedColor}
        style={textStyles}>{title}</MText>
    </TouchableOpacity>
  )
}

interface NumberBoxProps {
  number: number;
  isFirst?: boolean;
  isLast: boolean;
  selected: boolean;
  onPress: () => void;
}
export const NumberBox = ({ number, isFirst, isLast, selected, onPress }: NumberBoxProps) => {
  const firstStyle = isFirst && styles.firstStyle;
  const lastStyle = isLast && styles.lastStyle;
  const selectedStyle = selected && styles.selectedStyles;
  const theme = useTheme()
  return (
    <Animatable.View animation={'fadeIn'}>
      <TouchableOpacity onPress={onPress}
        style={[styles.boxContainer, firstStyle, lastStyle, selectedStyle]}>
        <MText color={selected ? Colors.primary : theme.colors.text}
          marginTop={2}>{number}</MText>
      </TouchableOpacity>
    </Animatable.View>
  )
}

interface SectionProp {
  title?: string;
  children: React.ReactElement | React.ReactNode;
  Footer?: React.ReactElement | React.ReactNode;
  style?: ViewStyle;
  horizontal?: boolean;
}
export const Section = ({ title, horizontal, children, style, Footer }: SectionProp) => {
  return (
    <Animatable.View animation={'fadeIn'} style={styles.sectionWrapper}>
      {!!title && <MText>{title}</MText>}
      <View style={[horizontal && styles.sectionChild, style]}>
        {children}
      </View>
      {Footer && (Footer)}
    </Animatable.View>
  )
}

Section.defaultProps = {
  horizontal: true,
}

interface ToggleBtnProps {
  title: string;
  selected: boolean;
  setType: () => void;
}
export const ToggleBtn = ({ title, selected, setType }: ToggleBtnProps) => {
  const btnStyles = selected && styles.selectedToggleBtn;
  return (
    <TouchableOpacity onPress={setType}>
      <View style={[styles.toggleBtn, btnStyles]}>
        <MText>{title}</MText>
      </View>
    </TouchableOpacity>
  )
}

interface ListProps {
  data: Array<any>;
  renderItem: (item: any, index: number) => React.ReactElement;
}
export const MapList = ({ data, renderItem }: ListProps) => {
  if (data && data.length > 0) {
    return (
      <>
        {data.map((_: any, i: number) => (renderItem(_, i)))}
      </>
    )
  } else return null;
}

interface CheckMarkProps {
  reverse?: boolean;
  text: string;
  checked: boolean;
  onPress: () => void;
  style?: ViewStyle;
}
export const CheckMark = ({ text, checked, onPress, reverse, style }: CheckMarkProps) => {
  return (
    <Row style={[reverse ? styles.reverseRow : {}, style || {}]}>
      <TouchableWithoutFeedback
        onPress={onPress}>
        <View style={styles.checkmark}>
          {checked && <Icon type={Icons.Feather} name='check'
            color={Colors.primary}
            size={Size.l} />}
        </View>
      </TouchableWithoutFeedback>
      <MText marginHorizontal={reverse ? 0 : Size.s12}>{text}</MText>
    </Row>
  )
}

interface RadioButtonProps {
  text: string;
  value: string;
  checked: boolean;
  setChecked: Function;
}
export const RadioButtonUi = ({ checked, value, setChecked, text }: RadioButtonProps) => {
  return (
    <Row>
      <RadioButton.Android
        value={value}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
        color={Colors.primary}
      />
      <MText>{text}</MText>
    </Row>
  )
}

interface LoadingBarProps {
  loading: boolean;
  style?: ViewStyle;
}
export const LoadingBar = ({ loading, style }: LoadingBarProps) => {
  return (
    <View style={[styles.loader, style]}>
      {loading && <ProgressBar indeterminate color={Colors.primary} />}
    </View>
  )
}

export default {
  LoadingBar,
}

const styles = StyleSheet.create({
  btnContainer: {
    ...Styles.rowView,
    borderWidth: 1,
    borderColor: Colors.gray5,
    borderRadius: Size.xs,
    padding: Size.xs,
    marginRight: Size.s,
    marginBottom: Size.s,
  },
  sectionWrapper: {
    marginBottom: Size.ml,
  },
  sectionChild: {
    marginVertical: Size.s,
    ...Styles.rowView,
  },
  icon: {
    marginRight: Size.s,
  },
  boxContainer: {
    paddingVertical: Size.xs - 1,
    paddingHorizontal: Size.l,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: Colors.gray5,
    ...Styles.centered,
  },
  selectedStyles: {
    backgroundColor: Colors.primary50,
    borderColor: Colors.primary200,
  },
  firstStyle: {
    borderTopLeftRadius: Size.xs,
    borderBottomLeftRadius: Size.xs,
  },
  lastStyle: {
    borderRightWidth: 1,
    borderTopRightRadius: Size.xs,
    borderBottomRightRadius: Size.xs,
  },
  toggleBtn: {
    paddingHorizontal: Size.m,
    paddingVertical: Size.xs,
    borderRadius: Size.xl,
    ...Styles.centered,
    minWidth: w(24),
  },
  selectedToggleBtn: {
    backgroundColor: Colors.white,
    elevation: 4,
    shadowOffset: { width: 1, height: Size.vs },
    shadowColor: Colors.dark,
    shadowRadius: 1,
  },
  checkmark: {
    width: Size.ml,
    height: Size.ml,
    margin: Size.vs,
    borderRadius: Size.xs,
    backgroundColor: Colors.primary100,
    ...Styles.centered,
  },
  reverseRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%'
  },
  loader: {
    height: Size.vs,
  }
})