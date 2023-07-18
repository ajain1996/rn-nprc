import React from 'react'

import { LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import * as Animatable from 'react-native-animatable';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Icon, Icons } from './Icon';

import MText from './Text';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { w } from '../utils';


const CELL_COUNT = 6;
interface CodeFieldProps {
  fieldRef?: any;
  value: string;
  setValue: (text: string) => void;
  // onChangeText: (text: string) => void
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  error?: string;
  secure: boolean;
}

export interface RenderCellOptions {
  symbol: string;
  index: number;
  isFocused: boolean;
}
interface CellProps extends RenderCellOptions {
  getCellOnLayoutHandler: (index: number) => void;
}

const CodeInput = ({
  fieldRef,
  value,
  setValue,
  secure,
  containerStyle,
  inputStyle,
  error,
}: CodeFieldProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const isError = error ? Colors.red : Colors.text;
  const OCircle = (
    <Icon type={Icons.FontAwesome} name="circle-o" color={isError} size={12} />
  )
  const Circle = (
    <Icon type={Icons.FontAwesome} name="circle" color={isError} size={14} />
  )
  const renderCell = ({ index, symbol, isFocused }: CellProps) => {
    let textChild = null;

    if (symbol) {
      textChild = secure ? Circle : symbol;
    } else if (isFocused) {
      textChild = secure ? OCircle : <Cursor />;
    }

    return (
      <View
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
        style={[styles.cellRoot, isFocused && styles.focusCell]}>
        <MText key={index} style={styles.cellText}>
          {textChild}
        </MText>
      </View>
    );
  }

  return (
    <View>
      <CodeField
        ref={fieldRef}
        // {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={[styles.codeFieldRoot, containerStyle]}
        textInputStyle={[styles.input, inputStyle]}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <Animatable.View
        animation="fadeIn"
        duration={300}
        style={Styles.alignCenter}>
        {!!error && <MText style={Styles.error}>{error}</MText>}
      </Animatable.View>
    </View>
  )
};

CodeInput.defaultProps = {
  // fieldRef: any,
  error: '',
  secure: false,
}

export default CodeInput

const styles = StyleSheet.create({
  codeFieldRoot: {
    width: '90%',
    marginHorizontal: Size.l,
  },
  cellRoot: {
    width: w(10.5),
    height: w(10.5),
    ...Styles.centered,
    borderWidth: Size.vs / 2,
    borderColor: Colors.gray4,
    borderRadius: Size.s / 2,
    // fontFamily: fonts.ProximaNova,//NotoSansSemiBold,
    fontSize: w(4),
    backgroundColor: Colors.background,
  },
  cellText: {
    fontSize: w(3.6),
    textAlign: 'center',
  },
  focusCell: {
    borderColor: Colors.text,
    borderWidth: Size.vs / 2,
  },
  input: {},
});
