import { StyledRegister } from "./style"
import Logo from '../../components/logo/LogoCapstone.png'
import { StyledForm } from "../../components/form/style"
import TextField from "@mui/material/TextField"
import { Link } from "react-router-dom"

function Register() {
  return (
    <StyledRegister>
        <img className="logo" src={Logo} alt="" />
        <StyledForm>
        <div className="formContainer">
          <div className="innerDiv">
            <h2 className="title1">Cadastro</h2>
            <Link to={'/'} className="goLogin title5">
              Retornar para o login
            </Link>
          </div>

        
          <TextField
            label="Nome"
            variant="outlined"
            type="text"
            className="input"
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            className="input"
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            className="input"
          />
          <TextField
            label="Confirmar Senha"
            variant="outlined"
            type="password"
            className="input"
          />
          <TextField
            label="CPF"
            variant="outlined"
            type="text"
            className="input"
          />
           <select name="" id="">
                <option value="">Selecionar tipo de usuário</option>
                <option value="">Comprador</option>
                <option value="">Vendedor</option>
                <option value="">Verificador</option>
            </select>
          <button
            type="submit"
            className="goRegister title6"
          >
            Cadastrar
          </button>
        </div>
        </StyledForm>
    </StyledRegister>
  )
}

export default Register