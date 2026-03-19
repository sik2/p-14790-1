import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import TodoDetail from './pages/TodoDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="todos/:id" element={<TodoDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
