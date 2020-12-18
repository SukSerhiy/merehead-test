import React from 'react'
import {
  ListItem, ListItemText, ListItemSecondaryAction, IconButton, CircularProgress,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteRounded'
import EditIcon from '@material-ui/icons/EditRounded'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  listItem: {
    border: '1px solid rgba(0,0,0,0.5)',
    borderRadius: 5,
    marginBottom: 15,
    '&:hover': {
      boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    },
  },
  itemText: {
    '& > *': {
      fontWeight: 'bold',
    },
  },
})

const UserListItem = (props) => {
  const {
    id, name, surname, desc, deletingIds, onEdit, onDelete,
  } = props
  const isDeleting = deletingIds[id]
  const classes = useStyles()
  return (
    <ListItem className={classes.listItem}>
      <ListItemText
        className={classes.itemText}
        primary={`${name} ${surname}`}
        secondary={desc}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="edit"
          onClick={() => onEdit(id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => onDelete(id)}
        >
          {isDeleting ? (<CircularProgress size={30} />) : (<DeleteIcon />)}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserListItem
