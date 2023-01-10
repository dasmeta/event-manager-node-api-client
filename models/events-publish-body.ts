/* tslint:disable */
/* eslint-disable */
/**
 * Tutor
 * Event Manager Backend service is based on Strapi v3 JS framework.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aram@dasmeta.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EventspublishEntityProps } from './eventspublish-entity-props';
/**
 * 
 * @export
 * @interface EventsPublishBody
 */
export interface EventsPublishBody {
    /**
     * 
     * @type {string}
     * @memberof EventsPublishBody
     */
    topic?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsPublishBody
     */
    dataSource?: string;
    /**
     * 
     * @type {any}
     * @memberof EventsPublishBody
     */
    data?: any;
    /**
     * 
     * @type {string}
     * @memberof EventsPublishBody
     */
    traceId?: string;
    /**
     * 
     * @type {EventspublishEntityProps}
     * @memberof EventsPublishBody
     */
    entityProps?: EventspublishEntityProps;
}
