import React from 'react';
import { IntlProvider } from 'react-intl';
import English from './locale/en_us.json';
import Finnish from './locale/fi_fi.json';
import Japanese from './locale/ja_jp.json';

const Context = React.createContext(undefined);

class IntlProviderWrapper extends React.Component {
  constructor(...args)  {
    super(...args);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: English });

    this.switchToFinnish = () =>
      this.setState({ locale: "fi", messages: Finnish });

    this.switchToJapanese = () =>
      this.setState({ locale: "ja", messages: Japanese});

    this.state = {
      locale: "en",
      messages: English,
      switchToEnglish: this.switchToEnglish,
      switchToFinnish: this.switchToFinnish,
      switchToJapanese: this.switchToJapanese
    };
  }

    render() {
      const { children } = this.props;
      const { locale, messages } = this.state;
      return (
        <Context.Provider value={this.state}>
          <IntlProvider
            key={locale}
            locale={locale}
            messages={messages}
            defaultLocale="en"
          >
            {children}
          </IntlProvider>
        </Context.Provider>
      );
    }
  }
export { IntlProviderWrapper, Context as IntlContext };
