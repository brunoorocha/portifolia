import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { signIn } from '../../store/auth/actions'
import { SignIn } from './SignIn'

const mapStateToProps = (state: AppState) => ({
    isLoadingSignIn: state.auth.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ signIn }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
