import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useClientState } from "../../providers/client.provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodRules } from "../../zodRules/index";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const RegisterForm = () => {
    const { client, clientRegister } = useClientState();
    const [isHidden, setIsHidden] = useState(true);
    const [isConfirmHidden, setIsConfirmHidden] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            alert("As senhas não coincidem" );
            return;
        }
        clientRegister(data);
    };

    return (
        <>
            <h1>cliente</h1>
            <p>{client.name}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    name:
                    <input {...register("name", { required: true })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
                <br />
                <label>
                    E-mail:
                    <input
                        {...register("email", {
                            required: true,
                            pattern: /^\w+@[a-zA-Z]+\.\w+$/,
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <br />
                <label>
                    Número:
                    <input {...register("phone")} type="tel" />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </label>
                <br />
                <div>
                    <label>
                        password:
                        <input
                            {...register("password")}
                            type={isHidden ? "password" : "text"}
                        />
                    </label>
                    {errors.password ? (
                        <span>{errors.password.message}</span>
                    ) : null}
                    <button
                        type="button"
                        onClick={() => setIsHidden(!isHidden)}
                    >
                        {isHidden ? (
                            <MdVisibility color="black" />
                        ) : (
                            <MdVisibilityOff color="black" />
                        )}
                    </button>
                </div>
                <div>
                    <label>
                        Confirmar senha:
                        <input
                            {...register("confirmPassword")}
                            type={isConfirmHidden ? "password" : "text"}
                        />
                    </label>
                    {errors.confirmPassword ? (
                        <span>{errors.confirmPassword.message}</span>
                    ) : null}
                    <button
                        type="button"
                        onClick={() => setIsConfirmHidden(!isConfirmHidden)}
                    >
                        {isConfirmHidden ? (
                            <MdVisibility color="black" />
                        ) : (
                            <MdVisibilityOff color="black" />
                        )}
                    </button>
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
};

export default RegisterForm;
