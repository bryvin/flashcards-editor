import React from 'react';
import CardMenu from '../CardMenu';

export default class CardsShowPartYesFlip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        show: false,
        flip: true,
      };
  }

  onToggleShow = () => {
    this.setState({
      show: !this.state.show
    });
    return true
  };

  render() {
      // get next card
    var { front, back, notes } = this.props.entry;
    var { id, onEdit, onRemove, show, flip} = this.props;
    //var { show, flip } = this.props.state

    return (
        <div className="sk-notification sk-base" onClick={this.onToggleShow}>
        <div className="card-entry">
          <div className="card-details">
            <div className="card-info">
              <div className="card-section-title">Back:</div>
              <div className="card-front">{back}<br></br><br></br></div>
              <div className="card-section-title">Front: </div>
              {this.state.show ? ([
              <div className="card-back">{front}<br></br><br></br></div>
                ]) : (
                <div className="hidden-text">
                  <br></br>••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• •••
                  <br></br>••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• ••• •••
                  <br></br>
                </div>
                )}
              {this.state.show && notes && (
                <div className="card-notes-row">
                  <div className="card-section-title">Notes </div>
                  <div className="card-notes">{notes}</div>
                </div>
                )}
            </div>
          </div>
            <div className="card-options">
              <CardMenu
                onEdit={onEdit.bind(this, id)}
                onRemove={onRemove.bind(this, id)}
              />
            </div>
        </div>
      </div>
    );
  }
}
