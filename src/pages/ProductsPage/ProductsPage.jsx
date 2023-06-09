import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useStores } from 'hooks/useStores';
import { useDispatch } from 'react-redux';
import { setStore } from 'redux/store/slice';

import { getStore } from 'shared/utils/getStore';
import { Products } from 'modules/Products';
import { useOneStore } from 'hooks/useOneStore';

const ProductsPage = () => {
  const { store_name } = useParams();
  const { stores } = useStores();
  const { products } = useOneStore();
  const dispath = useDispatch();

  useEffect(() => {
    const store = getStore(stores, store_name);
    if (store) dispath(setStore(store));
  }, [dispath, store_name, stores]);

  const showList = products.length > 0;

  if (showList) return <Products products={products} />;
};

export default ProductsPage;
