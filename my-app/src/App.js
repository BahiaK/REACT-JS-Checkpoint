import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button , Container, Form, Row } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
     <Container>    
      <h1 > Welcome to our site</h1>
     <Form>
   <Row>
   <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Khaled"  />  
                  </Form.Group>
                  <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="surname" placeholder="Bahia"  />  
                  </Form.Group>
                
  
      <Form.Group controlId="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Exemple@email.com"  />  
                  </Form.Group>
                
                 
                 
                  <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  />  
                  </Form.Group>
               
                  </Row>
                          </Form>
        
        <Button  >Sign Up</Button>
        </Container>       
      </header>
    </div>
  );
}

export default App;
