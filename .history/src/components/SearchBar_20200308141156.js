import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

class Search extends React.Component {
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>  
            </div>
        )
    }
}

export default Search;