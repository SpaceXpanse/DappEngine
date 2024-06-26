// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdNamedPropertyDescriptorsList {
  constructor(): void;
  insertNew(name: string, pos: number): gdNamedPropertyDescriptor;
  insert(item: gdNamedPropertyDescriptor, pos: number): gdNamedPropertyDescriptor;
  has(name: string): boolean;
  get(name: string): gdNamedPropertyDescriptor;
  getAt(pos: number): gdNamedPropertyDescriptor;
  remove(name: string): void;
  move(oldIndex: number, newIndex: number): void;
  getCount(): number;
  getPosition(item: gdNamedPropertyDescriptor): number;
  size(): number;
  at(index: number): gdNamedPropertyDescriptor;
  delete(): void;
  ptr: number;
};