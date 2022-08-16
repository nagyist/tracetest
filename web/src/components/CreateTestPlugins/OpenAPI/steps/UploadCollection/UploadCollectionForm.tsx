import {Col, Form, Input, Row} from 'antd';
import {useWatch} from 'antd/es/form/Form';
import React from 'react';
import {IOpenAPIValues, TDraftTestForm} from 'types/Test.types';
import RequestDetailsAuthInput from '../../../Rest/steps/RequestDetails/RequestDetailsAuthInput/RequestDetailsAuthInput';
import RequestDetailsHeadersInput from '../../../Rest/steps/RequestDetails/RequestDetailsHeadersInput';
import RequestDetailsUrlInput from '../../../Rest/steps/RequestDetails/RequestDetailsUrlInput';
import {CollectionFileField} from './fields/CollectionFileField';
import {SelectTestFromCollection} from './fields/SelectTestFromCollection';

export const FORM_ID = 'upload-collection-test';

interface IProps {
  form: TDraftTestForm<IOpenAPIValues>;
}

const UploadCollectionForm = ({form}: IProps) => {
  const rr = useWatch<Record<string, string>>('params');
  return (
    <div style={{display: 'grid'}}>
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item name="requests" hidden>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item name="variables" hidden>
            <Input type="hidden" />
          </Form.Item>
          <CollectionFileField form={form} />
          <SelectTestFromCollection form={form} />
          <Form.Item noStyle shouldUpdate style={{marginBottom: 0, width: '100%'}}>
            {({getFieldValue, setFieldsValue}) => {
              return JSON.stringify(rr);
            }}
          </Form.Item>
          <Form.Item noStyle shouldUpdate style={{marginBottom: 0, width: '100%'}}>
            {({getFieldValue}) => {
              let requests: any[] = getFieldValue('requests');
              console.log(requests);
              let collectionTest = getFieldValue('collectionTest');
              console.log(collectionTest);
              let message = requests.find(({id}) => id === collectionTest);
              console.log(message);
              return (
                collectionTest && (
                  <div>
                    {message.parameters.map(({name}: any) => {
                      return (
                        <Form.Item name={`params.${name}`} style={{flex: 1}} label={name}>
                          <Input data-cy={`${name}-vars`} placeholder="Enter request url" />
                        </Form.Item>
                      );
                    })}
                  </div>
                )
              );
            }}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={12} style={{marginTop: 16}}>
        <Col span={12}>
          <RequestDetailsUrlInput />
        </Col>
        <Col span={12}>
          <Form.Item className="input-body" data-cy="body" label="Request body" name="body" style={{marginBottom: 0}}>
            <Input.TextArea placeholder="Enter request body text" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={12}>
          <RequestDetailsHeadersInput />
        </Col>
        <Col span={12}>
          <RequestDetailsAuthInput form={form} />
        </Col>
      </Row>
    </div>
  );
};

export default UploadCollectionForm;
