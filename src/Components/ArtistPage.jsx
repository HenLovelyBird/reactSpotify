import React from 'react';
import {Container} from 'reactstrap';

class ArtistPage extends React.Component {
    render() {
        let artist = this.props.artist;
        let album = this.props.album;
          return (
            <Container className="float-left mt-5 mb-0">
               <div className="col-md-3">
                 <img style={{width: "100%"}} 
                  src={artist.picture} 
                  alt={"artist album cover for" + album.cover} />
                  <span>{artist.name}</span> 
                  <span>{album.title}</span>
              </div>
            </Container>
              );
            }
  }

export default ArtistPage;