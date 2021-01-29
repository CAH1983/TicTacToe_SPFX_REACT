import * as React from 'react';
import styles from './TicTacToeGame.module.scss';
import { ITicTacToeGameProps } from './ITicTacToeGameProps';
import { css } from 'office-ui-fabric-react';


// SQUARE component
export class Square extends React.Component<any, any> {
  render() {
    return (
      <div className={css('ms-Grid-col ms-u-sm2 ms-u-md4', styles.squareCont)}>
        <h2>{this.props.value} </h2>
      </div>
    );
  }
}

// BOARD component
export class Board extends React.Component<any, any> {
  constructor(props) {
    super(props);

    var initialVals = ['', 'X', 'O',
      'O', 'X', ' ',
      ' ', 'X', ' '];

    this.state = {
      values: initialVals,
    }
  }

  private renderRow(startIndex:number, colCount:number) {
    var col=[];

    for(var i=0; i<colCount; i++){
      col.push(<Square value={this.state.value[startIndex]}/>);
      startIndex++;

    }

    return (
      <div className="ms-Grid-row">
        {col}
      </div>
    );
  }

  render() {
    return (
      <div className={css('ms-Grid', styles.gridCont)}>
        <h2>Hello from Board</h2>
        {this.renderRow(0, 3)}
        {this.renderRow(3, 3)}
        {this.renderRow(6, 3)}
      </div>
    );
  }
}

// GAME component
export class Game extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>Hello from {this.props.name}</h2>
        <Board />
      </div>
    );
  }
}

export default class TicTacToeGame extends React.Component<ITicTacToeGameProps, {}> {
  public render(): React.ReactElement<ITicTacToeGameProps> {
    return (
      <div className={styles.ticTacToeGame}>
        <div className={styles.container}>

          <Game name="Tic Tac Toe Game" />

        </div>
      </div>
    );
  }
}
