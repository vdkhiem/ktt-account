import React from 'react';
import {Link} from 'react-router-dom';


const renderFeatureToggleStatus = props => {
    if (props.featureToggle.enabled) {
        return (<span className="glyphicon glyphicon-search">True</span>);
    }
    
    return (<span className="glyphicon glyphicon-search" aria-hidden="true">False</span>);
}
const FeatureToggleItem = props => (
    <tr>
        <td>{props.featureToggle.description}</td>
        <td>{renderFeatureToggleStatus(props)}</td>
        <td>{props.featureToggle.createdBy}</td>
        <td>
            <Link to={"/edit/" + props.featureToggle._id}>Edit</Link>
        </td>
    </tr>
);

export default FeatureToggleItem;