import { connect } from 'react-redux'
import { AppState } from '../../store/app/types'
import { Dispatch, bindActionCreators } from 'redux'
import { Profile as ProfileComponent } from './Profile'
import { fetchUserWithUsername, fetchProjectsForUser, fetchLikedProjectsForUser } from '../../store/user/actions'

const mapStateToProps = (state: AppState) => ({
  isLoadingUserProfile: state.user.isFetchUserLoading,
  user: state.user.userProfile,
  isAuthenticatedUser: state.user.userProfile?.id === state.user.authenticatedUser?.id
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchUserWithUsername, fetchProjectsForUser, fetchLikedProjectsForUser }, dispatch)

export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
