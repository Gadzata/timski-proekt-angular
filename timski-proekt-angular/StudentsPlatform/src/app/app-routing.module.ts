import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormUserInputComponent } from "./form-user-input/form-user-input.component";
import { RouterModule, Routes } from "@angular/router";
import { FormUserInputRegisterComponent } from "./form-user-input-register/form-user-input-register.component";
import { FormUserInputEmailConfirmComponent } from "./form-user-input-email-confirm/form-user-input-email-confirm.component";

const routes: Routes = [
  { path: "login", component: FormUserInputComponent },
  { path: "register", component: FormUserInputRegisterComponent },
  { path: "confirmEmail", component: FormUserInputEmailConfirmComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
