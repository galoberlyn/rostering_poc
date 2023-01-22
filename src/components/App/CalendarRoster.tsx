import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Employees } from '../../types/Employees';
import { FC, useEffect, useState } from 'react';
const localizer = momentLocalizer(moment);

interface ICalendarRoster {
  events: () => any;
  setOpen: (isOpen: boolean) => void;
  getEmployeeById: (id: number) => void;
}

export const CalendarRoster: FC<ICalendarRoster> = ({ events, setOpen, getEmployeeById }) => {
  
  return (
    <div>
      {events() && (
        <Calendar
          localizer={localizer}
          defaultDate={events()[0].start}
          events={events()}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(event) => {
            getEmployeeById(event.id)
            setOpen(true);
          }}
          style={{ height: 600 }}
          eventPropGetter={(event: any) => {
            const { background_colour, name, id, text_colour } = event.styleProps;
            return { 
              style: {
                backgroundColor: background_colour,
                color: text_colour,
                borderRadius: '0px',
                opacity: 0.8,
                border: '0px',
                display: 'block'
              } 
            }
          }}
        />
      )}
  </div>
  )
}