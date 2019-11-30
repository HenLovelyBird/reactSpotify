import React from 'react';
import {Container} from 'reactstrap';
import ArtistPage from './ArtistPage';
import {Link} from 'react-router-dom';


class HomePage extends React.Component {
    state = {
        artist: []
        
    }

    componentDidMount = async () => {
        let artistNames =  ['tupac', 'mos def']; //can also be in line 4
        // i had this in before but i took it out bc i wanted to be able to search for any artist i wanted. 

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
        // let artist = this.state.artist; 
        return (
            <Container flex>
            {this.state.artist.map((artist, index) =>
                <ArtistPage artists={artist.items} key={index} artist={artist.name} onClick={() => <Link to="/ArtistPage">{artist.picture}</Link>}/>)} 
                {/* or can also be <Link to="/ArtistPage"/>? */}
            </Container>
    );
}
}

export default HomePage;