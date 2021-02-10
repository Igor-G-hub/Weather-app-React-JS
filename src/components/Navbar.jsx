import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        console.log(this.props.onError);
        return ( 
            <div className="row w-100 p-4 pb-5 m-auto mb-3">
                <div className="col-lg-6 col-sm-12 text-center">
                    <h1 className="title">Weather-app</h1>                          
                </div> 
                <div className="form-container col-lg-6 col-sm-12 pt-3 text-center" data-error={this.props.onError}>                     
                    <form className="region" onSubmit={(e) => this.props.changeWeather(e)}>
                        <input type="text" className="input" placeholder="Enter location..." onChange=
                        {(e) => {this.props.onChange(e.target.value)}} />                        
                    </form>
                </div>
            </div>

            
         );
    }
}
 
export default Navbar;