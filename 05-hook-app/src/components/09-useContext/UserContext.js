import { createContext } from "react";

// Sirve para compartir información entre varios componentes que
// no necesariamente son hijos, sino que pueden ser hermanos también
export const UserContext = createContext(null);