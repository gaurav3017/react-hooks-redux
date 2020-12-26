import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'

const Users = () => {
    const dispatch = useDispatch()

    const { users, loading, error } = useSelector(state => state.users)

    useEffect(() => {
        dispatch({
            type: "GET_USERS_REQUESTED"
        })
    }, [dispatch])

    const fetchUsers = () => {
        dispatch({
            type: "GET_USERS_REQUESTED"
        })
    }

    return (
        <>
            <hr />
            <h2><u>React-Hooks with Redux & Saga</u></h2>
            <h5>React-hooks with Redux and Saga implementation example below. Concerned files: Users.js, Card.js, userReducer.js, userSaga.js</h5>
            <h5>Fetch users from jsonPlaceholder and show names list.</h5>
            <button onClick={() => fetchUsers()}>Fetch again</button>
            {loading && <p>Loading...</p>}
            {users && users.length > 0 && users.map(user => <Card key={user.id} name={user.name} />)}
            {users && users.length < 1 && !loading && <p>No users available</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default Users
