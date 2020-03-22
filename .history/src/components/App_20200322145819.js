import React from 'react';
import Search from './SearchBar';
import api from '../api/apiCalls';
import VideoList from './VideoList';
import {Container, Row, Col} from 'react-bootstrap';
import VideoDetail from './VideoDetail';


class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('children toy');
    }

    onVideoSelect = video => {
        console.log('selected video data : >>>>>> ', video);        
        this.setState({ selectedVideo: video });
    };

    onTermSubmit = (term)=>{
        console.log("Search term : >>> ", term);  
        api.getYoutubeVideos(term).then((data) => {
            console.log('video search data : ', data);  
            this.setState({ videos: data.data.items }); 
            this.setState({ selectedVideo: this.state.videos[0] });         
        }).catch((err) => {
            console.log('image search error : ', err);
        })      
    }

    render() {
        return (
            <div>
                <Container>
                    <Search onFromSubmit={this.onTermSubmit}/>
                    <Row>
                        <Col sm={8}>
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                        </Col>
                        <Col sm={4}>
                        <div>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                        </Col>
                    </Row>                                       
                </Container>                
            </div>
        )
    }
}

export default App;