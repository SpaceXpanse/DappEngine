/*
 * GDevelop Core
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */

#include "ForEachChildVariableEvent.h"
#include "GDCore/Events/Serialization.h"
#include "GDCore/Serialization/SerializerElement.h"

using namespace std;

namespace gd {

ForEachChildVariableEvent::ForEachChildVariableEvent()
    : BaseEvent(), valueIteratorVariableName("child"), keyIteratorVariableName(""), iterableVariableName("") {}

vector<gd::InstructionsList*> ForEachChildVariableEvent::GetAllConditionsVectors() {
  vector<gd::InstructionsList*> allConditions;
  allConditions.push_back(&conditions);

  return allConditions;
}

vector<gd::InstructionsList*> ForEachChildVariableEvent::GetAllActionsVectors() {
  vector<gd::InstructionsList*> allActions;
  allActions.push_back(&actions);

  return allActions;
}

vector<const gd::InstructionsList*>
ForEachChildVariableEvent::GetAllConditionsVectors() const {
  vector<const gd::InstructionsList*> allConditions;
  allConditions.push_back(&conditions);

  return allConditions;
}

vector<const gd::InstructionsList*>
ForEachChildVariableEvent::GetAllActionsVectors() const {
  vector<const gd::InstructionsList*> allActions;
  allActions.push_back(&actions);

  return allActions;
}

void ForEachChildVariableEvent::SerializeTo(SerializerElement& element) const {
  element.AddChild("iterableVariableName").SetValue(iterableVariableName);
  element.AddChild("valueIteratorVariableName").SetValue(valueIteratorVariableName);
  element.AddChild("keyIteratorVariableName").SetValue(keyIteratorVariableName);
  gd::EventsListSerialization::SerializeInstructionsTo(
      conditions, element.AddChild("conditions"));
  gd::EventsListSerialization::SerializeInstructionsTo(
      actions, element.AddChild("actions"));

  if (!events.IsEmpty())
    gd::EventsListSerialization::SerializeEventsTo(events,
                                                  element.AddChild("events"));
}

void ForEachChildVariableEvent::UnserializeFrom(gd::Project& project,
                                            const SerializerElement& element) {
  iterableVariableName = element.GetChild("iterableVariableName", 0, "").GetValue().GetString();
  valueIteratorVariableName = element.GetChild("valueIteratorVariableName", 0, "").GetValue().GetString();
  keyIteratorVariableName = element.GetChild("keyIteratorVariableName", 0, "").GetValue().GetString();
  gd::EventsListSerialization::UnserializeInstructionsFrom(
      project, conditions, element.GetChild("conditions", 0, "Conditions"));
  gd::EventsListSerialization::UnserializeInstructionsFrom(
      project, actions, element.GetChild("actions", 0, "Actions"));

  events.Clear();
  if (element.HasChild("events", "Events")) {
    gd::EventsListSerialization::UnserializeEventsFrom(
        project, events, element.GetChild("events", 0, "Events"));
  }
}

}  // namespace gd
