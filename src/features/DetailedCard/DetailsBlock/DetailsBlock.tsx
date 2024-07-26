import { ComponentsCaptions } from '../../../data/ComponentsCaptions';
import { ListItem, DetailsBlockProps } from './DetailsBlock.type';
import styles from './DetailsBlock.module.css';

export const DetailsBlock = <T extends ListItem>({ title, itemsList, detailsList }: DetailsBlockProps<T>) => (
  <div>
    <h3>{title}</h3>
    {itemsList.map((listItem) => (
      <div className={styles.block} key={listItem.uid}>
        {detailsList.map(({ title: detailsTitle, key }) => (
          <p key={detailsTitle}>
            {detailsTitle}
            {listItem[key]?.toString() ?? ComponentsCaptions.UNKNOWN_VALUE}
          </p>
        ))}
      </div>
    ))}
  </div>
);
