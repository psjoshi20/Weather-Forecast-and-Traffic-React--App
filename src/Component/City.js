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
                        
                        <h3>Bootstrap Select Box</h3><br />
                        
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>City :</label>
                                    <select className="form-control" name="city" onChange={this.handleInputChange}>
                                        <option selected>Select City</option>
                                        <option value="1">city 1</option>
                                        <option value="2">city 2</option>
                                        <option value="3">city 3</option>
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