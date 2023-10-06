import { IAppRowProps } from "../../types/Types";
import Button from "../UI/Button/Button";
import { FC } from "react";
import { TrashIcon, NoSymbolIcon } from "@heroicons/react/24/solid";

const Row: FC<IAppRowProps> = ({ ...props }) => {
    return (
        <>
            {props.children}
            <Button onClick={props.onDisableClick} className="bg-slate-400">
                <NoSymbolIcon className="w-5 h-5 text-white" />
            </Button>
            <Button onClick={props.onDeleteClick} className="bg-secondary">
                <TrashIcon className="w-5 h-5 text-white" />
            </Button>
        </>
    );
};

export default Row;
