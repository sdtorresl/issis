import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IssisSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [IssisSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [IssisSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IssisSharedModule {
  static forRoot() {
    return {
      ngModule: IssisSharedModule
    };
  }
}
