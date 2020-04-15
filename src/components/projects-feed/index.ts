import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { toggleProjectIsLiked } from '../../store/project/actions'
import { ProjectsFeed as ProjectsFeedComponent } from './ProjectsFeed'

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ toggleProjectIsLiked }, dispatch)

export const ProjectsFeed = connect(null, mapDispatchToProps)(ProjectsFeedComponent)
