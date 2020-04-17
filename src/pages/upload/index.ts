import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { Upload as UploadComponent } from './Upload'
import { createProject, setCreatedProject, setSelectedProject } from '../../store/project/actions'

const mapStateToProps = (state: AppState) => ({
  isCreatingProject: state.project.isCreatingProject,
  createdProject: state.project.createdProject
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ createProject, setCreatedProject, setSelectedProject }, dispatch)

export const Upload = connect(mapStateToProps, mapDispatchToProps)(UploadComponent)
