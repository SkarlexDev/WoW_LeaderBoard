import { Component, Input } from '@angular/core';
import { RoleData } from '../core-data-rankings/rankings-data.interface';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {
  @Input() roleData!: RoleData;
}
