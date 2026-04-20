"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string | null;
  quantity: number;
}

type Action =
  | { type: "LOAD"; items: CartItem[] }
  | { type: "ADD"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" };

interface State {
  items: CartItem[];
  isOpen: boolean;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD":
      return { ...state, items: action.items };
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.item.id);
      return {
        ...state,
        isOpen: true,
        items: existing
          ? state.items.map((i) =>
              i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [...state.items, { ...action.item, quantity: 1 }],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "SET_QTY":
      return {
        ...state,
        items:
          action.qty <= 0
            ? state.items.filter((i) => i.id !== action.id)
            : state.items.map((i) =>
                i.id === action.id ? { ...i, quantity: action.qty } : i
              ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
  }
}

interface CartCtx {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  count: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bb-cart");
      if (raw) dispatch({ type: "LOAD", items: JSON.parse(raw) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("bb-cart", JSON.stringify(state.items));
  }, [state.items]);

  const total = state.items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = state.items.reduce((s, i) => s + i.quantity, 0);

  return (
    <Ctx.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        total,
        count,
        addItem: (item) => dispatch({ type: "ADD", item }),
        removeItem: (id) => dispatch({ type: "REMOVE", id }),
        setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
        clear: () => dispatch({ type: "CLEAR" }),
        open: () => dispatch({ type: "OPEN" }),
        close: () => dispatch({ type: "CLOSE" }),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
