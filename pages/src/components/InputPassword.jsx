import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = ({ label, register, placeholder, error }) => {
    const [IsHidden, setIsHidden] = useState(true);

    return (
        <>
            <div>
                <label>
                    {label}
                    <input
                        type={IsHidden ? "password" : "text"}
                        {...register}
                        placeholder={placeholder}
                    />
                </label>
                {error ? (
                    <span >{error.message}</span>
                ) : null}
                <button type="button" onClick={() => setIsHidden(!IsHidden)}>
                    {IsHidden ? <MdVisibility color="white" /> : <MdVisibilityOff color="white" />}
                </button>
            </div>
        </>
    );
};
