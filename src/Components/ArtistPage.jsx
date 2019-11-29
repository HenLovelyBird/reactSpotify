import React from 'react';

class ArtistPage extends React.Component {
    render() {
        let artist = this.props.artist;
          return (
               <div className="col-md-3">
                 <img style={{width: "100%"}} 
                  src={artist.picture} 
                  alt={"artist album cover for" + artist.cover} />
                  <span>{artist.name}</span> 
              </div>
              );
            }
  }

export default ArtistPage;