import React from 'react';
import Search from './SearchBar';
import api from '../api/apiCalls';
import VideoList from './VideoList';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onVideoSelect = video => {
        console.log('selected video data : >>>>>> ', video);        
        this.setState({ selectedVideo: video });
    };

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
                <Container>
                    <Search onFromSubmit={this.onTermSubmit}/>
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </Container>                
            </div>
        )
    }
}

export default App;