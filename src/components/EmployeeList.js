import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, View, Text } from 'react-native'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(employees)
    }

    render() {
        return (
            <View>
                <Text>Emp List</Text>
                <Text>Emp List</Text>
                <Text>Emp List</Text>
                <Text>Emp List</Text>
                <Text>Emp List</Text>
                <Text>Emp List</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        const employees = _.map(state.employees, (val, uid) => {
            return { ...val, uid }
        })
    }
}

export default connect(null, { employeesFetch })(EmployeeList)