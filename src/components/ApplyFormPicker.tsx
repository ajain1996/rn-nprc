import React from 'react';
import { Image } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { w } from '../utils';
export default class ApplyFormPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: this.props.placeholderText || 'Tap to select..',
      selectedValue: this.props.selectedValue || '',
      pickerDisplayed: false,
      required: this.props.required,
      isPress: false,
      selectedIndex: -1,
      initialIndex: -1,
    };
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue,
      selectedValue: newValue?.name,
    });

    this.props.onDateSelected(newValue);

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed,
    });
  }

  showString(newValue) {
    this.setState({
      selectedValue: newValue,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {<Text style={styles.heading}>
          {this.props.heading}
          {this.props.required == true && (
            <Text style={{ ...styles.heading, color: '#FF0000' }}></Text>
          )}
        </Text>}
        <TouchableOpacity
          underlayColor="none"
          style={{ width: Size.wWidth / 1.1 }}
          onPress={() => {
            this.togglePicker();
          }}>
          <View style={styles.inputContainer}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: "400",
                color:
                  this?.state?.selectedValue?.length === 0 ? '#999' : '#000',
              }}>
              {this?.state?.selectedValue?.length === 0
                ? this.props.placeholderText
                : this?.state?.selectedValue}
              {/* <Text style={{...styles.heading, color: '#FF0000'}}>{'  '}*</Text> */}
            </Text>
            <View style={{ marginRight: 10 }}>
              <Image
                source={require('../assets/images/arrow-down.png')}
                style={{ width: 12, height: 12, tintColor: '#999' }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Modal
          visible={this.state.pickerDisplayed}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => {
            this.setState({
              pickerSelection: !this.state.pickerDisplayed,
            });
          }}>
          <TouchableHighlight
            style={{
              justifyContentL: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
              height: Size.wHeight,
            }}
            underlayColor="rgba(0,0,0,0.6)"
            onPress={() => this.togglePicker()}>
            <View
              style={[
                styles.modalStyle,
                {
                  height:
                    this?.props?.data?.length === 0
                      ? 250
                      : this.props.height
                        ? this.props.height
                        : 300,
                  width: this.props.width ? this.props.width : 220,
                },
              ]}>
              {this?.props?.data?.length === 0 ? (
                <View style={{
                  paddingHorizontal: 20, alignItems: 'center',
                  width: this.props.width ? this.props.width : 220,
                }}>
                  <Text style={{ color: 'grey' }}>No Data Found</Text>
                </View>
              ) : (
                <></>
              )}
              <ScrollView
                vertical={true}
                persistentScrollbar={true}
                showsVerticalScrollIndicator={true}
                style={{ width: '100%' }}>
                {this?.props?.data?.map((val, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      underlayColor={Colors.primary}
                      onHideUnderlay={() => {
                        this.setState({
                          isPress: false,
                        });
                      }}
                      onShowUnderlay={() => {
                        this.setState({
                          isPress: true,
                          selectedIndex: index,
                        });
                      }}
                      style={{
                        height: 45,
                        flex: 1,
                        paddingHorizontal: 12,
                        // paddingVertical: 10,
                        justifyContent: 'center',
                        backgroundColor:
                          this.state.initialIndex == index
                            ? Colors.primary
                            : '#fff',
                      }}
                      onPress={() => {
                        this.setPickerValue(val);
                        this.setState({
                          isPress: false,
                          initialIndex: this.state.selectedIndex,
                          selectedIndex: -1,
                        });
                      }}>
                      <Text
                        style={{
                          color:
                            (this.state.isPress &&
                              index == this.state.selectedIndex) ||
                              this.state.initialIndex == index
                              ? 'white'
                              : 'black',
                        }}>
                        {val.name}
                      </Text>
                    </TouchableHighlight>
                  );
                })}
              </ScrollView>

              <TouchableHighlight
                underlayColor={'#dcdcdc'}
                style={{
                  marginHorizontal: 5,
                  marginVertical: 0,
                  justifyContent: 'center',
                  padding: 8,
                }}
                onPress={() => this.togglePicker()}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                    alignItems: 'flex-end',
                    fontWeight: '700',
                    fontFamily: 'STCForward-Bold',
                  }}>
                  Cancel
                </Text>
              </TouchableHighlight>
            </View>
          </TouchableHighlight>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 8
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 8,
    width: '100%',
    height: w(12),
    fontSize: Size.s14,
    borderRadius: Size.s12,
    backgroundColor: '#F6F6F6',
    ...Styles.row_space,
    borderColor: Colors.gray4,
    borderWidth: 0,
  },
  heading: {
    marginTop: 0,
    fontSize: 14,
    color: '#000',
    fontWeight: "400"
  },
  modalStyle: {
    // margin: 20,
    padding: 8,
    backgroundColor: '#fff',
    bottom: 25,
    top: Size.wHeight / 4,
    borderRadius: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    elevation: 50,
    height: 300,
    borderWidth: 0.5,
    borderColor: 'lightgray'
  },
});
