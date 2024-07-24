import { redirect } from 'react-router-dom';

export async function search({ request }: { request: Request }, setSearchValue: React.Dispatch<string>) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  setSearchValue(values.searchValue.toString());
  return redirect('/');
}
