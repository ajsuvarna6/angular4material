import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  Observable
} from 'rxjs/Rx';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  public options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  public autocompleteCtrl = new FormControl();
  public filteredOptions: Observable < string[] > ;
  public enableTouchUI = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.autocompleteCtrl);
    this.filteredOptions = this.autocompleteCtrl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  changeDatePickerView() {
      this.enableTouchUI = !this.enableTouchUI;
      console.log(this.enableTouchUI);
  }
}
