"use client";

import { Draggable, Droppable } from "@hello-pangea/dnd";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { ListWithCards } from "@/types";

import { CardForm } from "./card-form";
import { CardItem } from "./card-item";
import { ListHeader } from "./list-header";

interface ListItemProps {
  index: number;
  data: ListWithCards;
}

export const ListItem = ({ index, data }: ListItemProps) => {
  const textareaRef = useRef<React.ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          className="shrink-0 h-full w-[272px] select-none"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2"
            {...provided.dragHandleProps}
          >
            <ListHeader onAddCard={enableEditing} data={data} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  className={cn(
                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                    data.cards.length > 0 ? "mt-2" : "mt-0"
                  )}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {data.cards.map((card, index) => (
                    <CardItem key={card.id} index={index} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              listId={data.id}
              ref={textareaRef}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};
