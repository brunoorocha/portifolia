import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { setToken } from '../../store/auth/actions'
import { AppState } from '../../store/app/types'
import { RoutesAuth as RoutesAuthComponent } from './routes-auth'

const mapStateToProps = (state: AppState) => ({
  user: state.auth.authenticatedUser,
  token: state.auth.token
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setToken }, dispatch)

export const RoutesAuth = connect(mapStateToProps, mapDispatchToProps)(RoutesAuthComponent)
