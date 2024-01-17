import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";


export interface PropsDemoPage {
    locale: string;
}

export default function DemoPage({ locale }: PropsDemoPage) {
    const { t } = useTranslation("common");

    return (
        <>
            <Head>
                <title>{"Demo Page"}</title>
                <meta name="title" content="Demo Page" />
            </Head>

            <h1 className="text-4xl">{t("title")}</h1>
            <div>
                <Link href={locale === "it" ? "/en/demo" : "/demo"}>
                    {locale === "it" ? "EN" : "IT"}
                </Link>
            </div>
        </>
    );
}