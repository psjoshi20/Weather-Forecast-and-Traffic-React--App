import React from 'react'

class SelectBox extends React.Component{

    constructor(){
        super();
        this.state = {
            city:null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        
        this.setState({
            city: event.target.value
        });
        
    }    
        
    submit(){
        console.warn(this.state)
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>City :</label>
                                    <select className="form-control" name="city" onChange={this.handleInputChange}>
                                        <option selected>Select Area label_location</option>
                                        <option value="1">Ang Mo Kio</option>
                                        <option value="2">Bedok</option>
                                        <option value="2">Bishan</option>
                                        <option value="2">BoonLay</option>
                                        <option value="2">Bukit Timah</option>
                                        <option value="3">Changi</option>
                                        <option value="3">City</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        )  
    }
}

export default SelectBox;