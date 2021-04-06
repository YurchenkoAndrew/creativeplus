import {Component, Input, OnInit} from '@angular/core';
import {MailService} from '../../data/services/mail.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Subject, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Contact} from '../../data/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  // Регистрируем стрим для вывода ошибок
  public error$: Subject<string> = new Subject<string>();
  @Input() contact!: Contact;
  name!: FormControl;
  email!: FormControl;
  phone!: FormControl;
  message!: FormControl;
  form!: FormGroup;
  submitted!: boolean;

  constructor(
    private mailService: MailService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: this.name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      email: this.email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.email]),
      phone: this.phone = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(18)]),
      message: this.message = new FormControl('', [Validators.required]),
    });
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('name', this.form.get('name')?.value);
    input.append('email', this.form.get('email')?.value);
    input.append('phone', this.form.get('phone')?.value);
    input.append('message', this.form.get('message')?.value);
    return input;
  }

  formSubmit(): void {
    const formModel = this.prepareSave();
    this.submitted = true;
    this.mailService.add(formModel)
      .pipe(
        // Ловим ошибки
        catchError(this.handleError.bind(this))
      ).subscribe(() => {
      this.submitted = false;
      this.initForm();
      this.error$ = new Subject<string>();
    }, () => {
      this.submitted = false;
    }, () => { // Если сервис отработал до конца нормально
    });
  }

  private handleError(error: HttpErrorResponse): any {
    const {message} = error.error;
    if (message) {
      throwError(this.error$.next(
        'Были введены неверные данные!!!'
      ));
    }
  }
}
