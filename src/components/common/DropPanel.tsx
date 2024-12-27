import React, { useState, ReactNode } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DropPanelProps {
    header: ReactNode;
    children: ReactNode;
    headerClassName?: string;
    contentClassName?: string;
}

const DropPanel: React.FC<DropPanelProps> = ({
    header,
    children,
    headerClassName = "bg-white text-blue-600 p-6 rounded-xl shadow-md z-10 cursor-pointer relative flex justify-between items-start",
    contentClassName = "bg-white rounded-b-xl p-6 shadow-lg",
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            <div className={headerClassName}>
                <div>
                    {header}
                </div>
                <p onClick={() => setOpen(!open)}>
                    {open ? <ExpandMoreIcon fontSize="large" className="text-black"/> : <KeyboardArrowRightIcon fontSize="large" className="text-black"/>}
                </p>
            </div>
            <div
                className={`left-0 w-full px-6 transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[2000px]" : "max-h-0"}`}
            >
                <div className={contentClassName}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default DropPanel;
