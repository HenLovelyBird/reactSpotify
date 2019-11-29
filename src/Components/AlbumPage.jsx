import React from 'react';
import {Row} from 'reactstrap';
import ArtistPage from './ArtistPage';

class AlbumPage extends React.Component {
    render() {
        let album = this.props.album;
        return (
            <Row>
                <h3>{album.title}</h3>
            <Row>
                {this.props.albums.map((albums, index) =>
                <ArtistPage albums={album} key={index} />
                )}
            </Row>
        </Row>
        );
        
}
}

export default AlbumPage;