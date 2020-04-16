import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { Upload as UploadComponent } from './Upload'

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch)

export const Upload = connect(mapStateToProps, mapDispatchToProps)(UploadComponent)
