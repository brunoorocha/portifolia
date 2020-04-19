import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { SignOut as SignOutComponent } from './SignOut'
import { signOut } from '../../store/auth/actions'
import { setAuthenticatedUser } from '../../store/user/actions'

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ signOut, setAuthenticatedUser }, dispatch)
export const SignOut = connect(null, mapDispatchToProps)(SignOutComponent)
