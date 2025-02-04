import { useState } from "react";
import DropPanel from 'src/components/common/DropPanel';
import { FaCalendarAlt } from "react-icons/fa";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StartDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); 
  const [open, setOpen] = useState(true);

  const today = new Date(); 

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInCurrentMonth = daysInMonth(month, year);

    const days: JSX.Element[] = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-transparent">0</div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;

      days.push(
        <div
          key={day}
          className={`p-2 text-center cursor-pointer ${isSelected
            ? "bg-blue-500 text-white"
            : isToday
              ? "bg-gray-300 text-black"
              : "hover:bg-gray-200"
            }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const formatSelectedDate = () => {
    if (!selectedDate) {
      return "Select start date"; // Default text if no date is selected
    }
    return selectedDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className='w-full'>


      <div className="relative w-full">
        <div className='bg-white text-blue-600 p-6 rounded-xl shadow-md z-10 cursor-pointer relative flex justify-between items-start' onClick={() => setOpen(!open)}>
          <div>
            <div className='flex flex-row gap-2 items-center relative'>
              <div className="flex flex-col gap-2">
                <FaCalendarAlt className="text-[24px] text-gray-700" />
                <span className="text-primaryBlue font-semibold text-[25px]">
                  Select start date
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10 items-center">
          <span className='text-black text-[22px]'>{formatSelectedDate()}</span>
            <p>
              {open ? <ExpandMoreIcon fontSize="large" className="text-black" /> : <KeyboardArrowRightIcon fontSize="large" className="text-black" />}
            </p>
          </div>

        </div>
        <div
          className={`left-0 w-full px-6 transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[2000px]" : "max-h-0"}`}
        >
          <div className='bg-white rounded-b-xl p-6 shadow-lg'>
            <div className='flex flex-col gap-4'>
              <div className="w-80 mx-auto p-4 border rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    &lt;
                  </button>
                  <h2 className="text-lg font-semibold">
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={handleNextMonth}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    &gt;
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div key={`${day}-${index}`} className="font-bold">
                      {day}
                    </div>
                  ))}
                  {renderCalendar()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartDate;
