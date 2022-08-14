import {RcFile} from 'antd/lib/upload';
import {useCallback} from 'react';
import {IPostmanValues, TDraftTestForm} from 'types/Test.types';
import SwaggerClient from 'swagger-client';
import yaml from 'js-yaml';

export function useUploadCollectionCallback(form: TDraftTestForm<IPostmanValues>): (file?: RcFile) => void {
  return useCallback(
    async (file?: RcFile) => {
      try {
        const contents = await file?.text();

        if (contents) {
          const doc = yaml.load(contents);
          console.log(doc);
          const result = await new SwaggerClient({spec: doc});
          console.log(result);

          // const collection = new Collection(JSON.parse(contents));
          // form.setFieldsValue({
          //   variables: collection.variables.all(),
          //   requests: PostmanService.getRequestsFromCollection(collection),
          // });
        }
      } catch (r) {
        // eslint-disable-next-line no-console
        console.error('error');
      }
    },
    [form]
  );
}
