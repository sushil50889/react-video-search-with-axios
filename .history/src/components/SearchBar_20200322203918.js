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
    }

    onFormSubmit = event => {
        event.preventDefault();    
        this.props.onFromSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className="mt-4">
                
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <h3 className="text-center">Search Video</h3>
                            <Form.Control type="search" placeholder="Enter Text" value={this.state.searchTerm} onChange={this.onChangeSearchText}/>
                            <Form.Text className="text-muted">
                                Please enter your text to search.
                            </Form.Text>
                        </Form.Group>
                    </Form> 
                
            </div>
        )
    }
}

export default Search;