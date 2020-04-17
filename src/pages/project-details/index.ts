import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { fetchProjectWithId } from '../../store/project/actions'
import { ProjectDetails as ProjectDetailsComponent } from './ProjectDetails'

const mapStateToProps = (state: AppState) => ({
  project: state.project.selectedProject
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchProjectWithId }, dispatch)

export const ProjectDetails = connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsComponent)
