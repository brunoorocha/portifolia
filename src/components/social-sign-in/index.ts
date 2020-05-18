import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { facebookSignIn, googleSignIn } from '../../store/auth/actions'
import { pushMessage } from '../../store/message-center/actions'
import { SocialSignIn as SocialSignInComponent } from './SocialSignIn'

const mapStateToProps = (state: AppState) => ({
  isLoadingFacebookSignIn: state.auth.isLoadingFacebookAuth,
  isLoadingGoogleSignIn: state.auth.isLoadingGoogleAuth,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ facebookSignIn, googleSignIn, pushMessage }, dispatch)

export const SocialSignIn = connect(mapStateToProps, mapDispatchToProps)(SocialSignInComponent)
