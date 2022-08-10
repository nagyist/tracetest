import {IPluginComponentMap} from 'types/Plugins.types';
import {SupportedPlugins} from 'constants/Plugins.constants';
import Postman from './Postman';
import OpenAPI from './OpenAPI';
import Rest from './Rest';
import Grpc from './Grpc';

export const PluginsComponentMap: Record<SupportedPlugins, IPluginComponentMap> = {
  [SupportedPlugins.REST]: Rest,
  [SupportedPlugins.Messaging]: {},
  [SupportedPlugins.GRPC]: Grpc,
  [SupportedPlugins.Postman]: Postman,
  [SupportedPlugins.OpenAPI]: OpenAPI,
};

export default PluginsComponentMap;
