import ProcessOut = require('../processout');
declare class Request {
    private client;
    constructor(client: ProcessOut);
    /**
     * Authenticate the request
     * @param  {object} req
     * @return {object} req
     */
    authenticate(req: any): any;
    /**
     * Prepare the request
     * @param  {object} req
     * @param  {any} options
     * @return {object}
     */
    prepare(req: any, options: any): any;
    /**
     * Prepare the request data
     * @param  {object} data
     * @param  {object} options
     * @return {object}
     */
    getData(data: any, options: any): any;
    /**
     * Generate a get request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    get(path: string, data: any, options: any, callback: any): any;
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    post(path: string, data: any, options: any, callback: any): any;
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    put(path: string, data: any, options: any, callback: any): any;
    /**
     * Generate a post request
     * @param  {string} path
     * @param  {object} data
     * @param  {object} options
     * @param  {callback} callback
     * @return {restler}
     */
    delete(path: string, data: any, options: any, callback: any): any;
}
export = Request;
//# sourceMappingURL=request.d.ts.map