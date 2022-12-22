import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']

})
export class ProgressCircleComponent implements OnInit {

  constructor() { }

 @Input() progressValue !: string | number;
  progressDashCircle: number =280;
  progressResult! : number
  ngOnInit(): void {
    this.progressValue = +this.progressValue;
    const ratio =  (this.progressDashCircle*this.progressValue)/100
    this.progressResult = this.progressDashCircle - ratio;
  }

}
