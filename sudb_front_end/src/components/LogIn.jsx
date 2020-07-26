import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      username: "",
      password: "",
      loginErrors: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleLogin = (event) => {
    console.log("submit ran");
    event.preventDefault();
    fetch(this.props.baseURL + "/users/login", {
      method: "GET",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          user: resJson.username,
          username: "",
          password: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(event) => this.handleLogin(event)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
            ref={(node) => (this.username = node)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            ref={(node) => (this.password = node)}
          />
          <br />
          <input type="submit" />
        </form>
        <p> Not Signed up? <a href='/users'>Click Here</a></p>

      </div>
    );
  }
}
