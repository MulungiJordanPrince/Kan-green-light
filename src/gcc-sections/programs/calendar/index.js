import FullCalendar from '@fullcalendar/react'; // => request placed at the top
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
//
import { useState, useRef, useEffect } from 'react';
// redux
import { useDispatch } from '../../../redux/store';
import { getEvents } from '../../../redux/slices/calendar';
import useResponsive from '../../../hooks/useResponsive';
// sections
import { Scrollbar } from '../../../components';
import CalendarStyle from './CalendarStyle';
import CalendarToolbar from './CalendarToolbar';
import { Box, Card } from '@mui/material';

// ----------------------------------------------------------------------

const events = [
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    allDay: false,
    status: false,
    textColor: '#FF4842',
    description: 'Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.',
    start: '2022-03-24T07:30:39.536Z',
    end: '2022-03-24T09:00:39.536Z',
    title: 'Believing These 7 Myths About GccEvent Keeps You From Growing',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    allDay: false,
    status: false,
    textColor: '#FF4842',
    description: 'Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.',
    start: '2022-03-30T02:00:39.536Z',
    end: '2022-03-30T05:30:39.536Z',
    title: 'Don\'t Waste Time! 7 Facts Until You Reach Your GccEvent',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
    allDay: false,
    status: false,
    textColor: '#FF4842',
    description: 'Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.',
    start: '2022-04-08T08:00:39.536Z',
    end: '2022-04-08T12:00:39.536Z',
    title: 'How 7 Things Will Change The Way You Approach GccEvent',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
    allDay: false,
    textColor: '#FF4842',
    status: false,
    description: 'Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.',
    start: '2022-04-05T08:00:39.536Z',
    end: '2022-04-05T12:00:39.536Z',
    title: 'GccEvent Awards: 7 Reasons Why They Don\'t Work & What You Can Do About It',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
    allDay: false,
    status: true,
    textColor: '#1890FF',
    description: 'Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores.',
    start: '2022-04-08T05:15:39.536Z',
    end: '2022-04-08T05:30:39.536Z',
    title: 'GccEvent Doesn\'t Have To Be Hard. Read These 7 Tips',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
    allDay: true,
    status: false,
    textColor: '#FF4842',
    description: 'Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.',
    start: '2022-04-01T16:59:59.999Z',
    end: '2022-04-01T17:00:00.000Z',
    title: 'GccEvent Is Your Worst Enemy. 7 Ways To Defeat It',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
    allDay: false,
    status: true,
    textColor: '#1890FF',
    description: 'Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.',
    start: '2022-04-08T07:45:39.536Z',
    end: '2022-04-08T07:50:39.536Z',
    title: 'GccEvent On A Budget: 7 Tips From The Great Depression',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
    allDay: false,
    status: true,
    textColor: '#1890FF',
    description: 'Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias natus ut omnis qui fugiat.',
    start: '2022-04-08T08:50:39.536Z',
    end: '2022-04-08T08:55:39.536Z',
    title: 'Knowing These 7 Secrets Will Make Your GccEvent Look Amazing',
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
    allDay: false,
    status: true,
    textColor: '#1890FF',
    description: 'Nam et error exercitationem qui voluptate optio. Officia omnis qui accusantium ipsam qui.',
    start: '2022-04-13T07:12:39.536Z',
    end: '2022-04-13T07:20:39.536Z',
    title: 'Master The Art Of GccEvent With These 7 Tips',
  },
];

export default function ExpertSelectSlot() {

  const dispatch = useDispatch();

  const isDesktop = useResponsive('up', 'sm');

  const calendarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState(isDesktop ? 'dayGridMonth' : 'listWeek');

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isDesktop ? 'dayGridMonth' : 'listWeek';
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [isDesktop]);

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectEvent = (arg) => {
    console.log(arg.event._def);
  };

  return (
    <Box sx={{ py: 8, px: { xs: 0.5, md: 2, lg: 4 } }}>
      <Card>

        <CalendarStyle>
          <CalendarToolbar
            date={date}
            view={view}
            onNextDate={handleClickDateNext}
            onPrevDate={handleClickDatePrev}
            onToday={handleClickToday}
            onChangeView={handleChangeView}
          />
          <FullCalendar
            weekends
            editable
            droppable
            selectable
            events={events}
            ref={calendarRef}
            rerenderDelay={10}
            initialDate={date}
            initialView={view}
            dayMaxEventRows={3}
            eventDisplay='block'
            headerToolbar={false}
            allDayMaintainDuration
            eventResizableFromStart
            eventClick={handleSelectEvent}
            height={isDesktop ? 720 : 'auto'}
            plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
          />
        </CalendarStyle>
      </Card>
    </Box>
  );
}
