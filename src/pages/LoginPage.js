import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authService} from "../services";

const LoginPage = () => {
    const {handleSubmit} = useForm()
    const navigate = useNavigate()
    const div = document.createElement("div")
    const textLogged =document.createTextNode("You've already registered and logged")
    const textRedirection = document.createTextNode("You are not registered. You will transfer to registration page in 5 sec")

    const delay = (time) => {
        return new Promise((resolve, reject) => setTimeout(resolve, time))
    }

    const loginCheck = () => {
        if (authService.login()) {
            div.appendChild(textLogged);
            console.log(textLogged);
            delay(3000).then(()=>{
                navigate('/movies')
            })

        } else {
            div.appendChild(textRedirection);
            delay(3000).then(()=> {
                navigate('/register')
            })
        }
    }
    return (

        <form onSubmit={handleSubmit(loginCheck)}>
            <button>Login</button>
        </form>
    );
};

export {LoginPage};