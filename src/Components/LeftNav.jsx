import React, { Component } from 'react';
import { Container, FormGroup } from 'react-bootstrap';


class LeftNav extends Component {
    render() {
        return (
            <Container className="Row-Vertical">
                <a href="#">Home</a>
                <a href="#">ArtistPage></a>
                <a href="#">AlbumPage</a>
            </Container>
        );
    }
}

export default LeftNav;