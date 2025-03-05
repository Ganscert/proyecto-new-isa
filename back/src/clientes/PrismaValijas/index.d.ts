
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
 * Model Valija
 * 
 */
export type Valija = $Result.DefaultSelection<Prisma.$ValijaPayload>
/**
 * Model ValijaUsd
 * 
 */
export type ValijaUsd = $Result.DefaultSelection<Prisma.$ValijaUsdPayload>
/**
 * Model ValijaDop
 * 
 */
export type ValijaDop = $Result.DefaultSelection<Prisma.$ValijaDopPayload>
/**
 * Model ValijaEur
 * 
 */
export type ValijaEur = $Result.DefaultSelection<Prisma.$ValijaEurPayload>
/**
 * Model transaccionesUsd
 * 
 */
export type transaccionesUsd = $Result.DefaultSelection<Prisma.$transaccionesUsdPayload>
/**
 * Model transaccionesDop
 * 
 */
export type transaccionesDop = $Result.DefaultSelection<Prisma.$transaccionesDopPayload>
/**
 * Model transaccionesEur
 * 
 */
export type transaccionesEur = $Result.DefaultSelection<Prisma.$transaccionesEurPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Valijas
 * const valijas = await prisma.valija.findMany()
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
   * // Fetch zero or more Valijas
   * const valijas = await prisma.valija.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.valija`: Exposes CRUD operations for the **Valija** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Valijas
    * const valijas = await prisma.valija.findMany()
    * ```
    */
  get valija(): Prisma.ValijaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valijaUsd`: Exposes CRUD operations for the **ValijaUsd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ValijaUsds
    * const valijaUsds = await prisma.valijaUsd.findMany()
    * ```
    */
  get valijaUsd(): Prisma.ValijaUsdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valijaDop`: Exposes CRUD operations for the **ValijaDop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ValijaDops
    * const valijaDops = await prisma.valijaDop.findMany()
    * ```
    */
  get valijaDop(): Prisma.ValijaDopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valijaEur`: Exposes CRUD operations for the **ValijaEur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ValijaEurs
    * const valijaEurs = await prisma.valijaEur.findMany()
    * ```
    */
  get valijaEur(): Prisma.ValijaEurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaccionesUsd`: Exposes CRUD operations for the **transaccionesUsd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaccionesUsds
    * const transaccionesUsds = await prisma.transaccionesUsd.findMany()
    * ```
    */
  get transaccionesUsd(): Prisma.transaccionesUsdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaccionesDop`: Exposes CRUD operations for the **transaccionesDop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaccionesDops
    * const transaccionesDops = await prisma.transaccionesDop.findMany()
    * ```
    */
  get transaccionesDop(): Prisma.transaccionesDopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaccionesEur`: Exposes CRUD operations for the **transaccionesEur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaccionesEurs
    * const transaccionesEurs = await prisma.transaccionesEur.findMany()
    * ```
    */
  get transaccionesEur(): Prisma.transaccionesEurDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Valija: 'Valija',
    ValijaUsd: 'ValijaUsd',
    ValijaDop: 'ValijaDop',
    ValijaEur: 'ValijaEur',
    transaccionesUsd: 'transaccionesUsd',
    transaccionesDop: 'transaccionesDop',
    transaccionesEur: 'transaccionesEur'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "valija" | "valijaUsd" | "valijaDop" | "valijaEur" | "transaccionesUsd" | "transaccionesDop" | "transaccionesEur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Valija: {
        payload: Prisma.$ValijaPayload<ExtArgs>
        fields: Prisma.ValijaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValijaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValijaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>
          }
          findFirst: {
            args: Prisma.ValijaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValijaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>
          }
          findMany: {
            args: Prisma.ValijaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>[]
          }
          create: {
            args: Prisma.ValijaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>
          }
          createMany: {
            args: Prisma.ValijaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValijaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>[]
          }
          delete: {
            args: Prisma.ValijaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>
          }
          update: {
            args: Prisma.ValijaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>
          }
          deleteMany: {
            args: Prisma.ValijaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValijaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValijaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>[]
          }
          upsert: {
            args: Prisma.ValijaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaPayload>
          }
          aggregate: {
            args: Prisma.ValijaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValija>
          }
          groupBy: {
            args: Prisma.ValijaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValijaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValijaCountArgs<ExtArgs>
            result: $Utils.Optional<ValijaCountAggregateOutputType> | number
          }
        }
      }
      ValijaUsd: {
        payload: Prisma.$ValijaUsdPayload<ExtArgs>
        fields: Prisma.ValijaUsdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValijaUsdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValijaUsdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>
          }
          findFirst: {
            args: Prisma.ValijaUsdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValijaUsdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>
          }
          findMany: {
            args: Prisma.ValijaUsdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>[]
          }
          create: {
            args: Prisma.ValijaUsdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>
          }
          createMany: {
            args: Prisma.ValijaUsdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValijaUsdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>[]
          }
          delete: {
            args: Prisma.ValijaUsdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>
          }
          update: {
            args: Prisma.ValijaUsdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>
          }
          deleteMany: {
            args: Prisma.ValijaUsdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValijaUsdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValijaUsdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>[]
          }
          upsert: {
            args: Prisma.ValijaUsdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaUsdPayload>
          }
          aggregate: {
            args: Prisma.ValijaUsdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValijaUsd>
          }
          groupBy: {
            args: Prisma.ValijaUsdGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValijaUsdGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValijaUsdCountArgs<ExtArgs>
            result: $Utils.Optional<ValijaUsdCountAggregateOutputType> | number
          }
        }
      }
      ValijaDop: {
        payload: Prisma.$ValijaDopPayload<ExtArgs>
        fields: Prisma.ValijaDopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValijaDopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValijaDopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>
          }
          findFirst: {
            args: Prisma.ValijaDopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValijaDopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>
          }
          findMany: {
            args: Prisma.ValijaDopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>[]
          }
          create: {
            args: Prisma.ValijaDopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>
          }
          createMany: {
            args: Prisma.ValijaDopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValijaDopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>[]
          }
          delete: {
            args: Prisma.ValijaDopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>
          }
          update: {
            args: Prisma.ValijaDopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>
          }
          deleteMany: {
            args: Prisma.ValijaDopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValijaDopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValijaDopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>[]
          }
          upsert: {
            args: Prisma.ValijaDopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaDopPayload>
          }
          aggregate: {
            args: Prisma.ValijaDopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValijaDop>
          }
          groupBy: {
            args: Prisma.ValijaDopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValijaDopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValijaDopCountArgs<ExtArgs>
            result: $Utils.Optional<ValijaDopCountAggregateOutputType> | number
          }
        }
      }
      ValijaEur: {
        payload: Prisma.$ValijaEurPayload<ExtArgs>
        fields: Prisma.ValijaEurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValijaEurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValijaEurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>
          }
          findFirst: {
            args: Prisma.ValijaEurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValijaEurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>
          }
          findMany: {
            args: Prisma.ValijaEurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>[]
          }
          create: {
            args: Prisma.ValijaEurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>
          }
          createMany: {
            args: Prisma.ValijaEurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValijaEurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>[]
          }
          delete: {
            args: Prisma.ValijaEurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>
          }
          update: {
            args: Prisma.ValijaEurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>
          }
          deleteMany: {
            args: Prisma.ValijaEurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValijaEurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValijaEurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>[]
          }
          upsert: {
            args: Prisma.ValijaEurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValijaEurPayload>
          }
          aggregate: {
            args: Prisma.ValijaEurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValijaEur>
          }
          groupBy: {
            args: Prisma.ValijaEurGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValijaEurGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValijaEurCountArgs<ExtArgs>
            result: $Utils.Optional<ValijaEurCountAggregateOutputType> | number
          }
        }
      }
      transaccionesUsd: {
        payload: Prisma.$transaccionesUsdPayload<ExtArgs>
        fields: Prisma.transaccionesUsdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaccionesUsdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaccionesUsdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>
          }
          findFirst: {
            args: Prisma.transaccionesUsdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaccionesUsdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>
          }
          findMany: {
            args: Prisma.transaccionesUsdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>[]
          }
          create: {
            args: Prisma.transaccionesUsdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>
          }
          createMany: {
            args: Prisma.transaccionesUsdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaccionesUsdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>[]
          }
          delete: {
            args: Prisma.transaccionesUsdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>
          }
          update: {
            args: Prisma.transaccionesUsdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>
          }
          deleteMany: {
            args: Prisma.transaccionesUsdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaccionesUsdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaccionesUsdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>[]
          }
          upsert: {
            args: Prisma.transaccionesUsdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesUsdPayload>
          }
          aggregate: {
            args: Prisma.TransaccionesUsdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaccionesUsd>
          }
          groupBy: {
            args: Prisma.transaccionesUsdGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaccionesUsdGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaccionesUsdCountArgs<ExtArgs>
            result: $Utils.Optional<TransaccionesUsdCountAggregateOutputType> | number
          }
        }
      }
      transaccionesDop: {
        payload: Prisma.$transaccionesDopPayload<ExtArgs>
        fields: Prisma.transaccionesDopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaccionesDopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaccionesDopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>
          }
          findFirst: {
            args: Prisma.transaccionesDopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaccionesDopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>
          }
          findMany: {
            args: Prisma.transaccionesDopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>[]
          }
          create: {
            args: Prisma.transaccionesDopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>
          }
          createMany: {
            args: Prisma.transaccionesDopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaccionesDopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>[]
          }
          delete: {
            args: Prisma.transaccionesDopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>
          }
          update: {
            args: Prisma.transaccionesDopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>
          }
          deleteMany: {
            args: Prisma.transaccionesDopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaccionesDopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaccionesDopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>[]
          }
          upsert: {
            args: Prisma.transaccionesDopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesDopPayload>
          }
          aggregate: {
            args: Prisma.TransaccionesDopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaccionesDop>
          }
          groupBy: {
            args: Prisma.transaccionesDopGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaccionesDopGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaccionesDopCountArgs<ExtArgs>
            result: $Utils.Optional<TransaccionesDopCountAggregateOutputType> | number
          }
        }
      }
      transaccionesEur: {
        payload: Prisma.$transaccionesEurPayload<ExtArgs>
        fields: Prisma.transaccionesEurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaccionesEurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaccionesEurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>
          }
          findFirst: {
            args: Prisma.transaccionesEurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaccionesEurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>
          }
          findMany: {
            args: Prisma.transaccionesEurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>[]
          }
          create: {
            args: Prisma.transaccionesEurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>
          }
          createMany: {
            args: Prisma.transaccionesEurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaccionesEurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>[]
          }
          delete: {
            args: Prisma.transaccionesEurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>
          }
          update: {
            args: Prisma.transaccionesEurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>
          }
          deleteMany: {
            args: Prisma.transaccionesEurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaccionesEurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaccionesEurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>[]
          }
          upsert: {
            args: Prisma.transaccionesEurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionesEurPayload>
          }
          aggregate: {
            args: Prisma.TransaccionesEurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaccionesEur>
          }
          groupBy: {
            args: Prisma.transaccionesEurGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaccionesEurGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaccionesEurCountArgs<ExtArgs>
            result: $Utils.Optional<TransaccionesEurCountAggregateOutputType> | number
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
    valija?: ValijaOmit
    valijaUsd?: ValijaUsdOmit
    valijaDop?: ValijaDopOmit
    valijaEur?: ValijaEurOmit
    transaccionesUsd?: transaccionesUsdOmit
    transaccionesDop?: transaccionesDopOmit
    transaccionesEur?: transaccionesEurOmit
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
   * Count Type ValijaUsdCountOutputType
   */

  export type ValijaUsdCountOutputType = {
    transaccionUsd: number
  }

  export type ValijaUsdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccionUsd?: boolean | ValijaUsdCountOutputTypeCountTransaccionUsdArgs
  }

  // Custom InputTypes
  /**
   * ValijaUsdCountOutputType without action
   */
  export type ValijaUsdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsdCountOutputType
     */
    select?: ValijaUsdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ValijaUsdCountOutputType without action
   */
  export type ValijaUsdCountOutputTypeCountTransaccionUsdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionesUsdWhereInput
  }


  /**
   * Count Type ValijaDopCountOutputType
   */

  export type ValijaDopCountOutputType = {
    transaccionDop: number
  }

  export type ValijaDopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccionDop?: boolean | ValijaDopCountOutputTypeCountTransaccionDopArgs
  }

  // Custom InputTypes
  /**
   * ValijaDopCountOutputType without action
   */
  export type ValijaDopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDopCountOutputType
     */
    select?: ValijaDopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ValijaDopCountOutputType without action
   */
  export type ValijaDopCountOutputTypeCountTransaccionDopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionesDopWhereInput
  }


  /**
   * Count Type ValijaEurCountOutputType
   */

  export type ValijaEurCountOutputType = {
    transaccionEur: number
  }

  export type ValijaEurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccionEur?: boolean | ValijaEurCountOutputTypeCountTransaccionEurArgs
  }

  // Custom InputTypes
  /**
   * ValijaEurCountOutputType without action
   */
  export type ValijaEurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEurCountOutputType
     */
    select?: ValijaEurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ValijaEurCountOutputType without action
   */
  export type ValijaEurCountOutputTypeCountTransaccionEurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionesEurWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Valija
   */

  export type AggregateValija = {
    _count: ValijaCountAggregateOutputType | null
    _avg: ValijaAvgAggregateOutputType | null
    _sum: ValijaSumAggregateOutputType | null
    _min: ValijaMinAggregateOutputType | null
    _max: ValijaMaxAggregateOutputType | null
  }

  export type ValijaAvgAggregateOutputType = {
    id: number | null
    valijaUsdId: number | null
    valijaDopId: number | null
    valijaEurId: number | null
  }

  export type ValijaSumAggregateOutputType = {
    id: number | null
    valijaUsdId: number | null
    valijaDopId: number | null
    valijaEurId: number | null
  }

  export type ValijaMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    usuarioACargo: string | null
    llegada: Date | null
    ultimaModificacion: Date | null
    valijaUsdId: number | null
    valijaDopId: number | null
    valijaEurId: number | null
  }

  export type ValijaMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    usuarioACargo: string | null
    llegada: Date | null
    ultimaModificacion: Date | null
    valijaUsdId: number | null
    valijaDopId: number | null
    valijaEurId: number | null
  }

  export type ValijaCountAggregateOutputType = {
    id: number
    codigo: number
    usuarioACargo: number
    llegada: number
    ultimaModificacion: number
    valijaUsdId: number
    valijaDopId: number
    valijaEurId: number
    _all: number
  }


  export type ValijaAvgAggregateInputType = {
    id?: true
    valijaUsdId?: true
    valijaDopId?: true
    valijaEurId?: true
  }

  export type ValijaSumAggregateInputType = {
    id?: true
    valijaUsdId?: true
    valijaDopId?: true
    valijaEurId?: true
  }

  export type ValijaMinAggregateInputType = {
    id?: true
    codigo?: true
    usuarioACargo?: true
    llegada?: true
    ultimaModificacion?: true
    valijaUsdId?: true
    valijaDopId?: true
    valijaEurId?: true
  }

  export type ValijaMaxAggregateInputType = {
    id?: true
    codigo?: true
    usuarioACargo?: true
    llegada?: true
    ultimaModificacion?: true
    valijaUsdId?: true
    valijaDopId?: true
    valijaEurId?: true
  }

  export type ValijaCountAggregateInputType = {
    id?: true
    codigo?: true
    usuarioACargo?: true
    llegada?: true
    ultimaModificacion?: true
    valijaUsdId?: true
    valijaDopId?: true
    valijaEurId?: true
    _all?: true
  }

  export type ValijaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Valija to aggregate.
     */
    where?: ValijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valijas to fetch.
     */
    orderBy?: ValijaOrderByWithRelationInput | ValijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valijas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Valijas
    **/
    _count?: true | ValijaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValijaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValijaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValijaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValijaMaxAggregateInputType
  }

  export type GetValijaAggregateType<T extends ValijaAggregateArgs> = {
        [P in keyof T & keyof AggregateValija]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValija[P]>
      : GetScalarType<T[P], AggregateValija[P]>
  }




  export type ValijaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValijaWhereInput
    orderBy?: ValijaOrderByWithAggregationInput | ValijaOrderByWithAggregationInput[]
    by: ValijaScalarFieldEnum[] | ValijaScalarFieldEnum
    having?: ValijaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValijaCountAggregateInputType | true
    _avg?: ValijaAvgAggregateInputType
    _sum?: ValijaSumAggregateInputType
    _min?: ValijaMinAggregateInputType
    _max?: ValijaMaxAggregateInputType
  }

  export type ValijaGroupByOutputType = {
    id: number
    codigo: string
    usuarioACargo: string
    llegada: Date
    ultimaModificacion: Date
    valijaUsdId: number | null
    valijaDopId: number | null
    valijaEurId: number | null
    _count: ValijaCountAggregateOutputType | null
    _avg: ValijaAvgAggregateOutputType | null
    _sum: ValijaSumAggregateOutputType | null
    _min: ValijaMinAggregateOutputType | null
    _max: ValijaMaxAggregateOutputType | null
  }

  type GetValijaGroupByPayload<T extends ValijaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValijaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValijaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValijaGroupByOutputType[P]>
            : GetScalarType<T[P], ValijaGroupByOutputType[P]>
        }
      >
    >


  export type ValijaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    usuarioACargo?: boolean
    llegada?: boolean
    ultimaModificacion?: boolean
    valijaUsdId?: boolean
    valijaDopId?: boolean
    valijaEurId?: boolean
    valijaDop?: boolean | Valija$valijaDopArgs<ExtArgs>
    valijaEur?: boolean | Valija$valijaEurArgs<ExtArgs>
    valijaUsd?: boolean | Valija$valijaUsdArgs<ExtArgs>
  }, ExtArgs["result"]["valija"]>

  export type ValijaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    usuarioACargo?: boolean
    llegada?: boolean
    ultimaModificacion?: boolean
    valijaUsdId?: boolean
    valijaDopId?: boolean
    valijaEurId?: boolean
    valijaDop?: boolean | Valija$valijaDopArgs<ExtArgs>
    valijaEur?: boolean | Valija$valijaEurArgs<ExtArgs>
    valijaUsd?: boolean | Valija$valijaUsdArgs<ExtArgs>
  }, ExtArgs["result"]["valija"]>

  export type ValijaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    usuarioACargo?: boolean
    llegada?: boolean
    ultimaModificacion?: boolean
    valijaUsdId?: boolean
    valijaDopId?: boolean
    valijaEurId?: boolean
    valijaDop?: boolean | Valija$valijaDopArgs<ExtArgs>
    valijaEur?: boolean | Valija$valijaEurArgs<ExtArgs>
    valijaUsd?: boolean | Valija$valijaUsdArgs<ExtArgs>
  }, ExtArgs["result"]["valija"]>

  export type ValijaSelectScalar = {
    id?: boolean
    codigo?: boolean
    usuarioACargo?: boolean
    llegada?: boolean
    ultimaModificacion?: boolean
    valijaUsdId?: boolean
    valijaDopId?: boolean
    valijaEurId?: boolean
  }

  export type ValijaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "usuarioACargo" | "llegada" | "ultimaModificacion" | "valijaUsdId" | "valijaDopId" | "valijaEurId", ExtArgs["result"]["valija"]>
  export type ValijaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaDop?: boolean | Valija$valijaDopArgs<ExtArgs>
    valijaEur?: boolean | Valija$valijaEurArgs<ExtArgs>
    valijaUsd?: boolean | Valija$valijaUsdArgs<ExtArgs>
  }
  export type ValijaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaDop?: boolean | Valija$valijaDopArgs<ExtArgs>
    valijaEur?: boolean | Valija$valijaEurArgs<ExtArgs>
    valijaUsd?: boolean | Valija$valijaUsdArgs<ExtArgs>
  }
  export type ValijaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaDop?: boolean | Valija$valijaDopArgs<ExtArgs>
    valijaEur?: boolean | Valija$valijaEurArgs<ExtArgs>
    valijaUsd?: boolean | Valija$valijaUsdArgs<ExtArgs>
  }

  export type $ValijaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Valija"
    objects: {
      valijaDop: Prisma.$ValijaDopPayload<ExtArgs> | null
      valijaEur: Prisma.$ValijaEurPayload<ExtArgs> | null
      valijaUsd: Prisma.$ValijaUsdPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      usuarioACargo: string
      llegada: Date
      ultimaModificacion: Date
      valijaUsdId: number | null
      valijaDopId: number | null
      valijaEurId: number | null
    }, ExtArgs["result"]["valija"]>
    composites: {}
  }

  type ValijaGetPayload<S extends boolean | null | undefined | ValijaDefaultArgs> = $Result.GetResult<Prisma.$ValijaPayload, S>

  type ValijaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValijaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValijaCountAggregateInputType | true
    }

  export interface ValijaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Valija'], meta: { name: 'Valija' } }
    /**
     * Find zero or one Valija that matches the filter.
     * @param {ValijaFindUniqueArgs} args - Arguments to find a Valija
     * @example
     * // Get one Valija
     * const valija = await prisma.valija.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValijaFindUniqueArgs>(args: SelectSubset<T, ValijaFindUniqueArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Valija that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValijaFindUniqueOrThrowArgs} args - Arguments to find a Valija
     * @example
     * // Get one Valija
     * const valija = await prisma.valija.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValijaFindUniqueOrThrowArgs>(args: SelectSubset<T, ValijaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Valija that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaFindFirstArgs} args - Arguments to find a Valija
     * @example
     * // Get one Valija
     * const valija = await prisma.valija.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValijaFindFirstArgs>(args?: SelectSubset<T, ValijaFindFirstArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Valija that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaFindFirstOrThrowArgs} args - Arguments to find a Valija
     * @example
     * // Get one Valija
     * const valija = await prisma.valija.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValijaFindFirstOrThrowArgs>(args?: SelectSubset<T, ValijaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Valijas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Valijas
     * const valijas = await prisma.valija.findMany()
     * 
     * // Get first 10 Valijas
     * const valijas = await prisma.valija.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valijaWithIdOnly = await prisma.valija.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValijaFindManyArgs>(args?: SelectSubset<T, ValijaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Valija.
     * @param {ValijaCreateArgs} args - Arguments to create a Valija.
     * @example
     * // Create one Valija
     * const Valija = await prisma.valija.create({
     *   data: {
     *     // ... data to create a Valija
     *   }
     * })
     * 
     */
    create<T extends ValijaCreateArgs>(args: SelectSubset<T, ValijaCreateArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Valijas.
     * @param {ValijaCreateManyArgs} args - Arguments to create many Valijas.
     * @example
     * // Create many Valijas
     * const valija = await prisma.valija.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValijaCreateManyArgs>(args?: SelectSubset<T, ValijaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Valijas and returns the data saved in the database.
     * @param {ValijaCreateManyAndReturnArgs} args - Arguments to create many Valijas.
     * @example
     * // Create many Valijas
     * const valija = await prisma.valija.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Valijas and only return the `id`
     * const valijaWithIdOnly = await prisma.valija.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValijaCreateManyAndReturnArgs>(args?: SelectSubset<T, ValijaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Valija.
     * @param {ValijaDeleteArgs} args - Arguments to delete one Valija.
     * @example
     * // Delete one Valija
     * const Valija = await prisma.valija.delete({
     *   where: {
     *     // ... filter to delete one Valija
     *   }
     * })
     * 
     */
    delete<T extends ValijaDeleteArgs>(args: SelectSubset<T, ValijaDeleteArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Valija.
     * @param {ValijaUpdateArgs} args - Arguments to update one Valija.
     * @example
     * // Update one Valija
     * const valija = await prisma.valija.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValijaUpdateArgs>(args: SelectSubset<T, ValijaUpdateArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Valijas.
     * @param {ValijaDeleteManyArgs} args - Arguments to filter Valijas to delete.
     * @example
     * // Delete a few Valijas
     * const { count } = await prisma.valija.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValijaDeleteManyArgs>(args?: SelectSubset<T, ValijaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valijas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Valijas
     * const valija = await prisma.valija.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValijaUpdateManyArgs>(args: SelectSubset<T, ValijaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valijas and returns the data updated in the database.
     * @param {ValijaUpdateManyAndReturnArgs} args - Arguments to update many Valijas.
     * @example
     * // Update many Valijas
     * const valija = await prisma.valija.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Valijas and only return the `id`
     * const valijaWithIdOnly = await prisma.valija.updateManyAndReturn({
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
    updateManyAndReturn<T extends ValijaUpdateManyAndReturnArgs>(args: SelectSubset<T, ValijaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Valija.
     * @param {ValijaUpsertArgs} args - Arguments to update or create a Valija.
     * @example
     * // Update or create a Valija
     * const valija = await prisma.valija.upsert({
     *   create: {
     *     // ... data to create a Valija
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Valija we want to update
     *   }
     * })
     */
    upsert<T extends ValijaUpsertArgs>(args: SelectSubset<T, ValijaUpsertArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Valijas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaCountArgs} args - Arguments to filter Valijas to count.
     * @example
     * // Count the number of Valijas
     * const count = await prisma.valija.count({
     *   where: {
     *     // ... the filter for the Valijas we want to count
     *   }
     * })
    **/
    count<T extends ValijaCountArgs>(
      args?: Subset<T, ValijaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValijaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Valija.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValijaAggregateArgs>(args: Subset<T, ValijaAggregateArgs>): Prisma.PrismaPromise<GetValijaAggregateType<T>>

    /**
     * Group by Valija.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaGroupByArgs} args - Group by arguments.
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
      T extends ValijaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValijaGroupByArgs['orderBy'] }
        : { orderBy?: ValijaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValijaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValijaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Valija model
   */
  readonly fields: ValijaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Valija.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValijaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    valijaDop<T extends Valija$valijaDopArgs<ExtArgs> = {}>(args?: Subset<T, Valija$valijaDopArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    valijaEur<T extends Valija$valijaEurArgs<ExtArgs> = {}>(args?: Subset<T, Valija$valijaEurArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    valijaUsd<T extends Valija$valijaUsdArgs<ExtArgs> = {}>(args?: Subset<T, Valija$valijaUsdArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Valija model
   */ 
  interface ValijaFieldRefs {
    readonly id: FieldRef<"Valija", 'Int'>
    readonly codigo: FieldRef<"Valija", 'String'>
    readonly usuarioACargo: FieldRef<"Valija", 'String'>
    readonly llegada: FieldRef<"Valija", 'DateTime'>
    readonly ultimaModificacion: FieldRef<"Valija", 'DateTime'>
    readonly valijaUsdId: FieldRef<"Valija", 'Int'>
    readonly valijaDopId: FieldRef<"Valija", 'Int'>
    readonly valijaEurId: FieldRef<"Valija", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Valija findUnique
   */
  export type ValijaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * Filter, which Valija to fetch.
     */
    where: ValijaWhereUniqueInput
  }

  /**
   * Valija findUniqueOrThrow
   */
  export type ValijaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * Filter, which Valija to fetch.
     */
    where: ValijaWhereUniqueInput
  }

  /**
   * Valija findFirst
   */
  export type ValijaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * Filter, which Valija to fetch.
     */
    where?: ValijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valijas to fetch.
     */
    orderBy?: ValijaOrderByWithRelationInput | ValijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Valijas.
     */
    cursor?: ValijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valijas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Valijas.
     */
    distinct?: ValijaScalarFieldEnum | ValijaScalarFieldEnum[]
  }

  /**
   * Valija findFirstOrThrow
   */
  export type ValijaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * Filter, which Valija to fetch.
     */
    where?: ValijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valijas to fetch.
     */
    orderBy?: ValijaOrderByWithRelationInput | ValijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Valijas.
     */
    cursor?: ValijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valijas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Valijas.
     */
    distinct?: ValijaScalarFieldEnum | ValijaScalarFieldEnum[]
  }

  /**
   * Valija findMany
   */
  export type ValijaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * Filter, which Valijas to fetch.
     */
    where?: ValijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valijas to fetch.
     */
    orderBy?: ValijaOrderByWithRelationInput | ValijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Valijas.
     */
    cursor?: ValijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valijas.
     */
    skip?: number
    distinct?: ValijaScalarFieldEnum | ValijaScalarFieldEnum[]
  }

  /**
   * Valija create
   */
  export type ValijaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * The data needed to create a Valija.
     */
    data: XOR<ValijaCreateInput, ValijaUncheckedCreateInput>
  }

  /**
   * Valija createMany
   */
  export type ValijaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Valijas.
     */
    data: ValijaCreateManyInput | ValijaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Valija createManyAndReturn
   */
  export type ValijaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * The data used to create many Valijas.
     */
    data: ValijaCreateManyInput | ValijaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Valija update
   */
  export type ValijaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * The data needed to update a Valija.
     */
    data: XOR<ValijaUpdateInput, ValijaUncheckedUpdateInput>
    /**
     * Choose, which Valija to update.
     */
    where: ValijaWhereUniqueInput
  }

  /**
   * Valija updateMany
   */
  export type ValijaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Valijas.
     */
    data: XOR<ValijaUpdateManyMutationInput, ValijaUncheckedUpdateManyInput>
    /**
     * Filter which Valijas to update
     */
    where?: ValijaWhereInput
    /**
     * Limit how many Valijas to update.
     */
    limit?: number
  }

  /**
   * Valija updateManyAndReturn
   */
  export type ValijaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * The data used to update Valijas.
     */
    data: XOR<ValijaUpdateManyMutationInput, ValijaUncheckedUpdateManyInput>
    /**
     * Filter which Valijas to update
     */
    where?: ValijaWhereInput
    /**
     * Limit how many Valijas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Valija upsert
   */
  export type ValijaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * The filter to search for the Valija to update in case it exists.
     */
    where: ValijaWhereUniqueInput
    /**
     * In case the Valija found by the `where` argument doesn't exist, create a new Valija with this data.
     */
    create: XOR<ValijaCreateInput, ValijaUncheckedCreateInput>
    /**
     * In case the Valija was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValijaUpdateInput, ValijaUncheckedUpdateInput>
  }

  /**
   * Valija delete
   */
  export type ValijaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    /**
     * Filter which Valija to delete.
     */
    where: ValijaWhereUniqueInput
  }

  /**
   * Valija deleteMany
   */
  export type ValijaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Valijas to delete
     */
    where?: ValijaWhereInput
    /**
     * Limit how many Valijas to delete.
     */
    limit?: number
  }

  /**
   * Valija.valijaDop
   */
  export type Valija$valijaDopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    where?: ValijaDopWhereInput
  }

  /**
   * Valija.valijaEur
   */
  export type Valija$valijaEurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    where?: ValijaEurWhereInput
  }

  /**
   * Valija.valijaUsd
   */
  export type Valija$valijaUsdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    where?: ValijaUsdWhereInput
  }

  /**
   * Valija without action
   */
  export type ValijaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
  }


  /**
   * Model ValijaUsd
   */

  export type AggregateValijaUsd = {
    _count: ValijaUsdCountAggregateOutputType | null
    _avg: ValijaUsdAvgAggregateOutputType | null
    _sum: ValijaUsdSumAggregateOutputType | null
    _min: ValijaUsdMinAggregateOutputType | null
    _max: ValijaUsdMaxAggregateOutputType | null
  }

  export type ValijaUsdAvgAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaUsdSumAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaUsdMinAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaUsdMaxAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaUsdCountAggregateOutputType = {
    id: number
    depositos: number
    _all: number
  }


  export type ValijaUsdAvgAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaUsdSumAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaUsdMinAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaUsdMaxAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaUsdCountAggregateInputType = {
    id?: true
    depositos?: true
    _all?: true
  }

  export type ValijaUsdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValijaUsd to aggregate.
     */
    where?: ValijaUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaUsds to fetch.
     */
    orderBy?: ValijaUsdOrderByWithRelationInput | ValijaUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValijaUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaUsds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ValijaUsds
    **/
    _count?: true | ValijaUsdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValijaUsdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValijaUsdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValijaUsdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValijaUsdMaxAggregateInputType
  }

  export type GetValijaUsdAggregateType<T extends ValijaUsdAggregateArgs> = {
        [P in keyof T & keyof AggregateValijaUsd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValijaUsd[P]>
      : GetScalarType<T[P], AggregateValijaUsd[P]>
  }




  export type ValijaUsdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValijaUsdWhereInput
    orderBy?: ValijaUsdOrderByWithAggregationInput | ValijaUsdOrderByWithAggregationInput[]
    by: ValijaUsdScalarFieldEnum[] | ValijaUsdScalarFieldEnum
    having?: ValijaUsdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValijaUsdCountAggregateInputType | true
    _avg?: ValijaUsdAvgAggregateInputType
    _sum?: ValijaUsdSumAggregateInputType
    _min?: ValijaUsdMinAggregateInputType
    _max?: ValijaUsdMaxAggregateInputType
  }

  export type ValijaUsdGroupByOutputType = {
    id: number
    depositos: number
    _count: ValijaUsdCountAggregateOutputType | null
    _avg: ValijaUsdAvgAggregateOutputType | null
    _sum: ValijaUsdSumAggregateOutputType | null
    _min: ValijaUsdMinAggregateOutputType | null
    _max: ValijaUsdMaxAggregateOutputType | null
  }

  type GetValijaUsdGroupByPayload<T extends ValijaUsdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValijaUsdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValijaUsdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValijaUsdGroupByOutputType[P]>
            : GetScalarType<T[P], ValijaUsdGroupByOutputType[P]>
        }
      >
    >


  export type ValijaUsdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
    transaccionUsd?: boolean | ValijaUsd$transaccionUsdArgs<ExtArgs>
    valija?: boolean | ValijaUsd$valijaArgs<ExtArgs>
    _count?: boolean | ValijaUsdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valijaUsd"]>

  export type ValijaUsdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
  }, ExtArgs["result"]["valijaUsd"]>

  export type ValijaUsdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
  }, ExtArgs["result"]["valijaUsd"]>

  export type ValijaUsdSelectScalar = {
    id?: boolean
    depositos?: boolean
  }

  export type ValijaUsdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositos", ExtArgs["result"]["valijaUsd"]>
  export type ValijaUsdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccionUsd?: boolean | ValijaUsd$transaccionUsdArgs<ExtArgs>
    valija?: boolean | ValijaUsd$valijaArgs<ExtArgs>
    _count?: boolean | ValijaUsdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ValijaUsdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ValijaUsdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ValijaUsdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ValijaUsd"
    objects: {
      transaccionUsd: Prisma.$transaccionesUsdPayload<ExtArgs>[]
      valija: Prisma.$ValijaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      depositos: number
    }, ExtArgs["result"]["valijaUsd"]>
    composites: {}
  }

  type ValijaUsdGetPayload<S extends boolean | null | undefined | ValijaUsdDefaultArgs> = $Result.GetResult<Prisma.$ValijaUsdPayload, S>

  type ValijaUsdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValijaUsdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValijaUsdCountAggregateInputType | true
    }

  export interface ValijaUsdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ValijaUsd'], meta: { name: 'ValijaUsd' } }
    /**
     * Find zero or one ValijaUsd that matches the filter.
     * @param {ValijaUsdFindUniqueArgs} args - Arguments to find a ValijaUsd
     * @example
     * // Get one ValijaUsd
     * const valijaUsd = await prisma.valijaUsd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValijaUsdFindUniqueArgs>(args: SelectSubset<T, ValijaUsdFindUniqueArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ValijaUsd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValijaUsdFindUniqueOrThrowArgs} args - Arguments to find a ValijaUsd
     * @example
     * // Get one ValijaUsd
     * const valijaUsd = await prisma.valijaUsd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValijaUsdFindUniqueOrThrowArgs>(args: SelectSubset<T, ValijaUsdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ValijaUsd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdFindFirstArgs} args - Arguments to find a ValijaUsd
     * @example
     * // Get one ValijaUsd
     * const valijaUsd = await prisma.valijaUsd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValijaUsdFindFirstArgs>(args?: SelectSubset<T, ValijaUsdFindFirstArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ValijaUsd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdFindFirstOrThrowArgs} args - Arguments to find a ValijaUsd
     * @example
     * // Get one ValijaUsd
     * const valijaUsd = await prisma.valijaUsd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValijaUsdFindFirstOrThrowArgs>(args?: SelectSubset<T, ValijaUsdFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ValijaUsds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ValijaUsds
     * const valijaUsds = await prisma.valijaUsd.findMany()
     * 
     * // Get first 10 ValijaUsds
     * const valijaUsds = await prisma.valijaUsd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valijaUsdWithIdOnly = await prisma.valijaUsd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValijaUsdFindManyArgs>(args?: SelectSubset<T, ValijaUsdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ValijaUsd.
     * @param {ValijaUsdCreateArgs} args - Arguments to create a ValijaUsd.
     * @example
     * // Create one ValijaUsd
     * const ValijaUsd = await prisma.valijaUsd.create({
     *   data: {
     *     // ... data to create a ValijaUsd
     *   }
     * })
     * 
     */
    create<T extends ValijaUsdCreateArgs>(args: SelectSubset<T, ValijaUsdCreateArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ValijaUsds.
     * @param {ValijaUsdCreateManyArgs} args - Arguments to create many ValijaUsds.
     * @example
     * // Create many ValijaUsds
     * const valijaUsd = await prisma.valijaUsd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValijaUsdCreateManyArgs>(args?: SelectSubset<T, ValijaUsdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ValijaUsds and returns the data saved in the database.
     * @param {ValijaUsdCreateManyAndReturnArgs} args - Arguments to create many ValijaUsds.
     * @example
     * // Create many ValijaUsds
     * const valijaUsd = await prisma.valijaUsd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ValijaUsds and only return the `id`
     * const valijaUsdWithIdOnly = await prisma.valijaUsd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValijaUsdCreateManyAndReturnArgs>(args?: SelectSubset<T, ValijaUsdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ValijaUsd.
     * @param {ValijaUsdDeleteArgs} args - Arguments to delete one ValijaUsd.
     * @example
     * // Delete one ValijaUsd
     * const ValijaUsd = await prisma.valijaUsd.delete({
     *   where: {
     *     // ... filter to delete one ValijaUsd
     *   }
     * })
     * 
     */
    delete<T extends ValijaUsdDeleteArgs>(args: SelectSubset<T, ValijaUsdDeleteArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ValijaUsd.
     * @param {ValijaUsdUpdateArgs} args - Arguments to update one ValijaUsd.
     * @example
     * // Update one ValijaUsd
     * const valijaUsd = await prisma.valijaUsd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValijaUsdUpdateArgs>(args: SelectSubset<T, ValijaUsdUpdateArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ValijaUsds.
     * @param {ValijaUsdDeleteManyArgs} args - Arguments to filter ValijaUsds to delete.
     * @example
     * // Delete a few ValijaUsds
     * const { count } = await prisma.valijaUsd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValijaUsdDeleteManyArgs>(args?: SelectSubset<T, ValijaUsdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValijaUsds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ValijaUsds
     * const valijaUsd = await prisma.valijaUsd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValijaUsdUpdateManyArgs>(args: SelectSubset<T, ValijaUsdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValijaUsds and returns the data updated in the database.
     * @param {ValijaUsdUpdateManyAndReturnArgs} args - Arguments to update many ValijaUsds.
     * @example
     * // Update many ValijaUsds
     * const valijaUsd = await prisma.valijaUsd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ValijaUsds and only return the `id`
     * const valijaUsdWithIdOnly = await prisma.valijaUsd.updateManyAndReturn({
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
    updateManyAndReturn<T extends ValijaUsdUpdateManyAndReturnArgs>(args: SelectSubset<T, ValijaUsdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ValijaUsd.
     * @param {ValijaUsdUpsertArgs} args - Arguments to update or create a ValijaUsd.
     * @example
     * // Update or create a ValijaUsd
     * const valijaUsd = await prisma.valijaUsd.upsert({
     *   create: {
     *     // ... data to create a ValijaUsd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ValijaUsd we want to update
     *   }
     * })
     */
    upsert<T extends ValijaUsdUpsertArgs>(args: SelectSubset<T, ValijaUsdUpsertArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ValijaUsds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdCountArgs} args - Arguments to filter ValijaUsds to count.
     * @example
     * // Count the number of ValijaUsds
     * const count = await prisma.valijaUsd.count({
     *   where: {
     *     // ... the filter for the ValijaUsds we want to count
     *   }
     * })
    **/
    count<T extends ValijaUsdCountArgs>(
      args?: Subset<T, ValijaUsdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValijaUsdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ValijaUsd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValijaUsdAggregateArgs>(args: Subset<T, ValijaUsdAggregateArgs>): Prisma.PrismaPromise<GetValijaUsdAggregateType<T>>

    /**
     * Group by ValijaUsd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaUsdGroupByArgs} args - Group by arguments.
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
      T extends ValijaUsdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValijaUsdGroupByArgs['orderBy'] }
        : { orderBy?: ValijaUsdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValijaUsdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValijaUsdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ValijaUsd model
   */
  readonly fields: ValijaUsdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ValijaUsd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValijaUsdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaccionUsd<T extends ValijaUsd$transaccionUsdArgs<ExtArgs> = {}>(args?: Subset<T, ValijaUsd$transaccionUsdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    valija<T extends ValijaUsd$valijaArgs<ExtArgs> = {}>(args?: Subset<T, ValijaUsd$valijaArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the ValijaUsd model
   */ 
  interface ValijaUsdFieldRefs {
    readonly id: FieldRef<"ValijaUsd", 'Int'>
    readonly depositos: FieldRef<"ValijaUsd", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ValijaUsd findUnique
   */
  export type ValijaUsdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * Filter, which ValijaUsd to fetch.
     */
    where: ValijaUsdWhereUniqueInput
  }

  /**
   * ValijaUsd findUniqueOrThrow
   */
  export type ValijaUsdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * Filter, which ValijaUsd to fetch.
     */
    where: ValijaUsdWhereUniqueInput
  }

  /**
   * ValijaUsd findFirst
   */
  export type ValijaUsdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * Filter, which ValijaUsd to fetch.
     */
    where?: ValijaUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaUsds to fetch.
     */
    orderBy?: ValijaUsdOrderByWithRelationInput | ValijaUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValijaUsds.
     */
    cursor?: ValijaUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaUsds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValijaUsds.
     */
    distinct?: ValijaUsdScalarFieldEnum | ValijaUsdScalarFieldEnum[]
  }

  /**
   * ValijaUsd findFirstOrThrow
   */
  export type ValijaUsdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * Filter, which ValijaUsd to fetch.
     */
    where?: ValijaUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaUsds to fetch.
     */
    orderBy?: ValijaUsdOrderByWithRelationInput | ValijaUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValijaUsds.
     */
    cursor?: ValijaUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaUsds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValijaUsds.
     */
    distinct?: ValijaUsdScalarFieldEnum | ValijaUsdScalarFieldEnum[]
  }

  /**
   * ValijaUsd findMany
   */
  export type ValijaUsdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * Filter, which ValijaUsds to fetch.
     */
    where?: ValijaUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaUsds to fetch.
     */
    orderBy?: ValijaUsdOrderByWithRelationInput | ValijaUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ValijaUsds.
     */
    cursor?: ValijaUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaUsds.
     */
    skip?: number
    distinct?: ValijaUsdScalarFieldEnum | ValijaUsdScalarFieldEnum[]
  }

  /**
   * ValijaUsd create
   */
  export type ValijaUsdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * The data needed to create a ValijaUsd.
     */
    data?: XOR<ValijaUsdCreateInput, ValijaUsdUncheckedCreateInput>
  }

  /**
   * ValijaUsd createMany
   */
  export type ValijaUsdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ValijaUsds.
     */
    data: ValijaUsdCreateManyInput | ValijaUsdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValijaUsd createManyAndReturn
   */
  export type ValijaUsdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * The data used to create many ValijaUsds.
     */
    data: ValijaUsdCreateManyInput | ValijaUsdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValijaUsd update
   */
  export type ValijaUsdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * The data needed to update a ValijaUsd.
     */
    data: XOR<ValijaUsdUpdateInput, ValijaUsdUncheckedUpdateInput>
    /**
     * Choose, which ValijaUsd to update.
     */
    where: ValijaUsdWhereUniqueInput
  }

  /**
   * ValijaUsd updateMany
   */
  export type ValijaUsdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ValijaUsds.
     */
    data: XOR<ValijaUsdUpdateManyMutationInput, ValijaUsdUncheckedUpdateManyInput>
    /**
     * Filter which ValijaUsds to update
     */
    where?: ValijaUsdWhereInput
    /**
     * Limit how many ValijaUsds to update.
     */
    limit?: number
  }

  /**
   * ValijaUsd updateManyAndReturn
   */
  export type ValijaUsdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * The data used to update ValijaUsds.
     */
    data: XOR<ValijaUsdUpdateManyMutationInput, ValijaUsdUncheckedUpdateManyInput>
    /**
     * Filter which ValijaUsds to update
     */
    where?: ValijaUsdWhereInput
    /**
     * Limit how many ValijaUsds to update.
     */
    limit?: number
  }

  /**
   * ValijaUsd upsert
   */
  export type ValijaUsdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * The filter to search for the ValijaUsd to update in case it exists.
     */
    where: ValijaUsdWhereUniqueInput
    /**
     * In case the ValijaUsd found by the `where` argument doesn't exist, create a new ValijaUsd with this data.
     */
    create: XOR<ValijaUsdCreateInput, ValijaUsdUncheckedCreateInput>
    /**
     * In case the ValijaUsd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValijaUsdUpdateInput, ValijaUsdUncheckedUpdateInput>
  }

  /**
   * ValijaUsd delete
   */
  export type ValijaUsdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
    /**
     * Filter which ValijaUsd to delete.
     */
    where: ValijaUsdWhereUniqueInput
  }

  /**
   * ValijaUsd deleteMany
   */
  export type ValijaUsdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValijaUsds to delete
     */
    where?: ValijaUsdWhereInput
    /**
     * Limit how many ValijaUsds to delete.
     */
    limit?: number
  }

  /**
   * ValijaUsd.transaccionUsd
   */
  export type ValijaUsd$transaccionUsdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    where?: transaccionesUsdWhereInput
    orderBy?: transaccionesUsdOrderByWithRelationInput | transaccionesUsdOrderByWithRelationInput[]
    cursor?: transaccionesUsdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionesUsdScalarFieldEnum | TransaccionesUsdScalarFieldEnum[]
  }

  /**
   * ValijaUsd.valija
   */
  export type ValijaUsd$valijaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    where?: ValijaWhereInput
  }

  /**
   * ValijaUsd without action
   */
  export type ValijaUsdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaUsd
     */
    select?: ValijaUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaUsd
     */
    omit?: ValijaUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaUsdInclude<ExtArgs> | null
  }


  /**
   * Model ValijaDop
   */

  export type AggregateValijaDop = {
    _count: ValijaDopCountAggregateOutputType | null
    _avg: ValijaDopAvgAggregateOutputType | null
    _sum: ValijaDopSumAggregateOutputType | null
    _min: ValijaDopMinAggregateOutputType | null
    _max: ValijaDopMaxAggregateOutputType | null
  }

  export type ValijaDopAvgAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaDopSumAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaDopMinAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaDopMaxAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaDopCountAggregateOutputType = {
    id: number
    depositos: number
    _all: number
  }


  export type ValijaDopAvgAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaDopSumAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaDopMinAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaDopMaxAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaDopCountAggregateInputType = {
    id?: true
    depositos?: true
    _all?: true
  }

  export type ValijaDopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValijaDop to aggregate.
     */
    where?: ValijaDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaDops to fetch.
     */
    orderBy?: ValijaDopOrderByWithRelationInput | ValijaDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValijaDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaDops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ValijaDops
    **/
    _count?: true | ValijaDopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValijaDopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValijaDopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValijaDopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValijaDopMaxAggregateInputType
  }

  export type GetValijaDopAggregateType<T extends ValijaDopAggregateArgs> = {
        [P in keyof T & keyof AggregateValijaDop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValijaDop[P]>
      : GetScalarType<T[P], AggregateValijaDop[P]>
  }




  export type ValijaDopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValijaDopWhereInput
    orderBy?: ValijaDopOrderByWithAggregationInput | ValijaDopOrderByWithAggregationInput[]
    by: ValijaDopScalarFieldEnum[] | ValijaDopScalarFieldEnum
    having?: ValijaDopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValijaDopCountAggregateInputType | true
    _avg?: ValijaDopAvgAggregateInputType
    _sum?: ValijaDopSumAggregateInputType
    _min?: ValijaDopMinAggregateInputType
    _max?: ValijaDopMaxAggregateInputType
  }

  export type ValijaDopGroupByOutputType = {
    id: number
    depositos: number | null
    _count: ValijaDopCountAggregateOutputType | null
    _avg: ValijaDopAvgAggregateOutputType | null
    _sum: ValijaDopSumAggregateOutputType | null
    _min: ValijaDopMinAggregateOutputType | null
    _max: ValijaDopMaxAggregateOutputType | null
  }

  type GetValijaDopGroupByPayload<T extends ValijaDopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValijaDopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValijaDopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValijaDopGroupByOutputType[P]>
            : GetScalarType<T[P], ValijaDopGroupByOutputType[P]>
        }
      >
    >


  export type ValijaDopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
    transaccionDop?: boolean | ValijaDop$transaccionDopArgs<ExtArgs>
    valija?: boolean | ValijaDop$valijaArgs<ExtArgs>
    _count?: boolean | ValijaDopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valijaDop"]>

  export type ValijaDopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
  }, ExtArgs["result"]["valijaDop"]>

  export type ValijaDopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
  }, ExtArgs["result"]["valijaDop"]>

  export type ValijaDopSelectScalar = {
    id?: boolean
    depositos?: boolean
  }

  export type ValijaDopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositos", ExtArgs["result"]["valijaDop"]>
  export type ValijaDopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccionDop?: boolean | ValijaDop$transaccionDopArgs<ExtArgs>
    valija?: boolean | ValijaDop$valijaArgs<ExtArgs>
    _count?: boolean | ValijaDopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ValijaDopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ValijaDopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ValijaDopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ValijaDop"
    objects: {
      transaccionDop: Prisma.$transaccionesDopPayload<ExtArgs>[]
      valija: Prisma.$ValijaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      depositos: number | null
    }, ExtArgs["result"]["valijaDop"]>
    composites: {}
  }

  type ValijaDopGetPayload<S extends boolean | null | undefined | ValijaDopDefaultArgs> = $Result.GetResult<Prisma.$ValijaDopPayload, S>

  type ValijaDopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValijaDopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValijaDopCountAggregateInputType | true
    }

  export interface ValijaDopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ValijaDop'], meta: { name: 'ValijaDop' } }
    /**
     * Find zero or one ValijaDop that matches the filter.
     * @param {ValijaDopFindUniqueArgs} args - Arguments to find a ValijaDop
     * @example
     * // Get one ValijaDop
     * const valijaDop = await prisma.valijaDop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValijaDopFindUniqueArgs>(args: SelectSubset<T, ValijaDopFindUniqueArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ValijaDop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValijaDopFindUniqueOrThrowArgs} args - Arguments to find a ValijaDop
     * @example
     * // Get one ValijaDop
     * const valijaDop = await prisma.valijaDop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValijaDopFindUniqueOrThrowArgs>(args: SelectSubset<T, ValijaDopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ValijaDop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopFindFirstArgs} args - Arguments to find a ValijaDop
     * @example
     * // Get one ValijaDop
     * const valijaDop = await prisma.valijaDop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValijaDopFindFirstArgs>(args?: SelectSubset<T, ValijaDopFindFirstArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ValijaDop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopFindFirstOrThrowArgs} args - Arguments to find a ValijaDop
     * @example
     * // Get one ValijaDop
     * const valijaDop = await prisma.valijaDop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValijaDopFindFirstOrThrowArgs>(args?: SelectSubset<T, ValijaDopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ValijaDops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ValijaDops
     * const valijaDops = await prisma.valijaDop.findMany()
     * 
     * // Get first 10 ValijaDops
     * const valijaDops = await prisma.valijaDop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valijaDopWithIdOnly = await prisma.valijaDop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValijaDopFindManyArgs>(args?: SelectSubset<T, ValijaDopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ValijaDop.
     * @param {ValijaDopCreateArgs} args - Arguments to create a ValijaDop.
     * @example
     * // Create one ValijaDop
     * const ValijaDop = await prisma.valijaDop.create({
     *   data: {
     *     // ... data to create a ValijaDop
     *   }
     * })
     * 
     */
    create<T extends ValijaDopCreateArgs>(args: SelectSubset<T, ValijaDopCreateArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ValijaDops.
     * @param {ValijaDopCreateManyArgs} args - Arguments to create many ValijaDops.
     * @example
     * // Create many ValijaDops
     * const valijaDop = await prisma.valijaDop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValijaDopCreateManyArgs>(args?: SelectSubset<T, ValijaDopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ValijaDops and returns the data saved in the database.
     * @param {ValijaDopCreateManyAndReturnArgs} args - Arguments to create many ValijaDops.
     * @example
     * // Create many ValijaDops
     * const valijaDop = await prisma.valijaDop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ValijaDops and only return the `id`
     * const valijaDopWithIdOnly = await prisma.valijaDop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValijaDopCreateManyAndReturnArgs>(args?: SelectSubset<T, ValijaDopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ValijaDop.
     * @param {ValijaDopDeleteArgs} args - Arguments to delete one ValijaDop.
     * @example
     * // Delete one ValijaDop
     * const ValijaDop = await prisma.valijaDop.delete({
     *   where: {
     *     // ... filter to delete one ValijaDop
     *   }
     * })
     * 
     */
    delete<T extends ValijaDopDeleteArgs>(args: SelectSubset<T, ValijaDopDeleteArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ValijaDop.
     * @param {ValijaDopUpdateArgs} args - Arguments to update one ValijaDop.
     * @example
     * // Update one ValijaDop
     * const valijaDop = await prisma.valijaDop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValijaDopUpdateArgs>(args: SelectSubset<T, ValijaDopUpdateArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ValijaDops.
     * @param {ValijaDopDeleteManyArgs} args - Arguments to filter ValijaDops to delete.
     * @example
     * // Delete a few ValijaDops
     * const { count } = await prisma.valijaDop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValijaDopDeleteManyArgs>(args?: SelectSubset<T, ValijaDopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValijaDops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ValijaDops
     * const valijaDop = await prisma.valijaDop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValijaDopUpdateManyArgs>(args: SelectSubset<T, ValijaDopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValijaDops and returns the data updated in the database.
     * @param {ValijaDopUpdateManyAndReturnArgs} args - Arguments to update many ValijaDops.
     * @example
     * // Update many ValijaDops
     * const valijaDop = await prisma.valijaDop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ValijaDops and only return the `id`
     * const valijaDopWithIdOnly = await prisma.valijaDop.updateManyAndReturn({
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
    updateManyAndReturn<T extends ValijaDopUpdateManyAndReturnArgs>(args: SelectSubset<T, ValijaDopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ValijaDop.
     * @param {ValijaDopUpsertArgs} args - Arguments to update or create a ValijaDop.
     * @example
     * // Update or create a ValijaDop
     * const valijaDop = await prisma.valijaDop.upsert({
     *   create: {
     *     // ... data to create a ValijaDop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ValijaDop we want to update
     *   }
     * })
     */
    upsert<T extends ValijaDopUpsertArgs>(args: SelectSubset<T, ValijaDopUpsertArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ValijaDops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopCountArgs} args - Arguments to filter ValijaDops to count.
     * @example
     * // Count the number of ValijaDops
     * const count = await prisma.valijaDop.count({
     *   where: {
     *     // ... the filter for the ValijaDops we want to count
     *   }
     * })
    **/
    count<T extends ValijaDopCountArgs>(
      args?: Subset<T, ValijaDopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValijaDopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ValijaDop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValijaDopAggregateArgs>(args: Subset<T, ValijaDopAggregateArgs>): Prisma.PrismaPromise<GetValijaDopAggregateType<T>>

    /**
     * Group by ValijaDop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaDopGroupByArgs} args - Group by arguments.
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
      T extends ValijaDopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValijaDopGroupByArgs['orderBy'] }
        : { orderBy?: ValijaDopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValijaDopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValijaDopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ValijaDop model
   */
  readonly fields: ValijaDopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ValijaDop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValijaDopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaccionDop<T extends ValijaDop$transaccionDopArgs<ExtArgs> = {}>(args?: Subset<T, ValijaDop$transaccionDopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    valija<T extends ValijaDop$valijaArgs<ExtArgs> = {}>(args?: Subset<T, ValijaDop$valijaArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the ValijaDop model
   */ 
  interface ValijaDopFieldRefs {
    readonly id: FieldRef<"ValijaDop", 'Int'>
    readonly depositos: FieldRef<"ValijaDop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ValijaDop findUnique
   */
  export type ValijaDopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * Filter, which ValijaDop to fetch.
     */
    where: ValijaDopWhereUniqueInput
  }

  /**
   * ValijaDop findUniqueOrThrow
   */
  export type ValijaDopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * Filter, which ValijaDop to fetch.
     */
    where: ValijaDopWhereUniqueInput
  }

  /**
   * ValijaDop findFirst
   */
  export type ValijaDopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * Filter, which ValijaDop to fetch.
     */
    where?: ValijaDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaDops to fetch.
     */
    orderBy?: ValijaDopOrderByWithRelationInput | ValijaDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValijaDops.
     */
    cursor?: ValijaDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaDops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValijaDops.
     */
    distinct?: ValijaDopScalarFieldEnum | ValijaDopScalarFieldEnum[]
  }

  /**
   * ValijaDop findFirstOrThrow
   */
  export type ValijaDopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * Filter, which ValijaDop to fetch.
     */
    where?: ValijaDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaDops to fetch.
     */
    orderBy?: ValijaDopOrderByWithRelationInput | ValijaDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValijaDops.
     */
    cursor?: ValijaDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaDops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValijaDops.
     */
    distinct?: ValijaDopScalarFieldEnum | ValijaDopScalarFieldEnum[]
  }

  /**
   * ValijaDop findMany
   */
  export type ValijaDopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * Filter, which ValijaDops to fetch.
     */
    where?: ValijaDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaDops to fetch.
     */
    orderBy?: ValijaDopOrderByWithRelationInput | ValijaDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ValijaDops.
     */
    cursor?: ValijaDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaDops.
     */
    skip?: number
    distinct?: ValijaDopScalarFieldEnum | ValijaDopScalarFieldEnum[]
  }

  /**
   * ValijaDop create
   */
  export type ValijaDopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * The data needed to create a ValijaDop.
     */
    data?: XOR<ValijaDopCreateInput, ValijaDopUncheckedCreateInput>
  }

  /**
   * ValijaDop createMany
   */
  export type ValijaDopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ValijaDops.
     */
    data: ValijaDopCreateManyInput | ValijaDopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValijaDop createManyAndReturn
   */
  export type ValijaDopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * The data used to create many ValijaDops.
     */
    data: ValijaDopCreateManyInput | ValijaDopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValijaDop update
   */
  export type ValijaDopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * The data needed to update a ValijaDop.
     */
    data: XOR<ValijaDopUpdateInput, ValijaDopUncheckedUpdateInput>
    /**
     * Choose, which ValijaDop to update.
     */
    where: ValijaDopWhereUniqueInput
  }

  /**
   * ValijaDop updateMany
   */
  export type ValijaDopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ValijaDops.
     */
    data: XOR<ValijaDopUpdateManyMutationInput, ValijaDopUncheckedUpdateManyInput>
    /**
     * Filter which ValijaDops to update
     */
    where?: ValijaDopWhereInput
    /**
     * Limit how many ValijaDops to update.
     */
    limit?: number
  }

  /**
   * ValijaDop updateManyAndReturn
   */
  export type ValijaDopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * The data used to update ValijaDops.
     */
    data: XOR<ValijaDopUpdateManyMutationInput, ValijaDopUncheckedUpdateManyInput>
    /**
     * Filter which ValijaDops to update
     */
    where?: ValijaDopWhereInput
    /**
     * Limit how many ValijaDops to update.
     */
    limit?: number
  }

  /**
   * ValijaDop upsert
   */
  export type ValijaDopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * The filter to search for the ValijaDop to update in case it exists.
     */
    where: ValijaDopWhereUniqueInput
    /**
     * In case the ValijaDop found by the `where` argument doesn't exist, create a new ValijaDop with this data.
     */
    create: XOR<ValijaDopCreateInput, ValijaDopUncheckedCreateInput>
    /**
     * In case the ValijaDop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValijaDopUpdateInput, ValijaDopUncheckedUpdateInput>
  }

  /**
   * ValijaDop delete
   */
  export type ValijaDopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
    /**
     * Filter which ValijaDop to delete.
     */
    where: ValijaDopWhereUniqueInput
  }

  /**
   * ValijaDop deleteMany
   */
  export type ValijaDopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValijaDops to delete
     */
    where?: ValijaDopWhereInput
    /**
     * Limit how many ValijaDops to delete.
     */
    limit?: number
  }

  /**
   * ValijaDop.transaccionDop
   */
  export type ValijaDop$transaccionDopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    where?: transaccionesDopWhereInput
    orderBy?: transaccionesDopOrderByWithRelationInput | transaccionesDopOrderByWithRelationInput[]
    cursor?: transaccionesDopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionesDopScalarFieldEnum | TransaccionesDopScalarFieldEnum[]
  }

  /**
   * ValijaDop.valija
   */
  export type ValijaDop$valijaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    where?: ValijaWhereInput
  }

  /**
   * ValijaDop without action
   */
  export type ValijaDopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaDop
     */
    select?: ValijaDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaDop
     */
    omit?: ValijaDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaDopInclude<ExtArgs> | null
  }


  /**
   * Model ValijaEur
   */

  export type AggregateValijaEur = {
    _count: ValijaEurCountAggregateOutputType | null
    _avg: ValijaEurAvgAggregateOutputType | null
    _sum: ValijaEurSumAggregateOutputType | null
    _min: ValijaEurMinAggregateOutputType | null
    _max: ValijaEurMaxAggregateOutputType | null
  }

  export type ValijaEurAvgAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaEurSumAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaEurMinAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaEurMaxAggregateOutputType = {
    id: number | null
    depositos: number | null
  }

  export type ValijaEurCountAggregateOutputType = {
    id: number
    depositos: number
    _all: number
  }


  export type ValijaEurAvgAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaEurSumAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaEurMinAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaEurMaxAggregateInputType = {
    id?: true
    depositos?: true
  }

  export type ValijaEurCountAggregateInputType = {
    id?: true
    depositos?: true
    _all?: true
  }

  export type ValijaEurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValijaEur to aggregate.
     */
    where?: ValijaEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaEurs to fetch.
     */
    orderBy?: ValijaEurOrderByWithRelationInput | ValijaEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValijaEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaEurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ValijaEurs
    **/
    _count?: true | ValijaEurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValijaEurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValijaEurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValijaEurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValijaEurMaxAggregateInputType
  }

  export type GetValijaEurAggregateType<T extends ValijaEurAggregateArgs> = {
        [P in keyof T & keyof AggregateValijaEur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValijaEur[P]>
      : GetScalarType<T[P], AggregateValijaEur[P]>
  }




  export type ValijaEurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValijaEurWhereInput
    orderBy?: ValijaEurOrderByWithAggregationInput | ValijaEurOrderByWithAggregationInput[]
    by: ValijaEurScalarFieldEnum[] | ValijaEurScalarFieldEnum
    having?: ValijaEurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValijaEurCountAggregateInputType | true
    _avg?: ValijaEurAvgAggregateInputType
    _sum?: ValijaEurSumAggregateInputType
    _min?: ValijaEurMinAggregateInputType
    _max?: ValijaEurMaxAggregateInputType
  }

  export type ValijaEurGroupByOutputType = {
    id: number
    depositos: number
    _count: ValijaEurCountAggregateOutputType | null
    _avg: ValijaEurAvgAggregateOutputType | null
    _sum: ValijaEurSumAggregateOutputType | null
    _min: ValijaEurMinAggregateOutputType | null
    _max: ValijaEurMaxAggregateOutputType | null
  }

  type GetValijaEurGroupByPayload<T extends ValijaEurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValijaEurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValijaEurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValijaEurGroupByOutputType[P]>
            : GetScalarType<T[P], ValijaEurGroupByOutputType[P]>
        }
      >
    >


  export type ValijaEurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
    transaccionEur?: boolean | ValijaEur$transaccionEurArgs<ExtArgs>
    valija?: boolean | ValijaEur$valijaArgs<ExtArgs>
    _count?: boolean | ValijaEurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valijaEur"]>

  export type ValijaEurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
  }, ExtArgs["result"]["valijaEur"]>

  export type ValijaEurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depositos?: boolean
  }, ExtArgs["result"]["valijaEur"]>

  export type ValijaEurSelectScalar = {
    id?: boolean
    depositos?: boolean
  }

  export type ValijaEurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depositos", ExtArgs["result"]["valijaEur"]>
  export type ValijaEurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccionEur?: boolean | ValijaEur$transaccionEurArgs<ExtArgs>
    valija?: boolean | ValijaEur$valijaArgs<ExtArgs>
    _count?: boolean | ValijaEurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ValijaEurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ValijaEurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ValijaEurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ValijaEur"
    objects: {
      transaccionEur: Prisma.$transaccionesEurPayload<ExtArgs>[]
      valija: Prisma.$ValijaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      depositos: number
    }, ExtArgs["result"]["valijaEur"]>
    composites: {}
  }

  type ValijaEurGetPayload<S extends boolean | null | undefined | ValijaEurDefaultArgs> = $Result.GetResult<Prisma.$ValijaEurPayload, S>

  type ValijaEurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValijaEurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValijaEurCountAggregateInputType | true
    }

  export interface ValijaEurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ValijaEur'], meta: { name: 'ValijaEur' } }
    /**
     * Find zero or one ValijaEur that matches the filter.
     * @param {ValijaEurFindUniqueArgs} args - Arguments to find a ValijaEur
     * @example
     * // Get one ValijaEur
     * const valijaEur = await prisma.valijaEur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValijaEurFindUniqueArgs>(args: SelectSubset<T, ValijaEurFindUniqueArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ValijaEur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValijaEurFindUniqueOrThrowArgs} args - Arguments to find a ValijaEur
     * @example
     * // Get one ValijaEur
     * const valijaEur = await prisma.valijaEur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValijaEurFindUniqueOrThrowArgs>(args: SelectSubset<T, ValijaEurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ValijaEur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurFindFirstArgs} args - Arguments to find a ValijaEur
     * @example
     * // Get one ValijaEur
     * const valijaEur = await prisma.valijaEur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValijaEurFindFirstArgs>(args?: SelectSubset<T, ValijaEurFindFirstArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ValijaEur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurFindFirstOrThrowArgs} args - Arguments to find a ValijaEur
     * @example
     * // Get one ValijaEur
     * const valijaEur = await prisma.valijaEur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValijaEurFindFirstOrThrowArgs>(args?: SelectSubset<T, ValijaEurFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ValijaEurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ValijaEurs
     * const valijaEurs = await prisma.valijaEur.findMany()
     * 
     * // Get first 10 ValijaEurs
     * const valijaEurs = await prisma.valijaEur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valijaEurWithIdOnly = await prisma.valijaEur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValijaEurFindManyArgs>(args?: SelectSubset<T, ValijaEurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ValijaEur.
     * @param {ValijaEurCreateArgs} args - Arguments to create a ValijaEur.
     * @example
     * // Create one ValijaEur
     * const ValijaEur = await prisma.valijaEur.create({
     *   data: {
     *     // ... data to create a ValijaEur
     *   }
     * })
     * 
     */
    create<T extends ValijaEurCreateArgs>(args: SelectSubset<T, ValijaEurCreateArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ValijaEurs.
     * @param {ValijaEurCreateManyArgs} args - Arguments to create many ValijaEurs.
     * @example
     * // Create many ValijaEurs
     * const valijaEur = await prisma.valijaEur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValijaEurCreateManyArgs>(args?: SelectSubset<T, ValijaEurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ValijaEurs and returns the data saved in the database.
     * @param {ValijaEurCreateManyAndReturnArgs} args - Arguments to create many ValijaEurs.
     * @example
     * // Create many ValijaEurs
     * const valijaEur = await prisma.valijaEur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ValijaEurs and only return the `id`
     * const valijaEurWithIdOnly = await prisma.valijaEur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValijaEurCreateManyAndReturnArgs>(args?: SelectSubset<T, ValijaEurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ValijaEur.
     * @param {ValijaEurDeleteArgs} args - Arguments to delete one ValijaEur.
     * @example
     * // Delete one ValijaEur
     * const ValijaEur = await prisma.valijaEur.delete({
     *   where: {
     *     // ... filter to delete one ValijaEur
     *   }
     * })
     * 
     */
    delete<T extends ValijaEurDeleteArgs>(args: SelectSubset<T, ValijaEurDeleteArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ValijaEur.
     * @param {ValijaEurUpdateArgs} args - Arguments to update one ValijaEur.
     * @example
     * // Update one ValijaEur
     * const valijaEur = await prisma.valijaEur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValijaEurUpdateArgs>(args: SelectSubset<T, ValijaEurUpdateArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ValijaEurs.
     * @param {ValijaEurDeleteManyArgs} args - Arguments to filter ValijaEurs to delete.
     * @example
     * // Delete a few ValijaEurs
     * const { count } = await prisma.valijaEur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValijaEurDeleteManyArgs>(args?: SelectSubset<T, ValijaEurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValijaEurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ValijaEurs
     * const valijaEur = await prisma.valijaEur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValijaEurUpdateManyArgs>(args: SelectSubset<T, ValijaEurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValijaEurs and returns the data updated in the database.
     * @param {ValijaEurUpdateManyAndReturnArgs} args - Arguments to update many ValijaEurs.
     * @example
     * // Update many ValijaEurs
     * const valijaEur = await prisma.valijaEur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ValijaEurs and only return the `id`
     * const valijaEurWithIdOnly = await prisma.valijaEur.updateManyAndReturn({
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
    updateManyAndReturn<T extends ValijaEurUpdateManyAndReturnArgs>(args: SelectSubset<T, ValijaEurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ValijaEur.
     * @param {ValijaEurUpsertArgs} args - Arguments to update or create a ValijaEur.
     * @example
     * // Update or create a ValijaEur
     * const valijaEur = await prisma.valijaEur.upsert({
     *   create: {
     *     // ... data to create a ValijaEur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ValijaEur we want to update
     *   }
     * })
     */
    upsert<T extends ValijaEurUpsertArgs>(args: SelectSubset<T, ValijaEurUpsertArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ValijaEurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurCountArgs} args - Arguments to filter ValijaEurs to count.
     * @example
     * // Count the number of ValijaEurs
     * const count = await prisma.valijaEur.count({
     *   where: {
     *     // ... the filter for the ValijaEurs we want to count
     *   }
     * })
    **/
    count<T extends ValijaEurCountArgs>(
      args?: Subset<T, ValijaEurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValijaEurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ValijaEur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValijaEurAggregateArgs>(args: Subset<T, ValijaEurAggregateArgs>): Prisma.PrismaPromise<GetValijaEurAggregateType<T>>

    /**
     * Group by ValijaEur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValijaEurGroupByArgs} args - Group by arguments.
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
      T extends ValijaEurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValijaEurGroupByArgs['orderBy'] }
        : { orderBy?: ValijaEurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValijaEurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValijaEurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ValijaEur model
   */
  readonly fields: ValijaEurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ValijaEur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValijaEurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaccionEur<T extends ValijaEur$transaccionEurArgs<ExtArgs> = {}>(args?: Subset<T, ValijaEur$transaccionEurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    valija<T extends ValijaEur$valijaArgs<ExtArgs> = {}>(args?: Subset<T, ValijaEur$valijaArgs<ExtArgs>>): Prisma__ValijaClient<$Result.GetResult<Prisma.$ValijaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the ValijaEur model
   */ 
  interface ValijaEurFieldRefs {
    readonly id: FieldRef<"ValijaEur", 'Int'>
    readonly depositos: FieldRef<"ValijaEur", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ValijaEur findUnique
   */
  export type ValijaEurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * Filter, which ValijaEur to fetch.
     */
    where: ValijaEurWhereUniqueInput
  }

  /**
   * ValijaEur findUniqueOrThrow
   */
  export type ValijaEurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * Filter, which ValijaEur to fetch.
     */
    where: ValijaEurWhereUniqueInput
  }

  /**
   * ValijaEur findFirst
   */
  export type ValijaEurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * Filter, which ValijaEur to fetch.
     */
    where?: ValijaEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaEurs to fetch.
     */
    orderBy?: ValijaEurOrderByWithRelationInput | ValijaEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValijaEurs.
     */
    cursor?: ValijaEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaEurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValijaEurs.
     */
    distinct?: ValijaEurScalarFieldEnum | ValijaEurScalarFieldEnum[]
  }

  /**
   * ValijaEur findFirstOrThrow
   */
  export type ValijaEurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * Filter, which ValijaEur to fetch.
     */
    where?: ValijaEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaEurs to fetch.
     */
    orderBy?: ValijaEurOrderByWithRelationInput | ValijaEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValijaEurs.
     */
    cursor?: ValijaEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaEurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValijaEurs.
     */
    distinct?: ValijaEurScalarFieldEnum | ValijaEurScalarFieldEnum[]
  }

  /**
   * ValijaEur findMany
   */
  export type ValijaEurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * Filter, which ValijaEurs to fetch.
     */
    where?: ValijaEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValijaEurs to fetch.
     */
    orderBy?: ValijaEurOrderByWithRelationInput | ValijaEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ValijaEurs.
     */
    cursor?: ValijaEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValijaEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValijaEurs.
     */
    skip?: number
    distinct?: ValijaEurScalarFieldEnum | ValijaEurScalarFieldEnum[]
  }

  /**
   * ValijaEur create
   */
  export type ValijaEurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * The data needed to create a ValijaEur.
     */
    data?: XOR<ValijaEurCreateInput, ValijaEurUncheckedCreateInput>
  }

  /**
   * ValijaEur createMany
   */
  export type ValijaEurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ValijaEurs.
     */
    data: ValijaEurCreateManyInput | ValijaEurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValijaEur createManyAndReturn
   */
  export type ValijaEurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * The data used to create many ValijaEurs.
     */
    data: ValijaEurCreateManyInput | ValijaEurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValijaEur update
   */
  export type ValijaEurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * The data needed to update a ValijaEur.
     */
    data: XOR<ValijaEurUpdateInput, ValijaEurUncheckedUpdateInput>
    /**
     * Choose, which ValijaEur to update.
     */
    where: ValijaEurWhereUniqueInput
  }

  /**
   * ValijaEur updateMany
   */
  export type ValijaEurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ValijaEurs.
     */
    data: XOR<ValijaEurUpdateManyMutationInput, ValijaEurUncheckedUpdateManyInput>
    /**
     * Filter which ValijaEurs to update
     */
    where?: ValijaEurWhereInput
    /**
     * Limit how many ValijaEurs to update.
     */
    limit?: number
  }

  /**
   * ValijaEur updateManyAndReturn
   */
  export type ValijaEurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * The data used to update ValijaEurs.
     */
    data: XOR<ValijaEurUpdateManyMutationInput, ValijaEurUncheckedUpdateManyInput>
    /**
     * Filter which ValijaEurs to update
     */
    where?: ValijaEurWhereInput
    /**
     * Limit how many ValijaEurs to update.
     */
    limit?: number
  }

  /**
   * ValijaEur upsert
   */
  export type ValijaEurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * The filter to search for the ValijaEur to update in case it exists.
     */
    where: ValijaEurWhereUniqueInput
    /**
     * In case the ValijaEur found by the `where` argument doesn't exist, create a new ValijaEur with this data.
     */
    create: XOR<ValijaEurCreateInput, ValijaEurUncheckedCreateInput>
    /**
     * In case the ValijaEur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValijaEurUpdateInput, ValijaEurUncheckedUpdateInput>
  }

  /**
   * ValijaEur delete
   */
  export type ValijaEurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
    /**
     * Filter which ValijaEur to delete.
     */
    where: ValijaEurWhereUniqueInput
  }

  /**
   * ValijaEur deleteMany
   */
  export type ValijaEurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValijaEurs to delete
     */
    where?: ValijaEurWhereInput
    /**
     * Limit how many ValijaEurs to delete.
     */
    limit?: number
  }

  /**
   * ValijaEur.transaccionEur
   */
  export type ValijaEur$transaccionEurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    where?: transaccionesEurWhereInput
    orderBy?: transaccionesEurOrderByWithRelationInput | transaccionesEurOrderByWithRelationInput[]
    cursor?: transaccionesEurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionesEurScalarFieldEnum | TransaccionesEurScalarFieldEnum[]
  }

  /**
   * ValijaEur.valija
   */
  export type ValijaEur$valijaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valija
     */
    select?: ValijaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valija
     */
    omit?: ValijaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaInclude<ExtArgs> | null
    where?: ValijaWhereInput
  }

  /**
   * ValijaEur without action
   */
  export type ValijaEurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValijaEur
     */
    select?: ValijaEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValijaEur
     */
    omit?: ValijaEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValijaEurInclude<ExtArgs> | null
  }


  /**
   * Model transaccionesUsd
   */

  export type AggregateTransaccionesUsd = {
    _count: TransaccionesUsdCountAggregateOutputType | null
    _avg: TransaccionesUsdAvgAggregateOutputType | null
    _sum: TransaccionesUsdSumAggregateOutputType | null
    _min: TransaccionesUsdMinAggregateOutputType | null
    _max: TransaccionesUsdMaxAggregateOutputType | null
  }

  export type TransaccionesUsdAvgAggregateOutputType = {
    id: number | null
    D1: number | null
    D2: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaUsdId: number | null
  }

  export type TransaccionesUsdSumAggregateOutputType = {
    id: number | null
    D1: number | null
    D2: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaUsdId: number | null
  }

  export type TransaccionesUsdMinAggregateOutputType = {
    id: number | null
    D1: number | null
    D2: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaUsdId: number | null
  }

  export type TransaccionesUsdMaxAggregateOutputType = {
    id: number | null
    D1: number | null
    D2: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaUsdId: number | null
  }

  export type TransaccionesUsdCountAggregateOutputType = {
    id: number
    D1: number
    D2: number
    D5: number
    D10: number
    D20: number
    D50: number
    D100: number
    valijaUsdId: number
    _all: number
  }


  export type TransaccionesUsdAvgAggregateInputType = {
    id?: true
    D1?: true
    D2?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaUsdId?: true
  }

  export type TransaccionesUsdSumAggregateInputType = {
    id?: true
    D1?: true
    D2?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaUsdId?: true
  }

  export type TransaccionesUsdMinAggregateInputType = {
    id?: true
    D1?: true
    D2?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaUsdId?: true
  }

  export type TransaccionesUsdMaxAggregateInputType = {
    id?: true
    D1?: true
    D2?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaUsdId?: true
  }

  export type TransaccionesUsdCountAggregateInputType = {
    id?: true
    D1?: true
    D2?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaUsdId?: true
    _all?: true
  }

  export type TransaccionesUsdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccionesUsd to aggregate.
     */
    where?: transaccionesUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesUsds to fetch.
     */
    orderBy?: transaccionesUsdOrderByWithRelationInput | transaccionesUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaccionesUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesUsds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaccionesUsds
    **/
    _count?: true | TransaccionesUsdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaccionesUsdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaccionesUsdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaccionesUsdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaccionesUsdMaxAggregateInputType
  }

  export type GetTransaccionesUsdAggregateType<T extends TransaccionesUsdAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaccionesUsd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaccionesUsd[P]>
      : GetScalarType<T[P], AggregateTransaccionesUsd[P]>
  }




  export type transaccionesUsdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionesUsdWhereInput
    orderBy?: transaccionesUsdOrderByWithAggregationInput | transaccionesUsdOrderByWithAggregationInput[]
    by: TransaccionesUsdScalarFieldEnum[] | TransaccionesUsdScalarFieldEnum
    having?: transaccionesUsdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaccionesUsdCountAggregateInputType | true
    _avg?: TransaccionesUsdAvgAggregateInputType
    _sum?: TransaccionesUsdSumAggregateInputType
    _min?: TransaccionesUsdMinAggregateInputType
    _max?: TransaccionesUsdMaxAggregateInputType
  }

  export type TransaccionesUsdGroupByOutputType = {
    id: number
    D1: number
    D2: number
    D5: number
    D10: number
    D20: number
    D50: number
    D100: number
    valijaUsdId: number
    _count: TransaccionesUsdCountAggregateOutputType | null
    _avg: TransaccionesUsdAvgAggregateOutputType | null
    _sum: TransaccionesUsdSumAggregateOutputType | null
    _min: TransaccionesUsdMinAggregateOutputType | null
    _max: TransaccionesUsdMaxAggregateOutputType | null
  }

  type GetTransaccionesUsdGroupByPayload<T extends transaccionesUsdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaccionesUsdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaccionesUsdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaccionesUsdGroupByOutputType[P]>
            : GetScalarType<T[P], TransaccionesUsdGroupByOutputType[P]>
        }
      >
    >


  export type transaccionesUsdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D1?: boolean
    D2?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaUsdId?: boolean
    valijaUsd?: boolean | ValijaUsdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesUsd"]>

  export type transaccionesUsdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D1?: boolean
    D2?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaUsdId?: boolean
    valijaUsd?: boolean | ValijaUsdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesUsd"]>

  export type transaccionesUsdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D1?: boolean
    D2?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaUsdId?: boolean
    valijaUsd?: boolean | ValijaUsdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesUsd"]>

  export type transaccionesUsdSelectScalar = {
    id?: boolean
    D1?: boolean
    D2?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaUsdId?: boolean
  }

  export type transaccionesUsdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "D1" | "D2" | "D5" | "D10" | "D20" | "D50" | "D100" | "valijaUsdId", ExtArgs["result"]["transaccionesUsd"]>
  export type transaccionesUsdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaUsd?: boolean | ValijaUsdDefaultArgs<ExtArgs>
  }
  export type transaccionesUsdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaUsd?: boolean | ValijaUsdDefaultArgs<ExtArgs>
  }
  export type transaccionesUsdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaUsd?: boolean | ValijaUsdDefaultArgs<ExtArgs>
  }

  export type $transaccionesUsdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaccionesUsd"
    objects: {
      valijaUsd: Prisma.$ValijaUsdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      D1: number
      D2: number
      D5: number
      D10: number
      D20: number
      D50: number
      D100: number
      valijaUsdId: number
    }, ExtArgs["result"]["transaccionesUsd"]>
    composites: {}
  }

  type transaccionesUsdGetPayload<S extends boolean | null | undefined | transaccionesUsdDefaultArgs> = $Result.GetResult<Prisma.$transaccionesUsdPayload, S>

  type transaccionesUsdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaccionesUsdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaccionesUsdCountAggregateInputType | true
    }

  export interface transaccionesUsdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaccionesUsd'], meta: { name: 'transaccionesUsd' } }
    /**
     * Find zero or one TransaccionesUsd that matches the filter.
     * @param {transaccionesUsdFindUniqueArgs} args - Arguments to find a TransaccionesUsd
     * @example
     * // Get one TransaccionesUsd
     * const transaccionesUsd = await prisma.transaccionesUsd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaccionesUsdFindUniqueArgs>(args: SelectSubset<T, transaccionesUsdFindUniqueArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TransaccionesUsd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaccionesUsdFindUniqueOrThrowArgs} args - Arguments to find a TransaccionesUsd
     * @example
     * // Get one TransaccionesUsd
     * const transaccionesUsd = await prisma.transaccionesUsd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaccionesUsdFindUniqueOrThrowArgs>(args: SelectSubset<T, transaccionesUsdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TransaccionesUsd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesUsdFindFirstArgs} args - Arguments to find a TransaccionesUsd
     * @example
     * // Get one TransaccionesUsd
     * const transaccionesUsd = await prisma.transaccionesUsd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaccionesUsdFindFirstArgs>(args?: SelectSubset<T, transaccionesUsdFindFirstArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TransaccionesUsd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesUsdFindFirstOrThrowArgs} args - Arguments to find a TransaccionesUsd
     * @example
     * // Get one TransaccionesUsd
     * const transaccionesUsd = await prisma.transaccionesUsd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaccionesUsdFindFirstOrThrowArgs>(args?: SelectSubset<T, transaccionesUsdFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TransaccionesUsds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesUsdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaccionesUsds
     * const transaccionesUsds = await prisma.transaccionesUsd.findMany()
     * 
     * // Get first 10 TransaccionesUsds
     * const transaccionesUsds = await prisma.transaccionesUsd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaccionesUsdWithIdOnly = await prisma.transaccionesUsd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaccionesUsdFindManyArgs>(args?: SelectSubset<T, transaccionesUsdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TransaccionesUsd.
     * @param {transaccionesUsdCreateArgs} args - Arguments to create a TransaccionesUsd.
     * @example
     * // Create one TransaccionesUsd
     * const TransaccionesUsd = await prisma.transaccionesUsd.create({
     *   data: {
     *     // ... data to create a TransaccionesUsd
     *   }
     * })
     * 
     */
    create<T extends transaccionesUsdCreateArgs>(args: SelectSubset<T, transaccionesUsdCreateArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TransaccionesUsds.
     * @param {transaccionesUsdCreateManyArgs} args - Arguments to create many TransaccionesUsds.
     * @example
     * // Create many TransaccionesUsds
     * const transaccionesUsd = await prisma.transaccionesUsd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaccionesUsdCreateManyArgs>(args?: SelectSubset<T, transaccionesUsdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaccionesUsds and returns the data saved in the database.
     * @param {transaccionesUsdCreateManyAndReturnArgs} args - Arguments to create many TransaccionesUsds.
     * @example
     * // Create many TransaccionesUsds
     * const transaccionesUsd = await prisma.transaccionesUsd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaccionesUsds and only return the `id`
     * const transaccionesUsdWithIdOnly = await prisma.transaccionesUsd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaccionesUsdCreateManyAndReturnArgs>(args?: SelectSubset<T, transaccionesUsdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TransaccionesUsd.
     * @param {transaccionesUsdDeleteArgs} args - Arguments to delete one TransaccionesUsd.
     * @example
     * // Delete one TransaccionesUsd
     * const TransaccionesUsd = await prisma.transaccionesUsd.delete({
     *   where: {
     *     // ... filter to delete one TransaccionesUsd
     *   }
     * })
     * 
     */
    delete<T extends transaccionesUsdDeleteArgs>(args: SelectSubset<T, transaccionesUsdDeleteArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TransaccionesUsd.
     * @param {transaccionesUsdUpdateArgs} args - Arguments to update one TransaccionesUsd.
     * @example
     * // Update one TransaccionesUsd
     * const transaccionesUsd = await prisma.transaccionesUsd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaccionesUsdUpdateArgs>(args: SelectSubset<T, transaccionesUsdUpdateArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TransaccionesUsds.
     * @param {transaccionesUsdDeleteManyArgs} args - Arguments to filter TransaccionesUsds to delete.
     * @example
     * // Delete a few TransaccionesUsds
     * const { count } = await prisma.transaccionesUsd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaccionesUsdDeleteManyArgs>(args?: SelectSubset<T, transaccionesUsdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaccionesUsds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesUsdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaccionesUsds
     * const transaccionesUsd = await prisma.transaccionesUsd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaccionesUsdUpdateManyArgs>(args: SelectSubset<T, transaccionesUsdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaccionesUsds and returns the data updated in the database.
     * @param {transaccionesUsdUpdateManyAndReturnArgs} args - Arguments to update many TransaccionesUsds.
     * @example
     * // Update many TransaccionesUsds
     * const transaccionesUsd = await prisma.transaccionesUsd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaccionesUsds and only return the `id`
     * const transaccionesUsdWithIdOnly = await prisma.transaccionesUsd.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaccionesUsdUpdateManyAndReturnArgs>(args: SelectSubset<T, transaccionesUsdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TransaccionesUsd.
     * @param {transaccionesUsdUpsertArgs} args - Arguments to update or create a TransaccionesUsd.
     * @example
     * // Update or create a TransaccionesUsd
     * const transaccionesUsd = await prisma.transaccionesUsd.upsert({
     *   create: {
     *     // ... data to create a TransaccionesUsd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaccionesUsd we want to update
     *   }
     * })
     */
    upsert<T extends transaccionesUsdUpsertArgs>(args: SelectSubset<T, transaccionesUsdUpsertArgs<ExtArgs>>): Prisma__transaccionesUsdClient<$Result.GetResult<Prisma.$transaccionesUsdPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TransaccionesUsds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesUsdCountArgs} args - Arguments to filter TransaccionesUsds to count.
     * @example
     * // Count the number of TransaccionesUsds
     * const count = await prisma.transaccionesUsd.count({
     *   where: {
     *     // ... the filter for the TransaccionesUsds we want to count
     *   }
     * })
    **/
    count<T extends transaccionesUsdCountArgs>(
      args?: Subset<T, transaccionesUsdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaccionesUsdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaccionesUsd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionesUsdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaccionesUsdAggregateArgs>(args: Subset<T, TransaccionesUsdAggregateArgs>): Prisma.PrismaPromise<GetTransaccionesUsdAggregateType<T>>

    /**
     * Group by TransaccionesUsd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesUsdGroupByArgs} args - Group by arguments.
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
      T extends transaccionesUsdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaccionesUsdGroupByArgs['orderBy'] }
        : { orderBy?: transaccionesUsdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaccionesUsdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionesUsdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaccionesUsd model
   */
  readonly fields: transaccionesUsdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaccionesUsd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaccionesUsdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    valijaUsd<T extends ValijaUsdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ValijaUsdDefaultArgs<ExtArgs>>): Prisma__ValijaUsdClient<$Result.GetResult<Prisma.$ValijaUsdPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the transaccionesUsd model
   */ 
  interface transaccionesUsdFieldRefs {
    readonly id: FieldRef<"transaccionesUsd", 'Int'>
    readonly D1: FieldRef<"transaccionesUsd", 'Int'>
    readonly D2: FieldRef<"transaccionesUsd", 'Int'>
    readonly D5: FieldRef<"transaccionesUsd", 'Int'>
    readonly D10: FieldRef<"transaccionesUsd", 'Int'>
    readonly D20: FieldRef<"transaccionesUsd", 'Int'>
    readonly D50: FieldRef<"transaccionesUsd", 'Int'>
    readonly D100: FieldRef<"transaccionesUsd", 'Int'>
    readonly valijaUsdId: FieldRef<"transaccionesUsd", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaccionesUsd findUnique
   */
  export type transaccionesUsdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesUsd to fetch.
     */
    where: transaccionesUsdWhereUniqueInput
  }

  /**
   * transaccionesUsd findUniqueOrThrow
   */
  export type transaccionesUsdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesUsd to fetch.
     */
    where: transaccionesUsdWhereUniqueInput
  }

  /**
   * transaccionesUsd findFirst
   */
  export type transaccionesUsdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesUsd to fetch.
     */
    where?: transaccionesUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesUsds to fetch.
     */
    orderBy?: transaccionesUsdOrderByWithRelationInput | transaccionesUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccionesUsds.
     */
    cursor?: transaccionesUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesUsds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccionesUsds.
     */
    distinct?: TransaccionesUsdScalarFieldEnum | TransaccionesUsdScalarFieldEnum[]
  }

  /**
   * transaccionesUsd findFirstOrThrow
   */
  export type transaccionesUsdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesUsd to fetch.
     */
    where?: transaccionesUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesUsds to fetch.
     */
    orderBy?: transaccionesUsdOrderByWithRelationInput | transaccionesUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccionesUsds.
     */
    cursor?: transaccionesUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesUsds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccionesUsds.
     */
    distinct?: TransaccionesUsdScalarFieldEnum | TransaccionesUsdScalarFieldEnum[]
  }

  /**
   * transaccionesUsd findMany
   */
  export type transaccionesUsdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesUsds to fetch.
     */
    where?: transaccionesUsdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesUsds to fetch.
     */
    orderBy?: transaccionesUsdOrderByWithRelationInput | transaccionesUsdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaccionesUsds.
     */
    cursor?: transaccionesUsdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesUsds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesUsds.
     */
    skip?: number
    distinct?: TransaccionesUsdScalarFieldEnum | TransaccionesUsdScalarFieldEnum[]
  }

  /**
   * transaccionesUsd create
   */
  export type transaccionesUsdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * The data needed to create a transaccionesUsd.
     */
    data: XOR<transaccionesUsdCreateInput, transaccionesUsdUncheckedCreateInput>
  }

  /**
   * transaccionesUsd createMany
   */
  export type transaccionesUsdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaccionesUsds.
     */
    data: transaccionesUsdCreateManyInput | transaccionesUsdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaccionesUsd createManyAndReturn
   */
  export type transaccionesUsdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * The data used to create many transaccionesUsds.
     */
    data: transaccionesUsdCreateManyInput | transaccionesUsdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccionesUsd update
   */
  export type transaccionesUsdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * The data needed to update a transaccionesUsd.
     */
    data: XOR<transaccionesUsdUpdateInput, transaccionesUsdUncheckedUpdateInput>
    /**
     * Choose, which transaccionesUsd to update.
     */
    where: transaccionesUsdWhereUniqueInput
  }

  /**
   * transaccionesUsd updateMany
   */
  export type transaccionesUsdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaccionesUsds.
     */
    data: XOR<transaccionesUsdUpdateManyMutationInput, transaccionesUsdUncheckedUpdateManyInput>
    /**
     * Filter which transaccionesUsds to update
     */
    where?: transaccionesUsdWhereInput
    /**
     * Limit how many transaccionesUsds to update.
     */
    limit?: number
  }

  /**
   * transaccionesUsd updateManyAndReturn
   */
  export type transaccionesUsdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * The data used to update transaccionesUsds.
     */
    data: XOR<transaccionesUsdUpdateManyMutationInput, transaccionesUsdUncheckedUpdateManyInput>
    /**
     * Filter which transaccionesUsds to update
     */
    where?: transaccionesUsdWhereInput
    /**
     * Limit how many transaccionesUsds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccionesUsd upsert
   */
  export type transaccionesUsdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * The filter to search for the transaccionesUsd to update in case it exists.
     */
    where: transaccionesUsdWhereUniqueInput
    /**
     * In case the transaccionesUsd found by the `where` argument doesn't exist, create a new transaccionesUsd with this data.
     */
    create: XOR<transaccionesUsdCreateInput, transaccionesUsdUncheckedCreateInput>
    /**
     * In case the transaccionesUsd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaccionesUsdUpdateInput, transaccionesUsdUncheckedUpdateInput>
  }

  /**
   * transaccionesUsd delete
   */
  export type transaccionesUsdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
    /**
     * Filter which transaccionesUsd to delete.
     */
    where: transaccionesUsdWhereUniqueInput
  }

  /**
   * transaccionesUsd deleteMany
   */
  export type transaccionesUsdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccionesUsds to delete
     */
    where?: transaccionesUsdWhereInput
    /**
     * Limit how many transaccionesUsds to delete.
     */
    limit?: number
  }

  /**
   * transaccionesUsd without action
   */
  export type transaccionesUsdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesUsd
     */
    select?: transaccionesUsdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesUsd
     */
    omit?: transaccionesUsdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesUsdInclude<ExtArgs> | null
  }


  /**
   * Model transaccionesDop
   */

  export type AggregateTransaccionesDop = {
    _count: TransaccionesDopCountAggregateOutputType | null
    _avg: TransaccionesDopAvgAggregateOutputType | null
    _sum: TransaccionesDopSumAggregateOutputType | null
    _min: TransaccionesDopMinAggregateOutputType | null
    _max: TransaccionesDopMaxAggregateOutputType | null
  }

  export type TransaccionesDopAvgAggregateOutputType = {
    id: number | null
    D1: number | null
    D5: number | null
    D10: number | null
    D25: number | null
    D50: number | null
    D100: number | null
    D200: number | null
    D500: number | null
    D1000: number | null
    D2000: number | null
    valijaDopId: number | null
  }

  export type TransaccionesDopSumAggregateOutputType = {
    id: number | null
    D1: number | null
    D5: number | null
    D10: number | null
    D25: number | null
    D50: number | null
    D100: number | null
    D200: number | null
    D500: number | null
    D1000: number | null
    D2000: number | null
    valijaDopId: number | null
  }

  export type TransaccionesDopMinAggregateOutputType = {
    id: number | null
    D1: number | null
    D5: number | null
    D10: number | null
    D25: number | null
    D50: number | null
    D100: number | null
    D200: number | null
    D500: number | null
    D1000: number | null
    D2000: number | null
    valijaDopId: number | null
  }

  export type TransaccionesDopMaxAggregateOutputType = {
    id: number | null
    D1: number | null
    D5: number | null
    D10: number | null
    D25: number | null
    D50: number | null
    D100: number | null
    D200: number | null
    D500: number | null
    D1000: number | null
    D2000: number | null
    valijaDopId: number | null
  }

  export type TransaccionesDopCountAggregateOutputType = {
    id: number
    D1: number
    D5: number
    D10: number
    D25: number
    D50: number
    D100: number
    D200: number
    D500: number
    D1000: number
    D2000: number
    valijaDopId: number
    _all: number
  }


  export type TransaccionesDopAvgAggregateInputType = {
    id?: true
    D1?: true
    D5?: true
    D10?: true
    D25?: true
    D50?: true
    D100?: true
    D200?: true
    D500?: true
    D1000?: true
    D2000?: true
    valijaDopId?: true
  }

  export type TransaccionesDopSumAggregateInputType = {
    id?: true
    D1?: true
    D5?: true
    D10?: true
    D25?: true
    D50?: true
    D100?: true
    D200?: true
    D500?: true
    D1000?: true
    D2000?: true
    valijaDopId?: true
  }

  export type TransaccionesDopMinAggregateInputType = {
    id?: true
    D1?: true
    D5?: true
    D10?: true
    D25?: true
    D50?: true
    D100?: true
    D200?: true
    D500?: true
    D1000?: true
    D2000?: true
    valijaDopId?: true
  }

  export type TransaccionesDopMaxAggregateInputType = {
    id?: true
    D1?: true
    D5?: true
    D10?: true
    D25?: true
    D50?: true
    D100?: true
    D200?: true
    D500?: true
    D1000?: true
    D2000?: true
    valijaDopId?: true
  }

  export type TransaccionesDopCountAggregateInputType = {
    id?: true
    D1?: true
    D5?: true
    D10?: true
    D25?: true
    D50?: true
    D100?: true
    D200?: true
    D500?: true
    D1000?: true
    D2000?: true
    valijaDopId?: true
    _all?: true
  }

  export type TransaccionesDopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccionesDop to aggregate.
     */
    where?: transaccionesDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesDops to fetch.
     */
    orderBy?: transaccionesDopOrderByWithRelationInput | transaccionesDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaccionesDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesDops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaccionesDops
    **/
    _count?: true | TransaccionesDopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaccionesDopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaccionesDopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaccionesDopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaccionesDopMaxAggregateInputType
  }

  export type GetTransaccionesDopAggregateType<T extends TransaccionesDopAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaccionesDop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaccionesDop[P]>
      : GetScalarType<T[P], AggregateTransaccionesDop[P]>
  }




  export type transaccionesDopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionesDopWhereInput
    orderBy?: transaccionesDopOrderByWithAggregationInput | transaccionesDopOrderByWithAggregationInput[]
    by: TransaccionesDopScalarFieldEnum[] | TransaccionesDopScalarFieldEnum
    having?: transaccionesDopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaccionesDopCountAggregateInputType | true
    _avg?: TransaccionesDopAvgAggregateInputType
    _sum?: TransaccionesDopSumAggregateInputType
    _min?: TransaccionesDopMinAggregateInputType
    _max?: TransaccionesDopMaxAggregateInputType
  }

  export type TransaccionesDopGroupByOutputType = {
    id: number
    D1: number
    D5: number
    D10: number
    D25: number
    D50: number
    D100: number
    D200: number
    D500: number
    D1000: number
    D2000: number
    valijaDopId: number
    _count: TransaccionesDopCountAggregateOutputType | null
    _avg: TransaccionesDopAvgAggregateOutputType | null
    _sum: TransaccionesDopSumAggregateOutputType | null
    _min: TransaccionesDopMinAggregateOutputType | null
    _max: TransaccionesDopMaxAggregateOutputType | null
  }

  type GetTransaccionesDopGroupByPayload<T extends transaccionesDopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaccionesDopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaccionesDopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaccionesDopGroupByOutputType[P]>
            : GetScalarType<T[P], TransaccionesDopGroupByOutputType[P]>
        }
      >
    >


  export type transaccionesDopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D1?: boolean
    D5?: boolean
    D10?: boolean
    D25?: boolean
    D50?: boolean
    D100?: boolean
    D200?: boolean
    D500?: boolean
    D1000?: boolean
    D2000?: boolean
    valijaDopId?: boolean
    valijaDop?: boolean | ValijaDopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesDop"]>

  export type transaccionesDopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D1?: boolean
    D5?: boolean
    D10?: boolean
    D25?: boolean
    D50?: boolean
    D100?: boolean
    D200?: boolean
    D500?: boolean
    D1000?: boolean
    D2000?: boolean
    valijaDopId?: boolean
    valijaDop?: boolean | ValijaDopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesDop"]>

  export type transaccionesDopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D1?: boolean
    D5?: boolean
    D10?: boolean
    D25?: boolean
    D50?: boolean
    D100?: boolean
    D200?: boolean
    D500?: boolean
    D1000?: boolean
    D2000?: boolean
    valijaDopId?: boolean
    valijaDop?: boolean | ValijaDopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesDop"]>

  export type transaccionesDopSelectScalar = {
    id?: boolean
    D1?: boolean
    D5?: boolean
    D10?: boolean
    D25?: boolean
    D50?: boolean
    D100?: boolean
    D200?: boolean
    D500?: boolean
    D1000?: boolean
    D2000?: boolean
    valijaDopId?: boolean
  }

  export type transaccionesDopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "D1" | "D5" | "D10" | "D25" | "D50" | "D100" | "D200" | "D500" | "D1000" | "D2000" | "valijaDopId", ExtArgs["result"]["transaccionesDop"]>
  export type transaccionesDopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaDop?: boolean | ValijaDopDefaultArgs<ExtArgs>
  }
  export type transaccionesDopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaDop?: boolean | ValijaDopDefaultArgs<ExtArgs>
  }
  export type transaccionesDopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaDop?: boolean | ValijaDopDefaultArgs<ExtArgs>
  }

  export type $transaccionesDopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaccionesDop"
    objects: {
      valijaDop: Prisma.$ValijaDopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      D1: number
      D5: number
      D10: number
      D25: number
      D50: number
      D100: number
      D200: number
      D500: number
      D1000: number
      D2000: number
      valijaDopId: number
    }, ExtArgs["result"]["transaccionesDop"]>
    composites: {}
  }

  type transaccionesDopGetPayload<S extends boolean | null | undefined | transaccionesDopDefaultArgs> = $Result.GetResult<Prisma.$transaccionesDopPayload, S>

  type transaccionesDopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaccionesDopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaccionesDopCountAggregateInputType | true
    }

  export interface transaccionesDopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaccionesDop'], meta: { name: 'transaccionesDop' } }
    /**
     * Find zero or one TransaccionesDop that matches the filter.
     * @param {transaccionesDopFindUniqueArgs} args - Arguments to find a TransaccionesDop
     * @example
     * // Get one TransaccionesDop
     * const transaccionesDop = await prisma.transaccionesDop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaccionesDopFindUniqueArgs>(args: SelectSubset<T, transaccionesDopFindUniqueArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TransaccionesDop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaccionesDopFindUniqueOrThrowArgs} args - Arguments to find a TransaccionesDop
     * @example
     * // Get one TransaccionesDop
     * const transaccionesDop = await prisma.transaccionesDop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaccionesDopFindUniqueOrThrowArgs>(args: SelectSubset<T, transaccionesDopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TransaccionesDop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesDopFindFirstArgs} args - Arguments to find a TransaccionesDop
     * @example
     * // Get one TransaccionesDop
     * const transaccionesDop = await prisma.transaccionesDop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaccionesDopFindFirstArgs>(args?: SelectSubset<T, transaccionesDopFindFirstArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TransaccionesDop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesDopFindFirstOrThrowArgs} args - Arguments to find a TransaccionesDop
     * @example
     * // Get one TransaccionesDop
     * const transaccionesDop = await prisma.transaccionesDop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaccionesDopFindFirstOrThrowArgs>(args?: SelectSubset<T, transaccionesDopFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TransaccionesDops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesDopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaccionesDops
     * const transaccionesDops = await prisma.transaccionesDop.findMany()
     * 
     * // Get first 10 TransaccionesDops
     * const transaccionesDops = await prisma.transaccionesDop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaccionesDopWithIdOnly = await prisma.transaccionesDop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaccionesDopFindManyArgs>(args?: SelectSubset<T, transaccionesDopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TransaccionesDop.
     * @param {transaccionesDopCreateArgs} args - Arguments to create a TransaccionesDop.
     * @example
     * // Create one TransaccionesDop
     * const TransaccionesDop = await prisma.transaccionesDop.create({
     *   data: {
     *     // ... data to create a TransaccionesDop
     *   }
     * })
     * 
     */
    create<T extends transaccionesDopCreateArgs>(args: SelectSubset<T, transaccionesDopCreateArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TransaccionesDops.
     * @param {transaccionesDopCreateManyArgs} args - Arguments to create many TransaccionesDops.
     * @example
     * // Create many TransaccionesDops
     * const transaccionesDop = await prisma.transaccionesDop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaccionesDopCreateManyArgs>(args?: SelectSubset<T, transaccionesDopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaccionesDops and returns the data saved in the database.
     * @param {transaccionesDopCreateManyAndReturnArgs} args - Arguments to create many TransaccionesDops.
     * @example
     * // Create many TransaccionesDops
     * const transaccionesDop = await prisma.transaccionesDop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaccionesDops and only return the `id`
     * const transaccionesDopWithIdOnly = await prisma.transaccionesDop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaccionesDopCreateManyAndReturnArgs>(args?: SelectSubset<T, transaccionesDopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TransaccionesDop.
     * @param {transaccionesDopDeleteArgs} args - Arguments to delete one TransaccionesDop.
     * @example
     * // Delete one TransaccionesDop
     * const TransaccionesDop = await prisma.transaccionesDop.delete({
     *   where: {
     *     // ... filter to delete one TransaccionesDop
     *   }
     * })
     * 
     */
    delete<T extends transaccionesDopDeleteArgs>(args: SelectSubset<T, transaccionesDopDeleteArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TransaccionesDop.
     * @param {transaccionesDopUpdateArgs} args - Arguments to update one TransaccionesDop.
     * @example
     * // Update one TransaccionesDop
     * const transaccionesDop = await prisma.transaccionesDop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaccionesDopUpdateArgs>(args: SelectSubset<T, transaccionesDopUpdateArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TransaccionesDops.
     * @param {transaccionesDopDeleteManyArgs} args - Arguments to filter TransaccionesDops to delete.
     * @example
     * // Delete a few TransaccionesDops
     * const { count } = await prisma.transaccionesDop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaccionesDopDeleteManyArgs>(args?: SelectSubset<T, transaccionesDopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaccionesDops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesDopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaccionesDops
     * const transaccionesDop = await prisma.transaccionesDop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaccionesDopUpdateManyArgs>(args: SelectSubset<T, transaccionesDopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaccionesDops and returns the data updated in the database.
     * @param {transaccionesDopUpdateManyAndReturnArgs} args - Arguments to update many TransaccionesDops.
     * @example
     * // Update many TransaccionesDops
     * const transaccionesDop = await prisma.transaccionesDop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaccionesDops and only return the `id`
     * const transaccionesDopWithIdOnly = await prisma.transaccionesDop.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaccionesDopUpdateManyAndReturnArgs>(args: SelectSubset<T, transaccionesDopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TransaccionesDop.
     * @param {transaccionesDopUpsertArgs} args - Arguments to update or create a TransaccionesDop.
     * @example
     * // Update or create a TransaccionesDop
     * const transaccionesDop = await prisma.transaccionesDop.upsert({
     *   create: {
     *     // ... data to create a TransaccionesDop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaccionesDop we want to update
     *   }
     * })
     */
    upsert<T extends transaccionesDopUpsertArgs>(args: SelectSubset<T, transaccionesDopUpsertArgs<ExtArgs>>): Prisma__transaccionesDopClient<$Result.GetResult<Prisma.$transaccionesDopPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TransaccionesDops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesDopCountArgs} args - Arguments to filter TransaccionesDops to count.
     * @example
     * // Count the number of TransaccionesDops
     * const count = await prisma.transaccionesDop.count({
     *   where: {
     *     // ... the filter for the TransaccionesDops we want to count
     *   }
     * })
    **/
    count<T extends transaccionesDopCountArgs>(
      args?: Subset<T, transaccionesDopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaccionesDopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaccionesDop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionesDopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaccionesDopAggregateArgs>(args: Subset<T, TransaccionesDopAggregateArgs>): Prisma.PrismaPromise<GetTransaccionesDopAggregateType<T>>

    /**
     * Group by TransaccionesDop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesDopGroupByArgs} args - Group by arguments.
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
      T extends transaccionesDopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaccionesDopGroupByArgs['orderBy'] }
        : { orderBy?: transaccionesDopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaccionesDopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionesDopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaccionesDop model
   */
  readonly fields: transaccionesDopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaccionesDop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaccionesDopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    valijaDop<T extends ValijaDopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ValijaDopDefaultArgs<ExtArgs>>): Prisma__ValijaDopClient<$Result.GetResult<Prisma.$ValijaDopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the transaccionesDop model
   */ 
  interface transaccionesDopFieldRefs {
    readonly id: FieldRef<"transaccionesDop", 'Int'>
    readonly D1: FieldRef<"transaccionesDop", 'Int'>
    readonly D5: FieldRef<"transaccionesDop", 'Int'>
    readonly D10: FieldRef<"transaccionesDop", 'Int'>
    readonly D25: FieldRef<"transaccionesDop", 'Int'>
    readonly D50: FieldRef<"transaccionesDop", 'Int'>
    readonly D100: FieldRef<"transaccionesDop", 'Int'>
    readonly D200: FieldRef<"transaccionesDop", 'Int'>
    readonly D500: FieldRef<"transaccionesDop", 'Int'>
    readonly D1000: FieldRef<"transaccionesDop", 'Int'>
    readonly D2000: FieldRef<"transaccionesDop", 'Int'>
    readonly valijaDopId: FieldRef<"transaccionesDop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaccionesDop findUnique
   */
  export type transaccionesDopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesDop to fetch.
     */
    where: transaccionesDopWhereUniqueInput
  }

  /**
   * transaccionesDop findUniqueOrThrow
   */
  export type transaccionesDopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesDop to fetch.
     */
    where: transaccionesDopWhereUniqueInput
  }

  /**
   * transaccionesDop findFirst
   */
  export type transaccionesDopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesDop to fetch.
     */
    where?: transaccionesDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesDops to fetch.
     */
    orderBy?: transaccionesDopOrderByWithRelationInput | transaccionesDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccionesDops.
     */
    cursor?: transaccionesDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesDops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccionesDops.
     */
    distinct?: TransaccionesDopScalarFieldEnum | TransaccionesDopScalarFieldEnum[]
  }

  /**
   * transaccionesDop findFirstOrThrow
   */
  export type transaccionesDopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesDop to fetch.
     */
    where?: transaccionesDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesDops to fetch.
     */
    orderBy?: transaccionesDopOrderByWithRelationInput | transaccionesDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccionesDops.
     */
    cursor?: transaccionesDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesDops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccionesDops.
     */
    distinct?: TransaccionesDopScalarFieldEnum | TransaccionesDopScalarFieldEnum[]
  }

  /**
   * transaccionesDop findMany
   */
  export type transaccionesDopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesDops to fetch.
     */
    where?: transaccionesDopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesDops to fetch.
     */
    orderBy?: transaccionesDopOrderByWithRelationInput | transaccionesDopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaccionesDops.
     */
    cursor?: transaccionesDopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesDops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesDops.
     */
    skip?: number
    distinct?: TransaccionesDopScalarFieldEnum | TransaccionesDopScalarFieldEnum[]
  }

  /**
   * transaccionesDop create
   */
  export type transaccionesDopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * The data needed to create a transaccionesDop.
     */
    data: XOR<transaccionesDopCreateInput, transaccionesDopUncheckedCreateInput>
  }

  /**
   * transaccionesDop createMany
   */
  export type transaccionesDopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaccionesDops.
     */
    data: transaccionesDopCreateManyInput | transaccionesDopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaccionesDop createManyAndReturn
   */
  export type transaccionesDopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * The data used to create many transaccionesDops.
     */
    data: transaccionesDopCreateManyInput | transaccionesDopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccionesDop update
   */
  export type transaccionesDopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * The data needed to update a transaccionesDop.
     */
    data: XOR<transaccionesDopUpdateInput, transaccionesDopUncheckedUpdateInput>
    /**
     * Choose, which transaccionesDop to update.
     */
    where: transaccionesDopWhereUniqueInput
  }

  /**
   * transaccionesDop updateMany
   */
  export type transaccionesDopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaccionesDops.
     */
    data: XOR<transaccionesDopUpdateManyMutationInput, transaccionesDopUncheckedUpdateManyInput>
    /**
     * Filter which transaccionesDops to update
     */
    where?: transaccionesDopWhereInput
    /**
     * Limit how many transaccionesDops to update.
     */
    limit?: number
  }

  /**
   * transaccionesDop updateManyAndReturn
   */
  export type transaccionesDopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * The data used to update transaccionesDops.
     */
    data: XOR<transaccionesDopUpdateManyMutationInput, transaccionesDopUncheckedUpdateManyInput>
    /**
     * Filter which transaccionesDops to update
     */
    where?: transaccionesDopWhereInput
    /**
     * Limit how many transaccionesDops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccionesDop upsert
   */
  export type transaccionesDopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * The filter to search for the transaccionesDop to update in case it exists.
     */
    where: transaccionesDopWhereUniqueInput
    /**
     * In case the transaccionesDop found by the `where` argument doesn't exist, create a new transaccionesDop with this data.
     */
    create: XOR<transaccionesDopCreateInput, transaccionesDopUncheckedCreateInput>
    /**
     * In case the transaccionesDop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaccionesDopUpdateInput, transaccionesDopUncheckedUpdateInput>
  }

  /**
   * transaccionesDop delete
   */
  export type transaccionesDopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
    /**
     * Filter which transaccionesDop to delete.
     */
    where: transaccionesDopWhereUniqueInput
  }

  /**
   * transaccionesDop deleteMany
   */
  export type transaccionesDopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccionesDops to delete
     */
    where?: transaccionesDopWhereInput
    /**
     * Limit how many transaccionesDops to delete.
     */
    limit?: number
  }

  /**
   * transaccionesDop without action
   */
  export type transaccionesDopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesDop
     */
    select?: transaccionesDopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesDop
     */
    omit?: transaccionesDopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesDopInclude<ExtArgs> | null
  }


  /**
   * Model transaccionesEur
   */

  export type AggregateTransaccionesEur = {
    _count: TransaccionesEurCountAggregateOutputType | null
    _avg: TransaccionesEurAvgAggregateOutputType | null
    _sum: TransaccionesEurSumAggregateOutputType | null
    _min: TransaccionesEurMinAggregateOutputType | null
    _max: TransaccionesEurMaxAggregateOutputType | null
  }

  export type TransaccionesEurAvgAggregateOutputType = {
    id: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaEurId: number | null
  }

  export type TransaccionesEurSumAggregateOutputType = {
    id: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaEurId: number | null
  }

  export type TransaccionesEurMinAggregateOutputType = {
    id: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaEurId: number | null
  }

  export type TransaccionesEurMaxAggregateOutputType = {
    id: number | null
    D5: number | null
    D10: number | null
    D20: number | null
    D50: number | null
    D100: number | null
    valijaEurId: number | null
  }

  export type TransaccionesEurCountAggregateOutputType = {
    id: number
    D5: number
    D10: number
    D20: number
    D50: number
    D100: number
    valijaEurId: number
    _all: number
  }


  export type TransaccionesEurAvgAggregateInputType = {
    id?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaEurId?: true
  }

  export type TransaccionesEurSumAggregateInputType = {
    id?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaEurId?: true
  }

  export type TransaccionesEurMinAggregateInputType = {
    id?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaEurId?: true
  }

  export type TransaccionesEurMaxAggregateInputType = {
    id?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaEurId?: true
  }

  export type TransaccionesEurCountAggregateInputType = {
    id?: true
    D5?: true
    D10?: true
    D20?: true
    D50?: true
    D100?: true
    valijaEurId?: true
    _all?: true
  }

  export type TransaccionesEurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccionesEur to aggregate.
     */
    where?: transaccionesEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesEurs to fetch.
     */
    orderBy?: transaccionesEurOrderByWithRelationInput | transaccionesEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaccionesEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesEurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaccionesEurs
    **/
    _count?: true | TransaccionesEurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaccionesEurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaccionesEurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaccionesEurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaccionesEurMaxAggregateInputType
  }

  export type GetTransaccionesEurAggregateType<T extends TransaccionesEurAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaccionesEur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaccionesEur[P]>
      : GetScalarType<T[P], AggregateTransaccionesEur[P]>
  }




  export type transaccionesEurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionesEurWhereInput
    orderBy?: transaccionesEurOrderByWithAggregationInput | transaccionesEurOrderByWithAggregationInput[]
    by: TransaccionesEurScalarFieldEnum[] | TransaccionesEurScalarFieldEnum
    having?: transaccionesEurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaccionesEurCountAggregateInputType | true
    _avg?: TransaccionesEurAvgAggregateInputType
    _sum?: TransaccionesEurSumAggregateInputType
    _min?: TransaccionesEurMinAggregateInputType
    _max?: TransaccionesEurMaxAggregateInputType
  }

  export type TransaccionesEurGroupByOutputType = {
    id: number
    D5: number
    D10: number
    D20: number
    D50: number
    D100: number
    valijaEurId: number
    _count: TransaccionesEurCountAggregateOutputType | null
    _avg: TransaccionesEurAvgAggregateOutputType | null
    _sum: TransaccionesEurSumAggregateOutputType | null
    _min: TransaccionesEurMinAggregateOutputType | null
    _max: TransaccionesEurMaxAggregateOutputType | null
  }

  type GetTransaccionesEurGroupByPayload<T extends transaccionesEurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaccionesEurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaccionesEurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaccionesEurGroupByOutputType[P]>
            : GetScalarType<T[P], TransaccionesEurGroupByOutputType[P]>
        }
      >
    >


  export type transaccionesEurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaEurId?: boolean
    valijaEur?: boolean | ValijaEurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesEur"]>

  export type transaccionesEurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaEurId?: boolean
    valijaEur?: boolean | ValijaEurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesEur"]>

  export type transaccionesEurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaEurId?: boolean
    valijaEur?: boolean | ValijaEurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccionesEur"]>

  export type transaccionesEurSelectScalar = {
    id?: boolean
    D5?: boolean
    D10?: boolean
    D20?: boolean
    D50?: boolean
    D100?: boolean
    valijaEurId?: boolean
  }

  export type transaccionesEurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "D5" | "D10" | "D20" | "D50" | "D100" | "valijaEurId", ExtArgs["result"]["transaccionesEur"]>
  export type transaccionesEurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaEur?: boolean | ValijaEurDefaultArgs<ExtArgs>
  }
  export type transaccionesEurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaEur?: boolean | ValijaEurDefaultArgs<ExtArgs>
  }
  export type transaccionesEurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valijaEur?: boolean | ValijaEurDefaultArgs<ExtArgs>
  }

  export type $transaccionesEurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaccionesEur"
    objects: {
      valijaEur: Prisma.$ValijaEurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      D5: number
      D10: number
      D20: number
      D50: number
      D100: number
      valijaEurId: number
    }, ExtArgs["result"]["transaccionesEur"]>
    composites: {}
  }

  type transaccionesEurGetPayload<S extends boolean | null | undefined | transaccionesEurDefaultArgs> = $Result.GetResult<Prisma.$transaccionesEurPayload, S>

  type transaccionesEurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaccionesEurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaccionesEurCountAggregateInputType | true
    }

  export interface transaccionesEurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaccionesEur'], meta: { name: 'transaccionesEur' } }
    /**
     * Find zero or one TransaccionesEur that matches the filter.
     * @param {transaccionesEurFindUniqueArgs} args - Arguments to find a TransaccionesEur
     * @example
     * // Get one TransaccionesEur
     * const transaccionesEur = await prisma.transaccionesEur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaccionesEurFindUniqueArgs>(args: SelectSubset<T, transaccionesEurFindUniqueArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TransaccionesEur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaccionesEurFindUniqueOrThrowArgs} args - Arguments to find a TransaccionesEur
     * @example
     * // Get one TransaccionesEur
     * const transaccionesEur = await prisma.transaccionesEur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaccionesEurFindUniqueOrThrowArgs>(args: SelectSubset<T, transaccionesEurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TransaccionesEur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesEurFindFirstArgs} args - Arguments to find a TransaccionesEur
     * @example
     * // Get one TransaccionesEur
     * const transaccionesEur = await prisma.transaccionesEur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaccionesEurFindFirstArgs>(args?: SelectSubset<T, transaccionesEurFindFirstArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TransaccionesEur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesEurFindFirstOrThrowArgs} args - Arguments to find a TransaccionesEur
     * @example
     * // Get one TransaccionesEur
     * const transaccionesEur = await prisma.transaccionesEur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaccionesEurFindFirstOrThrowArgs>(args?: SelectSubset<T, transaccionesEurFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TransaccionesEurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesEurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaccionesEurs
     * const transaccionesEurs = await prisma.transaccionesEur.findMany()
     * 
     * // Get first 10 TransaccionesEurs
     * const transaccionesEurs = await prisma.transaccionesEur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaccionesEurWithIdOnly = await prisma.transaccionesEur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaccionesEurFindManyArgs>(args?: SelectSubset<T, transaccionesEurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TransaccionesEur.
     * @param {transaccionesEurCreateArgs} args - Arguments to create a TransaccionesEur.
     * @example
     * // Create one TransaccionesEur
     * const TransaccionesEur = await prisma.transaccionesEur.create({
     *   data: {
     *     // ... data to create a TransaccionesEur
     *   }
     * })
     * 
     */
    create<T extends transaccionesEurCreateArgs>(args: SelectSubset<T, transaccionesEurCreateArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TransaccionesEurs.
     * @param {transaccionesEurCreateManyArgs} args - Arguments to create many TransaccionesEurs.
     * @example
     * // Create many TransaccionesEurs
     * const transaccionesEur = await prisma.transaccionesEur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaccionesEurCreateManyArgs>(args?: SelectSubset<T, transaccionesEurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaccionesEurs and returns the data saved in the database.
     * @param {transaccionesEurCreateManyAndReturnArgs} args - Arguments to create many TransaccionesEurs.
     * @example
     * // Create many TransaccionesEurs
     * const transaccionesEur = await prisma.transaccionesEur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaccionesEurs and only return the `id`
     * const transaccionesEurWithIdOnly = await prisma.transaccionesEur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaccionesEurCreateManyAndReturnArgs>(args?: SelectSubset<T, transaccionesEurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TransaccionesEur.
     * @param {transaccionesEurDeleteArgs} args - Arguments to delete one TransaccionesEur.
     * @example
     * // Delete one TransaccionesEur
     * const TransaccionesEur = await prisma.transaccionesEur.delete({
     *   where: {
     *     // ... filter to delete one TransaccionesEur
     *   }
     * })
     * 
     */
    delete<T extends transaccionesEurDeleteArgs>(args: SelectSubset<T, transaccionesEurDeleteArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TransaccionesEur.
     * @param {transaccionesEurUpdateArgs} args - Arguments to update one TransaccionesEur.
     * @example
     * // Update one TransaccionesEur
     * const transaccionesEur = await prisma.transaccionesEur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaccionesEurUpdateArgs>(args: SelectSubset<T, transaccionesEurUpdateArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TransaccionesEurs.
     * @param {transaccionesEurDeleteManyArgs} args - Arguments to filter TransaccionesEurs to delete.
     * @example
     * // Delete a few TransaccionesEurs
     * const { count } = await prisma.transaccionesEur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaccionesEurDeleteManyArgs>(args?: SelectSubset<T, transaccionesEurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaccionesEurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesEurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaccionesEurs
     * const transaccionesEur = await prisma.transaccionesEur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaccionesEurUpdateManyArgs>(args: SelectSubset<T, transaccionesEurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaccionesEurs and returns the data updated in the database.
     * @param {transaccionesEurUpdateManyAndReturnArgs} args - Arguments to update many TransaccionesEurs.
     * @example
     * // Update many TransaccionesEurs
     * const transaccionesEur = await prisma.transaccionesEur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaccionesEurs and only return the `id`
     * const transaccionesEurWithIdOnly = await prisma.transaccionesEur.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaccionesEurUpdateManyAndReturnArgs>(args: SelectSubset<T, transaccionesEurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TransaccionesEur.
     * @param {transaccionesEurUpsertArgs} args - Arguments to update or create a TransaccionesEur.
     * @example
     * // Update or create a TransaccionesEur
     * const transaccionesEur = await prisma.transaccionesEur.upsert({
     *   create: {
     *     // ... data to create a TransaccionesEur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaccionesEur we want to update
     *   }
     * })
     */
    upsert<T extends transaccionesEurUpsertArgs>(args: SelectSubset<T, transaccionesEurUpsertArgs<ExtArgs>>): Prisma__transaccionesEurClient<$Result.GetResult<Prisma.$transaccionesEurPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TransaccionesEurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesEurCountArgs} args - Arguments to filter TransaccionesEurs to count.
     * @example
     * // Count the number of TransaccionesEurs
     * const count = await prisma.transaccionesEur.count({
     *   where: {
     *     // ... the filter for the TransaccionesEurs we want to count
     *   }
     * })
    **/
    count<T extends transaccionesEurCountArgs>(
      args?: Subset<T, transaccionesEurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaccionesEurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaccionesEur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionesEurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaccionesEurAggregateArgs>(args: Subset<T, TransaccionesEurAggregateArgs>): Prisma.PrismaPromise<GetTransaccionesEurAggregateType<T>>

    /**
     * Group by TransaccionesEur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionesEurGroupByArgs} args - Group by arguments.
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
      T extends transaccionesEurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaccionesEurGroupByArgs['orderBy'] }
        : { orderBy?: transaccionesEurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaccionesEurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionesEurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaccionesEur model
   */
  readonly fields: transaccionesEurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaccionesEur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaccionesEurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    valijaEur<T extends ValijaEurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ValijaEurDefaultArgs<ExtArgs>>): Prisma__ValijaEurClient<$Result.GetResult<Prisma.$ValijaEurPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the transaccionesEur model
   */ 
  interface transaccionesEurFieldRefs {
    readonly id: FieldRef<"transaccionesEur", 'Int'>
    readonly D5: FieldRef<"transaccionesEur", 'Int'>
    readonly D10: FieldRef<"transaccionesEur", 'Int'>
    readonly D20: FieldRef<"transaccionesEur", 'Int'>
    readonly D50: FieldRef<"transaccionesEur", 'Int'>
    readonly D100: FieldRef<"transaccionesEur", 'Int'>
    readonly valijaEurId: FieldRef<"transaccionesEur", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaccionesEur findUnique
   */
  export type transaccionesEurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesEur to fetch.
     */
    where: transaccionesEurWhereUniqueInput
  }

  /**
   * transaccionesEur findUniqueOrThrow
   */
  export type transaccionesEurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesEur to fetch.
     */
    where: transaccionesEurWhereUniqueInput
  }

  /**
   * transaccionesEur findFirst
   */
  export type transaccionesEurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesEur to fetch.
     */
    where?: transaccionesEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesEurs to fetch.
     */
    orderBy?: transaccionesEurOrderByWithRelationInput | transaccionesEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccionesEurs.
     */
    cursor?: transaccionesEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesEurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccionesEurs.
     */
    distinct?: TransaccionesEurScalarFieldEnum | TransaccionesEurScalarFieldEnum[]
  }

  /**
   * transaccionesEur findFirstOrThrow
   */
  export type transaccionesEurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesEur to fetch.
     */
    where?: transaccionesEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesEurs to fetch.
     */
    orderBy?: transaccionesEurOrderByWithRelationInput | transaccionesEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccionesEurs.
     */
    cursor?: transaccionesEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesEurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccionesEurs.
     */
    distinct?: TransaccionesEurScalarFieldEnum | TransaccionesEurScalarFieldEnum[]
  }

  /**
   * transaccionesEur findMany
   */
  export type transaccionesEurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * Filter, which transaccionesEurs to fetch.
     */
    where?: transaccionesEurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccionesEurs to fetch.
     */
    orderBy?: transaccionesEurOrderByWithRelationInput | transaccionesEurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaccionesEurs.
     */
    cursor?: transaccionesEurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccionesEurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccionesEurs.
     */
    skip?: number
    distinct?: TransaccionesEurScalarFieldEnum | TransaccionesEurScalarFieldEnum[]
  }

  /**
   * transaccionesEur create
   */
  export type transaccionesEurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * The data needed to create a transaccionesEur.
     */
    data: XOR<transaccionesEurCreateInput, transaccionesEurUncheckedCreateInput>
  }

  /**
   * transaccionesEur createMany
   */
  export type transaccionesEurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaccionesEurs.
     */
    data: transaccionesEurCreateManyInput | transaccionesEurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaccionesEur createManyAndReturn
   */
  export type transaccionesEurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * The data used to create many transaccionesEurs.
     */
    data: transaccionesEurCreateManyInput | transaccionesEurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccionesEur update
   */
  export type transaccionesEurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * The data needed to update a transaccionesEur.
     */
    data: XOR<transaccionesEurUpdateInput, transaccionesEurUncheckedUpdateInput>
    /**
     * Choose, which transaccionesEur to update.
     */
    where: transaccionesEurWhereUniqueInput
  }

  /**
   * transaccionesEur updateMany
   */
  export type transaccionesEurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaccionesEurs.
     */
    data: XOR<transaccionesEurUpdateManyMutationInput, transaccionesEurUncheckedUpdateManyInput>
    /**
     * Filter which transaccionesEurs to update
     */
    where?: transaccionesEurWhereInput
    /**
     * Limit how many transaccionesEurs to update.
     */
    limit?: number
  }

  /**
   * transaccionesEur updateManyAndReturn
   */
  export type transaccionesEurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * The data used to update transaccionesEurs.
     */
    data: XOR<transaccionesEurUpdateManyMutationInput, transaccionesEurUncheckedUpdateManyInput>
    /**
     * Filter which transaccionesEurs to update
     */
    where?: transaccionesEurWhereInput
    /**
     * Limit how many transaccionesEurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccionesEur upsert
   */
  export type transaccionesEurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * The filter to search for the transaccionesEur to update in case it exists.
     */
    where: transaccionesEurWhereUniqueInput
    /**
     * In case the transaccionesEur found by the `where` argument doesn't exist, create a new transaccionesEur with this data.
     */
    create: XOR<transaccionesEurCreateInput, transaccionesEurUncheckedCreateInput>
    /**
     * In case the transaccionesEur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaccionesEurUpdateInput, transaccionesEurUncheckedUpdateInput>
  }

  /**
   * transaccionesEur delete
   */
  export type transaccionesEurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
    /**
     * Filter which transaccionesEur to delete.
     */
    where: transaccionesEurWhereUniqueInput
  }

  /**
   * transaccionesEur deleteMany
   */
  export type transaccionesEurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccionesEurs to delete
     */
    where?: transaccionesEurWhereInput
    /**
     * Limit how many transaccionesEurs to delete.
     */
    limit?: number
  }

  /**
   * transaccionesEur without action
   */
  export type transaccionesEurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccionesEur
     */
    select?: transaccionesEurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccionesEur
     */
    omit?: transaccionesEurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionesEurInclude<ExtArgs> | null
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


  export const ValijaScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    usuarioACargo: 'usuarioACargo',
    llegada: 'llegada',
    ultimaModificacion: 'ultimaModificacion',
    valijaUsdId: 'valijaUsdId',
    valijaDopId: 'valijaDopId',
    valijaEurId: 'valijaEurId'
  };

  export type ValijaScalarFieldEnum = (typeof ValijaScalarFieldEnum)[keyof typeof ValijaScalarFieldEnum]


  export const ValijaUsdScalarFieldEnum: {
    id: 'id',
    depositos: 'depositos'
  };

  export type ValijaUsdScalarFieldEnum = (typeof ValijaUsdScalarFieldEnum)[keyof typeof ValijaUsdScalarFieldEnum]


  export const ValijaDopScalarFieldEnum: {
    id: 'id',
    depositos: 'depositos'
  };

  export type ValijaDopScalarFieldEnum = (typeof ValijaDopScalarFieldEnum)[keyof typeof ValijaDopScalarFieldEnum]


  export const ValijaEurScalarFieldEnum: {
    id: 'id',
    depositos: 'depositos'
  };

  export type ValijaEurScalarFieldEnum = (typeof ValijaEurScalarFieldEnum)[keyof typeof ValijaEurScalarFieldEnum]


  export const TransaccionesUsdScalarFieldEnum: {
    id: 'id',
    D1: 'D1',
    D2: 'D2',
    D5: 'D5',
    D10: 'D10',
    D20: 'D20',
    D50: 'D50',
    D100: 'D100',
    valijaUsdId: 'valijaUsdId'
  };

  export type TransaccionesUsdScalarFieldEnum = (typeof TransaccionesUsdScalarFieldEnum)[keyof typeof TransaccionesUsdScalarFieldEnum]


  export const TransaccionesDopScalarFieldEnum: {
    id: 'id',
    D1: 'D1',
    D5: 'D5',
    D10: 'D10',
    D25: 'D25',
    D50: 'D50',
    D100: 'D100',
    D200: 'D200',
    D500: 'D500',
    D1000: 'D1000',
    D2000: 'D2000',
    valijaDopId: 'valijaDopId'
  };

  export type TransaccionesDopScalarFieldEnum = (typeof TransaccionesDopScalarFieldEnum)[keyof typeof TransaccionesDopScalarFieldEnum]


  export const TransaccionesEurScalarFieldEnum: {
    id: 'id',
    D5: 'D5',
    D10: 'D10',
    D20: 'D20',
    D50: 'D50',
    D100: 'D100',
    valijaEurId: 'valijaEurId'
  };

  export type TransaccionesEurScalarFieldEnum = (typeof TransaccionesEurScalarFieldEnum)[keyof typeof TransaccionesEurScalarFieldEnum]


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


  export type ValijaWhereInput = {
    AND?: ValijaWhereInput | ValijaWhereInput[]
    OR?: ValijaWhereInput[]
    NOT?: ValijaWhereInput | ValijaWhereInput[]
    id?: IntFilter<"Valija"> | number
    codigo?: StringFilter<"Valija"> | string
    usuarioACargo?: StringFilter<"Valija"> | string
    llegada?: DateTimeFilter<"Valija"> | Date | string
    ultimaModificacion?: DateTimeFilter<"Valija"> | Date | string
    valijaUsdId?: IntNullableFilter<"Valija"> | number | null
    valijaDopId?: IntNullableFilter<"Valija"> | number | null
    valijaEurId?: IntNullableFilter<"Valija"> | number | null
    valijaDop?: XOR<ValijaDopNullableScalarRelationFilter, ValijaDopWhereInput> | null
    valijaEur?: XOR<ValijaEurNullableScalarRelationFilter, ValijaEurWhereInput> | null
    valijaUsd?: XOR<ValijaUsdNullableScalarRelationFilter, ValijaUsdWhereInput> | null
  }

  export type ValijaOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    usuarioACargo?: SortOrder
    llegada?: SortOrder
    ultimaModificacion?: SortOrder
    valijaUsdId?: SortOrderInput | SortOrder
    valijaDopId?: SortOrderInput | SortOrder
    valijaEurId?: SortOrderInput | SortOrder
    valijaDop?: ValijaDopOrderByWithRelationInput
    valijaEur?: ValijaEurOrderByWithRelationInput
    valijaUsd?: ValijaUsdOrderByWithRelationInput
  }

  export type ValijaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    valijaUsdId?: number
    valijaDopId?: number
    valijaEurId?: number
    AND?: ValijaWhereInput | ValijaWhereInput[]
    OR?: ValijaWhereInput[]
    NOT?: ValijaWhereInput | ValijaWhereInput[]
    usuarioACargo?: StringFilter<"Valija"> | string
    llegada?: DateTimeFilter<"Valija"> | Date | string
    ultimaModificacion?: DateTimeFilter<"Valija"> | Date | string
    valijaDop?: XOR<ValijaDopNullableScalarRelationFilter, ValijaDopWhereInput> | null
    valijaEur?: XOR<ValijaEurNullableScalarRelationFilter, ValijaEurWhereInput> | null
    valijaUsd?: XOR<ValijaUsdNullableScalarRelationFilter, ValijaUsdWhereInput> | null
  }, "id" | "codigo" | "valijaUsdId" | "valijaDopId" | "valijaEurId">

  export type ValijaOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    usuarioACargo?: SortOrder
    llegada?: SortOrder
    ultimaModificacion?: SortOrder
    valijaUsdId?: SortOrderInput | SortOrder
    valijaDopId?: SortOrderInput | SortOrder
    valijaEurId?: SortOrderInput | SortOrder
    _count?: ValijaCountOrderByAggregateInput
    _avg?: ValijaAvgOrderByAggregateInput
    _max?: ValijaMaxOrderByAggregateInput
    _min?: ValijaMinOrderByAggregateInput
    _sum?: ValijaSumOrderByAggregateInput
  }

  export type ValijaScalarWhereWithAggregatesInput = {
    AND?: ValijaScalarWhereWithAggregatesInput | ValijaScalarWhereWithAggregatesInput[]
    OR?: ValijaScalarWhereWithAggregatesInput[]
    NOT?: ValijaScalarWhereWithAggregatesInput | ValijaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Valija"> | number
    codigo?: StringWithAggregatesFilter<"Valija"> | string
    usuarioACargo?: StringWithAggregatesFilter<"Valija"> | string
    llegada?: DateTimeWithAggregatesFilter<"Valija"> | Date | string
    ultimaModificacion?: DateTimeWithAggregatesFilter<"Valija"> | Date | string
    valijaUsdId?: IntNullableWithAggregatesFilter<"Valija"> | number | null
    valijaDopId?: IntNullableWithAggregatesFilter<"Valija"> | number | null
    valijaEurId?: IntNullableWithAggregatesFilter<"Valija"> | number | null
  }

  export type ValijaUsdWhereInput = {
    AND?: ValijaUsdWhereInput | ValijaUsdWhereInput[]
    OR?: ValijaUsdWhereInput[]
    NOT?: ValijaUsdWhereInput | ValijaUsdWhereInput[]
    id?: IntFilter<"ValijaUsd"> | number
    depositos?: IntFilter<"ValijaUsd"> | number
    transaccionUsd?: TransaccionesUsdListRelationFilter
    valija?: XOR<ValijaNullableScalarRelationFilter, ValijaWhereInput> | null
  }

  export type ValijaUsdOrderByWithRelationInput = {
    id?: SortOrder
    depositos?: SortOrder
    transaccionUsd?: transaccionesUsdOrderByRelationAggregateInput
    valija?: ValijaOrderByWithRelationInput
  }

  export type ValijaUsdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ValijaUsdWhereInput | ValijaUsdWhereInput[]
    OR?: ValijaUsdWhereInput[]
    NOT?: ValijaUsdWhereInput | ValijaUsdWhereInput[]
    depositos?: IntFilter<"ValijaUsd"> | number
    transaccionUsd?: TransaccionesUsdListRelationFilter
    valija?: XOR<ValijaNullableScalarRelationFilter, ValijaWhereInput> | null
  }, "id">

  export type ValijaUsdOrderByWithAggregationInput = {
    id?: SortOrder
    depositos?: SortOrder
    _count?: ValijaUsdCountOrderByAggregateInput
    _avg?: ValijaUsdAvgOrderByAggregateInput
    _max?: ValijaUsdMaxOrderByAggregateInput
    _min?: ValijaUsdMinOrderByAggregateInput
    _sum?: ValijaUsdSumOrderByAggregateInput
  }

  export type ValijaUsdScalarWhereWithAggregatesInput = {
    AND?: ValijaUsdScalarWhereWithAggregatesInput | ValijaUsdScalarWhereWithAggregatesInput[]
    OR?: ValijaUsdScalarWhereWithAggregatesInput[]
    NOT?: ValijaUsdScalarWhereWithAggregatesInput | ValijaUsdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ValijaUsd"> | number
    depositos?: IntWithAggregatesFilter<"ValijaUsd"> | number
  }

  export type ValijaDopWhereInput = {
    AND?: ValijaDopWhereInput | ValijaDopWhereInput[]
    OR?: ValijaDopWhereInput[]
    NOT?: ValijaDopWhereInput | ValijaDopWhereInput[]
    id?: IntFilter<"ValijaDop"> | number
    depositos?: IntNullableFilter<"ValijaDop"> | number | null
    transaccionDop?: TransaccionesDopListRelationFilter
    valija?: XOR<ValijaNullableScalarRelationFilter, ValijaWhereInput> | null
  }

  export type ValijaDopOrderByWithRelationInput = {
    id?: SortOrder
    depositos?: SortOrderInput | SortOrder
    transaccionDop?: transaccionesDopOrderByRelationAggregateInput
    valija?: ValijaOrderByWithRelationInput
  }

  export type ValijaDopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ValijaDopWhereInput | ValijaDopWhereInput[]
    OR?: ValijaDopWhereInput[]
    NOT?: ValijaDopWhereInput | ValijaDopWhereInput[]
    depositos?: IntNullableFilter<"ValijaDop"> | number | null
    transaccionDop?: TransaccionesDopListRelationFilter
    valija?: XOR<ValijaNullableScalarRelationFilter, ValijaWhereInput> | null
  }, "id">

  export type ValijaDopOrderByWithAggregationInput = {
    id?: SortOrder
    depositos?: SortOrderInput | SortOrder
    _count?: ValijaDopCountOrderByAggregateInput
    _avg?: ValijaDopAvgOrderByAggregateInput
    _max?: ValijaDopMaxOrderByAggregateInput
    _min?: ValijaDopMinOrderByAggregateInput
    _sum?: ValijaDopSumOrderByAggregateInput
  }

  export type ValijaDopScalarWhereWithAggregatesInput = {
    AND?: ValijaDopScalarWhereWithAggregatesInput | ValijaDopScalarWhereWithAggregatesInput[]
    OR?: ValijaDopScalarWhereWithAggregatesInput[]
    NOT?: ValijaDopScalarWhereWithAggregatesInput | ValijaDopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ValijaDop"> | number
    depositos?: IntNullableWithAggregatesFilter<"ValijaDop"> | number | null
  }

  export type ValijaEurWhereInput = {
    AND?: ValijaEurWhereInput | ValijaEurWhereInput[]
    OR?: ValijaEurWhereInput[]
    NOT?: ValijaEurWhereInput | ValijaEurWhereInput[]
    id?: IntFilter<"ValijaEur"> | number
    depositos?: IntFilter<"ValijaEur"> | number
    transaccionEur?: TransaccionesEurListRelationFilter
    valija?: XOR<ValijaNullableScalarRelationFilter, ValijaWhereInput> | null
  }

  export type ValijaEurOrderByWithRelationInput = {
    id?: SortOrder
    depositos?: SortOrder
    transaccionEur?: transaccionesEurOrderByRelationAggregateInput
    valija?: ValijaOrderByWithRelationInput
  }

  export type ValijaEurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ValijaEurWhereInput | ValijaEurWhereInput[]
    OR?: ValijaEurWhereInput[]
    NOT?: ValijaEurWhereInput | ValijaEurWhereInput[]
    depositos?: IntFilter<"ValijaEur"> | number
    transaccionEur?: TransaccionesEurListRelationFilter
    valija?: XOR<ValijaNullableScalarRelationFilter, ValijaWhereInput> | null
  }, "id">

  export type ValijaEurOrderByWithAggregationInput = {
    id?: SortOrder
    depositos?: SortOrder
    _count?: ValijaEurCountOrderByAggregateInput
    _avg?: ValijaEurAvgOrderByAggregateInput
    _max?: ValijaEurMaxOrderByAggregateInput
    _min?: ValijaEurMinOrderByAggregateInput
    _sum?: ValijaEurSumOrderByAggregateInput
  }

  export type ValijaEurScalarWhereWithAggregatesInput = {
    AND?: ValijaEurScalarWhereWithAggregatesInput | ValijaEurScalarWhereWithAggregatesInput[]
    OR?: ValijaEurScalarWhereWithAggregatesInput[]
    NOT?: ValijaEurScalarWhereWithAggregatesInput | ValijaEurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ValijaEur"> | number
    depositos?: IntWithAggregatesFilter<"ValijaEur"> | number
  }

  export type transaccionesUsdWhereInput = {
    AND?: transaccionesUsdWhereInput | transaccionesUsdWhereInput[]
    OR?: transaccionesUsdWhereInput[]
    NOT?: transaccionesUsdWhereInput | transaccionesUsdWhereInput[]
    id?: IntFilter<"transaccionesUsd"> | number
    D1?: IntFilter<"transaccionesUsd"> | number
    D2?: IntFilter<"transaccionesUsd"> | number
    D5?: IntFilter<"transaccionesUsd"> | number
    D10?: IntFilter<"transaccionesUsd"> | number
    D20?: IntFilter<"transaccionesUsd"> | number
    D50?: IntFilter<"transaccionesUsd"> | number
    D100?: IntFilter<"transaccionesUsd"> | number
    valijaUsdId?: IntFilter<"transaccionesUsd"> | number
    valijaUsd?: XOR<ValijaUsdScalarRelationFilter, ValijaUsdWhereInput>
  }

  export type transaccionesUsdOrderByWithRelationInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
    valijaUsd?: ValijaUsdOrderByWithRelationInput
  }

  export type transaccionesUsdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaccionesUsdWhereInput | transaccionesUsdWhereInput[]
    OR?: transaccionesUsdWhereInput[]
    NOT?: transaccionesUsdWhereInput | transaccionesUsdWhereInput[]
    D1?: IntFilter<"transaccionesUsd"> | number
    D2?: IntFilter<"transaccionesUsd"> | number
    D5?: IntFilter<"transaccionesUsd"> | number
    D10?: IntFilter<"transaccionesUsd"> | number
    D20?: IntFilter<"transaccionesUsd"> | number
    D50?: IntFilter<"transaccionesUsd"> | number
    D100?: IntFilter<"transaccionesUsd"> | number
    valijaUsdId?: IntFilter<"transaccionesUsd"> | number
    valijaUsd?: XOR<ValijaUsdScalarRelationFilter, ValijaUsdWhereInput>
  }, "id">

  export type transaccionesUsdOrderByWithAggregationInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
    _count?: transaccionesUsdCountOrderByAggregateInput
    _avg?: transaccionesUsdAvgOrderByAggregateInput
    _max?: transaccionesUsdMaxOrderByAggregateInput
    _min?: transaccionesUsdMinOrderByAggregateInput
    _sum?: transaccionesUsdSumOrderByAggregateInput
  }

  export type transaccionesUsdScalarWhereWithAggregatesInput = {
    AND?: transaccionesUsdScalarWhereWithAggregatesInput | transaccionesUsdScalarWhereWithAggregatesInput[]
    OR?: transaccionesUsdScalarWhereWithAggregatesInput[]
    NOT?: transaccionesUsdScalarWhereWithAggregatesInput | transaccionesUsdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D1?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D2?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D5?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D10?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D20?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D50?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    D100?: IntWithAggregatesFilter<"transaccionesUsd"> | number
    valijaUsdId?: IntWithAggregatesFilter<"transaccionesUsd"> | number
  }

  export type transaccionesDopWhereInput = {
    AND?: transaccionesDopWhereInput | transaccionesDopWhereInput[]
    OR?: transaccionesDopWhereInput[]
    NOT?: transaccionesDopWhereInput | transaccionesDopWhereInput[]
    id?: IntFilter<"transaccionesDop"> | number
    D1?: IntFilter<"transaccionesDop"> | number
    D5?: IntFilter<"transaccionesDop"> | number
    D10?: IntFilter<"transaccionesDop"> | number
    D25?: IntFilter<"transaccionesDop"> | number
    D50?: IntFilter<"transaccionesDop"> | number
    D100?: IntFilter<"transaccionesDop"> | number
    D200?: IntFilter<"transaccionesDop"> | number
    D500?: IntFilter<"transaccionesDop"> | number
    D1000?: IntFilter<"transaccionesDop"> | number
    D2000?: IntFilter<"transaccionesDop"> | number
    valijaDopId?: IntFilter<"transaccionesDop"> | number
    valijaDop?: XOR<ValijaDopScalarRelationFilter, ValijaDopWhereInput>
  }

  export type transaccionesDopOrderByWithRelationInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
    valijaDop?: ValijaDopOrderByWithRelationInput
  }

  export type transaccionesDopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaccionesDopWhereInput | transaccionesDopWhereInput[]
    OR?: transaccionesDopWhereInput[]
    NOT?: transaccionesDopWhereInput | transaccionesDopWhereInput[]
    D1?: IntFilter<"transaccionesDop"> | number
    D5?: IntFilter<"transaccionesDop"> | number
    D10?: IntFilter<"transaccionesDop"> | number
    D25?: IntFilter<"transaccionesDop"> | number
    D50?: IntFilter<"transaccionesDop"> | number
    D100?: IntFilter<"transaccionesDop"> | number
    D200?: IntFilter<"transaccionesDop"> | number
    D500?: IntFilter<"transaccionesDop"> | number
    D1000?: IntFilter<"transaccionesDop"> | number
    D2000?: IntFilter<"transaccionesDop"> | number
    valijaDopId?: IntFilter<"transaccionesDop"> | number
    valijaDop?: XOR<ValijaDopScalarRelationFilter, ValijaDopWhereInput>
  }, "id">

  export type transaccionesDopOrderByWithAggregationInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
    _count?: transaccionesDopCountOrderByAggregateInput
    _avg?: transaccionesDopAvgOrderByAggregateInput
    _max?: transaccionesDopMaxOrderByAggregateInput
    _min?: transaccionesDopMinOrderByAggregateInput
    _sum?: transaccionesDopSumOrderByAggregateInput
  }

  export type transaccionesDopScalarWhereWithAggregatesInput = {
    AND?: transaccionesDopScalarWhereWithAggregatesInput | transaccionesDopScalarWhereWithAggregatesInput[]
    OR?: transaccionesDopScalarWhereWithAggregatesInput[]
    NOT?: transaccionesDopScalarWhereWithAggregatesInput | transaccionesDopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D1?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D5?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D10?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D25?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D50?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D100?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D200?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D500?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D1000?: IntWithAggregatesFilter<"transaccionesDop"> | number
    D2000?: IntWithAggregatesFilter<"transaccionesDop"> | number
    valijaDopId?: IntWithAggregatesFilter<"transaccionesDop"> | number
  }

  export type transaccionesEurWhereInput = {
    AND?: transaccionesEurWhereInput | transaccionesEurWhereInput[]
    OR?: transaccionesEurWhereInput[]
    NOT?: transaccionesEurWhereInput | transaccionesEurWhereInput[]
    id?: IntFilter<"transaccionesEur"> | number
    D5?: IntFilter<"transaccionesEur"> | number
    D10?: IntFilter<"transaccionesEur"> | number
    D20?: IntFilter<"transaccionesEur"> | number
    D50?: IntFilter<"transaccionesEur"> | number
    D100?: IntFilter<"transaccionesEur"> | number
    valijaEurId?: IntFilter<"transaccionesEur"> | number
    valijaEur?: XOR<ValijaEurScalarRelationFilter, ValijaEurWhereInput>
  }

  export type transaccionesEurOrderByWithRelationInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
    valijaEur?: ValijaEurOrderByWithRelationInput
  }

  export type transaccionesEurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaccionesEurWhereInput | transaccionesEurWhereInput[]
    OR?: transaccionesEurWhereInput[]
    NOT?: transaccionesEurWhereInput | transaccionesEurWhereInput[]
    D5?: IntFilter<"transaccionesEur"> | number
    D10?: IntFilter<"transaccionesEur"> | number
    D20?: IntFilter<"transaccionesEur"> | number
    D50?: IntFilter<"transaccionesEur"> | number
    D100?: IntFilter<"transaccionesEur"> | number
    valijaEurId?: IntFilter<"transaccionesEur"> | number
    valijaEur?: XOR<ValijaEurScalarRelationFilter, ValijaEurWhereInput>
  }, "id">

  export type transaccionesEurOrderByWithAggregationInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
    _count?: transaccionesEurCountOrderByAggregateInput
    _avg?: transaccionesEurAvgOrderByAggregateInput
    _max?: transaccionesEurMaxOrderByAggregateInput
    _min?: transaccionesEurMinOrderByAggregateInput
    _sum?: transaccionesEurSumOrderByAggregateInput
  }

  export type transaccionesEurScalarWhereWithAggregatesInput = {
    AND?: transaccionesEurScalarWhereWithAggregatesInput | transaccionesEurScalarWhereWithAggregatesInput[]
    OR?: transaccionesEurScalarWhereWithAggregatesInput[]
    NOT?: transaccionesEurScalarWhereWithAggregatesInput | transaccionesEurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaccionesEur"> | number
    D5?: IntWithAggregatesFilter<"transaccionesEur"> | number
    D10?: IntWithAggregatesFilter<"transaccionesEur"> | number
    D20?: IntWithAggregatesFilter<"transaccionesEur"> | number
    D50?: IntWithAggregatesFilter<"transaccionesEur"> | number
    D100?: IntWithAggregatesFilter<"transaccionesEur"> | number
    valijaEurId?: IntWithAggregatesFilter<"transaccionesEur"> | number
  }

  export type ValijaCreateInput = {
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaDop?: ValijaDopCreateNestedOneWithoutValijaInput
    valijaEur?: ValijaEurCreateNestedOneWithoutValijaInput
    valijaUsd?: ValijaUsdCreateNestedOneWithoutValijaInput
  }

  export type ValijaUncheckedCreateInput = {
    id?: number
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaUsdId?: number | null
    valijaDopId?: number | null
    valijaEurId?: number | null
  }

  export type ValijaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaDop?: ValijaDopUpdateOneWithoutValijaNestedInput
    valijaEur?: ValijaEurUpdateOneWithoutValijaNestedInput
    valijaUsd?: ValijaUsdUpdateOneWithoutValijaNestedInput
  }

  export type ValijaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaUsdId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaDopId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaEurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ValijaCreateManyInput = {
    id?: number
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaUsdId?: number | null
    valijaDopId?: number | null
    valijaEurId?: number | null
  }

  export type ValijaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValijaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaUsdId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaDopId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaEurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ValijaUsdCreateInput = {
    depositos?: number
    transaccionUsd?: transaccionesUsdCreateNestedManyWithoutValijaUsdInput
    valija?: ValijaCreateNestedOneWithoutValijaUsdInput
  }

  export type ValijaUsdUncheckedCreateInput = {
    id?: number
    depositos?: number
    transaccionUsd?: transaccionesUsdUncheckedCreateNestedManyWithoutValijaUsdInput
    valija?: ValijaUncheckedCreateNestedOneWithoutValijaUsdInput
  }

  export type ValijaUsdUpdateInput = {
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionUsd?: transaccionesUsdUpdateManyWithoutValijaUsdNestedInput
    valija?: ValijaUpdateOneWithoutValijaUsdNestedInput
  }

  export type ValijaUsdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionUsd?: transaccionesUsdUncheckedUpdateManyWithoutValijaUsdNestedInput
    valija?: ValijaUncheckedUpdateOneWithoutValijaUsdNestedInput
  }

  export type ValijaUsdCreateManyInput = {
    id?: number
    depositos?: number
  }

  export type ValijaUsdUpdateManyMutationInput = {
    depositos?: IntFieldUpdateOperationsInput | number
  }

  export type ValijaUsdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
  }

  export type ValijaDopCreateInput = {
    depositos?: number | null
    transaccionDop?: transaccionesDopCreateNestedManyWithoutValijaDopInput
    valija?: ValijaCreateNestedOneWithoutValijaDopInput
  }

  export type ValijaDopUncheckedCreateInput = {
    id?: number
    depositos?: number | null
    transaccionDop?: transaccionesDopUncheckedCreateNestedManyWithoutValijaDopInput
    valija?: ValijaUncheckedCreateNestedOneWithoutValijaDopInput
  }

  export type ValijaDopUpdateInput = {
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
    transaccionDop?: transaccionesDopUpdateManyWithoutValijaDopNestedInput
    valija?: ValijaUpdateOneWithoutValijaDopNestedInput
  }

  export type ValijaDopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
    transaccionDop?: transaccionesDopUncheckedUpdateManyWithoutValijaDopNestedInput
    valija?: ValijaUncheckedUpdateOneWithoutValijaDopNestedInput
  }

  export type ValijaDopCreateManyInput = {
    id?: number
    depositos?: number | null
  }

  export type ValijaDopUpdateManyMutationInput = {
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ValijaDopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ValijaEurCreateInput = {
    depositos?: number
    transaccionEur?: transaccionesEurCreateNestedManyWithoutValijaEurInput
    valija?: ValijaCreateNestedOneWithoutValijaEurInput
  }

  export type ValijaEurUncheckedCreateInput = {
    id?: number
    depositos?: number
    transaccionEur?: transaccionesEurUncheckedCreateNestedManyWithoutValijaEurInput
    valija?: ValijaUncheckedCreateNestedOneWithoutValijaEurInput
  }

  export type ValijaEurUpdateInput = {
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionEur?: transaccionesEurUpdateManyWithoutValijaEurNestedInput
    valija?: ValijaUpdateOneWithoutValijaEurNestedInput
  }

  export type ValijaEurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionEur?: transaccionesEurUncheckedUpdateManyWithoutValijaEurNestedInput
    valija?: ValijaUncheckedUpdateOneWithoutValijaEurNestedInput
  }

  export type ValijaEurCreateManyInput = {
    id?: number
    depositos?: number
  }

  export type ValijaEurUpdateManyMutationInput = {
    depositos?: IntFieldUpdateOperationsInput | number
  }

  export type ValijaEurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesUsdCreateInput = {
    D1?: number
    D2?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
    valijaUsd: ValijaUsdCreateNestedOneWithoutTransaccionUsdInput
  }

  export type transaccionesUsdUncheckedCreateInput = {
    id?: number
    D1?: number
    D2?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
    valijaUsdId: number
  }

  export type transaccionesUsdUpdateInput = {
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    valijaUsd?: ValijaUsdUpdateOneRequiredWithoutTransaccionUsdNestedInput
  }

  export type transaccionesUsdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    valijaUsdId?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesUsdCreateManyInput = {
    id?: number
    D1?: number
    D2?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
    valijaUsdId: number
  }

  export type transaccionesUsdUpdateManyMutationInput = {
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesUsdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    valijaUsdId?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesDopCreateInput = {
    D1?: number
    D5?: number
    D10?: number
    D25?: number
    D50?: number
    D100?: number
    D200?: number
    D500?: number
    D1000?: number
    D2000?: number
    valijaDop: ValijaDopCreateNestedOneWithoutTransaccionDopInput
  }

  export type transaccionesDopUncheckedCreateInput = {
    id?: number
    D1?: number
    D5?: number
    D10?: number
    D25?: number
    D50?: number
    D100?: number
    D200?: number
    D500?: number
    D1000?: number
    D2000?: number
    valijaDopId: number
  }

  export type transaccionesDopUpdateInput = {
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
    valijaDop?: ValijaDopUpdateOneRequiredWithoutTransaccionDopNestedInput
  }

  export type transaccionesDopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
    valijaDopId?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesDopCreateManyInput = {
    id?: number
    D1?: number
    D5?: number
    D10?: number
    D25?: number
    D50?: number
    D100?: number
    D200?: number
    D500?: number
    D1000?: number
    D2000?: number
    valijaDopId: number
  }

  export type transaccionesDopUpdateManyMutationInput = {
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesDopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
    valijaDopId?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesEurCreateInput = {
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
    valijaEur: ValijaEurCreateNestedOneWithoutTransaccionEurInput
  }

  export type transaccionesEurUncheckedCreateInput = {
    id?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
    valijaEurId: number
  }

  export type transaccionesEurUpdateInput = {
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    valijaEur?: ValijaEurUpdateOneRequiredWithoutTransaccionEurNestedInput
  }

  export type transaccionesEurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    valijaEurId?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesEurCreateManyInput = {
    id?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
    valijaEurId: number
  }

  export type transaccionesEurUpdateManyMutationInput = {
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesEurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    valijaEurId?: IntFieldUpdateOperationsInput | number
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

  export type ValijaDopNullableScalarRelationFilter = {
    is?: ValijaDopWhereInput | null
    isNot?: ValijaDopWhereInput | null
  }

  export type ValijaEurNullableScalarRelationFilter = {
    is?: ValijaEurWhereInput | null
    isNot?: ValijaEurWhereInput | null
  }

  export type ValijaUsdNullableScalarRelationFilter = {
    is?: ValijaUsdWhereInput | null
    isNot?: ValijaUsdWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ValijaCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    usuarioACargo?: SortOrder
    llegada?: SortOrder
    ultimaModificacion?: SortOrder
    valijaUsdId?: SortOrder
    valijaDopId?: SortOrder
    valijaEurId?: SortOrder
  }

  export type ValijaAvgOrderByAggregateInput = {
    id?: SortOrder
    valijaUsdId?: SortOrder
    valijaDopId?: SortOrder
    valijaEurId?: SortOrder
  }

  export type ValijaMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    usuarioACargo?: SortOrder
    llegada?: SortOrder
    ultimaModificacion?: SortOrder
    valijaUsdId?: SortOrder
    valijaDopId?: SortOrder
    valijaEurId?: SortOrder
  }

  export type ValijaMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    usuarioACargo?: SortOrder
    llegada?: SortOrder
    ultimaModificacion?: SortOrder
    valijaUsdId?: SortOrder
    valijaDopId?: SortOrder
    valijaEurId?: SortOrder
  }

  export type ValijaSumOrderByAggregateInput = {
    id?: SortOrder
    valijaUsdId?: SortOrder
    valijaDopId?: SortOrder
    valijaEurId?: SortOrder
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

  export type TransaccionesUsdListRelationFilter = {
    every?: transaccionesUsdWhereInput
    some?: transaccionesUsdWhereInput
    none?: transaccionesUsdWhereInput
  }

  export type ValijaNullableScalarRelationFilter = {
    is?: ValijaWhereInput | null
    isNot?: ValijaWhereInput | null
  }

  export type transaccionesUsdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValijaUsdCountOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaUsdAvgOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaUsdMaxOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaUsdMinOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaUsdSumOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type TransaccionesDopListRelationFilter = {
    every?: transaccionesDopWhereInput
    some?: transaccionesDopWhereInput
    none?: transaccionesDopWhereInput
  }

  export type transaccionesDopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValijaDopCountOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaDopAvgOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaDopMaxOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaDopMinOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaDopSumOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type TransaccionesEurListRelationFilter = {
    every?: transaccionesEurWhereInput
    some?: transaccionesEurWhereInput
    none?: transaccionesEurWhereInput
  }

  export type transaccionesEurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValijaEurCountOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaEurAvgOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaEurMaxOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaEurMinOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaEurSumOrderByAggregateInput = {
    id?: SortOrder
    depositos?: SortOrder
  }

  export type ValijaUsdScalarRelationFilter = {
    is?: ValijaUsdWhereInput
    isNot?: ValijaUsdWhereInput
  }

  export type transaccionesUsdCountOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
  }

  export type transaccionesUsdAvgOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
  }

  export type transaccionesUsdMaxOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
  }

  export type transaccionesUsdMinOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
  }

  export type transaccionesUsdSumOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D2?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaUsdId?: SortOrder
  }

  export type ValijaDopScalarRelationFilter = {
    is?: ValijaDopWhereInput
    isNot?: ValijaDopWhereInput
  }

  export type transaccionesDopCountOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
  }

  export type transaccionesDopAvgOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
  }

  export type transaccionesDopMaxOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
  }

  export type transaccionesDopMinOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
  }

  export type transaccionesDopSumOrderByAggregateInput = {
    id?: SortOrder
    D1?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D25?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    D200?: SortOrder
    D500?: SortOrder
    D1000?: SortOrder
    D2000?: SortOrder
    valijaDopId?: SortOrder
  }

  export type ValijaEurScalarRelationFilter = {
    is?: ValijaEurWhereInput
    isNot?: ValijaEurWhereInput
  }

  export type transaccionesEurCountOrderByAggregateInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
  }

  export type transaccionesEurAvgOrderByAggregateInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
  }

  export type transaccionesEurMaxOrderByAggregateInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
  }

  export type transaccionesEurMinOrderByAggregateInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
  }

  export type transaccionesEurSumOrderByAggregateInput = {
    id?: SortOrder
    D5?: SortOrder
    D10?: SortOrder
    D20?: SortOrder
    D50?: SortOrder
    D100?: SortOrder
    valijaEurId?: SortOrder
  }

  export type ValijaDopCreateNestedOneWithoutValijaInput = {
    create?: XOR<ValijaDopCreateWithoutValijaInput, ValijaDopUncheckedCreateWithoutValijaInput>
    connectOrCreate?: ValijaDopCreateOrConnectWithoutValijaInput
    connect?: ValijaDopWhereUniqueInput
  }

  export type ValijaEurCreateNestedOneWithoutValijaInput = {
    create?: XOR<ValijaEurCreateWithoutValijaInput, ValijaEurUncheckedCreateWithoutValijaInput>
    connectOrCreate?: ValijaEurCreateOrConnectWithoutValijaInput
    connect?: ValijaEurWhereUniqueInput
  }

  export type ValijaUsdCreateNestedOneWithoutValijaInput = {
    create?: XOR<ValijaUsdCreateWithoutValijaInput, ValijaUsdUncheckedCreateWithoutValijaInput>
    connectOrCreate?: ValijaUsdCreateOrConnectWithoutValijaInput
    connect?: ValijaUsdWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ValijaDopUpdateOneWithoutValijaNestedInput = {
    create?: XOR<ValijaDopCreateWithoutValijaInput, ValijaDopUncheckedCreateWithoutValijaInput>
    connectOrCreate?: ValijaDopCreateOrConnectWithoutValijaInput
    upsert?: ValijaDopUpsertWithoutValijaInput
    disconnect?: ValijaDopWhereInput | boolean
    delete?: ValijaDopWhereInput | boolean
    connect?: ValijaDopWhereUniqueInput
    update?: XOR<XOR<ValijaDopUpdateToOneWithWhereWithoutValijaInput, ValijaDopUpdateWithoutValijaInput>, ValijaDopUncheckedUpdateWithoutValijaInput>
  }

  export type ValijaEurUpdateOneWithoutValijaNestedInput = {
    create?: XOR<ValijaEurCreateWithoutValijaInput, ValijaEurUncheckedCreateWithoutValijaInput>
    connectOrCreate?: ValijaEurCreateOrConnectWithoutValijaInput
    upsert?: ValijaEurUpsertWithoutValijaInput
    disconnect?: ValijaEurWhereInput | boolean
    delete?: ValijaEurWhereInput | boolean
    connect?: ValijaEurWhereUniqueInput
    update?: XOR<XOR<ValijaEurUpdateToOneWithWhereWithoutValijaInput, ValijaEurUpdateWithoutValijaInput>, ValijaEurUncheckedUpdateWithoutValijaInput>
  }

  export type ValijaUsdUpdateOneWithoutValijaNestedInput = {
    create?: XOR<ValijaUsdCreateWithoutValijaInput, ValijaUsdUncheckedCreateWithoutValijaInput>
    connectOrCreate?: ValijaUsdCreateOrConnectWithoutValijaInput
    upsert?: ValijaUsdUpsertWithoutValijaInput
    disconnect?: ValijaUsdWhereInput | boolean
    delete?: ValijaUsdWhereInput | boolean
    connect?: ValijaUsdWhereUniqueInput
    update?: XOR<XOR<ValijaUsdUpdateToOneWithWhereWithoutValijaInput, ValijaUsdUpdateWithoutValijaInput>, ValijaUsdUncheckedUpdateWithoutValijaInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaccionesUsdCreateNestedManyWithoutValijaUsdInput = {
    create?: XOR<transaccionesUsdCreateWithoutValijaUsdInput, transaccionesUsdUncheckedCreateWithoutValijaUsdInput> | transaccionesUsdCreateWithoutValijaUsdInput[] | transaccionesUsdUncheckedCreateWithoutValijaUsdInput[]
    connectOrCreate?: transaccionesUsdCreateOrConnectWithoutValijaUsdInput | transaccionesUsdCreateOrConnectWithoutValijaUsdInput[]
    createMany?: transaccionesUsdCreateManyValijaUsdInputEnvelope
    connect?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
  }

  export type ValijaCreateNestedOneWithoutValijaUsdInput = {
    create?: XOR<ValijaCreateWithoutValijaUsdInput, ValijaUncheckedCreateWithoutValijaUsdInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaUsdInput
    connect?: ValijaWhereUniqueInput
  }

  export type transaccionesUsdUncheckedCreateNestedManyWithoutValijaUsdInput = {
    create?: XOR<transaccionesUsdCreateWithoutValijaUsdInput, transaccionesUsdUncheckedCreateWithoutValijaUsdInput> | transaccionesUsdCreateWithoutValijaUsdInput[] | transaccionesUsdUncheckedCreateWithoutValijaUsdInput[]
    connectOrCreate?: transaccionesUsdCreateOrConnectWithoutValijaUsdInput | transaccionesUsdCreateOrConnectWithoutValijaUsdInput[]
    createMany?: transaccionesUsdCreateManyValijaUsdInputEnvelope
    connect?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
  }

  export type ValijaUncheckedCreateNestedOneWithoutValijaUsdInput = {
    create?: XOR<ValijaCreateWithoutValijaUsdInput, ValijaUncheckedCreateWithoutValijaUsdInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaUsdInput
    connect?: ValijaWhereUniqueInput
  }

  export type transaccionesUsdUpdateManyWithoutValijaUsdNestedInput = {
    create?: XOR<transaccionesUsdCreateWithoutValijaUsdInput, transaccionesUsdUncheckedCreateWithoutValijaUsdInput> | transaccionesUsdCreateWithoutValijaUsdInput[] | transaccionesUsdUncheckedCreateWithoutValijaUsdInput[]
    connectOrCreate?: transaccionesUsdCreateOrConnectWithoutValijaUsdInput | transaccionesUsdCreateOrConnectWithoutValijaUsdInput[]
    upsert?: transaccionesUsdUpsertWithWhereUniqueWithoutValijaUsdInput | transaccionesUsdUpsertWithWhereUniqueWithoutValijaUsdInput[]
    createMany?: transaccionesUsdCreateManyValijaUsdInputEnvelope
    set?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    disconnect?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    delete?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    connect?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    update?: transaccionesUsdUpdateWithWhereUniqueWithoutValijaUsdInput | transaccionesUsdUpdateWithWhereUniqueWithoutValijaUsdInput[]
    updateMany?: transaccionesUsdUpdateManyWithWhereWithoutValijaUsdInput | transaccionesUsdUpdateManyWithWhereWithoutValijaUsdInput[]
    deleteMany?: transaccionesUsdScalarWhereInput | transaccionesUsdScalarWhereInput[]
  }

  export type ValijaUpdateOneWithoutValijaUsdNestedInput = {
    create?: XOR<ValijaCreateWithoutValijaUsdInput, ValijaUncheckedCreateWithoutValijaUsdInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaUsdInput
    upsert?: ValijaUpsertWithoutValijaUsdInput
    disconnect?: ValijaWhereInput | boolean
    delete?: ValijaWhereInput | boolean
    connect?: ValijaWhereUniqueInput
    update?: XOR<XOR<ValijaUpdateToOneWithWhereWithoutValijaUsdInput, ValijaUpdateWithoutValijaUsdInput>, ValijaUncheckedUpdateWithoutValijaUsdInput>
  }

  export type transaccionesUsdUncheckedUpdateManyWithoutValijaUsdNestedInput = {
    create?: XOR<transaccionesUsdCreateWithoutValijaUsdInput, transaccionesUsdUncheckedCreateWithoutValijaUsdInput> | transaccionesUsdCreateWithoutValijaUsdInput[] | transaccionesUsdUncheckedCreateWithoutValijaUsdInput[]
    connectOrCreate?: transaccionesUsdCreateOrConnectWithoutValijaUsdInput | transaccionesUsdCreateOrConnectWithoutValijaUsdInput[]
    upsert?: transaccionesUsdUpsertWithWhereUniqueWithoutValijaUsdInput | transaccionesUsdUpsertWithWhereUniqueWithoutValijaUsdInput[]
    createMany?: transaccionesUsdCreateManyValijaUsdInputEnvelope
    set?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    disconnect?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    delete?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    connect?: transaccionesUsdWhereUniqueInput | transaccionesUsdWhereUniqueInput[]
    update?: transaccionesUsdUpdateWithWhereUniqueWithoutValijaUsdInput | transaccionesUsdUpdateWithWhereUniqueWithoutValijaUsdInput[]
    updateMany?: transaccionesUsdUpdateManyWithWhereWithoutValijaUsdInput | transaccionesUsdUpdateManyWithWhereWithoutValijaUsdInput[]
    deleteMany?: transaccionesUsdScalarWhereInput | transaccionesUsdScalarWhereInput[]
  }

  export type ValijaUncheckedUpdateOneWithoutValijaUsdNestedInput = {
    create?: XOR<ValijaCreateWithoutValijaUsdInput, ValijaUncheckedCreateWithoutValijaUsdInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaUsdInput
    upsert?: ValijaUpsertWithoutValijaUsdInput
    disconnect?: ValijaWhereInput | boolean
    delete?: ValijaWhereInput | boolean
    connect?: ValijaWhereUniqueInput
    update?: XOR<XOR<ValijaUpdateToOneWithWhereWithoutValijaUsdInput, ValijaUpdateWithoutValijaUsdInput>, ValijaUncheckedUpdateWithoutValijaUsdInput>
  }

  export type transaccionesDopCreateNestedManyWithoutValijaDopInput = {
    create?: XOR<transaccionesDopCreateWithoutValijaDopInput, transaccionesDopUncheckedCreateWithoutValijaDopInput> | transaccionesDopCreateWithoutValijaDopInput[] | transaccionesDopUncheckedCreateWithoutValijaDopInput[]
    connectOrCreate?: transaccionesDopCreateOrConnectWithoutValijaDopInput | transaccionesDopCreateOrConnectWithoutValijaDopInput[]
    createMany?: transaccionesDopCreateManyValijaDopInputEnvelope
    connect?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
  }

  export type ValijaCreateNestedOneWithoutValijaDopInput = {
    create?: XOR<ValijaCreateWithoutValijaDopInput, ValijaUncheckedCreateWithoutValijaDopInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaDopInput
    connect?: ValijaWhereUniqueInput
  }

  export type transaccionesDopUncheckedCreateNestedManyWithoutValijaDopInput = {
    create?: XOR<transaccionesDopCreateWithoutValijaDopInput, transaccionesDopUncheckedCreateWithoutValijaDopInput> | transaccionesDopCreateWithoutValijaDopInput[] | transaccionesDopUncheckedCreateWithoutValijaDopInput[]
    connectOrCreate?: transaccionesDopCreateOrConnectWithoutValijaDopInput | transaccionesDopCreateOrConnectWithoutValijaDopInput[]
    createMany?: transaccionesDopCreateManyValijaDopInputEnvelope
    connect?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
  }

  export type ValijaUncheckedCreateNestedOneWithoutValijaDopInput = {
    create?: XOR<ValijaCreateWithoutValijaDopInput, ValijaUncheckedCreateWithoutValijaDopInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaDopInput
    connect?: ValijaWhereUniqueInput
  }

  export type transaccionesDopUpdateManyWithoutValijaDopNestedInput = {
    create?: XOR<transaccionesDopCreateWithoutValijaDopInput, transaccionesDopUncheckedCreateWithoutValijaDopInput> | transaccionesDopCreateWithoutValijaDopInput[] | transaccionesDopUncheckedCreateWithoutValijaDopInput[]
    connectOrCreate?: transaccionesDopCreateOrConnectWithoutValijaDopInput | transaccionesDopCreateOrConnectWithoutValijaDopInput[]
    upsert?: transaccionesDopUpsertWithWhereUniqueWithoutValijaDopInput | transaccionesDopUpsertWithWhereUniqueWithoutValijaDopInput[]
    createMany?: transaccionesDopCreateManyValijaDopInputEnvelope
    set?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    disconnect?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    delete?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    connect?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    update?: transaccionesDopUpdateWithWhereUniqueWithoutValijaDopInput | transaccionesDopUpdateWithWhereUniqueWithoutValijaDopInput[]
    updateMany?: transaccionesDopUpdateManyWithWhereWithoutValijaDopInput | transaccionesDopUpdateManyWithWhereWithoutValijaDopInput[]
    deleteMany?: transaccionesDopScalarWhereInput | transaccionesDopScalarWhereInput[]
  }

  export type ValijaUpdateOneWithoutValijaDopNestedInput = {
    create?: XOR<ValijaCreateWithoutValijaDopInput, ValijaUncheckedCreateWithoutValijaDopInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaDopInput
    upsert?: ValijaUpsertWithoutValijaDopInput
    disconnect?: ValijaWhereInput | boolean
    delete?: ValijaWhereInput | boolean
    connect?: ValijaWhereUniqueInput
    update?: XOR<XOR<ValijaUpdateToOneWithWhereWithoutValijaDopInput, ValijaUpdateWithoutValijaDopInput>, ValijaUncheckedUpdateWithoutValijaDopInput>
  }

  export type transaccionesDopUncheckedUpdateManyWithoutValijaDopNestedInput = {
    create?: XOR<transaccionesDopCreateWithoutValijaDopInput, transaccionesDopUncheckedCreateWithoutValijaDopInput> | transaccionesDopCreateWithoutValijaDopInput[] | transaccionesDopUncheckedCreateWithoutValijaDopInput[]
    connectOrCreate?: transaccionesDopCreateOrConnectWithoutValijaDopInput | transaccionesDopCreateOrConnectWithoutValijaDopInput[]
    upsert?: transaccionesDopUpsertWithWhereUniqueWithoutValijaDopInput | transaccionesDopUpsertWithWhereUniqueWithoutValijaDopInput[]
    createMany?: transaccionesDopCreateManyValijaDopInputEnvelope
    set?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    disconnect?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    delete?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    connect?: transaccionesDopWhereUniqueInput | transaccionesDopWhereUniqueInput[]
    update?: transaccionesDopUpdateWithWhereUniqueWithoutValijaDopInput | transaccionesDopUpdateWithWhereUniqueWithoutValijaDopInput[]
    updateMany?: transaccionesDopUpdateManyWithWhereWithoutValijaDopInput | transaccionesDopUpdateManyWithWhereWithoutValijaDopInput[]
    deleteMany?: transaccionesDopScalarWhereInput | transaccionesDopScalarWhereInput[]
  }

  export type ValijaUncheckedUpdateOneWithoutValijaDopNestedInput = {
    create?: XOR<ValijaCreateWithoutValijaDopInput, ValijaUncheckedCreateWithoutValijaDopInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaDopInput
    upsert?: ValijaUpsertWithoutValijaDopInput
    disconnect?: ValijaWhereInput | boolean
    delete?: ValijaWhereInput | boolean
    connect?: ValijaWhereUniqueInput
    update?: XOR<XOR<ValijaUpdateToOneWithWhereWithoutValijaDopInput, ValijaUpdateWithoutValijaDopInput>, ValijaUncheckedUpdateWithoutValijaDopInput>
  }

  export type transaccionesEurCreateNestedManyWithoutValijaEurInput = {
    create?: XOR<transaccionesEurCreateWithoutValijaEurInput, transaccionesEurUncheckedCreateWithoutValijaEurInput> | transaccionesEurCreateWithoutValijaEurInput[] | transaccionesEurUncheckedCreateWithoutValijaEurInput[]
    connectOrCreate?: transaccionesEurCreateOrConnectWithoutValijaEurInput | transaccionesEurCreateOrConnectWithoutValijaEurInput[]
    createMany?: transaccionesEurCreateManyValijaEurInputEnvelope
    connect?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
  }

  export type ValijaCreateNestedOneWithoutValijaEurInput = {
    create?: XOR<ValijaCreateWithoutValijaEurInput, ValijaUncheckedCreateWithoutValijaEurInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaEurInput
    connect?: ValijaWhereUniqueInput
  }

  export type transaccionesEurUncheckedCreateNestedManyWithoutValijaEurInput = {
    create?: XOR<transaccionesEurCreateWithoutValijaEurInput, transaccionesEurUncheckedCreateWithoutValijaEurInput> | transaccionesEurCreateWithoutValijaEurInput[] | transaccionesEurUncheckedCreateWithoutValijaEurInput[]
    connectOrCreate?: transaccionesEurCreateOrConnectWithoutValijaEurInput | transaccionesEurCreateOrConnectWithoutValijaEurInput[]
    createMany?: transaccionesEurCreateManyValijaEurInputEnvelope
    connect?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
  }

  export type ValijaUncheckedCreateNestedOneWithoutValijaEurInput = {
    create?: XOR<ValijaCreateWithoutValijaEurInput, ValijaUncheckedCreateWithoutValijaEurInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaEurInput
    connect?: ValijaWhereUniqueInput
  }

  export type transaccionesEurUpdateManyWithoutValijaEurNestedInput = {
    create?: XOR<transaccionesEurCreateWithoutValijaEurInput, transaccionesEurUncheckedCreateWithoutValijaEurInput> | transaccionesEurCreateWithoutValijaEurInput[] | transaccionesEurUncheckedCreateWithoutValijaEurInput[]
    connectOrCreate?: transaccionesEurCreateOrConnectWithoutValijaEurInput | transaccionesEurCreateOrConnectWithoutValijaEurInput[]
    upsert?: transaccionesEurUpsertWithWhereUniqueWithoutValijaEurInput | transaccionesEurUpsertWithWhereUniqueWithoutValijaEurInput[]
    createMany?: transaccionesEurCreateManyValijaEurInputEnvelope
    set?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    disconnect?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    delete?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    connect?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    update?: transaccionesEurUpdateWithWhereUniqueWithoutValijaEurInput | transaccionesEurUpdateWithWhereUniqueWithoutValijaEurInput[]
    updateMany?: transaccionesEurUpdateManyWithWhereWithoutValijaEurInput | transaccionesEurUpdateManyWithWhereWithoutValijaEurInput[]
    deleteMany?: transaccionesEurScalarWhereInput | transaccionesEurScalarWhereInput[]
  }

  export type ValijaUpdateOneWithoutValijaEurNestedInput = {
    create?: XOR<ValijaCreateWithoutValijaEurInput, ValijaUncheckedCreateWithoutValijaEurInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaEurInput
    upsert?: ValijaUpsertWithoutValijaEurInput
    disconnect?: ValijaWhereInput | boolean
    delete?: ValijaWhereInput | boolean
    connect?: ValijaWhereUniqueInput
    update?: XOR<XOR<ValijaUpdateToOneWithWhereWithoutValijaEurInput, ValijaUpdateWithoutValijaEurInput>, ValijaUncheckedUpdateWithoutValijaEurInput>
  }

  export type transaccionesEurUncheckedUpdateManyWithoutValijaEurNestedInput = {
    create?: XOR<transaccionesEurCreateWithoutValijaEurInput, transaccionesEurUncheckedCreateWithoutValijaEurInput> | transaccionesEurCreateWithoutValijaEurInput[] | transaccionesEurUncheckedCreateWithoutValijaEurInput[]
    connectOrCreate?: transaccionesEurCreateOrConnectWithoutValijaEurInput | transaccionesEurCreateOrConnectWithoutValijaEurInput[]
    upsert?: transaccionesEurUpsertWithWhereUniqueWithoutValijaEurInput | transaccionesEurUpsertWithWhereUniqueWithoutValijaEurInput[]
    createMany?: transaccionesEurCreateManyValijaEurInputEnvelope
    set?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    disconnect?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    delete?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    connect?: transaccionesEurWhereUniqueInput | transaccionesEurWhereUniqueInput[]
    update?: transaccionesEurUpdateWithWhereUniqueWithoutValijaEurInput | transaccionesEurUpdateWithWhereUniqueWithoutValijaEurInput[]
    updateMany?: transaccionesEurUpdateManyWithWhereWithoutValijaEurInput | transaccionesEurUpdateManyWithWhereWithoutValijaEurInput[]
    deleteMany?: transaccionesEurScalarWhereInput | transaccionesEurScalarWhereInput[]
  }

  export type ValijaUncheckedUpdateOneWithoutValijaEurNestedInput = {
    create?: XOR<ValijaCreateWithoutValijaEurInput, ValijaUncheckedCreateWithoutValijaEurInput>
    connectOrCreate?: ValijaCreateOrConnectWithoutValijaEurInput
    upsert?: ValijaUpsertWithoutValijaEurInput
    disconnect?: ValijaWhereInput | boolean
    delete?: ValijaWhereInput | boolean
    connect?: ValijaWhereUniqueInput
    update?: XOR<XOR<ValijaUpdateToOneWithWhereWithoutValijaEurInput, ValijaUpdateWithoutValijaEurInput>, ValijaUncheckedUpdateWithoutValijaEurInput>
  }

  export type ValijaUsdCreateNestedOneWithoutTransaccionUsdInput = {
    create?: XOR<ValijaUsdCreateWithoutTransaccionUsdInput, ValijaUsdUncheckedCreateWithoutTransaccionUsdInput>
    connectOrCreate?: ValijaUsdCreateOrConnectWithoutTransaccionUsdInput
    connect?: ValijaUsdWhereUniqueInput
  }

  export type ValijaUsdUpdateOneRequiredWithoutTransaccionUsdNestedInput = {
    create?: XOR<ValijaUsdCreateWithoutTransaccionUsdInput, ValijaUsdUncheckedCreateWithoutTransaccionUsdInput>
    connectOrCreate?: ValijaUsdCreateOrConnectWithoutTransaccionUsdInput
    upsert?: ValijaUsdUpsertWithoutTransaccionUsdInput
    connect?: ValijaUsdWhereUniqueInput
    update?: XOR<XOR<ValijaUsdUpdateToOneWithWhereWithoutTransaccionUsdInput, ValijaUsdUpdateWithoutTransaccionUsdInput>, ValijaUsdUncheckedUpdateWithoutTransaccionUsdInput>
  }

  export type ValijaDopCreateNestedOneWithoutTransaccionDopInput = {
    create?: XOR<ValijaDopCreateWithoutTransaccionDopInput, ValijaDopUncheckedCreateWithoutTransaccionDopInput>
    connectOrCreate?: ValijaDopCreateOrConnectWithoutTransaccionDopInput
    connect?: ValijaDopWhereUniqueInput
  }

  export type ValijaDopUpdateOneRequiredWithoutTransaccionDopNestedInput = {
    create?: XOR<ValijaDopCreateWithoutTransaccionDopInput, ValijaDopUncheckedCreateWithoutTransaccionDopInput>
    connectOrCreate?: ValijaDopCreateOrConnectWithoutTransaccionDopInput
    upsert?: ValijaDopUpsertWithoutTransaccionDopInput
    connect?: ValijaDopWhereUniqueInput
    update?: XOR<XOR<ValijaDopUpdateToOneWithWhereWithoutTransaccionDopInput, ValijaDopUpdateWithoutTransaccionDopInput>, ValijaDopUncheckedUpdateWithoutTransaccionDopInput>
  }

  export type ValijaEurCreateNestedOneWithoutTransaccionEurInput = {
    create?: XOR<ValijaEurCreateWithoutTransaccionEurInput, ValijaEurUncheckedCreateWithoutTransaccionEurInput>
    connectOrCreate?: ValijaEurCreateOrConnectWithoutTransaccionEurInput
    connect?: ValijaEurWhereUniqueInput
  }

  export type ValijaEurUpdateOneRequiredWithoutTransaccionEurNestedInput = {
    create?: XOR<ValijaEurCreateWithoutTransaccionEurInput, ValijaEurUncheckedCreateWithoutTransaccionEurInput>
    connectOrCreate?: ValijaEurCreateOrConnectWithoutTransaccionEurInput
    upsert?: ValijaEurUpsertWithoutTransaccionEurInput
    connect?: ValijaEurWhereUniqueInput
    update?: XOR<XOR<ValijaEurUpdateToOneWithWhereWithoutTransaccionEurInput, ValijaEurUpdateWithoutTransaccionEurInput>, ValijaEurUncheckedUpdateWithoutTransaccionEurInput>
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

  export type ValijaDopCreateWithoutValijaInput = {
    depositos?: number | null
    transaccionDop?: transaccionesDopCreateNestedManyWithoutValijaDopInput
  }

  export type ValijaDopUncheckedCreateWithoutValijaInput = {
    id?: number
    depositos?: number | null
    transaccionDop?: transaccionesDopUncheckedCreateNestedManyWithoutValijaDopInput
  }

  export type ValijaDopCreateOrConnectWithoutValijaInput = {
    where: ValijaDopWhereUniqueInput
    create: XOR<ValijaDopCreateWithoutValijaInput, ValijaDopUncheckedCreateWithoutValijaInput>
  }

  export type ValijaEurCreateWithoutValijaInput = {
    depositos?: number
    transaccionEur?: transaccionesEurCreateNestedManyWithoutValijaEurInput
  }

  export type ValijaEurUncheckedCreateWithoutValijaInput = {
    id?: number
    depositos?: number
    transaccionEur?: transaccionesEurUncheckedCreateNestedManyWithoutValijaEurInput
  }

  export type ValijaEurCreateOrConnectWithoutValijaInput = {
    where: ValijaEurWhereUniqueInput
    create: XOR<ValijaEurCreateWithoutValijaInput, ValijaEurUncheckedCreateWithoutValijaInput>
  }

  export type ValijaUsdCreateWithoutValijaInput = {
    depositos?: number
    transaccionUsd?: transaccionesUsdCreateNestedManyWithoutValijaUsdInput
  }

  export type ValijaUsdUncheckedCreateWithoutValijaInput = {
    id?: number
    depositos?: number
    transaccionUsd?: transaccionesUsdUncheckedCreateNestedManyWithoutValijaUsdInput
  }

  export type ValijaUsdCreateOrConnectWithoutValijaInput = {
    where: ValijaUsdWhereUniqueInput
    create: XOR<ValijaUsdCreateWithoutValijaInput, ValijaUsdUncheckedCreateWithoutValijaInput>
  }

  export type ValijaDopUpsertWithoutValijaInput = {
    update: XOR<ValijaDopUpdateWithoutValijaInput, ValijaDopUncheckedUpdateWithoutValijaInput>
    create: XOR<ValijaDopCreateWithoutValijaInput, ValijaDopUncheckedCreateWithoutValijaInput>
    where?: ValijaDopWhereInput
  }

  export type ValijaDopUpdateToOneWithWhereWithoutValijaInput = {
    where?: ValijaDopWhereInput
    data: XOR<ValijaDopUpdateWithoutValijaInput, ValijaDopUncheckedUpdateWithoutValijaInput>
  }

  export type ValijaDopUpdateWithoutValijaInput = {
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
    transaccionDop?: transaccionesDopUpdateManyWithoutValijaDopNestedInput
  }

  export type ValijaDopUncheckedUpdateWithoutValijaInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
    transaccionDop?: transaccionesDopUncheckedUpdateManyWithoutValijaDopNestedInput
  }

  export type ValijaEurUpsertWithoutValijaInput = {
    update: XOR<ValijaEurUpdateWithoutValijaInput, ValijaEurUncheckedUpdateWithoutValijaInput>
    create: XOR<ValijaEurCreateWithoutValijaInput, ValijaEurUncheckedCreateWithoutValijaInput>
    where?: ValijaEurWhereInput
  }

  export type ValijaEurUpdateToOneWithWhereWithoutValijaInput = {
    where?: ValijaEurWhereInput
    data: XOR<ValijaEurUpdateWithoutValijaInput, ValijaEurUncheckedUpdateWithoutValijaInput>
  }

  export type ValijaEurUpdateWithoutValijaInput = {
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionEur?: transaccionesEurUpdateManyWithoutValijaEurNestedInput
  }

  export type ValijaEurUncheckedUpdateWithoutValijaInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionEur?: transaccionesEurUncheckedUpdateManyWithoutValijaEurNestedInput
  }

  export type ValijaUsdUpsertWithoutValijaInput = {
    update: XOR<ValijaUsdUpdateWithoutValijaInput, ValijaUsdUncheckedUpdateWithoutValijaInput>
    create: XOR<ValijaUsdCreateWithoutValijaInput, ValijaUsdUncheckedCreateWithoutValijaInput>
    where?: ValijaUsdWhereInput
  }

  export type ValijaUsdUpdateToOneWithWhereWithoutValijaInput = {
    where?: ValijaUsdWhereInput
    data: XOR<ValijaUsdUpdateWithoutValijaInput, ValijaUsdUncheckedUpdateWithoutValijaInput>
  }

  export type ValijaUsdUpdateWithoutValijaInput = {
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionUsd?: transaccionesUsdUpdateManyWithoutValijaUsdNestedInput
  }

  export type ValijaUsdUncheckedUpdateWithoutValijaInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
    transaccionUsd?: transaccionesUsdUncheckedUpdateManyWithoutValijaUsdNestedInput
  }

  export type transaccionesUsdCreateWithoutValijaUsdInput = {
    D1?: number
    D2?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
  }

  export type transaccionesUsdUncheckedCreateWithoutValijaUsdInput = {
    id?: number
    D1?: number
    D2?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
  }

  export type transaccionesUsdCreateOrConnectWithoutValijaUsdInput = {
    where: transaccionesUsdWhereUniqueInput
    create: XOR<transaccionesUsdCreateWithoutValijaUsdInput, transaccionesUsdUncheckedCreateWithoutValijaUsdInput>
  }

  export type transaccionesUsdCreateManyValijaUsdInputEnvelope = {
    data: transaccionesUsdCreateManyValijaUsdInput | transaccionesUsdCreateManyValijaUsdInput[]
    skipDuplicates?: boolean
  }

  export type ValijaCreateWithoutValijaUsdInput = {
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaDop?: ValijaDopCreateNestedOneWithoutValijaInput
    valijaEur?: ValijaEurCreateNestedOneWithoutValijaInput
  }

  export type ValijaUncheckedCreateWithoutValijaUsdInput = {
    id?: number
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaDopId?: number | null
    valijaEurId?: number | null
  }

  export type ValijaCreateOrConnectWithoutValijaUsdInput = {
    where: ValijaWhereUniqueInput
    create: XOR<ValijaCreateWithoutValijaUsdInput, ValijaUncheckedCreateWithoutValijaUsdInput>
  }

  export type transaccionesUsdUpsertWithWhereUniqueWithoutValijaUsdInput = {
    where: transaccionesUsdWhereUniqueInput
    update: XOR<transaccionesUsdUpdateWithoutValijaUsdInput, transaccionesUsdUncheckedUpdateWithoutValijaUsdInput>
    create: XOR<transaccionesUsdCreateWithoutValijaUsdInput, transaccionesUsdUncheckedCreateWithoutValijaUsdInput>
  }

  export type transaccionesUsdUpdateWithWhereUniqueWithoutValijaUsdInput = {
    where: transaccionesUsdWhereUniqueInput
    data: XOR<transaccionesUsdUpdateWithoutValijaUsdInput, transaccionesUsdUncheckedUpdateWithoutValijaUsdInput>
  }

  export type transaccionesUsdUpdateManyWithWhereWithoutValijaUsdInput = {
    where: transaccionesUsdScalarWhereInput
    data: XOR<transaccionesUsdUpdateManyMutationInput, transaccionesUsdUncheckedUpdateManyWithoutValijaUsdInput>
  }

  export type transaccionesUsdScalarWhereInput = {
    AND?: transaccionesUsdScalarWhereInput | transaccionesUsdScalarWhereInput[]
    OR?: transaccionesUsdScalarWhereInput[]
    NOT?: transaccionesUsdScalarWhereInput | transaccionesUsdScalarWhereInput[]
    id?: IntFilter<"transaccionesUsd"> | number
    D1?: IntFilter<"transaccionesUsd"> | number
    D2?: IntFilter<"transaccionesUsd"> | number
    D5?: IntFilter<"transaccionesUsd"> | number
    D10?: IntFilter<"transaccionesUsd"> | number
    D20?: IntFilter<"transaccionesUsd"> | number
    D50?: IntFilter<"transaccionesUsd"> | number
    D100?: IntFilter<"transaccionesUsd"> | number
    valijaUsdId?: IntFilter<"transaccionesUsd"> | number
  }

  export type ValijaUpsertWithoutValijaUsdInput = {
    update: XOR<ValijaUpdateWithoutValijaUsdInput, ValijaUncheckedUpdateWithoutValijaUsdInput>
    create: XOR<ValijaCreateWithoutValijaUsdInput, ValijaUncheckedCreateWithoutValijaUsdInput>
    where?: ValijaWhereInput
  }

  export type ValijaUpdateToOneWithWhereWithoutValijaUsdInput = {
    where?: ValijaWhereInput
    data: XOR<ValijaUpdateWithoutValijaUsdInput, ValijaUncheckedUpdateWithoutValijaUsdInput>
  }

  export type ValijaUpdateWithoutValijaUsdInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaDop?: ValijaDopUpdateOneWithoutValijaNestedInput
    valijaEur?: ValijaEurUpdateOneWithoutValijaNestedInput
  }

  export type ValijaUncheckedUpdateWithoutValijaUsdInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaDopId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaEurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccionesDopCreateWithoutValijaDopInput = {
    D1?: number
    D5?: number
    D10?: number
    D25?: number
    D50?: number
    D100?: number
    D200?: number
    D500?: number
    D1000?: number
    D2000?: number
  }

  export type transaccionesDopUncheckedCreateWithoutValijaDopInput = {
    id?: number
    D1?: number
    D5?: number
    D10?: number
    D25?: number
    D50?: number
    D100?: number
    D200?: number
    D500?: number
    D1000?: number
    D2000?: number
  }

  export type transaccionesDopCreateOrConnectWithoutValijaDopInput = {
    where: transaccionesDopWhereUniqueInput
    create: XOR<transaccionesDopCreateWithoutValijaDopInput, transaccionesDopUncheckedCreateWithoutValijaDopInput>
  }

  export type transaccionesDopCreateManyValijaDopInputEnvelope = {
    data: transaccionesDopCreateManyValijaDopInput | transaccionesDopCreateManyValijaDopInput[]
    skipDuplicates?: boolean
  }

  export type ValijaCreateWithoutValijaDopInput = {
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaEur?: ValijaEurCreateNestedOneWithoutValijaInput
    valijaUsd?: ValijaUsdCreateNestedOneWithoutValijaInput
  }

  export type ValijaUncheckedCreateWithoutValijaDopInput = {
    id?: number
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaUsdId?: number | null
    valijaEurId?: number | null
  }

  export type ValijaCreateOrConnectWithoutValijaDopInput = {
    where: ValijaWhereUniqueInput
    create: XOR<ValijaCreateWithoutValijaDopInput, ValijaUncheckedCreateWithoutValijaDopInput>
  }

  export type transaccionesDopUpsertWithWhereUniqueWithoutValijaDopInput = {
    where: transaccionesDopWhereUniqueInput
    update: XOR<transaccionesDopUpdateWithoutValijaDopInput, transaccionesDopUncheckedUpdateWithoutValijaDopInput>
    create: XOR<transaccionesDopCreateWithoutValijaDopInput, transaccionesDopUncheckedCreateWithoutValijaDopInput>
  }

  export type transaccionesDopUpdateWithWhereUniqueWithoutValijaDopInput = {
    where: transaccionesDopWhereUniqueInput
    data: XOR<transaccionesDopUpdateWithoutValijaDopInput, transaccionesDopUncheckedUpdateWithoutValijaDopInput>
  }

  export type transaccionesDopUpdateManyWithWhereWithoutValijaDopInput = {
    where: transaccionesDopScalarWhereInput
    data: XOR<transaccionesDopUpdateManyMutationInput, transaccionesDopUncheckedUpdateManyWithoutValijaDopInput>
  }

  export type transaccionesDopScalarWhereInput = {
    AND?: transaccionesDopScalarWhereInput | transaccionesDopScalarWhereInput[]
    OR?: transaccionesDopScalarWhereInput[]
    NOT?: transaccionesDopScalarWhereInput | transaccionesDopScalarWhereInput[]
    id?: IntFilter<"transaccionesDop"> | number
    D1?: IntFilter<"transaccionesDop"> | number
    D5?: IntFilter<"transaccionesDop"> | number
    D10?: IntFilter<"transaccionesDop"> | number
    D25?: IntFilter<"transaccionesDop"> | number
    D50?: IntFilter<"transaccionesDop"> | number
    D100?: IntFilter<"transaccionesDop"> | number
    D200?: IntFilter<"transaccionesDop"> | number
    D500?: IntFilter<"transaccionesDop"> | number
    D1000?: IntFilter<"transaccionesDop"> | number
    D2000?: IntFilter<"transaccionesDop"> | number
    valijaDopId?: IntFilter<"transaccionesDop"> | number
  }

  export type ValijaUpsertWithoutValijaDopInput = {
    update: XOR<ValijaUpdateWithoutValijaDopInput, ValijaUncheckedUpdateWithoutValijaDopInput>
    create: XOR<ValijaCreateWithoutValijaDopInput, ValijaUncheckedCreateWithoutValijaDopInput>
    where?: ValijaWhereInput
  }

  export type ValijaUpdateToOneWithWhereWithoutValijaDopInput = {
    where?: ValijaWhereInput
    data: XOR<ValijaUpdateWithoutValijaDopInput, ValijaUncheckedUpdateWithoutValijaDopInput>
  }

  export type ValijaUpdateWithoutValijaDopInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaEur?: ValijaEurUpdateOneWithoutValijaNestedInput
    valijaUsd?: ValijaUsdUpdateOneWithoutValijaNestedInput
  }

  export type ValijaUncheckedUpdateWithoutValijaDopInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaUsdId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaEurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccionesEurCreateWithoutValijaEurInput = {
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
  }

  export type transaccionesEurUncheckedCreateWithoutValijaEurInput = {
    id?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
  }

  export type transaccionesEurCreateOrConnectWithoutValijaEurInput = {
    where: transaccionesEurWhereUniqueInput
    create: XOR<transaccionesEurCreateWithoutValijaEurInput, transaccionesEurUncheckedCreateWithoutValijaEurInput>
  }

  export type transaccionesEurCreateManyValijaEurInputEnvelope = {
    data: transaccionesEurCreateManyValijaEurInput | transaccionesEurCreateManyValijaEurInput[]
    skipDuplicates?: boolean
  }

  export type ValijaCreateWithoutValijaEurInput = {
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaDop?: ValijaDopCreateNestedOneWithoutValijaInput
    valijaUsd?: ValijaUsdCreateNestedOneWithoutValijaInput
  }

  export type ValijaUncheckedCreateWithoutValijaEurInput = {
    id?: number
    codigo: string
    usuarioACargo: string
    llegada?: Date | string
    ultimaModificacion?: Date | string
    valijaUsdId?: number | null
    valijaDopId?: number | null
  }

  export type ValijaCreateOrConnectWithoutValijaEurInput = {
    where: ValijaWhereUniqueInput
    create: XOR<ValijaCreateWithoutValijaEurInput, ValijaUncheckedCreateWithoutValijaEurInput>
  }

  export type transaccionesEurUpsertWithWhereUniqueWithoutValijaEurInput = {
    where: transaccionesEurWhereUniqueInput
    update: XOR<transaccionesEurUpdateWithoutValijaEurInput, transaccionesEurUncheckedUpdateWithoutValijaEurInput>
    create: XOR<transaccionesEurCreateWithoutValijaEurInput, transaccionesEurUncheckedCreateWithoutValijaEurInput>
  }

  export type transaccionesEurUpdateWithWhereUniqueWithoutValijaEurInput = {
    where: transaccionesEurWhereUniqueInput
    data: XOR<transaccionesEurUpdateWithoutValijaEurInput, transaccionesEurUncheckedUpdateWithoutValijaEurInput>
  }

  export type transaccionesEurUpdateManyWithWhereWithoutValijaEurInput = {
    where: transaccionesEurScalarWhereInput
    data: XOR<transaccionesEurUpdateManyMutationInput, transaccionesEurUncheckedUpdateManyWithoutValijaEurInput>
  }

  export type transaccionesEurScalarWhereInput = {
    AND?: transaccionesEurScalarWhereInput | transaccionesEurScalarWhereInput[]
    OR?: transaccionesEurScalarWhereInput[]
    NOT?: transaccionesEurScalarWhereInput | transaccionesEurScalarWhereInput[]
    id?: IntFilter<"transaccionesEur"> | number
    D5?: IntFilter<"transaccionesEur"> | number
    D10?: IntFilter<"transaccionesEur"> | number
    D20?: IntFilter<"transaccionesEur"> | number
    D50?: IntFilter<"transaccionesEur"> | number
    D100?: IntFilter<"transaccionesEur"> | number
    valijaEurId?: IntFilter<"transaccionesEur"> | number
  }

  export type ValijaUpsertWithoutValijaEurInput = {
    update: XOR<ValijaUpdateWithoutValijaEurInput, ValijaUncheckedUpdateWithoutValijaEurInput>
    create: XOR<ValijaCreateWithoutValijaEurInput, ValijaUncheckedCreateWithoutValijaEurInput>
    where?: ValijaWhereInput
  }

  export type ValijaUpdateToOneWithWhereWithoutValijaEurInput = {
    where?: ValijaWhereInput
    data: XOR<ValijaUpdateWithoutValijaEurInput, ValijaUncheckedUpdateWithoutValijaEurInput>
  }

  export type ValijaUpdateWithoutValijaEurInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaDop?: ValijaDopUpdateOneWithoutValijaNestedInput
    valijaUsd?: ValijaUsdUpdateOneWithoutValijaNestedInput
  }

  export type ValijaUncheckedUpdateWithoutValijaEurInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    usuarioACargo?: StringFieldUpdateOperationsInput | string
    llegada?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    valijaUsdId?: NullableIntFieldUpdateOperationsInput | number | null
    valijaDopId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ValijaUsdCreateWithoutTransaccionUsdInput = {
    depositos?: number
    valija?: ValijaCreateNestedOneWithoutValijaUsdInput
  }

  export type ValijaUsdUncheckedCreateWithoutTransaccionUsdInput = {
    id?: number
    depositos?: number
    valija?: ValijaUncheckedCreateNestedOneWithoutValijaUsdInput
  }

  export type ValijaUsdCreateOrConnectWithoutTransaccionUsdInput = {
    where: ValijaUsdWhereUniqueInput
    create: XOR<ValijaUsdCreateWithoutTransaccionUsdInput, ValijaUsdUncheckedCreateWithoutTransaccionUsdInput>
  }

  export type ValijaUsdUpsertWithoutTransaccionUsdInput = {
    update: XOR<ValijaUsdUpdateWithoutTransaccionUsdInput, ValijaUsdUncheckedUpdateWithoutTransaccionUsdInput>
    create: XOR<ValijaUsdCreateWithoutTransaccionUsdInput, ValijaUsdUncheckedCreateWithoutTransaccionUsdInput>
    where?: ValijaUsdWhereInput
  }

  export type ValijaUsdUpdateToOneWithWhereWithoutTransaccionUsdInput = {
    where?: ValijaUsdWhereInput
    data: XOR<ValijaUsdUpdateWithoutTransaccionUsdInput, ValijaUsdUncheckedUpdateWithoutTransaccionUsdInput>
  }

  export type ValijaUsdUpdateWithoutTransaccionUsdInput = {
    depositos?: IntFieldUpdateOperationsInput | number
    valija?: ValijaUpdateOneWithoutValijaUsdNestedInput
  }

  export type ValijaUsdUncheckedUpdateWithoutTransaccionUsdInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
    valija?: ValijaUncheckedUpdateOneWithoutValijaUsdNestedInput
  }

  export type ValijaDopCreateWithoutTransaccionDopInput = {
    depositos?: number | null
    valija?: ValijaCreateNestedOneWithoutValijaDopInput
  }

  export type ValijaDopUncheckedCreateWithoutTransaccionDopInput = {
    id?: number
    depositos?: number | null
    valija?: ValijaUncheckedCreateNestedOneWithoutValijaDopInput
  }

  export type ValijaDopCreateOrConnectWithoutTransaccionDopInput = {
    where: ValijaDopWhereUniqueInput
    create: XOR<ValijaDopCreateWithoutTransaccionDopInput, ValijaDopUncheckedCreateWithoutTransaccionDopInput>
  }

  export type ValijaDopUpsertWithoutTransaccionDopInput = {
    update: XOR<ValijaDopUpdateWithoutTransaccionDopInput, ValijaDopUncheckedUpdateWithoutTransaccionDopInput>
    create: XOR<ValijaDopCreateWithoutTransaccionDopInput, ValijaDopUncheckedCreateWithoutTransaccionDopInput>
    where?: ValijaDopWhereInput
  }

  export type ValijaDopUpdateToOneWithWhereWithoutTransaccionDopInput = {
    where?: ValijaDopWhereInput
    data: XOR<ValijaDopUpdateWithoutTransaccionDopInput, ValijaDopUncheckedUpdateWithoutTransaccionDopInput>
  }

  export type ValijaDopUpdateWithoutTransaccionDopInput = {
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
    valija?: ValijaUpdateOneWithoutValijaDopNestedInput
  }

  export type ValijaDopUncheckedUpdateWithoutTransaccionDopInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: NullableIntFieldUpdateOperationsInput | number | null
    valija?: ValijaUncheckedUpdateOneWithoutValijaDopNestedInput
  }

  export type ValijaEurCreateWithoutTransaccionEurInput = {
    depositos?: number
    valija?: ValijaCreateNestedOneWithoutValijaEurInput
  }

  export type ValijaEurUncheckedCreateWithoutTransaccionEurInput = {
    id?: number
    depositos?: number
    valija?: ValijaUncheckedCreateNestedOneWithoutValijaEurInput
  }

  export type ValijaEurCreateOrConnectWithoutTransaccionEurInput = {
    where: ValijaEurWhereUniqueInput
    create: XOR<ValijaEurCreateWithoutTransaccionEurInput, ValijaEurUncheckedCreateWithoutTransaccionEurInput>
  }

  export type ValijaEurUpsertWithoutTransaccionEurInput = {
    update: XOR<ValijaEurUpdateWithoutTransaccionEurInput, ValijaEurUncheckedUpdateWithoutTransaccionEurInput>
    create: XOR<ValijaEurCreateWithoutTransaccionEurInput, ValijaEurUncheckedCreateWithoutTransaccionEurInput>
    where?: ValijaEurWhereInput
  }

  export type ValijaEurUpdateToOneWithWhereWithoutTransaccionEurInput = {
    where?: ValijaEurWhereInput
    data: XOR<ValijaEurUpdateWithoutTransaccionEurInput, ValijaEurUncheckedUpdateWithoutTransaccionEurInput>
  }

  export type ValijaEurUpdateWithoutTransaccionEurInput = {
    depositos?: IntFieldUpdateOperationsInput | number
    valija?: ValijaUpdateOneWithoutValijaEurNestedInput
  }

  export type ValijaEurUncheckedUpdateWithoutTransaccionEurInput = {
    id?: IntFieldUpdateOperationsInput | number
    depositos?: IntFieldUpdateOperationsInput | number
    valija?: ValijaUncheckedUpdateOneWithoutValijaEurNestedInput
  }

  export type transaccionesUsdCreateManyValijaUsdInput = {
    id?: number
    D1?: number
    D2?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
  }

  export type transaccionesUsdUpdateWithoutValijaUsdInput = {
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesUsdUncheckedUpdateWithoutValijaUsdInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesUsdUncheckedUpdateManyWithoutValijaUsdInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D2?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesDopCreateManyValijaDopInput = {
    id?: number
    D1?: number
    D5?: number
    D10?: number
    D25?: number
    D50?: number
    D100?: number
    D200?: number
    D500?: number
    D1000?: number
    D2000?: number
  }

  export type transaccionesDopUpdateWithoutValijaDopInput = {
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesDopUncheckedUpdateWithoutValijaDopInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesDopUncheckedUpdateManyWithoutValijaDopInput = {
    id?: IntFieldUpdateOperationsInput | number
    D1?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D25?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
    D200?: IntFieldUpdateOperationsInput | number
    D500?: IntFieldUpdateOperationsInput | number
    D1000?: IntFieldUpdateOperationsInput | number
    D2000?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesEurCreateManyValijaEurInput = {
    id?: number
    D5?: number
    D10?: number
    D20?: number
    D50?: number
    D100?: number
  }

  export type transaccionesEurUpdateWithoutValijaEurInput = {
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesEurUncheckedUpdateWithoutValijaEurInput = {
    id?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionesEurUncheckedUpdateManyWithoutValijaEurInput = {
    id?: IntFieldUpdateOperationsInput | number
    D5?: IntFieldUpdateOperationsInput | number
    D10?: IntFieldUpdateOperationsInput | number
    D20?: IntFieldUpdateOperationsInput | number
    D50?: IntFieldUpdateOperationsInput | number
    D100?: IntFieldUpdateOperationsInput | number
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