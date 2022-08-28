import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { clipboard, ipcRenderer } from 'electron';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import MyEditor from './editor/editor';

const Hello = () => {
  ipcRenderer.on('update-counter', (_event, value) => {
    window.location.href = '/editor';
  });
  return (
    <div>
      <h2>123</h2>
      <h1>{clipboard.readText()}</h1>1<Button type="primary">test</Button>
      <Button type="primary">test</Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/editor" element={<MyEditor />} />
      </Routes>
    </Router>
  );
}
