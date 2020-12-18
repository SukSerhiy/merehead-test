import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const LoadinWrapper = (props) => {
  const { isLoading, children } = props
  const classes = useStyles()
  return (
    <>
      {isLoading ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : children}
    </>
  )
}

export default LoadinWrapper
