import React from 'react';
import './App.css';

 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  //this is a function that will run when the component is mounted When its first created and fist put into our function.
  componentDidMount() {
    fetch('https://api.github.com/users/Kemberly-Eliscar')
    .then(res => res.json())
    .then(data => this.setState({ user: data }));
    fetch('https://api.github.com/users/Kemberly-Eliscar/followers')
    .then(res => res.json())
    .then(data => this.setState({ followers: data }));
  }

  //this will only run on the re-route
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
    <div className="App">
      <UserCard user={this.state.user} followers={this.state.followers} />
    </div>
    );
  }
}

function UserCard(props) {
  return (
    <div>
      <h2>{props.user.login}</h2>
      <p>{props.user.location}</p>
      <p>{props.user.url}</p>
      <div>
        {props.followers.map(followers => (
        <div key={followers.id}>{followers.login}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
