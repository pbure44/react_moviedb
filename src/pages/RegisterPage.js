import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {authService, registerValidator} from "../services";
import {MainLayout} from "../layouts";
import {useNavigate} from "react-router-dom";
import {urls} from "../constants";
import React from "react";


const RegisterPage = () => {
    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    });

    const navigate = useNavigate()

    const save = async (user) => {
        console.log("Reg user: ", user);
        await authService.register(user);
        reset();
        navigate('/movies')
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div>Username: <input type="text" placeholder='username' {...register('username')}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            <div>Password: <input type="text" placeholder='password' {...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <button disabled={!isValid}>register</button>
        </form>
    );
};

export {RegisterPage};