import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("Contact.title")}</h1>
    </main>
  );
}
