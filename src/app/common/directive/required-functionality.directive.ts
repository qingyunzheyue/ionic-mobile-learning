import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FunctionalityService } from '../functionality.service';

@Directive({
  selector: '[requiredFunctionality]'
})
export class RequiredFunctionalityDirective implements OnInit{
  
  private hasView = false;

  private _requiredFunctionalities;
  private _orFunctionalities;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private functionality : FunctionalityService) { }
  
  @Input() set requiredFunctionalityOr(value: string) {
    this._orFunctionalities = value; 
  } 

  @Input() set requiredFunctionality(functionalities: string) {
    this._requiredFunctionalities = functionalities;
  }

  ngOnInit(): void {
    let enabled = false;
    let orEnabled = false;

    if(this._requiredFunctionalities){
      let requiredFunctionalites = this._requiredFunctionalities.split(' ');

      requiredFunctionalites.forEach((funciton)=>{
        enabled = enabled && this.functionality.isFunctionEnabled(funciton);
      });
    }

    if(this._orFunctionalities){
      let orFunctionalites = this._orFunctionalities.split(' ');

      orFunctionalites.forEach((funciton)=>{
         if(this.functionality.isFunctionEnabled(funciton)){
          orEnabled = true;
         }
      });

      enabled = enabled && orEnabled;
    }

    if(enabled && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }else{
      this.viewContainer.clear();
      this.hasView = false;
    }

    // if (this._requiredFunctionality || this._or) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    //   this.hasView = true;
    // } else if (!this._requiredFunctionality) {
    //   this.viewContainer.clear();
    //   this.hasView = false;
    // }
  }

}
