"use client";

import React, { createContext, useState, useContext, ReactNode, useRef } from "react";

export interface EditState {
  id: string;
  isEdit: boolean;
}

interface EditContextType {
  editState: EditState;
  setEditState: React.Dispatch<React.SetStateAction<EditState>>;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export function EditProvider({ children }: { children: ReactNode }) {
  const [editState, setEditState] = useState<EditState>({ id: "", isEdit: false });
  const scrollRef = useRef<HTMLDivElement>(null);

  return <EditContext.Provider value={{ editState, setEditState, scrollRef }}>{children}</EditContext.Provider>;
}

export function useEditContext() {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error("useEditContext must be used within an EditProvider");
  }
  return context;
}
