import React, { useEffect, useReducer } from 'react'
import { TextField, Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import LoadingWrapper from './shared/LoadingWrapper'

const useStyles = makeStyles({
  root: {
    height: '100%',
    padding: '10px 10%',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    border: '1px solid grey',
    borderRadius: 10,
    padding: '0px 6% 60px 6%',
    marginTop: 15,
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    textAlign: 'center',
  },
  inputsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > *': {
      width: '40%',
    },
    marginTop: 60,
  },
  desc: {
    width: '100%',
    marginTop: 30,
  },
  buttonsGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 30,
    '& > *': {
      width: '30%',
    },
  },
})

const initialState = {
  name: '',
  surname: '',
  desc: '',
}

const actionTypes = {
  SET_NAME: 'SET_NAME',
  SET_SURNAME: 'SET_SURNAME',
  SET_DESC: 'SET_DESC',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.value,
      }
    case actionTypes.SET_SURNAME:
      return {
        ...state,
        surname: action.value,
      }
    case actionTypes.SET_DESC:
      return {
        ...state,
        desc: action.value,
      }
    case actionTypes.RESET_DATA:
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        desc: action.desc,
      }
    default:
      throw new Error()
  }
}

const UserForm = (props) => {
  const {
    isFetching, isSaving, items, fetchUsers = () => {}, onSubmit, title,
  } = props
  const classes = useStyles()
  const { id } = useParams()
  const history = useHistory()
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const item = items.find((_item) => _item.id === +id)
  useEffect(() => {
    if (id && items.length === 0) {
      fetchUsers()
    }
  }, [ id, fetchUsers, items.length ])
  useEffect(() => {
    if (id && item) {
      const { name, surname, desc } = item
      dispatch({
        type: actionTypes.SET_NAME,
        value: name,
      })
      dispatch({
        type: actionTypes.SET_SURNAME,
        value: surname,
      })
      dispatch({
        type: actionTypes.SET_DESC,
        value: desc,
      })
    }
  }, [ id, item ])
  const onNameChange = (e) => {
    dispatch({
      type: actionTypes.SET_NAME,
      value: e.target.value,
    })
  }
  const onSurnameChange = (e) => {
    dispatch({
      type: actionTypes.SET_SURNAME,
      value: e.target.value,
    })
  }
  const onDescChange = (e) => {
    dispatch({
      type: actionTypes.SET_DESC,
      value: e.target.value,
    })
  }
  return (
    <div className={classes.root}>
      <LoadingWrapper
        isLoading={isFetching}
      >
        <Button
          onClick={() => history.push(`/`)}
        >
          <ArrowBackIosIcon />
          Go home
        </Button>
        <div className={classes.formWrapper}>
          <div className={classes.form}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.inputsRow}>
              <TextField
                label="Name"
                value={state.name}
                onChange={onNameChange}
              />
              <TextField
                label="Surname"
                value={state.surname}
                onChange={onSurnameChange}
              />
            </div>
            <TextField
              className={classes.desc}
              label="Desc"
              value={state.desc}
              onChange={onDescChange}
              multiline
              rows={2}
              rowsMax={4}
            />
            <div className={classes.buttonsGroup}>
              <Button
                variant="outlined"
                onClick={() => dispatch({
                  type: actionTypes.RESET_DATA,
                  name: id ? item.name : '',
                  surname: id ? item.surname : '',
                  desc: id ? item.desc : '',
                })}
              >
                Clear
              </Button>
              <Button
                variant="outlined"
                color="primary"
                disabled={isSaving}
                onClick={() => onSubmit(id, state)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </LoadingWrapper>
    </div>
  )
}

export default UserForm
