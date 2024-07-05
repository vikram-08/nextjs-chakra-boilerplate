import { cookies } from "next/headers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";
import { textAppName } from "@/constants";
import { NextIntlClientProvider } from "next-intl";
import { ChakraProvider } from "@/provider";
import { getMessages } from "next-intl/server";
import { getCurrentTheme } from "@/utils";

export default async function RootLayout(props) {
  const {
    params: { lang: locale },
  } = props;

  const messages = await getMessages();

  const userTheme = getCurrentTheme(cookies);


  return (
    <html
      lang={locale}
      id={textAppName}
      data-theme={userTheme}
      className={userTheme}
      style={{ colorScheme: userTheme }}
    >
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChakraProvider
            userTheme={userTheme}
          >
            <Header userTheme={userTheme} />
            <Main {...props} />
            <Footer />
          </ChakraProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
