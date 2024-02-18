// objectUtils.ts
export class ObjectUtils {
  static deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  static merge(...objects: Record<string, any>[]): Record<string, any> {
    return Object.assign({}, ...objects);
  }

  static isEmpty(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0;
  }

  static isNotEmpty(obj: Record<string, any>): boolean {
    return !ObjectUtils.isEmpty(obj);
  }

  static hasOwnProperty(obj: Record<string, any>, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  // Add more object utility methods here...
}
