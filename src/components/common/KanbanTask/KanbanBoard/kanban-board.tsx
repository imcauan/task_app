"use client";
import React from "react";
import { KanbanColumn } from "@/components/common/KanbanTask/KanbanColumn/kanban-column";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { useUpdateColumn } from "@/shared/column/hooks/update-column.hook";
import { useDeleteColumn } from "@/shared/column/hooks/delete-column.hook";
import { useCreateColumn } from "@/shared/column/hooks/create-column.hook";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateUserColumns } from "@/shared/column/hooks/update-user-columns.hook";

interface KanbanBoardProps {
  columns: ColumnEntity[] | undefined;
  userId: string;
}

export function KanbanBoard({ columns, userId }: KanbanBoardProps) {
  const queryClient = useQueryClient();
  const { mutateAsync: createColumnFn } = useCreateColumn();
  const { mutate: updateUserColumnsFn } = useUpdateUserColumns();
  const { mutate: deleteColumnFn } = useDeleteColumn();
  const { mutate: updateColumnFn } = useUpdateColumn();
  const [activeColumn, setActiveColumn] = React.useState<ColumnEntity | null>(
    null
  );

  const columnsId = React.useMemo(
    () => columns?.map((col) => col.id),
    [columns]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );
  return (
    <div className="flex flex-col w-full h-full items-center gap-4 overflow-x-visible overflow-y-hidden p-4 mt-10">
      <Button className="flex max-w-60 items-center gap-3" onClick={addColumn}>
        <FaPlus />
        Add column
      </Button>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div>
          <div className="flex gap-4 items-center">
            <SortableContext items={columnsId as string[]}>
              {columns &&
                columns.map((t) => (
                  <KanbanColumn
                    userId={userId}
                    column={t}
                    key={t.id}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                  />
                ))}
            </SortableContext>
            {createPortal(
              <DragOverlay>
                {activeColumn && (
                  <KanbanColumn
                    userId={userId}
                    column={activeColumn}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                  />
                )}
              </DragOverlay>,
              document.body
            )}
          </div>
        </div>
      </DndContext>
    </div>
  );

  async function addColumn() {
    const column = await createColumnFn({
      userId,
    });
  }

  async function deleteColumn(id: string) {
    deleteColumnFn(id);
  }

  async function updateColumn(id: string, title: string) {
    updateColumnFn({ id, title });
  }

  function onDragStart(ev: DragStartEvent) {
    if (ev.active.data.current?.type === "Column") {
      setActiveColumn(ev.active.data.current?.column as ColumnEntity);
      return;
    }
  }

  function onDragEnd(ev: DragEndEvent) {
    const { active, over } = ev;

    if (!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;

    const activeColumnIndex = columns?.findIndex(
      (c) => c.id === activeColumnId
    );
    const overColumnIndex = columns?.findIndex((c) => c.id === overColumnId);
    const updatedColumns = arrayMove(
      columns as ColumnEntity[],
      activeColumnIndex as number,
      overColumnIndex as number
    );

    queryClient.setQueryData(["columns"], updatedColumns);
  }
}
