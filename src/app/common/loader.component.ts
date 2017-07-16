import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div>
        <md-spinner color="warn"></md-spinner>
    </div>
  `,
})
export class LoaderComponent {

}
