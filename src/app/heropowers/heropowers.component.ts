import { Component, OnInit } from '@angular/core';
import { Power } from '../powers';
import { PowerserviceService } from '../powerservice.service';

@Component({
  selector: 'app-heropowers',
  templateUrl: './heropowers.component.html',
  styleUrls: ['./heropowers.component.css'],
})
export class HeropowersComponent implements OnInit {
  public powers: Power[];
  constructor(public powerservice: PowerserviceService) {
    this.powers = [];
  }
  showPowers() {
    this.powerservice
      .getPowers()
      .subscribe((powers: any) => (this.powers = powers));
  }

  ngOnInit(): void {
    this.showPowers();
  }
}
