import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import $ from "jquery";
import Creatable from "react-select/creatable";
import makeAnimated from "react-select/animated";
import {
  Form,
  Button,
  Container,
  Row,
  Jumbotron,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Badge,
  Modal,
  Table,
  Alert
} from "react-bootstrap";
import "./style.css";
import DynamicFields from "./DynamicFields";
import { useForm } from "react-hook-form";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumes: [
          {
          name: "Manikanda prabhu",
          address: "Dharapuram",
          number: "9876543210",
          email: "manish.dpm@gmail.com",
          eduSectionValue: [
            {
              Insfield: "Anna univercity",
              Degfield: "B.E CSE",
              Yearfield: "2009-2013"
            },
            {
              Insfield: "Govt School Dharapuram",
              Degfield: "HSC",
              Yearfield: "2009"
            },
            {
              Insfield: "Govt School Dharapuram",
              Degfield: "SSLC",
              Yearfield: "2007"
            }
          ],
          experienceSectionValue: [
            {
              Insfield: "ABC company",
              Degfield: "Software Enginees",
              Yearfield: "2015 - till the date"
            },
            {
              Insfield: "XYZ company",
              Degfield: "Web Designer",
              Yearfield: "2014"
            }
          ],
          selectedSkills: [
             { value: "React", label: "React" },
        { value: "Es6", label: "Es6" },
        { value: "NodeJs", label: "NodeJs" },
        { value: "Java", label: "Java" },
        { value: "JavaScript", label: "JavaScript" },
          ]
        },
        {
          name: "mani",
          address: "Dharapuram",
          number: "9876543210",
          email: "manish.dpm@gmail.com",
          eduSectionValue: [
            {
              Insfield: "Anna univercity",
              Degfield: "B.E CSE",
              Yearfield: "2009-2013"
            },
            {
              Insfield: "Govt School Dharapuram",
              Degfield: "HSC",
              Yearfield: "2009"
            },
            {
              Insfield: "Govt School Dharapuram",
              Degfield: "SSLC",
              Yearfield: "2007"
            }
          ],
          experienceSectionValue: [
            {
              Insfield: "ABC company",
              Degfield: "Software Enginees",
              Yearfield: "2015 - till the date"
            },
            {
              Insfield: "XYZ company",
              Degfield: "Web Designer",
              Yearfield: "2014"
            }
          ],
          selectedSkills: [
            { value: "React", label: "React" },
            { value: "Es6", label: "Es6" }
          ]
        },
        {
          name: "Prabu",
          address: "Coimbatore",
          number: "9123443210",
          email: "prabhu.cbe@gmail.com",
          eduSectionValue: [
            {
              Insfield: "Anna univercity chennai",
              Degfield: "B.E CSE",
              Yearfield: "2009-2013"
            },
            {
              Insfield: "Govt School cbe",
              Degfield: "HSC",
              Yearfield: "2009"
            },
            {
              Insfield: "Govt School cbe",
              Degfield: "SSLC",
              Yearfield: "2007"
            }
          ],
          experienceSectionValue: [
            {
              Insfield: "ABC company",
              Degfield: "Software Enginees",
              Yearfield: "2015 - till the date"
            },
            {
              Insfield: "XYZ company",
              Degfield: "Web Designer",
              Yearfield: "2014"
            }
          ],
          selectedSkills: [
            { value: "React", label: "React" },
            { value: "Es6", label: "Es6" }
          ]
        }
      ],
      formData: {
        name: "",
        address: "",
        number: "",
        email: "",
        eduSectionValue: [
          {
            Insfield: "",
            Degfield: "",
            Yearfield: ""
          }
        ],
        experienceSectionValue: [
          {
            Insfield: "",
            Degfield: "",
            Yearfield: ""
          }
        ],
        selectedSkills: [{ value: "React", label: "React" }]
      },
      resetForm: {
        name: "",
        address: "",
        number: "",
        email: "",
        eduSectionValue: [
          {
            Insfield: "",
            Degfield: "",
            Yearfield: ""
          }
        ],
        experienceSectionValue: [
          {
            Insfield: "",
            Degfield: "",
            Yearfield: ""
          }
        ],
        selectedSkills: [{ value: "React", label: "React" }]
      },
      eduSection: [
        {
          field: 1
        }
      ],
      experienceSection: [
        {
          field: 1
        }
      ],
      options: [
        { value: "Python", label: "Python" },
        { value: "React", label: "React" },
        { value: "Es6", label: "Es6" },
        { value: "NodeJs", label: "NodeJs" },
        { value: "Java", label: "Java" },
        { value: "JavaScript", label: "JavaScript" },
        { value: "PHP", label: "PHP" },
        { value: "SQL", label: "SQL" },
        { value: "Swift", label: "Swift" },
        { value: "C#", label: "C#" },
        { value: "C", label: "C" },
        { value: "C++", label: "C++" }
      ],
      selectedSkills: [],
      viewResume: false,
      createResume: false,
      homePage: true,
      viewIndex: 0,
      alertSuccess: false,
      alertValidation: false
    };
  }

  addEduFields(id) {
    if (id === "eduSection") {
      let eduSection = this.state.eduSection;
      let sectionLength = this.state.eduSection.length;
      eduSection.push({ field: sectionLength });
      let formData = { ...this.state.formData };
      formData.eduSectionValue.push({
        Insfield: "",
        Degfield: "",
        Yearfield: ""
      });
      this.setState({
        eduSection: [...eduSection],
        formData
      });
    } else {
      let experienceSection = this.state.experienceSection;
      let experienceSectionLen = this.state.experienceSection.length;
      experienceSection.push({ field: experienceSectionLen });
      let formData = { ...this.state.formData };
      formData.experienceSectionValue.push({
        Insfield: "",
        Degfield: "",
        Yearfield: ""
      });

      this.setState({
        experienceSection: [...experienceSection],
        formData
      });
    }
  }
  handleChange = selectedOption => {
    let formData = { ...this.state.formData };
    formData.selectedSkills = selectedOption;
    this.setState({ formData });
  };
  handleInputChange = e => {
    let formData = { ...this.state.formData };
    formData[e.target.name] = e.target.value;
    this.setState({
      formData
    });
  };
  handleDynamicInput = (id, section, name, val) => {
    let formData = { ...this.state.formData };
    if (section === "eduSection") {
      let eduSectionValue = [...formData.eduSectionValue];
      eduSectionValue[id][name] = val;
      formData.eduSectionValue = eduSectionValue;
      this.setState({
        formData
      });
    } else {
      let experienceSectionValue = [...formData.experienceSectionValue];
      experienceSectionValue[id][name] = val;
      formData.experienceSectionValue = experienceSectionValue;
      this.setState({
        formData
      });
    }
  };
  saveResume = e => {
    //this.setState({ selectedOption });
    let data = { ...this.state.formData }
    let keys = Object.keys(data);
    let resumes = [...this.state.resumes];
    let isValidForm = keys.every(function (key) {
      return data[key]
    })
    if (isValidForm) {
      var isEduFilled = data['eduSectionValue'].some(function (obj) {
        return obj.Degfield && obj.Insfield && obj.Yearfield;
      });
      var isExpFilled = data['experienceSectionValue'].some(function (obj) {
        return obj.Degfield && obj.Insfield && obj.Yearfield;
      });
      if (!isEduFilled || !isExpFilled) {
        this.setState({
          alertValidation: true,
        }, (e) => {
          this.hideAlert();
        });
        return;
      }

    }
    else {
      this.setState({
        alertValidation: true,
      }, (e) => {
        $('.nav-link').removeClass('active')
        this.hideAlert();
      });
      return;
      //alert("All Sectionas are mandatory. Kindly Enter the details");
    }

    resumes.push({ ...this.state.formData });
    this.setState(
      {
        resumes
      },
      e => {
        //alert(JSON.stringify(this.state.resumes))
        let formData = { ...this.state.formData };
        formData = { ...this.state.resetForm };
        this.setState({
          formData,
          alertSuccess: true,
          createResume: false,
          homePage: true
        }, (e) => {
          $('.nav-link').removeClass('active')
          this.hideAlert();
        });
      }
    );
  };
  hideAlert = e => {
    setTimeout(function () {
      this.setState({
        alertSuccess: false,
        alertValidation: false
      });
    }.bind(this), 4000);
  }
  closeAlert = e => {
      this.setState({
        alertSuccess: false,
        alertValidation: false
      });
  }
  linkFn = e => {
    //this.setState({ selectedOption });
    let page = {
      viewResume: false,
      createResume: false,
      homePage: false
    };
    page[e.target.name] = true;
    this.setState({
      ...page
    });
    $('.nav-link').removeClass('active')
  };
  viewFn = e => {
    //this.setState({ selectedOption });
    let resumeIdx = e.target.getAttribute("name");
    let page = {
      viewResume: false,
      createResume: false,
      homePage: true
    };
    page.viewResume = true;
    this.setState({
      ...page,
      viewIndex: resumeIdx
    });
  };
  handleClose = e => {
    //this.setState({ selectedOption });
    let page = {
      viewResume: false,
      createResume: false,
      homePage: true
    };
    this.setState({
      ...page
    });
  };

  render() {
    let formData = this.state.formData;
    let createResume = this.state.createResume;
    let viewResume = this.state.viewResume;
    let homePage = this.state.homePage;
    let viewResumeDetails = this.state.resumes[this.state.viewIndex];
    let alertSuccess = this.state.alertSuccess;
    let alertValidation = this.state.alertValidation;
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Resume Builder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Home" name="homePage" id="homepage" onClick={this.linkFn}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#createResume"
                name="createResume"
                onClick={this.linkFn}
              >
                Create Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {createResume ? (
          <Container>
            {" "}
            <br />
            <Row>
              <Col xs lg="4">
                <Jumbotron>
                  <Form>
                    <h5>Personal Information</h5>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name </Form.Label>
                      <Form.Control
                        name="name"
                        onChange={this.handleInputChange}
                        value={formData.name}
                        type="name"
                        placeholder="Enter Name"
                      />
                      <Form.Text
                        value={this.state.formData.name}
                        className="text-muted"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        name="email"
                        value={formData.email}
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Enter email"
                      />
                      <Form.Text ref="email" className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        name="address"
                        value={formData.address}
                        onChange={this.handleInputChange}
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                      <Form.Label>Phone Number </Form.Label>
                      <Form.Control
                        name="number"
                        value={formData.number}
                        onChange={this.handleInputChange}
                        type="Phone"
                        placeholder="Enter Phone number"
                      />
                      <Form.Text
                        onChange={this.handleChange}
                        className="text-muted"
                      />
                    </Form.Group>
                  </Form>
                </Jumbotron>
                <Jumbotron>
                  <Form>
                    <h5>Skills</h5>
                    <Form.Group controlId="exampleForm.SelectCustom">
                      <Form.Label>Select your Skills</Form.Label>
                      <Select
                        value={formData.selectedSkills}
                        onChange={this.handleChange}
                        options={this.state.options}
                        // onMenuOpen ={true}
                        //menuIsOpen / onMenuOpen / onMenuClose - control whether the menu is open
                        isMulti
                      />
                    </Form.Group>
                  </Form>
                </Jumbotron>
              </Col>
              <Col xs lg="8">
                <Jumbotron>
                  <h5>Eductional Qalification</h5>
                  <hr />
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Institution</Form.Label>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Degree</Form.Label>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Year</Form.Label>
                      </Form.Group>
                    </Form.Row>
                    <DynamicFields
                      fields={this.state.eduSection}
                      fieldsValue={formData.eduSectionValue}
                      addEduFn={this.addEduFields.bind(this)}
                      handleDynamicInputFn={this.handleDynamicInput.bind(this)}
                      fieldsID={"eduSection"}
                    />
                  </Form>
                </Jumbotron>
                <Jumbotron>
                  <h5>Work Experience</h5>
                  <hr />
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Company</Form.Label>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Designation</Form.Label>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Year</Form.Label>
                      </Form.Group>
                    </Form.Row>
                    <DynamicFields
                      fields={this.state.experienceSection}
                      fieldsValue={formData.experienceSectionValue}
                      addEduFn={this.addEduFields.bind(this)}
                      handleDynamicInputFn={this.handleDynamicInput.bind(this)}
                      fieldsID={"experienceSection"}
                    />
                  </Form>
                </Jumbotron>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs lg="4">
                <>
                  <Button onClick={this.saveResume} variant="success">
                    Save Resume
                  </Button>{" "}
                 
                  <Button variant="primary" name="homePage" onClick={this.linkFn}>Cancel</Button> <br />
                  <br />
                </>
              </Col>
            </Row>
          </Container>
        ) : (
            ""
          )}
        {viewResume ? (
          <div>
            <Modal size="lg" show={true} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Name : {viewResumeDetails.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <h6>Personal Information</h6>
                  <p>Address : {viewResumeDetails.address}</p>
                  <p>Phone Number : {viewResumeDetails.number} </p>
                  <p>Email : {viewResumeDetails.email}</p>
                </div>
                <div>
                  <h6>Skills :</h6>
                  {viewResumeDetails.selectedSkills.map((skill, i) => {
                    return (
                      <>
                        <Badge variant="info">{skill.value}</Badge>{" "}
                      </>
                    );
                  })}
                </div>
                <hr />
                <h6>Educational Qualification</h6>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Institution</th>
                      <th>Degree</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      viewResumeDetails.eduSectionValue.map((item, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.Insfield}</td>
                            <td>{item.Degfield}</td>
                            <td>{item.Yearfield}</td>
                          </tr>)
                      })
                    }

                  </tbody>
                </Table>
                <hr />
                <h6>Experience</h6>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Company</th>
                      <th>Designation</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      viewResumeDetails.experienceSectionValue.map((item, index) => {
                        return (<tr>
                          <td>{index + 1}</td>
                          <td>{item.Insfield}</td>
                          <td>{item.Degfield}</td>
                          <td>{item.Yearfield}</td>
                        </tr>)
                      })
                    }

                  </tbody>
                </Table>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Download
          </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
            ""
          )}
        {homePage ? (
          <Container>
            {" "}
            <br />
            <Row>
              <Col className="card-holder">
                {this.state.resumes.map((obj, idx) => {
                  return (
                    <Card border="primary" style={{ width: "18rem" }} key={idx}>
                      <Card.Header>Resume {idx + 1}</Card.Header>
                      <Card.Body>
                        <Card.Title>Name: {obj.name}</Card.Title>
                        <Card.Text>
                          <p>Address : {obj.address}</p>
                          <p>Phone Number : {obj.number} </p>
                          <p>Email : {obj.email}</p>
                        </Card.Text>
                        <Card.Text>
                          <p>Skills :</p>
                          {obj.selectedSkills.map((skill, i) => {
                            return (
                              <>
                                <Badge variant="info">{skill.value}</Badge>{" "}
                              </>
                            );
                          })}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <>
                          <Badge
                            pill
                            name="createResume"
                            onClick={this.viewFn}
                            name={idx}
                            variant="success"
                          >
                            View
                          </Badge>{" "}
                          <Badge pill variant="danger">
                            Delete
                          </Badge>
                        </>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </Container>
        ) : (
            ""
          )}
        {alertSuccess ? (
          <Container>
            {" "}
            <br />
            <Row>
              <Alert variant="success">
                <Alert.Heading>Hey, You did it..!!!</Alert.Heading>
                <p>
                  Your Resume has been created successfully
  </p>
                <hr />

              </Alert>
            </Row>
          </Container>
        ) : (
            ""
          )}
        {alertValidation ? (
          <Container>
            {" "}
            <br />
            <Row>
              <Alert variant="danger">
                <Alert.Heading>Kindly fill below Section ..!!!</Alert.Heading>
                <p>
                  Personal Information</p>
                <p>
                  Eductional Qalification</p>
                <p>
                  Work Experience</p>


                <hr />
                <p> Eductional Qalification and Work Experience should have atleast one data</p>
                <hr />
                <p>                           <Badge onClick={this.closeAlert} pill variant="danger">
                  Close
                          </Badge></p>
              </Alert>
            </Row>
          </Container>
        ) : (
            ""
          )}
      </>
    );
  }
}
