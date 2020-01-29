// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CustomerAction {
    private client: ProcessOut = null;

    /**
     * Customer action type (such as url)
     * @type {string}
     */
    private type: string = null;

    /**
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @type {string}
     */
    private value: string = null;

    /**
     * CustomerAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CustomerAction) {
        if (typeof client === 'undefined')
            throw new Error("The CustomerAction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomerAction()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CustomerAction";
    }

    /**
     * Get Type
     * Customer action type (such as url)
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Customer action type (such as url)
     * @param {string} val
     * @return {CustomerAction}
     */
    public setType(val: string): CustomerAction {
        this.type = val;
        return this;
    }

    /**
     * Get Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @return {string}
     */
    public getValue(): string {
        return this.value;
    }

    /**
     * Set Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @param {string} val
     * @return {CustomerAction}
     */
    public setValue(val: string): CustomerAction {
        this.value = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CustomerAction}
     */
    public fillWithData(data: any): CustomerAction {
        if (data["type"])
            this.setType(data["type"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "type": this.getType(),
            "value": this.getValue(),
        };
    }

    
}
export = CustomerAction;
