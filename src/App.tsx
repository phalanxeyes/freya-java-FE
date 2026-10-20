import { Routes, Route } from 'react-router';
import MainLayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import SongView from "@pages/SongView.tsx";
import CoverView from "@pages/CoverView.tsx";
import SignUp from "@pages/SignUp.tsx";
import Login from "@pages/Login.tsx";
import AdminView from "@pages/AdminView.tsx";
import NotFound from "@pages/NotFound.tsx";
import { healthService } from "@api/healthService.ts";
import { getApiErrorMessage } from "@api/apiError";
import { useEffect, useState } from 'react';

function App() {
    const [isDown, setIsDown] = useState(false);
    const [serviceError, setServiceError] = useState<string | null>(null);

    useEffect(() => {
        healthService.getHealth().catch((err) => {
            setServiceError(getApiErrorMessage(err));
            setIsDown(true);
        });
    }, []);

    if (isDown) {
        return (
            <div className="flex min-h-[40vh] flex-col items-center justify-center gap-2 px-6 text-center">
                <h1 className="text-espresso-800">Service Down</h1>
                {serviceError && (
                    <p role="alert" className="text-sm text-dark-walnut-700">
                        {serviceError}
                    </p>
                )}
            </div>
        );
    }

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song/:id" element={<SongView />} />
                <Route path="/cover/:id" element={<CoverView />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<AdminView />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainLayout>
    )
}

export default App