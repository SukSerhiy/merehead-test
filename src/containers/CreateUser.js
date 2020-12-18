import { connect } from 'react-redux'
import { createUser } from '../actions/users'
import UserForm from '../components/UserForm'

const mapStateToProps = (state) => {
  const {
    users: {
      isFetching,
      isSaving,
      items,
    },
  } = state
  return {
    isFetching,
    isSaving,
    items,
    title: 'Create new user',
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (_, { name, surname, desc }) => dispatch(createUser({ name, surname, desc })),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
