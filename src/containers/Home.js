import { connect } from 'react-redux'
import { fetchUsers, deleteUser } from '../actions/users'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  const {
    users: {
      isFetching,
      isDeleting,
      items,
    },
  } = state
  return {
    isFetching,
    isDeleting,
    items,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  deleteUser: (id) => dispatch(deleteUser(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
