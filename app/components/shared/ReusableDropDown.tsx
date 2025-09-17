"use client";

import { DropdownMenu, DropdownMenuLabel, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem } from "./dropdown-menu";
import { Ellipsis, LoaderCircle } from "lucide-react";
import React from "react";
import { useEditContext } from "@/app/context/EditContext";
import { isUserPostOwner } from "@/app/(pages)/(home)/_services/isUserPostOwner";

interface ReusableDropDownProps {
  id: string;
  onDelete?: (id: string) => void;
  isPendingDelete?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
  customActions?: React.ReactNode;
  isOwner?: boolean;
  profileId?: string;
  idCreator?: string;
}

const ReusableDropDown = ({ id, onDelete, isPendingDelete, profileId, idCreator }: ReusableDropDownProps) => {
  "use memo";
  const { editState, setEditState } = useEditContext();

  const isOwner = isUserPostOwner(profileId, idCreator);

  const handleEdit = () => {
    setEditState({
      id,
      isEdit: !editState.isEdit,
    });
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const isEditing = editState.id === id && editState.isEdit;

  return (
    <DropdownMenu>
      {isOwner && (
        <>
          <DropdownMenuTrigger className="cursor-pointer hover:bg-accent p-2 rounded-lg transition-all duration-300">
            {isPendingDelete ? <LoaderCircle className="animate-spin" /> : <Ellipsis />}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleEdit}>{isEditing ? "Cancel Editing" : "Edit"}</DropdownMenuItem>

            <DropdownMenuItem disabled={isPendingDelete} onClick={handleDelete} className="text-red-600 hover:!bg-red-400 transition-all duration-300 cursor-pointer">
              {isPendingDelete ? <LoaderCircle className="animate-spin" /> : "Delete"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </>
      )}
    </DropdownMenu>
  );
};

export default ReusableDropDown;
