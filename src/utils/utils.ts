export const cloneArrayNoRef = (originalArray) => JSON.parse(JSON.stringify(originalArray));

export const createFormatedFilterArray = (filterArray) => {
  const filtersCopy = cloneArrayNoRef(filterArray);

  const formatedFilters = filtersCopy.map((filter) => {
    const formatedOptions = filter.options;
    const options = formatedOptions;
    options.unshift({
      id: 0,
      value: 0,
      text: filter.field === 'maker' ? 'Todos los fabricantes' : 'Todos los tipos',
    });
    return { ...filter, options };
  });

  const orderedFilters = formatedFilters.map((filter) => {
    const { field, options, title } = filter;
    const orderedOptions = options.sort((a, b) => {
      if (a.option > b.option) {
        return 1;
      }
      if (a.option < b.option) {
        return -1;
      }
      return 0;
    });
    return { field, options: orderedOptions, title };
  });
  return orderedFilters;
};

export const formatStaticFilters = (filters) => {
  const staticOrder = { maker: null, productType: null };

  const formatedStaticFilters = Object.keys(staticOrder)
    .map((key) => filters.find((filter) => filter.field === key))
    .filter((staticFilter) => !!staticFilter);

  return formatedStaticFilters;
};
export const formatDecimalNumber = (number) => number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const currencyFormat = (myNumber, currency = 'MXN') => `$${formatDecimalNumber(Number(myNumber).toFixed(2))} ${currency}`;
