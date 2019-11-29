import React from 'react';
import {Container} from 'reactstrap';
import ArtistPage from './ArtistPage';
import { Row } from 'react-bootstrap';

class HomePage extends React.Component {
    state = {
        artist: []
    }

    componentDidMount= async() => {
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist + "&limit=6", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "26481b32f0mshd0632c6bc822ba0p1beb06jsne1e5167c63bf"
            }
        })
        let artist = await response.json()
        console.log(artist.data)
        this.setState({
            data: artist.data
        })
    
    }
    render() {
        let artist = this.state.data;
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