import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/core-data-rankings/data.service';
import { RankingsData } from '../core/core-data-rankings/rankings-data.interface';


@Component({
  selector: 'app-mythic-plus',
  templateUrl: './mythic-plus.component.html',
  styleUrls: ['./mythic-plus.component.css']
})
export class MythicPlusComponent implements OnInit {
  rankingsData: RankingsData | null = null;
  roles: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRankingsData().subscribe(data => {
      this.rankingsData = data;
      this.roles = Object.keys(data.rankings);
    });
  }
}
