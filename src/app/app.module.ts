import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { IonTagsInputModule } from "ionic-tags-input";
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipesModule } from '../pipes/pipes.module';

import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

import { FIREBASE_CONFIG } from '../configs/config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ListJobPage } from '../pages/list-job/list-job';
import { ListApplicantPage } from '../pages/list-applicant/list-applicant';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';
import { DetailApplicantPage } from '../pages/detail-applicant/detail-applicant';
import { ModalAddJobPage } from '../pages/modal-add-job/modal-add-job';
import { UserModalPage } from '../pages/user-modal/user-modal';
import { ManagerPostPage } from '../pages/manager-post/manager-post';

import { JobProvider } from '../providers/job/job';
import { LoaderService } from '../services/loaderService';
import { ToastService } from '../services/toastService';
import { UserProvider } from '../providers/user/user';
import { UntilHelper } from '../helpers/until.helper';
import { DataProvider } from '../providers/data/data';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        RegisterPage,
        ListJobPage,
        ListApplicantPage,
        TabsPage,
        ContactPage,
        SettingPage,
        AboutPage,
        DetailApplicantPage,
        ModalAddJobPage,
        UserModalPage,
        ManagerPostPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        FormsModule,
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireDatabaseModule,
        IonicStorageModule.forRoot(),
        HttpModule,
        HttpClientModule,
        AutoCompleteModule,
        IonTagsInputModule,
        TagInputModule,
        BrowserAnimationsModule,
        PipesModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        RegisterPage,
        ListJobPage,
        ListApplicantPage,
        TabsPage,
        ContactPage,
        SettingPage,
        AboutPage,
        DetailApplicantPage,
        ModalAddJobPage,
        UserModalPage,
        ManagerPostPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        HttpClient,
        Http,
        Camera,
        CallNumber,
        EmailComposer,
        AngularFireDatabase,
        AngularFireAuth,
        SocialSharing,

        JobProvider,
        LoaderService,
        ToastService,
        UntilHelper,
        UserProvider,
        DataProvider
    ]
})
export class AppModule { }
