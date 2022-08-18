export function assertUnreachable(action: never): never {
  throw new Error(`Unreached case caught: ${action}`);
}
