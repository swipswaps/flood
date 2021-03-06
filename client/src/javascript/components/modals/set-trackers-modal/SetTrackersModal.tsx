import {FC, useEffect, useRef, useState} from 'react';
import {useIntl} from 'react-intl';

import {TorrentTrackerType} from '@shared/types/TorrentTracker';

import {Form, FormRow, Textbox} from '../../../ui';
import Modal from '../Modal';
import TextboxRepeater, {getTextArray} from '../../general/form-elements/TextboxRepeater';
import TorrentActions from '../../../actions/TorrentActions';
import TorrentStore from '../../../stores/TorrentStore';
import UIStore from '../../../stores/UIStore';

const SetTrackersModal: FC = () => {
  const formRef = useRef<Form>(null);
  const intl = useIntl();
  const [isSettingTrackers, setIsSettingTrackers] = useState<boolean>(false);
  const [trackerState, setTrackerState] = useState<{
    isLoadingTrackers: boolean;
    trackerURLs: Array<string>;
  }>({
    isLoadingTrackers: false,
    trackerURLs: [],
  });

  useEffect(() => {
    TorrentActions.fetchTorrentTrackers(TorrentStore.selectedTorrents[0]).then((trackers) => {
      if (trackers != null) {
        setTrackerState({
          isLoadingTrackers: false,
          trackerURLs: trackers
            .filter((tracker) => tracker.type !== TorrentTrackerType.DHT)
            .map((tracker) => tracker.url),
        });
      }
    });
  }, []);

  return (
    <Modal
      heading={intl.formatMessage({
        id: 'torrents.set.trackers.heading',
      })}
      content={
        <div className="modal__content inverse">
          <Form ref={formRef}>
            {trackerState.isLoadingTrackers ? (
              <FormRow>
                <Textbox
                  id="loading"
                  placeholder={intl.formatMessage({
                    id: 'torrents.set.trackers.loading.trackers',
                  })}
                />
              </FormRow>
            ) : (
              <TextboxRepeater
                id="trackers"
                placeholder={intl.formatMessage({
                  id: 'torrents.set.trackers.enter.tracker',
                })}
                defaultValues={
                  trackerState.trackerURLs.length === 0
                    ? undefined
                    : trackerState.trackerURLs.map((url, index) => ({
                        id: index,
                        value: url,
                      }))
                }
              />
            )}
          </Form>
        </div>
      }
      actions={[
        {
          clickHandler: null,
          content: intl.formatMessage({
            id: 'button.cancel',
          }),
          triggerDismiss: true,
          type: 'tertiary',
        },
        {
          clickHandler: () => {
            if (formRef.current == null || isSettingTrackers || trackerState.isLoadingTrackers) {
              return;
            }

            setIsSettingTrackers(true);

            const formData = formRef.current.getFormData() as Record<string, string>;
            const trackers = getTextArray(formData, 'trackers').filter((tracker) => tracker !== '');

            TorrentActions.setTrackers({
              hashes: TorrentStore.selectedTorrents,
              trackers,
            }).then(() => {
              setIsSettingTrackers(false);
              UIStore.dismissModal();
            });
          },
          content: intl.formatMessage({
            id: 'torrents.set.trackers.button.set',
          }),
          isLoading: isSettingTrackers || trackerState.isLoadingTrackers,
          triggerDismiss: false,
          type: 'primary',
        },
      ]}
    />
  );
};

export default SetTrackersModal;
