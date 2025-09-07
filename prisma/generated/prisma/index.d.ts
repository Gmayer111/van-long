
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DishService
 * 
 */
export type DishService = $Result.DefaultSelection<Prisma.$DishServicePayload>
/**
 * Model Dish
 * 
 */
export type Dish = $Result.DefaultSelection<Prisma.$DishPayload>
/**
 * Model Extra
 * 
 */
export type Extra = $Result.DefaultSelection<Prisma.$ExtraPayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DishServices
 * const dishServices = await prisma.dishService.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DishServices
   * const dishServices = await prisma.dishService.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dishService`: Exposes CRUD operations for the **DishService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DishServices
    * const dishServices = await prisma.dishService.findMany()
    * ```
    */
  get dishService(): Prisma.DishServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extra`: Exposes CRUD operations for the **Extra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extras
    * const extras = await prisma.extra.findMany()
    * ```
    */
  get extra(): Prisma.ExtraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DishService: 'DishService',
    Dish: 'Dish',
    Extra: 'Extra',
    Picture: 'Picture',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dishService" | "dish" | "extra" | "picture" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DishService: {
        payload: Prisma.$DishServicePayload<ExtArgs>
        fields: Prisma.DishServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>
          }
          findFirst: {
            args: Prisma.DishServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>
          }
          findMany: {
            args: Prisma.DishServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>[]
          }
          create: {
            args: Prisma.DishServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>
          }
          createMany: {
            args: Prisma.DishServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>[]
          }
          delete: {
            args: Prisma.DishServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>
          }
          update: {
            args: Prisma.DishServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>
          }
          deleteMany: {
            args: Prisma.DishServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>[]
          }
          upsert: {
            args: Prisma.DishServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishServicePayload>
          }
          aggregate: {
            args: Prisma.DishServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDishService>
          }
          groupBy: {
            args: Prisma.DishServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishServiceCountArgs<ExtArgs>
            result: $Utils.Optional<DishServiceCountAggregateOutputType> | number
          }
        }
      }
      Dish: {
        payload: Prisma.$DishPayload<ExtArgs>
        fields: Prisma.DishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findFirst: {
            args: Prisma.DishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findMany: {
            args: Prisma.DishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          create: {
            args: Prisma.DishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          createMany: {
            args: Prisma.DishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          delete: {
            args: Prisma.DishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          update: {
            args: Prisma.DishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          deleteMany: {
            args: Prisma.DishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          upsert: {
            args: Prisma.DishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          aggregate: {
            args: Prisma.DishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDish>
          }
          groupBy: {
            args: Prisma.DishGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCountArgs<ExtArgs>
            result: $Utils.Optional<DishCountAggregateOutputType> | number
          }
        }
      }
      Extra: {
        payload: Prisma.$ExtraPayload<ExtArgs>
        fields: Prisma.ExtraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          findFirst: {
            args: Prisma.ExtraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          findMany: {
            args: Prisma.ExtraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>[]
          }
          create: {
            args: Prisma.ExtraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          createMany: {
            args: Prisma.ExtraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExtraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>[]
          }
          delete: {
            args: Prisma.ExtraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          update: {
            args: Prisma.ExtraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          deleteMany: {
            args: Prisma.ExtraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExtraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>[]
          }
          upsert: {
            args: Prisma.ExtraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtraPayload>
          }
          aggregate: {
            args: Prisma.ExtraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtra>
          }
          groupBy: {
            args: Prisma.ExtraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtraCountArgs<ExtArgs>
            result: $Utils.Optional<ExtraCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dishService?: DishServiceOmit
    dish?: DishOmit
    extra?: ExtraOmit
    picture?: PictureOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DishServiceCountOutputType
   */

  export type DishServiceCountOutputType = {
    dishs: number
    pictures: number
    extras: number
  }

  export type DishServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishs?: boolean | DishServiceCountOutputTypeCountDishsArgs
    pictures?: boolean | DishServiceCountOutputTypeCountPicturesArgs
    extras?: boolean | DishServiceCountOutputTypeCountExtrasArgs
  }

  // Custom InputTypes
  /**
   * DishServiceCountOutputType without action
   */
  export type DishServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishServiceCountOutputType
     */
    select?: DishServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DishServiceCountOutputType without action
   */
  export type DishServiceCountOutputTypeCountDishsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
  }

  /**
   * DishServiceCountOutputType without action
   */
  export type DishServiceCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }

  /**
   * DishServiceCountOutputType without action
   */
  export type DishServiceCountOutputTypeCountExtrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DishService
   */

  export type AggregateDishService = {
    _count: DishServiceCountAggregateOutputType | null
    _avg: DishServiceAvgAggregateOutputType | null
    _sum: DishServiceSumAggregateOutputType | null
    _min: DishServiceMinAggregateOutputType | null
    _max: DishServiceMaxAggregateOutputType | null
  }

  export type DishServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type DishServiceSumAggregateOutputType = {
    id: number | null
  }

  export type DishServiceMinAggregateOutputType = {
    id: number | null
    titleFR: string | null
    titleEN: string | null
    slug: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DishServiceMaxAggregateOutputType = {
    id: number | null
    titleFR: string | null
    titleEN: string | null
    slug: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DishServiceCountAggregateOutputType = {
    id: number
    titleFR: number
    titleEN: number
    slug: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type DishServiceAvgAggregateInputType = {
    id?: true
  }

  export type DishServiceSumAggregateInputType = {
    id?: true
  }

  export type DishServiceMinAggregateInputType = {
    id?: true
    titleFR?: true
    titleEN?: true
    slug?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DishServiceMaxAggregateInputType = {
    id?: true
    titleFR?: true
    titleEN?: true
    slug?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DishServiceCountAggregateInputType = {
    id?: true
    titleFR?: true
    titleEN?: true
    slug?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DishServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishService to aggregate.
     */
    where?: DishServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishServices to fetch.
     */
    orderBy?: DishServiceOrderByWithRelationInput | DishServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DishServices
    **/
    _count?: true | DishServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishServiceMaxAggregateInputType
  }

  export type GetDishServiceAggregateType<T extends DishServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateDishService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDishService[P]>
      : GetScalarType<T[P], AggregateDishService[P]>
  }




  export type DishServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishServiceWhereInput
    orderBy?: DishServiceOrderByWithAggregationInput | DishServiceOrderByWithAggregationInput[]
    by: DishServiceScalarFieldEnum[] | DishServiceScalarFieldEnum
    having?: DishServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishServiceCountAggregateInputType | true
    _avg?: DishServiceAvgAggregateInputType
    _sum?: DishServiceSumAggregateInputType
    _min?: DishServiceMinAggregateInputType
    _max?: DishServiceMaxAggregateInputType
  }

  export type DishServiceGroupByOutputType = {
    id: number
    titleFR: string
    titleEN: string
    slug: string
    updatedAt: Date
    createdAt: Date
    _count: DishServiceCountAggregateOutputType | null
    _avg: DishServiceAvgAggregateOutputType | null
    _sum: DishServiceSumAggregateOutputType | null
    _min: DishServiceMinAggregateOutputType | null
    _max: DishServiceMaxAggregateOutputType | null
  }

  type GetDishServiceGroupByPayload<T extends DishServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishServiceGroupByOutputType[P]>
            : GetScalarType<T[P], DishServiceGroupByOutputType[P]>
        }
      >
    >


  export type DishServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleFR?: boolean
    titleEN?: boolean
    slug?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    dishs?: boolean | DishService$dishsArgs<ExtArgs>
    pictures?: boolean | DishService$picturesArgs<ExtArgs>
    extras?: boolean | DishService$extrasArgs<ExtArgs>
    _count?: boolean | DishServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishService"]>

  export type DishServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleFR?: boolean
    titleEN?: boolean
    slug?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dishService"]>

  export type DishServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleFR?: boolean
    titleEN?: boolean
    slug?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dishService"]>

  export type DishServiceSelectScalar = {
    id?: boolean
    titleFR?: boolean
    titleEN?: boolean
    slug?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type DishServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titleFR" | "titleEN" | "slug" | "updatedAt" | "createdAt", ExtArgs["result"]["dishService"]>
  export type DishServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishs?: boolean | DishService$dishsArgs<ExtArgs>
    pictures?: boolean | DishService$picturesArgs<ExtArgs>
    extras?: boolean | DishService$extrasArgs<ExtArgs>
    _count?: boolean | DishServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DishServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DishServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DishServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DishService"
    objects: {
      dishs: Prisma.$DishPayload<ExtArgs>[]
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      extras: Prisma.$ExtraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titleFR: string
      titleEN: string
      slug: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["dishService"]>
    composites: {}
  }

  type DishServiceGetPayload<S extends boolean | null | undefined | DishServiceDefaultArgs> = $Result.GetResult<Prisma.$DishServicePayload, S>

  type DishServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishServiceCountAggregateInputType | true
    }

  export interface DishServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DishService'], meta: { name: 'DishService' } }
    /**
     * Find zero or one DishService that matches the filter.
     * @param {DishServiceFindUniqueArgs} args - Arguments to find a DishService
     * @example
     * // Get one DishService
     * const dishService = await prisma.dishService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishServiceFindUniqueArgs>(args: SelectSubset<T, DishServiceFindUniqueArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DishService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishServiceFindUniqueOrThrowArgs} args - Arguments to find a DishService
     * @example
     * // Get one DishService
     * const dishService = await prisma.dishService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, DishServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceFindFirstArgs} args - Arguments to find a DishService
     * @example
     * // Get one DishService
     * const dishService = await prisma.dishService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishServiceFindFirstArgs>(args?: SelectSubset<T, DishServiceFindFirstArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceFindFirstOrThrowArgs} args - Arguments to find a DishService
     * @example
     * // Get one DishService
     * const dishService = await prisma.dishService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, DishServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DishServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DishServices
     * const dishServices = await prisma.dishService.findMany()
     * 
     * // Get first 10 DishServices
     * const dishServices = await prisma.dishService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishServiceWithIdOnly = await prisma.dishService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishServiceFindManyArgs>(args?: SelectSubset<T, DishServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DishService.
     * @param {DishServiceCreateArgs} args - Arguments to create a DishService.
     * @example
     * // Create one DishService
     * const DishService = await prisma.dishService.create({
     *   data: {
     *     // ... data to create a DishService
     *   }
     * })
     * 
     */
    create<T extends DishServiceCreateArgs>(args: SelectSubset<T, DishServiceCreateArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DishServices.
     * @param {DishServiceCreateManyArgs} args - Arguments to create many DishServices.
     * @example
     * // Create many DishServices
     * const dishService = await prisma.dishService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishServiceCreateManyArgs>(args?: SelectSubset<T, DishServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DishServices and returns the data saved in the database.
     * @param {DishServiceCreateManyAndReturnArgs} args - Arguments to create many DishServices.
     * @example
     * // Create many DishServices
     * const dishService = await prisma.dishService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DishServices and only return the `id`
     * const dishServiceWithIdOnly = await prisma.dishService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, DishServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DishService.
     * @param {DishServiceDeleteArgs} args - Arguments to delete one DishService.
     * @example
     * // Delete one DishService
     * const DishService = await prisma.dishService.delete({
     *   where: {
     *     // ... filter to delete one DishService
     *   }
     * })
     * 
     */
    delete<T extends DishServiceDeleteArgs>(args: SelectSubset<T, DishServiceDeleteArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DishService.
     * @param {DishServiceUpdateArgs} args - Arguments to update one DishService.
     * @example
     * // Update one DishService
     * const dishService = await prisma.dishService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishServiceUpdateArgs>(args: SelectSubset<T, DishServiceUpdateArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DishServices.
     * @param {DishServiceDeleteManyArgs} args - Arguments to filter DishServices to delete.
     * @example
     * // Delete a few DishServices
     * const { count } = await prisma.dishService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishServiceDeleteManyArgs>(args?: SelectSubset<T, DishServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DishServices
     * const dishService = await prisma.dishService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishServiceUpdateManyArgs>(args: SelectSubset<T, DishServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishServices and returns the data updated in the database.
     * @param {DishServiceUpdateManyAndReturnArgs} args - Arguments to update many DishServices.
     * @example
     * // Update many DishServices
     * const dishService = await prisma.dishService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DishServices and only return the `id`
     * const dishServiceWithIdOnly = await prisma.dishService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, DishServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DishService.
     * @param {DishServiceUpsertArgs} args - Arguments to update or create a DishService.
     * @example
     * // Update or create a DishService
     * const dishService = await prisma.dishService.upsert({
     *   create: {
     *     // ... data to create a DishService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DishService we want to update
     *   }
     * })
     */
    upsert<T extends DishServiceUpsertArgs>(args: SelectSubset<T, DishServiceUpsertArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DishServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceCountArgs} args - Arguments to filter DishServices to count.
     * @example
     * // Count the number of DishServices
     * const count = await prisma.dishService.count({
     *   where: {
     *     // ... the filter for the DishServices we want to count
     *   }
     * })
    **/
    count<T extends DishServiceCountArgs>(
      args?: Subset<T, DishServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DishService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DishServiceAggregateArgs>(args: Subset<T, DishServiceAggregateArgs>): Prisma.PrismaPromise<GetDishServiceAggregateType<T>>

    /**
     * Group by DishService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DishServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishServiceGroupByArgs['orderBy'] }
        : { orderBy?: DishServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DishServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DishService model
   */
  readonly fields: DishServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DishService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dishs<T extends DishService$dishsArgs<ExtArgs> = {}>(args?: Subset<T, DishService$dishsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pictures<T extends DishService$picturesArgs<ExtArgs> = {}>(args?: Subset<T, DishService$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    extras<T extends DishService$extrasArgs<ExtArgs> = {}>(args?: Subset<T, DishService$extrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DishService model
   */
  interface DishServiceFieldRefs {
    readonly id: FieldRef<"DishService", 'Int'>
    readonly titleFR: FieldRef<"DishService", 'String'>
    readonly titleEN: FieldRef<"DishService", 'String'>
    readonly slug: FieldRef<"DishService", 'String'>
    readonly updatedAt: FieldRef<"DishService", 'DateTime'>
    readonly createdAt: FieldRef<"DishService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DishService findUnique
   */
  export type DishServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * Filter, which DishService to fetch.
     */
    where: DishServiceWhereUniqueInput
  }

  /**
   * DishService findUniqueOrThrow
   */
  export type DishServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * Filter, which DishService to fetch.
     */
    where: DishServiceWhereUniqueInput
  }

  /**
   * DishService findFirst
   */
  export type DishServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * Filter, which DishService to fetch.
     */
    where?: DishServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishServices to fetch.
     */
    orderBy?: DishServiceOrderByWithRelationInput | DishServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishServices.
     */
    cursor?: DishServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishServices.
     */
    distinct?: DishServiceScalarFieldEnum | DishServiceScalarFieldEnum[]
  }

  /**
   * DishService findFirstOrThrow
   */
  export type DishServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * Filter, which DishService to fetch.
     */
    where?: DishServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishServices to fetch.
     */
    orderBy?: DishServiceOrderByWithRelationInput | DishServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishServices.
     */
    cursor?: DishServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishServices.
     */
    distinct?: DishServiceScalarFieldEnum | DishServiceScalarFieldEnum[]
  }

  /**
   * DishService findMany
   */
  export type DishServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * Filter, which DishServices to fetch.
     */
    where?: DishServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishServices to fetch.
     */
    orderBy?: DishServiceOrderByWithRelationInput | DishServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DishServices.
     */
    cursor?: DishServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishServices.
     */
    skip?: number
    distinct?: DishServiceScalarFieldEnum | DishServiceScalarFieldEnum[]
  }

  /**
   * DishService create
   */
  export type DishServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a DishService.
     */
    data: XOR<DishServiceCreateInput, DishServiceUncheckedCreateInput>
  }

  /**
   * DishService createMany
   */
  export type DishServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DishServices.
     */
    data: DishServiceCreateManyInput | DishServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishService createManyAndReturn
   */
  export type DishServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * The data used to create many DishServices.
     */
    data: DishServiceCreateManyInput | DishServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishService update
   */
  export type DishServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a DishService.
     */
    data: XOR<DishServiceUpdateInput, DishServiceUncheckedUpdateInput>
    /**
     * Choose, which DishService to update.
     */
    where: DishServiceWhereUniqueInput
  }

  /**
   * DishService updateMany
   */
  export type DishServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DishServices.
     */
    data: XOR<DishServiceUpdateManyMutationInput, DishServiceUncheckedUpdateManyInput>
    /**
     * Filter which DishServices to update
     */
    where?: DishServiceWhereInput
    /**
     * Limit how many DishServices to update.
     */
    limit?: number
  }

  /**
   * DishService updateManyAndReturn
   */
  export type DishServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * The data used to update DishServices.
     */
    data: XOR<DishServiceUpdateManyMutationInput, DishServiceUncheckedUpdateManyInput>
    /**
     * Filter which DishServices to update
     */
    where?: DishServiceWhereInput
    /**
     * Limit how many DishServices to update.
     */
    limit?: number
  }

  /**
   * DishService upsert
   */
  export type DishServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the DishService to update in case it exists.
     */
    where: DishServiceWhereUniqueInput
    /**
     * In case the DishService found by the `where` argument doesn't exist, create a new DishService with this data.
     */
    create: XOR<DishServiceCreateInput, DishServiceUncheckedCreateInput>
    /**
     * In case the DishService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishServiceUpdateInput, DishServiceUncheckedUpdateInput>
  }

  /**
   * DishService delete
   */
  export type DishServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    /**
     * Filter which DishService to delete.
     */
    where: DishServiceWhereUniqueInput
  }

  /**
   * DishService deleteMany
   */
  export type DishServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishServices to delete
     */
    where?: DishServiceWhereInput
    /**
     * Limit how many DishServices to delete.
     */
    limit?: number
  }

  /**
   * DishService.dishs
   */
  export type DishService$dishsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    where?: DishWhereInput
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    cursor?: DishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * DishService.pictures
   */
  export type DishService$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * DishService.extras
   */
  export type DishService$extrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    where?: ExtraWhereInput
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    cursor?: ExtraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * DishService without action
   */
  export type DishServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
  }


  /**
   * Model Dish
   */

  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishAvgAggregateOutputType = {
    id: number | null
    price: number | null
    dishServiceId: number | null
  }

  export type DishSumAggregateOutputType = {
    id: number | null
    price: number | null
    dishServiceId: number | null
  }

  export type DishMinAggregateOutputType = {
    id: number | null
    labelFR: string | null
    labelEN: string | null
    price: number | null
    dishServiceId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DishMaxAggregateOutputType = {
    id: number | null
    labelFR: string | null
    labelEN: string | null
    price: number | null
    dishServiceId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    labelFR: number
    labelEN: number
    price: number
    dishServiceId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type DishAvgAggregateInputType = {
    id?: true
    price?: true
    dishServiceId?: true
  }

  export type DishSumAggregateInputType = {
    id?: true
    price?: true
    dishServiceId?: true
  }

  export type DishMinAggregateInputType = {
    id?: true
    labelFR?: true
    labelEN?: true
    price?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    labelFR?: true
    labelEN?: true
    price?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    labelFR?: true
    labelEN?: true
    price?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dish to aggregate.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
    orderBy?: DishOrderByWithAggregationInput | DishOrderByWithAggregationInput[]
    by: DishScalarFieldEnum[] | DishScalarFieldEnum
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _avg?: DishAvgAggregateInputType
    _sum?: DishSumAggregateInputType
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }

  export type DishGroupByOutputType = {
    id: number
    labelFR: string
    labelEN: string
    price: number
    dishServiceId: number
    updatedAt: Date
    createdAt: Date
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    price?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    price?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    price?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectScalar = {
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    price?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type DishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "labelFR" | "labelEN" | "price" | "dishServiceId" | "updatedAt" | "createdAt", ExtArgs["result"]["dish"]>
  export type DishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }
  export type DishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }
  export type DishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }

  export type $DishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dish"
    objects: {
      DishService: Prisma.$DishServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      labelFR: string
      labelEN: string
      price: number
      dishServiceId: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["dish"]>
    composites: {}
  }

  type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = $Result.GetResult<Prisma.$DishPayload, S>

  type DishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCountAggregateInputType | true
    }

  export interface DishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dish'], meta: { name: 'Dish' } }
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishFindUniqueArgs>(args: SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishFindFirstArgs>(args?: SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishFindManyArgs>(args?: SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
     */
    create<T extends DishCreateArgs>(args: SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dishes.
     * @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCreateManyArgs>(args?: SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
     */
    delete<T extends DishDeleteArgs>(args: SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishUpdateArgs>(args: SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishDeleteManyArgs>(args?: SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishUpdateManyArgs>(args: SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
     */
    upsert<T extends DishUpsertArgs>(args: SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dish model
   */
  readonly fields: DishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DishService<T extends DishServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishServiceDefaultArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dish model
   */
  interface DishFieldRefs {
    readonly id: FieldRef<"Dish", 'Int'>
    readonly labelFR: FieldRef<"Dish", 'String'>
    readonly labelEN: FieldRef<"Dish", 'String'>
    readonly price: FieldRef<"Dish", 'Float'>
    readonly dishServiceId: FieldRef<"Dish", 'Int'>
    readonly updatedAt: FieldRef<"Dish", 'DateTime'>
    readonly createdAt: FieldRef<"Dish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dish findUnique
   */
  export type DishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findFirst
   */
  export type DishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findMany
   */
  export type DishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish create
   */
  export type DishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to create a Dish.
     */
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }

  /**
   * Dish createMany
   */
  export type DishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish createManyAndReturn
   */
  export type DishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish update
   */
  export type DishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to update a Dish.
     */
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish updateManyAndReturn
   */
  export type DishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish upsert
   */
  export type DishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The filter to search for the Dish to update in case it exists.
     */
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     */
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }

  /**
   * Dish delete
   */
  export type DishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter which Dish to delete.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dish without action
   */
  export type DishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
  }


  /**
   * Model Extra
   */

  export type AggregateExtra = {
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  export type ExtraAvgAggregateOutputType = {
    id: number | null
    dishServiceId: number | null
  }

  export type ExtraSumAggregateOutputType = {
    id: number | null
    dishServiceId: number | null
  }

  export type ExtraMinAggregateOutputType = {
    id: number | null
    labelFR: string | null
    labelEN: string | null
    dishServiceId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ExtraMaxAggregateOutputType = {
    id: number | null
    labelFR: string | null
    labelEN: string | null
    dishServiceId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ExtraCountAggregateOutputType = {
    id: number
    labelFR: number
    labelEN: number
    dishServiceId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ExtraAvgAggregateInputType = {
    id?: true
    dishServiceId?: true
  }

  export type ExtraSumAggregateInputType = {
    id?: true
    dishServiceId?: true
  }

  export type ExtraMinAggregateInputType = {
    id?: true
    labelFR?: true
    labelEN?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ExtraMaxAggregateInputType = {
    id?: true
    labelFR?: true
    labelEN?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ExtraCountAggregateInputType = {
    id?: true
    labelFR?: true
    labelEN?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ExtraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extra to aggregate.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extras
    **/
    _count?: true | ExtraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtraMaxAggregateInputType
  }

  export type GetExtraAggregateType<T extends ExtraAggregateArgs> = {
        [P in keyof T & keyof AggregateExtra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtra[P]>
      : GetScalarType<T[P], AggregateExtra[P]>
  }




  export type ExtraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtraWhereInput
    orderBy?: ExtraOrderByWithAggregationInput | ExtraOrderByWithAggregationInput[]
    by: ExtraScalarFieldEnum[] | ExtraScalarFieldEnum
    having?: ExtraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtraCountAggregateInputType | true
    _avg?: ExtraAvgAggregateInputType
    _sum?: ExtraSumAggregateInputType
    _min?: ExtraMinAggregateInputType
    _max?: ExtraMaxAggregateInputType
  }

  export type ExtraGroupByOutputType = {
    id: number
    labelFR: string
    labelEN: string
    dishServiceId: number
    updatedAt: Date
    createdAt: Date
    _count: ExtraCountAggregateOutputType | null
    _avg: ExtraAvgAggregateOutputType | null
    _sum: ExtraSumAggregateOutputType | null
    _min: ExtraMinAggregateOutputType | null
    _max: ExtraMaxAggregateOutputType | null
  }

  type GetExtraGroupByPayload<T extends ExtraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtraGroupByOutputType[P]>
            : GetScalarType<T[P], ExtraGroupByOutputType[P]>
        }
      >
    >


  export type ExtraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extra"]>

  export type ExtraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extra"]>

  export type ExtraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extra"]>

  export type ExtraSelectScalar = {
    id?: boolean
    labelFR?: boolean
    labelEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ExtraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "labelFR" | "labelEN" | "dishServiceId" | "updatedAt" | "createdAt", ExtArgs["result"]["extra"]>
  export type ExtraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }
  export type ExtraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }
  export type ExtraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | DishServiceDefaultArgs<ExtArgs>
  }

  export type $ExtraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extra"
    objects: {
      DishService: Prisma.$DishServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      labelFR: string
      labelEN: string
      dishServiceId: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["extra"]>
    composites: {}
  }

  type ExtraGetPayload<S extends boolean | null | undefined | ExtraDefaultArgs> = $Result.GetResult<Prisma.$ExtraPayload, S>

  type ExtraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtraCountAggregateInputType | true
    }

  export interface ExtraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extra'], meta: { name: 'Extra' } }
    /**
     * Find zero or one Extra that matches the filter.
     * @param {ExtraFindUniqueArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtraFindUniqueArgs>(args: SelectSubset<T, ExtraFindUniqueArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtraFindUniqueOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtraFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindFirstArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtraFindFirstArgs>(args?: SelectSubset<T, ExtraFindFirstArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindFirstOrThrowArgs} args - Arguments to find a Extra
     * @example
     * // Get one Extra
     * const extra = await prisma.extra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtraFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extras
     * const extras = await prisma.extra.findMany()
     * 
     * // Get first 10 Extras
     * const extras = await prisma.extra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extraWithIdOnly = await prisma.extra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtraFindManyArgs>(args?: SelectSubset<T, ExtraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extra.
     * @param {ExtraCreateArgs} args - Arguments to create a Extra.
     * @example
     * // Create one Extra
     * const Extra = await prisma.extra.create({
     *   data: {
     *     // ... data to create a Extra
     *   }
     * })
     * 
     */
    create<T extends ExtraCreateArgs>(args: SelectSubset<T, ExtraCreateArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extras.
     * @param {ExtraCreateManyArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extra = await prisma.extra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtraCreateManyArgs>(args?: SelectSubset<T, ExtraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Extras and returns the data saved in the database.
     * @param {ExtraCreateManyAndReturnArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extra = await prisma.extra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Extras and only return the `id`
     * const extraWithIdOnly = await prisma.extra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExtraCreateManyAndReturnArgs>(args?: SelectSubset<T, ExtraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Extra.
     * @param {ExtraDeleteArgs} args - Arguments to delete one Extra.
     * @example
     * // Delete one Extra
     * const Extra = await prisma.extra.delete({
     *   where: {
     *     // ... filter to delete one Extra
     *   }
     * })
     * 
     */
    delete<T extends ExtraDeleteArgs>(args: SelectSubset<T, ExtraDeleteArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extra.
     * @param {ExtraUpdateArgs} args - Arguments to update one Extra.
     * @example
     * // Update one Extra
     * const extra = await prisma.extra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtraUpdateArgs>(args: SelectSubset<T, ExtraUpdateArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extras.
     * @param {ExtraDeleteManyArgs} args - Arguments to filter Extras to delete.
     * @example
     * // Delete a few Extras
     * const { count } = await prisma.extra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtraDeleteManyArgs>(args?: SelectSubset<T, ExtraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extras
     * const extra = await prisma.extra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtraUpdateManyArgs>(args: SelectSubset<T, ExtraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras and returns the data updated in the database.
     * @param {ExtraUpdateManyAndReturnArgs} args - Arguments to update many Extras.
     * @example
     * // Update many Extras
     * const extra = await prisma.extra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Extras and only return the `id`
     * const extraWithIdOnly = await prisma.extra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExtraUpdateManyAndReturnArgs>(args: SelectSubset<T, ExtraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Extra.
     * @param {ExtraUpsertArgs} args - Arguments to update or create a Extra.
     * @example
     * // Update or create a Extra
     * const extra = await prisma.extra.upsert({
     *   create: {
     *     // ... data to create a Extra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extra we want to update
     *   }
     * })
     */
    upsert<T extends ExtraUpsertArgs>(args: SelectSubset<T, ExtraUpsertArgs<ExtArgs>>): Prisma__ExtraClient<$Result.GetResult<Prisma.$ExtraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraCountArgs} args - Arguments to filter Extras to count.
     * @example
     * // Count the number of Extras
     * const count = await prisma.extra.count({
     *   where: {
     *     // ... the filter for the Extras we want to count
     *   }
     * })
    **/
    count<T extends ExtraCountArgs>(
      args?: Subset<T, ExtraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExtraAggregateArgs>(args: Subset<T, ExtraAggregateArgs>): Prisma.PrismaPromise<GetExtraAggregateType<T>>

    /**
     * Group by Extra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExtraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtraGroupByArgs['orderBy'] }
        : { orderBy?: ExtraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExtraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extra model
   */
  readonly fields: ExtraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DishService<T extends DishServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishServiceDefaultArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Extra model
   */
  interface ExtraFieldRefs {
    readonly id: FieldRef<"Extra", 'Int'>
    readonly labelFR: FieldRef<"Extra", 'String'>
    readonly labelEN: FieldRef<"Extra", 'String'>
    readonly dishServiceId: FieldRef<"Extra", 'Int'>
    readonly updatedAt: FieldRef<"Extra", 'DateTime'>
    readonly createdAt: FieldRef<"Extra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Extra findUnique
   */
  export type ExtraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra findUniqueOrThrow
   */
  export type ExtraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra findFirst
   */
  export type ExtraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra findFirstOrThrow
   */
  export type ExtraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extra to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extras.
     */
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra findMany
   */
  export type ExtraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter, which Extras to fetch.
     */
    where?: ExtraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extras to fetch.
     */
    orderBy?: ExtraOrderByWithRelationInput | ExtraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extras.
     */
    cursor?: ExtraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extras.
     */
    skip?: number
    distinct?: ExtraScalarFieldEnum | ExtraScalarFieldEnum[]
  }

  /**
   * Extra create
   */
  export type ExtraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * The data needed to create a Extra.
     */
    data: XOR<ExtraCreateInput, ExtraUncheckedCreateInput>
  }

  /**
   * Extra createMany
   */
  export type ExtraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extras.
     */
    data: ExtraCreateManyInput | ExtraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extra createManyAndReturn
   */
  export type ExtraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * The data used to create many Extras.
     */
    data: ExtraCreateManyInput | ExtraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Extra update
   */
  export type ExtraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * The data needed to update a Extra.
     */
    data: XOR<ExtraUpdateInput, ExtraUncheckedUpdateInput>
    /**
     * Choose, which Extra to update.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra updateMany
   */
  export type ExtraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extras.
     */
    data: XOR<ExtraUpdateManyMutationInput, ExtraUncheckedUpdateManyInput>
    /**
     * Filter which Extras to update
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to update.
     */
    limit?: number
  }

  /**
   * Extra updateManyAndReturn
   */
  export type ExtraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * The data used to update Extras.
     */
    data: XOR<ExtraUpdateManyMutationInput, ExtraUncheckedUpdateManyInput>
    /**
     * Filter which Extras to update
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Extra upsert
   */
  export type ExtraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * The filter to search for the Extra to update in case it exists.
     */
    where: ExtraWhereUniqueInput
    /**
     * In case the Extra found by the `where` argument doesn't exist, create a new Extra with this data.
     */
    create: XOR<ExtraCreateInput, ExtraUncheckedCreateInput>
    /**
     * In case the Extra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtraUpdateInput, ExtraUncheckedUpdateInput>
  }

  /**
   * Extra delete
   */
  export type ExtraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
    /**
     * Filter which Extra to delete.
     */
    where: ExtraWhereUniqueInput
  }

  /**
   * Extra deleteMany
   */
  export type ExtraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extras to delete
     */
    where?: ExtraWhereInput
    /**
     * Limit how many Extras to delete.
     */
    limit?: number
  }

  /**
   * Extra without action
   */
  export type ExtraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extra
     */
    select?: ExtraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extra
     */
    omit?: ExtraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtraInclude<ExtArgs> | null
  }


  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureAvgAggregateOutputType = {
    id: number | null
    dishServiceId: number | null
  }

  export type PictureSumAggregateOutputType = {
    id: number | null
    dishServiceId: number | null
  }

  export type PictureMinAggregateOutputType = {
    id: number | null
    pictureUrl: string | null
    descriptionFR: string | null
    descriptionEN: string | null
    dishServiceId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PictureMaxAggregateOutputType = {
    id: number | null
    pictureUrl: string | null
    descriptionFR: string | null
    descriptionEN: string | null
    dishServiceId: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    pictureUrl: number
    descriptionFR: number
    descriptionEN: number
    dishServiceId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    id?: true
    dishServiceId?: true
  }

  export type PictureSumAggregateInputType = {
    id?: true
    dishServiceId?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    pictureUrl?: true
    descriptionFR?: true
    descriptionEN?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    pictureUrl?: true
    descriptionFR?: true
    descriptionEN?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    pictureUrl?: true
    descriptionFR?: true
    descriptionEN?: true
    dishServiceId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _avg?: PictureAvgAggregateInputType
    _sum?: PictureSumAggregateInputType
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: number
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    dishServiceId: number | null
    updatedAt: Date
    createdAt: Date
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pictureUrl?: boolean
    descriptionFR?: boolean
    descriptionEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | Picture$DishServiceArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pictureUrl?: boolean
    descriptionFR?: boolean
    descriptionEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | Picture$DishServiceArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pictureUrl?: boolean
    descriptionFR?: boolean
    descriptionEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    DishService?: boolean | Picture$DishServiceArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    pictureUrl?: boolean
    descriptionFR?: boolean
    descriptionEN?: boolean
    dishServiceId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type PictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pictureUrl" | "descriptionFR" | "descriptionEN" | "dishServiceId" | "updatedAt" | "createdAt", ExtArgs["result"]["picture"]>
  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | Picture$DishServiceArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | Picture$DishServiceArgs<ExtArgs>
  }
  export type PictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DishService?: boolean | Picture$DishServiceArgs<ExtArgs>
  }

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      DishService: Prisma.$DishServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pictureUrl: string
      descriptionFR: string
      descriptionEN: string
      dishServiceId: number | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
     */
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureCreateManyArgs>(args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
     */
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureDeleteManyArgs>(args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureUpdateManyArgs>(args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures and returns the data updated in the database.
     * @param {PictureUpdateManyAndReturnArgs} args - Arguments to update many Pictures.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PictureUpdateManyAndReturnArgs>(args: SelectSubset<T, PictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DishService<T extends Picture$DishServiceArgs<ExtArgs> = {}>(args?: Subset<T, Picture$DishServiceArgs<ExtArgs>>): Prisma__DishServiceClient<$Result.GetResult<Prisma.$DishServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Picture model
   */
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'Int'>
    readonly pictureUrl: FieldRef<"Picture", 'String'>
    readonly descriptionFR: FieldRef<"Picture", 'String'>
    readonly descriptionEN: FieldRef<"Picture", 'String'>
    readonly dishServiceId: FieldRef<"Picture", 'Int'>
    readonly updatedAt: FieldRef<"Picture", 'DateTime'>
    readonly createdAt: FieldRef<"Picture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Picture updateManyAndReturn
   */
  export type PictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number
  }

  /**
   * Picture.DishService
   */
  export type Picture$DishServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishService
     */
    select?: DishServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishService
     */
    omit?: DishServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishServiceInclude<ExtArgs> | null
    where?: DishServiceWhereInput
  }

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    updatedAt: Date
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "updatedAt" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DishServiceScalarFieldEnum: {
    id: 'id',
    titleFR: 'titleFR',
    titleEN: 'titleEN',
    slug: 'slug',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type DishServiceScalarFieldEnum = (typeof DishServiceScalarFieldEnum)[keyof typeof DishServiceScalarFieldEnum]


  export const DishScalarFieldEnum: {
    id: 'id',
    labelFR: 'labelFR',
    labelEN: 'labelEN',
    price: 'price',
    dishServiceId: 'dishServiceId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const ExtraScalarFieldEnum: {
    id: 'id',
    labelFR: 'labelFR',
    labelEN: 'labelEN',
    dishServiceId: 'dishServiceId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ExtraScalarFieldEnum = (typeof ExtraScalarFieldEnum)[keyof typeof ExtraScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    pictureUrl: 'pictureUrl',
    descriptionFR: 'descriptionFR',
    descriptionEN: 'descriptionEN',
    dishServiceId: 'dishServiceId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DishServiceWhereInput = {
    AND?: DishServiceWhereInput | DishServiceWhereInput[]
    OR?: DishServiceWhereInput[]
    NOT?: DishServiceWhereInput | DishServiceWhereInput[]
    id?: IntFilter<"DishService"> | number
    titleFR?: StringFilter<"DishService"> | string
    titleEN?: StringFilter<"DishService"> | string
    slug?: StringFilter<"DishService"> | string
    updatedAt?: DateTimeFilter<"DishService"> | Date | string
    createdAt?: DateTimeFilter<"DishService"> | Date | string
    dishs?: DishListRelationFilter
    pictures?: PictureListRelationFilter
    extras?: ExtraListRelationFilter
  }

  export type DishServiceOrderByWithRelationInput = {
    id?: SortOrder
    titleFR?: SortOrder
    titleEN?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    dishs?: DishOrderByRelationAggregateInput
    pictures?: PictureOrderByRelationAggregateInput
    extras?: ExtraOrderByRelationAggregateInput
  }

  export type DishServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DishServiceWhereInput | DishServiceWhereInput[]
    OR?: DishServiceWhereInput[]
    NOT?: DishServiceWhereInput | DishServiceWhereInput[]
    titleFR?: StringFilter<"DishService"> | string
    titleEN?: StringFilter<"DishService"> | string
    slug?: StringFilter<"DishService"> | string
    updatedAt?: DateTimeFilter<"DishService"> | Date | string
    createdAt?: DateTimeFilter<"DishService"> | Date | string
    dishs?: DishListRelationFilter
    pictures?: PictureListRelationFilter
    extras?: ExtraListRelationFilter
  }, "id">

  export type DishServiceOrderByWithAggregationInput = {
    id?: SortOrder
    titleFR?: SortOrder
    titleEN?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: DishServiceCountOrderByAggregateInput
    _avg?: DishServiceAvgOrderByAggregateInput
    _max?: DishServiceMaxOrderByAggregateInput
    _min?: DishServiceMinOrderByAggregateInput
    _sum?: DishServiceSumOrderByAggregateInput
  }

  export type DishServiceScalarWhereWithAggregatesInput = {
    AND?: DishServiceScalarWhereWithAggregatesInput | DishServiceScalarWhereWithAggregatesInput[]
    OR?: DishServiceScalarWhereWithAggregatesInput[]
    NOT?: DishServiceScalarWhereWithAggregatesInput | DishServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DishService"> | number
    titleFR?: StringWithAggregatesFilter<"DishService"> | string
    titleEN?: StringWithAggregatesFilter<"DishService"> | string
    slug?: StringWithAggregatesFilter<"DishService"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"DishService"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DishService"> | Date | string
  }

  export type DishWhereInput = {
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    id?: IntFilter<"Dish"> | number
    labelFR?: StringFilter<"Dish"> | string
    labelEN?: StringFilter<"Dish"> | string
    price?: FloatFilter<"Dish"> | number
    dishServiceId?: IntFilter<"Dish"> | number
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    DishService?: XOR<DishServiceScalarRelationFilter, DishServiceWhereInput>
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    DishService?: DishServiceOrderByWithRelationInput
  }

  export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    labelFR?: string
    labelEN?: string
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    price?: FloatFilter<"Dish"> | number
    dishServiceId?: IntFilter<"Dish"> | number
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    DishService?: XOR<DishServiceScalarRelationFilter, DishServiceWhereInput>
  }, "id" | "labelFR" | "labelEN">

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: DishCountOrderByAggregateInput
    _avg?: DishAvgOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
    _sum?: DishSumOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    OR?: DishScalarWhereWithAggregatesInput[]
    NOT?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dish"> | number
    labelFR?: StringWithAggregatesFilter<"Dish"> | string
    labelEN?: StringWithAggregatesFilter<"Dish"> | string
    price?: FloatWithAggregatesFilter<"Dish"> | number
    dishServiceId?: IntWithAggregatesFilter<"Dish"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
  }

  export type ExtraWhereInput = {
    AND?: ExtraWhereInput | ExtraWhereInput[]
    OR?: ExtraWhereInput[]
    NOT?: ExtraWhereInput | ExtraWhereInput[]
    id?: IntFilter<"Extra"> | number
    labelFR?: StringFilter<"Extra"> | string
    labelEN?: StringFilter<"Extra"> | string
    dishServiceId?: IntFilter<"Extra"> | number
    updatedAt?: DateTimeFilter<"Extra"> | Date | string
    createdAt?: DateTimeFilter<"Extra"> | Date | string
    DishService?: XOR<DishServiceScalarRelationFilter, DishServiceWhereInput>
  }

  export type ExtraOrderByWithRelationInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    DishService?: DishServiceOrderByWithRelationInput
  }

  export type ExtraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    labelFR?: string
    labelEN?: string
    AND?: ExtraWhereInput | ExtraWhereInput[]
    OR?: ExtraWhereInput[]
    NOT?: ExtraWhereInput | ExtraWhereInput[]
    dishServiceId?: IntFilter<"Extra"> | number
    updatedAt?: DateTimeFilter<"Extra"> | Date | string
    createdAt?: DateTimeFilter<"Extra"> | Date | string
    DishService?: XOR<DishServiceScalarRelationFilter, DishServiceWhereInput>
  }, "id" | "labelFR" | "labelEN">

  export type ExtraOrderByWithAggregationInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ExtraCountOrderByAggregateInput
    _avg?: ExtraAvgOrderByAggregateInput
    _max?: ExtraMaxOrderByAggregateInput
    _min?: ExtraMinOrderByAggregateInput
    _sum?: ExtraSumOrderByAggregateInput
  }

  export type ExtraScalarWhereWithAggregatesInput = {
    AND?: ExtraScalarWhereWithAggregatesInput | ExtraScalarWhereWithAggregatesInput[]
    OR?: ExtraScalarWhereWithAggregatesInput[]
    NOT?: ExtraScalarWhereWithAggregatesInput | ExtraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Extra"> | number
    labelFR?: StringWithAggregatesFilter<"Extra"> | string
    labelEN?: StringWithAggregatesFilter<"Extra"> | string
    dishServiceId?: IntWithAggregatesFilter<"Extra"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Extra"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Extra"> | Date | string
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: IntFilter<"Picture"> | number
    pictureUrl?: StringFilter<"Picture"> | string
    descriptionFR?: StringFilter<"Picture"> | string
    descriptionEN?: StringFilter<"Picture"> | string
    dishServiceId?: IntNullableFilter<"Picture"> | number | null
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    DishService?: XOR<DishServiceNullableScalarRelationFilter, DishServiceWhereInput> | null
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    descriptionFR?: SortOrder
    descriptionEN?: SortOrder
    dishServiceId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    DishService?: DishServiceOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pictureUrl?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    descriptionFR?: StringFilter<"Picture"> | string
    descriptionEN?: StringFilter<"Picture"> | string
    dishServiceId?: IntNullableFilter<"Picture"> | number | null
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    DishService?: XOR<DishServiceNullableScalarRelationFilter, DishServiceWhereInput> | null
  }, "id" | "pictureUrl">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    descriptionFR?: SortOrder
    descriptionEN?: SortOrder
    dishServiceId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _avg?: PictureAvgOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
    _sum?: PictureSumOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Picture"> | number
    pictureUrl?: StringWithAggregatesFilter<"Picture"> | string
    descriptionFR?: StringWithAggregatesFilter<"Picture"> | string
    descriptionEN?: StringWithAggregatesFilter<"Picture"> | string
    dishServiceId?: IntNullableWithAggregatesFilter<"Picture"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DishServiceCreateInput = {
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dishs?: DishCreateNestedManyWithoutDishServiceInput
    pictures?: PictureCreateNestedManyWithoutDishServiceInput
    extras?: ExtraCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceUncheckedCreateInput = {
    id?: number
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dishs?: DishUncheckedCreateNestedManyWithoutDishServiceInput
    pictures?: PictureUncheckedCreateNestedManyWithoutDishServiceInput
    extras?: ExtraUncheckedCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceUpdateInput = {
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishs?: DishUpdateManyWithoutDishServiceNestedInput
    pictures?: PictureUpdateManyWithoutDishServiceNestedInput
    extras?: ExtraUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishs?: DishUncheckedUpdateManyWithoutDishServiceNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutDishServiceNestedInput
    extras?: ExtraUncheckedUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceCreateManyInput = {
    id?: number
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DishServiceUpdateManyMutationInput = {
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateInput = {
    labelFR: string
    labelEN: string
    price: number
    updatedAt?: Date | string
    createdAt?: Date | string
    DishService: DishServiceCreateNestedOneWithoutDishsInput
  }

  export type DishUncheckedCreateInput = {
    id?: number
    labelFR: string
    labelEN: string
    price: number
    dishServiceId: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DishUpdateInput = {
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DishService?: DishServiceUpdateOneRequiredWithoutDishsNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    dishServiceId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateManyInput = {
    id?: number
    labelFR: string
    labelEN: string
    price: number
    dishServiceId: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DishUpdateManyMutationInput = {
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    dishServiceId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtraCreateInput = {
    labelFR: string
    labelEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
    DishService: DishServiceCreateNestedOneWithoutExtrasInput
  }

  export type ExtraUncheckedCreateInput = {
    id?: number
    labelFR: string
    labelEN: string
    dishServiceId: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ExtraUpdateInput = {
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DishService?: DishServiceUpdateOneRequiredWithoutExtrasNestedInput
  }

  export type ExtraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    dishServiceId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtraCreateManyInput = {
    id?: number
    labelFR: string
    labelEN: string
    dishServiceId: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ExtraUpdateManyMutationInput = {
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    dishServiceId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateInput = {
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
    DishService?: DishServiceCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    id?: number
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    dishServiceId?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PictureUpdateInput = {
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DishService?: DishServiceUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    dishServiceId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateManyInput = {
    id?: number
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    dishServiceId?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PictureUpdateManyMutationInput = {
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    dishServiceId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DishListRelationFilter = {
    every?: DishWhereInput
    some?: DishWhereInput
    none?: DishWhereInput
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type ExtraListRelationFilter = {
    every?: ExtraWhereInput
    some?: ExtraWhereInput
    none?: ExtraWhereInput
  }

  export type DishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExtraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DishServiceCountOrderByAggregateInput = {
    id?: SortOrder
    titleFR?: SortOrder
    titleEN?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DishServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DishServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    titleFR?: SortOrder
    titleEN?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DishServiceMinOrderByAggregateInput = {
    id?: SortOrder
    titleFR?: SortOrder
    titleEN?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DishServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DishServiceScalarRelationFilter = {
    is?: DishServiceWhereInput
    isNot?: DishServiceWhereInput
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DishAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DishSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    dishServiceId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExtraCountOrderByAggregateInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExtraAvgOrderByAggregateInput = {
    id?: SortOrder
    dishServiceId?: SortOrder
  }

  export type ExtraMaxOrderByAggregateInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExtraMinOrderByAggregateInput = {
    id?: SortOrder
    labelFR?: SortOrder
    labelEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExtraSumOrderByAggregateInput = {
    id?: SortOrder
    dishServiceId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DishServiceNullableScalarRelationFilter = {
    is?: DishServiceWhereInput | null
    isNot?: DishServiceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    descriptionFR?: SortOrder
    descriptionEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PictureAvgOrderByAggregateInput = {
    id?: SortOrder
    dishServiceId?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    descriptionFR?: SortOrder
    descriptionEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    pictureUrl?: SortOrder
    descriptionFR?: SortOrder
    descriptionEN?: SortOrder
    dishServiceId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PictureSumOrderByAggregateInput = {
    id?: SortOrder
    dishServiceId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DishCreateNestedManyWithoutDishServiceInput = {
    create?: XOR<DishCreateWithoutDishServiceInput, DishUncheckedCreateWithoutDishServiceInput> | DishCreateWithoutDishServiceInput[] | DishUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: DishCreateOrConnectWithoutDishServiceInput | DishCreateOrConnectWithoutDishServiceInput[]
    createMany?: DishCreateManyDishServiceInputEnvelope
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
  }

  export type PictureCreateNestedManyWithoutDishServiceInput = {
    create?: XOR<PictureCreateWithoutDishServiceInput, PictureUncheckedCreateWithoutDishServiceInput> | PictureCreateWithoutDishServiceInput[] | PictureUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutDishServiceInput | PictureCreateOrConnectWithoutDishServiceInput[]
    createMany?: PictureCreateManyDishServiceInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type ExtraCreateNestedManyWithoutDishServiceInput = {
    create?: XOR<ExtraCreateWithoutDishServiceInput, ExtraUncheckedCreateWithoutDishServiceInput> | ExtraCreateWithoutDishServiceInput[] | ExtraUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: ExtraCreateOrConnectWithoutDishServiceInput | ExtraCreateOrConnectWithoutDishServiceInput[]
    createMany?: ExtraCreateManyDishServiceInputEnvelope
    connect?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
  }

  export type DishUncheckedCreateNestedManyWithoutDishServiceInput = {
    create?: XOR<DishCreateWithoutDishServiceInput, DishUncheckedCreateWithoutDishServiceInput> | DishCreateWithoutDishServiceInput[] | DishUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: DishCreateOrConnectWithoutDishServiceInput | DishCreateOrConnectWithoutDishServiceInput[]
    createMany?: DishCreateManyDishServiceInputEnvelope
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
  }

  export type PictureUncheckedCreateNestedManyWithoutDishServiceInput = {
    create?: XOR<PictureCreateWithoutDishServiceInput, PictureUncheckedCreateWithoutDishServiceInput> | PictureCreateWithoutDishServiceInput[] | PictureUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutDishServiceInput | PictureCreateOrConnectWithoutDishServiceInput[]
    createMany?: PictureCreateManyDishServiceInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type ExtraUncheckedCreateNestedManyWithoutDishServiceInput = {
    create?: XOR<ExtraCreateWithoutDishServiceInput, ExtraUncheckedCreateWithoutDishServiceInput> | ExtraCreateWithoutDishServiceInput[] | ExtraUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: ExtraCreateOrConnectWithoutDishServiceInput | ExtraCreateOrConnectWithoutDishServiceInput[]
    createMany?: ExtraCreateManyDishServiceInputEnvelope
    connect?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DishUpdateManyWithoutDishServiceNestedInput = {
    create?: XOR<DishCreateWithoutDishServiceInput, DishUncheckedCreateWithoutDishServiceInput> | DishCreateWithoutDishServiceInput[] | DishUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: DishCreateOrConnectWithoutDishServiceInput | DishCreateOrConnectWithoutDishServiceInput[]
    upsert?: DishUpsertWithWhereUniqueWithoutDishServiceInput | DishUpsertWithWhereUniqueWithoutDishServiceInput[]
    createMany?: DishCreateManyDishServiceInputEnvelope
    set?: DishWhereUniqueInput | DishWhereUniqueInput[]
    disconnect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    delete?: DishWhereUniqueInput | DishWhereUniqueInput[]
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    update?: DishUpdateWithWhereUniqueWithoutDishServiceInput | DishUpdateWithWhereUniqueWithoutDishServiceInput[]
    updateMany?: DishUpdateManyWithWhereWithoutDishServiceInput | DishUpdateManyWithWhereWithoutDishServiceInput[]
    deleteMany?: DishScalarWhereInput | DishScalarWhereInput[]
  }

  export type PictureUpdateManyWithoutDishServiceNestedInput = {
    create?: XOR<PictureCreateWithoutDishServiceInput, PictureUncheckedCreateWithoutDishServiceInput> | PictureCreateWithoutDishServiceInput[] | PictureUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutDishServiceInput | PictureCreateOrConnectWithoutDishServiceInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutDishServiceInput | PictureUpsertWithWhereUniqueWithoutDishServiceInput[]
    createMany?: PictureCreateManyDishServiceInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutDishServiceInput | PictureUpdateWithWhereUniqueWithoutDishServiceInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutDishServiceInput | PictureUpdateManyWithWhereWithoutDishServiceInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type ExtraUpdateManyWithoutDishServiceNestedInput = {
    create?: XOR<ExtraCreateWithoutDishServiceInput, ExtraUncheckedCreateWithoutDishServiceInput> | ExtraCreateWithoutDishServiceInput[] | ExtraUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: ExtraCreateOrConnectWithoutDishServiceInput | ExtraCreateOrConnectWithoutDishServiceInput[]
    upsert?: ExtraUpsertWithWhereUniqueWithoutDishServiceInput | ExtraUpsertWithWhereUniqueWithoutDishServiceInput[]
    createMany?: ExtraCreateManyDishServiceInputEnvelope
    set?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    disconnect?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    delete?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    connect?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    update?: ExtraUpdateWithWhereUniqueWithoutDishServiceInput | ExtraUpdateWithWhereUniqueWithoutDishServiceInput[]
    updateMany?: ExtraUpdateManyWithWhereWithoutDishServiceInput | ExtraUpdateManyWithWhereWithoutDishServiceInput[]
    deleteMany?: ExtraScalarWhereInput | ExtraScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DishUncheckedUpdateManyWithoutDishServiceNestedInput = {
    create?: XOR<DishCreateWithoutDishServiceInput, DishUncheckedCreateWithoutDishServiceInput> | DishCreateWithoutDishServiceInput[] | DishUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: DishCreateOrConnectWithoutDishServiceInput | DishCreateOrConnectWithoutDishServiceInput[]
    upsert?: DishUpsertWithWhereUniqueWithoutDishServiceInput | DishUpsertWithWhereUniqueWithoutDishServiceInput[]
    createMany?: DishCreateManyDishServiceInputEnvelope
    set?: DishWhereUniqueInput | DishWhereUniqueInput[]
    disconnect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    delete?: DishWhereUniqueInput | DishWhereUniqueInput[]
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    update?: DishUpdateWithWhereUniqueWithoutDishServiceInput | DishUpdateWithWhereUniqueWithoutDishServiceInput[]
    updateMany?: DishUpdateManyWithWhereWithoutDishServiceInput | DishUpdateManyWithWhereWithoutDishServiceInput[]
    deleteMany?: DishScalarWhereInput | DishScalarWhereInput[]
  }

  export type PictureUncheckedUpdateManyWithoutDishServiceNestedInput = {
    create?: XOR<PictureCreateWithoutDishServiceInput, PictureUncheckedCreateWithoutDishServiceInput> | PictureCreateWithoutDishServiceInput[] | PictureUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutDishServiceInput | PictureCreateOrConnectWithoutDishServiceInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutDishServiceInput | PictureUpsertWithWhereUniqueWithoutDishServiceInput[]
    createMany?: PictureCreateManyDishServiceInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutDishServiceInput | PictureUpdateWithWhereUniqueWithoutDishServiceInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutDishServiceInput | PictureUpdateManyWithWhereWithoutDishServiceInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type ExtraUncheckedUpdateManyWithoutDishServiceNestedInput = {
    create?: XOR<ExtraCreateWithoutDishServiceInput, ExtraUncheckedCreateWithoutDishServiceInput> | ExtraCreateWithoutDishServiceInput[] | ExtraUncheckedCreateWithoutDishServiceInput[]
    connectOrCreate?: ExtraCreateOrConnectWithoutDishServiceInput | ExtraCreateOrConnectWithoutDishServiceInput[]
    upsert?: ExtraUpsertWithWhereUniqueWithoutDishServiceInput | ExtraUpsertWithWhereUniqueWithoutDishServiceInput[]
    createMany?: ExtraCreateManyDishServiceInputEnvelope
    set?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    disconnect?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    delete?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    connect?: ExtraWhereUniqueInput | ExtraWhereUniqueInput[]
    update?: ExtraUpdateWithWhereUniqueWithoutDishServiceInput | ExtraUpdateWithWhereUniqueWithoutDishServiceInput[]
    updateMany?: ExtraUpdateManyWithWhereWithoutDishServiceInput | ExtraUpdateManyWithWhereWithoutDishServiceInput[]
    deleteMany?: ExtraScalarWhereInput | ExtraScalarWhereInput[]
  }

  export type DishServiceCreateNestedOneWithoutDishsInput = {
    create?: XOR<DishServiceCreateWithoutDishsInput, DishServiceUncheckedCreateWithoutDishsInput>
    connectOrCreate?: DishServiceCreateOrConnectWithoutDishsInput
    connect?: DishServiceWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DishServiceUpdateOneRequiredWithoutDishsNestedInput = {
    create?: XOR<DishServiceCreateWithoutDishsInput, DishServiceUncheckedCreateWithoutDishsInput>
    connectOrCreate?: DishServiceCreateOrConnectWithoutDishsInput
    upsert?: DishServiceUpsertWithoutDishsInput
    connect?: DishServiceWhereUniqueInput
    update?: XOR<XOR<DishServiceUpdateToOneWithWhereWithoutDishsInput, DishServiceUpdateWithoutDishsInput>, DishServiceUncheckedUpdateWithoutDishsInput>
  }

  export type DishServiceCreateNestedOneWithoutExtrasInput = {
    create?: XOR<DishServiceCreateWithoutExtrasInput, DishServiceUncheckedCreateWithoutExtrasInput>
    connectOrCreate?: DishServiceCreateOrConnectWithoutExtrasInput
    connect?: DishServiceWhereUniqueInput
  }

  export type DishServiceUpdateOneRequiredWithoutExtrasNestedInput = {
    create?: XOR<DishServiceCreateWithoutExtrasInput, DishServiceUncheckedCreateWithoutExtrasInput>
    connectOrCreate?: DishServiceCreateOrConnectWithoutExtrasInput
    upsert?: DishServiceUpsertWithoutExtrasInput
    connect?: DishServiceWhereUniqueInput
    update?: XOR<XOR<DishServiceUpdateToOneWithWhereWithoutExtrasInput, DishServiceUpdateWithoutExtrasInput>, DishServiceUncheckedUpdateWithoutExtrasInput>
  }

  export type DishServiceCreateNestedOneWithoutPicturesInput = {
    create?: XOR<DishServiceCreateWithoutPicturesInput, DishServiceUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: DishServiceCreateOrConnectWithoutPicturesInput
    connect?: DishServiceWhereUniqueInput
  }

  export type DishServiceUpdateOneWithoutPicturesNestedInput = {
    create?: XOR<DishServiceCreateWithoutPicturesInput, DishServiceUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: DishServiceCreateOrConnectWithoutPicturesInput
    upsert?: DishServiceUpsertWithoutPicturesInput
    disconnect?: DishServiceWhereInput | boolean
    delete?: DishServiceWhereInput | boolean
    connect?: DishServiceWhereUniqueInput
    update?: XOR<XOR<DishServiceUpdateToOneWithWhereWithoutPicturesInput, DishServiceUpdateWithoutPicturesInput>, DishServiceUncheckedUpdateWithoutPicturesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DishCreateWithoutDishServiceInput = {
    labelFR: string
    labelEN: string
    price: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DishUncheckedCreateWithoutDishServiceInput = {
    id?: number
    labelFR: string
    labelEN: string
    price: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DishCreateOrConnectWithoutDishServiceInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutDishServiceInput, DishUncheckedCreateWithoutDishServiceInput>
  }

  export type DishCreateManyDishServiceInputEnvelope = {
    data: DishCreateManyDishServiceInput | DishCreateManyDishServiceInput[]
    skipDuplicates?: boolean
  }

  export type PictureCreateWithoutDishServiceInput = {
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PictureUncheckedCreateWithoutDishServiceInput = {
    id?: number
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PictureCreateOrConnectWithoutDishServiceInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutDishServiceInput, PictureUncheckedCreateWithoutDishServiceInput>
  }

  export type PictureCreateManyDishServiceInputEnvelope = {
    data: PictureCreateManyDishServiceInput | PictureCreateManyDishServiceInput[]
    skipDuplicates?: boolean
  }

  export type ExtraCreateWithoutDishServiceInput = {
    labelFR: string
    labelEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ExtraUncheckedCreateWithoutDishServiceInput = {
    id?: number
    labelFR: string
    labelEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ExtraCreateOrConnectWithoutDishServiceInput = {
    where: ExtraWhereUniqueInput
    create: XOR<ExtraCreateWithoutDishServiceInput, ExtraUncheckedCreateWithoutDishServiceInput>
  }

  export type ExtraCreateManyDishServiceInputEnvelope = {
    data: ExtraCreateManyDishServiceInput | ExtraCreateManyDishServiceInput[]
    skipDuplicates?: boolean
  }

  export type DishUpsertWithWhereUniqueWithoutDishServiceInput = {
    where: DishWhereUniqueInput
    update: XOR<DishUpdateWithoutDishServiceInput, DishUncheckedUpdateWithoutDishServiceInput>
    create: XOR<DishCreateWithoutDishServiceInput, DishUncheckedCreateWithoutDishServiceInput>
  }

  export type DishUpdateWithWhereUniqueWithoutDishServiceInput = {
    where: DishWhereUniqueInput
    data: XOR<DishUpdateWithoutDishServiceInput, DishUncheckedUpdateWithoutDishServiceInput>
  }

  export type DishUpdateManyWithWhereWithoutDishServiceInput = {
    where: DishScalarWhereInput
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyWithoutDishServiceInput>
  }

  export type DishScalarWhereInput = {
    AND?: DishScalarWhereInput | DishScalarWhereInput[]
    OR?: DishScalarWhereInput[]
    NOT?: DishScalarWhereInput | DishScalarWhereInput[]
    id?: IntFilter<"Dish"> | number
    labelFR?: StringFilter<"Dish"> | string
    labelEN?: StringFilter<"Dish"> | string
    price?: FloatFilter<"Dish"> | number
    dishServiceId?: IntFilter<"Dish"> | number
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
  }

  export type PictureUpsertWithWhereUniqueWithoutDishServiceInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutDishServiceInput, PictureUncheckedUpdateWithoutDishServiceInput>
    create: XOR<PictureCreateWithoutDishServiceInput, PictureUncheckedCreateWithoutDishServiceInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutDishServiceInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutDishServiceInput, PictureUncheckedUpdateWithoutDishServiceInput>
  }

  export type PictureUpdateManyWithWhereWithoutDishServiceInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutDishServiceInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: IntFilter<"Picture"> | number
    pictureUrl?: StringFilter<"Picture"> | string
    descriptionFR?: StringFilter<"Picture"> | string
    descriptionEN?: StringFilter<"Picture"> | string
    dishServiceId?: IntNullableFilter<"Picture"> | number | null
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    createdAt?: DateTimeFilter<"Picture"> | Date | string
  }

  export type ExtraUpsertWithWhereUniqueWithoutDishServiceInput = {
    where: ExtraWhereUniqueInput
    update: XOR<ExtraUpdateWithoutDishServiceInput, ExtraUncheckedUpdateWithoutDishServiceInput>
    create: XOR<ExtraCreateWithoutDishServiceInput, ExtraUncheckedCreateWithoutDishServiceInput>
  }

  export type ExtraUpdateWithWhereUniqueWithoutDishServiceInput = {
    where: ExtraWhereUniqueInput
    data: XOR<ExtraUpdateWithoutDishServiceInput, ExtraUncheckedUpdateWithoutDishServiceInput>
  }

  export type ExtraUpdateManyWithWhereWithoutDishServiceInput = {
    where: ExtraScalarWhereInput
    data: XOR<ExtraUpdateManyMutationInput, ExtraUncheckedUpdateManyWithoutDishServiceInput>
  }

  export type ExtraScalarWhereInput = {
    AND?: ExtraScalarWhereInput | ExtraScalarWhereInput[]
    OR?: ExtraScalarWhereInput[]
    NOT?: ExtraScalarWhereInput | ExtraScalarWhereInput[]
    id?: IntFilter<"Extra"> | number
    labelFR?: StringFilter<"Extra"> | string
    labelEN?: StringFilter<"Extra"> | string
    dishServiceId?: IntFilter<"Extra"> | number
    updatedAt?: DateTimeFilter<"Extra"> | Date | string
    createdAt?: DateTimeFilter<"Extra"> | Date | string
  }

  export type DishServiceCreateWithoutDishsInput = {
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutDishServiceInput
    extras?: ExtraCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceUncheckedCreateWithoutDishsInput = {
    id?: number
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutDishServiceInput
    extras?: ExtraUncheckedCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceCreateOrConnectWithoutDishsInput = {
    where: DishServiceWhereUniqueInput
    create: XOR<DishServiceCreateWithoutDishsInput, DishServiceUncheckedCreateWithoutDishsInput>
  }

  export type DishServiceUpsertWithoutDishsInput = {
    update: XOR<DishServiceUpdateWithoutDishsInput, DishServiceUncheckedUpdateWithoutDishsInput>
    create: XOR<DishServiceCreateWithoutDishsInput, DishServiceUncheckedCreateWithoutDishsInput>
    where?: DishServiceWhereInput
  }

  export type DishServiceUpdateToOneWithWhereWithoutDishsInput = {
    where?: DishServiceWhereInput
    data: XOR<DishServiceUpdateWithoutDishsInput, DishServiceUncheckedUpdateWithoutDishsInput>
  }

  export type DishServiceUpdateWithoutDishsInput = {
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutDishServiceNestedInput
    extras?: ExtraUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceUncheckedUpdateWithoutDishsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutDishServiceNestedInput
    extras?: ExtraUncheckedUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceCreateWithoutExtrasInput = {
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dishs?: DishCreateNestedManyWithoutDishServiceInput
    pictures?: PictureCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceUncheckedCreateWithoutExtrasInput = {
    id?: number
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dishs?: DishUncheckedCreateNestedManyWithoutDishServiceInput
    pictures?: PictureUncheckedCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceCreateOrConnectWithoutExtrasInput = {
    where: DishServiceWhereUniqueInput
    create: XOR<DishServiceCreateWithoutExtrasInput, DishServiceUncheckedCreateWithoutExtrasInput>
  }

  export type DishServiceUpsertWithoutExtrasInput = {
    update: XOR<DishServiceUpdateWithoutExtrasInput, DishServiceUncheckedUpdateWithoutExtrasInput>
    create: XOR<DishServiceCreateWithoutExtrasInput, DishServiceUncheckedCreateWithoutExtrasInput>
    where?: DishServiceWhereInput
  }

  export type DishServiceUpdateToOneWithWhereWithoutExtrasInput = {
    where?: DishServiceWhereInput
    data: XOR<DishServiceUpdateWithoutExtrasInput, DishServiceUncheckedUpdateWithoutExtrasInput>
  }

  export type DishServiceUpdateWithoutExtrasInput = {
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishs?: DishUpdateManyWithoutDishServiceNestedInput
    pictures?: PictureUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceUncheckedUpdateWithoutExtrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishs?: DishUncheckedUpdateManyWithoutDishServiceNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceCreateWithoutPicturesInput = {
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dishs?: DishCreateNestedManyWithoutDishServiceInput
    extras?: ExtraCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceUncheckedCreateWithoutPicturesInput = {
    id?: number
    titleFR: string
    titleEN: string
    slug: string
    updatedAt?: Date | string
    createdAt?: Date | string
    dishs?: DishUncheckedCreateNestedManyWithoutDishServiceInput
    extras?: ExtraUncheckedCreateNestedManyWithoutDishServiceInput
  }

  export type DishServiceCreateOrConnectWithoutPicturesInput = {
    where: DishServiceWhereUniqueInput
    create: XOR<DishServiceCreateWithoutPicturesInput, DishServiceUncheckedCreateWithoutPicturesInput>
  }

  export type DishServiceUpsertWithoutPicturesInput = {
    update: XOR<DishServiceUpdateWithoutPicturesInput, DishServiceUncheckedUpdateWithoutPicturesInput>
    create: XOR<DishServiceCreateWithoutPicturesInput, DishServiceUncheckedCreateWithoutPicturesInput>
    where?: DishServiceWhereInput
  }

  export type DishServiceUpdateToOneWithWhereWithoutPicturesInput = {
    where?: DishServiceWhereInput
    data: XOR<DishServiceUpdateWithoutPicturesInput, DishServiceUncheckedUpdateWithoutPicturesInput>
  }

  export type DishServiceUpdateWithoutPicturesInput = {
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishs?: DishUpdateManyWithoutDishServiceNestedInput
    extras?: ExtraUpdateManyWithoutDishServiceNestedInput
  }

  export type DishServiceUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleFR?: StringFieldUpdateOperationsInput | string
    titleEN?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishs?: DishUncheckedUpdateManyWithoutDishServiceNestedInput
    extras?: ExtraUncheckedUpdateManyWithoutDishServiceNestedInput
  }

  export type DishCreateManyDishServiceInput = {
    id?: number
    labelFR: string
    labelEN: string
    price: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type PictureCreateManyDishServiceInput = {
    id?: number
    pictureUrl: string
    descriptionFR: string
    descriptionEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ExtraCreateManyDishServiceInput = {
    id?: number
    labelFR: string
    labelEN: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DishUpdateWithoutDishServiceInput = {
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateWithoutDishServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyWithoutDishServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUpdateWithoutDishServiceInput = {
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUncheckedUpdateWithoutDishServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUncheckedUpdateManyWithoutDishServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pictureUrl?: StringFieldUpdateOperationsInput | string
    descriptionFR?: StringFieldUpdateOperationsInput | string
    descriptionEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtraUpdateWithoutDishServiceInput = {
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtraUncheckedUpdateWithoutDishServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtraUncheckedUpdateManyWithoutDishServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelFR?: StringFieldUpdateOperationsInput | string
    labelEN?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}