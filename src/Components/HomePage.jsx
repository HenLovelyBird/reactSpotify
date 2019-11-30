import React from 'react';
import {Container} from 'reactstrap';
import ArtistPage from './ArtistPage';
import { Row } from 'react-bootstrap';
let artistNames =  ['eminem', 'Radiohead']; //can also be in line 14

class HomePage extends React.Component {
    state = {
        artist: []
        
    }

    componentDidMount = async () => {


        artistNames.forEach(async artist => {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + artist + "&limit=6",{
                method: "GET",
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "26481b32f0mshd0632c6bc822ba0p1beb06jsne1e5167c63bf"    
                }
            })  
            let artistInfo = await response.json()
            console.log(artistInfo.data)
            this.setState({
                artist: artistInfo.data
            });
        }
        )
    }
        
     
    render() {
        let artist = this.state.artist;
        return (
            <Container flex>
                <Row>
                    <div>{this.props.search}</div>
                </Row>
            {this.state.artist.map((artist, index) =>
                <ArtistPage artists={artist.items} key={index} artist={artist.name} />)}
        </Container>
    );
}
}

export default HomePage;