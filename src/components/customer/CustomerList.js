import React, { Component } from 'react';
import axios from 'axios';

import CustomerItem from './CustomerItem';

export default class CustomersList extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axios.get('http://localhost:5481/customers/')
            .then(response => {
                this.setState({ customers: response.data });
            })
            .catch( error => {
                console.log('Get customers', error);
            });
    }

    renderCustomerList() {
        return this.state.customers.map((currentCustomer, i) => {
            return <CustomerItem customer={currentCustomer} key={i} />;
        })
    }

    render () {
        return (
            <div>
                <h3>Feature Toggle List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Enabled</th>
                            <th>CreatedBy</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderCustomerList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
