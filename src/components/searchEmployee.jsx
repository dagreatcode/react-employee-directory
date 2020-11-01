import React, { Component } from 'react';
import API from "../utils/API";
// import Employee from "../views/Employee";

class searchEmployee extends Component {
    state = {
        // employees: [],
        search: "",
        result: [],
    }
    componentDidMount () {
        API.getEmployees()
        .then((res) => {
          this.setState({
            results: res.data.results,
          });
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    // handleInputChange = () => {};

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default searchEmployee;