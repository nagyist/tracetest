import {Form} from 'antd';
import {IOpenAPIValues, TDraftTestForm} from 'types/Test.types';
import RequestDetailsFileInput from '../../../../Grpc/steps/RequestDetails/RequestDetailsFileInput';
import {useUploadEnvFileCallback} from '../hooks/useUploadEnvFileCallback';

interface IProps {
  form: TDraftTestForm<IOpenAPIValues>;
}

export const EnvFileField = ({form}: IProps) => {
  const collectionFile = Form.useWatch('collectionFile');
  return (
    <Form.Item data-cy="envFile" name="envFile" label="Upload environment file (optional)">
      <RequestDetailsFileInput disabled={!collectionFile} accept=".json" onChange={useUploadEnvFileCallback(form)} />
    </Form.Item>
  );
};
