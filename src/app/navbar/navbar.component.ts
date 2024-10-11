import { Component } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
expanded: boolean = false
dropdown: string = "w-full md:block md:w-auto hidden"
menuChiuso: string = "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 hidden"
dropDownMenu: string = "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 hidden"
classDropMenuHidden: string = "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 hidden"
classDropMenuOpen: string = "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 block"
ariaHidden: boolean = true

expandNavbar(): void {
this.expanded = !this.expanded

if(this.dropdown === "w-full md:block md:w-auto hidden") {
  this.dropdown = "w-full md:block md:w-auto"
} else {
  this.dropdown = "w-full md:block md:w-auto hidden"
}
}

dropDownOpen(): void {
if (this.classDropMenuHidden === "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 hidden") {
  this.classDropMenuHidden = this.classDropMenuOpen
} else if(this.classDropMenuHidden === this.classDropMenuOpen) {
  this.classDropMenuHidden = "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 hidden"
}

this.ariaHidden = !this.ariaHidden


}


}

