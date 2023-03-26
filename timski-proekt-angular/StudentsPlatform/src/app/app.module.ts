import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormUserInputComponent } from "./form-user-input/form-user-input.component";
import { FormUserInputRegisterComponent } from "./form-user-input-register/form-user-input-register.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormUserInputEmailConfirmComponent } from "./form-user-input-email-confirm/form-user-input-email-confirm.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormUserInputComponent,
    FormUserInputRegisterComponent,
    FormUserInputEmailConfirmComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
