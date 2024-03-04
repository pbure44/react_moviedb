import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const LoginForm = () => {
    const {handleSubmit}=useForm()
    const navigate = useNavigate()
    const loginCheck =()=>{
        authService.login()?navigate('/movies'):navigate('/register')
    }
    return (
        <form onSubmit={handleSubmit(loginCheck)}>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};