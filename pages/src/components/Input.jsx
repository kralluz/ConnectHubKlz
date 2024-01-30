export const Input = ({ label, name, type, placeholder }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};
