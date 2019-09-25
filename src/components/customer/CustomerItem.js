import React from 'react';
import {Link} from 'react-router-dom';


const renderCustomerStatus = props => {
    if (props.customer.enabled) {
        return (<span className="glyphicon glyphicon-search">True</span>);
    }
    
    return (<span className="glyphicon glyphicon-search" aria-hidden="true">False</span>);
}
const CustomerItem = props => (
    <tr>
        <td>{props.customer.description}</td>
        <td>{renderCustomerStatus(props)}</td>
        <td>{props.customer.createdBy}</td>
        <td>
            <Link to={"/edit/" + props.customer._id}>Edit</Link>
        </td>
    </tr>
);

export default CustomerItem;