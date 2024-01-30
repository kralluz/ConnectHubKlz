export const RegisterForm = () => {
    return (
        <form
            id="registerForm"
            action="http://localhost:3000/api/clients"
            method="post"
        >
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required />

            <label for="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" required />

            <button type="submit">Cadastrar</button>
        </form>
    );
};
