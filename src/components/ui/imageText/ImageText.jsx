import styles from "./ImageText.module.css";
import { TitleTextButton } from "..";

export default function ImageText({
  title,
  text,
  path,
  image,
  orientation = "right",
}) {
  return (
    <div className={`${styles.container} ${styles[orientation]}`}>
      <TitleTextButton
        title={title}
        text={text}
        path={path}
        buttonLabel="Ver más"
      />
      <img className={styles.image} src={image} alt={`${title} vector plan`} />
    </div>
  );
}