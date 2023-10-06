export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string,
    name: string,
    value: string,
};

export interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement>{
    options: Array<string>
};

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
}

export interface IAppRow {
    id: number,
    sign: string,
    value: string,
    disabled: boolean,
};

export interface IAppRowProps {
    children: React.ReactNode,
    onInputChange?: React.ChangeEventHandler,
    onDeleteClick?: React.MouseEventHandler,
    onDisableClick?: React.MouseEventHandler,
};
