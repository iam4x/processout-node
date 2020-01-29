// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class TransactionOperation {
    private client: ProcessOut = null;

    /**
     * ID of the transaction operation
     * @type {string}
     */
    private id: string = null;

    /**
     * Transaction to which the operation belongs
     * @type {p.Transaction}
     */
    private transaction: p.Transaction = null;

    /**
     * ID of the transaction to which the operation belongs
     * @type {string}
     */
    private transactionId: string = null;

    /**
     * Token that was used by the operation, if any
     * @type {p.Token}
     */
    private token: p.Token = null;

    /**
     * ID of the token was used by the operation, if any
     * @type {string}
     */
    private tokenId: string = null;

    /**
     * Card that was used by the operation, if any
     * @type {p.Card}
     */
    private card: p.Card = null;

    /**
     * ID of the card that was used by the operation, if any
     * @type {string}
     */
    private cardId: string = null;

    /**
     * Gateway configuration that was used to process the operation
     * @type {p.GatewayConfiguration}
     */
    private gatewayConfiguration: p.GatewayConfiguration = null;

    /**
     * ID of the gateway configuration that was used to process the operation
     * @type {string}
     */
    private gatewayConfigurationId: string = null;

    /**
     * Amount of the operation
     * @type {string}
     */
    private amount: string = null;

    /**
     * Currency of the operation
     * @type {string}
     */
    private currency: string = null;

    /**
     * True if the operation is an attempt, false otherwise
     * @type {boolean}
     */
    private isAttempt: boolean = null;

    /**
     * True if the operation has failed, false otherwise
     * @type {boolean}
     */
    private hasFailed: boolean = null;

    /**
     * True if the operation amount can be accounted for, false otherwise
     * @type {boolean}
     */
    private isAccountable: boolean = null;

    /**
     * Type of the operation, such as authorization, capture, refund or void
     * @type {string}
     */
    private type: string = null;

    /**
     * ID of the operation done through the PSP
     * @type {string}
     */
    private gatewayOperationId: string = null;

    /**
     * Acquirer Routing Number, can be used to track a payment or refund at the issuer
     * @type {string}
     */
    private arn: string = null;

    /**
     * Error code returned when attempting the operation, if any
     * @type {string}
     */
    private errorCode: string = null;

    /**
     * Additionnal context saved when processing the transaction on the specific PSP
     * @type {any}
     */
    private gatewayData: any = null;

    /**
     * ThreeDS request payment data (read-only)
     * @type {p.PaymentDataThreeDSRequest}
     */
    private paymentDataThreeDSRequest: p.PaymentDataThreeDSRequest = null;

    /**
     * 3-D Secure authentication payment data (read-only)
     * @type {p.PaymentDataThreeDSAuthentication}
     */
    private paymentDataThreeDSAuthentication: p.PaymentDataThreeDSAuthentication = null;

    /**
     * Network authentication payment data (read-only)
     * @type {p.PaymentDataNetworkAuthentication}
     */
    private paymentDataNetworkAuthentication: p.PaymentDataNetworkAuthentication = null;

    /**
     * Metadata related to the operation, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Gateway fee generated by the operation
     * @type {string}
     */
    private gatewayFee: string = null;

    /**
     * Date at which the operation was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * TransactionOperation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: TransactionOperation) {
        if (typeof client === 'undefined')
            throw new Error("The TransactionOperation object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newTransactionOperation()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "TransactionOperation";
    }

    /**
     * Get Id
     * ID of the transaction operation
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the transaction operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setId(val: string): TransactionOperation {
        this.id = val;
        return this;
    }

    /**
     * Get Transaction
     * Transaction to which the operation belongs
     * @return {p.Transaction}
     */
    public getTransaction(): p.Transaction {
        return this.transaction;
    }

    /**
     * Set Transaction
     * Transaction to which the operation belongs
     * @param {p.Transaction} val
     * @return {TransactionOperation}
     */
    public setTransaction(val: p.Transaction): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    }

    /**
     * Get TransactionId
     * ID of the transaction to which the operation belongs
     * @return {string}
     */
    public getTransactionId(): string {
        return this.transactionId;
    }

    /**
     * Set TransactionId
     * ID of the transaction to which the operation belongs
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setTransactionId(val: string): TransactionOperation {
        this.transactionId = val;
        return this;
    }

    /**
     * Get Token
     * Token that was used by the operation, if any
     * @return {p.Token}
     */
    public getToken(): p.Token {
        return this.token;
    }

    /**
     * Set Token
     * Token that was used by the operation, if any
     * @param {p.Token} val
     * @return {TransactionOperation}
     */
    public setToken(val: p.Token): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
        return this;
    }

    /**
     * Get TokenId
     * ID of the token was used by the operation, if any
     * @return {string}
     */
    public getTokenId(): string {
        return this.tokenId;
    }

    /**
     * Set TokenId
     * ID of the token was used by the operation, if any
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setTokenId(val: string): TransactionOperation {
        this.tokenId = val;
        return this;
    }

    /**
     * Get Card
     * Card that was used by the operation, if any
     * @return {p.Card}
     */
    public getCard(): p.Card {
        return this.card;
    }

    /**
     * Set Card
     * Card that was used by the operation, if any
     * @param {p.Card} val
     * @return {TransactionOperation}
     */
    public setCard(val: p.Card): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCard().getProcessOutObjectClass())
            this.card = val;
        else {
            var obj = this.client.newCard();
            obj.fillWithData(val);
            this.card = obj;
        }
        return this;
    }

    /**
     * Get CardId
     * ID of the card that was used by the operation, if any
     * @return {string}
     */
    public getCardId(): string {
        return this.cardId;
    }

    /**
     * Set CardId
     * ID of the card that was used by the operation, if any
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setCardId(val: string): TransactionOperation {
        this.cardId = val;
        return this;
    }

    /**
     * Get GatewayConfiguration
     * Gateway configuration that was used to process the operation
     * @return {p.GatewayConfiguration}
     */
    public getGatewayConfiguration(): p.GatewayConfiguration {
        return this.gatewayConfiguration;
    }

    /**
     * Set GatewayConfiguration
     * Gateway configuration that was used to process the operation
     * @param {p.GatewayConfiguration} val
     * @return {TransactionOperation}
     */
    public setGatewayConfiguration(val: p.GatewayConfiguration): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGatewayConfiguration().getProcessOutObjectClass())
            this.gatewayConfiguration = val;
        else {
            var obj = this.client.newGatewayConfiguration();
            obj.fillWithData(val);
            this.gatewayConfiguration = obj;
        }
        return this;
    }

    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration that was used to process the operation
     * @return {string}
     */
    public getGatewayConfigurationId(): string {
        return this.gatewayConfigurationId;
    }

    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration that was used to process the operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setGatewayConfigurationId(val: string): TransactionOperation {
        this.gatewayConfigurationId = val;
        return this;
    }

    /**
     * Get Amount
     * Amount of the operation
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setAmount(val: string): TransactionOperation {
        this.amount = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the operation
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setCurrency(val: string): TransactionOperation {
        this.currency = val;
        return this;
    }

    /**
     * Get IsAttempt
     * True if the operation is an attempt, false otherwise
     * @return {boolean}
     */
    public getIsAttempt(): boolean {
        return this.isAttempt;
    }

    /**
     * Set IsAttempt
     * True if the operation is an attempt, false otherwise
     * @param {boolean} val
     * @return {TransactionOperation}
     */
    public setIsAttempt(val: boolean): TransactionOperation {
        this.isAttempt = val;
        return this;
    }

    /**
     * Get HasFailed
     * True if the operation has failed, false otherwise
     * @return {boolean}
     */
    public getHasFailed(): boolean {
        return this.hasFailed;
    }

    /**
     * Set HasFailed
     * True if the operation has failed, false otherwise
     * @param {boolean} val
     * @return {TransactionOperation}
     */
    public setHasFailed(val: boolean): TransactionOperation {
        this.hasFailed = val;
        return this;
    }

    /**
     * Get IsAccountable
     * True if the operation amount can be accounted for, false otherwise
     * @return {boolean}
     */
    public getIsAccountable(): boolean {
        return this.isAccountable;
    }

    /**
     * Set IsAccountable
     * True if the operation amount can be accounted for, false otherwise
     * @param {boolean} val
     * @return {TransactionOperation}
     */
    public setIsAccountable(val: boolean): TransactionOperation {
        this.isAccountable = val;
        return this;
    }

    /**
     * Get Type
     * Type of the operation, such as authorization, capture, refund or void
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the operation, such as authorization, capture, refund or void
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setType(val: string): TransactionOperation {
        this.type = val;
        return this;
    }

    /**
     * Get GatewayOperationId
     * ID of the operation done through the PSP
     * @return {string}
     */
    public getGatewayOperationId(): string {
        return this.gatewayOperationId;
    }

    /**
     * Set GatewayOperationId
     * ID of the operation done through the PSP
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setGatewayOperationId(val: string): TransactionOperation {
        this.gatewayOperationId = val;
        return this;
    }

    /**
     * Get Arn
     * Acquirer Routing Number, can be used to track a payment or refund at the issuer
     * @return {string}
     */
    public getArn(): string {
        return this.arn;
    }

    /**
     * Set Arn
     * Acquirer Routing Number, can be used to track a payment or refund at the issuer
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setArn(val: string): TransactionOperation {
        this.arn = val;
        return this;
    }

    /**
     * Get ErrorCode
     * Error code returned when attempting the operation, if any
     * @return {string}
     */
    public getErrorCode(): string {
        return this.errorCode;
    }

    /**
     * Set ErrorCode
     * Error code returned when attempting the operation, if any
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setErrorCode(val: string): TransactionOperation {
        this.errorCode = val;
        return this;
    }

    /**
     * Get GatewayData
     * Additionnal context saved when processing the transaction on the specific PSP
     * @return {any}
     */
    public getGatewayData(): any {
        return this.gatewayData;
    }

    /**
     * Set GatewayData
     * Additionnal context saved when processing the transaction on the specific PSP
     * @param {any} val
     * @return {TransactionOperation}
     */
    public setGatewayData(val: any): TransactionOperation {
        this.gatewayData = val;
        return this;
    }

    /**
     * Get PaymentDataThreeDSRequest
     * ThreeDS request payment data (read-only)
     * @return {p.PaymentDataThreeDSRequest}
     */
    public getPaymentDataThreeDSRequest(): p.PaymentDataThreeDSRequest {
        return this.paymentDataThreeDSRequest;
    }

    /**
     * Set PaymentDataThreeDSRequest
     * ThreeDS request payment data (read-only)
     * @param {p.PaymentDataThreeDSRequest} val
     * @return {TransactionOperation}
     */
    public setPaymentDataThreeDSRequest(val: p.PaymentDataThreeDSRequest): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPaymentDataThreeDSRequest().getProcessOutObjectClass())
            this.paymentDataThreeDSRequest = val;
        else {
            var obj = this.client.newPaymentDataThreeDSRequest();
            obj.fillWithData(val);
            this.paymentDataThreeDSRequest = obj;
        }
        return this;
    }

    /**
     * Get PaymentDataThreeDSAuthentication
     * 3-D Secure authentication payment data (read-only)
     * @return {p.PaymentDataThreeDSAuthentication}
     */
    public getPaymentDataThreeDSAuthentication(): p.PaymentDataThreeDSAuthentication {
        return this.paymentDataThreeDSAuthentication;
    }

    /**
     * Set PaymentDataThreeDSAuthentication
     * 3-D Secure authentication payment data (read-only)
     * @param {p.PaymentDataThreeDSAuthentication} val
     * @return {TransactionOperation}
     */
    public setPaymentDataThreeDSAuthentication(val: p.PaymentDataThreeDSAuthentication): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPaymentDataThreeDSAuthentication().getProcessOutObjectClass())
            this.paymentDataThreeDSAuthentication = val;
        else {
            var obj = this.client.newPaymentDataThreeDSAuthentication();
            obj.fillWithData(val);
            this.paymentDataThreeDSAuthentication = obj;
        }
        return this;
    }

    /**
     * Get PaymentDataNetworkAuthentication
     * Network authentication payment data (read-only)
     * @return {p.PaymentDataNetworkAuthentication}
     */
    public getPaymentDataNetworkAuthentication(): p.PaymentDataNetworkAuthentication {
        return this.paymentDataNetworkAuthentication;
    }

    /**
     * Set PaymentDataNetworkAuthentication
     * Network authentication payment data (read-only)
     * @param {p.PaymentDataNetworkAuthentication} val
     * @return {TransactionOperation}
     */
    public setPaymentDataNetworkAuthentication(val: p.PaymentDataNetworkAuthentication): TransactionOperation {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPaymentDataNetworkAuthentication().getProcessOutObjectClass())
            this.paymentDataNetworkAuthentication = val;
        else {
            var obj = this.client.newPaymentDataNetworkAuthentication();
            obj.fillWithData(val);
            this.paymentDataNetworkAuthentication = obj;
        }
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the operation, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the operation, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {TransactionOperation}
     */
    public setMetadata(val: any): TransactionOperation {
        this.metadata = val;
        return this;
    }

    /**
     * Get GatewayFee
     * Gateway fee generated by the operation
     * @return {string}
     */
    public getGatewayFee(): string {
        return this.gatewayFee;
    }

    /**
     * Set GatewayFee
     * Gateway fee generated by the operation
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setGatewayFee(val: string): TransactionOperation {
        this.gatewayFee = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the operation was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the operation was created
     * @param {string} val
     * @return {TransactionOperation}
     */
    public setCreatedAt(val: string): TransactionOperation {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {TransactionOperation}
     */
    public fillWithData(data: any): TransactionOperation {
        if (data["id"])
            this.setId(data["id"]);
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["token_id"])
            this.setTokenId(data["token_id"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["card_id"])
            this.setCardId(data["card_id"]);
        if (data["gateway_configuration"])
            this.setGatewayConfiguration(data["gateway_configuration"]);
        if (data["gateway_configuration_id"])
            this.setGatewayConfigurationId(data["gateway_configuration_id"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["is_attempt"])
            this.setIsAttempt(data["is_attempt"]);
        if (data["has_failed"])
            this.setHasFailed(data["has_failed"]);
        if (data["is_accountable"])
            this.setIsAccountable(data["is_accountable"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["gateway_operation_id"])
            this.setGatewayOperationId(data["gateway_operation_id"]);
        if (data["arn"])
            this.setArn(data["arn"]);
        if (data["error_code"])
            this.setErrorCode(data["error_code"]);
        if (data["gateway_data"])
            this.setGatewayData(data["gateway_data"]);
        if (data["payment_data_three_d_s_request"])
            this.setPaymentDataThreeDSRequest(data["payment_data_three_d_s_request"]);
        if (data["payment_data_three_d_s_authentication"])
            this.setPaymentDataThreeDSAuthentication(data["payment_data_three_d_s_authentication"]);
        if (data["payment_data_network_authentication"])
            this.setPaymentDataNetworkAuthentication(data["payment_data_network_authentication"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["gateway_fee"])
            this.setGatewayFee(data["gateway_fee"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
            "transaction": this.getTransaction(),
            "transaction_id": this.getTransactionId(),
            "token": this.getToken(),
            "token_id": this.getTokenId(),
            "card": this.getCard(),
            "card_id": this.getCardId(),
            "gateway_configuration": this.getGatewayConfiguration(),
            "gateway_configuration_id": this.getGatewayConfigurationId(),
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "is_attempt": this.getIsAttempt(),
            "has_failed": this.getHasFailed(),
            "is_accountable": this.getIsAccountable(),
            "type": this.getType(),
            "gateway_operation_id": this.getGatewayOperationId(),
            "arn": this.getArn(),
            "error_code": this.getErrorCode(),
            "gateway_data": this.getGatewayData(),
            "payment_data_three_d_s_request": this.getPaymentDataThreeDSRequest(),
            "payment_data_three_d_s_authentication": this.getPaymentDataThreeDSAuthentication(),
            "payment_data_network_authentication": this.getPaymentDataNetworkAuthentication(),
            "metadata": this.getMetadata(),
            "gateway_fee": this.getGatewayFee(),
            "created_at": this.getCreatedAt(),
        };
    }

    
}
export = TransactionOperation;
