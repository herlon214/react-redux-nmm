import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LoadingModal extends React.Component {
  render() {


    return (
      <div>
        <Dialog
          title="Loading next movement..."
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          style={{'textAlign': 'center'}}
        >
          <CircularProgress size={80} thickness={5} />
        </Dialog>
      </div>
    );
  }
}
