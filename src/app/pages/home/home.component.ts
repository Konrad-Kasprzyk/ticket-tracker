import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'account',
      sanitizer.bypassSecurityTrustResourceUrl('assets/account.svg')
    );
  }

  ngOnInit(): void {}

  logout() {
    this.auth
      .signOut()
      .then((res) => {
        this.router.navigate(['login']);
      })
      .catch((err) => console.log(err));
  }

  async logAll() {
    this.db
      .collection('projects')
      .get()
      .subscribe((val) => console.log(val));
  }
}
