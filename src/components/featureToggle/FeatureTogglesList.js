import React, { Component } from 'react';
import axios from 'axios';

import FeatureToggleItem from './FeatureToggleItem';

export default class FeatureTogglesList extends Component {
    state = {
        featureToggles: []
    }

    componentDidMount() {
        axios.get('http://localhost:5481/featureToggles/')
            .then(response => {
                this.setState({ featureToggles: response.data });
            })
            .catch( error => {
                console.log('Get featureToggles', error);
            });
    }

    renderFeatureToggleList() {
        return this.state.featureToggles.map((currentFeatureToggle, i) => {
            return <FeatureToggleItem featureToggle={currentFeatureToggle} key={i} />;
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
                        { this.renderFeatureToggleList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
