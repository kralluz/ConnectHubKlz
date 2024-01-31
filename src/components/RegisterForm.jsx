import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

const RegisterForm = () => {
/*     <InputPassword
    label="Confirmar Senha:"
    name="password"
    placeholder="Digite sua senha"
/> */
    return (
        <form
            id="registerForm"
            action="/api/clients"
            method="post"
        >
            <Input
                label="Nome:"
                name="name"
                type="text"
                placeholder="Digite seu nome"
            />
            <Input
                label="Email:"
                name="email"
                type="email"
                placeholder="Digite seu email"
            />

            <InputPassword
                label="Senha: "
                name="password"
                placeholder="Digite sua senha"
            />

            <Input
                label="Telefone:"
                name="phone"
                type="text"
                placeholder="Digite seu número de telefone"
            />
            <br />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default RegisterForm;
