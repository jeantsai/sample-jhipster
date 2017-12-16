import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SampleJHipsterSharedModule, UserRouteAccessService } from './shared';
import { SampleJHipsterAppRoutingModule} from './app-routing.module';
import { SampleJHipsterHomeModule } from './home/home.module';
import { SampleJHipsterAdminModule } from './admin/admin.module';
import { SampleJHipsterAccountModule } from './account/account.module';
import { SampleJHipsterEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SampleJHipsterAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SampleJHipsterSharedModule,
        SampleJHipsterHomeModule,
        SampleJHipsterAdminModule,
        SampleJHipsterAccountModule,
        SampleJHipsterEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SampleJHipsterAppModule {}
