import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIView } from '../ui-view.enum';

@Component({
  selector: 'app-view-switcher-button',
  templateUrl: './view-switcher-button.component.html',
  styleUrls: ['./view-switcher-button.component.css'],
})
export class ViewSwitcherButtonComponent {
  @Input() currentView: UIView = UIView.list;
  @Output() updateView = new EventEmitter<UIView>();
  public uiView = UIView;

  switchView(to: UIView) {
    this.updateView.emit(to);
  }
}
