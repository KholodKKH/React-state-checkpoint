
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container,Carousel,Form,Button,Card,CardGroup} from "react-bootstrap";
import covera from "./images/covera.jpg";
import coverb from "./images/coverb.webp";
import coverc from "./images/coverc.jpg";
import blue from "./images/blue.webp";
import zero from "./images/zero.webp";
import silver from "./images/silver.webp";
import nitro from "./images/nitro.jpg";
import gold from "./images/gold.jpg";
import white from "./images/white.jpg";
import form from "./images/form.jpg";
import Childe from "./component/Childe";
class App extends React.Component {
  state = {
    show: false,
  };
  handleshow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {

  return (
    <div className="App">
 {/* Nabar Part */}
 <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PEPSI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">VIEW PRODUCTS</Nav.Link>
            <Nav.Link href="#features">WHAT'S NEW</Nav.Link>
            <Nav.Link href="#pricing">NEWSLETTER</Nav.Link>
            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
      {/* image Part */}
      <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100"
          src={covera}/>
        <Carousel.Caption>
          <h2>Chocolate Pepsi</h2>
          <p><h4>The drink not only contains cocoa flavor but a hint of marshmallow,too.</h4></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src={coverb}/>
        <Carousel.Caption>
          <h3>Launches Maple Syrup Pepsi</h3>
          <p><h5>These are just for the USA-based consumers and will not be available at any retailer store.</h5></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src={coverc}/>
        <Carousel.Caption>
          <h2>Blue Pepsi </h2>
          <p><h4> After nearly 20 years, Pepsi Blue to return to shelves.</h4></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* Cards Part */}
    <div className="cards">
    <CardGroup>

      <Card>
        <Card.Img variant="top" src={blue}/>
        <Card.Body>
          <Card.Title style={{ color: "#FF3366" }}>PEPSI</Card.Title>
          <Card.Text>Pepsi-the bold,refreshing, robust cola</Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={silver} />
        <Card.Body>
          <Card.Title style={{ color: "#20A4F3" }}>DIET PEPSI</Card.Title>
          <Card.Text>With its light, crisp taste, Diet Pepsi gives you all the refreshment you need - with zero sugar,
            zero calories and zero carbs.</Card.Text>
        </Card.Body>
      </Card>

    <Card>
        <Card.Img variant="top" src={white}/>
        <Card.Body>
          <Card.Title style={{ color: "#FF3366" }}>CAFFEINE FREE DIET PEPSI</Card.Title>
          <Card.Text>
          With its light, crisp taste, Diet Pepsi gives you all the refreshment you need -
           with zero sugar, zero calories and zero carbs.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={gold} />
        <Card.Body>
          <Card.Title style={{ color: "#20A4F3" }}>PEPSI CAFFEINE FREE</Card.Title>
          <Card.Text>Caffeine Free Pepsi great Pepsi taste without the caffeine</Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={zero} />
        <Card.Body>
          <Card.Title style={{ color: "#FF3366" }}>PEPSI ZERO SUGAR</Card.Title>
          <Card.Text>Pepsi Zero Sugar is the only soda with zero calories and maximum Pepsi taste</Card.Text>
        </Card.Body>
      </Card>
     
      <Card>
        <Card.Img variant="top" src={nitro} />
        <Card.Body>
          <Card.Title style={{ color: "#20A4F3" }}>NITRO PEPSI VANILLA</Card.Title>
          <Card.Text>
          Nitro Pepsi is the first-ever nitrogen-infused cola that is smooth, creamy, and easy-to-drink.          </Card.Text>
        </Card.Body>
      </Card>
  
    </CardGroup>
    </div>
    {/* form Part */}
    <div className="form">
    <div className="img">
          <img src={form} width="500" height="400px" alt="Third slide"/></div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" onClick={this.handleshow}>
        Go
      </Button>
    </Form>
    </div>
    {/* My Cv Cards */}
   {this.state.show === true ? <Childe /> : null}
    {/* footer Part */}
    <footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">ABOUT US </h5>
              <p>
              My Story :- I decided one day that I would open a store and sell original products
             at a price much lower than the market and bring them from abroad and help customers.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address : Kholodhamza875@gmail.com</a>
                </li>
                <li>
                  <a href="#!"> Almadar Phone Number : 00218915214045</a>
                </li>
                <li>
                  <a href="#!"> Libyan Phone Number  : 00218925214045</a>
                </li>
                <li>
                  <a href="#!">Address : Tripoli/Libya</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
}
export default App;
