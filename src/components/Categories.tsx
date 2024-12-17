import { useCallback } from 'react';

import type { IData } from '../types/types';

// interfaces
interface IProps {
  data: IData | null;
}

const Categories: React.FC<IProps> = ({ data }) => {
  /**
   * Returns the count of items belonging to a specific category.
   *
   * @param {number} categoryId - The ID of the category.
   * @return {string} The count of items as a string, or '0' if no items are found.
   */
  const countItems = useCallback(
    (categoryId: number): string => {
      const count = data?.locations?.filter((l) => l.category.id === categoryId).length || 0;

      return count.toString();
    },
    [data]
  );

  return (
    <div className='grid flex-gap'>
      {data?.legend?.map((item) => (
        <div key={item.id} className='flex flex-v-center flex-gap no-select'>
          <span className='material-symbols-outlined'>{item.icon}</span>
          <em>
            {item.name} <strong>({countItems(item.id)})</strong>
          </em>
        </div>
      ))}
    </div>
  );
};

export default Categories;
