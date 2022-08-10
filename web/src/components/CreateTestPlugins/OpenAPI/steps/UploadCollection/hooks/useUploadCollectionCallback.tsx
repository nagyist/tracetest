import {RcFile} from 'antd/lib/upload';
import {useCallback} from 'react';
import {IPostmanValues, TDraftTestForm} from 'types/Test.types';
import SwaggerParser from '@apidevtools/swagger-parser';

export function useUploadCollectionCallback(form: TDraftTestForm<IPostmanValues>): (file?: RcFile) => void {
  return useCallback(
    async (file?: RcFile) => {
      try {
        const contents = await file?.text();

        if (contents) {
          let api = await SwaggerParser.validate(contents);
          console.log('API name: %s, Version: %s', api.info.title, api.info.version);

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
