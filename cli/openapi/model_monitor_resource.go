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

// checks if the MonitorResource type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MonitorResource{}

// MonitorResource Represents a Monitor structured into the Resources format.
type MonitorResource struct {
	// Represents the type of this resource. It should always be set as 'Monitor'.
	Type *string  `json:"type,omitempty"`
	Spec *Monitor `json:"spec,omitempty"`
}

// NewMonitorResource instantiates a new MonitorResource object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMonitorResource() *MonitorResource {
	this := MonitorResource{}
	return &this
}

// NewMonitorResourceWithDefaults instantiates a new MonitorResource object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMonitorResourceWithDefaults() *MonitorResource {
	this := MonitorResource{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *MonitorResource) GetType() string {
	if o == nil || isNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MonitorResource) GetTypeOk() (*string, bool) {
	if o == nil || isNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *MonitorResource) HasType() bool {
	if o != nil && !isNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *MonitorResource) SetType(v string) {
	o.Type = &v
}

// GetSpec returns the Spec field value if set, zero value otherwise.
func (o *MonitorResource) GetSpec() Monitor {
	if o == nil || isNil(o.Spec) {
		var ret Monitor
		return ret
	}
	return *o.Spec
}

// GetSpecOk returns a tuple with the Spec field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MonitorResource) GetSpecOk() (*Monitor, bool) {
	if o == nil || isNil(o.Spec) {
		return nil, false
	}
	return o.Spec, true
}

// HasSpec returns a boolean if a field has been set.
func (o *MonitorResource) HasSpec() bool {
	if o != nil && !isNil(o.Spec) {
		return true
	}

	return false
}

// SetSpec gets a reference to the given Monitor and assigns it to the Spec field.
func (o *MonitorResource) SetSpec(v Monitor) {
	o.Spec = &v
}

func (o MonitorResource) MarshalJSON() ([]byte, error) {
	toSerialize, err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MonitorResource) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !isNil(o.Spec) {
		toSerialize["spec"] = o.Spec
	}
	return toSerialize, nil
}

type NullableMonitorResource struct {
	value *MonitorResource
	isSet bool
}

func (v NullableMonitorResource) Get() *MonitorResource {
	return v.value
}

func (v *NullableMonitorResource) Set(val *MonitorResource) {
	v.value = val
	v.isSet = true
}

func (v NullableMonitorResource) IsSet() bool {
	return v.isSet
}

func (v *NullableMonitorResource) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMonitorResource(val *MonitorResource) *NullableMonitorResource {
	return &NullableMonitorResource{value: val, isSet: true}
}

func (v NullableMonitorResource) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMonitorResource) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}