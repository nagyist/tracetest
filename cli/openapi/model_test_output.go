/*
TraceTest

OpenAPI definition for TraceTest endpoint and resources

API version: 0.2.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// TestOutput struct for TestOutput
type TestOutput struct {
	Name     *string   `json:"name,omitempty"`
	Selector *Selector `json:"selector,omitempty"`
	Value    *string   `json:"value,omitempty"`
}

// NewTestOutput instantiates a new TestOutput object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTestOutput() *TestOutput {
	this := TestOutput{}
	return &this
}

// NewTestOutputWithDefaults instantiates a new TestOutput object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTestOutputWithDefaults() *TestOutput {
	this := TestOutput{}
	return &this
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *TestOutput) GetName() string {
	if o == nil || o.Name == nil {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestOutput) GetNameOk() (*string, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *TestOutput) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *TestOutput) SetName(v string) {
	o.Name = &v
}

// GetSelector returns the Selector field value if set, zero value otherwise.
func (o *TestOutput) GetSelector() Selector {
	if o == nil || o.Selector == nil {
		var ret Selector
		return ret
	}
	return *o.Selector
}

// GetSelectorOk returns a tuple with the Selector field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestOutput) GetSelectorOk() (*Selector, bool) {
	if o == nil || o.Selector == nil {
		return nil, false
	}
	return o.Selector, true
}

// HasSelector returns a boolean if a field has been set.
func (o *TestOutput) HasSelector() bool {
	if o != nil && o.Selector != nil {
		return true
	}

	return false
}

// SetSelector gets a reference to the given Selector and assigns it to the Selector field.
func (o *TestOutput) SetSelector(v Selector) {
	o.Selector = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *TestOutput) GetValue() string {
	if o == nil || o.Value == nil {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestOutput) GetValueOk() (*string, bool) {
	if o == nil || o.Value == nil {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *TestOutput) HasValue() bool {
	if o != nil && o.Value != nil {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *TestOutput) SetValue(v string) {
	o.Value = &v
}

func (o TestOutput) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Name != nil {
		toSerialize["name"] = o.Name
	}
	if o.Selector != nil {
		toSerialize["selector"] = o.Selector
	}
	if o.Value != nil {
		toSerialize["value"] = o.Value
	}
	return json.Marshal(toSerialize)
}

type NullableTestOutput struct {
	value *TestOutput
	isSet bool
}

func (v NullableTestOutput) Get() *TestOutput {
	return v.value
}

func (v *NullableTestOutput) Set(val *TestOutput) {
	v.value = val
	v.isSet = true
}

func (v NullableTestOutput) IsSet() bool {
	return v.isSet
}

func (v *NullableTestOutput) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTestOutput(val *TestOutput) *NullableTestOutput {
	return &NullableTestOutput{value: val, isSet: true}
}

func (v NullableTestOutput) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTestOutput) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}