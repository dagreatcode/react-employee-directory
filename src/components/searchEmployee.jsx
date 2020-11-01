import React, { Component } from 'react';
import API from "../utils/API";
import Employees from "./Employees";

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
                <div>
                    {this.state.results.map((employee) => (
                        <Employees
                        image={employee.picture.thumbnail}
                        name={employee.name.first + employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        dob={employee.dob.date}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default searchEmployee;