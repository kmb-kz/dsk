import { Injectable } from "@angular/core";
import * as moment from 'moment';

@Injectable()
export class DateHelpers {

    getDateDiff(start, end) {
        moment.lang('ru');
        //  end = moment(end, 'YYYY-MM-DD');
        end = moment(end, 'DD-MM-YYYY');
        // start = moment(start, 'YYYY-MM-DD');
        start = moment(start, 'DD-MM-YYYY');
        //console.log(start);
        return moment.duration(end.diff(start, true)).asDays();
    }

}
