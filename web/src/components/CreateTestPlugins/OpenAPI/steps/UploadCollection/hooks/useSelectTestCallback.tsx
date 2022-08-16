import {VariableDefinition} from 'postman-collection';
import {useCallback} from 'react';
import PostmanServiceService, {RequestDefinitionExtended} from 'services/Triggers/Postman.service';
import {IOpenAPIValues, TDraftTestForm} from 'types/Test.types';

export function useSelectTestCallback(
  form: TDraftTestForm<IOpenAPIValues>,
  requests: RequestDefinitionExtended[],
  variables: VariableDefinition[]
) {
  return useCallback(
    (identifier: string) => {
      PostmanServiceService.updateFormOpenAPI(requests, variables, identifier, form);
    },
    [form, requests, variables]
  );
}
