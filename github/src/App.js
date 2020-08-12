import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png'
import CardList from './components/CardList'


let users=["jaybrennan"]
const Instructors = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell',`kempie1`, 'AnastasiiaaaaM', 'DmitriyNoa'];
class App extends Component {

  constructor() {
    super();
    this.state = {
      people:[]
    };
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/jaybrennan/followers`)
  .then(res=>
    {
      res.data.map(user=>{
        users=[...users,user.login]
      })
      console.log(users)
      users.map(person=>{
        axios
      .get (`https://api.github.com/users/${person}`)
      .then(res => {

        let person={
          img:res.data.avatar_url,
          name:res.data.name,
          username:res.data.login,
          followers:res.data.followers,
          following:res.data.following,
          id:res.data.id,
          link:res.data.html_url
        }
        this.setState({
        people: [...this.state.people, person]

        })
      })
      .catch(err => {console.log(err)})
    })
})
}
  render(){
  return (
    <div className="App">
      <header>
  </header>
  <body>
    <div class="container">
      <div class="header">
        <img src={lambdalogo} alt="Lambda Logo" style={{ width: 64}}/>
        <p>❤️'s</p>
        <img src={githublogo} alt="GitHub Logo" style={{ width: 64}}/>
      </div>
      <div className="MyInfo">
        <h1>Me and my Followers</h1>
      </div>
      <div class="cards"></div>
      <CardList people={this.state.people}/>
    </div>
  </body>
    </div>
  );
}}
export default App;