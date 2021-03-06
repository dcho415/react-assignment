import React, { Component } from 'react'

export class Form extends Component {

    isOneWay = (isReturn) => {
        if (isReturn) {
            return (
                <div>
                    <label>Return Date: </label>
                    <input 
                        type="date"
                        name="retDate"
                        className="form-control"
                        onChange={this.props.onChange}    
                        required   
                    />
                </div>
            );
        } else {
            return;
        }
    }

    render() {
        return (
            <form id='myForm' onSubmit={this.props.onSubmit} style={{ padding: '20px' }}> 
                    <div>
                        <input 
                            type="text" 
                            name="origin"
                            placeholder="Enter Origin City"
                            className="form-control"
                            onChange={this.props.onChange} 
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            name="dest"
                            placeholder="Enter Destination City"
                            className="form-control"
                            onChange={this.props.onChange} 
                            required
                        />
                    </div>
                    <div>
                        <label>Departure Date: </label>
                        <input 
                            type="date"
                            name="depDate"
                            className="form-control"  
                            onChange={this.props.onChange}
                            required
                        />
                    </div>
                    { this.isOneWay(this.props.isReturn) }
                    <div>
                        <label>Passengers: </label>
                        <input
                            type="number"
                            name="passengers"
                            className="form-control"
                            onChange={this.props.onChange}
                            min='1'
                            defaultValue='1'
                            required
                        />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
        )
    }
}

export default Form
