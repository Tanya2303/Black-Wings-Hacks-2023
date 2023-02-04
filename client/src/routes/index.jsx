import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FoodDisorder from '../pages/FoodDisorder';
import MentalHealth from '../pages/MentalHealth';
import MyProgress from '../pages/MyProgress';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/fooddisorder" element={<FoodDisorder />} />
                <Route path="/mentalhealth" element={<MentalHealth />} />
                <Route path="/myprogress" element={<MyProgress />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
