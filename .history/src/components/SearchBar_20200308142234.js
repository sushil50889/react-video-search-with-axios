import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Search extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search Video</Form.Label>
                            <Form.Control type="search" placeholder="Enter Text"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Form> 
                </Container>
            </div>
        )
    }
}

export default Search;