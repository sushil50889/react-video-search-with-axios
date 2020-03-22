import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Search extends React.Component {
    state = {
        searchTerm: ''
    };

    onChangeSearchText = (event)=>{
        this.setState({searchTerm: event.target.value});
        this.props.onFromSubmit(event.target.value);
    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search Video</Form.Label>
                            <Form.Control type="search" placeholder="Enter Text" value={this.state.searchTerm} onChange={this.onChangeSearchText}/>
                            <Form.Text className="text-muted">
                                Please enter your text to search.
                            </Form.Text>
                        </Form.Group>
                    </Form> 
                </Container>
            </div>
        )
    }
}

export default Search;