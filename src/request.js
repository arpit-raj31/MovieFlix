const API_KEY='adedb15ae24cad799bbc3b588aa3c168'; 


const requests={
    fetchTrending: '/trnding/all/week?api_key=${API_kEY}&language=en-us',
    fetchNetflixOriginals:'/discover/tv?api_key=${API_KEY}&with_network=123',
    fetchTopRated:'/movies/top_rated?api_key=${API_key}&language=en-us',
    fetchActionMovies:'/discover/movie?api_key=${API_KEY}&with__genres=28',
    fetchComedyMovies:'/discover/movie?api_key=${API_KEY}&with__genres=35',
    fetchHorrorMovies:'/discover/movie?api_key=${API_KEY}&with__genres=27',
    fetchRomanceMovies:'/discover/movie?api_key=${API_KEY}&with__genres=10749',
    fetchDocumentries:'/discover/movie?api_key=${API_KEY}&with__genres=99',

};
export default requests;