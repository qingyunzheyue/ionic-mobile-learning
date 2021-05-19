import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredFunctionalityDirective } from './directive/required-functionality.directive';
import { FunctionalityKeys } from './function/function.constant';


@NgModule({
  declarations: [
    RequiredFunctionalityDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [RequiredFunctionalityDirective]
})
export class MyCommonModule {
  
 }
