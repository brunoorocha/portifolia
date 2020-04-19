import { connect } from 'react-redux'
import { AppState } from '../../store/app/types'
import { NavBar as NavBarComponent } from './NavBar'

const mapStateToProps = (state: AppState) => ({
  user: state.user.authenticatedUser
})

export const NavBar = connect(mapStateToProps)(NavBarComponent)
