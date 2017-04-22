import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap"

const DateInput = styled(Input)`
  padding: 6px 8px;
`

class BalanceReportForm extends React.Component {
  constructor(props) {
    super(props)
    this.setStartDate = this.setStartDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      startDate: null,
    }
  }

  setStartDate(e) {
    this.setState({
      startDate: e.target.value,
    })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.startDate)
  }

  render() {
    return (
      <Form>
        <FormGroup row className="justify-content-center">
          <Label xs={12} md={3} lg={2} className="col text-sm-right">Start date</Label>
          <Col xs={12} sm={4} md={3} lg={2}>
            <DateInput type="date" name="startDate" onChange={this.setStartDate} />
          </Col>
          <Col xs={12} sm md={3} lg={2} className="pt-2 pt-sm-0">
            <Button
              onClick={this.handleSubmit}
              className="btn-block" color="primary"
            >Get report</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

BalanceReportForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default BalanceReportForm
