import { connect } from 'react-redux'
import { fetchUsers, editUser } from '../actions/users'
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
    title: 'Edit user',
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  onSubmit: (id, { name, surname, desc }) => dispatch(editUser(id, { name, surname, desc })),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
