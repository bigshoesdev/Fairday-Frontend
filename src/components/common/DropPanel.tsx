import React, { useState, ReactNode } from "react";

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
                    {open ? "▲" : "▼"}
                </p>
            </div>
            <div
                className={` left-0 w-full px-6 transition-all rounded-b-xl  duration-300 ${open ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
            >
                <div className={contentClassName}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DropPanel;