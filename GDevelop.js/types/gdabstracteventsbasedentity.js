// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdAbstractEventsBasedEntity {
  getEventsFunctions(): gdEventsFunctionsContainer;
  getPropertyDescriptors(): gdNamedPropertyDescriptorsList;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(project: gdProject, element: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};