import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Bebidas'
import IceCreamsPage from './pages/Main/Sobremesas'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='Bebidas' element={<DrinksPage />} />
        <Route path='Sobremesas' element={<IceCreamsPage />} />
      </Route>
    </Routes>
  )
}
