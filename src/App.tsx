import { Routes, Route } from 'react-router';
import MainLayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import SongView from "@pages/SongView.tsx";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song/:id" element={<SongView />} />
            </Routes>
        </MainLayout>
    )
}

export default App