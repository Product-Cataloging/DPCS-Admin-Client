import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_type: string | null = null;
  @Output() signOut = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.user_type = localStorage.getItem('user_type');
  }

  onSignOut() {
    this.signOut.emit();
  }

}
