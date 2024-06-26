// @flow

import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
import { testProject } from '../../GDevelopJsInitializerDecorator';

import fakeHotReloadPreviewButtonProps from '../../FakeHotReloadPreviewButtonProps';
import muiDecorator from '../../ThemeDecorator';
import paperDecorator from '../../PaperDecorator';
import LayersList from '../../../LayersList';
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'LayoutEditor/LayersList',
  component: LayersList,
  decorators: [paperDecorator, muiDecorator],
};

export const Default = () => {
  const [selectedLayer, setSelectedLayer] = React.useState<string>('');
  return (
    <DragAndDropContextProvider>
      <LayersList
        project={testProject.project}
        selectedLayer={selectedLayer}
        onSelectLayer={setSelectedLayer}
        onEditLayerEffects={action('onEditLayerEffects')}
        onEditLayer={action('onEditLayer')}
        onRemoveLayer={(layerName, cb) => {
          cb(true);
        }}
        onRenameLayer={(oldName, newName, cb) => {
          cb(true);
        }}
        onCreateLayer={action('onCreateLayer')}
        layersContainer={testProject.testLayout}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
      />
    </DragAndDropContextProvider>
  );
};

export const SmallWidthAndHeight = () => {
  const [selectedLayer, setSelectedLayer] = React.useState<string>('');

  return (
    <DragAndDropContextProvider>
      <div style={{ width: 250, height: 200 }}>
        <LayersList
          project={testProject.project}
          selectedLayer={selectedLayer}
          onSelectLayer={setSelectedLayer}
          onEditLayerEffects={action('onEditLayerEffects')}
          onEditLayer={action('onEditLayer')}
          onRemoveLayer={(layerName, cb) => {
            cb(true);
          }}
          onRenameLayer={(oldName, newName, cb) => {
            cb(true);
          }}
          onCreateLayer={action('onCreateLayer')}
          layersContainer={testProject.testLayout}
          hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        />
      </div>
    </DragAndDropContextProvider>
  );
};
