/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Cart, Session } from '../type.d';

const SampleSession: Session = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type SessionCounterProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
};

const SessionContext = createContext<SessionCounterProp>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  saveItem: () => {},
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const login = (id: number, name: string) =>
    setSession({ ...session, loginUser: { id, name } });
  const logout = () => setSession({ ...session, loginUser: null });
  const removeItem = (itemId: number) =>
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  const saveItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    const foundItem = id !== 0 && cart.find((item) => item.id === id);
    if (!foundItem) {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price });
    } else {
      foundItem.name = name;
      foundItem.price = price;
    }

    setSession({
      ...session,
    });
  };

  return (
    <>
      <SessionContext.Provider
        value={{ session, login, logout, removeItem, saveItem }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};

export const useSession = () => useContext(SessionContext);
