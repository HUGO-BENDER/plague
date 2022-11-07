import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.less']
})
export class LevelsComponent implements OnInit {

  tilesLevel!: Promise<TileLevel[]>;

  constructor() { }

  ngOnInit(): void {
    this.tilesLevel = this.menu_levels_getTilesLevel()
  }


  goToLevel(level:any){
    alert(level);
  }

  //-- TODO this._providerUsercases.menu_levels_getTilesLevel
  menu_levels_getTilesLevel(): Promise<TileLevel[]> {
    return Promise.resolve(
      <TileLevel[]>[
        {title:'Easy',cols:2},
        {cols:1,iconButton:'lock',action:'action_1_1',enabled:false},
        {cols:1,iconButton:'lock',action:'action_1_2',enabled:false},
        {cols:1,iconButton:'lock',action:'action_1_3',enabled:false},
        {cols:1,iconButton:'lock',action:'action_1_4',enabled:false},
        {cols:1,iconButton:'lock',action:'action_1_5',enabled:false},
        {title:'Hard',cols:2},
        {cols:1,iconButton:'lock',action:'action_2_1',enabled:false},
        {cols:1,iconButton:'lock',action:'action_2_2',enabled:false},
        {cols:1,iconButton:'sentiment_satisfied',action:'action_2_3',enabled:true},
        {cols:1,iconButton:'lock',action:'action_2_4',enabled:false},
        {cols:1,iconButton:'lock',action:'action_2_5',enabled:false},
        {title:'D&D',cols:2},
        {cols:1,iconButton:'lock',action:'action_3_1',enabled:false},
        {cols:1,iconButton:'lock',action:'action_3_2',enabled:false},
        {cols:1,iconButton:'lock',action:'action_3_3',enabled:false},
        {cols:1,iconButton:'lock',action:'action_3_4',enabled:false},
        {cols:1,iconButton:'lock',action:'action_3_5',enabled:false},
        {title:'TilesBomb',cols:2},
        {cols:1,iconButton:'lock',action:'action_4_1',enabled:false},
        {cols:1,iconButton:'lock',action:'action_4_2',enabled:false},
        {cols:1,iconButton:'lock',action:'action_4_3',enabled:false},
        {cols:1,iconButton:'lock',action:'action_4_4',enabled:false},
        {cols:1,iconButton:'lock',action:'action_4_5',enabled:false},
        {title:'Bomb&Missil',cols:2},
        {cols:1,iconButton:'lock',action:'action_5_1',enabled:false},
        {cols:1,iconButton:'lock',action:'action_5_2',enabled:false},
        {cols:1,iconButton:'lock',action:'action_5_3',enabled:false},
        {cols:1,iconButton:'lock',action:'action_5_4',enabled:false},
        {cols:1,iconButton:'lock',action:'action_5_5',enabled:false}
      ]
    );
  }
}

export interface TileLevel
{
  title?:string,
  cols: number,
  iconButton?: string;
  action?:string,
  enabled: boolean
}
