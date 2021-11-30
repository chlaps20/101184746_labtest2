import axios from "axios";
import React from "react";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=dc503014e2e94f90678ab6d46e2b7766"

export default class WeatherList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: []
        }
    }

    componentDidMount(){
        this.getWeather();
    }
    

    getWeather = () => {
        axios.get(baseURL, )
        .then(response => {
            let data = response.data
            this.setState({weather: data}); 
            console.log(this.state.weather)           
        })
        .catch(err => console.log(err))
    }
    
render(){
return (
    <div> 
        <h1 style={{flexDirection:'column'}}>Toronto's Weather Details</h1>
        <h1>City : {this.state.weather.name}</h1>
        <h2>ID : {JSON.stringify(this.state.weather.id)}</h2>
        <h2>Coordinates : {JSON.stringify(this.state.weather.coord)} </h2>
        <h2>TimeZone  : {JSON.stringify(this.state.weather.timezone)}</h2>
        <h2>Main : {JSON.stringify(this.state.weather.main)}</h2>
        <h2>Clouds : {JSON.stringify(this.state.weather.clouds)} </h2>
        <h2>Wind : {JSON.stringify(this.state.weather.wind)} </h2>


        <h4>{JSON.stringify(this.state.weather)}</h4>
        
    </div>
)};
}