import { IInputProps } from "../../../types/Types";
import { FC } from "react";

const Input: FC<IInputProps> = ({ ...props }) => {
    return (
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onClick={props.onClick}
            className="outline-none w-full px-3 py-2 rounded-md shadow-md border border-slate-400/10"
        />
    );
};

export default Input;
