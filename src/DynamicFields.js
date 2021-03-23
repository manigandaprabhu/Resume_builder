import React from "react";
import { Form, Button, Container, Row, Jumbotron, Col } from "react-bootstrap";
export default class DynamicFields extends React.Component {
  constructor(props) {
    super(props);
  }
  addEduFields(e, id) {
    e.preventDefault();
    this.props.addEduFn(id);
    // alert(this.props)
  }
  handleDynamicFieldInputChange(e) {
    e.preventDefault();
    //this.props.addEduFn(id);
    this.props.handleDynamicInputFn(e.target.accessKey, e.target.useMap, e.target.name, e.target.value);
  }
  render() {
    let { fields, fieldsID, fieldsValue } = this.props;

    return (
      <>
        {fields.map((obj, i) => {
          let field1 = "insInsfield" + i;
          return (
            <>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity" key={i}>
                  <Form.Control
                    onChange={e => {this.handleDynamicFieldInputChange(e);}}
                    useMap={fieldsID}
                    accessKey={i}
                    type="ins"
                    name={"Insfield"}
                    value={
                      fieldsValue[i] && fieldsValue[i]["Insfield"]
                        ? fieldsValue[i]["Insfield"]
                        : " "
                    }
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    onChange={e => {this.handleDynamicFieldInputChange(e);}}
                    useMap={fieldsID}
                    accessKey={i}
                    type="deg"
                    name={"Degfield"}
                    value={
                      fieldsValue[i] && fieldsValue[i]["Degfield"]
                        ? fieldsValue[i]["Degfield"]
                        : ""
                    }
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control
                    onChange={e => {this.handleDynamicFieldInputChange(e);}}
                    useMap={fieldsID}
                    accessKey={i}
                    type="yr"
                    name={"Yearfield"}
                    value={
                      fieldsValue[i] && fieldsValue[i]["Yearfield"]
                        ? fieldsValue[i]["Yearfield"]
                        : ""
                    }
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
              </Form.Row>
            </>
          );
        })}
         <Form.Row className="justify-content-md-center">
        <Button 
          variant="primary"
          type="submit"
          onClick={e => {
            this.addEduFields(e, fieldsID);
          }}
        >
          Add Fields
        </Button>
         </Form.Row>
      </>
    );
  }
}
