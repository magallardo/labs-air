
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RouteAction } from '@tibco-tcstk/tc-core-lib';
import { LiveAppsHomeCockpitComponent, Roles, RouteAccessControlConfig } from '@tibco-tcstk/tc-liveapps-lib';
import { CustomFormDefs } from '@tibco-tcstk/tc-forms-lib';

interface ROUTE {
    icon?: string;
    route?: string;
    title?: string;
}

@Component({
    selector: 'app-iot-home-cockpit',
    templateUrl: './iot-home-cockpit.component.html',
    styleUrls: ['./iot-home-cockpit-style.css']
})

export class IotHomeCockpitComponent extends LiveAppsHomeCockpitComponent {

    networkRoutes: ROUTE[] = [
        {
            icon: 'timeline',
            route: '/starterApp/home/iotdashboard',
            title: 'IoT Dashboard',
        }, {
            icon: 'settings_input_antenna',
            route: '/starterApp/home/gateway',
            title: 'Gateways',
        }, {
            icon: 'dashboard',
            route: '/starterApp/home/gatewaydashboard',
            title: 'Gateways Dashboards',
        }
    ];

    deviceRoutes: ROUTE[] = [
        {
            icon: 'settings_remote',
            route: '/starterApp/home/device',
            title: 'Devices',
        }, {
            icon: 'timeline',
            route: '/starterApp/home/devicecommand',
            title: 'Device Commands',
        }, {
            icon: 'timeline',
            route: '/starterApp/home/devicestream',
            title: 'Device Streaming',
        }, {
            icon: 'timeline',
            route: '/starterApp/home/devicedashboard',
            title: 'Dashboard',
        }, {
            icon: 'device_hub',
            route: 'sales/leads',
            title: 'Rules',
        }, {
            icon: 'settings',
            route: 'sales/leads',
            title: 'Settings',
        }, {
            icon: 'get_app',
            route: 'sales/opportunities',
            title: 'Software Update',
        }
    ];


    /**
     * The Application ID of the UI (should ideally be unique as it is shared state key)
     */
    @Input() uiAppId: string;

    /**
     * The list of LA Application IDs you want to handle
     */
    @Input() appIds: string[];

    /**
     * sandboxId - this comes from claims resolver
     */
    @Input() sandboxId: number;

    /**
     * The name of the logged user
     */
    @Input() userName: string;

    /**
     * The ID of the logged user
     */
    @Input() userId: string;

    /**
     * * NOT USED but is the email address of the user (comes from resolver)
     */
    @Input() email: string;

    /**
     * page title comes from config resolver
     */
    @Input() title: string;

    /**
     * Roles - The users current roles
     */
    @Input() roles: Roles;

    /**
     * RouteAccessControlConfig - basically the config for access control
     */
    @Input() access: RouteAccessControlConfig;

    /**
     * Custom Form configuration file
     */
    @Input() customFormDefs: CustomFormDefs;

    /**
     * ~event routeAction : Component requests route to another page
     * ~payload RouteAction : RouteAction object to tell caller to navigate somewhere
     */
    @Output() routeAction: EventEmitter<RouteAction> = new EventEmitter<RouteAction>();



}