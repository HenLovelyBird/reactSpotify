import React from 'react';
import {Container} from 'reactstrap';


class AlbumPage extends React.Component {
    state = {
        album: []
    }

    componentDidMount = async () => {
        let albumNames = ['kid a', 'tropicalia'];
        
        albumNames.forEach(async album => {
            let response = await fetch ("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + album, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "26481b32f0mshd0632c6bc822ba0p1beb06jsne1e5167c63bf"
                }
            }) 
            let albumInfo = await response.json()
            console.log(albumInfo.data)
            this.setState({
                artist: albumInfo.data
                });
            }
        )
    }
        render() {
            let album = this.state.album; 
                return (
                    <Container flex>
                        {this.state.album.map((album, index) =>
                        <div>{album.items} key={index} album={album.name}</div>)}
                    </Container>
            );
            }
        }
            

         
                
                
        
    



export default AlbumPage;