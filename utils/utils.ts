import { Product } from '@interfaces/product';

export const getPaginationArrayAndPages = (originalArray: Product[] = [], pageSize: number) => {
  const formatedArray = [];
  let totalPages = originalArray.length / pageSize;
  let start = 0;
  let end = pageSize;
  totalPages = totalPages % 1 > 0 ? Math.trunc(totalPages) + 1 : Math.trunc(totalPages);
  for (let index = 0; index < totalPages; index++) {
    const page = originalArray.slice(start, end);
    start = end;
    end += pageSize;
    formatedArray.push(page);
  }
  return { formatedArray, totalPages: totalPages > 0 ? totalPages : 1 };
};
