import { v4 } from "uuid"
import { IContext } from "./ifc/context"

export class ContextService {
  createContext(): IContext {
    return {
      id: v4(),
      timestamp: new Date(),
    }
  }
}
