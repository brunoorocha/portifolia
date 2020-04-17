import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { ProjectDetails as ProjectDetailsComponent } from './ProjectDetails'
const mapStateToProps = (state: AppState) => ({
  project: state.project.selectedProject
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch)

export const ProjectDetails = connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsComponent)
