import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function PersonalInfoBox() {

  const employeeInformation = {
    'EMP-1001': {
      'Basic Information': {
        'First Name': 'Andrei',
        'Last Name': 'Rachieru'
      },
      'Address Information': {
        'Main Address': 'Str. One, Nr. 1',
        'Second Address': ''
      },
      'Contact Information': {
        'Phone Number': '0753830028',
        '2nd Phone Number': '',
        'Work Email': 'andrei.rachieru@yahoo.com',
        'Personal Email': ''
      },
      'Links': {
        'LinkedIn': ''
      }
    }
  };

  const handlePersonalInformation = (sectionInfo) => {
    const formData = [];

    for (const key in sectionInfo) {
      if (sectionInfo[key] !== '') {
        formData.push(
          <Form.Group className="mb-3" key={`info-${key}`}>
            <Form.Label>{key}</Form.Label>
            <Form.Control type="text" value={sectionInfo[key]} readOnly />
          </Form.Group>
        );
      }
    }

    return formData;
  };

  const handleInfoBoxes = (employeeInfo) => {
    const rows = [];
    let cols = [];

    for (const section in employeeInfo) {
      const sectionData = handlePersonalInformation(employeeInfo[section]);
      if (sectionData.length === 0) continue;

      cols.push(
        <Col key={`col-${section}`}>
          <h5>{section}</h5>
          <div className="br mb-3"></div>
          <Form>{sectionData}</Form>
        </Col>
      );
      if (cols.length === 3) {
        rows.push(<Row key={`row-${rows.length}`} className='mb-3'>{cols}</Row>);
        cols = [];
      }
    }
    if (cols.length > 0) {
      rows.push(<Row key={`row-${rows.length}`}>{cols}</Row>);
    }

    return rows;
  };

  return (
    <Container>
      {handleInfoBoxes(employeeInformation['EMP-1001'])}
    </Container>
  );
}

export default PersonalInfoBox;
