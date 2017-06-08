import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'
import { employeeupdate } from '../actions'
import { Card, CardSection, Input, Button } from './common'


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Ble"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeupdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="0822299884"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeupdate({ prop: 'phone', value })}
                    />
                </CardSection>


                <CardSection style={{}}>
                    <Text style={styles.pickerTextStyle}>
                        Shift
                    </Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeupdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state, ownProps) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeupdate })(EmployeeCreate) 