import { useEffect, useState } from "react";
import Button from "./components/UI/Button/Button";
import Row from "./components/Row/Row";
import Select from "./components/UI/Select/Select";
import Input from "./components/UI/Input/Input";
import { IAppRow } from "./types/Types";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Logo from "./components/Logo/Logo";

function App() {
    const [rows, setRows] = useState<IAppRow[]>([]);

    const handleAddRow = () => {
        const newRow: IAppRow = {
            id: Math.floor(+new Date()) + Math.floor(Math.random() * 1000),
            sign: "+",
            value: "",
            disabled: false,
        };
        setRows([...rows, newRow]);
    };

    const handleDeleteRow = (id: number) => {
        const updatedeRows = rows.filter((row) => row.id !== id);
        setRows(updatedeRows);
    };

    const handleDisableRow = (id: number) => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.id === id ? { ...row, disabled: !row.disabled } : row
            )
        );
    };

    const handleOnChange = (key: string, value: string, id: number) => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.id === id ? { ...row, [key]: value } : row
            )
        );
    };

    const calculateResult = (): number => {
        return rows.reduce((total: any, row: IAppRow) => {
            if (!row.disabled) {
                return row.sign === "+"
                    ? total + +row.value
                    : total - +row.value;
            }
            return total;
        }, 0);
    };

    //Init one row on component's mount
    useEffect(() => {
        handleAddRow();
    }, []);

    return (
        <div className="wrapper">
            <div className="md:max-w-2xl m-auto py-8 px-3">
                <div className="flex items-center justify-between">
                    <Logo />
                    <Button
                        onClick={handleAddRow}
                        className="ml-auto flex items-center gap-2 mb-6 text-sm font-medium text-white bg-primary rounded-full !pr-5 !h-[36px]"
                    >
                        <PlusCircleIcon className="w-6 h-6 text-white" />
                        Add a new row
                    </Button>
                </div>
                <ul>
                    {rows?.map((row) => (
                        <li
                            key={row.id}
                            className={`flex items-center gap-3 mb-4 ${
                                row.disabled ? "disabled" : ""
                            }`}
                        >
                            <Row
                                onDeleteClick={() => handleDeleteRow(row.id)}
                                onDisableClick={() => handleDisableRow(row.id)}
                            >
                                <Select
                                    options={["+", "-"]}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLSelectElement>
                                    ) =>
                                        handleOnChange(
                                            "sign",
                                            e.target.value,
                                            row.id
                                        )
                                    }
                                />
                                <Input
                                    type="text"
                                    value={row.value}
                                    name={`${row.id}`}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                        handleOnChange(
                                            "value",
                                            e.target.value,
                                            row.id
                                        )
                                    }
                                />
                            </Row>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    Risultato:{" "}
                    <strong className="text-secondary">
                        {calculateResult()}
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default App;
