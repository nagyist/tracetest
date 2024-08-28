/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type WebhookResult struct {
	Request WebhookResultRequest `json:"request,omitempty"`

	Response WebhookResultResponse `json:"response,omitempty"`
}

// AssertWebhookResultRequired checks if the required fields are not zero-ed
func AssertWebhookResultRequired(obj WebhookResult) error {
	if err := AssertWebhookResultRequestRequired(obj.Request); err != nil {
		return err
	}
	if err := AssertWebhookResultResponseRequired(obj.Response); err != nil {
		return err
	}
	return nil
}

// AssertRecurseWebhookResultRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of WebhookResult (e.g. [][]WebhookResult), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseWebhookResultRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aWebhookResult, ok := obj.(WebhookResult)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertWebhookResultRequired(aWebhookResult)
	})
}