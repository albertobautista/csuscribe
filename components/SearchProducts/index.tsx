import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Grid, Button, Search, Responsive, Icon, SearchProps } from 'semantic-ui-react';
interface SearchProductsProps {
  device: string;
}
const SearchProducts = (props: SearchProductsProps) => {
  const router = useRouter();
  const { q } = router.query;
  console.log('QQQQQQQQQ', q);
  const [searchString, setSearchString] = useState<any>(q);

  const handleSearchButtonClick = () => {
    const encodedSearchString = !searchString ? '' : searchString;
    encodedSearchString === '' ? router.push('/products') : router.push(`/search/?q=${encodedSearchString}`);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.which === 13) {
      handleSearchButtonClick();
    } else {
      return;
    }
  };

  const resetComponent = () => {
    setSearchString('');
  };

  const handleSearchStringChange = (e: React.SyntheticEvent, { value }: SearchProps) => {
    if (value) {
      if (value.length < 1) {
        resetComponent();
      }
      if (value.length > 0) {
        setSearchString(value);
      }
    }
    setSearchString(value);
  };

  useEffect(() => {
    setSearchString(q);
  }, []);

  const { device = 'computer' } = props;

  return (
    <Responsive as={Grid} padded fireOnMount centered>
      <Grid.Row centered>
        <Grid.Column className="no-padding-right" largeScreen={12} computer={12} tablet={12} mobile={12}>
          <Search
            input={{ fluid: true }}
            fluid
            aligned="center"
            placeholder={'buscar'}
            onSearchChange={handleSearchStringChange}
            value={searchString}
            noResultsMessage=""
            onKeyPress={onKeyPress}
            open={false}
          />
        </Grid.Column>
        <Grid.Column className="no-padding-left" largeScreen={2} computer={2} tablet={2} mobile={2}>
          <Button type="submit" color="green" onClick={handleSearchButtonClick}>
            {device === 'mobile' ? <Icon name="search" /> : 'Buscar'}
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Responsive>
  );
};

export default SearchProducts;
