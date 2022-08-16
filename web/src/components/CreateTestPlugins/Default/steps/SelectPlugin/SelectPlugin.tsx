import * as Step from 'components/CreateTestPlugins/Step.styled';
import PluginCard from 'components/PluginCard';
import {Plugins} from 'constants/Plugins.constants';
import {useCreateTest} from 'providers/CreateTest/CreateTest.provider';
import {useCallback} from 'react';

import CreateStepFooter from '../../../../CreateTestSteps/CreateTestStepFooter';
import * as S from './SelectPlugin.styled';

const pluginList = Object.values(Plugins);

const SelectPlugin = () => {
  const {onUpdatePlugin, pluginName, onNext} = useCreateTest();

  const handleNext = useCallback(() => {
    onNext();
  }, [onNext]);

  return (
    <Step.Step>
      <Step.FormContainer>
        <Step.Title>What kind of trigger do you want to use to initiate this Tracetest?</Step.Title>
        <S.PluginCardList>
          {pluginList.map(plugin => (
            <PluginCard
              plugin={plugin}
              key={plugin.name}
              onSelect={onUpdatePlugin}
              isSelected={pluginName === plugin.name}
            />
          ))}
        </S.PluginCardList>
      </Step.FormContainer>
      <CreateStepFooter isValid onNext={handleNext} />
    </Step.Step>
  );
};

export default SelectPlugin;
