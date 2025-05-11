import React from "react";

class UpdatingPhase extends React.Component {
  state = {
    usersdata: [],
    pageNumber: 1,
  };

  getDummyUsersdata = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "62aaa5384fa1b82bf9c9569c",
        },
      }
    );
    const { data } = await response.json();

    this.setState({ usersdata: data });
  };

  componentDidMount() {
    this.getDummyUsersdata();
  }

  handleButtonClicked = (num) => {
    this.setState({ pageNumber: num });
  };

  componentDidUpdate(prevsProps, prevsState) {
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getDummyUsersdata();
    }
  }

  handleCardClick = async (id) => {
    console.log(id);
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: "GET",
      headers: {
        "app-id": "62aaa5384fa1b82bf9c9569c",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  render() {
    return (
      <div>
        {this.state.usersdata.length > 0 ? (
          <React.Fragment>
            <div className="container mt-4">
              <div className="row">
                {this.state.usersdata.map((user) => (
                  <div className="col-md-6">
                    <div
                      className="card p-5 mt-4"
                      key={user.id}
                      onClick={() => this.handleCardClick(user.id)}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={user.picture}
                            alt="picture_title"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-8 ps-2">
                          <p>{user.id}</p>
                          <strong>
                            {user.title} {user.firstName} {user.lastName}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                className="btn btn-info ms-3 mt-5"
                onClick={() => {
                  this.handleButtonClicked(num);
                }}
              >
                {num}
              </button>
            ))}
          </React.Fragment>
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default UpdatingPhase;
