import { FC } from "react";
import { IButtonProps } from "../../../types/Types";

const Button: FC<IButtonProps> = ({ ...props }) => {
    return (
        <button className={`outline-none py-2 px-3 rounded-md shadow-md h-[42px] ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
