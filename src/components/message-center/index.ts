import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AppState } from '../../store/app/types'
import { pushMessage } from '../../store/message-center/actions'
import { MessageCenter } from './MessageCenter'

const mapStateToProps = (state: AppState) => ({
  messages: state.messageCenter.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ pushMessage }, dispatch)

export const MessageCenterProvider = connect(mapStateToProps, mapDispatchToProps)(MessageCenter)

