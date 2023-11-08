import { ItemsFeed, ItemsStore } from "./models/item";

export class Store implements ItemsStore {
  private items: ItemsFeed[];

  constructor() {
    this.items = [];
  }

  get hasItems() {
    return this.items.length > 0;
  }

  getAllItems(): ItemsFeed[] {
    return this.items;
  }

  setItems(items: ItemsFeed[]) {
    this.items = items.map((item) => ({
      ...item,
      read: false,
    }));
  }

  makeRead(id: number) {
    const item = this.items.find((item: ItemsFeed) => item.id === id);

    if (item) {
      item.read = true;
    }
  }
}
