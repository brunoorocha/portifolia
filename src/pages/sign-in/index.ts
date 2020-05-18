import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { signIn, facebookSignIn, googleSignIn } from '../../store/auth/actions'
import { SignIn as SignInComponent } from './SignIn'

const mapStateToProps = (state: AppState) => ({
  isLoadingSignIn: state.auth.isLoading,
  user: state.user.authenticatedUser
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ signIn, facebookSignIn, googleSignIn }, dispatch)

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent)
