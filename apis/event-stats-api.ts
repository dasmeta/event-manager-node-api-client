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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { EventstatsCalculatesingleBody } from '../models';
import { InlineResponse200 } from '../models';
import { NewEventStats } from '../models';
/**
 * EventStatsApi - axios parameter creator
 * @export
 */
export const EventStatsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Recalculate stats
         * @param {any} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsCalculatePost: async (body: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling eventStatsCalculatePost.');
            }
            const localVarPath = `/event-stats/calculate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Recalculate single stats
         * @param {EventstatsCalculatesingleBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsCalculateSinglePost: async (body: EventstatsCalculatesingleBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling eventStatsCalculateSinglePost.');
            }
            const localVarPath = `/event-stats/calculate-single`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the number of event-stats documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsCountGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/event-stats/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Find all the event-stats's records
         * @param {number} [limit] Maximum number of results possible
         * @param {string} [sort] Sort according to a specific field.
         * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
         * @param {string} [] Get entries that matches exactly your input
         * @param {string} [ne] Get records that are not equals to something
         * @param {string} [lt] Get record that are lower than a value
         * @param {string} [lte] Get records that are lower than or equal to a value
         * @param {string} [gt] Get records that are greater than a value
         * @param {string} [gte] Get records that are greater than  or equal a value
         * @param {string} [contains] Get records that contains a value
         * @param {string} [containss] Get records that contains (case sensitive) a value
         * @param {Array<string>} [_in] Get records that matches any value in the array of values
         * @param {Array<string>} [nin] Get records that doesn&#x27;t match any value in the array of values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsGet: async (limit?: number, sort?: string, start?: number, ?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/event-stats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            if (limit !== undefined) {
                localVarQueryParameter['_limit'] = limit;
            }

            if (sort !== undefined) {
                localVarQueryParameter['_sort'] = sort;
            }

            if (start !== undefined) {
                localVarQueryParameter['_start'] = start;
            }

            if ( !== undefined) {
                localVarQueryParameter['&#x3D;'] = ;
            }

            if (ne !== undefined) {
                localVarQueryParameter['_ne'] = ne;
            }

            if (lt !== undefined) {
                localVarQueryParameter['_lt'] = lt;
            }

            if (lte !== undefined) {
                localVarQueryParameter['_lte'] = lte;
            }

            if (gt !== undefined) {
                localVarQueryParameter['_gt'] = gt;
            }

            if (gte !== undefined) {
                localVarQueryParameter['_gte'] = gte;
            }

            if (contains !== undefined) {
                localVarQueryParameter['_contains'] = contains;
            }

            if (containss !== undefined) {
                localVarQueryParameter['_containss'] = containss;
            }

            if (_in) {
                localVarQueryParameter['_in'] = _in;
            }

            if (nin) {
                localVarQueryParameter['_nin'] = nin;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a single event-stats record
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling eventStatsIdDelete.');
            }
            const localVarPath = `/event-stats/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Find one event-stats record
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling eventStatsIdGet.');
            }
            const localVarPath = `/event-stats/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a single event-stats record
         * @param {NewEventStats} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsIdPut: async (body: NewEventStats, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling eventStatsIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling eventStatsIdPut.');
            }
            const localVarPath = `/event-stats/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new event-stats record
         * @param {NewEventStats} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventStatsPost: async (body: NewEventStats, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling eventStatsPost.');
            }
            const localVarPath = `/event-stats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventStatsApi - functional programming interface
 * @export
 */
export const EventStatsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Recalculate stats
         * @param {any} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsCalculatePost(body: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsCalculatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Recalculate single stats
         * @param {EventstatsCalculatesingleBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsCalculateSinglePost(body: EventstatsCalculatesingleBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsCalculateSinglePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve the number of event-stats documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsCountGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsCountGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Find all the event-stats's records
         * @param {number} [limit] Maximum number of results possible
         * @param {string} [sort] Sort according to a specific field.
         * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
         * @param {string} [] Get entries that matches exactly your input
         * @param {string} [ne] Get records that are not equals to something
         * @param {string} [lt] Get record that are lower than a value
         * @param {string} [lte] Get records that are lower than or equal to a value
         * @param {string} [gt] Get records that are greater than a value
         * @param {string} [gte] Get records that are greater than  or equal a value
         * @param {string} [contains] Get records that contains a value
         * @param {string} [containss] Get records that contains (case sensitive) a value
         * @param {Array<string>} [_in] Get records that matches any value in the array of values
         * @param {Array<string>} [nin] Get records that doesn&#x27;t match any value in the array of values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsGet(limit?: number, sort?: string, start?: number, ?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsGet(limit, sort, start, , ne, lt, lte, gt, gte, contains, containss, _in, nin, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a single event-stats record
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Find one event-stats record
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a single event-stats record
         * @param {NewEventStats} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsIdPut(body: NewEventStats, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new event-stats record
         * @param {NewEventStats} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsPost(body: NewEventStats, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await EventStatsApiAxiosParamCreator(configuration).eventStatsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EventStatsApi - factory interface
 * @export
 */
export const EventStatsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Recalculate stats
         * @param {any} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsCalculatePost(body: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return EventStatsApiFp(configuration).eventStatsCalculatePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Recalculate single stats
         * @param {EventstatsCalculatesingleBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsCalculateSinglePost(body: EventstatsCalculatesingleBody, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return EventStatsApiFp(configuration).eventStatsCalculateSinglePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the number of event-stats documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsCountGet(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return EventStatsApiFp(configuration).eventStatsCountGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Find all the event-stats's records
         * @param {number} [limit] Maximum number of results possible
         * @param {string} [sort] Sort according to a specific field.
         * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
         * @param {string} [] Get entries that matches exactly your input
         * @param {string} [ne] Get records that are not equals to something
         * @param {string} [lt] Get record that are lower than a value
         * @param {string} [lte] Get records that are lower than or equal to a value
         * @param {string} [gt] Get records that are greater than a value
         * @param {string} [gte] Get records that are greater than  or equal a value
         * @param {string} [contains] Get records that contains a value
         * @param {string} [containss] Get records that contains (case sensitive) a value
         * @param {Array<string>} [_in] Get records that matches any value in the array of values
         * @param {Array<string>} [nin] Get records that doesn&#x27;t match any value in the array of values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsGet(limit?: number, sort?: string, start?: number, ?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return EventStatsApiFp(configuration).eventStatsGet(limit, sort, start, , ne, lt, lte, gt, gte, contains, containss, _in, nin, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a single event-stats record
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsIdDelete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return EventStatsApiFp(configuration).eventStatsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Find one event-stats record
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return EventStatsApiFp(configuration).eventStatsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a single event-stats record
         * @param {NewEventStats} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsIdPut(body: NewEventStats, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return EventStatsApiFp(configuration).eventStatsIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new event-stats record
         * @param {NewEventStats} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventStatsPost(body: NewEventStats, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return EventStatsApiFp(configuration).eventStatsPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventStatsApi - object-oriented interface
 * @export
 * @class EventStatsApi
 * @extends {BaseAPI}
 */
export class EventStatsApi extends BaseAPI {
    /**
     * Recalculate stats
     * @param {any} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsCalculatePost(body: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return EventStatsApiFp(this.configuration).eventStatsCalculatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Recalculate single stats
     * @param {EventstatsCalculatesingleBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsCalculateSinglePost(body: EventstatsCalculatesingleBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return EventStatsApiFp(this.configuration).eventStatsCalculateSinglePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve the number of event-stats documents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsCountGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return EventStatsApiFp(this.configuration).eventStatsCountGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Find all the event-stats's records
     * @param {number} [limit] Maximum number of results possible
     * @param {string} [sort] Sort according to a specific field.
     * @param {number} [start] Skip a specific number of entries (especially useful for pagination)
     * @param {string} [] Get entries that matches exactly your input
     * @param {string} [ne] Get records that are not equals to something
     * @param {string} [lt] Get record that are lower than a value
     * @param {string} [lte] Get records that are lower than or equal to a value
     * @param {string} [gt] Get records that are greater than a value
     * @param {string} [gte] Get records that are greater than  or equal a value
     * @param {string} [contains] Get records that contains a value
     * @param {string} [containss] Get records that contains (case sensitive) a value
     * @param {Array<string>} [_in] Get records that matches any value in the array of values
     * @param {Array<string>} [nin] Get records that doesn&#x27;t match any value in the array of values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsGet(limit?: number, sort?: string, start?: number, ?: string, ne?: string, lt?: string, lte?: string, gt?: string, gte?: string, contains?: string, containss?: string, _in?: Array<string>, nin?: Array<string>, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return EventStatsApiFp(this.configuration).eventStatsGet(limit, sort, start, , ne, lt, lte, gt, gte, contains, containss, _in, nin, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a single event-stats record
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsIdDelete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return EventStatsApiFp(this.configuration).eventStatsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Find one event-stats record
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return EventStatsApiFp(this.configuration).eventStatsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a single event-stats record
     * @param {NewEventStats} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsIdPut(body: NewEventStats, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return EventStatsApiFp(this.configuration).eventStatsIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new event-stats record
     * @param {NewEventStats} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatsApi
     */
    public async eventStatsPost(body: NewEventStats, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return EventStatsApiFp(this.configuration).eventStatsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
