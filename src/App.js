import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Route를 추가로 import합니다.

import { Main } from './compoenets/Main';
import { Copyright } from './compoenets/Shared/Copyright';
import { Header_Nav } from './compoenets/Shared/Header_Nav';
import { About } from './compoenets/About';
import { Contact } from './compoenets/Contact';
import { StateDescription } from './compoenets/StateDescription';
import { OneWayBinding } from './compoenets/OneWayBinding';
import TodoListInMemory from './compoenets/TodoListInMemory';
import NovelpiaBookList from './compoenets/NovelpiaBookList';

function App() {

  const NotFound = () => {
    return <h2>404 Page Not Found</h2>;
  }

  return (
    <Router>
      <div>
        <Header_Nav />
        <main>
          <Routes>
            <Route path="/" element={< Main/>} />
            <Route path="/about" element={<About />} />
            <Route path="/OneWayBinding" element={<OneWayBinding />} />
            <Route path='/TodoListInMemory' element={<TodoListInMemory />} />
            <Route path='/NovelpiaBookList' element={<NovelpiaBookList />} />

            <Route path="*" element={<NotFound />} /> {/* 모든 일치하지 않는 경로를 처리 */}
          </Routes>
        </main>
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
