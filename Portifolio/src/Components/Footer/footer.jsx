import React from "react";
import * as styles from "./index.module.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.containerFooter}>
      <div className={styles.textFooter}>
        © Gustavo Leal Prado da Silva. {t('Todos os direitos reservados')}
      </div>
    </div>
  );
}
