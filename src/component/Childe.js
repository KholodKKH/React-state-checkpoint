

import '../App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from "../images/profile.jpg";
import {Card} from "react-bootstrap";

class Childe extends React.Component {
    state = {
      Person: {
        fullName: "Kholod Khaled Hamza",
        bio: " I was born in 16/7/1992,Graduated from the University of Tripoli/Faculty of Science-Computer Department,I work in systems engineering,Optical company managerI worked as the Director of Personnel Affairs at Suha Al-Hasnaa Beauty Center",
        imgSrc: profile,
        profession: "I am a Systems Engineer",
      },
      sum: 0,
    };
    componentDidMount() {
      this.timerID = setInterval(() => {
        this.setState({
          ...this.state,
          sum: this.state.sum + 1,
        });
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    render() {
      return (
        <div className="mycard">
        <Card style={{ width: '18rem' }}>
          <img variant="top" src={this.state.Person.imgSrc} alt ="test"/>
          <Card.Body>
            <Card.Title>{this.state.Person.fullName}{" "}</Card.Title>
            <Card.Title>{this.state.Person.profession}</Card.Title>
            <Card.Title>{this.state.sum}</Card.Title>
          </Card.Body>
        </Card>
        {/* my Card bio Part */}
        <Card style={{ width: "500px" , hight: "200px" }}>
          <Card.Body>{this.state.Person.bio}</Card.Body>
        </Card>
        </div>
        );
         }
          }
    export default Childe;

