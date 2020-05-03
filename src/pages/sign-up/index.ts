import { connect } from 'react-redux'
import { AppState } from '../../store/app/types'
import { Dispatch, bindActionCreators } from 'redux'
import { createUser } from '../../store/user/actions'
import { facebookSignIn } from '../../store/auth/actions'
import { SignUp as SignUpComponent } from './SignUp'

const mapStateToProps = (state: AppState) => ({
  isCreateUserLoading: state.user.isCreateUserLoading,
  user: state.user.authenticatedUser
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ createUser, facebookSignIn }, dispatch)

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent)
