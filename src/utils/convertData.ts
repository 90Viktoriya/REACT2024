import { selectedItem } from '../features/slices/selector/selectorSlice.interface';

export default function convertData(selectedItems: selectedItem[]) {
  const headers = ['UID,Name,Gender,Year of birthday,URL'];
  const dataCsv = selectedItems.reduce<Array<string>>((accumulator: Array<string>, character) => {
    const { uid, name, gender, yearOfBirth, url } = character;
    accumulator.push([uid, name, gender, yearOfBirth, url].join(','));
    return accumulator;
  }, []);
  return [...headers, ...dataCsv].join('\n');
}
