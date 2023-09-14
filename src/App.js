import logo from './logo.svg';
import './App.css';
//import Counter from './Counter';
import requests from './request';
import Row from "./Row.js";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">

      
    <h2>Welcome Bro's!</h2>
    <p>We Will Rock Together</p>

   <Banner/>
  <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
  <Row title="Trending"fetchUrl={requests.fetchTrending}/>
  <Row title="Top Rated"fetchUrl={requests.fetchTopRateds}/>
  <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
  <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
  <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
  <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
  <Row title="Documentries"fetchUrl={requests.fetchDocumentriess}/>
       </div>
  );
}

export default App;
