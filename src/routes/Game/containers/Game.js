import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};
import { doMovement, validMovement, resetBoard, setWinnerModal } from '../modules/reducer'
import LoadingModal from '../components/LoadingModal'
import WinnerModal from '../components/WinnerModal'

import React from 'react'
import './Game.scss'

class Game extends React.Component {

  move(position) {
    if(this.props.winner == -1) {
      this.props.validMovement(position)
    }

  }

  render() {
    return (
      <div>
        <RaisedButton label="Reset the game" style={style} onClick={this.props.resetBoard} />
        <LoadingModal open={this.props.loading} />
        <WinnerModal open={this.props.winnerModal} winner={this.props.winner} resetBoard={this.props.resetBoard} handleClose={() => (this.props.setWinnerModal(false))}/>
        <svg version="1.1" id="Board"  x="0px" y="0px" viewBox="-389 151 500 500">
          <path id="lines" className="black" d="M-328.3,198.2v380.2H50.3V198.2H-328.3z"/>
          <path id="underlines" className="white" d="M-322.5,203.9v181.5h57.4V261.3h124.1v-57.4H-322.5 M-136.4,203.9v57.4h124.1v124.1h57.4V203.9
            H-136.4 M-260.5,265.9v119.4h57.4v-62h62v-57.4H-260.5 M-136.4,265.9v57.4h62v62H-17V265.9H-136.4 M-198.5,328v119.4H-79V328H-198.5
             M-322.5,390v181.5h181.5v-57.4h-124.1V390H-322.5 M-260.5,390v119.4h119.4v-57.4h-62v-62H-260.5 M-74.4,390v62h-62v57.4H-17V390
            H-74.4 M-12.3,390v124.1h-124.1v57.4H45.1V390H-12.3z"/>
          <path id="pos0" className={this.props.plays[0]} onClick={() => (this.move(0))} d="M-322.5,219L-322.5,219c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-304.9,211-312.9,219-322.5,219z"/>
          <path id="pos1" className={this.props.plays[1]} onClick={() => (this.move(1))} d="M-139,221.5L-139,221.5c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-121.4,213.6-129.3,221.5-139,221.5z"/>
          <path id="pos2" className={this.props.plays[2]} onClick={() => (this.move(2))} d="M45.1,221.5L45.1,221.5c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C62.7,213.6,54.8,221.5,45.1,221.5z"/>
          <path id="pos3" className={this.props.plays[3]} onClick={() => (this.move(3))} d="M-264.8,283.5L-264.8,283.5c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-247.2,275.6-255.1,283.5-264.8,283.5z"/>
          <path id="pos4" className={this.props.plays[4]} onClick={() => (this.move(4))} d="M-138.7,283.5L-138.7,283.5c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-121.1,275.6-129,283.5-138.7,283.5z"/>
          <path id="pos5" className={this.props.plays[5]} onClick={() => (this.move(5))} d="M-17,283.5L-17,283.5c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C0.6,275.6-7.3,283.5-17,283.5z"/>
          <path id="pos6" className={this.props.plays[6]} onClick={() => (this.move(6))} d="M-201.3,343.6L-201.3,343.6c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-183.7,335.7-191.6,343.6-201.3,343.6z"/>
          <path id="pos7" className={this.props.plays[7]} onClick={() => (this.move(7))} d="M-138.7,342.3L-138.7,342.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-121.1,334.3-129,342.3-138.7,342.3z"/>
          <path id="pos8" className={this.props.plays[8]} onClick={() => (this.move(8))} d="M-75.9,342.3L-75.9,342.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-58.2,334.3-66.2,342.3-75.9,342.3z"/>
          <path id="pos9" className={this.props.plays[9]} onClick={() => (this.move(9))} d="M-328.3,405.3L-328.3,405.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-310.7,397.4-318.6,405.3-328.3,405.3z"/>
          <path id="pos10" className={this.props.plays[10]} onClick={() => (this.move(10))} d="M-264.8,405.3L-264.8,405.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-247.2,397.4-255.1,405.3-264.8,405.3z"/>
          <path id="pos11" className={this.props.plays[11]} onClick={() => (this.move(11))} d="M-201.3,405.3L-201.3,405.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-183.7,397.4-191.6,405.3-201.3,405.3z"/>
          <path id="pos12" className={this.props.plays[12]} onClick={() => (this.move(12))} d="M-79.9,407L-79.9,407c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-62.2,399.1-70.2,407-79.9,407z"/>
          <path id="pos13" className={this.props.plays[13]} onClick={() => (this.move(13))} d="M-14.2,405.3L-14.2,405.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C3.5,397.4-4.5,405.3-14.2,405.3z"/>
          <path id="pos14" className={this.props.plays[14]} onClick={() => (this.move(14))} d="M45.1,405.3L45.1,405.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C62.7,397.4,54.8,405.3,45.1,405.3z"/>
          <path id="pos15" className={this.props.plays[15]} onClick={() => (this.move(15))} d="M-201.3,467.3L-201.3,467.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-183.7,459.4-191.6,467.3-201.3,467.3z"/>
          <path id="pos16" className={this.props.plays[16]} onClick={() => (this.move(16))} d="M-139,467.3L-139,467.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-121.4,459.4-129.3,467.3-139,467.3z"/>
          <path id="pos17" className={this.props.plays[17]} onClick={() => (this.move(17))} d="M-76.7,467.3L-76.7,467.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-59.1,459.4-67,467.3-76.7,467.3z"/>
          <path id="pos18" className={this.props.plays[18]} onClick={() => (this.move(18))} d="M-260.5,527.1L-260.5,527.1c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-242.9,519.1-250.8,527.1-260.5,527.1z"/>
          <path id="pos19" className={this.props.plays[19]} onClick={() => (this.move(19))} d="M-136.4,527.1L-136.4,527.1c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-118.8,519.1-126.7,527.1-136.4,527.1z"/>
          <path id="pos20" className={this.props.plays[20]} onClick={() => (this.move(20))} d="M-17,527.1L-17,527.1c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C0.6,519.1-7.3,527.1-17,527.1z"/>
          <path id="pos21" className={this.props.plays[21]} onClick={() => (this.move(21))} d="M-322.5,592.3L-322.5,592.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-304.9,584.4-312.9,592.3-322.5,592.3z"/>
          <path id="pos22" className={this.props.plays[22]} onClick={() => (this.move(22))} d="M-139,592.3L-139,592.3c-9.7,0-17.6-7.9-17.6-17.6v0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6v0C-121.4,584.4-129.3,592.3-139,592.3z"/>
          <path id="pos23" className={this.props.plays[23]} onClick={() => (this.move(23))} d="M45.1,596.1L45.1,596.1c-9.7,0-17.6-7.9-17.6-17.6l0,0c0-9.7,7.9-17.6,17.6-17.6h0
            c9.7,0,17.6,7.9,17.6,17.6l0,0C62.7,588.2,54.8,596.1,45.1,596.1z"/>
        </svg>
      </div>
    )
  }
}

// Counter.propTypes = {
//   // counter     : React.PropTypes.number.isRequired,
//   // doubleAsync : React.PropTypes.func.isRequired,
//   // increment   : React.PropTypes.func.isRequired
// }

const mapStateToProps = (state) => {
  return state.game
}

const mapDispatchToProps = {
  doMovement, validMovement, resetBoard, setWinnerModal
}


export default connect(mapStateToProps, mapDispatchToProps)(Game)
