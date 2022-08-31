import { Timer } from './../../models/timer';
import { Cell, Chess, Position } from './../../models/chess.model';
import { Component, OnInit } from '@angular/core';
import { ChessService } from 'src/app/services/chess/chess.service';
import { PlayerService } from 'src/app/services/player/player.service';
import { GameService } from 'src/app/services/game/game.service';
import { Player } from 'src/app/models/player.model';
import { HistoryMoveService } from 'src/app/services/history/history-move.service';
import { Grap } from 'src/app/models/grap.model';
import { ShareService } from 'src/app/services/share/share.service';
import { ChessSkinService } from 'src/app/services/chess-skin/chess-skin.service';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  providers: [

  ]
})
export class ChessBoardComponent implements OnInit {
  chess!: Chess;
  currentPlayer: Player;
  turn1: Position = { x: -1, y: -1 };
  turn2: Position = { x: -1, y: -1 };
  table: Cell[][] = this.chessService.table
  grap: Grap;

  constructor(
    public chessService: ChessService,
    public playerService: PlayerService,
    public gameService: GameService,
    private shareService: ShareService,
    public skinChess: ChessSkinService,
    private historyMoveService: HistoryMoveService
  ) {
    this.grap = this.historyMoveService.newGrap();
    this.currentPlayer = this.playerService.getUserById(
      this.gameService.currentUserIDControll
    );

  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any, chess: Chess) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  //Thả 1 con cờ
  drop(ev: any, toPostion: Position) {
    ev.preventDefault();
    let fromP = this.chess.position;

    //kiểm tra uy hiếp vua(trừ quân vua)
    //kiểm tra nước đi vua(quân vua)

    let ismove = this.chessService.move(this.chess, toPostion, this.table);
    // di chuyển
    if (ismove) {
      this.gameService.changeCurrentPlayer(
        this.playerService.player1,
        this.playerService.player2
      );
      // lưu nước đi
      this.addGrap(toPostion)

      // lưu màu nước đi
      this.backgroundTurn(fromP, toPostion);

      // di chuyển lỗi
    } else if (fromP != toPostion) {
      this.shareService.openSnackbar('Nước đi không hợp lệ!', 'OK');
    }

    //xoá dots gợi ý
    this.chessService.clearDot();

    //kiểm tra chiếu vua
    let isCheckmat = this.chessService.isCheckmat(this.chess,this.table)
    if (isCheckmat) {
      let user = this.playerService.getUserById(this.gameService.currentUserIDControll)
      user.chessControl.isCheckmat = true
      user.chessControl.chessCheckmat = this.chess
    }
  }

  dragend(ev: any) {
    if (ev.which != 1) {
      return;
    }
  }

  //Cầm 1 con cờ
  mousedownImg(chess: Chess, ev: any) {
    this.chessService.clearDot();
    if (ev.which != 1) {
      return;
    }
    this.currentPlayer = this.playerService.getUserById(
      this.gameService.currentUserIDControll
    );
    this.chess = chess;
    if (
      this.gameService.canPickChess(
        this.currentPlayer.chessControl.chessID,
        chess.name
      )
    ) {
      this.grap = this.historyMoveService.newGrap();
      this.chess = chess;
      this.chessService.setDotsToTable(this.chessService.getEffDots(chess,this.table),this.table);
      this.chessService.getDotban(chess,this.table)


      this.historyMoveService.createGrapPosition();
      this.grap.grapFrom = this.historyMoveService.toFormatPosition(chess.position);
    }
  }

  startGame() {
    this.gameService.startGame(
      this.playerService.player1,
      this.playerService.player2
    );
  }

  backgroundTurn(fromP: Position, toP: Position) {
    this.turn1 = fromP;
    this.turn2 = toP;
    // console.log({ 1: this.turn1 });
    // console.log({ 2: this.turn1 });
  }

  addGrap(toPostion: Position) {
    this.grap.grapTo = this.historyMoveService.toFormatPosition(toPostion);
    this.grap.nameChess = this.chess.name;
    this.grap.uid = this.currentPlayer.id;
    this.grap.id = Date.now().toString();
    this.historyMoveService.addGrap(this.grap);
  }

  ngOnInit(): void {
    this.gameService.time.isTimeOut.subscribe((isTimeOut) => {
      if (isTimeOut == true) {
        console.log('hetgio')
      }
    });
  }
}
