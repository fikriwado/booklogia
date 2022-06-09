import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<Container className="mt-5">
				<Row>
					<Col>
						<Alert variant="success">
							Setup React-Bootstrap!
						</Alert>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
