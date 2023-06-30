import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Sobre from './pages/sobre/Sobre'
import './App.css'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Catalogo from './pages/catalogo/Catalogo'
import CadastroProduto from './components/produto/cadastroProduto/CadastroProduto'
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto'
import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria'
import ListarProdutos from './components/produto/listarProdutos/ListarProdutos'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import CadastrarCategoria from './components/categoria/cadastrarCategoria/CadastrarCategoria'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from './store/store'



export default function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer />
        <Navbar />
        <div>
          <Routes>

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path="/cadastrarProduto" element={<CadastroProduto />} />
            <Route path="/cadastrarProduto/:id" element={<CadastroProduto />} />
            <Route path='/cadastrarCategoria' element={<CadastrarCategoria />} />
            <Route path='/cadastrarCategoria/:id' element={<CadastrarCategoria />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path='/categorias' element={<ListarCategoria />} />
            <Route path='/produtos' element={<ListarProdutos />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  )
}
