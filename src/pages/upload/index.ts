import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { Upload as UploadComponent } from './Upload'
import { createProject } from '../../store/project/actions'

const mapStateToProps = (state: AppState) => ({
  isCreatingProject: state.project.isCreatingProject
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ createProject }, dispatch)

export const Upload = connect(mapStateToProps, mapDispatchToProps)(UploadComponent)
