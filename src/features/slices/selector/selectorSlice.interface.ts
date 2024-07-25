import { Characters } from '../../../services/api.types';

export interface selectedItem extends Characters {
  url: string;
}
export default interface selectorState {
  selectedItems: Array<selectedItem>;
  count: number;
}
