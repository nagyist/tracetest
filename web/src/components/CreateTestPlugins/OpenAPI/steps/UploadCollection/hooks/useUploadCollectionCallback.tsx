import {RcFile} from 'antd/lib/upload';
import yaml from 'js-yaml';
import {useCallback} from 'react';
import PostmanService from 'services/Triggers/Postman.service';
import SwaggerClient from 'swagger-client';
import {IOpenAPIValues, TDraftTestForm} from 'types/Test.types';

export function useUploadCollectionCallback(form: TDraftTestForm<IOpenAPIValues>): (file?: RcFile) => void {
  return useCallback(
    async (file?: RcFile) => {
      try {
        const contents = await file?.text();

        if (contents) {
          const doc = yaml.load(contents);
          console.log(doc);
          const result = await new SwaggerClient({spec: doc});
          console.log(result);

          form.setFieldsValue({
            variables: [],
            requests: PostmanService.getRequestsFromOpenAPI(result.spec),
          });
        }
      } catch (r) {
        // eslint-disable-next-line no-console
        console.error('error');
      }
    },
    [form]
  );
}
