import { Component } from '@angular/core'

@Component({
    selector: 'loader-tag',
    template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent{

}