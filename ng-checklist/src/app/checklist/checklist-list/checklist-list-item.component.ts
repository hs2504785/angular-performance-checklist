import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ChecklistItem } from '../models/checklist.model';

@Component({
  selector: 'ac-checklist-list-item',
  templateUrl: './checklist-list-item.component.html',
  styleUrls: ['./checklist-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistListItemComponent {
  allComplete = true;
  @Input() item: ChecklistItem;
  @Output() toggleItem = new EventEmitter<ChecklistItem>();
  @Output() toggleFavorite = new EventEmitter<ChecklistItem>();
}
