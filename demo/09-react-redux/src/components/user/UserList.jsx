import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { List, AutoSizer } from 'react-virtualized'
import { userRemove } from '../../store/actions/userAction';
import style from './user.module.css'

function UserList() {
    const dispatch = useDispatch();
    
    const count = useSelector(s => s.user.count)
    const users = useSelector(s => s.user.userList)
    
    const userRow = ({key, index}) => {
        const person = users[index];

        const handleDelete = () => {
            // dispatch({type: 'user/remove', payload: person.id});
            dispatch(userRemove(person.id));
        }

        return (
            <li key={key} className={style.listItem}>
                {person.firstname + ' ' +person.lastname}<span onClick={handleDelete}>X</span>
            </li>
        )
    }

  return (
    <>
        <h3>Liste des personnes</h3>
        <AutoSizer disableHeight>
            {({width}) => (
            <List 
            width={width}
            height={110}
            rowCount={count}
            rowHeight={22}
            rowRenderer={userRow}
            />
            )}
        </AutoSizer>
    </>
  )
}

export default UserList