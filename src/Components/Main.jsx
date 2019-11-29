import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import TopNav from './TopNav';
import LeftNav from './LeftNav';
import HomePage from './HomePage';
import ArtistPage from './ArtistPage';
import AlbumPage from './AlbumPage';
import Footer from './Footer';



class Main extends React.Component {
    render() {
        return (
            <Router>
                <TopNav />
                <LeftNav /> 
                <Container>
                    <Route path="/HomePage" component={HomePage} />
                    <Route path="/ArtistPage" component={ArtistPage} />
                    <Route path="/AlbumPage" component={AlbumPage} />
                </Container>
                <Footer />
            </Router>
        );
    }
}

export default Main;