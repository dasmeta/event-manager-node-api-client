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
/**
 * 
 * @export
 * @interface EventStats
 */
export interface EventStats {
    /**
     * 
     * @type {string}
     * @memberof EventStats
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EventStats
     */
    subscription?: string;
    /**
     * 
     * @type {string}
     * @memberof EventStats
     */
    topic?: string;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    error?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    fail?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    missing?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    preconditionFail?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    subscriptionCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    success?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    topicCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EventStats
     */
    total?: number;
}
