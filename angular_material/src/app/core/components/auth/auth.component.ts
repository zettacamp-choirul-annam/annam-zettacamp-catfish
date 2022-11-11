import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../firebase/auth.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
      selector: 'app-auth',
      templateUrl: './auth.component.html',
      styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
      form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
      });
      
      isLoading: boolean = false;

      constructor(
            private authService: AuthService,
            private router: Router,
            private route: ActivatedRoute,
            private formBuilder: FormBuilder,
            private translate: TranslateService
      ) { }

      ngOnInit(): void {
            const lang = this.route.snapshot.queryParamMap.get('lang');
            this.translate.use(lang || 'en');
      }

      onSubmit() {
            this.isLoading = true;

            const { email, password } = this.form.value;

            this.authService.login(email!, password!).subscribe(
                  data  => {
                        this.isLoading = false;
                        this.router.navigate(['dashboard']);
                  },
                  error => {
                        this.isLoading = false;

                        // logging error
                        console.error('login error: ', error);

                        Swal.fire({
                              icon: 'error',
                              title: 'Failed to loggin',
                              text: 'Failed to login because of you'
                        })
                  }
            );
      }
}
