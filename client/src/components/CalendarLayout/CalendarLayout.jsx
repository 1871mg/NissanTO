import * as React from 'react';
import { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { getDayForInput } from '../../utils/getToday';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  DayView,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './demo-database/demo';

const fetchOrders = async () => {
  const response = await fetch('http://localhost:5000/schedule', {
    method: 'GET',
    credentials: 'include',
  });
  const orders = await response.json()
  return orders.scheduleData;
};

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
        {data.location}
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

const SCHEDULER_STATE_CHANGE_ACTION = 'SCHEDULER_STATE_CHANGE';

const SchedulerContainer = ({
  currentDate, onCurrentDateChange,
  currentViewName, onCurrentViewNameChange,
}) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
    })()
  }, [])
  console.log(orders);

  return (
<>
{orders 
  &&
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
        onCurrentViewNameChange={onCurrentViewNameChange}
      />
      <DayView
        startDayHour={8}
        endDayHour={22}
        name='День'
        cellDuration={60}
      />

      <Appointments
        appointmentContentComponent={AppointmentContent}
      />

      <Toolbar flexibleSpaceComponent={FlexibleSpace} />
      <DateNavigator />
      <ViewSwitcher />
    </Scheduler>
  </Paper>
}
</>
  );
}

const schedulerInitialState = {
  data: appointments,
  currentDate: getDayForInput(new Date()),
  currentViewName: 'День',
  currentFilter: '',
};

const schedulerReducer = (state = schedulerInitialState, action) => {
  if (action.type === SCHEDULER_STATE_CHANGE_ACTION) {
    return {
      ...state,
      [action.payload.partialStateName]: action.payload.partialStateValue,
    };
  }
  return state;
};

export const createSchedulerAction = (partialStateName, partialStateValue) => ({
  type: SCHEDULER_STATE_CHANGE_ACTION,
  payload: {
    partialStateName,
    partialStateValue,
  },
});

const mapStateToProps = (state) => {
  return { ...state }; 
};


const mapDispatchToProps = dispatch => ({
  onCurrentDateChange: currentDate => dispatch(createSchedulerAction('currentDate', currentDate)),
  onCurrentViewNameChange: currentViewName => dispatch(createSchedulerAction('currentViewName', currentViewName)),
  onCurrentFilterChange: currentFilter => dispatch(createSchedulerAction('currentFilter', currentFilter)),
  onLocationsChange: locations => dispatch(createSchedulerAction('locations', locations)),
});

const ReduxSchedulerContainer = connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer);

const store = createStore(
  schedulerReducer,
  typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined,

)

export const CalendarLayout = () => {
  return (
    <Provider store={store}>
      <ReduxSchedulerContainer/>
    </Provider>
)};
