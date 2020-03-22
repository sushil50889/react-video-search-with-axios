import React from 'react';
import Search from './SearchBar';
import api from '../api/apiCalls';
import VideoList from './VideoList';


class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = (term)=>{
        console.log("Search term : >>> ", term);  
        api.getYoutubeVideos(term).then((data) => {
            console.log('video search data : ', data);  
            this.setState({ videos: data.data.items });          
        }).catch((err) => {
            console.log('image search error : ', err);
        })      
    }

    render() {
        return (
            <div>
                <Search onFromSubmit={this.onTermSubmit}/>
                <VideoList
                videos={this.state.videos}
              />
            </div>
        )
    }
}

export default App;