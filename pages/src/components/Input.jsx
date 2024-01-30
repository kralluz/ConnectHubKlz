export const Input = ({ label, name, type, placeholder, register, error }) => {
    return (
        <div>
            <label htmlFor="email">{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error ? <p>{error.message}</p> : null}
        </div>
    );
};
