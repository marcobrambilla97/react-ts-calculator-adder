import { CalculatorIcon } from "@heroicons/react/24/solid";

const Logo = () => {
    return (
        <h1 className="flex items-baseline gap-1 text-3xl font-bold mb-8">
            <CalculatorIcon className="w-10 h-10 -rotate-12 translate-y-2" />
            React
            <strong className="font-thin text-xl text-secondary pl-1">
                calculator
            </strong>
        </h1>
    );
};

export default Logo;
