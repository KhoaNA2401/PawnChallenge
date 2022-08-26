import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';
import { PlayerService } from 'src/app/services/player/player.service';
@Component({
  selector: 'app-graps',
  templateUrl: './graps.component.html',
  styleUrls: ['./graps.component.scss']
})
export class GrapsComponent implements OnInit {
  graps = [
    [{
      id: '1',
      numGrap: '1',
      grapFrom: 'G2',
      grapTo: 'E7',
      nameChess: 'm',
      selected: false,
      icon: '',
    },
    {
      id: '1',
      numGrap: '2',
      grapFrom: 'F6',
      grapTo: 'A1',
      nameChess: 'h',
      selected: false,
      icon: '',
    },],
    [{
      id: '1',
      numGrap: '3',
      grapFrom: 'A6',
      grapTo: 'G1',
      nameChess: 't',
      selected: false,
      icon: '',
    },
    {
      id: '1',
      numGrap: '4',
      grapFrom: 'F7',
      grapTo: 'C1',
      nameChess: 'm',
      selected: false,
      icon: '',
    },],
    [{
      id: '1',
      numGrap: '5',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'h',
      selected: false,
      icon: '',
    },
    {
      id: '1',
      numGrap: '6',
      grapFrom: 'A8',
      grapTo: 'B6',
      nameChess: 'm',
      selected: false,
      icon: '',
    },],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'h',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],
    [{
      id: '1',
      numGrap: '1',
      grapFrom: 'G2',
      grapTo: 'E7',
      nameChess: 'c',
      selected: false,
      icon: '',
    },
    {
      id: '1',
      numGrap: '2',
      grapFrom: 'F6',
      grapTo: 'A1',
      nameChess: 'v',
      selected: false,
      icon: '',
    },],
    [{
      id: '1',
      numGrap: '3',
      grapFrom: 'A6',
      grapTo: 'G1',
      nameChess: 'm',
      selected: false,
      icon: '',
    },
    {
      id: '1',
      numGrap: '4',
      grapFrom: 'F7',
      grapTo: 'C2',
      nameChess: 'c',
      selected: false,
      icon: '',
    },],
    [{
      id: '1',
      numGrap: '5',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'x',
      selected: false,
      icon: '',
    },
    {
      id: '1',
      numGrap: '6',
      grapFrom: 'A8',
      grapTo: 'B6',
      nameChess: 'm',
      selected: false,
      icon: '',
    },],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'c',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],[{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'c',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'c',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'c',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'c',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'c',
      selected: false,
      icon: '',
    }, {
      id: '1',
      numGrap: '8',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'm',
      selected: false,
      icon: '',
    }],
    [{
      id: '1',
      numGrap: '7',
      grapFrom: 'C7',
      grapTo: 'E5',
      nameChess: 'x',
      selected: true,
      icon: '',
    }],
  ];
  constructor(public playerService: PlayerService, public gameService: GameService) { }

  ngOnInit(): void {
  }

}
