import React from "react";

class Mounting extends React.Component {
  state = {
    usersdata: [],
  };

  getUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ usersdata: data });
  };

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    console.log(this.state.usersdata);
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usersdata.map((val) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Mounting;
