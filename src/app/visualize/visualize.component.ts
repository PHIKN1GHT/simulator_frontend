import { Component, OnInit, Input } from '@angular/core';
import { lastGenrated } from '../main/main.component';

@Component({
  selector: 'app-rule-recursive',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css'],
})
export class VisualizeComponent implements OnInit {
  simulationResult: string = '';
  visualizerUrl: string = '';

  showVisualizer() {
    fetch('/visualize/simulation-result')
      .then((res) => res.text())
      .then((res) => {
        console.log(this);
        this.simulationResult = res;
        this.visualizerUrl =
          '/visualizer/?' + location.origin + '/visualize/json';
      });
  }

  visualizeResultBest() {
    fetch('/visualize/simulate-for-visualize-best').then(() =>
      this.showVisualizer()
    );
  }
  visualizeResultSingle() {
    fetch('/visualize/simulate-for-visualize-single').then(() =>
      this.showVisualizer()
    );
  }

  constructor() {
    console.log(lastGenrated);
    if (lastGenrated == 'best') {
      this.visualizeResultBest();
    } else if (lastGenrated == 'single') {
      this.visualizeResultSingle();
    }
  }

  ngOnInit(): void {}
}
