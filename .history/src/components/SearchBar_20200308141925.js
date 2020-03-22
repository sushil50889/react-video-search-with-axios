import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'

class Search extends React.Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search Video</Form.Label>
                        <Form.Control type="search" placeholder="Enter Text"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form> 
            </div>
        )
    }
}

export default Search;