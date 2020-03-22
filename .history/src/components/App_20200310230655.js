import React from 'react';
import Search from './SearchBar';

class App extends React.Component {

    onTermSubmit = (term)=>{
        console.log("Search term : >>> ", term);        
    }

    render() {
        return (
            <div>
                <Search onFromSubmit={this.onTermSubmit}/>
            </div>
        )
    }
}

export default App;