import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DemoPage, { PropsDemoPage } from "../../components/DemoPage";

export default function Page({ locale }: PropsDemoPage) {
    return <DemoPage locale={locale} />;
}

export const getStaticProps: GetStaticProps = async () => {
    const locale = "en";

    return {
        props: {
            locale,
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};