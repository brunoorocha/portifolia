import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { signIn } from '../../store/auth/actions'
import { SignIn as SignInComponent } from './SignIn'

const mapStateToProps = (state: AppState) => ({
  isLoadingSignIn: state.auth.isLoading,
  user: state.auth.authenticatedUser
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ signIn }, dispatch)

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent)
