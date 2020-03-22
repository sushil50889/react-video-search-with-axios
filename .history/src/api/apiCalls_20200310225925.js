import youtube from './config';
const apiCall = {};



apiCall.getYoutubeVideos = (term) => {
    return new Promise((resolve, reject)=>{
        const response = youtube.get('/search/photos', {
            params: { query: term }
        });

        if(response){
            resolve(response);
        }else{
            reject(null);
        }
    })
}



export default apiCall; 