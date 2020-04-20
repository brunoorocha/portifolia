import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { toggleProjectIsLiked } from '../../store/project/actions'
import { ProjectsFeed as ProjectsFeedComponent } from './ProjectsFeed'
import { AppState } from '../../store/app/types'

const mapStateToProps = (state: AppState) => ({
  user: state.user.authenticatedUser
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ toggleProjectIsLiked }, dispatch)

export const ProjectsFeed = connect(mapStateToProps, mapDispatchToProps)(ProjectsFeedComponent)
