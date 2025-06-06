// app/session.server.ts

import {
  createCookieSessionStorage,
  type Session,
  type SessionData,
} from "react-router";

// For production, make sure to use environment variables for secrets and cookie names.
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: process.env.NODE_ENV === "production",
    secrets: [process.env.SESSION_SECRET || "__REPLACE_WITH_SECRET__"],
    sameSite: "strict",
    path: "/",
    httpOnly: true,
  },
});

export const getSession = (cookie?: string | null) => {
  return sessionStorage.getSession(cookie);
};

export const commitSession = (session: Session<SessionData, SessionData>) => {
  return sessionStorage.commitSession(session);
};

export const destroySession = (session: Session<SessionData, SessionData>) => {
  return sessionStorage.destroySession(session);
};
