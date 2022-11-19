import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewNote from './components/NewNote';

// https://youtu.be/j898RGRw0b4?t=614

function App() {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<h1>I get it</h1>} />
        <Route
          path='/new'
          element={
            <h1>
              <NewNote />
            </h1>
          }
        />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} />
          <Route path='edit' element={<h1>Edit</h1>} />
        </Route>
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  );
}

export default App;
