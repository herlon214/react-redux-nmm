import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class WinnerModal extends React.Component {


  render() {
    const actions = [
      <FlatButton
        label="Reset board"
        primary={true}
        onTouchTap={this.props.resetBoard}
      />,
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="We got a WINNER!"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          <div style={{'textAlign': 'center'}}><h4>Player {this.props.winner} WINS!</h4></div>
        </Dialog>
      </div>
    );
  }
}
