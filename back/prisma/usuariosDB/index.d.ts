
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Saldo
 * 
 */
export type Saldo = $Result.DefaultSelection<Prisma.$SaldoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saldo`: Exposes CRUD operations for the **Saldo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saldos
    * const saldos = await prisma.saldo.findMany()
    * ```
    */
  get saldo(): Prisma.SaldoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Usuario: 'Usuario',
    Saldo: 'Saldo'
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
      modelProps: "usuario" | "saldo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Saldo: {
        payload: Prisma.$SaldoPayload<ExtArgs>
        fields: Prisma.SaldoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaldoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaldoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>
          }
          findFirst: {
            args: Prisma.SaldoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaldoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>
          }
          findMany: {
            args: Prisma.SaldoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>[]
          }
          create: {
            args: Prisma.SaldoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>
          }
          createMany: {
            args: Prisma.SaldoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaldoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>[]
          }
          delete: {
            args: Prisma.SaldoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>
          }
          update: {
            args: Prisma.SaldoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>
          }
          deleteMany: {
            args: Prisma.SaldoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaldoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaldoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>[]
          }
          upsert: {
            args: Prisma.SaldoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaldoPayload>
          }
          aggregate: {
            args: Prisma.SaldoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaldo>
          }
          groupBy: {
            args: Prisma.SaldoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaldoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaldoCountArgs<ExtArgs>
            result: $Utils.Optional<SaldoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    saldo?: SaldoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    colaboradores: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colaboradores?: boolean | UsuarioCountOutputTypeCountColaboradoresArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountColaboradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    codigoEmpleado: number | null
    SupervisorID: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    codigoEmpleado: number | null
    SupervisorID: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    contrasena: string | null
    codigoEmpleado: number | null
    cargo: string | null
    transferencia: boolean | null
    recepcion: boolean | null
    preparacion: boolean | null
    EIE: boolean | null
    SupervisorID: number | null
    saldoId: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    contrasena: string | null
    codigoEmpleado: number | null
    cargo: string | null
    transferencia: boolean | null
    recepcion: boolean | null
    preparacion: boolean | null
    EIE: boolean | null
    SupervisorID: number | null
    saldoId: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    contrasena: number
    codigoEmpleado: number
    cargo: number
    inventario: number
    transferencia: number
    recepcion: number
    preparacion: number
    EIE: number
    SupervisorID: number
    saldoId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    codigoEmpleado?: true
    SupervisorID?: true
  }

  export type UsuarioSumAggregateInputType = {
    codigoEmpleado?: true
    SupervisorID?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    codigoEmpleado?: true
    cargo?: true
    transferencia?: true
    recepcion?: true
    preparacion?: true
    EIE?: true
    SupervisorID?: true
    saldoId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    codigoEmpleado?: true
    cargo?: true
    transferencia?: true
    recepcion?: true
    preparacion?: true
    EIE?: true
    SupervisorID?: true
    saldoId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    codigoEmpleado?: true
    cargo?: true
    inventario?: true
    transferencia?: true
    recepcion?: true
    preparacion?: true
    EIE?: true
    SupervisorID?: true
    saldoId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    contrasena: string
    codigoEmpleado: number
    cargo: string
    inventario: string[]
    transferencia: boolean
    recepcion: boolean
    preparacion: boolean
    EIE: boolean
    SupervisorID: number | null
    saldoId: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    codigoEmpleado?: boolean
    cargo?: boolean
    inventario?: boolean
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: boolean
    saldoId?: boolean
    Supervisor?: boolean | Usuario$SupervisorArgs<ExtArgs>
    colaboradores?: boolean | Usuario$colaboradoresArgs<ExtArgs>
    saldo?: boolean | SaldoDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    codigoEmpleado?: boolean
    cargo?: boolean
    inventario?: boolean
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: boolean
    saldoId?: boolean
    Supervisor?: boolean | Usuario$SupervisorArgs<ExtArgs>
    saldo?: boolean | SaldoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    codigoEmpleado?: boolean
    cargo?: boolean
    inventario?: boolean
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: boolean
    saldoId?: boolean
    Supervisor?: boolean | Usuario$SupervisorArgs<ExtArgs>
    saldo?: boolean | SaldoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    codigoEmpleado?: boolean
    cargo?: boolean
    inventario?: boolean
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: boolean
    saldoId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "contrasena" | "codigoEmpleado" | "cargo" | "inventario" | "transferencia" | "recepcion" | "preparacion" | "EIE" | "SupervisorID" | "saldoId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Supervisor?: boolean | Usuario$SupervisorArgs<ExtArgs>
    colaboradores?: boolean | Usuario$colaboradoresArgs<ExtArgs>
    saldo?: boolean | SaldoDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Supervisor?: boolean | Usuario$SupervisorArgs<ExtArgs>
    saldo?: boolean | SaldoDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Supervisor?: boolean | Usuario$SupervisorArgs<ExtArgs>
    saldo?: boolean | SaldoDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Supervisor: Prisma.$UsuarioPayload<ExtArgs> | null
      colaboradores: Prisma.$UsuarioPayload<ExtArgs>[]
      saldo: Prisma.$SaldoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      contrasena: string
      codigoEmpleado: number
      cargo: string
      inventario: string[]
      transferencia: boolean
      recepcion: boolean
      preparacion: boolean
      EIE: boolean
      SupervisorID: number | null
      saldoId: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Supervisor<T extends Usuario$SupervisorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$SupervisorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    colaboradores<T extends Usuario$colaboradoresArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$colaboradoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saldo<T extends SaldoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaldoDefaultArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly codigoEmpleado: FieldRef<"Usuario", 'Int'>
    readonly cargo: FieldRef<"Usuario", 'String'>
    readonly inventario: FieldRef<"Usuario", 'String[]'>
    readonly transferencia: FieldRef<"Usuario", 'Boolean'>
    readonly recepcion: FieldRef<"Usuario", 'Boolean'>
    readonly preparacion: FieldRef<"Usuario", 'Boolean'>
    readonly EIE: FieldRef<"Usuario", 'Boolean'>
    readonly SupervisorID: FieldRef<"Usuario", 'Int'>
    readonly saldoId: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Supervisor
   */
  export type Usuario$SupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.colaboradores
   */
  export type Usuario$colaboradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Saldo
   */

  export type AggregateSaldo = {
    _count: SaldoCountAggregateOutputType | null
    _avg: SaldoAvgAggregateOutputType | null
    _sum: SaldoSumAggregateOutputType | null
    _min: SaldoMinAggregateOutputType | null
    _max: SaldoMaxAggregateOutputType | null
  }

  export type SaldoAvgAggregateOutputType = {
    RD1: number | null
    RD5: number | null
    RD10: number | null
    RD25: number | null
    RD100: number | null
    RD200: number | null
    RD500: number | null
    RD1000: number | null
    RD2000: number | null
    USD1: number | null
    USD2: number | null
    USD5: number | null
    USD10: number | null
    USD20: number | null
    USD50: number | null
    USD100: number | null
    EUR5: number | null
    EUR10: number | null
    EUR20: number | null
    EUR50: number | null
    EUR100: number | null
  }

  export type SaldoSumAggregateOutputType = {
    RD1: number | null
    RD5: number | null
    RD10: number | null
    RD25: number | null
    RD100: number | null
    RD200: number | null
    RD500: number | null
    RD1000: number | null
    RD2000: number | null
    USD1: number | null
    USD2: number | null
    USD5: number | null
    USD10: number | null
    USD20: number | null
    USD50: number | null
    USD100: number | null
    EUR5: number | null
    EUR10: number | null
    EUR20: number | null
    EUR50: number | null
    EUR100: number | null
  }

  export type SaldoMinAggregateOutputType = {
    id: string | null
    RD1: number | null
    RD5: number | null
    RD10: number | null
    RD25: number | null
    RD100: number | null
    RD200: number | null
    RD500: number | null
    RD1000: number | null
    RD2000: number | null
    USD1: number | null
    USD2: number | null
    USD5: number | null
    USD10: number | null
    USD20: number | null
    USD50: number | null
    USD100: number | null
    EUR5: number | null
    EUR10: number | null
    EUR20: number | null
    EUR50: number | null
    EUR100: number | null
  }

  export type SaldoMaxAggregateOutputType = {
    id: string | null
    RD1: number | null
    RD5: number | null
    RD10: number | null
    RD25: number | null
    RD100: number | null
    RD200: number | null
    RD500: number | null
    RD1000: number | null
    RD2000: number | null
    USD1: number | null
    USD2: number | null
    USD5: number | null
    USD10: number | null
    USD20: number | null
    USD50: number | null
    USD100: number | null
    EUR5: number | null
    EUR10: number | null
    EUR20: number | null
    EUR50: number | null
    EUR100: number | null
  }

  export type SaldoCountAggregateOutputType = {
    id: number
    RD1: number
    RD5: number
    RD10: number
    RD25: number
    RD100: number
    RD200: number
    RD500: number
    RD1000: number
    RD2000: number
    USD1: number
    USD2: number
    USD5: number
    USD10: number
    USD20: number
    USD50: number
    USD100: number
    EUR5: number
    EUR10: number
    EUR20: number
    EUR50: number
    EUR100: number
    _all: number
  }


  export type SaldoAvgAggregateInputType = {
    RD1?: true
    RD5?: true
    RD10?: true
    RD25?: true
    RD100?: true
    RD200?: true
    RD500?: true
    RD1000?: true
    RD2000?: true
    USD1?: true
    USD2?: true
    USD5?: true
    USD10?: true
    USD20?: true
    USD50?: true
    USD100?: true
    EUR5?: true
    EUR10?: true
    EUR20?: true
    EUR50?: true
    EUR100?: true
  }

  export type SaldoSumAggregateInputType = {
    RD1?: true
    RD5?: true
    RD10?: true
    RD25?: true
    RD100?: true
    RD200?: true
    RD500?: true
    RD1000?: true
    RD2000?: true
    USD1?: true
    USD2?: true
    USD5?: true
    USD10?: true
    USD20?: true
    USD50?: true
    USD100?: true
    EUR5?: true
    EUR10?: true
    EUR20?: true
    EUR50?: true
    EUR100?: true
  }

  export type SaldoMinAggregateInputType = {
    id?: true
    RD1?: true
    RD5?: true
    RD10?: true
    RD25?: true
    RD100?: true
    RD200?: true
    RD500?: true
    RD1000?: true
    RD2000?: true
    USD1?: true
    USD2?: true
    USD5?: true
    USD10?: true
    USD20?: true
    USD50?: true
    USD100?: true
    EUR5?: true
    EUR10?: true
    EUR20?: true
    EUR50?: true
    EUR100?: true
  }

  export type SaldoMaxAggregateInputType = {
    id?: true
    RD1?: true
    RD5?: true
    RD10?: true
    RD25?: true
    RD100?: true
    RD200?: true
    RD500?: true
    RD1000?: true
    RD2000?: true
    USD1?: true
    USD2?: true
    USD5?: true
    USD10?: true
    USD20?: true
    USD50?: true
    USD100?: true
    EUR5?: true
    EUR10?: true
    EUR20?: true
    EUR50?: true
    EUR100?: true
  }

  export type SaldoCountAggregateInputType = {
    id?: true
    RD1?: true
    RD5?: true
    RD10?: true
    RD25?: true
    RD100?: true
    RD200?: true
    RD500?: true
    RD1000?: true
    RD2000?: true
    USD1?: true
    USD2?: true
    USD5?: true
    USD10?: true
    USD20?: true
    USD50?: true
    USD100?: true
    EUR5?: true
    EUR10?: true
    EUR20?: true
    EUR50?: true
    EUR100?: true
    _all?: true
  }

  export type SaldoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saldo to aggregate.
     */
    where?: SaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saldos to fetch.
     */
    orderBy?: SaldoOrderByWithRelationInput | SaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Saldos
    **/
    _count?: true | SaldoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaldoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaldoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaldoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaldoMaxAggregateInputType
  }

  export type GetSaldoAggregateType<T extends SaldoAggregateArgs> = {
        [P in keyof T & keyof AggregateSaldo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaldo[P]>
      : GetScalarType<T[P], AggregateSaldo[P]>
  }




  export type SaldoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaldoWhereInput
    orderBy?: SaldoOrderByWithAggregationInput | SaldoOrderByWithAggregationInput[]
    by: SaldoScalarFieldEnum[] | SaldoScalarFieldEnum
    having?: SaldoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaldoCountAggregateInputType | true
    _avg?: SaldoAvgAggregateInputType
    _sum?: SaldoSumAggregateInputType
    _min?: SaldoMinAggregateInputType
    _max?: SaldoMaxAggregateInputType
  }

  export type SaldoGroupByOutputType = {
    id: string
    RD1: number
    RD5: number
    RD10: number
    RD25: number
    RD100: number
    RD200: number
    RD500: number
    RD1000: number
    RD2000: number
    USD1: number
    USD2: number
    USD5: number
    USD10: number
    USD20: number
    USD50: number
    USD100: number
    EUR5: number
    EUR10: number
    EUR20: number
    EUR50: number
    EUR100: number
    _count: SaldoCountAggregateOutputType | null
    _avg: SaldoAvgAggregateOutputType | null
    _sum: SaldoSumAggregateOutputType | null
    _min: SaldoMinAggregateOutputType | null
    _max: SaldoMaxAggregateOutputType | null
  }

  type GetSaldoGroupByPayload<T extends SaldoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaldoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaldoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaldoGroupByOutputType[P]>
            : GetScalarType<T[P], SaldoGroupByOutputType[P]>
        }
      >
    >


  export type SaldoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RD1?: boolean
    RD5?: boolean
    RD10?: boolean
    RD25?: boolean
    RD100?: boolean
    RD200?: boolean
    RD500?: boolean
    RD1000?: boolean
    RD2000?: boolean
    USD1?: boolean
    USD2?: boolean
    USD5?: boolean
    USD10?: boolean
    USD20?: boolean
    USD50?: boolean
    USD100?: boolean
    EUR5?: boolean
    EUR10?: boolean
    EUR20?: boolean
    EUR50?: boolean
    EUR100?: boolean
    usuario?: boolean | Saldo$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["saldo"]>

  export type SaldoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RD1?: boolean
    RD5?: boolean
    RD10?: boolean
    RD25?: boolean
    RD100?: boolean
    RD200?: boolean
    RD500?: boolean
    RD1000?: boolean
    RD2000?: boolean
    USD1?: boolean
    USD2?: boolean
    USD5?: boolean
    USD10?: boolean
    USD20?: boolean
    USD50?: boolean
    USD100?: boolean
    EUR5?: boolean
    EUR10?: boolean
    EUR20?: boolean
    EUR50?: boolean
    EUR100?: boolean
  }, ExtArgs["result"]["saldo"]>

  export type SaldoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RD1?: boolean
    RD5?: boolean
    RD10?: boolean
    RD25?: boolean
    RD100?: boolean
    RD200?: boolean
    RD500?: boolean
    RD1000?: boolean
    RD2000?: boolean
    USD1?: boolean
    USD2?: boolean
    USD5?: boolean
    USD10?: boolean
    USD20?: boolean
    USD50?: boolean
    USD100?: boolean
    EUR5?: boolean
    EUR10?: boolean
    EUR20?: boolean
    EUR50?: boolean
    EUR100?: boolean
  }, ExtArgs["result"]["saldo"]>

  export type SaldoSelectScalar = {
    id?: boolean
    RD1?: boolean
    RD5?: boolean
    RD10?: boolean
    RD25?: boolean
    RD100?: boolean
    RD200?: boolean
    RD500?: boolean
    RD1000?: boolean
    RD2000?: boolean
    USD1?: boolean
    USD2?: boolean
    USD5?: boolean
    USD10?: boolean
    USD20?: boolean
    USD50?: boolean
    USD100?: boolean
    EUR5?: boolean
    EUR10?: boolean
    EUR20?: boolean
    EUR50?: boolean
    EUR100?: boolean
  }

  export type SaldoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "RD1" | "RD5" | "RD10" | "RD25" | "RD100" | "RD200" | "RD500" | "RD1000" | "RD2000" | "USD1" | "USD2" | "USD5" | "USD10" | "USD20" | "USD50" | "USD100" | "EUR5" | "EUR10" | "EUR20" | "EUR50" | "EUR100", ExtArgs["result"]["saldo"]>
  export type SaldoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Saldo$usuarioArgs<ExtArgs>
  }
  export type SaldoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SaldoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SaldoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Saldo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      RD1: number
      RD5: number
      RD10: number
      RD25: number
      RD100: number
      RD200: number
      RD500: number
      RD1000: number
      RD2000: number
      USD1: number
      USD2: number
      USD5: number
      USD10: number
      USD20: number
      USD50: number
      USD100: number
      EUR5: number
      EUR10: number
      EUR20: number
      EUR50: number
      EUR100: number
    }, ExtArgs["result"]["saldo"]>
    composites: {}
  }

  type SaldoGetPayload<S extends boolean | null | undefined | SaldoDefaultArgs> = $Result.GetResult<Prisma.$SaldoPayload, S>

  type SaldoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaldoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaldoCountAggregateInputType | true
    }

  export interface SaldoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Saldo'], meta: { name: 'Saldo' } }
    /**
     * Find zero or one Saldo that matches the filter.
     * @param {SaldoFindUniqueArgs} args - Arguments to find a Saldo
     * @example
     * // Get one Saldo
     * const saldo = await prisma.saldo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaldoFindUniqueArgs>(args: SelectSubset<T, SaldoFindUniqueArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saldo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaldoFindUniqueOrThrowArgs} args - Arguments to find a Saldo
     * @example
     * // Get one Saldo
     * const saldo = await prisma.saldo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaldoFindUniqueOrThrowArgs>(args: SelectSubset<T, SaldoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saldo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoFindFirstArgs} args - Arguments to find a Saldo
     * @example
     * // Get one Saldo
     * const saldo = await prisma.saldo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaldoFindFirstArgs>(args?: SelectSubset<T, SaldoFindFirstArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saldo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoFindFirstOrThrowArgs} args - Arguments to find a Saldo
     * @example
     * // Get one Saldo
     * const saldo = await prisma.saldo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaldoFindFirstOrThrowArgs>(args?: SelectSubset<T, SaldoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saldos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saldos
     * const saldos = await prisma.saldo.findMany()
     * 
     * // Get first 10 Saldos
     * const saldos = await prisma.saldo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saldoWithIdOnly = await prisma.saldo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaldoFindManyArgs>(args?: SelectSubset<T, SaldoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saldo.
     * @param {SaldoCreateArgs} args - Arguments to create a Saldo.
     * @example
     * // Create one Saldo
     * const Saldo = await prisma.saldo.create({
     *   data: {
     *     // ... data to create a Saldo
     *   }
     * })
     * 
     */
    create<T extends SaldoCreateArgs>(args: SelectSubset<T, SaldoCreateArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saldos.
     * @param {SaldoCreateManyArgs} args - Arguments to create many Saldos.
     * @example
     * // Create many Saldos
     * const saldo = await prisma.saldo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaldoCreateManyArgs>(args?: SelectSubset<T, SaldoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saldos and returns the data saved in the database.
     * @param {SaldoCreateManyAndReturnArgs} args - Arguments to create many Saldos.
     * @example
     * // Create many Saldos
     * const saldo = await prisma.saldo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saldos and only return the `id`
     * const saldoWithIdOnly = await prisma.saldo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaldoCreateManyAndReturnArgs>(args?: SelectSubset<T, SaldoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saldo.
     * @param {SaldoDeleteArgs} args - Arguments to delete one Saldo.
     * @example
     * // Delete one Saldo
     * const Saldo = await prisma.saldo.delete({
     *   where: {
     *     // ... filter to delete one Saldo
     *   }
     * })
     * 
     */
    delete<T extends SaldoDeleteArgs>(args: SelectSubset<T, SaldoDeleteArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saldo.
     * @param {SaldoUpdateArgs} args - Arguments to update one Saldo.
     * @example
     * // Update one Saldo
     * const saldo = await prisma.saldo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaldoUpdateArgs>(args: SelectSubset<T, SaldoUpdateArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saldos.
     * @param {SaldoDeleteManyArgs} args - Arguments to filter Saldos to delete.
     * @example
     * // Delete a few Saldos
     * const { count } = await prisma.saldo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaldoDeleteManyArgs>(args?: SelectSubset<T, SaldoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saldos
     * const saldo = await prisma.saldo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaldoUpdateManyArgs>(args: SelectSubset<T, SaldoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saldos and returns the data updated in the database.
     * @param {SaldoUpdateManyAndReturnArgs} args - Arguments to update many Saldos.
     * @example
     * // Update many Saldos
     * const saldo = await prisma.saldo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saldos and only return the `id`
     * const saldoWithIdOnly = await prisma.saldo.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaldoUpdateManyAndReturnArgs>(args: SelectSubset<T, SaldoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saldo.
     * @param {SaldoUpsertArgs} args - Arguments to update or create a Saldo.
     * @example
     * // Update or create a Saldo
     * const saldo = await prisma.saldo.upsert({
     *   create: {
     *     // ... data to create a Saldo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saldo we want to update
     *   }
     * })
     */
    upsert<T extends SaldoUpsertArgs>(args: SelectSubset<T, SaldoUpsertArgs<ExtArgs>>): Prisma__SaldoClient<$Result.GetResult<Prisma.$SaldoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoCountArgs} args - Arguments to filter Saldos to count.
     * @example
     * // Count the number of Saldos
     * const count = await prisma.saldo.count({
     *   where: {
     *     // ... the filter for the Saldos we want to count
     *   }
     * })
    **/
    count<T extends SaldoCountArgs>(
      args?: Subset<T, SaldoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaldoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saldo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaldoAggregateArgs>(args: Subset<T, SaldoAggregateArgs>): Prisma.PrismaPromise<GetSaldoAggregateType<T>>

    /**
     * Group by Saldo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldoGroupByArgs} args - Group by arguments.
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
      T extends SaldoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaldoGroupByArgs['orderBy'] }
        : { orderBy?: SaldoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaldoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaldoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Saldo model
   */
  readonly fields: SaldoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Saldo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaldoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Saldo$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Saldo$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Saldo model
   */ 
  interface SaldoFieldRefs {
    readonly id: FieldRef<"Saldo", 'String'>
    readonly RD1: FieldRef<"Saldo", 'Int'>
    readonly RD5: FieldRef<"Saldo", 'Int'>
    readonly RD10: FieldRef<"Saldo", 'Int'>
    readonly RD25: FieldRef<"Saldo", 'Int'>
    readonly RD100: FieldRef<"Saldo", 'Int'>
    readonly RD200: FieldRef<"Saldo", 'Int'>
    readonly RD500: FieldRef<"Saldo", 'Int'>
    readonly RD1000: FieldRef<"Saldo", 'Int'>
    readonly RD2000: FieldRef<"Saldo", 'Int'>
    readonly USD1: FieldRef<"Saldo", 'Int'>
    readonly USD2: FieldRef<"Saldo", 'Int'>
    readonly USD5: FieldRef<"Saldo", 'Int'>
    readonly USD10: FieldRef<"Saldo", 'Int'>
    readonly USD20: FieldRef<"Saldo", 'Int'>
    readonly USD50: FieldRef<"Saldo", 'Int'>
    readonly USD100: FieldRef<"Saldo", 'Int'>
    readonly EUR5: FieldRef<"Saldo", 'Int'>
    readonly EUR10: FieldRef<"Saldo", 'Int'>
    readonly EUR20: FieldRef<"Saldo", 'Int'>
    readonly EUR50: FieldRef<"Saldo", 'Int'>
    readonly EUR100: FieldRef<"Saldo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Saldo findUnique
   */
  export type SaldoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * Filter, which Saldo to fetch.
     */
    where: SaldoWhereUniqueInput
  }

  /**
   * Saldo findUniqueOrThrow
   */
  export type SaldoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * Filter, which Saldo to fetch.
     */
    where: SaldoWhereUniqueInput
  }

  /**
   * Saldo findFirst
   */
  export type SaldoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * Filter, which Saldo to fetch.
     */
    where?: SaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saldos to fetch.
     */
    orderBy?: SaldoOrderByWithRelationInput | SaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saldos.
     */
    cursor?: SaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saldos.
     */
    distinct?: SaldoScalarFieldEnum | SaldoScalarFieldEnum[]
  }

  /**
   * Saldo findFirstOrThrow
   */
  export type SaldoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * Filter, which Saldo to fetch.
     */
    where?: SaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saldos to fetch.
     */
    orderBy?: SaldoOrderByWithRelationInput | SaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saldos.
     */
    cursor?: SaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saldos.
     */
    distinct?: SaldoScalarFieldEnum | SaldoScalarFieldEnum[]
  }

  /**
   * Saldo findMany
   */
  export type SaldoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * Filter, which Saldos to fetch.
     */
    where?: SaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saldos to fetch.
     */
    orderBy?: SaldoOrderByWithRelationInput | SaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Saldos.
     */
    cursor?: SaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saldos.
     */
    skip?: number
    distinct?: SaldoScalarFieldEnum | SaldoScalarFieldEnum[]
  }

  /**
   * Saldo create
   */
  export type SaldoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * The data needed to create a Saldo.
     */
    data?: XOR<SaldoCreateInput, SaldoUncheckedCreateInput>
  }

  /**
   * Saldo createMany
   */
  export type SaldoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saldos.
     */
    data: SaldoCreateManyInput | SaldoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Saldo createManyAndReturn
   */
  export type SaldoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * The data used to create many Saldos.
     */
    data: SaldoCreateManyInput | SaldoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Saldo update
   */
  export type SaldoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * The data needed to update a Saldo.
     */
    data: XOR<SaldoUpdateInput, SaldoUncheckedUpdateInput>
    /**
     * Choose, which Saldo to update.
     */
    where: SaldoWhereUniqueInput
  }

  /**
   * Saldo updateMany
   */
  export type SaldoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Saldos.
     */
    data: XOR<SaldoUpdateManyMutationInput, SaldoUncheckedUpdateManyInput>
    /**
     * Filter which Saldos to update
     */
    where?: SaldoWhereInput
    /**
     * Limit how many Saldos to update.
     */
    limit?: number
  }

  /**
   * Saldo updateManyAndReturn
   */
  export type SaldoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * The data used to update Saldos.
     */
    data: XOR<SaldoUpdateManyMutationInput, SaldoUncheckedUpdateManyInput>
    /**
     * Filter which Saldos to update
     */
    where?: SaldoWhereInput
    /**
     * Limit how many Saldos to update.
     */
    limit?: number
  }

  /**
   * Saldo upsert
   */
  export type SaldoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * The filter to search for the Saldo to update in case it exists.
     */
    where: SaldoWhereUniqueInput
    /**
     * In case the Saldo found by the `where` argument doesn't exist, create a new Saldo with this data.
     */
    create: XOR<SaldoCreateInput, SaldoUncheckedCreateInput>
    /**
     * In case the Saldo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaldoUpdateInput, SaldoUncheckedUpdateInput>
  }

  /**
   * Saldo delete
   */
  export type SaldoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
    /**
     * Filter which Saldo to delete.
     */
    where: SaldoWhereUniqueInput
  }

  /**
   * Saldo deleteMany
   */
  export type SaldoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saldos to delete
     */
    where?: SaldoWhereInput
    /**
     * Limit how many Saldos to delete.
     */
    limit?: number
  }

  /**
   * Saldo.usuario
   */
  export type Saldo$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Saldo without action
   */
  export type SaldoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saldo
     */
    select?: SaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saldo
     */
    omit?: SaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaldoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    contrasena: 'contrasena',
    codigoEmpleado: 'codigoEmpleado',
    cargo: 'cargo',
    inventario: 'inventario',
    transferencia: 'transferencia',
    recepcion: 'recepcion',
    preparacion: 'preparacion',
    EIE: 'EIE',
    SupervisorID: 'SupervisorID',
    saldoId: 'saldoId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SaldoScalarFieldEnum: {
    id: 'id',
    RD1: 'RD1',
    RD5: 'RD5',
    RD10: 'RD10',
    RD25: 'RD25',
    RD100: 'RD100',
    RD200: 'RD200',
    RD500: 'RD500',
    RD1000: 'RD1000',
    RD2000: 'RD2000',
    USD1: 'USD1',
    USD2: 'USD2',
    USD5: 'USD5',
    USD10: 'USD10',
    USD20: 'USD20',
    USD50: 'USD50',
    USD100: 'USD100',
    EUR5: 'EUR5',
    EUR10: 'EUR10',
    EUR20: 'EUR20',
    EUR50: 'EUR50',
    EUR100: 'EUR100'
  };

  export type SaldoScalarFieldEnum = (typeof SaldoScalarFieldEnum)[keyof typeof SaldoScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    codigoEmpleado?: IntFilter<"Usuario"> | number
    cargo?: StringFilter<"Usuario"> | string
    inventario?: StringNullableListFilter<"Usuario">
    transferencia?: BoolFilter<"Usuario"> | boolean
    recepcion?: BoolFilter<"Usuario"> | boolean
    preparacion?: BoolFilter<"Usuario"> | boolean
    EIE?: BoolFilter<"Usuario"> | boolean
    SupervisorID?: IntNullableFilter<"Usuario"> | number | null
    saldoId?: StringFilter<"Usuario"> | string
    Supervisor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    colaboradores?: UsuarioListRelationFilter
    saldo?: XOR<SaldoScalarRelationFilter, SaldoWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    codigoEmpleado?: SortOrder
    cargo?: SortOrder
    inventario?: SortOrder
    transferencia?: SortOrder
    recepcion?: SortOrder
    preparacion?: SortOrder
    EIE?: SortOrder
    SupervisorID?: SortOrderInput | SortOrder
    saldoId?: SortOrder
    Supervisor?: UsuarioOrderByWithRelationInput
    colaboradores?: UsuarioOrderByRelationAggregateInput
    saldo?: SaldoOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    codigoEmpleado?: number
    saldoId?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    contrasena?: StringFilter<"Usuario"> | string
    cargo?: StringFilter<"Usuario"> | string
    inventario?: StringNullableListFilter<"Usuario">
    transferencia?: BoolFilter<"Usuario"> | boolean
    recepcion?: BoolFilter<"Usuario"> | boolean
    preparacion?: BoolFilter<"Usuario"> | boolean
    EIE?: BoolFilter<"Usuario"> | boolean
    SupervisorID?: IntNullableFilter<"Usuario"> | number | null
    Supervisor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    colaboradores?: UsuarioListRelationFilter
    saldo?: XOR<SaldoScalarRelationFilter, SaldoWhereInput>
  }, "id" | "nombre" | "codigoEmpleado" | "saldoId">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    codigoEmpleado?: SortOrder
    cargo?: SortOrder
    inventario?: SortOrder
    transferencia?: SortOrder
    recepcion?: SortOrder
    preparacion?: SortOrder
    EIE?: SortOrder
    SupervisorID?: SortOrderInput | SortOrder
    saldoId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    codigoEmpleado?: IntWithAggregatesFilter<"Usuario"> | number
    cargo?: StringWithAggregatesFilter<"Usuario"> | string
    inventario?: StringNullableListFilter<"Usuario">
    transferencia?: BoolWithAggregatesFilter<"Usuario"> | boolean
    recepcion?: BoolWithAggregatesFilter<"Usuario"> | boolean
    preparacion?: BoolWithAggregatesFilter<"Usuario"> | boolean
    EIE?: BoolWithAggregatesFilter<"Usuario"> | boolean
    SupervisorID?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    saldoId?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type SaldoWhereInput = {
    AND?: SaldoWhereInput | SaldoWhereInput[]
    OR?: SaldoWhereInput[]
    NOT?: SaldoWhereInput | SaldoWhereInput[]
    id?: StringFilter<"Saldo"> | string
    RD1?: IntFilter<"Saldo"> | number
    RD5?: IntFilter<"Saldo"> | number
    RD10?: IntFilter<"Saldo"> | number
    RD25?: IntFilter<"Saldo"> | number
    RD100?: IntFilter<"Saldo"> | number
    RD200?: IntFilter<"Saldo"> | number
    RD500?: IntFilter<"Saldo"> | number
    RD1000?: IntFilter<"Saldo"> | number
    RD2000?: IntFilter<"Saldo"> | number
    USD1?: IntFilter<"Saldo"> | number
    USD2?: IntFilter<"Saldo"> | number
    USD5?: IntFilter<"Saldo"> | number
    USD10?: IntFilter<"Saldo"> | number
    USD20?: IntFilter<"Saldo"> | number
    USD50?: IntFilter<"Saldo"> | number
    USD100?: IntFilter<"Saldo"> | number
    EUR5?: IntFilter<"Saldo"> | number
    EUR10?: IntFilter<"Saldo"> | number
    EUR20?: IntFilter<"Saldo"> | number
    EUR50?: IntFilter<"Saldo"> | number
    EUR100?: IntFilter<"Saldo"> | number
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type SaldoOrderByWithRelationInput = {
    id?: SortOrder
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SaldoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaldoWhereInput | SaldoWhereInput[]
    OR?: SaldoWhereInput[]
    NOT?: SaldoWhereInput | SaldoWhereInput[]
    RD1?: IntFilter<"Saldo"> | number
    RD5?: IntFilter<"Saldo"> | number
    RD10?: IntFilter<"Saldo"> | number
    RD25?: IntFilter<"Saldo"> | number
    RD100?: IntFilter<"Saldo"> | number
    RD200?: IntFilter<"Saldo"> | number
    RD500?: IntFilter<"Saldo"> | number
    RD1000?: IntFilter<"Saldo"> | number
    RD2000?: IntFilter<"Saldo"> | number
    USD1?: IntFilter<"Saldo"> | number
    USD2?: IntFilter<"Saldo"> | number
    USD5?: IntFilter<"Saldo"> | number
    USD10?: IntFilter<"Saldo"> | number
    USD20?: IntFilter<"Saldo"> | number
    USD50?: IntFilter<"Saldo"> | number
    USD100?: IntFilter<"Saldo"> | number
    EUR5?: IntFilter<"Saldo"> | number
    EUR10?: IntFilter<"Saldo"> | number
    EUR20?: IntFilter<"Saldo"> | number
    EUR50?: IntFilter<"Saldo"> | number
    EUR100?: IntFilter<"Saldo"> | number
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type SaldoOrderByWithAggregationInput = {
    id?: SortOrder
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
    _count?: SaldoCountOrderByAggregateInput
    _avg?: SaldoAvgOrderByAggregateInput
    _max?: SaldoMaxOrderByAggregateInput
    _min?: SaldoMinOrderByAggregateInput
    _sum?: SaldoSumOrderByAggregateInput
  }

  export type SaldoScalarWhereWithAggregatesInput = {
    AND?: SaldoScalarWhereWithAggregatesInput | SaldoScalarWhereWithAggregatesInput[]
    OR?: SaldoScalarWhereWithAggregatesInput[]
    NOT?: SaldoScalarWhereWithAggregatesInput | SaldoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Saldo"> | string
    RD1?: IntWithAggregatesFilter<"Saldo"> | number
    RD5?: IntWithAggregatesFilter<"Saldo"> | number
    RD10?: IntWithAggregatesFilter<"Saldo"> | number
    RD25?: IntWithAggregatesFilter<"Saldo"> | number
    RD100?: IntWithAggregatesFilter<"Saldo"> | number
    RD200?: IntWithAggregatesFilter<"Saldo"> | number
    RD500?: IntWithAggregatesFilter<"Saldo"> | number
    RD1000?: IntWithAggregatesFilter<"Saldo"> | number
    RD2000?: IntWithAggregatesFilter<"Saldo"> | number
    USD1?: IntWithAggregatesFilter<"Saldo"> | number
    USD2?: IntWithAggregatesFilter<"Saldo"> | number
    USD5?: IntWithAggregatesFilter<"Saldo"> | number
    USD10?: IntWithAggregatesFilter<"Saldo"> | number
    USD20?: IntWithAggregatesFilter<"Saldo"> | number
    USD50?: IntWithAggregatesFilter<"Saldo"> | number
    USD100?: IntWithAggregatesFilter<"Saldo"> | number
    EUR5?: IntWithAggregatesFilter<"Saldo"> | number
    EUR10?: IntWithAggregatesFilter<"Saldo"> | number
    EUR20?: IntWithAggregatesFilter<"Saldo"> | number
    EUR50?: IntWithAggregatesFilter<"Saldo"> | number
    EUR100?: IntWithAggregatesFilter<"Saldo"> | number
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    Supervisor?: UsuarioCreateNestedOneWithoutColaboradoresInput
    colaboradores?: UsuarioCreateNestedManyWithoutSupervisorInput
    saldo: SaldoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: number | null
    saldoId: string
    colaboradores?: UsuarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    Supervisor?: UsuarioUpdateOneWithoutColaboradoresNestedInput
    colaboradores?: UsuarioUpdateManyWithoutSupervisorNestedInput
    saldo?: SaldoUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    codigoEmpleado?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    SupervisorID?: NullableIntFieldUpdateOperationsInput | number | null
    saldoId?: StringFieldUpdateOperationsInput | string
    colaboradores?: UsuarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: number | null
    saldoId: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    codigoEmpleado?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    SupervisorID?: NullableIntFieldUpdateOperationsInput | number | null
    saldoId?: StringFieldUpdateOperationsInput | string
  }

  export type SaldoCreateInput = {
    id?: string
    RD1?: number
    RD5?: number
    RD10?: number
    RD25?: number
    RD100?: number
    RD200?: number
    RD500?: number
    RD1000?: number
    RD2000?: number
    USD1?: number
    USD2?: number
    USD5?: number
    USD10?: number
    USD20?: number
    USD50?: number
    USD100?: number
    EUR5?: number
    EUR10?: number
    EUR20?: number
    EUR50?: number
    EUR100?: number
    usuario?: UsuarioCreateNestedOneWithoutSaldoInput
  }

  export type SaldoUncheckedCreateInput = {
    id?: string
    RD1?: number
    RD5?: number
    RD10?: number
    RD25?: number
    RD100?: number
    RD200?: number
    RD500?: number
    RD1000?: number
    RD2000?: number
    USD1?: number
    USD2?: number
    USD5?: number
    USD10?: number
    USD20?: number
    USD50?: number
    USD100?: number
    EUR5?: number
    EUR10?: number
    EUR20?: number
    EUR50?: number
    EUR100?: number
    usuario?: UsuarioUncheckedCreateNestedOneWithoutSaldoInput
  }

  export type SaldoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    RD1?: IntFieldUpdateOperationsInput | number
    RD5?: IntFieldUpdateOperationsInput | number
    RD10?: IntFieldUpdateOperationsInput | number
    RD25?: IntFieldUpdateOperationsInput | number
    RD100?: IntFieldUpdateOperationsInput | number
    RD200?: IntFieldUpdateOperationsInput | number
    RD500?: IntFieldUpdateOperationsInput | number
    RD1000?: IntFieldUpdateOperationsInput | number
    RD2000?: IntFieldUpdateOperationsInput | number
    USD1?: IntFieldUpdateOperationsInput | number
    USD2?: IntFieldUpdateOperationsInput | number
    USD5?: IntFieldUpdateOperationsInput | number
    USD10?: IntFieldUpdateOperationsInput | number
    USD20?: IntFieldUpdateOperationsInput | number
    USD50?: IntFieldUpdateOperationsInput | number
    USD100?: IntFieldUpdateOperationsInput | number
    EUR5?: IntFieldUpdateOperationsInput | number
    EUR10?: IntFieldUpdateOperationsInput | number
    EUR20?: IntFieldUpdateOperationsInput | number
    EUR50?: IntFieldUpdateOperationsInput | number
    EUR100?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneWithoutSaldoNestedInput
  }

  export type SaldoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    RD1?: IntFieldUpdateOperationsInput | number
    RD5?: IntFieldUpdateOperationsInput | number
    RD10?: IntFieldUpdateOperationsInput | number
    RD25?: IntFieldUpdateOperationsInput | number
    RD100?: IntFieldUpdateOperationsInput | number
    RD200?: IntFieldUpdateOperationsInput | number
    RD500?: IntFieldUpdateOperationsInput | number
    RD1000?: IntFieldUpdateOperationsInput | number
    RD2000?: IntFieldUpdateOperationsInput | number
    USD1?: IntFieldUpdateOperationsInput | number
    USD2?: IntFieldUpdateOperationsInput | number
    USD5?: IntFieldUpdateOperationsInput | number
    USD10?: IntFieldUpdateOperationsInput | number
    USD20?: IntFieldUpdateOperationsInput | number
    USD50?: IntFieldUpdateOperationsInput | number
    USD100?: IntFieldUpdateOperationsInput | number
    EUR5?: IntFieldUpdateOperationsInput | number
    EUR10?: IntFieldUpdateOperationsInput | number
    EUR20?: IntFieldUpdateOperationsInput | number
    EUR50?: IntFieldUpdateOperationsInput | number
    EUR100?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUncheckedUpdateOneWithoutSaldoNestedInput
  }

  export type SaldoCreateManyInput = {
    id?: string
    RD1?: number
    RD5?: number
    RD10?: number
    RD25?: number
    RD100?: number
    RD200?: number
    RD500?: number
    RD1000?: number
    RD2000?: number
    USD1?: number
    USD2?: number
    USD5?: number
    USD10?: number
    USD20?: number
    USD50?: number
    USD100?: number
    EUR5?: number
    EUR10?: number
    EUR20?: number
    EUR50?: number
    EUR100?: number
  }

  export type SaldoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    RD1?: IntFieldUpdateOperationsInput | number
    RD5?: IntFieldUpdateOperationsInput | number
    RD10?: IntFieldUpdateOperationsInput | number
    RD25?: IntFieldUpdateOperationsInput | number
    RD100?: IntFieldUpdateOperationsInput | number
    RD200?: IntFieldUpdateOperationsInput | number
    RD500?: IntFieldUpdateOperationsInput | number
    RD1000?: IntFieldUpdateOperationsInput | number
    RD2000?: IntFieldUpdateOperationsInput | number
    USD1?: IntFieldUpdateOperationsInput | number
    USD2?: IntFieldUpdateOperationsInput | number
    USD5?: IntFieldUpdateOperationsInput | number
    USD10?: IntFieldUpdateOperationsInput | number
    USD20?: IntFieldUpdateOperationsInput | number
    USD50?: IntFieldUpdateOperationsInput | number
    USD100?: IntFieldUpdateOperationsInput | number
    EUR5?: IntFieldUpdateOperationsInput | number
    EUR10?: IntFieldUpdateOperationsInput | number
    EUR20?: IntFieldUpdateOperationsInput | number
    EUR50?: IntFieldUpdateOperationsInput | number
    EUR100?: IntFieldUpdateOperationsInput | number
  }

  export type SaldoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    RD1?: IntFieldUpdateOperationsInput | number
    RD5?: IntFieldUpdateOperationsInput | number
    RD10?: IntFieldUpdateOperationsInput | number
    RD25?: IntFieldUpdateOperationsInput | number
    RD100?: IntFieldUpdateOperationsInput | number
    RD200?: IntFieldUpdateOperationsInput | number
    RD500?: IntFieldUpdateOperationsInput | number
    RD1000?: IntFieldUpdateOperationsInput | number
    RD2000?: IntFieldUpdateOperationsInput | number
    USD1?: IntFieldUpdateOperationsInput | number
    USD2?: IntFieldUpdateOperationsInput | number
    USD5?: IntFieldUpdateOperationsInput | number
    USD10?: IntFieldUpdateOperationsInput | number
    USD20?: IntFieldUpdateOperationsInput | number
    USD50?: IntFieldUpdateOperationsInput | number
    USD100?: IntFieldUpdateOperationsInput | number
    EUR5?: IntFieldUpdateOperationsInput | number
    EUR10?: IntFieldUpdateOperationsInput | number
    EUR20?: IntFieldUpdateOperationsInput | number
    EUR50?: IntFieldUpdateOperationsInput | number
    EUR100?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type SaldoScalarRelationFilter = {
    is?: SaldoWhereInput
    isNot?: SaldoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    codigoEmpleado?: SortOrder
    cargo?: SortOrder
    inventario?: SortOrder
    transferencia?: SortOrder
    recepcion?: SortOrder
    preparacion?: SortOrder
    EIE?: SortOrder
    SupervisorID?: SortOrder
    saldoId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    codigoEmpleado?: SortOrder
    SupervisorID?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    codigoEmpleado?: SortOrder
    cargo?: SortOrder
    transferencia?: SortOrder
    recepcion?: SortOrder
    preparacion?: SortOrder
    EIE?: SortOrder
    SupervisorID?: SortOrder
    saldoId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    codigoEmpleado?: SortOrder
    cargo?: SortOrder
    transferencia?: SortOrder
    recepcion?: SortOrder
    preparacion?: SortOrder
    EIE?: SortOrder
    SupervisorID?: SortOrder
    saldoId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    codigoEmpleado?: SortOrder
    SupervisorID?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SaldoCountOrderByAggregateInput = {
    id?: SortOrder
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
  }

  export type SaldoAvgOrderByAggregateInput = {
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
  }

  export type SaldoMaxOrderByAggregateInput = {
    id?: SortOrder
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
  }

  export type SaldoMinOrderByAggregateInput = {
    id?: SortOrder
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
  }

  export type SaldoSumOrderByAggregateInput = {
    RD1?: SortOrder
    RD5?: SortOrder
    RD10?: SortOrder
    RD25?: SortOrder
    RD100?: SortOrder
    RD200?: SortOrder
    RD500?: SortOrder
    RD1000?: SortOrder
    RD2000?: SortOrder
    USD1?: SortOrder
    USD2?: SortOrder
    USD5?: SortOrder
    USD10?: SortOrder
    USD20?: SortOrder
    USD50?: SortOrder
    USD100?: SortOrder
    EUR5?: SortOrder
    EUR10?: SortOrder
    EUR20?: SortOrder
    EUR50?: SortOrder
    EUR100?: SortOrder
  }

  export type UsuarioCreateinventarioInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutColaboradoresInput = {
    create?: XOR<UsuarioCreateWithoutColaboradoresInput, UsuarioUncheckedCreateWithoutColaboradoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutColaboradoresInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput> | UsuarioCreateWithoutSupervisorInput[] | UsuarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSupervisorInput | UsuarioCreateOrConnectWithoutSupervisorInput[]
    createMany?: UsuarioCreateManySupervisorInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type SaldoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SaldoCreateWithoutUsuarioInput, SaldoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SaldoCreateOrConnectWithoutUsuarioInput
    connect?: SaldoWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput> | UsuarioCreateWithoutSupervisorInput[] | UsuarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSupervisorInput | UsuarioCreateOrConnectWithoutSupervisorInput[]
    createMany?: UsuarioCreateManySupervisorInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateinventarioInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneWithoutColaboradoresNestedInput = {
    create?: XOR<UsuarioCreateWithoutColaboradoresInput, UsuarioUncheckedCreateWithoutColaboradoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutColaboradoresInput
    upsert?: UsuarioUpsertWithoutColaboradoresInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutColaboradoresInput, UsuarioUpdateWithoutColaboradoresInput>, UsuarioUncheckedUpdateWithoutColaboradoresInput>
  }

  export type UsuarioUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput> | UsuarioCreateWithoutSupervisorInput[] | UsuarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSupervisorInput | UsuarioCreateOrConnectWithoutSupervisorInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutSupervisorInput | UsuarioUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: UsuarioCreateManySupervisorInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutSupervisorInput | UsuarioUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutSupervisorInput | UsuarioUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type SaldoUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<SaldoCreateWithoutUsuarioInput, SaldoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SaldoCreateOrConnectWithoutUsuarioInput
    upsert?: SaldoUpsertWithoutUsuarioInput
    connect?: SaldoWhereUniqueInput
    update?: XOR<XOR<SaldoUpdateToOneWithWhereWithoutUsuarioInput, SaldoUpdateWithoutUsuarioInput>, SaldoUncheckedUpdateWithoutUsuarioInput>
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

  export type UsuarioUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput> | UsuarioCreateWithoutSupervisorInput[] | UsuarioUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutSupervisorInput | UsuarioCreateOrConnectWithoutSupervisorInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutSupervisorInput | UsuarioUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: UsuarioCreateManySupervisorInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutSupervisorInput | UsuarioUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutSupervisorInput | UsuarioUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSaldoInput = {
    create?: XOR<UsuarioCreateWithoutSaldoInput, UsuarioUncheckedCreateWithoutSaldoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSaldoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedOneWithoutSaldoInput = {
    create?: XOR<UsuarioCreateWithoutSaldoInput, UsuarioUncheckedCreateWithoutSaldoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSaldoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutSaldoNestedInput = {
    create?: XOR<UsuarioCreateWithoutSaldoInput, UsuarioUncheckedCreateWithoutSaldoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSaldoInput
    upsert?: UsuarioUpsertWithoutSaldoInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSaldoInput, UsuarioUpdateWithoutSaldoInput>, UsuarioUncheckedUpdateWithoutSaldoInput>
  }

  export type UsuarioUncheckedUpdateOneWithoutSaldoNestedInput = {
    create?: XOR<UsuarioCreateWithoutSaldoInput, UsuarioUncheckedCreateWithoutSaldoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSaldoInput
    upsert?: UsuarioUpsertWithoutSaldoInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSaldoInput, UsuarioUpdateWithoutSaldoInput>, UsuarioUncheckedUpdateWithoutSaldoInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsuarioCreateWithoutColaboradoresInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    Supervisor?: UsuarioCreateNestedOneWithoutColaboradoresInput
    saldo: SaldoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutColaboradoresInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: number | null
    saldoId: string
  }

  export type UsuarioCreateOrConnectWithoutColaboradoresInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutColaboradoresInput, UsuarioUncheckedCreateWithoutColaboradoresInput>
  }

  export type UsuarioCreateWithoutSupervisorInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    colaboradores?: UsuarioCreateNestedManyWithoutSupervisorInput
    saldo: SaldoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSupervisorInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    saldoId: string
    colaboradores?: UsuarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsuarioCreateOrConnectWithoutSupervisorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput>
  }

  export type UsuarioCreateManySupervisorInputEnvelope = {
    data: UsuarioCreateManySupervisorInput | UsuarioCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type SaldoCreateWithoutUsuarioInput = {
    id?: string
    RD1?: number
    RD5?: number
    RD10?: number
    RD25?: number
    RD100?: number
    RD200?: number
    RD500?: number
    RD1000?: number
    RD2000?: number
    USD1?: number
    USD2?: number
    USD5?: number
    USD10?: number
    USD20?: number
    USD50?: number
    USD100?: number
    EUR5?: number
    EUR10?: number
    EUR20?: number
    EUR50?: number
    EUR100?: number
  }

  export type SaldoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    RD1?: number
    RD5?: number
    RD10?: number
    RD25?: number
    RD100?: number
    RD200?: number
    RD500?: number
    RD1000?: number
    RD2000?: number
    USD1?: number
    USD2?: number
    USD5?: number
    USD10?: number
    USD20?: number
    USD50?: number
    USD100?: number
    EUR5?: number
    EUR10?: number
    EUR20?: number
    EUR50?: number
    EUR100?: number
  }

  export type SaldoCreateOrConnectWithoutUsuarioInput = {
    where: SaldoWhereUniqueInput
    create: XOR<SaldoCreateWithoutUsuarioInput, SaldoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioUpsertWithoutColaboradoresInput = {
    update: XOR<UsuarioUpdateWithoutColaboradoresInput, UsuarioUncheckedUpdateWithoutColaboradoresInput>
    create: XOR<UsuarioCreateWithoutColaboradoresInput, UsuarioUncheckedCreateWithoutColaboradoresInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutColaboradoresInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutColaboradoresInput, UsuarioUncheckedUpdateWithoutColaboradoresInput>
  }

  export type UsuarioUpdateWithoutColaboradoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    Supervisor?: UsuarioUpdateOneWithoutColaboradoresNestedInput
    saldo?: SaldoUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutColaboradoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    codigoEmpleado?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    SupervisorID?: NullableIntFieldUpdateOperationsInput | number | null
    saldoId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutSupervisorInput, UsuarioUncheckedUpdateWithoutSupervisorInput>
    create: XOR<UsuarioCreateWithoutSupervisorInput, UsuarioUncheckedCreateWithoutSupervisorInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutSupervisorInput, UsuarioUncheckedUpdateWithoutSupervisorInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutSupervisorInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    codigoEmpleado?: IntFilter<"Usuario"> | number
    cargo?: StringFilter<"Usuario"> | string
    inventario?: StringNullableListFilter<"Usuario">
    transferencia?: BoolFilter<"Usuario"> | boolean
    recepcion?: BoolFilter<"Usuario"> | boolean
    preparacion?: BoolFilter<"Usuario"> | boolean
    EIE?: BoolFilter<"Usuario"> | boolean
    SupervisorID?: IntNullableFilter<"Usuario"> | number | null
    saldoId?: StringFilter<"Usuario"> | string
  }

  export type SaldoUpsertWithoutUsuarioInput = {
    update: XOR<SaldoUpdateWithoutUsuarioInput, SaldoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SaldoCreateWithoutUsuarioInput, SaldoUncheckedCreateWithoutUsuarioInput>
    where?: SaldoWhereInput
  }

  export type SaldoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: SaldoWhereInput
    data: XOR<SaldoUpdateWithoutUsuarioInput, SaldoUncheckedUpdateWithoutUsuarioInput>
  }

  export type SaldoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    RD1?: IntFieldUpdateOperationsInput | number
    RD5?: IntFieldUpdateOperationsInput | number
    RD10?: IntFieldUpdateOperationsInput | number
    RD25?: IntFieldUpdateOperationsInput | number
    RD100?: IntFieldUpdateOperationsInput | number
    RD200?: IntFieldUpdateOperationsInput | number
    RD500?: IntFieldUpdateOperationsInput | number
    RD1000?: IntFieldUpdateOperationsInput | number
    RD2000?: IntFieldUpdateOperationsInput | number
    USD1?: IntFieldUpdateOperationsInput | number
    USD2?: IntFieldUpdateOperationsInput | number
    USD5?: IntFieldUpdateOperationsInput | number
    USD10?: IntFieldUpdateOperationsInput | number
    USD20?: IntFieldUpdateOperationsInput | number
    USD50?: IntFieldUpdateOperationsInput | number
    USD100?: IntFieldUpdateOperationsInput | number
    EUR5?: IntFieldUpdateOperationsInput | number
    EUR10?: IntFieldUpdateOperationsInput | number
    EUR20?: IntFieldUpdateOperationsInput | number
    EUR50?: IntFieldUpdateOperationsInput | number
    EUR100?: IntFieldUpdateOperationsInput | number
  }

  export type SaldoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    RD1?: IntFieldUpdateOperationsInput | number
    RD5?: IntFieldUpdateOperationsInput | number
    RD10?: IntFieldUpdateOperationsInput | number
    RD25?: IntFieldUpdateOperationsInput | number
    RD100?: IntFieldUpdateOperationsInput | number
    RD200?: IntFieldUpdateOperationsInput | number
    RD500?: IntFieldUpdateOperationsInput | number
    RD1000?: IntFieldUpdateOperationsInput | number
    RD2000?: IntFieldUpdateOperationsInput | number
    USD1?: IntFieldUpdateOperationsInput | number
    USD2?: IntFieldUpdateOperationsInput | number
    USD5?: IntFieldUpdateOperationsInput | number
    USD10?: IntFieldUpdateOperationsInput | number
    USD20?: IntFieldUpdateOperationsInput | number
    USD50?: IntFieldUpdateOperationsInput | number
    USD100?: IntFieldUpdateOperationsInput | number
    EUR5?: IntFieldUpdateOperationsInput | number
    EUR10?: IntFieldUpdateOperationsInput | number
    EUR20?: IntFieldUpdateOperationsInput | number
    EUR50?: IntFieldUpdateOperationsInput | number
    EUR100?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutSaldoInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    Supervisor?: UsuarioCreateNestedOneWithoutColaboradoresInput
    colaboradores?: UsuarioCreateNestedManyWithoutSupervisorInput
  }

  export type UsuarioUncheckedCreateWithoutSaldoInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    SupervisorID?: number | null
    colaboradores?: UsuarioUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type UsuarioCreateOrConnectWithoutSaldoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSaldoInput, UsuarioUncheckedCreateWithoutSaldoInput>
  }

  export type UsuarioUpsertWithoutSaldoInput = {
    update: XOR<UsuarioUpdateWithoutSaldoInput, UsuarioUncheckedUpdateWithoutSaldoInput>
    create: XOR<UsuarioCreateWithoutSaldoInput, UsuarioUncheckedCreateWithoutSaldoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSaldoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSaldoInput, UsuarioUncheckedUpdateWithoutSaldoInput>
  }

  export type UsuarioUpdateWithoutSaldoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    Supervisor?: UsuarioUpdateOneWithoutColaboradoresNestedInput
    colaboradores?: UsuarioUpdateManyWithoutSupervisorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSaldoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    codigoEmpleado?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    SupervisorID?: NullableIntFieldUpdateOperationsInput | number | null
    colaboradores?: UsuarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsuarioCreateManySupervisorInput = {
    id?: string
    nombre: string
    contrasena: string
    codigoEmpleado?: number
    cargo?: string
    inventario?: UsuarioCreateinventarioInput | string[]
    transferencia?: boolean
    recepcion?: boolean
    preparacion?: boolean
    EIE?: boolean
    saldoId: string
  }

  export type UsuarioUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    colaboradores?: UsuarioUpdateManyWithoutSupervisorNestedInput
    saldo?: SaldoUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    codigoEmpleado?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    saldoId?: StringFieldUpdateOperationsInput | string
    colaboradores?: UsuarioUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutSupervisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    codigoEmpleado?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    inventario?: UsuarioUpdateinventarioInput | string[]
    transferencia?: BoolFieldUpdateOperationsInput | boolean
    recepcion?: BoolFieldUpdateOperationsInput | boolean
    preparacion?: BoolFieldUpdateOperationsInput | boolean
    EIE?: BoolFieldUpdateOperationsInput | boolean
    saldoId?: StringFieldUpdateOperationsInput | string
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