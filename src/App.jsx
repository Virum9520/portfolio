import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import ExperiencePage from './pages/ExperiencePage';
import PublicationPage from './pages/PublicationPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience/:id" element={<ExperiencePage />} />
          <Route path="/publications/:id" element={<PublicationPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
