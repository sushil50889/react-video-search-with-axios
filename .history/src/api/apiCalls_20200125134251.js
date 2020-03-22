import unsplash from './config';
const apiCall = {};



apiCall.getUnsplashImages = (term) => {
    return new Promise((resolve, reject)=>{
        const response = unsplash.get('/search/photos', {
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