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
                </Form> 
            </div>
        )
    }
}

export default Search;