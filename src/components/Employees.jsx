function Employees(props) {
    return (
        <table class="table">
            <thead>
                <tr>

                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
                </tr>
            </tbody>
        </table>
    )}


export default Employees;