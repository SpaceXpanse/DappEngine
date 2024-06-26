// @flow
import React from 'react';
import { I18n } from '@lingui/react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { type MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';

import Text from './Text';
import CircularProgress from './CircularProgress';
import { Column, Spacer } from './Grid';

const loaderSize = 50;
const dialogWithMessageWidth = 250;

const styles = {
  dialogContent: {
    padding: 10,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
};

type Props = {|
  show: boolean,
  message?: ?MessageDescriptor,
  progress?: ?number,
|};

const transitionDuration = { enter: 0, exit: 150 };

const LoaderModal = (props: Props) => {
  const isInfinite = props.progress === null || props.progress === undefined;
  return (
    <I18n>
      {({ i18n }) => (
        <Dialog open={props.show} transitionDuration={transitionDuration}>
          <DialogContent style={styles.dialogContent}>
            <div
              style={{
                width: props.message ? dialogWithMessageWidth : undefined,
              }}
            >
              <Column noMargin alignItems="center" expand>
                <CircularProgress
                  size={loaderSize}
                  disableShrink={isInfinite}
                  value={isInfinite ? undefined : props.progress}
                  variant={isInfinite ? 'indeterminate' : 'determinate'}
                />
                {props.message && (
                  <>
                    <Spacer />
                    <Text noMargin align="center">
                      {i18n._(props.message)}
                    </Text>
                  </>
                )}
              </Column>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </I18n>
  );
};

export default LoaderModal;
