import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFeatureToggle extends Component {
    state = {
        description: '',
        enabled: true,
        createdBy: '',
        createdOn: new Date(),
        updatedBy: '',
        updatedOn: new Date()
    }

    componentDidMount() {
        if (!this.props.match.params.id) return;
        axios.get('http://localhost:5481/featuretoggles/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    enabled: response.data.enabled,
                    updatedBy: response.data.updatedBy,
                    updatedOn: response.data.updatedOn
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeFeatureToggleDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeFeatureToggleEnabled(e) {
        this.setState({
            enabled: !this.state.enabled
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Feature Toggle Description: ${this.state.description}`);
        console.log(`Feature Toggle Enabled: ${this.state.enabled}`);


        if (this.props.match.params.id) {
            this.updateExistingFeatureToggle();
        } else {
            this.addNewFeatureToggle();
        }

        this.props.history.push('/');
    }


    addNewFeatureToggle() {
        const newFeatureToggle = {
            description: this.state.description,
            enabled: this.state.enabled,
            createdBy: '123456',
            createdOn: this.state.createdOn
        };

        axios.post('http://localhost:5481/featureToggles/add', newFeatureToggle)
            .then(res => console.log(res.data));

        this.setState({
            description: '',
            enabled: true,
            createdBy: '',
            createdOn: new Date(),
            updatedBy: '',
            updatedOn: new Date()
        });
    }

    updateExistingFeatureToggle() {
        const updateFeatureToggle = {
            description: this.state.description,
            enabled: this.state.enabled,
            updatedBy: '123457',
            createdOn: new Date()
        };
        axios.post('http://localhost:5481/featuretoggles/update/'+this.props.match.params.id, updateFeatureToggle)
            .then(res => console.log(res.data));
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Feature Toggle</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeFeatureToggleDescription.bind(this)}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    checked={this.state.enabled}
                                    onChange={this.onChangeFeatureToggleEnabled.bind(this)}
                                    />
                            <label className="form-check-label">Enable</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Save Feature Toggle" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}