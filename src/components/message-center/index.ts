import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { pushMessage } from '../../store/message-center/actions'
import { MessageCenter as MessageCenterComponent } from './MessageCenter'

const mapStateToProps = (state: AppState) => ({
  messages: state.messageCenter.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ pushMessage }, dispatch)

export const MessageCenter = connect(mapStateToProps, mapDispatchToProps)(MessageCenterComponent)

