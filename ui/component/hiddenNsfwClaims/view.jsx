// @flow
import React from 'react';
import Button from 'component/button';
import I18nMessage from 'component/i18nMessage';

type Props = {
  numberOfHiddenClaims: number,
  obscureNsfw: boolean,
  className: ?string,
};

export default (props: Props) => {
  const { numberOfHiddenClaims: number, obscureNsfw } = props;

  function getMessage() {
    if (number > 1) return __('%number% files', { number });
    return __('%number% file', { number });
  }
  return (
    obscureNsfw &&
    Boolean(number) && (
      <div className="section--padded section__subtitle">
        <I18nMessage
          tokens={{
            settings_link: <Button button="link" navigate="/$/settings" label={__('content viewing preferences')} />,
            message: getMessage(),
          }}
        >
          %message% hidden due to your %settings_link%.
        </I18nMessage>
      </div>
    )
  );
};
