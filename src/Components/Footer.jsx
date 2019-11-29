import React from "react";
import { Container} from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <footer class="footer">
          <div class="container">
            <span class="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </Container>
    );
  }
}

export default Footer;
