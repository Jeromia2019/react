import React from 'react';
import {useSelector} from 'react-redux'
import { List, AutoSizer } from 'react-virtualized'

function UserList() {
    
        const count = useSelector(s => s.user.count)
        const users = useSelector(s => s.user.userList)

    const userRow = ({key, index}) => {
        const person = users[index]

        return (
            <li key={key}>
                {person.firstname}
                {' '}
                {person.lastname}
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
            rowCount={users.length}
            rowHeight={22}
            rowRenderer={userRow}
            />
            )}
        </AutoSizer>
    </>
  )
}

export default UserList