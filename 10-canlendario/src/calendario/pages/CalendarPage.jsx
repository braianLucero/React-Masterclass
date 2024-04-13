import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CalendarEvent, Navbar } from "../";
import { getMessageES, localizer } from "../../helpers/";

const event = [
  {
    title: "cumpleanios ",
    notes: "hay que comprar los globos ",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "braian",
    },
  },
];
export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessageES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};
