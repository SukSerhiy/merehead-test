import React, { useState, useEffect } from 'react'
import { List, Button } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'
import LoadingWrapper from './shared/LoadingWrapper'
import UserListItem from './shared/UserListItem'

const useStyles = makeStyles({
  root: {
    height: '100%',
    padding: '10px 3%',
  },
  addButtonContainer: {
    display: 'flex',
  },
  addButton: {
    backgroundColor: '#eeeeee',
    marginLeft: 15,
    borderRadius: '50%',
  },
})

const COUNT_ON_PAGE = 5

const Home = (props) => {
  const {
    fetchUsers, deleteUser, isFetching, isDeleting, items,
  } = props
  const [ currentPage, setCurrentPage ] = useState(1)
  const classes = useStyles()
  const history = useHistory()
  const totalCount = items.length
  useEffect(() => {
    fetchUsers()
  }, [ fetchUsers ])
  const onPageChanged = (e) => {
    const newPage = e.target.innerText
    setCurrentPage(+newPage)
  }
  const offset = currentPage - 1
  const currentItems = items.slice(offset * COUNT_ON_PAGE, offset * COUNT_ON_PAGE + COUNT_ON_PAGE)
  useEffect(() => {
    if (currentItems.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }, [ currentItems.length, currentPage ])
  const handleEditClick = (id) => {
    history.push(`/user/${id}`)
  }
  return (
    <div className={classes.root}>
      <LoadingWrapper
        isLoading={isFetching}
      >
        <div className={classes.addButtonContainer}>
          <h3>Users list</h3>
          <Button
            className={classes.addButton}
            onClick={() => history.push('/user-new')}
          >
            <AddIcon />
          </Button>
        </div>
        <List>
          {currentItems.map((item) => (
            <UserListItem
              key={item.id}
              deletingIds={isDeleting}
              onDelete={deleteUser}
              onEdit={handleEditClick}
              {...item}
            />
          ))}
        </List>
        {totalCount > COUNT_ON_PAGE && (
          <Pagination
            count={Math.ceil(totalCount / COUNT_ON_PAGE)}
            page={currentPage}
            onClick={onPageChanged}
          />
        )}
      </LoadingWrapper>
    </div>
  )
}

export default Home
