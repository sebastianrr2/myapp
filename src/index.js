import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Post from './Post';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const component = <h1>Hola mundo</h1>
root.render(
  <Container className='mt-3'>
    <Row>
      <Post author = "John Doe" content= "Post content" likes={20} />
      <Post author = "Hinona Rider" content= "Post content" likes={10} />
      <Post author = "Keanu Reaves Doe" content= "Post content" likes={0} />
    </Row>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
