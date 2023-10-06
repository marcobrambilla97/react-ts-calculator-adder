import { FC } from "react";
import { ISelectProps } from "../../../types/Types";

const Select: FC<ISelectProps> = ({ ...props }) => {
    return (
        <select
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            className="outline-none px-3 pl-4 pr-6 rounded-md shadow-md border border-slate-400/10 h-[42px] font-medium"
        >
            {props.options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
