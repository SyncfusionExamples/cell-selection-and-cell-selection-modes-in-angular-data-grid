import { Component, OnInit } from '@angular/core';
import { GridModule, PageService, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule],
  providers: [PageService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  public data = data;
  public selectionOptions!: SelectionSettingsModel;
  ngOnInit(): void {
    this.selectionOptions = {
      mode: 'Cell',
      type: 'Multiple',
      cellSelectionMode: 'BoxWithBorder',
      enableToggle: false
    }
  };
  public pageSettings = { pageSize: 7 };
}
