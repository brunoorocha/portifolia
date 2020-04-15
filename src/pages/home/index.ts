import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { fetchAllProjects } from '../../store/project/actions'
import { AppState } from '../../store/app/types'
import { HomePage } from './Home'

const mapStateToProps = (state: AppState) => ({
  feed: state.project.projectsFeed,
  isLoadingFeed: state.project.isFetchingAll,
  user: state.auth.authenticatedUser
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchAllProjects  }, dispatch)

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage)
