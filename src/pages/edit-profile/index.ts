import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { EditProfile as EditProfileComponent } from './EditProfile'

const mapStateToProps = (state: AppState) => ({
  user: state.user.authenticatedUser
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch)

export const EditProfile = connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent)
