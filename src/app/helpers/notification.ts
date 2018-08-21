import { Injectable } from "@angular/core";
declare var $: any;

@Injectable()
export class Notifications {
    private setDefaults(options: any): any {
        options.time = options.time || 4000;
        options.class = options.class || 'dark';
        options.sticky = options.sticky || false;
        return options;
    }
    default(options: any) {
        $.gritter.add(this.setDefaults(options));
    }

    error(options: any) {
        var defaultOptions = this.setDefaults(options);
        defaultOptions.image = '/assets/theme/images/error.png';
        $.gritter.add(defaultOptions);
    }
    
    success(options: any) {
        var defaultOptions = this.setDefaults(options);
        defaultOptions.image = '/assets/theme/images/success.png';
        $.gritter.add(defaultOptions);
    }
    
    danger(options: any) {
        var defaultOptions = this.setDefaults(options);
        defaultOptions.image = '/assets/theme/images/warning.png';
        $.gritter.add(defaultOptions);
    }
}