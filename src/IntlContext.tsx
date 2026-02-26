import React from 'react';
import { IntlProvider } from 'react-intl';
import English from './locale/en_us.json';
import Finnish from './locale/fi_fi.json';
import Japanese from './locale/ja_jp.json';

interface IntlContextType {
  locale: string;
  messages: Record<string, string>;
  switchToEnglish: () => void;
  switchToFinnish: () => void;
  switchToJapanese: () => void;
}

const Context = React.createContext<IntlContextType | undefined>(undefined);

interface IntlProviderWrapperProps {
  children: React.ReactNode;
}

interface IntlProviderWrapperState {
  locale: string;
  messages: Record<string, string>;
  switchToEnglish: () => void;
  switchToFinnish: () => void;
  switchToJapanese: () => void;
}

class IntlProviderWrapper extends React.Component<IntlProviderWrapperProps, IntlProviderWrapperState> {
  constructor(props: IntlProviderWrapperProps)  {
    super(props);

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

  switchToEnglish: () => void;
  switchToFinnish: () => void;
  switchToJapanese: () => void;

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
