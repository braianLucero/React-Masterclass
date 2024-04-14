import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CalendarEvent, CalendarModal, Navbar } from "../";
import { getMessageES, localizer } from "../../helpers/";
import { useState } from "react";
import { useUiStore } from "../../hooks";

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
  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

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
  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewchanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={event}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessageES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewchanged}
      />

      <CalendarModal />
    </>
  );
};
