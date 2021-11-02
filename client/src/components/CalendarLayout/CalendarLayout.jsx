import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';
import { ViewState } from '@devexpress/dx-react-scheduler';
import Loader from '../UI/Loader/Loader';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  DayView,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import { changeCurrentDay } from '../../redux/actionCreators/calendarAC';
import classes from './CalendarLayout.module.css';

const styles = ({ spacing, palette }) => ({
  flexibleSpace: {
    margin: '0 auto 0 0',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    width: '75px',
    marginLeft: spacing(1),
    marginTop: 0,
    marginBottom: 0,
    height: spacing(2.875),
  },
  locationSelector: {
    marginLeft: spacing(1),
    height: spacing(4.875),
  },
  button: {
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
    width: spacing(10),
    '@media (max-width: 800px)': {
      width: spacing(2),
      fontSize: '0.75rem',
    },
  },
  selectedButton: {
    background: palette.primary[400],
    color: palette.primary[50],
    '&:hover': {
      backgroundColor: palette.primary[500],
    },
    border: `1px solid ${palette.primary[400]}!important`,
    borderLeft: `1px solid ${palette.primary[50]}!important`,
    '&:first-child': {
      borderLeft: `1px solid ${palette.primary[50]}!important`,
    },
  },
  longButtonText: {
    '@media (max-width: 800px)': {
      display: 'none',
    },
  },
  shortButtonText: {
    '@media (min-width: 800px)': {
      display: 'none',
    },
  },
  title: {
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  textContainer: {
    lineHeight: 1,
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    height: '5px',
  },
  time: {
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '5px',
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  container: {
    width: '100%',
  },
  weekendCell: {
    backgroundColor: alpha(palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: alpha(palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundColor: alpha(palette.action.disabledBackground, 0.04),
    },
  },
  weekEnd: {
    backgroundColor: alpha(palette.action.disabledBackground, 0.06),
  },
});

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({
  classes, data, locale, formatDate, ...restProps
}) => {

  return (

<Appointments.AppointmentContent {...restProps} formatDate={formatDate} data={data} >
    <div className={classes.container}>
      <div className={classes.title}>
        {data.title}
      </div>
      <div className={classes.text}>
        {data.worker}
      </div>
      <div className={classes.textContainer}>
        <div className={classes.time}>
          {formatDate(data.startDate, { hour: 'numeric', minute: 'numeric' })}
        </div>
        <div className={classes.time}>
          {' - '}
        </div>
        <div className={classes.time}>
          {formatDate(data.endDate, { hour: 'numeric', minute: 'numeric' })}
        </div>
      </div>
    </div>
  </Appointments.AppointmentContent>
  )
}
)

const FlexibleSpace = withStyles(styles, { name: 'FlexibleSpace' })(
  ({ classes, ...restProps }) => (
    <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    </Toolbar.FlexibleSpace>
  ),
);

const CalendarLayout = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.ordersReducer.orders);
  const currentDate = useSelector(state => state.calendarReducer.currentDate);
  const currentViewName = useSelector(state => state.calendarReducer.currentViewName);
  const onCurrentDateChange = (currentDate) => dispatch(changeCurrentDay(currentDate));
  
  useEffect(() => {

  }, [])
  return (
<div className={classes.calendarContainer}>
{orders 
  ?
<Paper>
    <Scheduler
      data={orders}
      height={1177}
      locale='ru-Ru'
    >
      <ViewState
        currentDate={currentDate}
        onCurrentDateChange={onCurrentDateChange}
        currentViewName={currentViewName}
      />
      <DayView
        startDayHour={9}
        endDayHour={22}
        name=''
        cellDuration={30}
      />

      <Appointments
        appointmentContentComponent={AppointmentContent}
      />

      <Toolbar flexibleSpaceComponent={FlexibleSpace} />
      <DateNavigator />
      <ViewSwitcher />
    </Scheduler>
  </Paper>
  :
  <div className={classes.loader}><Loader /></div>

}
</div>
  );
}

export default CalendarLayout;

