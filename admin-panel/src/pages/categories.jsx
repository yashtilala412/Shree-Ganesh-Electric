import { Helmet } from 'react-helmet-async';

import { CategoryView } from 'src/sections/categories/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Categories  </title>
      </Helmet>

      <CategoryView />
    </>
  );
}
