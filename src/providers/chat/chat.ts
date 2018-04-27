import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatProvider {
    constructor(private af: AngularFireDatabase) {
    }

    getListChat(key: string): Observable<any> {
        return this.af.list(`post/${key}/comments`).valueChanges();
    }

    pushChat(key: string, message: any) {
        return this.af.database.ref('post').child(key).child('comments').push(message);
    }
}