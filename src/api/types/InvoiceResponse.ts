/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface InvoiceResponse {
    /** The amount due in cents. */
    amountDueCents: number;
    /** The discount applied to the invoice. E.g. [20.0f] for 20% off. */
    discountPercentOff?: number;
    /** The discount applied to the invoice. E.g. [20.0f] for 20% off. */
    discountAmountOff?: number;
    /** The Unix timestamp of the next payment attempt. */
    nextPaymentAttemptUnix: number;
}
