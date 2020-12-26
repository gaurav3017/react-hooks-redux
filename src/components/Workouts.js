import React, { useState } from 'react'
import Activity from './Activity'
import { useSelector } from 'react-redux'
import AddActivity from './AddActivity'

const Workouts = () => {
    const activities = useSelector(state => state.activities)
    const [add, setAdd] = useState(false)

    return (
        <div className={"workouts-wrapper"}>
            <h2><u>React-Hooks with Redux</u></h2>
            <h5>React-hooks with Redux implementation example below. No Saga. Concerned files: Activity.js, AddActivity.js, Workout.js, activitiesReducer.js</h5>
            <h5>Simple activities tracker that allows add and delete operations of activities.</h5>
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            {add && <AddActivity />}
            {activities.map(activity => 
                <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration} />
            )}
            <br /><br />
        </div>
    )
}

export default Workouts
