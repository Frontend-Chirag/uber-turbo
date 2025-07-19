
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
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model emergencyContacts
 * 
 */
export type emergencyContacts = $Result.DefaultSelection<Prisma.$emergencyContactsPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model DocumentImage
 * 
 */
export type DocumentImage = $Result.DefaultSelection<Prisma.$DocumentImagePayload>
/**
 * Model RegistrationStepDisplay
 * 
 */
export type RegistrationStepDisplay = $Result.DefaultSelection<Prisma.$RegistrationStepDisplayPayload>
/**
 * Model RegistrationStepOptions
 * 
 */
export type RegistrationStepOptions = $Result.DefaultSelection<Prisma.$RegistrationStepOptionsPayload>
/**
 * Model StepDisplay
 * 
 */
export type StepDisplay = $Result.DefaultSelection<Prisma.$StepDisplayPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rider
 * 
 */
export type Rider = $Result.DefaultSelection<Prisma.$RiderPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model ServiceArea
 * 
 */
export type ServiceArea = $Result.DefaultSelection<Prisma.$ServiceAreaPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Earnings
 * 
 */
export type Earnings = $Result.DefaultSelection<Prisma.$EarningsPayload>
/**
 * Model Ride
 * 
 */
export type Ride = $Result.DefaultSelection<Prisma.$RidePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model RegistrationTemplate
 * 
 */
export type RegistrationTemplate = $Result.DefaultSelection<Prisma.$RegistrationTemplatePayload>
/**
 * Model RegistrationStep
 * 
 */
export type RegistrationStep = $Result.DefaultSelection<Prisma.$RegistrationStepPayload>
/**
 * Model StepDefinition
 * 
 */
export type StepDefinition = $Result.DefaultSelection<Prisma.$StepDefinitionPayload>
/**
 * Model RegistrationProgress
 * 
 */
export type RegistrationProgress = $Result.DefaultSelection<Prisma.$RegistrationProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  driver: 'driver',
  rider: 'rider',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ShiftStatus: {
  ACTIVE: 'ACTIVE',
  ON_BREAK: 'ON_BREAK',
  ENDED: 'ENDED'
};

export type ShiftStatus = (typeof ShiftStatus)[keyof typeof ShiftStatus]


export const DriverStatus: {
  AVAILABLE: 'AVAILABLE',
  OFFLINE: 'OFFLINE',
  ONLINE: 'ONLINE'
};

export type DriverStatus = (typeof DriverStatus)[keyof typeof DriverStatus]


export const VehicleType: {
  CAR: 'CAR',
  BIKE: 'BIKE'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const RegistrationStatus: {
  not_started: 'not_started',
  in_progress: 'in_progress',
  completed: 'completed',
  failed: 'failed'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]


export const StepType: {
  driverLicense: 'driverLicense',
  profilePhoto: 'profilePhoto',
  document: 'document',
  vehicleRegistration: 'vehicleRegistration',
  vehicleInsurance: 'vehicleInsurance'
};

export type StepType = (typeof StepType)[keyof typeof StepType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ShiftStatus = $Enums.ShiftStatus

export const ShiftStatus: typeof $Enums.ShiftStatus

export type DriverStatus = $Enums.DriverStatus

export const DriverStatus: typeof $Enums.DriverStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

export type StepType = $Enums.StepType

export const StepType: typeof $Enums.StepType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.rider.findMany()
    * ```
    */
  get rider(): Prisma.RiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceArea`: Exposes CRUD operations for the **ServiceArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceAreas
    * const serviceAreas = await prisma.serviceArea.findMany()
    * ```
    */
  get serviceArea(): Prisma.ServiceAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.earnings`: Exposes CRUD operations for the **Earnings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Earnings
    * const earnings = await prisma.earnings.findMany()
    * ```
    */
  get earnings(): Prisma.EarningsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride`: Exposes CRUD operations for the **Ride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.ride.findMany()
    * ```
    */
  get ride(): Prisma.RideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrationTemplate`: Exposes CRUD operations for the **RegistrationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationTemplates
    * const registrationTemplates = await prisma.registrationTemplate.findMany()
    * ```
    */
  get registrationTemplate(): Prisma.RegistrationTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrationStep`: Exposes CRUD operations for the **RegistrationStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationSteps
    * const registrationSteps = await prisma.registrationStep.findMany()
    * ```
    */
  get registrationStep(): Prisma.RegistrationStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepDefinition`: Exposes CRUD operations for the **StepDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepDefinitions
    * const stepDefinitions = await prisma.stepDefinition.findMany()
    * ```
    */
  get stepDefinition(): Prisma.StepDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrationProgress`: Exposes CRUD operations for the **RegistrationProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationProgresses
    * const registrationProgresses = await prisma.registrationProgress.findMany()
    * ```
    */
  get registrationProgress(): Prisma.RegistrationProgressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    User: 'User',
    Rider: 'Rider',
    Driver: 'Driver',
    ServiceArea: 'ServiceArea',
    Vehicle: 'Vehicle',
    Document: 'Document',
    Earnings: 'Earnings',
    Ride: 'Ride',
    Admin: 'Admin',
    RegistrationTemplate: 'RegistrationTemplate',
    RegistrationStep: 'RegistrationStep',
    StepDefinition: 'StepDefinition',
    RegistrationProgress: 'RegistrationProgress'
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
      modelProps: "user" | "rider" | "driver" | "serviceArea" | "vehicle" | "document" | "earnings" | "ride" | "admin" | "registrationTemplate" | "registrationStep" | "stepDefinition" | "registrationProgress"
      txIsolationLevel: never
    }
    model: {
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Rider: {
        payload: Prisma.$RiderPayload<ExtArgs>
        fields: Prisma.RiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findFirst: {
            args: Prisma.RiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findMany: {
            args: Prisma.RiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          create: {
            args: Prisma.RiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          createMany: {
            args: Prisma.RiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          update: {
            args: Prisma.RiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          deleteMany: {
            args: Prisma.RiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          aggregate: {
            args: Prisma.RiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider>
          }
          groupBy: {
            args: Prisma.RiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RiderFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RiderAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RiderCountArgs<ExtArgs>
            result: $Utils.Optional<RiderCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DriverFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DriverAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      ServiceArea: {
        payload: Prisma.$ServiceAreaPayload<ExtArgs>
        fields: Prisma.ServiceAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          findFirst: {
            args: Prisma.ServiceAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          findMany: {
            args: Prisma.ServiceAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>[]
          }
          create: {
            args: Prisma.ServiceAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          createMany: {
            args: Prisma.ServiceAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          update: {
            args: Prisma.ServiceAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          deleteMany: {
            args: Prisma.ServiceAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          aggregate: {
            args: Prisma.ServiceAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceArea>
          }
          groupBy: {
            args: Prisma.ServiceAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceAreaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceAreaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceAreaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceAreaCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceAreaCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VehicleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VehicleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DocumentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DocumentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Earnings: {
        payload: Prisma.$EarningsPayload<ExtArgs>
        fields: Prisma.EarningsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EarningsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EarningsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          findFirst: {
            args: Prisma.EarningsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EarningsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          findMany: {
            args: Prisma.EarningsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>[]
          }
          create: {
            args: Prisma.EarningsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          createMany: {
            args: Prisma.EarningsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EarningsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          update: {
            args: Prisma.EarningsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          deleteMany: {
            args: Prisma.EarningsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EarningsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EarningsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          aggregate: {
            args: Prisma.EarningsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEarnings>
          }
          groupBy: {
            args: Prisma.EarningsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EarningsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EarningsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EarningsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EarningsCountArgs<ExtArgs>
            result: $Utils.Optional<EarningsCountAggregateOutputType> | number
          }
        }
      }
      Ride: {
        payload: Prisma.$RidePayload<ExtArgs>
        fields: Prisma.RideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findFirst: {
            args: Prisma.RideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findMany: {
            args: Prisma.RideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          create: {
            args: Prisma.RideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          createMany: {
            args: Prisma.RideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          update: {
            args: Prisma.RideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          deleteMany: {
            args: Prisma.RideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          aggregate: {
            args: Prisma.RideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide>
          }
          groupBy: {
            args: Prisma.RideGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RideFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RideAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RideCountArgs<ExtArgs>
            result: $Utils.Optional<RideCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      RegistrationTemplate: {
        payload: Prisma.$RegistrationTemplatePayload<ExtArgs>
        fields: Prisma.RegistrationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>
          }
          findFirst: {
            args: Prisma.RegistrationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>
          }
          findMany: {
            args: Prisma.RegistrationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>[]
          }
          create: {
            args: Prisma.RegistrationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>
          }
          createMany: {
            args: Prisma.RegistrationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>
          }
          update: {
            args: Prisma.RegistrationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.RegistrationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationTemplatePayload>
          }
          aggregate: {
            args: Prisma.RegistrationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationTemplate>
          }
          groupBy: {
            args: Prisma.RegistrationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationTemplateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegistrationTemplateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegistrationTemplateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RegistrationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationTemplateCountAggregateOutputType> | number
          }
        }
      }
      RegistrationStep: {
        payload: Prisma.$RegistrationStepPayload<ExtArgs>
        fields: Prisma.RegistrationStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>
          }
          findFirst: {
            args: Prisma.RegistrationStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>
          }
          findMany: {
            args: Prisma.RegistrationStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>[]
          }
          create: {
            args: Prisma.RegistrationStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>
          }
          createMany: {
            args: Prisma.RegistrationStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>
          }
          update: {
            args: Prisma.RegistrationStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationStepPayload>
          }
          aggregate: {
            args: Prisma.RegistrationStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationStep>
          }
          groupBy: {
            args: Prisma.RegistrationStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationStepGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegistrationStepFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegistrationStepAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RegistrationStepCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationStepCountAggregateOutputType> | number
          }
        }
      }
      StepDefinition: {
        payload: Prisma.$StepDefinitionPayload<ExtArgs>
        fields: Prisma.StepDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>
          }
          findFirst: {
            args: Prisma.StepDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>
          }
          findMany: {
            args: Prisma.StepDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>[]
          }
          create: {
            args: Prisma.StepDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>
          }
          createMany: {
            args: Prisma.StepDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StepDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>
          }
          update: {
            args: Prisma.StepDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.StepDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StepDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepDefinitionPayload>
          }
          aggregate: {
            args: Prisma.StepDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepDefinition>
          }
          groupBy: {
            args: Prisma.StepDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepDefinitionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StepDefinitionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StepDefinitionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StepDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<StepDefinitionCountAggregateOutputType> | number
          }
        }
      }
      RegistrationProgress: {
        payload: Prisma.$RegistrationProgressPayload<ExtArgs>
        fields: Prisma.RegistrationProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>
          }
          findFirst: {
            args: Prisma.RegistrationProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>
          }
          findMany: {
            args: Prisma.RegistrationProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>[]
          }
          create: {
            args: Prisma.RegistrationProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>
          }
          createMany: {
            args: Prisma.RegistrationProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>
          }
          update: {
            args: Prisma.RegistrationProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationProgressPayload>
          }
          aggregate: {
            args: Prisma.RegistrationProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationProgress>
          }
          groupBy: {
            args: Prisma.RegistrationProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegistrationProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegistrationProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RegistrationProgressCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    rider?: RiderOmit
    driver?: DriverOmit
    serviceArea?: ServiceAreaOmit
    vehicle?: VehicleOmit
    document?: DocumentOmit
    earnings?: EarningsOmit
    ride?: RideOmit
    admin?: AdminOmit
    registrationTemplate?: RegistrationTemplateOmit
    registrationStep?: RegistrationStepOmit
    stepDefinition?: StepDefinitionOmit
    registrationProgress?: RegistrationProgressOmit
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
   * Count Type RiderCountOutputType
   */

  export type RiderCountOutputType = {
    rideHistory: number
  }

  export type RiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rideHistory?: boolean | RiderCountOutputTypeCountRideHistoryArgs
  }

  // Custom InputTypes
  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiderCountOutputType
     */
    select?: RiderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountRideHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    documents: number
    Ride: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DriverCountOutputTypeCountDocumentsArgs
    Ride?: boolean | DriverCountOutputTypeCountRideArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Count Type ServiceAreaCountOutputType
   */

  export type ServiceAreaCountOutputType = {
    drivers: number
  }

  export type ServiceAreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | ServiceAreaCountOutputTypeCountDriversArgs
  }

  // Custom InputTypes
  /**
   * ServiceAreaCountOutputType without action
   */
  export type ServiceAreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAreaCountOutputType
     */
    select?: ServiceAreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceAreaCountOutputType without action
   */
  export type ServiceAreaCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }


  /**
   * Count Type RegistrationTemplateCountOutputType
   */

  export type RegistrationTemplateCountOutputType = {
    steps: number
  }

  export type RegistrationTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | RegistrationTemplateCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * RegistrationTemplateCountOutputType without action
   */
  export type RegistrationTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplateCountOutputType
     */
    select?: RegistrationTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistrationTemplateCountOutputType without action
   */
  export type RegistrationTemplateCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationStepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Location
   */





  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean
    coordinates?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    placeId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    type?: boolean
    coordinates?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    placeId?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type" | "coordinates" | "address" | "city" | "state" | "country" | "postalCode" | "placeId" | "updatedAt", ExtArgs["result"]["location"]>

  export type $LocationPayload = {
    name: "Location"
    objects: {}
    scalars: {
      type: string
      coordinates: number[]
      address: string | null
      city: string
      state: string
      country: string
      postalCode: string
      placeId: string
      updatedAt: Date
    }
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>





  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly type: FieldRef<"Location", 'String'>
    readonly coordinates: FieldRef<"Location", 'Float[]'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
    readonly placeId: FieldRef<"Location", 'String'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
  }


  /**
   * Model emergencyContacts
   */





  export type emergencyContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    phone?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["emergencyContacts"]>



  export type emergencyContactsSelectScalar = {
    name?: boolean
    phone?: boolean
    isActive?: boolean
  }

  export type emergencyContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "phone" | "isActive", ExtArgs["result"]["emergencyContacts"]>

  export type $emergencyContactsPayload = {
    name: "emergencyContacts"
    objects: {}
    scalars: {
      name: string
      phone: string
      isActive: boolean
    }
    composites: {}
  }

  type emergencyContactsGetPayload<S extends boolean | null | undefined | emergencyContactsDefaultArgs> = $Result.GetResult<Prisma.$emergencyContactsPayload, S>





  /**
   * Fields of the emergencyContacts model
   */
  interface emergencyContactsFieldRefs {
    readonly name: FieldRef<"emergencyContacts", 'String'>
    readonly phone: FieldRef<"emergencyContacts", 'String'>
    readonly isActive: FieldRef<"emergencyContacts", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * emergencyContacts without action
   */
  export type emergencyContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emergencyContacts
     */
    select?: emergencyContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emergencyContacts
     */
    omit?: emergencyContactsOmit<ExtArgs> | null
  }


  /**
   * Model Availability
   */





  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    isAvailable?: boolean
    workingHours?: boolean | ScheduleDefaultArgs<ExtArgs>
    currentShift?: boolean | ShiftDefaultArgs<ExtArgs>
    breakEndTime?: boolean
    breakStartTime?: boolean
  }, ExtArgs["result"]["availability"]>



  export type AvailabilitySelectScalar = {
    isAvailable?: boolean
    breakEndTime?: boolean
    breakStartTime?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"isAvailable" | "workingHours" | "currentShift" | "breakEndTime" | "breakStartTime", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailabilityPayload = {
    name: "Availability"
    objects: {}
    scalars: {
      isAvailable: boolean
      breakEndTime: Date | null
      breakStartTime: Date | null
    }
    composites: {
      workingHours: Prisma.$SchedulePayload[]
      currentShift: Prisma.$ShiftPayload | null
    }
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>





  /**
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly isAvailable: FieldRef<"Availability", 'Boolean'>
    readonly breakEndTime: FieldRef<"Availability", 'DateTime'>
    readonly breakStartTime: FieldRef<"Availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */





  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["schedule"]>



  export type ScheduleSelectScalar = {
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dayOfWeek" | "startTime" | "endTime" | "isActive", ExtArgs["result"]["schedule"]>

  export type $SchedulePayload = {
    name: "Schedule"
    objects: {}
    scalars: {
      dayOfWeek: number
      startTime: string
      endTime: string
      isActive: boolean
    }
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>





  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly dayOfWeek: FieldRef<"Schedule", 'Int'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
    readonly isActive: FieldRef<"Schedule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
  }


  /**
   * Model Shift
   */





  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StartTime?: boolean
    endTime?: boolean
    status?: boolean
  }, ExtArgs["result"]["shift"]>



  export type ShiftSelectScalar = {
    StartTime?: boolean
    endTime?: boolean
    status?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StartTime" | "endTime" | "status", ExtArgs["result"]["shift"]>

  export type $ShiftPayload = {
    name: "Shift"
    objects: {}
    scalars: {
      StartTime: Date
      endTime: Date
      status: $Enums.ShiftStatus
    }
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>





  /**
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly StartTime: FieldRef<"Shift", 'DateTime'>
    readonly endTime: FieldRef<"Shift", 'DateTime'>
    readonly status: FieldRef<"Shift", 'ShiftStatus'>
  }
    

  // Custom InputTypes
  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
  }


  /**
   * Model DocumentImage
   */





  export type DocumentImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    front?: boolean
    back?: boolean
  }, ExtArgs["result"]["documentImage"]>



  export type DocumentImageSelectScalar = {
    front?: boolean
    back?: boolean
  }

  export type DocumentImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"front" | "back", ExtArgs["result"]["documentImage"]>

  export type $DocumentImagePayload = {
    name: "DocumentImage"
    objects: {}
    scalars: {
      front: string
      back: string | null
    }
    composites: {}
  }

  type DocumentImageGetPayload<S extends boolean | null | undefined | DocumentImageDefaultArgs> = $Result.GetResult<Prisma.$DocumentImagePayload, S>





  /**
   * Fields of the DocumentImage model
   */
  interface DocumentImageFieldRefs {
    readonly front: FieldRef<"DocumentImage", 'String'>
    readonly back: FieldRef<"DocumentImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentImage without action
   */
  export type DocumentImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
  }


  /**
   * Model RegistrationStepDisplay
   */





  export type RegistrationStepDisplaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    subtitle?: boolean
  }, ExtArgs["result"]["registrationStepDisplay"]>



  export type RegistrationStepDisplaySelectScalar = {
    title?: boolean
    subtitle?: boolean
  }

  export type RegistrationStepDisplayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"title" | "subtitle", ExtArgs["result"]["registrationStepDisplay"]>

  export type $RegistrationStepDisplayPayload = {
    name: "RegistrationStepDisplay"
    objects: {}
    scalars: {
      title: string
      subtitle: string | null
    }
    composites: {}
  }

  type RegistrationStepDisplayGetPayload<S extends boolean | null | undefined | RegistrationStepDisplayDefaultArgs> = $Result.GetResult<Prisma.$RegistrationStepDisplayPayload, S>





  /**
   * Fields of the RegistrationStepDisplay model
   */
  interface RegistrationStepDisplayFieldRefs {
    readonly title: FieldRef<"RegistrationStepDisplay", 'String'>
    readonly subtitle: FieldRef<"RegistrationStepDisplay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationStepDisplay without action
   */
  export type RegistrationStepDisplayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStepDisplay
     */
    select?: RegistrationStepDisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStepDisplay
     */
    omit?: RegistrationStepDisplayOmit<ExtArgs> | null
  }


  /**
   * Model RegistrationStepOptions
   */





  export type RegistrationStepOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    isRecommended?: boolean
    isDisabled?: boolean
    redirectURL?: boolean
    isUpcoming?: boolean
    isOptional?: boolean
  }, ExtArgs["result"]["registrationStepOptions"]>



  export type RegistrationStepOptionsSelectScalar = {
    isRecommended?: boolean
    isDisabled?: boolean
    redirectURL?: boolean
    isUpcoming?: boolean
    isOptional?: boolean
  }

  export type RegistrationStepOptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"isRecommended" | "isDisabled" | "redirectURL" | "isUpcoming" | "isOptional", ExtArgs["result"]["registrationStepOptions"]>

  export type $RegistrationStepOptionsPayload = {
    name: "RegistrationStepOptions"
    objects: {}
    scalars: {
      isRecommended: boolean
      isDisabled: boolean
      redirectURL: string | null
      isUpcoming: boolean
      isOptional: boolean
    }
    composites: {}
  }

  type RegistrationStepOptionsGetPayload<S extends boolean | null | undefined | RegistrationStepOptionsDefaultArgs> = $Result.GetResult<Prisma.$RegistrationStepOptionsPayload, S>





  /**
   * Fields of the RegistrationStepOptions model
   */
  interface RegistrationStepOptionsFieldRefs {
    readonly isRecommended: FieldRef<"RegistrationStepOptions", 'Boolean'>
    readonly isDisabled: FieldRef<"RegistrationStepOptions", 'Boolean'>
    readonly redirectURL: FieldRef<"RegistrationStepOptions", 'String'>
    readonly isUpcoming: FieldRef<"RegistrationStepOptions", 'Boolean'>
    readonly isOptional: FieldRef<"RegistrationStepOptions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationStepOptions without action
   */
  export type RegistrationStepOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStepOptions
     */
    select?: RegistrationStepOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStepOptions
     */
    omit?: RegistrationStepOptionsOmit<ExtArgs> | null
  }


  /**
   * Model StepDisplay
   */





  export type StepDisplaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StepTitle?: boolean
    StepPreviewTopInstruction?: boolean
    StepPreviewBottomInstruction?: boolean
    StepPreviewInstructionsList?: boolean
    StepPreviewImageURL?: boolean
    StepUploadActionText?: boolean
    StepUseMyPhoneText?: boolean
  }, ExtArgs["result"]["stepDisplay"]>



  export type StepDisplaySelectScalar = {
    StepTitle?: boolean
    StepPreviewTopInstruction?: boolean
    StepPreviewBottomInstruction?: boolean
    StepPreviewInstructionsList?: boolean
    StepPreviewImageURL?: boolean
    StepUploadActionText?: boolean
    StepUseMyPhoneText?: boolean
  }

  export type StepDisplayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StepTitle" | "StepPreviewTopInstruction" | "StepPreviewBottomInstruction" | "StepPreviewInstructionsList" | "StepPreviewImageURL" | "StepUploadActionText" | "StepUseMyPhoneText", ExtArgs["result"]["stepDisplay"]>

  export type $StepDisplayPayload = {
    name: "StepDisplay"
    objects: {}
    scalars: {
      StepTitle: string
      StepPreviewTopInstruction: string | null
      StepPreviewBottomInstruction: string | null
      StepPreviewInstructionsList: string[]
      StepPreviewImageURL: string | null
      StepUploadActionText: string | null
      StepUseMyPhoneText: string | null
    }
    composites: {}
  }

  type StepDisplayGetPayload<S extends boolean | null | undefined | StepDisplayDefaultArgs> = $Result.GetResult<Prisma.$StepDisplayPayload, S>





  /**
   * Fields of the StepDisplay model
   */
  interface StepDisplayFieldRefs {
    readonly StepTitle: FieldRef<"StepDisplay", 'String'>
    readonly StepPreviewTopInstruction: FieldRef<"StepDisplay", 'String'>
    readonly StepPreviewBottomInstruction: FieldRef<"StepDisplay", 'String'>
    readonly StepPreviewInstructionsList: FieldRef<"StepDisplay", 'String[]'>
    readonly StepPreviewImageURL: FieldRef<"StepDisplay", 'String'>
    readonly StepUploadActionText: FieldRef<"StepDisplay", 'String'>
    readonly StepUseMyPhoneText: FieldRef<"StepDisplay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StepDisplay without action
   */
  export type StepDisplayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDisplay
     */
    select?: StepDisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDisplay
     */
    omit?: StepDisplayOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phonenumber: string | null
    phoneCountryCode: string | null
    isVerifiedEmail: boolean | null
    isVerifiedPhonenumber: boolean | null
    profileURL: string | null
    socketId: string | null
    lastLocationUpdate: Date | null
    isActive: boolean | null
    lastLoginAt: Date | null
    lockoutUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phonenumber: string | null
    phoneCountryCode: string | null
    isVerifiedEmail: boolean | null
    isVerifiedPhonenumber: boolean | null
    profileURL: string | null
    socketId: string | null
    lastLocationUpdate: Date | null
    isActive: boolean | null
    lastLoginAt: Date | null
    lockoutUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    firstname: number
    lastname: number
    email: number
    phonenumber: number
    phoneCountryCode: number
    isVerifiedEmail: number
    isVerifiedPhonenumber: number
    profileURL: number
    socketId: number
    lastLocationUpdate: number
    isActive: number
    lastLoginAt: number
    lockoutUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    firstname?: true
    lastname?: true
    email?: true
    phonenumber?: true
    phoneCountryCode?: true
    isVerifiedEmail?: true
    isVerifiedPhonenumber?: true
    profileURL?: true
    socketId?: true
    lastLocationUpdate?: true
    isActive?: true
    lastLoginAt?: true
    lockoutUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    firstname?: true
    lastname?: true
    email?: true
    phonenumber?: true
    phoneCountryCode?: true
    isVerifiedEmail?: true
    isVerifiedPhonenumber?: true
    profileURL?: true
    socketId?: true
    lastLocationUpdate?: true
    isActive?: true
    lastLoginAt?: true
    lockoutUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    firstname?: true
    lastname?: true
    email?: true
    phonenumber?: true
    phoneCountryCode?: true
    isVerifiedEmail?: true
    isVerifiedPhonenumber?: true
    profileURL?: true
    socketId?: true
    lastLocationUpdate?: true
    isActive?: true
    lastLoginAt?: true
    lockoutUntil?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    firstname: string
    lastname: string | null
    email: string | null
    phonenumber: string | null
    phoneCountryCode: string | null
    isVerifiedEmail: boolean | null
    isVerifiedPhonenumber: boolean | null
    profileURL: string | null
    socketId: string | null
    lastLocationUpdate: Date | null
    isActive: boolean
    lastLoginAt: Date | null
    lockoutUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    role?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phonenumber?: boolean
    phoneCountryCode?: boolean
    isVerifiedEmail?: boolean
    isVerifiedPhonenumber?: boolean
    profileURL?: boolean
    socketId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    lastLocationUpdate?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    lockoutUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | User$riderArgs<ExtArgs>
    driver?: boolean | User$driverArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phonenumber?: boolean
    phoneCountryCode?: boolean
    isVerifiedEmail?: boolean
    isVerifiedPhonenumber?: boolean
    profileURL?: boolean
    socketId?: boolean
    lastLocationUpdate?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    lockoutUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "firstname" | "lastname" | "email" | "phonenumber" | "phoneCountryCode" | "isVerifiedEmail" | "isVerifiedPhonenumber" | "profileURL" | "socketId" | "location" | "lastLocationUpdate" | "isActive" | "lastLoginAt" | "lockoutUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | User$riderArgs<ExtArgs>
    driver?: boolean | User$driverArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs> | null
      driver: Prisma.$DriverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      firstname: string
      lastname: string | null
      email: string | null
      phonenumber: string | null
      phoneCountryCode: string | null
      isVerifiedEmail: boolean | null
      isVerifiedPhonenumber: boolean | null
      profileURL: string | null
      socketId: string | null
      lastLocationUpdate: Date | null
      isActive: boolean
      lastLoginAt: Date | null
      lockoutUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {
      location: Prisma.$LocationPayload | null
    }
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    rider<T extends User$riderArgs<ExtArgs> = {}>(args?: Subset<T, User$riderArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    driver<T extends User$driverArgs<ExtArgs> = {}>(args?: Subset<T, User$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phonenumber: FieldRef<"User", 'String'>
    readonly phoneCountryCode: FieldRef<"User", 'String'>
    readonly isVerifiedEmail: FieldRef<"User", 'Boolean'>
    readonly isVerifiedPhonenumber: FieldRef<"User", 'Boolean'>
    readonly profileURL: FieldRef<"User", 'String'>
    readonly socketId: FieldRef<"User", 'String'>
    readonly lastLocationUpdate: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly lockoutUntil: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.rider
   */
  export type User$riderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    where?: RiderWhereInput
  }

  /**
   * User.driver
   */
  export type User$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Rider
   */

  export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  export type RiderAvgAggregateOutputType = {
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
  }

  export type RiderSumAggregateOutputType = {
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
  }

  export type RiderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
  }

  export type RiderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
  }

  export type RiderCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    totalRides: number
    cancelledRides: number
    _all: number
  }


  export type RiderAvgAggregateInputType = {
    rating?: true
    totalRides?: true
    cancelledRides?: true
  }

  export type RiderSumAggregateInputType = {
    rating?: true
    totalRides?: true
    cancelledRides?: true
  }

  export type RiderMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    totalRides?: true
    cancelledRides?: true
  }

  export type RiderMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    totalRides?: true
    cancelledRides?: true
  }

  export type RiderCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    totalRides?: true
    cancelledRides?: true
    _all?: true
  }

  export type RiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider to aggregate.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Riders
    **/
    _count?: true | RiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiderMaxAggregateInputType
  }

  export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider[P]>
      : GetScalarType<T[P], AggregateRider[P]>
  }




  export type RiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithAggregationInput | RiderOrderByWithAggregationInput[]
    by: RiderScalarFieldEnum[] | RiderScalarFieldEnum
    having?: RiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiderCountAggregateInputType | true
    _avg?: RiderAvgAggregateInputType
    _sum?: RiderSumAggregateInputType
    _min?: RiderMinAggregateInputType
    _max?: RiderMaxAggregateInputType
  }

  export type RiderGroupByOutputType = {
    id: string
    userId: string
    rating: number
    totalRides: number
    cancelledRides: number
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiderGroupByOutputType[P]>
            : GetScalarType<T[P], RiderGroupByOutputType[P]>
        }
      >
    >


  export type RiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emergencyContacts?: boolean | emergencyContactsDefaultArgs<ExtArgs>
    rating?: boolean
    totalRides?: boolean
    cancelledRides?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rideHistory?: boolean | Rider$rideHistoryArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider"]>



  export type RiderSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    totalRides?: boolean
    cancelledRides?: boolean
  }

  export type RiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "emergencyContacts" | "rating" | "totalRides" | "cancelledRides", ExtArgs["result"]["rider"]>
  export type RiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rideHistory?: boolean | Rider$rideHistoryArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rideHistory: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rating: number
      totalRides: number
      cancelledRides: number
    }, ExtArgs["result"]["rider"]>
    composites: {
      emergencyContacts: Prisma.$emergencyContactsPayload[]
    }
  }

  type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = $Result.GetResult<Prisma.$RiderPayload, S>

  type RiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiderCountAggregateInputType | true
    }

  export interface RiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider'], meta: { name: 'Rider' } }
    /**
     * Find zero or one Rider that matches the filter.
     * @param {RiderFindUniqueArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiderFindUniqueArgs>(args: SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiderFindUniqueOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs>(args: SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiderFindFirstArgs>(args?: SelectSubset<T, RiderFindFirstArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs>(args?: SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.rider.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.rider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riderWithIdOnly = await prisma.rider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiderFindManyArgs>(args?: SelectSubset<T, RiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider.
     * @param {RiderCreateArgs} args - Arguments to create a Rider.
     * @example
     * // Create one Rider
     * const Rider = await prisma.rider.create({
     *   data: {
     *     // ... data to create a Rider
     *   }
     * })
     * 
     */
    create<T extends RiderCreateArgs>(args: SelectSubset<T, RiderCreateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Riders.
     * @param {RiderCreateManyArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiderCreateManyArgs>(args?: SelectSubset<T, RiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider.
     * @param {RiderDeleteArgs} args - Arguments to delete one Rider.
     * @example
     * // Delete one Rider
     * const Rider = await prisma.rider.delete({
     *   where: {
     *     // ... filter to delete one Rider
     *   }
     * })
     * 
     */
    delete<T extends RiderDeleteArgs>(args: SelectSubset<T, RiderDeleteArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider.
     * @param {RiderUpdateArgs} args - Arguments to update one Rider.
     * @example
     * // Update one Rider
     * const rider = await prisma.rider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiderUpdateArgs>(args: SelectSubset<T, RiderUpdateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Riders.
     * @param {RiderDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.rider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiderDeleteManyArgs>(args?: SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiderUpdateManyArgs>(args: SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider.
     * @param {RiderUpsertArgs} args - Arguments to update or create a Rider.
     * @example
     * // Update or create a Rider
     * const rider = await prisma.rider.upsert({
     *   create: {
     *     // ... data to create a Rider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider we want to update
     *   }
     * })
     */
    upsert<T extends RiderUpsertArgs>(args: SelectSubset<T, RiderUpsertArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Riders that matches the filter.
     * @param {RiderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rider = await prisma.rider.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RiderFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Rider.
     * @param {RiderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rider = await prisma.rider.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RiderAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.rider.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends RiderCountArgs>(
      args?: Subset<T, RiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiderAggregateArgs>(args: Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>

    /**
     * Group by Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderGroupByArgs} args - Group by arguments.
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
      T extends RiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiderGroupByArgs['orderBy'] }
        : { orderBy?: RiderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider model
   */
  readonly fields: RiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rideHistory<T extends Rider$rideHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Rider$rideHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rider model
   */
  interface RiderFieldRefs {
    readonly id: FieldRef<"Rider", 'String'>
    readonly userId: FieldRef<"Rider", 'String'>
    readonly rating: FieldRef<"Rider", 'Float'>
    readonly totalRides: FieldRef<"Rider", 'Int'>
    readonly cancelledRides: FieldRef<"Rider", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rider findUnique
   */
  export type RiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findUniqueOrThrow
   */
  export type RiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findFirst
   */
  export type RiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findFirstOrThrow
   */
  export type RiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findMany
   */
  export type RiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Riders to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider create
   */
  export type RiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider.
     */
    data: XOR<RiderCreateInput, RiderUncheckedCreateInput>
  }

  /**
   * Rider createMany
   */
  export type RiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
  }

  /**
   * Rider update
   */
  export type RiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider.
     */
    data: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
    /**
     * Choose, which Rider to update.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider updateMany
   */
  export type RiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider upsert
   */
  export type RiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider to update in case it exists.
     */
    where: RiderWhereUniqueInput
    /**
     * In case the Rider found by the `where` argument doesn't exist, create a new Rider with this data.
     */
    create: XOR<RiderCreateInput, RiderUncheckedCreateInput>
    /**
     * In case the Rider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
  }

  /**
   * Rider delete
   */
  export type RiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter which Rider to delete.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider deleteMany
   */
  export type RiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Riders to delete
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to delete.
     */
    limit?: number
  }

  /**
   * Rider findRaw
   */
  export type RiderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Rider aggregateRaw
   */
  export type RiderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Rider.rideHistory
   */
  export type Rider$rideHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Rider without action
   */
  export type RiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
  }

  export type DriverSumAggregateOutputType = {
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.DriverStatus | null
    vehicleType: $Enums.VehicleType | null
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
    isVerified: boolean | null
    isRegistrationComplete: boolean | null
    serviceAreaId: string | null
    isInServiceArea: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.DriverStatus | null
    vehicleType: $Enums.VehicleType | null
    rating: number | null
    totalRides: number | null
    cancelledRides: number | null
    isVerified: boolean | null
    isRegistrationComplete: boolean | null
    serviceAreaId: string | null
    isInServiceArea: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    vehicleType: number
    rating: number
    totalRides: number
    cancelledRides: number
    isVerified: number
    isRegistrationComplete: number
    serviceAreaId: number
    isInServiceArea: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    rating?: true
    totalRides?: true
    cancelledRides?: true
  }

  export type DriverSumAggregateInputType = {
    rating?: true
    totalRides?: true
    cancelledRides?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    vehicleType?: true
    rating?: true
    totalRides?: true
    cancelledRides?: true
    isVerified?: true
    isRegistrationComplete?: true
    serviceAreaId?: true
    isInServiceArea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    vehicleType?: true
    rating?: true
    totalRides?: true
    cancelledRides?: true
    isVerified?: true
    isRegistrationComplete?: true
    serviceAreaId?: true
    isInServiceArea?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    vehicleType?: true
    rating?: true
    totalRides?: true
    cancelledRides?: true
    isVerified?: true
    isRegistrationComplete?: true
    serviceAreaId?: true
    isInServiceArea?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    userId: string
    status: $Enums.DriverStatus
    vehicleType: $Enums.VehicleType | null
    rating: number
    totalRides: number
    cancelledRides: number
    isVerified: boolean
    isRegistrationComplete: boolean
    serviceAreaId: string | null
    isInServiceArea: boolean
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    vehicleType?: boolean
    rating?: boolean
    totalRides?: boolean
    cancelledRides?: boolean
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: boolean
    isInServiceArea?: boolean
    availability?: boolean | AvailabilityDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Driver$documentsArgs<ExtArgs>
    vehicle?: boolean | Driver$vehicleArgs<ExtArgs>
    earnings?: boolean | Driver$earningsArgs<ExtArgs>
    Ride?: boolean | Driver$RideArgs<ExtArgs>
    registrationProgress?: boolean | Driver$registrationProgressArgs<ExtArgs>
    serviceArea?: boolean | Driver$serviceAreaArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type DriverSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    vehicleType?: boolean
    rating?: boolean
    totalRides?: boolean
    cancelledRides?: boolean
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: boolean
    isInServiceArea?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "vehicleType" | "rating" | "totalRides" | "cancelledRides" | "isVerified" | "isRegistrationComplete" | "serviceAreaId" | "isInServiceArea" | "availability" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Driver$documentsArgs<ExtArgs>
    vehicle?: boolean | Driver$vehicleArgs<ExtArgs>
    earnings?: boolean | Driver$earningsArgs<ExtArgs>
    Ride?: boolean | Driver$RideArgs<ExtArgs>
    registrationProgress?: boolean | Driver$registrationProgressArgs<ExtArgs>
    serviceArea?: boolean | Driver$serviceAreaArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      earnings: Prisma.$EarningsPayload<ExtArgs> | null
      Ride: Prisma.$RidePayload<ExtArgs>[]
      registrationProgress: Prisma.$RegistrationProgressPayload<ExtArgs> | null
      serviceArea: Prisma.$ServiceAreaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: $Enums.DriverStatus
      vehicleType: $Enums.VehicleType | null
      rating: number
      totalRides: number
      cancelledRides: number
      isVerified: boolean
      isRegistrationComplete: boolean
      serviceAreaId: string | null
      isInServiceArea: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {
      availability: Prisma.$AvailabilityPayload | null
    }
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * @param {DriverFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const driver = await prisma.driver.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DriverFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Driver.
     * @param {DriverAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const driver = await prisma.driver.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DriverAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Driver$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicle<T extends Driver$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Driver$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    earnings<T extends Driver$earningsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$earningsArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Ride<T extends Driver$RideArgs<ExtArgs> = {}>(args?: Subset<T, Driver$RideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrationProgress<T extends Driver$registrationProgressArgs<ExtArgs> = {}>(args?: Subset<T, Driver$registrationProgressArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    serviceArea<T extends Driver$serviceAreaArgs<ExtArgs> = {}>(args?: Subset<T, Driver$serviceAreaArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly userId: FieldRef<"Driver", 'String'>
    readonly status: FieldRef<"Driver", 'DriverStatus'>
    readonly vehicleType: FieldRef<"Driver", 'VehicleType'>
    readonly rating: FieldRef<"Driver", 'Float'>
    readonly totalRides: FieldRef<"Driver", 'Int'>
    readonly cancelledRides: FieldRef<"Driver", 'Int'>
    readonly isVerified: FieldRef<"Driver", 'Boolean'>
    readonly isRegistrationComplete: FieldRef<"Driver", 'Boolean'>
    readonly serviceAreaId: FieldRef<"Driver", 'String'>
    readonly isInServiceArea: FieldRef<"Driver", 'Boolean'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver findRaw
   */
  export type DriverFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Driver aggregateRaw
   */
  export type DriverAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Driver.documents
   */
  export type Driver$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Driver.vehicle
   */
  export type Driver$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Driver.earnings
   */
  export type Driver$earningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    where?: EarningsWhereInput
  }

  /**
   * Driver.Ride
   */
  export type Driver$RideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Driver.registrationProgress
   */
  export type Driver$registrationProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    where?: RegistrationProgressWhereInput
  }

  /**
   * Driver.serviceArea
   */
  export type Driver$serviceAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    where?: ServiceAreaWhereInput
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model ServiceArea
   */

  export type AggregateServiceArea = {
    _count: ServiceAreaCountAggregateOutputType | null
    _min: ServiceAreaMinAggregateOutputType | null
    _max: ServiceAreaMaxAggregateOutputType | null
  }

  export type ServiceAreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceAreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceAreaCountAggregateOutputType = {
    id: number
    name: number
    type: number
    coordinates: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAreaMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceAreaMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceAreaCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    coordinates?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceArea to aggregate.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceAreas
    **/
    _count?: true | ServiceAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceAreaMaxAggregateInputType
  }

  export type GetServiceAreaAggregateType<T extends ServiceAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceArea[P]>
      : GetScalarType<T[P], AggregateServiceArea[P]>
  }




  export type ServiceAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAreaWhereInput
    orderBy?: ServiceAreaOrderByWithAggregationInput | ServiceAreaOrderByWithAggregationInput[]
    by: ServiceAreaScalarFieldEnum[] | ServiceAreaScalarFieldEnum
    having?: ServiceAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceAreaCountAggregateInputType | true
    _min?: ServiceAreaMinAggregateInputType
    _max?: ServiceAreaMaxAggregateInputType
  }

  export type ServiceAreaGroupByOutputType = {
    id: string
    name: string
    type: string
    coordinates: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ServiceAreaCountAggregateOutputType | null
    _min: ServiceAreaMinAggregateOutputType | null
    _max: ServiceAreaMaxAggregateOutputType | null
  }

  type GetServiceAreaGroupByPayload<T extends ServiceAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceAreaGroupByOutputType[P]>
        }
      >
    >


  export type ServiceAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drivers?: boolean | ServiceArea$driversArgs<ExtArgs>
    _count?: boolean | ServiceAreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceArea"]>



  export type ServiceAreaSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "coordinates" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceArea"]>
  export type ServiceAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | ServiceArea$driversArgs<ExtArgs>
    _count?: boolean | ServiceAreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceArea"
    objects: {
      drivers: Prisma.$DriverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      coordinates: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceArea"]>
    composites: {}
  }

  type ServiceAreaGetPayload<S extends boolean | null | undefined | ServiceAreaDefaultArgs> = $Result.GetResult<Prisma.$ServiceAreaPayload, S>

  type ServiceAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceAreaCountAggregateInputType | true
    }

  export interface ServiceAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceArea'], meta: { name: 'ServiceArea' } }
    /**
     * Find zero or one ServiceArea that matches the filter.
     * @param {ServiceAreaFindUniqueArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceAreaFindUniqueArgs>(args: SelectSubset<T, ServiceAreaFindUniqueArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceAreaFindUniqueOrThrowArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindFirstArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceAreaFindFirstArgs>(args?: SelectSubset<T, ServiceAreaFindFirstArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindFirstOrThrowArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceAreas
     * const serviceAreas = await prisma.serviceArea.findMany()
     * 
     * // Get first 10 ServiceAreas
     * const serviceAreas = await prisma.serviceArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceAreaWithIdOnly = await prisma.serviceArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceAreaFindManyArgs>(args?: SelectSubset<T, ServiceAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceArea.
     * @param {ServiceAreaCreateArgs} args - Arguments to create a ServiceArea.
     * @example
     * // Create one ServiceArea
     * const ServiceArea = await prisma.serviceArea.create({
     *   data: {
     *     // ... data to create a ServiceArea
     *   }
     * })
     * 
     */
    create<T extends ServiceAreaCreateArgs>(args: SelectSubset<T, ServiceAreaCreateArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceAreas.
     * @param {ServiceAreaCreateManyArgs} args - Arguments to create many ServiceAreas.
     * @example
     * // Create many ServiceAreas
     * const serviceArea = await prisma.serviceArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceAreaCreateManyArgs>(args?: SelectSubset<T, ServiceAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceArea.
     * @param {ServiceAreaDeleteArgs} args - Arguments to delete one ServiceArea.
     * @example
     * // Delete one ServiceArea
     * const ServiceArea = await prisma.serviceArea.delete({
     *   where: {
     *     // ... filter to delete one ServiceArea
     *   }
     * })
     * 
     */
    delete<T extends ServiceAreaDeleteArgs>(args: SelectSubset<T, ServiceAreaDeleteArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceArea.
     * @param {ServiceAreaUpdateArgs} args - Arguments to update one ServiceArea.
     * @example
     * // Update one ServiceArea
     * const serviceArea = await prisma.serviceArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceAreaUpdateArgs>(args: SelectSubset<T, ServiceAreaUpdateArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceAreas.
     * @param {ServiceAreaDeleteManyArgs} args - Arguments to filter ServiceAreas to delete.
     * @example
     * // Delete a few ServiceAreas
     * const { count } = await prisma.serviceArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceAreaDeleteManyArgs>(args?: SelectSubset<T, ServiceAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceAreas
     * const serviceArea = await prisma.serviceArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceAreaUpdateManyArgs>(args: SelectSubset<T, ServiceAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceArea.
     * @param {ServiceAreaUpsertArgs} args - Arguments to update or create a ServiceArea.
     * @example
     * // Update or create a ServiceArea
     * const serviceArea = await prisma.serviceArea.upsert({
     *   create: {
     *     // ... data to create a ServiceArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceArea we want to update
     *   }
     * })
     */
    upsert<T extends ServiceAreaUpsertArgs>(args: SelectSubset<T, ServiceAreaUpsertArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceAreas that matches the filter.
     * @param {ServiceAreaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const serviceArea = await prisma.serviceArea.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServiceAreaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ServiceArea.
     * @param {ServiceAreaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const serviceArea = await prisma.serviceArea.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceAreaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ServiceAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaCountArgs} args - Arguments to filter ServiceAreas to count.
     * @example
     * // Count the number of ServiceAreas
     * const count = await prisma.serviceArea.count({
     *   where: {
     *     // ... the filter for the ServiceAreas we want to count
     *   }
     * })
    **/
    count<T extends ServiceAreaCountArgs>(
      args?: Subset<T, ServiceAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAreaAggregateArgs>(args: Subset<T, ServiceAreaAggregateArgs>): Prisma.PrismaPromise<GetServiceAreaAggregateType<T>>

    /**
     * Group by ServiceArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaGroupByArgs} args - Group by arguments.
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
      T extends ServiceAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceAreaGroupByArgs['orderBy'] }
        : { orderBy?: ServiceAreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceArea model
   */
  readonly fields: ServiceAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivers<T extends ServiceArea$driversArgs<ExtArgs> = {}>(args?: Subset<T, ServiceArea$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceArea model
   */
  interface ServiceAreaFieldRefs {
    readonly id: FieldRef<"ServiceArea", 'String'>
    readonly name: FieldRef<"ServiceArea", 'String'>
    readonly type: FieldRef<"ServiceArea", 'String'>
    readonly coordinates: FieldRef<"ServiceArea", 'Json'>
    readonly createdAt: FieldRef<"ServiceArea", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceArea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceArea findUnique
   */
  export type ServiceAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea findUniqueOrThrow
   */
  export type ServiceAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea findFirst
   */
  export type ServiceAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea findFirstOrThrow
   */
  export type ServiceAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea findMany
   */
  export type ServiceAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAreas to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea create
   */
  export type ServiceAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceArea.
     */
    data: XOR<ServiceAreaCreateInput, ServiceAreaUncheckedCreateInput>
  }

  /**
   * ServiceArea createMany
   */
  export type ServiceAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceAreas.
     */
    data: ServiceAreaCreateManyInput | ServiceAreaCreateManyInput[]
  }

  /**
   * ServiceArea update
   */
  export type ServiceAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceArea.
     */
    data: XOR<ServiceAreaUpdateInput, ServiceAreaUncheckedUpdateInput>
    /**
     * Choose, which ServiceArea to update.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea updateMany
   */
  export type ServiceAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceAreas.
     */
    data: XOR<ServiceAreaUpdateManyMutationInput, ServiceAreaUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAreas to update
     */
    where?: ServiceAreaWhereInput
    /**
     * Limit how many ServiceAreas to update.
     */
    limit?: number
  }

  /**
   * ServiceArea upsert
   */
  export type ServiceAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceArea to update in case it exists.
     */
    where: ServiceAreaWhereUniqueInput
    /**
     * In case the ServiceArea found by the `where` argument doesn't exist, create a new ServiceArea with this data.
     */
    create: XOR<ServiceAreaCreateInput, ServiceAreaUncheckedCreateInput>
    /**
     * In case the ServiceArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceAreaUpdateInput, ServiceAreaUncheckedUpdateInput>
  }

  /**
   * ServiceArea delete
   */
  export type ServiceAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter which ServiceArea to delete.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea deleteMany
   */
  export type ServiceAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAreas to delete
     */
    where?: ServiceAreaWhereInput
    /**
     * Limit how many ServiceAreas to delete.
     */
    limit?: number
  }

  /**
   * ServiceArea findRaw
   */
  export type ServiceAreaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ServiceArea aggregateRaw
   */
  export type ServiceAreaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ServiceArea.drivers
   */
  export type ServiceArea$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * ServiceArea without action
   */
  export type ServiceAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    model: string | null
    year: number | null
    color: string | null
    licensePlate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    model: string | null
    year: number | null
    color: string | null
    licensePlate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    driverId: number
    model: number
    year: number
    color: number
    licensePlate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    driverId?: true
    model?: true
    year?: true
    color?: true
    licensePlate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    driverId?: true
    model?: true
    year?: true
    color?: true
    licensePlate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    driverId?: true
    model?: true
    year?: true
    color?: true
    licensePlate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    driverId: string
    model: string
    year: number
    color: string
    licensePlate: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    licensePlate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type VehicleSelectScalar = {
    id?: boolean
    driverId?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    licensePlate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "model" | "year" | "color" | "licensePlate" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      model: string
      year: number
      color: string
      licensePlate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * @param {VehicleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VehicleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vehicle.
     * @param {VehicleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VehicleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly driverId: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly licensePlate: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle findRaw
   */
  export type VehicleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vehicle aggregateRaw
   */
  export type VehicleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    type: $Enums.StepType | null
    documentId: string | null
    name: string | null
    number: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    type: $Enums.StepType | null
    documentId: string | null
    name: string | null
    number: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    driverId: number
    type: number
    documentId: number
    name: number
    number: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    driverId?: true
    type?: true
    documentId?: true
    name?: true
    number?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    driverId?: true
    type?: true
    documentId?: true
    name?: true
    number?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    driverId?: true
    type?: true
    documentId?: true
    name?: true
    number?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    driverId: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    type?: boolean
    documentId?: boolean
    name?: boolean
    number?: boolean
    imageUrl?: boolean | DocumentImageDefaultArgs<ExtArgs>
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    id?: boolean
    driverId?: boolean
    type?: boolean
    documentId?: boolean
    name?: boolean
    number?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "type" | "documentId" | "name" | "number" | "imageUrl" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      type: $Enums.StepType
      documentId: string
      name: string
      number: string
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {
      imageUrl: Prisma.$DocumentImagePayload
    }
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * @param {DocumentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const document = await prisma.document.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DocumentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Document.
     * @param {DocumentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const document = await prisma.document.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DocumentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly driverId: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'StepType'>
    readonly documentId: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly number: FieldRef<"Document", 'String'>
    readonly isVerified: FieldRef<"Document", 'Boolean'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document findRaw
   */
  export type DocumentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Document aggregateRaw
   */
  export type DocumentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Earnings
   */

  export type AggregateEarnings = {
    _count: EarningsCountAggregateOutputType | null
    _avg: EarningsAvgAggregateOutputType | null
    _sum: EarningsSumAggregateOutputType | null
    _min: EarningsMinAggregateOutputType | null
    _max: EarningsMaxAggregateOutputType | null
  }

  export type EarningsAvgAggregateOutputType = {
    totalEarnings: number | null
    currentBalance: number | null
  }

  export type EarningsSumAggregateOutputType = {
    totalEarnings: number | null
    currentBalance: number | null
  }

  export type EarningsMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    totalEarnings: number | null
    currentBalance: number | null
  }

  export type EarningsMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    totalEarnings: number | null
    currentBalance: number | null
  }

  export type EarningsCountAggregateOutputType = {
    id: number
    driverId: number
    totalEarnings: number
    currentBalance: number
    _all: number
  }


  export type EarningsAvgAggregateInputType = {
    totalEarnings?: true
    currentBalance?: true
  }

  export type EarningsSumAggregateInputType = {
    totalEarnings?: true
    currentBalance?: true
  }

  export type EarningsMinAggregateInputType = {
    id?: true
    driverId?: true
    totalEarnings?: true
    currentBalance?: true
  }

  export type EarningsMaxAggregateInputType = {
    id?: true
    driverId?: true
    totalEarnings?: true
    currentBalance?: true
  }

  export type EarningsCountAggregateInputType = {
    id?: true
    driverId?: true
    totalEarnings?: true
    currentBalance?: true
    _all?: true
  }

  export type EarningsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnings to aggregate.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Earnings
    **/
    _count?: true | EarningsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EarningsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EarningsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EarningsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EarningsMaxAggregateInputType
  }

  export type GetEarningsAggregateType<T extends EarningsAggregateArgs> = {
        [P in keyof T & keyof AggregateEarnings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEarnings[P]>
      : GetScalarType<T[P], AggregateEarnings[P]>
  }




  export type EarningsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarningsWhereInput
    orderBy?: EarningsOrderByWithAggregationInput | EarningsOrderByWithAggregationInput[]
    by: EarningsScalarFieldEnum[] | EarningsScalarFieldEnum
    having?: EarningsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EarningsCountAggregateInputType | true
    _avg?: EarningsAvgAggregateInputType
    _sum?: EarningsSumAggregateInputType
    _min?: EarningsMinAggregateInputType
    _max?: EarningsMaxAggregateInputType
  }

  export type EarningsGroupByOutputType = {
    id: string
    driverId: string
    totalEarnings: number
    currentBalance: number
    _count: EarningsCountAggregateOutputType | null
    _avg: EarningsAvgAggregateOutputType | null
    _sum: EarningsSumAggregateOutputType | null
    _min: EarningsMinAggregateOutputType | null
    _max: EarningsMaxAggregateOutputType | null
  }

  type GetEarningsGroupByPayload<T extends EarningsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EarningsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EarningsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EarningsGroupByOutputType[P]>
            : GetScalarType<T[P], EarningsGroupByOutputType[P]>
        }
      >
    >


  export type EarningsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    totalEarnings?: boolean
    currentBalance?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earnings"]>



  export type EarningsSelectScalar = {
    id?: boolean
    driverId?: boolean
    totalEarnings?: boolean
    currentBalance?: boolean
  }

  export type EarningsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "totalEarnings" | "currentBalance", ExtArgs["result"]["earnings"]>
  export type EarningsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $EarningsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Earnings"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      totalEarnings: number
      currentBalance: number
    }, ExtArgs["result"]["earnings"]>
    composites: {}
  }

  type EarningsGetPayload<S extends boolean | null | undefined | EarningsDefaultArgs> = $Result.GetResult<Prisma.$EarningsPayload, S>

  type EarningsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EarningsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EarningsCountAggregateInputType | true
    }

  export interface EarningsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Earnings'], meta: { name: 'Earnings' } }
    /**
     * Find zero or one Earnings that matches the filter.
     * @param {EarningsFindUniqueArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EarningsFindUniqueArgs>(args: SelectSubset<T, EarningsFindUniqueArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Earnings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EarningsFindUniqueOrThrowArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EarningsFindUniqueOrThrowArgs>(args: SelectSubset<T, EarningsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Earnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsFindFirstArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EarningsFindFirstArgs>(args?: SelectSubset<T, EarningsFindFirstArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Earnings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsFindFirstOrThrowArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EarningsFindFirstOrThrowArgs>(args?: SelectSubset<T, EarningsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Earnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Earnings
     * const earnings = await prisma.earnings.findMany()
     * 
     * // Get first 10 Earnings
     * const earnings = await prisma.earnings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const earningsWithIdOnly = await prisma.earnings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EarningsFindManyArgs>(args?: SelectSubset<T, EarningsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Earnings.
     * @param {EarningsCreateArgs} args - Arguments to create a Earnings.
     * @example
     * // Create one Earnings
     * const Earnings = await prisma.earnings.create({
     *   data: {
     *     // ... data to create a Earnings
     *   }
     * })
     * 
     */
    create<T extends EarningsCreateArgs>(args: SelectSubset<T, EarningsCreateArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Earnings.
     * @param {EarningsCreateManyArgs} args - Arguments to create many Earnings.
     * @example
     * // Create many Earnings
     * const earnings = await prisma.earnings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EarningsCreateManyArgs>(args?: SelectSubset<T, EarningsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Earnings.
     * @param {EarningsDeleteArgs} args - Arguments to delete one Earnings.
     * @example
     * // Delete one Earnings
     * const Earnings = await prisma.earnings.delete({
     *   where: {
     *     // ... filter to delete one Earnings
     *   }
     * })
     * 
     */
    delete<T extends EarningsDeleteArgs>(args: SelectSubset<T, EarningsDeleteArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Earnings.
     * @param {EarningsUpdateArgs} args - Arguments to update one Earnings.
     * @example
     * // Update one Earnings
     * const earnings = await prisma.earnings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EarningsUpdateArgs>(args: SelectSubset<T, EarningsUpdateArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Earnings.
     * @param {EarningsDeleteManyArgs} args - Arguments to filter Earnings to delete.
     * @example
     * // Delete a few Earnings
     * const { count } = await prisma.earnings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EarningsDeleteManyArgs>(args?: SelectSubset<T, EarningsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Earnings
     * const earnings = await prisma.earnings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EarningsUpdateManyArgs>(args: SelectSubset<T, EarningsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Earnings.
     * @param {EarningsUpsertArgs} args - Arguments to update or create a Earnings.
     * @example
     * // Update or create a Earnings
     * const earnings = await prisma.earnings.upsert({
     *   create: {
     *     // ... data to create a Earnings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Earnings we want to update
     *   }
     * })
     */
    upsert<T extends EarningsUpsertArgs>(args: SelectSubset<T, EarningsUpsertArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Earnings that matches the filter.
     * @param {EarningsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const earnings = await prisma.earnings.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EarningsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Earnings.
     * @param {EarningsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const earnings = await prisma.earnings.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EarningsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsCountArgs} args - Arguments to filter Earnings to count.
     * @example
     * // Count the number of Earnings
     * const count = await prisma.earnings.count({
     *   where: {
     *     // ... the filter for the Earnings we want to count
     *   }
     * })
    **/
    count<T extends EarningsCountArgs>(
      args?: Subset<T, EarningsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EarningsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EarningsAggregateArgs>(args: Subset<T, EarningsAggregateArgs>): Prisma.PrismaPromise<GetEarningsAggregateType<T>>

    /**
     * Group by Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsGroupByArgs} args - Group by arguments.
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
      T extends EarningsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EarningsGroupByArgs['orderBy'] }
        : { orderBy?: EarningsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EarningsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEarningsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Earnings model
   */
  readonly fields: EarningsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Earnings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EarningsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Earnings model
   */
  interface EarningsFieldRefs {
    readonly id: FieldRef<"Earnings", 'String'>
    readonly driverId: FieldRef<"Earnings", 'String'>
    readonly totalEarnings: FieldRef<"Earnings", 'Float'>
    readonly currentBalance: FieldRef<"Earnings", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Earnings findUnique
   */
  export type EarningsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings findUniqueOrThrow
   */
  export type EarningsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings findFirst
   */
  export type EarningsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnings.
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnings.
     */
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Earnings findFirstOrThrow
   */
  export type EarningsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnings.
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnings.
     */
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Earnings findMany
   */
  export type EarningsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Earnings.
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Earnings create
   */
  export type EarningsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * The data needed to create a Earnings.
     */
    data: XOR<EarningsCreateInput, EarningsUncheckedCreateInput>
  }

  /**
   * Earnings createMany
   */
  export type EarningsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Earnings.
     */
    data: EarningsCreateManyInput | EarningsCreateManyInput[]
  }

  /**
   * Earnings update
   */
  export type EarningsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * The data needed to update a Earnings.
     */
    data: XOR<EarningsUpdateInput, EarningsUncheckedUpdateInput>
    /**
     * Choose, which Earnings to update.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings updateMany
   */
  export type EarningsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Earnings.
     */
    data: XOR<EarningsUpdateManyMutationInput, EarningsUncheckedUpdateManyInput>
    /**
     * Filter which Earnings to update
     */
    where?: EarningsWhereInput
    /**
     * Limit how many Earnings to update.
     */
    limit?: number
  }

  /**
   * Earnings upsert
   */
  export type EarningsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * The filter to search for the Earnings to update in case it exists.
     */
    where: EarningsWhereUniqueInput
    /**
     * In case the Earnings found by the `where` argument doesn't exist, create a new Earnings with this data.
     */
    create: XOR<EarningsCreateInput, EarningsUncheckedCreateInput>
    /**
     * In case the Earnings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EarningsUpdateInput, EarningsUncheckedUpdateInput>
  }

  /**
   * Earnings delete
   */
  export type EarningsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter which Earnings to delete.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings deleteMany
   */
  export type EarningsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnings to delete
     */
    where?: EarningsWhereInput
    /**
     * Limit how many Earnings to delete.
     */
    limit?: number
  }

  /**
   * Earnings findRaw
   */
  export type EarningsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Earnings aggregateRaw
   */
  export type EarningsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Earnings without action
   */
  export type EarningsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
  }


  /**
   * Model Ride
   */

  export type AggregateRide = {
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  export type RideAvgAggregateOutputType = {
    distance: number | null
    duration: number | null
  }

  export type RideSumAggregateOutputType = {
    distance: number | null
    duration: number | null
  }

  export type RideMinAggregateOutputType = {
    id: string | null
    riderId: string | null
    driverId: string | null
    distance: number | null
    duration: number | null
    promoCodeId: string | null
    cancelReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideMaxAggregateOutputType = {
    id: string | null
    riderId: string | null
    driverId: string | null
    distance: number | null
    duration: number | null
    promoCodeId: string | null
    cancelReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideCountAggregateOutputType = {
    id: number
    riderId: number
    driverId: number
    distance: number
    duration: number
    promoCodeId: number
    cancelReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RideAvgAggregateInputType = {
    distance?: true
    duration?: true
  }

  export type RideSumAggregateInputType = {
    distance?: true
    duration?: true
  }

  export type RideMinAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    distance?: true
    duration?: true
    promoCodeId?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideMaxAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    distance?: true
    duration?: true
    promoCodeId?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideCountAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    distance?: true
    duration?: true
    promoCodeId?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ride to aggregate.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rides
    **/
    _count?: true | RideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideMaxAggregateInputType
  }

  export type GetRideAggregateType<T extends RideAggregateArgs> = {
        [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide[P]>
      : GetScalarType<T[P], AggregateRide[P]>
  }




  export type RideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
    orderBy?: RideOrderByWithAggregationInput | RideOrderByWithAggregationInput[]
    by: RideScalarFieldEnum[] | RideScalarFieldEnum
    having?: RideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCountAggregateInputType | true
    _avg?: RideAvgAggregateInputType
    _sum?: RideSumAggregateInputType
    _min?: RideMinAggregateInputType
    _max?: RideMaxAggregateInputType
  }

  export type RideGroupByOutputType = {
    id: string
    riderId: string
    driverId: string | null
    distance: number
    duration: number
    promoCodeId: string | null
    cancelReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  type GetRideGroupByPayload<T extends RideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideGroupByOutputType[P]>
            : GetScalarType<T[P], RideGroupByOutputType[P]>
        }
      >
    >


  export type RideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    driverId?: boolean
    source?: boolean | LocationDefaultArgs<ExtArgs>
    destination?: boolean | LocationDefaultArgs<ExtArgs>
    waypoints?: boolean | LocationDefaultArgs<ExtArgs>
    distance?: boolean
    duration?: boolean
    promoCodeId?: boolean
    cancelReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>



  export type RideSelectScalar = {
    id?: boolean
    riderId?: boolean
    driverId?: boolean
    distance?: boolean
    duration?: boolean
    promoCodeId?: boolean
    cancelReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "riderId" | "driverId" | "source" | "destination" | "waypoints" | "distance" | "duration" | "promoCodeId" | "cancelReason" | "createdAt" | "updatedAt", ExtArgs["result"]["ride"]>
  export type RideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }

  export type $RidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ride"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      riderId: string
      driverId: string | null
      distance: number
      duration: number
      promoCodeId: string | null
      cancelReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ride"]>
    composites: {
      source: Prisma.$LocationPayload
      destination: Prisma.$LocationPayload
      waypoints: Prisma.$LocationPayload[]
    }
  }

  type RideGetPayload<S extends boolean | null | undefined | RideDefaultArgs> = $Result.GetResult<Prisma.$RidePayload, S>

  type RideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCountAggregateInputType | true
    }

  export interface RideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ride'], meta: { name: 'Ride' } }
    /**
     * Find zero or one Ride that matches the filter.
     * @param {RideFindUniqueArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideFindUniqueArgs>(args: SelectSubset<T, RideFindUniqueArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideFindUniqueOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideFindUniqueOrThrowArgs>(args: SelectSubset<T, RideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideFindFirstArgs>(args?: SelectSubset<T, RideFindFirstArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideFindFirstOrThrowArgs>(args?: SelectSubset<T, RideFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.ride.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.ride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideWithIdOnly = await prisma.ride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RideFindManyArgs>(args?: SelectSubset<T, RideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ride.
     * @param {RideCreateArgs} args - Arguments to create a Ride.
     * @example
     * // Create one Ride
     * const Ride = await prisma.ride.create({
     *   data: {
     *     // ... data to create a Ride
     *   }
     * })
     * 
     */
    create<T extends RideCreateArgs>(args: SelectSubset<T, RideCreateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rides.
     * @param {RideCreateManyArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideCreateManyArgs>(args?: SelectSubset<T, RideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ride.
     * @param {RideDeleteArgs} args - Arguments to delete one Ride.
     * @example
     * // Delete one Ride
     * const Ride = await prisma.ride.delete({
     *   where: {
     *     // ... filter to delete one Ride
     *   }
     * })
     * 
     */
    delete<T extends RideDeleteArgs>(args: SelectSubset<T, RideDeleteArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride.
     * @param {RideUpdateArgs} args - Arguments to update one Ride.
     * @example
     * // Update one Ride
     * const ride = await prisma.ride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideUpdateArgs>(args: SelectSubset<T, RideUpdateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {RideDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.ride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideDeleteManyArgs>(args?: SelectSubset<T, RideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideUpdateManyArgs>(args: SelectSubset<T, RideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ride.
     * @param {RideUpsertArgs} args - Arguments to update or create a Ride.
     * @example
     * // Update or create a Ride
     * const ride = await prisma.ride.upsert({
     *   create: {
     *     // ... data to create a Ride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ride we want to update
     *   }
     * })
     */
    upsert<T extends RideUpsertArgs>(args: SelectSubset<T, RideUpsertArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * @param {RideFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ride = await prisma.ride.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RideFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ride.
     * @param {RideAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ride = await prisma.ride.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RideAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.ride.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends RideCountArgs>(
      args?: Subset<T, RideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RideAggregateArgs>(args: Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>

    /**
     * Group by Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideGroupByArgs} args - Group by arguments.
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
      T extends RideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideGroupByArgs['orderBy'] }
        : { orderBy?: RideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ride model
   */
  readonly fields: RideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends Ride$driverArgs<ExtArgs> = {}>(args?: Subset<T, Ride$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ride model
   */
  interface RideFieldRefs {
    readonly id: FieldRef<"Ride", 'String'>
    readonly riderId: FieldRef<"Ride", 'String'>
    readonly driverId: FieldRef<"Ride", 'String'>
    readonly distance: FieldRef<"Ride", 'Float'>
    readonly duration: FieldRef<"Ride", 'Int'>
    readonly promoCodeId: FieldRef<"Ride", 'String'>
    readonly cancelReason: FieldRef<"Ride", 'String'>
    readonly createdAt: FieldRef<"Ride", 'DateTime'>
    readonly updatedAt: FieldRef<"Ride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ride findUnique
   */
  export type RideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findUniqueOrThrow
   */
  export type RideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findFirst
   */
  export type RideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findFirstOrThrow
   */
  export type RideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findMany
   */
  export type RideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Rides to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride create
   */
  export type RideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to create a Ride.
     */
    data: XOR<RideCreateInput, RideUncheckedCreateInput>
  }

  /**
   * Ride createMany
   */
  export type RideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
  }

  /**
   * Ride update
   */
  export type RideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to update a Ride.
     */
    data: XOR<RideUpdateInput, RideUncheckedUpdateInput>
    /**
     * Choose, which Ride to update.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride updateMany
   */
  export type RideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
  }

  /**
   * Ride upsert
   */
  export type RideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The filter to search for the Ride to update in case it exists.
     */
    where: RideWhereUniqueInput
    /**
     * In case the Ride found by the `where` argument doesn't exist, create a new Ride with this data.
     */
    create: XOR<RideCreateInput, RideUncheckedCreateInput>
    /**
     * In case the Ride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideUpdateInput, RideUncheckedUpdateInput>
  }

  /**
   * Ride delete
   */
  export type RideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter which Ride to delete.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride deleteMany
   */
  export type RideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rides to delete
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to delete.
     */
    limit?: number
  }

  /**
   * Ride findRaw
   */
  export type RideFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ride aggregateRaw
   */
  export type RideAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ride.driver
   */
  export type Ride$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Ride without action
   */
  export type RideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    phonenumber: string | null
    phoneCountryCode: string | null
    email: string | null
    role: $Enums.Role | null
    password: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    phonenumber: string | null
    phoneCountryCode: string | null
    email: string | null
    role: $Enums.Role | null
    password: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    phonenumber: number
    phoneCountryCode: number
    email: number
    role: number
    password: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    phonenumber?: true
    phoneCountryCode?: true
    email?: true
    role?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    phonenumber?: true
    phoneCountryCode?: true
    email?: true
    role?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    phonenumber?: true
    phoneCountryCode?: true
    email?: true
    role?: true
    password?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    phonenumber: string
    phoneCountryCode: string
    email: string
    role: $Enums.Role
    password: string
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phonenumber?: boolean
    phoneCountryCode?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    phonenumber?: boolean
    phoneCountryCode?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phonenumber" | "phoneCountryCode" | "email" | "role" | "password" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phonenumber: string
      phoneCountryCode: string
      email: string
      role: $Enums.Role
      password: string
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly phonenumber: FieldRef<"Admin", 'String'>
    readonly phoneCountryCode: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly refreshToken: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model RegistrationTemplate
   */

  export type AggregateRegistrationTemplate = {
    _count: RegistrationTemplateCountAggregateOutputType | null
    _min: RegistrationTemplateMinAggregateOutputType | null
    _max: RegistrationTemplateMaxAggregateOutputType | null
  }

  export type RegistrationTemplateMinAggregateOutputType = {
    id: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationTemplateMaxAggregateOutputType = {
    id: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationTemplateCountAggregateOutputType = {
    id: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistrationTemplateMinAggregateInputType = {
    id?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationTemplateMaxAggregateInputType = {
    id?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationTemplateCountAggregateInputType = {
    id?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistrationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationTemplate to aggregate.
     */
    where?: RegistrationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationTemplates to fetch.
     */
    orderBy?: RegistrationTemplateOrderByWithRelationInput | RegistrationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationTemplates
    **/
    _count?: true | RegistrationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationTemplateMaxAggregateInputType
  }

  export type GetRegistrationTemplateAggregateType<T extends RegistrationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationTemplate[P]>
      : GetScalarType<T[P], AggregateRegistrationTemplate[P]>
  }




  export type RegistrationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationTemplateWhereInput
    orderBy?: RegistrationTemplateOrderByWithAggregationInput | RegistrationTemplateOrderByWithAggregationInput[]
    by: RegistrationTemplateScalarFieldEnum[] | RegistrationTemplateScalarFieldEnum
    having?: RegistrationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationTemplateCountAggregateInputType | true
    _min?: RegistrationTemplateMinAggregateInputType
    _max?: RegistrationTemplateMaxAggregateInputType
  }

  export type RegistrationTemplateGroupByOutputType = {
    id: string
    country: string
    createdAt: Date
    updatedAt: Date
    _count: RegistrationTemplateCountAggregateOutputType | null
    _min: RegistrationTemplateMinAggregateOutputType | null
    _max: RegistrationTemplateMaxAggregateOutputType | null
  }

  type GetRegistrationTemplateGroupByPayload<T extends RegistrationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    steps?: boolean | RegistrationTemplate$stepsArgs<ExtArgs>
    _count?: boolean | RegistrationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationTemplate"]>



  export type RegistrationTemplateSelectScalar = {
    id?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistrationTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["registrationTemplate"]>
  export type RegistrationTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | RegistrationTemplate$stepsArgs<ExtArgs>
    _count?: boolean | RegistrationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegistrationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationTemplate"
    objects: {
      steps: Prisma.$RegistrationStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registrationTemplate"]>
    composites: {}
  }

  type RegistrationTemplateGetPayload<S extends boolean | null | undefined | RegistrationTemplateDefaultArgs> = $Result.GetResult<Prisma.$RegistrationTemplatePayload, S>

  type RegistrationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationTemplateCountAggregateInputType | true
    }

  export interface RegistrationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationTemplate'], meta: { name: 'RegistrationTemplate' } }
    /**
     * Find zero or one RegistrationTemplate that matches the filter.
     * @param {RegistrationTemplateFindUniqueArgs} args - Arguments to find a RegistrationTemplate
     * @example
     * // Get one RegistrationTemplate
     * const registrationTemplate = await prisma.registrationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationTemplateFindUniqueArgs>(args: SelectSubset<T, RegistrationTemplateFindUniqueArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrationTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationTemplateFindUniqueOrThrowArgs} args - Arguments to find a RegistrationTemplate
     * @example
     * // Get one RegistrationTemplate
     * const registrationTemplate = await prisma.registrationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateFindFirstArgs} args - Arguments to find a RegistrationTemplate
     * @example
     * // Get one RegistrationTemplate
     * const registrationTemplate = await prisma.registrationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationTemplateFindFirstArgs>(args?: SelectSubset<T, RegistrationTemplateFindFirstArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateFindFirstOrThrowArgs} args - Arguments to find a RegistrationTemplate
     * @example
     * // Get one RegistrationTemplate
     * const registrationTemplate = await prisma.registrationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationTemplates
     * const registrationTemplates = await prisma.registrationTemplate.findMany()
     * 
     * // Get first 10 RegistrationTemplates
     * const registrationTemplates = await prisma.registrationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationTemplateWithIdOnly = await prisma.registrationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationTemplateFindManyArgs>(args?: SelectSubset<T, RegistrationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrationTemplate.
     * @param {RegistrationTemplateCreateArgs} args - Arguments to create a RegistrationTemplate.
     * @example
     * // Create one RegistrationTemplate
     * const RegistrationTemplate = await prisma.registrationTemplate.create({
     *   data: {
     *     // ... data to create a RegistrationTemplate
     *   }
     * })
     * 
     */
    create<T extends RegistrationTemplateCreateArgs>(args: SelectSubset<T, RegistrationTemplateCreateArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrationTemplates.
     * @param {RegistrationTemplateCreateManyArgs} args - Arguments to create many RegistrationTemplates.
     * @example
     * // Create many RegistrationTemplates
     * const registrationTemplate = await prisma.registrationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationTemplateCreateManyArgs>(args?: SelectSubset<T, RegistrationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistrationTemplate.
     * @param {RegistrationTemplateDeleteArgs} args - Arguments to delete one RegistrationTemplate.
     * @example
     * // Delete one RegistrationTemplate
     * const RegistrationTemplate = await prisma.registrationTemplate.delete({
     *   where: {
     *     // ... filter to delete one RegistrationTemplate
     *   }
     * })
     * 
     */
    delete<T extends RegistrationTemplateDeleteArgs>(args: SelectSubset<T, RegistrationTemplateDeleteArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrationTemplate.
     * @param {RegistrationTemplateUpdateArgs} args - Arguments to update one RegistrationTemplate.
     * @example
     * // Update one RegistrationTemplate
     * const registrationTemplate = await prisma.registrationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationTemplateUpdateArgs>(args: SelectSubset<T, RegistrationTemplateUpdateArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrationTemplates.
     * @param {RegistrationTemplateDeleteManyArgs} args - Arguments to filter RegistrationTemplates to delete.
     * @example
     * // Delete a few RegistrationTemplates
     * const { count } = await prisma.registrationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationTemplateDeleteManyArgs>(args?: SelectSubset<T, RegistrationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationTemplates
     * const registrationTemplate = await prisma.registrationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationTemplateUpdateManyArgs>(args: SelectSubset<T, RegistrationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistrationTemplate.
     * @param {RegistrationTemplateUpsertArgs} args - Arguments to update or create a RegistrationTemplate.
     * @example
     * // Update or create a RegistrationTemplate
     * const registrationTemplate = await prisma.registrationTemplate.upsert({
     *   create: {
     *     // ... data to create a RegistrationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationTemplateUpsertArgs>(args: SelectSubset<T, RegistrationTemplateUpsertArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationTemplates that matches the filter.
     * @param {RegistrationTemplateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const registrationTemplate = await prisma.registrationTemplate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RegistrationTemplateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RegistrationTemplate.
     * @param {RegistrationTemplateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const registrationTemplate = await prisma.registrationTemplate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RegistrationTemplateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RegistrationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateCountArgs} args - Arguments to filter RegistrationTemplates to count.
     * @example
     * // Count the number of RegistrationTemplates
     * const count = await prisma.registrationTemplate.count({
     *   where: {
     *     // ... the filter for the RegistrationTemplates we want to count
     *   }
     * })
    **/
    count<T extends RegistrationTemplateCountArgs>(
      args?: Subset<T, RegistrationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationTemplateAggregateArgs>(args: Subset<T, RegistrationTemplateAggregateArgs>): Prisma.PrismaPromise<GetRegistrationTemplateAggregateType<T>>

    /**
     * Group by RegistrationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationTemplateGroupByArgs} args - Group by arguments.
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
      T extends RegistrationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationTemplate model
   */
  readonly fields: RegistrationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steps<T extends RegistrationTemplate$stepsArgs<ExtArgs> = {}>(args?: Subset<T, RegistrationTemplate$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RegistrationTemplate model
   */
  interface RegistrationTemplateFieldRefs {
    readonly id: FieldRef<"RegistrationTemplate", 'String'>
    readonly country: FieldRef<"RegistrationTemplate", 'String'>
    readonly createdAt: FieldRef<"RegistrationTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"RegistrationTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationTemplate findUnique
   */
  export type RegistrationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationTemplate to fetch.
     */
    where: RegistrationTemplateWhereUniqueInput
  }

  /**
   * RegistrationTemplate findUniqueOrThrow
   */
  export type RegistrationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationTemplate to fetch.
     */
    where: RegistrationTemplateWhereUniqueInput
  }

  /**
   * RegistrationTemplate findFirst
   */
  export type RegistrationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationTemplate to fetch.
     */
    where?: RegistrationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationTemplates to fetch.
     */
    orderBy?: RegistrationTemplateOrderByWithRelationInput | RegistrationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationTemplates.
     */
    cursor?: RegistrationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationTemplates.
     */
    distinct?: RegistrationTemplateScalarFieldEnum | RegistrationTemplateScalarFieldEnum[]
  }

  /**
   * RegistrationTemplate findFirstOrThrow
   */
  export type RegistrationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationTemplate to fetch.
     */
    where?: RegistrationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationTemplates to fetch.
     */
    orderBy?: RegistrationTemplateOrderByWithRelationInput | RegistrationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationTemplates.
     */
    cursor?: RegistrationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationTemplates.
     */
    distinct?: RegistrationTemplateScalarFieldEnum | RegistrationTemplateScalarFieldEnum[]
  }

  /**
   * RegistrationTemplate findMany
   */
  export type RegistrationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationTemplates to fetch.
     */
    where?: RegistrationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationTemplates to fetch.
     */
    orderBy?: RegistrationTemplateOrderByWithRelationInput | RegistrationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationTemplates.
     */
    cursor?: RegistrationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationTemplates.
     */
    skip?: number
    distinct?: RegistrationTemplateScalarFieldEnum | RegistrationTemplateScalarFieldEnum[]
  }

  /**
   * RegistrationTemplate create
   */
  export type RegistrationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationTemplate.
     */
    data: XOR<RegistrationTemplateCreateInput, RegistrationTemplateUncheckedCreateInput>
  }

  /**
   * RegistrationTemplate createMany
   */
  export type RegistrationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationTemplates.
     */
    data: RegistrationTemplateCreateManyInput | RegistrationTemplateCreateManyInput[]
  }

  /**
   * RegistrationTemplate update
   */
  export type RegistrationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationTemplate.
     */
    data: XOR<RegistrationTemplateUpdateInput, RegistrationTemplateUncheckedUpdateInput>
    /**
     * Choose, which RegistrationTemplate to update.
     */
    where: RegistrationTemplateWhereUniqueInput
  }

  /**
   * RegistrationTemplate updateMany
   */
  export type RegistrationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationTemplates.
     */
    data: XOR<RegistrationTemplateUpdateManyMutationInput, RegistrationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationTemplates to update
     */
    where?: RegistrationTemplateWhereInput
    /**
     * Limit how many RegistrationTemplates to update.
     */
    limit?: number
  }

  /**
   * RegistrationTemplate upsert
   */
  export type RegistrationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationTemplate to update in case it exists.
     */
    where: RegistrationTemplateWhereUniqueInput
    /**
     * In case the RegistrationTemplate found by the `where` argument doesn't exist, create a new RegistrationTemplate with this data.
     */
    create: XOR<RegistrationTemplateCreateInput, RegistrationTemplateUncheckedCreateInput>
    /**
     * In case the RegistrationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationTemplateUpdateInput, RegistrationTemplateUncheckedUpdateInput>
  }

  /**
   * RegistrationTemplate delete
   */
  export type RegistrationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
    /**
     * Filter which RegistrationTemplate to delete.
     */
    where: RegistrationTemplateWhereUniqueInput
  }

  /**
   * RegistrationTemplate deleteMany
   */
  export type RegistrationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationTemplates to delete
     */
    where?: RegistrationTemplateWhereInput
    /**
     * Limit how many RegistrationTemplates to delete.
     */
    limit?: number
  }

  /**
   * RegistrationTemplate findRaw
   */
  export type RegistrationTemplateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RegistrationTemplate aggregateRaw
   */
  export type RegistrationTemplateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RegistrationTemplate.steps
   */
  export type RegistrationTemplate$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    where?: RegistrationStepWhereInput
    orderBy?: RegistrationStepOrderByWithRelationInput | RegistrationStepOrderByWithRelationInput[]
    cursor?: RegistrationStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationStepScalarFieldEnum | RegistrationStepScalarFieldEnum[]
  }

  /**
   * RegistrationTemplate without action
   */
  export type RegistrationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationTemplate
     */
    select?: RegistrationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationTemplate
     */
    omit?: RegistrationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationTemplateInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationStep
   */

  export type AggregateRegistrationStep = {
    _count: RegistrationStepCountAggregateOutputType | null
    _min: RegistrationStepMinAggregateOutputType | null
    _max: RegistrationStepMaxAggregateOutputType | null
  }

  export type RegistrationStepMinAggregateOutputType = {
    id: string | null
    status: $Enums.RegistrationStatus | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    templateId: string | null
  }

  export type RegistrationStepMaxAggregateOutputType = {
    id: string | null
    status: $Enums.RegistrationStatus | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    templateId: string | null
  }

  export type RegistrationStepCountAggregateOutputType = {
    id: number
    status: number
    isActive: number
    createdAt: number
    updatedAt: number
    templateId: number
    _all: number
  }


  export type RegistrationStepMinAggregateInputType = {
    id?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
  }

  export type RegistrationStepMaxAggregateInputType = {
    id?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
  }

  export type RegistrationStepCountAggregateInputType = {
    id?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
    _all?: true
  }

  export type RegistrationStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationStep to aggregate.
     */
    where?: RegistrationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationSteps to fetch.
     */
    orderBy?: RegistrationStepOrderByWithRelationInput | RegistrationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationSteps
    **/
    _count?: true | RegistrationStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationStepMaxAggregateInputType
  }

  export type GetRegistrationStepAggregateType<T extends RegistrationStepAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationStep[P]>
      : GetScalarType<T[P], AggregateRegistrationStep[P]>
  }




  export type RegistrationStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationStepWhereInput
    orderBy?: RegistrationStepOrderByWithAggregationInput | RegistrationStepOrderByWithAggregationInput[]
    by: RegistrationStepScalarFieldEnum[] | RegistrationStepScalarFieldEnum
    having?: RegistrationStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationStepCountAggregateInputType | true
    _min?: RegistrationStepMinAggregateInputType
    _max?: RegistrationStepMaxAggregateInputType
  }

  export type RegistrationStepGroupByOutputType = {
    id: string
    status: $Enums.RegistrationStatus
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    templateId: string
    _count: RegistrationStepCountAggregateOutputType | null
    _min: RegistrationStepMinAggregateOutputType | null
    _max: RegistrationStepMaxAggregateOutputType | null
  }

  type GetRegistrationStepGroupByPayload<T extends RegistrationStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationStepGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationStepGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    display?: boolean | RegistrationStepDisplayDefaultArgs<ExtArgs>
    options?: boolean | RegistrationStepOptionsDefaultArgs<ExtArgs>
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
    definition?: boolean | RegistrationStep$definitionArgs<ExtArgs>
    template?: boolean | RegistrationTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationStep"]>



  export type RegistrationStepSelectScalar = {
    id?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
  }

  export type RegistrationStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "display" | "options" | "isActive" | "createdAt" | "updatedAt" | "templateId", ExtArgs["result"]["registrationStep"]>
  export type RegistrationStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    definition?: boolean | RegistrationStep$definitionArgs<ExtArgs>
    template?: boolean | RegistrationTemplateDefaultArgs<ExtArgs>
  }

  export type $RegistrationStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationStep"
    objects: {
      definition: Prisma.$StepDefinitionPayload<ExtArgs> | null
      template: Prisma.$RegistrationTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.RegistrationStatus
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      templateId: string
    }, ExtArgs["result"]["registrationStep"]>
    composites: {
      display: Prisma.$RegistrationStepDisplayPayload
      options: Prisma.$RegistrationStepOptionsPayload
    }
  }

  type RegistrationStepGetPayload<S extends boolean | null | undefined | RegistrationStepDefaultArgs> = $Result.GetResult<Prisma.$RegistrationStepPayload, S>

  type RegistrationStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationStepCountAggregateInputType | true
    }

  export interface RegistrationStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationStep'], meta: { name: 'RegistrationStep' } }
    /**
     * Find zero or one RegistrationStep that matches the filter.
     * @param {RegistrationStepFindUniqueArgs} args - Arguments to find a RegistrationStep
     * @example
     * // Get one RegistrationStep
     * const registrationStep = await prisma.registrationStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationStepFindUniqueArgs>(args: SelectSubset<T, RegistrationStepFindUniqueArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrationStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationStepFindUniqueOrThrowArgs} args - Arguments to find a RegistrationStep
     * @example
     * // Get one RegistrationStep
     * const registrationStep = await prisma.registrationStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationStepFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepFindFirstArgs} args - Arguments to find a RegistrationStep
     * @example
     * // Get one RegistrationStep
     * const registrationStep = await prisma.registrationStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationStepFindFirstArgs>(args?: SelectSubset<T, RegistrationStepFindFirstArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepFindFirstOrThrowArgs} args - Arguments to find a RegistrationStep
     * @example
     * // Get one RegistrationStep
     * const registrationStep = await prisma.registrationStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationStepFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationSteps
     * const registrationSteps = await prisma.registrationStep.findMany()
     * 
     * // Get first 10 RegistrationSteps
     * const registrationSteps = await prisma.registrationStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationStepWithIdOnly = await prisma.registrationStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationStepFindManyArgs>(args?: SelectSubset<T, RegistrationStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrationStep.
     * @param {RegistrationStepCreateArgs} args - Arguments to create a RegistrationStep.
     * @example
     * // Create one RegistrationStep
     * const RegistrationStep = await prisma.registrationStep.create({
     *   data: {
     *     // ... data to create a RegistrationStep
     *   }
     * })
     * 
     */
    create<T extends RegistrationStepCreateArgs>(args: SelectSubset<T, RegistrationStepCreateArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrationSteps.
     * @param {RegistrationStepCreateManyArgs} args - Arguments to create many RegistrationSteps.
     * @example
     * // Create many RegistrationSteps
     * const registrationStep = await prisma.registrationStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationStepCreateManyArgs>(args?: SelectSubset<T, RegistrationStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistrationStep.
     * @param {RegistrationStepDeleteArgs} args - Arguments to delete one RegistrationStep.
     * @example
     * // Delete one RegistrationStep
     * const RegistrationStep = await prisma.registrationStep.delete({
     *   where: {
     *     // ... filter to delete one RegistrationStep
     *   }
     * })
     * 
     */
    delete<T extends RegistrationStepDeleteArgs>(args: SelectSubset<T, RegistrationStepDeleteArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrationStep.
     * @param {RegistrationStepUpdateArgs} args - Arguments to update one RegistrationStep.
     * @example
     * // Update one RegistrationStep
     * const registrationStep = await prisma.registrationStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationStepUpdateArgs>(args: SelectSubset<T, RegistrationStepUpdateArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrationSteps.
     * @param {RegistrationStepDeleteManyArgs} args - Arguments to filter RegistrationSteps to delete.
     * @example
     * // Delete a few RegistrationSteps
     * const { count } = await prisma.registrationStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationStepDeleteManyArgs>(args?: SelectSubset<T, RegistrationStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationSteps
     * const registrationStep = await prisma.registrationStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationStepUpdateManyArgs>(args: SelectSubset<T, RegistrationStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistrationStep.
     * @param {RegistrationStepUpsertArgs} args - Arguments to update or create a RegistrationStep.
     * @example
     * // Update or create a RegistrationStep
     * const registrationStep = await prisma.registrationStep.upsert({
     *   create: {
     *     // ... data to create a RegistrationStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationStep we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationStepUpsertArgs>(args: SelectSubset<T, RegistrationStepUpsertArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationSteps that matches the filter.
     * @param {RegistrationStepFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const registrationStep = await prisma.registrationStep.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RegistrationStepFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RegistrationStep.
     * @param {RegistrationStepAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const registrationStep = await prisma.registrationStep.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RegistrationStepAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RegistrationSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepCountArgs} args - Arguments to filter RegistrationSteps to count.
     * @example
     * // Count the number of RegistrationSteps
     * const count = await prisma.registrationStep.count({
     *   where: {
     *     // ... the filter for the RegistrationSteps we want to count
     *   }
     * })
    **/
    count<T extends RegistrationStepCountArgs>(
      args?: Subset<T, RegistrationStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationStepAggregateArgs>(args: Subset<T, RegistrationStepAggregateArgs>): Prisma.PrismaPromise<GetRegistrationStepAggregateType<T>>

    /**
     * Group by RegistrationStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationStepGroupByArgs} args - Group by arguments.
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
      T extends RegistrationStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationStepGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationStep model
   */
  readonly fields: RegistrationStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    definition<T extends RegistrationStep$definitionArgs<ExtArgs> = {}>(args?: Subset<T, RegistrationStep$definitionArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    template<T extends RegistrationTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistrationTemplateDefaultArgs<ExtArgs>>): Prisma__RegistrationTemplateClient<$Result.GetResult<Prisma.$RegistrationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistrationStep model
   */
  interface RegistrationStepFieldRefs {
    readonly id: FieldRef<"RegistrationStep", 'String'>
    readonly status: FieldRef<"RegistrationStep", 'RegistrationStatus'>
    readonly isActive: FieldRef<"RegistrationStep", 'Boolean'>
    readonly createdAt: FieldRef<"RegistrationStep", 'DateTime'>
    readonly updatedAt: FieldRef<"RegistrationStep", 'DateTime'>
    readonly templateId: FieldRef<"RegistrationStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationStep findUnique
   */
  export type RegistrationStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStep to fetch.
     */
    where: RegistrationStepWhereUniqueInput
  }

  /**
   * RegistrationStep findUniqueOrThrow
   */
  export type RegistrationStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStep to fetch.
     */
    where: RegistrationStepWhereUniqueInput
  }

  /**
   * RegistrationStep findFirst
   */
  export type RegistrationStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStep to fetch.
     */
    where?: RegistrationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationSteps to fetch.
     */
    orderBy?: RegistrationStepOrderByWithRelationInput | RegistrationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationSteps.
     */
    cursor?: RegistrationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationSteps.
     */
    distinct?: RegistrationStepScalarFieldEnum | RegistrationStepScalarFieldEnum[]
  }

  /**
   * RegistrationStep findFirstOrThrow
   */
  export type RegistrationStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationStep to fetch.
     */
    where?: RegistrationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationSteps to fetch.
     */
    orderBy?: RegistrationStepOrderByWithRelationInput | RegistrationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationSteps.
     */
    cursor?: RegistrationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationSteps.
     */
    distinct?: RegistrationStepScalarFieldEnum | RegistrationStepScalarFieldEnum[]
  }

  /**
   * RegistrationStep findMany
   */
  export type RegistrationStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationSteps to fetch.
     */
    where?: RegistrationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationSteps to fetch.
     */
    orderBy?: RegistrationStepOrderByWithRelationInput | RegistrationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationSteps.
     */
    cursor?: RegistrationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationSteps.
     */
    skip?: number
    distinct?: RegistrationStepScalarFieldEnum | RegistrationStepScalarFieldEnum[]
  }

  /**
   * RegistrationStep create
   */
  export type RegistrationStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationStep.
     */
    data: XOR<RegistrationStepCreateInput, RegistrationStepUncheckedCreateInput>
  }

  /**
   * RegistrationStep createMany
   */
  export type RegistrationStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationSteps.
     */
    data: RegistrationStepCreateManyInput | RegistrationStepCreateManyInput[]
  }

  /**
   * RegistrationStep update
   */
  export type RegistrationStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationStep.
     */
    data: XOR<RegistrationStepUpdateInput, RegistrationStepUncheckedUpdateInput>
    /**
     * Choose, which RegistrationStep to update.
     */
    where: RegistrationStepWhereUniqueInput
  }

  /**
   * RegistrationStep updateMany
   */
  export type RegistrationStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationSteps.
     */
    data: XOR<RegistrationStepUpdateManyMutationInput, RegistrationStepUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationSteps to update
     */
    where?: RegistrationStepWhereInput
    /**
     * Limit how many RegistrationSteps to update.
     */
    limit?: number
  }

  /**
   * RegistrationStep upsert
   */
  export type RegistrationStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationStep to update in case it exists.
     */
    where: RegistrationStepWhereUniqueInput
    /**
     * In case the RegistrationStep found by the `where` argument doesn't exist, create a new RegistrationStep with this data.
     */
    create: XOR<RegistrationStepCreateInput, RegistrationStepUncheckedCreateInput>
    /**
     * In case the RegistrationStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationStepUpdateInput, RegistrationStepUncheckedUpdateInput>
  }

  /**
   * RegistrationStep delete
   */
  export type RegistrationStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
    /**
     * Filter which RegistrationStep to delete.
     */
    where: RegistrationStepWhereUniqueInput
  }

  /**
   * RegistrationStep deleteMany
   */
  export type RegistrationStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationSteps to delete
     */
    where?: RegistrationStepWhereInput
    /**
     * Limit how many RegistrationSteps to delete.
     */
    limit?: number
  }

  /**
   * RegistrationStep findRaw
   */
  export type RegistrationStepFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RegistrationStep aggregateRaw
   */
  export type RegistrationStepAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RegistrationStep.definition
   */
  export type RegistrationStep$definitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    where?: StepDefinitionWhereInput
  }

  /**
   * RegistrationStep without action
   */
  export type RegistrationStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationStep
     */
    select?: RegistrationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationStep
     */
    omit?: RegistrationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationStepInclude<ExtArgs> | null
  }


  /**
   * Model StepDefinition
   */

  export type AggregateStepDefinition = {
    _count: StepDefinitionCountAggregateOutputType | null
    _avg: StepDefinitionAvgAggregateOutputType | null
    _sum: StepDefinitionSumAggregateOutputType | null
    _min: StepDefinitionMinAggregateOutputType | null
    _max: StepDefinitionMaxAggregateOutputType | null
  }

  export type StepDefinitionAvgAggregateOutputType = {
    stepVersion: number | null
  }

  export type StepDefinitionSumAggregateOutputType = {
    stepVersion: number | null
  }

  export type StepDefinitionMinAggregateOutputType = {
    id: string | null
    stepId: string | null
    type: $Enums.StepType | null
    stepVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StepDefinitionMaxAggregateOutputType = {
    id: string | null
    stepId: string | null
    type: $Enums.StepType | null
    stepVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StepDefinitionCountAggregateOutputType = {
    id: number
    stepId: number
    type: number
    stepVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StepDefinitionAvgAggregateInputType = {
    stepVersion?: true
  }

  export type StepDefinitionSumAggregateInputType = {
    stepVersion?: true
  }

  export type StepDefinitionMinAggregateInputType = {
    id?: true
    stepId?: true
    type?: true
    stepVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StepDefinitionMaxAggregateInputType = {
    id?: true
    stepId?: true
    type?: true
    stepVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StepDefinitionCountAggregateInputType = {
    id?: true
    stepId?: true
    type?: true
    stepVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StepDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepDefinition to aggregate.
     */
    where?: StepDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepDefinitions to fetch.
     */
    orderBy?: StepDefinitionOrderByWithRelationInput | StepDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepDefinitions
    **/
    _count?: true | StepDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepDefinitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepDefinitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepDefinitionMaxAggregateInputType
  }

  export type GetStepDefinitionAggregateType<T extends StepDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateStepDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepDefinition[P]>
      : GetScalarType<T[P], AggregateStepDefinition[P]>
  }




  export type StepDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepDefinitionWhereInput
    orderBy?: StepDefinitionOrderByWithAggregationInput | StepDefinitionOrderByWithAggregationInput[]
    by: StepDefinitionScalarFieldEnum[] | StepDefinitionScalarFieldEnum
    having?: StepDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepDefinitionCountAggregateInputType | true
    _avg?: StepDefinitionAvgAggregateInputType
    _sum?: StepDefinitionSumAggregateInputType
    _min?: StepDefinitionMinAggregateInputType
    _max?: StepDefinitionMaxAggregateInputType
  }

  export type StepDefinitionGroupByOutputType = {
    id: string
    stepId: string
    type: $Enums.StepType
    stepVersion: number
    createdAt: Date
    updatedAt: Date
    _count: StepDefinitionCountAggregateOutputType | null
    _avg: StepDefinitionAvgAggregateOutputType | null
    _sum: StepDefinitionSumAggregateOutputType | null
    _min: StepDefinitionMinAggregateOutputType | null
    _max: StepDefinitionMaxAggregateOutputType | null
  }

  type GetStepDefinitionGroupByPayload<T extends StepDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], StepDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type StepDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepId?: boolean
    type?: boolean
    stepVersion?: boolean
    display?: boolean | StepDisplayDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    step?: boolean | RegistrationStepDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepDefinition"]>



  export type StepDefinitionSelectScalar = {
    id?: boolean
    stepId?: boolean
    type?: boolean
    stepVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StepDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stepId" | "type" | "stepVersion" | "display" | "createdAt" | "updatedAt", ExtArgs["result"]["stepDefinition"]>
  export type StepDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | RegistrationStepDefaultArgs<ExtArgs>
  }

  export type $StepDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepDefinition"
    objects: {
      step: Prisma.$RegistrationStepPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stepId: string
      type: $Enums.StepType
      stepVersion: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stepDefinition"]>
    composites: {
      display: Prisma.$StepDisplayPayload
    }
  }

  type StepDefinitionGetPayload<S extends boolean | null | undefined | StepDefinitionDefaultArgs> = $Result.GetResult<Prisma.$StepDefinitionPayload, S>

  type StepDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepDefinitionCountAggregateInputType | true
    }

  export interface StepDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepDefinition'], meta: { name: 'StepDefinition' } }
    /**
     * Find zero or one StepDefinition that matches the filter.
     * @param {StepDefinitionFindUniqueArgs} args - Arguments to find a StepDefinition
     * @example
     * // Get one StepDefinition
     * const stepDefinition = await prisma.stepDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepDefinitionFindUniqueArgs>(args: SelectSubset<T, StepDefinitionFindUniqueArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StepDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepDefinitionFindUniqueOrThrowArgs} args - Arguments to find a StepDefinition
     * @example
     * // Get one StepDefinition
     * const stepDefinition = await prisma.stepDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, StepDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionFindFirstArgs} args - Arguments to find a StepDefinition
     * @example
     * // Get one StepDefinition
     * const stepDefinition = await prisma.stepDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepDefinitionFindFirstArgs>(args?: SelectSubset<T, StepDefinitionFindFirstArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionFindFirstOrThrowArgs} args - Arguments to find a StepDefinition
     * @example
     * // Get one StepDefinition
     * const stepDefinition = await prisma.stepDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, StepDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepDefinitions
     * const stepDefinitions = await prisma.stepDefinition.findMany()
     * 
     * // Get first 10 StepDefinitions
     * const stepDefinitions = await prisma.stepDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepDefinitionWithIdOnly = await prisma.stepDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepDefinitionFindManyArgs>(args?: SelectSubset<T, StepDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StepDefinition.
     * @param {StepDefinitionCreateArgs} args - Arguments to create a StepDefinition.
     * @example
     * // Create one StepDefinition
     * const StepDefinition = await prisma.stepDefinition.create({
     *   data: {
     *     // ... data to create a StepDefinition
     *   }
     * })
     * 
     */
    create<T extends StepDefinitionCreateArgs>(args: SelectSubset<T, StepDefinitionCreateArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StepDefinitions.
     * @param {StepDefinitionCreateManyArgs} args - Arguments to create many StepDefinitions.
     * @example
     * // Create many StepDefinitions
     * const stepDefinition = await prisma.stepDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepDefinitionCreateManyArgs>(args?: SelectSubset<T, StepDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StepDefinition.
     * @param {StepDefinitionDeleteArgs} args - Arguments to delete one StepDefinition.
     * @example
     * // Delete one StepDefinition
     * const StepDefinition = await prisma.stepDefinition.delete({
     *   where: {
     *     // ... filter to delete one StepDefinition
     *   }
     * })
     * 
     */
    delete<T extends StepDefinitionDeleteArgs>(args: SelectSubset<T, StepDefinitionDeleteArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StepDefinition.
     * @param {StepDefinitionUpdateArgs} args - Arguments to update one StepDefinition.
     * @example
     * // Update one StepDefinition
     * const stepDefinition = await prisma.stepDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepDefinitionUpdateArgs>(args: SelectSubset<T, StepDefinitionUpdateArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StepDefinitions.
     * @param {StepDefinitionDeleteManyArgs} args - Arguments to filter StepDefinitions to delete.
     * @example
     * // Delete a few StepDefinitions
     * const { count } = await prisma.stepDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDefinitionDeleteManyArgs>(args?: SelectSubset<T, StepDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepDefinitions
     * const stepDefinition = await prisma.stepDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepDefinitionUpdateManyArgs>(args: SelectSubset<T, StepDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StepDefinition.
     * @param {StepDefinitionUpsertArgs} args - Arguments to update or create a StepDefinition.
     * @example
     * // Update or create a StepDefinition
     * const stepDefinition = await prisma.stepDefinition.upsert({
     *   create: {
     *     // ... data to create a StepDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepDefinition we want to update
     *   }
     * })
     */
    upsert<T extends StepDefinitionUpsertArgs>(args: SelectSubset<T, StepDefinitionUpsertArgs<ExtArgs>>): Prisma__StepDefinitionClient<$Result.GetResult<Prisma.$StepDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepDefinitions that matches the filter.
     * @param {StepDefinitionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const stepDefinition = await prisma.stepDefinition.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StepDefinitionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StepDefinition.
     * @param {StepDefinitionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const stepDefinition = await prisma.stepDefinition.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StepDefinitionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StepDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionCountArgs} args - Arguments to filter StepDefinitions to count.
     * @example
     * // Count the number of StepDefinitions
     * const count = await prisma.stepDefinition.count({
     *   where: {
     *     // ... the filter for the StepDefinitions we want to count
     *   }
     * })
    **/
    count<T extends StepDefinitionCountArgs>(
      args?: Subset<T, StepDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepDefinitionAggregateArgs>(args: Subset<T, StepDefinitionAggregateArgs>): Prisma.PrismaPromise<GetStepDefinitionAggregateType<T>>

    /**
     * Group by StepDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepDefinitionGroupByArgs} args - Group by arguments.
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
      T extends StepDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: StepDefinitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepDefinition model
   */
  readonly fields: StepDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    step<T extends RegistrationStepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistrationStepDefaultArgs<ExtArgs>>): Prisma__RegistrationStepClient<$Result.GetResult<Prisma.$RegistrationStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StepDefinition model
   */
  interface StepDefinitionFieldRefs {
    readonly id: FieldRef<"StepDefinition", 'String'>
    readonly stepId: FieldRef<"StepDefinition", 'String'>
    readonly type: FieldRef<"StepDefinition", 'StepType'>
    readonly stepVersion: FieldRef<"StepDefinition", 'Int'>
    readonly createdAt: FieldRef<"StepDefinition", 'DateTime'>
    readonly updatedAt: FieldRef<"StepDefinition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StepDefinition findUnique
   */
  export type StepDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which StepDefinition to fetch.
     */
    where: StepDefinitionWhereUniqueInput
  }

  /**
   * StepDefinition findUniqueOrThrow
   */
  export type StepDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which StepDefinition to fetch.
     */
    where: StepDefinitionWhereUniqueInput
  }

  /**
   * StepDefinition findFirst
   */
  export type StepDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which StepDefinition to fetch.
     */
    where?: StepDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepDefinitions to fetch.
     */
    orderBy?: StepDefinitionOrderByWithRelationInput | StepDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepDefinitions.
     */
    cursor?: StepDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepDefinitions.
     */
    distinct?: StepDefinitionScalarFieldEnum | StepDefinitionScalarFieldEnum[]
  }

  /**
   * StepDefinition findFirstOrThrow
   */
  export type StepDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which StepDefinition to fetch.
     */
    where?: StepDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepDefinitions to fetch.
     */
    orderBy?: StepDefinitionOrderByWithRelationInput | StepDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepDefinitions.
     */
    cursor?: StepDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepDefinitions.
     */
    distinct?: StepDefinitionScalarFieldEnum | StepDefinitionScalarFieldEnum[]
  }

  /**
   * StepDefinition findMany
   */
  export type StepDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which StepDefinitions to fetch.
     */
    where?: StepDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepDefinitions to fetch.
     */
    orderBy?: StepDefinitionOrderByWithRelationInput | StepDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepDefinitions.
     */
    cursor?: StepDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepDefinitions.
     */
    skip?: number
    distinct?: StepDefinitionScalarFieldEnum | StepDefinitionScalarFieldEnum[]
  }

  /**
   * StepDefinition create
   */
  export type StepDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a StepDefinition.
     */
    data: XOR<StepDefinitionCreateInput, StepDefinitionUncheckedCreateInput>
  }

  /**
   * StepDefinition createMany
   */
  export type StepDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepDefinitions.
     */
    data: StepDefinitionCreateManyInput | StepDefinitionCreateManyInput[]
  }

  /**
   * StepDefinition update
   */
  export type StepDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a StepDefinition.
     */
    data: XOR<StepDefinitionUpdateInput, StepDefinitionUncheckedUpdateInput>
    /**
     * Choose, which StepDefinition to update.
     */
    where: StepDefinitionWhereUniqueInput
  }

  /**
   * StepDefinition updateMany
   */
  export type StepDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepDefinitions.
     */
    data: XOR<StepDefinitionUpdateManyMutationInput, StepDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which StepDefinitions to update
     */
    where?: StepDefinitionWhereInput
    /**
     * Limit how many StepDefinitions to update.
     */
    limit?: number
  }

  /**
   * StepDefinition upsert
   */
  export type StepDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the StepDefinition to update in case it exists.
     */
    where: StepDefinitionWhereUniqueInput
    /**
     * In case the StepDefinition found by the `where` argument doesn't exist, create a new StepDefinition with this data.
     */
    create: XOR<StepDefinitionCreateInput, StepDefinitionUncheckedCreateInput>
    /**
     * In case the StepDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepDefinitionUpdateInput, StepDefinitionUncheckedUpdateInput>
  }

  /**
   * StepDefinition delete
   */
  export type StepDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
    /**
     * Filter which StepDefinition to delete.
     */
    where: StepDefinitionWhereUniqueInput
  }

  /**
   * StepDefinition deleteMany
   */
  export type StepDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepDefinitions to delete
     */
    where?: StepDefinitionWhereInput
    /**
     * Limit how many StepDefinitions to delete.
     */
    limit?: number
  }

  /**
   * StepDefinition findRaw
   */
  export type StepDefinitionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StepDefinition aggregateRaw
   */
  export type StepDefinitionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StepDefinition without action
   */
  export type StepDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepDefinition
     */
    select?: StepDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepDefinition
     */
    omit?: StepDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationProgress
   */

  export type AggregateRegistrationProgress = {
    _count: RegistrationProgressCountAggregateOutputType | null
    _min: RegistrationProgressMinAggregateOutputType | null
    _max: RegistrationProgressMaxAggregateOutputType | null
  }

  export type RegistrationProgressMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    country: string | null
    currentStepId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationProgressMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    country: string | null
    currentStepId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationProgressCountAggregateOutputType = {
    id: number
    driverId: number
    country: number
    currentStepId: number
    completedSteps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistrationProgressMinAggregateInputType = {
    id?: true
    driverId?: true
    country?: true
    currentStepId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationProgressMaxAggregateInputType = {
    id?: true
    driverId?: true
    country?: true
    currentStepId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationProgressCountAggregateInputType = {
    id?: true
    driverId?: true
    country?: true
    currentStepId?: true
    completedSteps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegistrationProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationProgress to aggregate.
     */
    where?: RegistrationProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationProgresses to fetch.
     */
    orderBy?: RegistrationProgressOrderByWithRelationInput | RegistrationProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationProgresses
    **/
    _count?: true | RegistrationProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationProgressMaxAggregateInputType
  }

  export type GetRegistrationProgressAggregateType<T extends RegistrationProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationProgress[P]>
      : GetScalarType<T[P], AggregateRegistrationProgress[P]>
  }




  export type RegistrationProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationProgressWhereInput
    orderBy?: RegistrationProgressOrderByWithAggregationInput | RegistrationProgressOrderByWithAggregationInput[]
    by: RegistrationProgressScalarFieldEnum[] | RegistrationProgressScalarFieldEnum
    having?: RegistrationProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationProgressCountAggregateInputType | true
    _min?: RegistrationProgressMinAggregateInputType
    _max?: RegistrationProgressMaxAggregateInputType
  }

  export type RegistrationProgressGroupByOutputType = {
    id: string
    driverId: string
    country: string
    currentStepId: string
    completedSteps: string[]
    createdAt: Date
    updatedAt: Date
    _count: RegistrationProgressCountAggregateOutputType | null
    _min: RegistrationProgressMinAggregateOutputType | null
    _max: RegistrationProgressMaxAggregateOutputType | null
  }

  type GetRegistrationProgressGroupByPayload<T extends RegistrationProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationProgressGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationProgressGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    country?: boolean
    currentStepId?: boolean
    completedSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrationProgress"]>



  export type RegistrationProgressSelectScalar = {
    id?: boolean
    driverId?: boolean
    country?: boolean
    currentStepId?: boolean
    completedSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistrationProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "country" | "currentStepId" | "completedSteps" | "createdAt" | "updatedAt", ExtArgs["result"]["registrationProgress"]>
  export type RegistrationProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $RegistrationProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationProgress"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      country: string
      currentStepId: string
      completedSteps: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registrationProgress"]>
    composites: {}
  }

  type RegistrationProgressGetPayload<S extends boolean | null | undefined | RegistrationProgressDefaultArgs> = $Result.GetResult<Prisma.$RegistrationProgressPayload, S>

  type RegistrationProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationProgressCountAggregateInputType | true
    }

  export interface RegistrationProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationProgress'], meta: { name: 'RegistrationProgress' } }
    /**
     * Find zero or one RegistrationProgress that matches the filter.
     * @param {RegistrationProgressFindUniqueArgs} args - Arguments to find a RegistrationProgress
     * @example
     * // Get one RegistrationProgress
     * const registrationProgress = await prisma.registrationProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationProgressFindUniqueArgs>(args: SelectSubset<T, RegistrationProgressFindUniqueArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrationProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationProgressFindUniqueOrThrowArgs} args - Arguments to find a RegistrationProgress
     * @example
     * // Get one RegistrationProgress
     * const registrationProgress = await prisma.registrationProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressFindFirstArgs} args - Arguments to find a RegistrationProgress
     * @example
     * // Get one RegistrationProgress
     * const registrationProgress = await prisma.registrationProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationProgressFindFirstArgs>(args?: SelectSubset<T, RegistrationProgressFindFirstArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressFindFirstOrThrowArgs} args - Arguments to find a RegistrationProgress
     * @example
     * // Get one RegistrationProgress
     * const registrationProgress = await prisma.registrationProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationProgresses
     * const registrationProgresses = await prisma.registrationProgress.findMany()
     * 
     * // Get first 10 RegistrationProgresses
     * const registrationProgresses = await prisma.registrationProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationProgressWithIdOnly = await prisma.registrationProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationProgressFindManyArgs>(args?: SelectSubset<T, RegistrationProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrationProgress.
     * @param {RegistrationProgressCreateArgs} args - Arguments to create a RegistrationProgress.
     * @example
     * // Create one RegistrationProgress
     * const RegistrationProgress = await prisma.registrationProgress.create({
     *   data: {
     *     // ... data to create a RegistrationProgress
     *   }
     * })
     * 
     */
    create<T extends RegistrationProgressCreateArgs>(args: SelectSubset<T, RegistrationProgressCreateArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrationProgresses.
     * @param {RegistrationProgressCreateManyArgs} args - Arguments to create many RegistrationProgresses.
     * @example
     * // Create many RegistrationProgresses
     * const registrationProgress = await prisma.registrationProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationProgressCreateManyArgs>(args?: SelectSubset<T, RegistrationProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistrationProgress.
     * @param {RegistrationProgressDeleteArgs} args - Arguments to delete one RegistrationProgress.
     * @example
     * // Delete one RegistrationProgress
     * const RegistrationProgress = await prisma.registrationProgress.delete({
     *   where: {
     *     // ... filter to delete one RegistrationProgress
     *   }
     * })
     * 
     */
    delete<T extends RegistrationProgressDeleteArgs>(args: SelectSubset<T, RegistrationProgressDeleteArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrationProgress.
     * @param {RegistrationProgressUpdateArgs} args - Arguments to update one RegistrationProgress.
     * @example
     * // Update one RegistrationProgress
     * const registrationProgress = await prisma.registrationProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationProgressUpdateArgs>(args: SelectSubset<T, RegistrationProgressUpdateArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrationProgresses.
     * @param {RegistrationProgressDeleteManyArgs} args - Arguments to filter RegistrationProgresses to delete.
     * @example
     * // Delete a few RegistrationProgresses
     * const { count } = await prisma.registrationProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationProgressDeleteManyArgs>(args?: SelectSubset<T, RegistrationProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationProgresses
     * const registrationProgress = await prisma.registrationProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationProgressUpdateManyArgs>(args: SelectSubset<T, RegistrationProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistrationProgress.
     * @param {RegistrationProgressUpsertArgs} args - Arguments to update or create a RegistrationProgress.
     * @example
     * // Update or create a RegistrationProgress
     * const registrationProgress = await prisma.registrationProgress.upsert({
     *   create: {
     *     // ... data to create a RegistrationProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationProgress we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationProgressUpsertArgs>(args: SelectSubset<T, RegistrationProgressUpsertArgs<ExtArgs>>): Prisma__RegistrationProgressClient<$Result.GetResult<Prisma.$RegistrationProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationProgresses that matches the filter.
     * @param {RegistrationProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const registrationProgress = await prisma.registrationProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RegistrationProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RegistrationProgress.
     * @param {RegistrationProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const registrationProgress = await prisma.registrationProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RegistrationProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RegistrationProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressCountArgs} args - Arguments to filter RegistrationProgresses to count.
     * @example
     * // Count the number of RegistrationProgresses
     * const count = await prisma.registrationProgress.count({
     *   where: {
     *     // ... the filter for the RegistrationProgresses we want to count
     *   }
     * })
    **/
    count<T extends RegistrationProgressCountArgs>(
      args?: Subset<T, RegistrationProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationProgressAggregateArgs>(args: Subset<T, RegistrationProgressAggregateArgs>): Prisma.PrismaPromise<GetRegistrationProgressAggregateType<T>>

    /**
     * Group by RegistrationProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationProgressGroupByArgs} args - Group by arguments.
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
      T extends RegistrationProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationProgressGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationProgress model
   */
  readonly fields: RegistrationProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistrationProgress model
   */
  interface RegistrationProgressFieldRefs {
    readonly id: FieldRef<"RegistrationProgress", 'String'>
    readonly driverId: FieldRef<"RegistrationProgress", 'String'>
    readonly country: FieldRef<"RegistrationProgress", 'String'>
    readonly currentStepId: FieldRef<"RegistrationProgress", 'String'>
    readonly completedSteps: FieldRef<"RegistrationProgress", 'String[]'>
    readonly createdAt: FieldRef<"RegistrationProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"RegistrationProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationProgress findUnique
   */
  export type RegistrationProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationProgress to fetch.
     */
    where: RegistrationProgressWhereUniqueInput
  }

  /**
   * RegistrationProgress findUniqueOrThrow
   */
  export type RegistrationProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationProgress to fetch.
     */
    where: RegistrationProgressWhereUniqueInput
  }

  /**
   * RegistrationProgress findFirst
   */
  export type RegistrationProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationProgress to fetch.
     */
    where?: RegistrationProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationProgresses to fetch.
     */
    orderBy?: RegistrationProgressOrderByWithRelationInput | RegistrationProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationProgresses.
     */
    cursor?: RegistrationProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationProgresses.
     */
    distinct?: RegistrationProgressScalarFieldEnum | RegistrationProgressScalarFieldEnum[]
  }

  /**
   * RegistrationProgress findFirstOrThrow
   */
  export type RegistrationProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationProgress to fetch.
     */
    where?: RegistrationProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationProgresses to fetch.
     */
    orderBy?: RegistrationProgressOrderByWithRelationInput | RegistrationProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationProgresses.
     */
    cursor?: RegistrationProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationProgresses.
     */
    distinct?: RegistrationProgressScalarFieldEnum | RegistrationProgressScalarFieldEnum[]
  }

  /**
   * RegistrationProgress findMany
   */
  export type RegistrationProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * Filter, which RegistrationProgresses to fetch.
     */
    where?: RegistrationProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationProgresses to fetch.
     */
    orderBy?: RegistrationProgressOrderByWithRelationInput | RegistrationProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationProgresses.
     */
    cursor?: RegistrationProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationProgresses.
     */
    skip?: number
    distinct?: RegistrationProgressScalarFieldEnum | RegistrationProgressScalarFieldEnum[]
  }

  /**
   * RegistrationProgress create
   */
  export type RegistrationProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrationProgress.
     */
    data: XOR<RegistrationProgressCreateInput, RegistrationProgressUncheckedCreateInput>
  }

  /**
   * RegistrationProgress createMany
   */
  export type RegistrationProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationProgresses.
     */
    data: RegistrationProgressCreateManyInput | RegistrationProgressCreateManyInput[]
  }

  /**
   * RegistrationProgress update
   */
  export type RegistrationProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrationProgress.
     */
    data: XOR<RegistrationProgressUpdateInput, RegistrationProgressUncheckedUpdateInput>
    /**
     * Choose, which RegistrationProgress to update.
     */
    where: RegistrationProgressWhereUniqueInput
  }

  /**
   * RegistrationProgress updateMany
   */
  export type RegistrationProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationProgresses.
     */
    data: XOR<RegistrationProgressUpdateManyMutationInput, RegistrationProgressUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationProgresses to update
     */
    where?: RegistrationProgressWhereInput
    /**
     * Limit how many RegistrationProgresses to update.
     */
    limit?: number
  }

  /**
   * RegistrationProgress upsert
   */
  export type RegistrationProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrationProgress to update in case it exists.
     */
    where: RegistrationProgressWhereUniqueInput
    /**
     * In case the RegistrationProgress found by the `where` argument doesn't exist, create a new RegistrationProgress with this data.
     */
    create: XOR<RegistrationProgressCreateInput, RegistrationProgressUncheckedCreateInput>
    /**
     * In case the RegistrationProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationProgressUpdateInput, RegistrationProgressUncheckedUpdateInput>
  }

  /**
   * RegistrationProgress delete
   */
  export type RegistrationProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
    /**
     * Filter which RegistrationProgress to delete.
     */
    where: RegistrationProgressWhereUniqueInput
  }

  /**
   * RegistrationProgress deleteMany
   */
  export type RegistrationProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationProgresses to delete
     */
    where?: RegistrationProgressWhereInput
    /**
     * Limit how many RegistrationProgresses to delete.
     */
    limit?: number
  }

  /**
   * RegistrationProgress findRaw
   */
  export type RegistrationProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RegistrationProgress aggregateRaw
   */
  export type RegistrationProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RegistrationProgress without action
   */
  export type RegistrationProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationProgress
     */
    select?: RegistrationProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationProgress
     */
    omit?: RegistrationProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phonenumber: 'phonenumber',
    phoneCountryCode: 'phoneCountryCode',
    isVerifiedEmail: 'isVerifiedEmail',
    isVerifiedPhonenumber: 'isVerifiedPhonenumber',
    profileURL: 'profileURL',
    socketId: 'socketId',
    lastLocationUpdate: 'lastLocationUpdate',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    lockoutUntil: 'lockoutUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RiderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    totalRides: 'totalRides',
    cancelledRides: 'cancelledRides'
  };

  export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    vehicleType: 'vehicleType',
    rating: 'rating',
    totalRides: 'totalRides',
    cancelledRides: 'cancelledRides',
    isVerified: 'isVerified',
    isRegistrationComplete: 'isRegistrationComplete',
    serviceAreaId: 'serviceAreaId',
    isInServiceArea: 'isInServiceArea',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const ServiceAreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    coordinates: 'coordinates',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceAreaScalarFieldEnum = (typeof ServiceAreaScalarFieldEnum)[keyof typeof ServiceAreaScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    model: 'model',
    year: 'year',
    color: 'color',
    licensePlate: 'licensePlate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    type: 'type',
    documentId: 'documentId',
    name: 'name',
    number: 'number',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const EarningsScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    totalEarnings: 'totalEarnings',
    currentBalance: 'currentBalance'
  };

  export type EarningsScalarFieldEnum = (typeof EarningsScalarFieldEnum)[keyof typeof EarningsScalarFieldEnum]


  export const RideScalarFieldEnum: {
    id: 'id',
    riderId: 'riderId',
    driverId: 'driverId',
    distance: 'distance',
    duration: 'duration',
    promoCodeId: 'promoCodeId',
    cancelReason: 'cancelReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    phonenumber: 'phonenumber',
    phoneCountryCode: 'phoneCountryCode',
    email: 'email',
    role: 'role',
    password: 'password',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const RegistrationTemplateScalarFieldEnum: {
    id: 'id',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistrationTemplateScalarFieldEnum = (typeof RegistrationTemplateScalarFieldEnum)[keyof typeof RegistrationTemplateScalarFieldEnum]


  export const RegistrationStepScalarFieldEnum: {
    id: 'id',
    status: 'status',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    templateId: 'templateId'
  };

  export type RegistrationStepScalarFieldEnum = (typeof RegistrationStepScalarFieldEnum)[keyof typeof RegistrationStepScalarFieldEnum]


  export const StepDefinitionScalarFieldEnum: {
    id: 'id',
    stepId: 'stepId',
    type: 'type',
    stepVersion: 'stepVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StepDefinitionScalarFieldEnum = (typeof StepDefinitionScalarFieldEnum)[keyof typeof StepDefinitionScalarFieldEnum]


  export const RegistrationProgressScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    country: 'country',
    currentStepId: 'currentStepId',
    completedSteps: 'completedSteps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistrationProgressScalarFieldEnum = (typeof RegistrationProgressScalarFieldEnum)[keyof typeof RegistrationProgressScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DriverStatus'
   */
  export type EnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus'>
    


  /**
   * Reference to a field of type 'DriverStatus[]'
   */
  export type ListEnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'StepType'
   */
  export type EnumStepTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StepType'>
    


  /**
   * Reference to a field of type 'StepType[]'
   */
  export type ListEnumStepTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StepType[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'ShiftStatus'
   */
  export type EnumShiftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftStatus'>
    


  /**
   * Reference to a field of type 'ShiftStatus[]'
   */
  export type ListEnumShiftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phonenumber?: StringNullableFilter<"User"> | string | null
    phoneCountryCode?: StringNullableFilter<"User"> | string | null
    isVerifiedEmail?: BoolNullableFilter<"User"> | boolean | null
    isVerifiedPhonenumber?: BoolNullableFilter<"User"> | boolean | null
    profileURL?: StringNullableFilter<"User"> | string | null
    socketId?: StringNullableFilter<"User"> | string | null
    location?: XOR<LocationNullableCompositeFilter, LocationObjectEqualityInput> | null
    lastLocationUpdate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lockoutUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rider?: XOR<RiderNullableScalarRelationFilter, RiderWhereInput> | null
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isVerifiedPhonenumber?: SortOrder
    profileURL?: SortOrder
    socketId?: SortOrder
    location?: LocationOrderByInput
    lastLocationUpdate?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    lockoutUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phonenumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    phoneCountryCode?: StringNullableFilter<"User"> | string | null
    isVerifiedEmail?: BoolNullableFilter<"User"> | boolean | null
    isVerifiedPhonenumber?: BoolNullableFilter<"User"> | boolean | null
    profileURL?: StringNullableFilter<"User"> | string | null
    socketId?: StringNullableFilter<"User"> | string | null
    location?: XOR<LocationNullableCompositeFilter, LocationObjectEqualityInput> | null
    lastLocationUpdate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lockoutUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rider?: XOR<RiderNullableScalarRelationFilter, RiderWhereInput> | null
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }, "id" | "email" | "phonenumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isVerifiedPhonenumber?: SortOrder
    profileURL?: SortOrder
    socketId?: SortOrder
    lastLocationUpdate?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    lockoutUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phonenumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneCountryCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerifiedEmail?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    isVerifiedPhonenumber?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    profileURL?: StringNullableWithAggregatesFilter<"User"> | string | null
    socketId?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLocationUpdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lockoutUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RiderWhereInput = {
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    id?: StringFilter<"Rider"> | string
    userId?: StringFilter<"Rider"> | string
    emergencyContacts?: EmergencyContactsCompositeListFilter | emergencyContactsObjectEqualityInput[]
    rating?: FloatFilter<"Rider"> | number
    totalRides?: IntFilter<"Rider"> | number
    cancelledRides?: IntFilter<"Rider"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rideHistory?: RideListRelationFilter
  }

  export type RiderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    emergencyContacts?: emergencyContactsOrderByCompositeAggregateInput
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    user?: UserOrderByWithRelationInput
    rideHistory?: RideOrderByRelationAggregateInput
  }

  export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    emergencyContacts?: EmergencyContactsCompositeListFilter | emergencyContactsObjectEqualityInput[]
    rating?: FloatFilter<"Rider"> | number
    totalRides?: IntFilter<"Rider"> | number
    cancelledRides?: IntFilter<"Rider"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rideHistory?: RideListRelationFilter
  }, "id" | "userId">

  export type RiderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    _count?: RiderCountOrderByAggregateInput
    _avg?: RiderAvgOrderByAggregateInput
    _max?: RiderMaxOrderByAggregateInput
    _min?: RiderMinOrderByAggregateInput
    _sum?: RiderSumOrderByAggregateInput
  }

  export type RiderScalarWhereWithAggregatesInput = {
    AND?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    OR?: RiderScalarWhereWithAggregatesInput[]
    NOT?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rider"> | string
    userId?: StringWithAggregatesFilter<"Rider"> | string
    rating?: FloatWithAggregatesFilter<"Rider"> | number
    totalRides?: IntWithAggregatesFilter<"Rider"> | number
    cancelledRides?: IntWithAggregatesFilter<"Rider"> | number
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    userId?: StringFilter<"Driver"> | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    vehicleType?: EnumVehicleTypeNullableFilter<"Driver"> | $Enums.VehicleType | null
    rating?: FloatFilter<"Driver"> | number
    totalRides?: IntFilter<"Driver"> | number
    cancelledRides?: IntFilter<"Driver"> | number
    isVerified?: BoolFilter<"Driver"> | boolean
    isRegistrationComplete?: BoolFilter<"Driver"> | boolean
    serviceAreaId?: StringNullableFilter<"Driver"> | string | null
    isInServiceArea?: BoolFilter<"Driver"> | boolean
    availability?: XOR<AvailabilityNullableCompositeFilter, AvailabilityObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    earnings?: XOR<EarningsNullableScalarRelationFilter, EarningsWhereInput> | null
    Ride?: RideListRelationFilter
    registrationProgress?: XOR<RegistrationProgressNullableScalarRelationFilter, RegistrationProgressWhereInput> | null
    serviceArea?: XOR<ServiceAreaNullableScalarRelationFilter, ServiceAreaWhereInput> | null
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    vehicleType?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    isVerified?: SortOrder
    isRegistrationComplete?: SortOrder
    serviceAreaId?: SortOrder
    isInServiceArea?: SortOrder
    availability?: AvailabilityOrderByInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    vehicle?: VehicleOrderByWithRelationInput
    earnings?: EarningsOrderByWithRelationInput
    Ride?: RideOrderByRelationAggregateInput
    registrationProgress?: RegistrationProgressOrderByWithRelationInput
    serviceArea?: ServiceAreaOrderByWithRelationInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    vehicleType?: EnumVehicleTypeNullableFilter<"Driver"> | $Enums.VehicleType | null
    rating?: FloatFilter<"Driver"> | number
    totalRides?: IntFilter<"Driver"> | number
    cancelledRides?: IntFilter<"Driver"> | number
    isVerified?: BoolFilter<"Driver"> | boolean
    isRegistrationComplete?: BoolFilter<"Driver"> | boolean
    serviceAreaId?: StringNullableFilter<"Driver"> | string | null
    isInServiceArea?: BoolFilter<"Driver"> | boolean
    availability?: XOR<AvailabilityNullableCompositeFilter, AvailabilityObjectEqualityInput> | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    earnings?: XOR<EarningsNullableScalarRelationFilter, EarningsWhereInput> | null
    Ride?: RideListRelationFilter
    registrationProgress?: XOR<RegistrationProgressNullableScalarRelationFilter, RegistrationProgressWhereInput> | null
    serviceArea?: XOR<ServiceAreaNullableScalarRelationFilter, ServiceAreaWhereInput> | null
  }, "id" | "userId">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    vehicleType?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    isVerified?: SortOrder
    isRegistrationComplete?: SortOrder
    serviceAreaId?: SortOrder
    isInServiceArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    userId?: StringWithAggregatesFilter<"Driver"> | string
    status?: EnumDriverStatusWithAggregatesFilter<"Driver"> | $Enums.DriverStatus
    vehicleType?: EnumVehicleTypeNullableWithAggregatesFilter<"Driver"> | $Enums.VehicleType | null
    rating?: FloatWithAggregatesFilter<"Driver"> | number
    totalRides?: IntWithAggregatesFilter<"Driver"> | number
    cancelledRides?: IntWithAggregatesFilter<"Driver"> | number
    isVerified?: BoolWithAggregatesFilter<"Driver"> | boolean
    isRegistrationComplete?: BoolWithAggregatesFilter<"Driver"> | boolean
    serviceAreaId?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    isInServiceArea?: BoolWithAggregatesFilter<"Driver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type ServiceAreaWhereInput = {
    AND?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    OR?: ServiceAreaWhereInput[]
    NOT?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    id?: StringFilter<"ServiceArea"> | string
    name?: StringFilter<"ServiceArea"> | string
    type?: StringFilter<"ServiceArea"> | string
    coordinates?: JsonFilter<"ServiceArea">
    createdAt?: DateTimeFilter<"ServiceArea"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceArea"> | Date | string
    drivers?: DriverListRelationFilter
  }

  export type ServiceAreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drivers?: DriverOrderByRelationAggregateInput
  }

  export type ServiceAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    OR?: ServiceAreaWhereInput[]
    NOT?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    name?: StringFilter<"ServiceArea"> | string
    type?: StringFilter<"ServiceArea"> | string
    coordinates?: JsonFilter<"ServiceArea">
    createdAt?: DateTimeFilter<"ServiceArea"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceArea"> | Date | string
    drivers?: DriverListRelationFilter
  }, "id">

  export type ServiceAreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceAreaCountOrderByAggregateInput
    _max?: ServiceAreaMaxOrderByAggregateInput
    _min?: ServiceAreaMinOrderByAggregateInput
  }

  export type ServiceAreaScalarWhereWithAggregatesInput = {
    AND?: ServiceAreaScalarWhereWithAggregatesInput | ServiceAreaScalarWhereWithAggregatesInput[]
    OR?: ServiceAreaScalarWhereWithAggregatesInput[]
    NOT?: ServiceAreaScalarWhereWithAggregatesInput | ServiceAreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceArea"> | string
    name?: StringWithAggregatesFilter<"ServiceArea"> | string
    type?: StringWithAggregatesFilter<"ServiceArea"> | string
    coordinates?: JsonWithAggregatesFilter<"ServiceArea">
    createdAt?: DateTimeWithAggregatesFilter<"ServiceArea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceArea"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    driverId?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    color?: StringFilter<"Vehicle"> | string
    licensePlate?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driverId?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    color?: StringFilter<"Vehicle"> | string
    licensePlate?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id" | "driverId">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    driverId?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    color?: StringWithAggregatesFilter<"Vehicle"> | string
    licensePlate?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    driverId?: StringFilter<"Document"> | string
    type?: EnumStepTypeFilter<"Document"> | $Enums.StepType
    documentId?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    number?: StringFilter<"Document"> | string
    imageUrl?: XOR<DocumentImageCompositeFilter, DocumentImageObjectEqualityInput>
    isVerified?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    number?: SortOrder
    imageUrl?: DocumentImageOrderByInput
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    driverId?: StringFilter<"Document"> | string
    type?: EnumStepTypeFilter<"Document"> | $Enums.StepType
    documentId?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    number?: StringFilter<"Document"> | string
    imageUrl?: XOR<DocumentImageCompositeFilter, DocumentImageObjectEqualityInput>
    isVerified?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    driverId?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumStepTypeWithAggregatesFilter<"Document"> | $Enums.StepType
    documentId?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    number?: StringWithAggregatesFilter<"Document"> | string
    isVerified?: BoolWithAggregatesFilter<"Document"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type EarningsWhereInput = {
    AND?: EarningsWhereInput | EarningsWhereInput[]
    OR?: EarningsWhereInput[]
    NOT?: EarningsWhereInput | EarningsWhereInput[]
    id?: StringFilter<"Earnings"> | string
    driverId?: StringFilter<"Earnings"> | string
    totalEarnings?: FloatFilter<"Earnings"> | number
    currentBalance?: FloatFilter<"Earnings"> | number
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type EarningsOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type EarningsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driverId?: string
    AND?: EarningsWhereInput | EarningsWhereInput[]
    OR?: EarningsWhereInput[]
    NOT?: EarningsWhereInput | EarningsWhereInput[]
    totalEarnings?: FloatFilter<"Earnings"> | number
    currentBalance?: FloatFilter<"Earnings"> | number
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id" | "driverId">

  export type EarningsOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
    _count?: EarningsCountOrderByAggregateInput
    _avg?: EarningsAvgOrderByAggregateInput
    _max?: EarningsMaxOrderByAggregateInput
    _min?: EarningsMinOrderByAggregateInput
    _sum?: EarningsSumOrderByAggregateInput
  }

  export type EarningsScalarWhereWithAggregatesInput = {
    AND?: EarningsScalarWhereWithAggregatesInput | EarningsScalarWhereWithAggregatesInput[]
    OR?: EarningsScalarWhereWithAggregatesInput[]
    NOT?: EarningsScalarWhereWithAggregatesInput | EarningsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Earnings"> | string
    driverId?: StringWithAggregatesFilter<"Earnings"> | string
    totalEarnings?: FloatWithAggregatesFilter<"Earnings"> | number
    currentBalance?: FloatWithAggregatesFilter<"Earnings"> | number
  }

  export type RideWhereInput = {
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    id?: StringFilter<"Ride"> | string
    riderId?: StringFilter<"Ride"> | string
    driverId?: StringNullableFilter<"Ride"> | string | null
    source?: XOR<LocationCompositeFilter, LocationObjectEqualityInput>
    destination?: XOR<LocationCompositeFilter, LocationObjectEqualityInput>
    waypoints?: LocationCompositeListFilter | LocationObjectEqualityInput[]
    distance?: FloatFilter<"Ride"> | number
    duration?: IntFilter<"Ride"> | number
    promoCodeId?: StringNullableFilter<"Ride"> | string | null
    cancelReason?: StringNullableFilter<"Ride"> | string | null
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }

  export type RideOrderByWithRelationInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    source?: LocationOrderByInput
    destination?: LocationOrderByInput
    waypoints?: LocationOrderByCompositeAggregateInput
    distance?: SortOrder
    duration?: SortOrder
    promoCodeId?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type RideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    riderId?: StringFilter<"Ride"> | string
    driverId?: StringNullableFilter<"Ride"> | string | null
    source?: XOR<LocationCompositeFilter, LocationObjectEqualityInput>
    destination?: XOR<LocationCompositeFilter, LocationObjectEqualityInput>
    waypoints?: LocationCompositeListFilter | LocationObjectEqualityInput[]
    distance?: FloatFilter<"Ride"> | number
    duration?: IntFilter<"Ride"> | number
    promoCodeId?: StringNullableFilter<"Ride"> | string | null
    cancelReason?: StringNullableFilter<"Ride"> | string | null
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }, "id">

  export type RideOrderByWithAggregationInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    promoCodeId?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RideCountOrderByAggregateInput
    _avg?: RideAvgOrderByAggregateInput
    _max?: RideMaxOrderByAggregateInput
    _min?: RideMinOrderByAggregateInput
    _sum?: RideSumOrderByAggregateInput
  }

  export type RideScalarWhereWithAggregatesInput = {
    AND?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    OR?: RideScalarWhereWithAggregatesInput[]
    NOT?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ride"> | string
    riderId?: StringWithAggregatesFilter<"Ride"> | string
    driverId?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    distance?: FloatWithAggregatesFilter<"Ride"> | number
    duration?: IntWithAggregatesFilter<"Ride"> | number
    promoCodeId?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    cancelReason?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    phonenumber?: StringFilter<"Admin"> | string
    phoneCountryCode?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    password?: StringFilter<"Admin"> | string
    refreshToken?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phonenumber?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    phoneCountryCode?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    password?: StringFilter<"Admin"> | string
    refreshToken?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "phonenumber" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    phonenumber?: StringWithAggregatesFilter<"Admin"> | string
    phoneCountryCode?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    password?: StringWithAggregatesFilter<"Admin"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type RegistrationTemplateWhereInput = {
    AND?: RegistrationTemplateWhereInput | RegistrationTemplateWhereInput[]
    OR?: RegistrationTemplateWhereInput[]
    NOT?: RegistrationTemplateWhereInput | RegistrationTemplateWhereInput[]
    id?: StringFilter<"RegistrationTemplate"> | string
    country?: StringFilter<"RegistrationTemplate"> | string
    createdAt?: DateTimeFilter<"RegistrationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationTemplate"> | Date | string
    steps?: RegistrationStepListRelationFilter
  }

  export type RegistrationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    steps?: RegistrationStepOrderByRelationAggregateInput
  }

  export type RegistrationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    country?: string
    AND?: RegistrationTemplateWhereInput | RegistrationTemplateWhereInput[]
    OR?: RegistrationTemplateWhereInput[]
    NOT?: RegistrationTemplateWhereInput | RegistrationTemplateWhereInput[]
    createdAt?: DateTimeFilter<"RegistrationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationTemplate"> | Date | string
    steps?: RegistrationStepListRelationFilter
  }, "id" | "country">

  export type RegistrationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistrationTemplateCountOrderByAggregateInput
    _max?: RegistrationTemplateMaxOrderByAggregateInput
    _min?: RegistrationTemplateMinOrderByAggregateInput
  }

  export type RegistrationTemplateScalarWhereWithAggregatesInput = {
    AND?: RegistrationTemplateScalarWhereWithAggregatesInput | RegistrationTemplateScalarWhereWithAggregatesInput[]
    OR?: RegistrationTemplateScalarWhereWithAggregatesInput[]
    NOT?: RegistrationTemplateScalarWhereWithAggregatesInput | RegistrationTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrationTemplate"> | string
    country?: StringWithAggregatesFilter<"RegistrationTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RegistrationTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegistrationTemplate"> | Date | string
  }

  export type RegistrationStepWhereInput = {
    AND?: RegistrationStepWhereInput | RegistrationStepWhereInput[]
    OR?: RegistrationStepWhereInput[]
    NOT?: RegistrationStepWhereInput | RegistrationStepWhereInput[]
    id?: StringFilter<"RegistrationStep"> | string
    status?: EnumRegistrationStatusFilter<"RegistrationStep"> | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayCompositeFilter, RegistrationStepDisplayObjectEqualityInput>
    options?: XOR<RegistrationStepOptionsCompositeFilter, RegistrationStepOptionsObjectEqualityInput>
    isActive?: BoolFilter<"RegistrationStep"> | boolean
    createdAt?: DateTimeFilter<"RegistrationStep"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationStep"> | Date | string
    templateId?: StringFilter<"RegistrationStep"> | string
    definition?: XOR<StepDefinitionNullableScalarRelationFilter, StepDefinitionWhereInput> | null
    template?: XOR<RegistrationTemplateScalarRelationFilter, RegistrationTemplateWhereInput>
  }

  export type RegistrationStepOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    display?: RegistrationStepDisplayOrderByInput
    options?: RegistrationStepOptionsOrderByInput
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
    definition?: StepDefinitionOrderByWithRelationInput
    template?: RegistrationTemplateOrderByWithRelationInput
  }

  export type RegistrationStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistrationStepWhereInput | RegistrationStepWhereInput[]
    OR?: RegistrationStepWhereInput[]
    NOT?: RegistrationStepWhereInput | RegistrationStepWhereInput[]
    status?: EnumRegistrationStatusFilter<"RegistrationStep"> | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayCompositeFilter, RegistrationStepDisplayObjectEqualityInput>
    options?: XOR<RegistrationStepOptionsCompositeFilter, RegistrationStepOptionsObjectEqualityInput>
    isActive?: BoolFilter<"RegistrationStep"> | boolean
    createdAt?: DateTimeFilter<"RegistrationStep"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationStep"> | Date | string
    templateId?: StringFilter<"RegistrationStep"> | string
    definition?: XOR<StepDefinitionNullableScalarRelationFilter, StepDefinitionWhereInput> | null
    template?: XOR<RegistrationTemplateScalarRelationFilter, RegistrationTemplateWhereInput>
  }, "id">

  export type RegistrationStepOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
    _count?: RegistrationStepCountOrderByAggregateInput
    _max?: RegistrationStepMaxOrderByAggregateInput
    _min?: RegistrationStepMinOrderByAggregateInput
  }

  export type RegistrationStepScalarWhereWithAggregatesInput = {
    AND?: RegistrationStepScalarWhereWithAggregatesInput | RegistrationStepScalarWhereWithAggregatesInput[]
    OR?: RegistrationStepScalarWhereWithAggregatesInput[]
    NOT?: RegistrationStepScalarWhereWithAggregatesInput | RegistrationStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrationStep"> | string
    status?: EnumRegistrationStatusWithAggregatesFilter<"RegistrationStep"> | $Enums.RegistrationStatus
    isActive?: BoolWithAggregatesFilter<"RegistrationStep"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RegistrationStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegistrationStep"> | Date | string
    templateId?: StringWithAggregatesFilter<"RegistrationStep"> | string
  }

  export type StepDefinitionWhereInput = {
    AND?: StepDefinitionWhereInput | StepDefinitionWhereInput[]
    OR?: StepDefinitionWhereInput[]
    NOT?: StepDefinitionWhereInput | StepDefinitionWhereInput[]
    id?: StringFilter<"StepDefinition"> | string
    stepId?: StringFilter<"StepDefinition"> | string
    type?: EnumStepTypeFilter<"StepDefinition"> | $Enums.StepType
    stepVersion?: IntFilter<"StepDefinition"> | number
    display?: XOR<StepDisplayCompositeFilter, StepDisplayObjectEqualityInput>
    createdAt?: DateTimeFilter<"StepDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"StepDefinition"> | Date | string
    step?: XOR<RegistrationStepScalarRelationFilter, RegistrationStepWhereInput>
  }

  export type StepDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    stepId?: SortOrder
    type?: SortOrder
    stepVersion?: SortOrder
    display?: StepDisplayOrderByInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    step?: RegistrationStepOrderByWithRelationInput
  }

  export type StepDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stepId?: string
    stepId_type_stepVersion?: StepDefinitionStepIdTypeStepVersionCompoundUniqueInput
    AND?: StepDefinitionWhereInput | StepDefinitionWhereInput[]
    OR?: StepDefinitionWhereInput[]
    NOT?: StepDefinitionWhereInput | StepDefinitionWhereInput[]
    type?: EnumStepTypeFilter<"StepDefinition"> | $Enums.StepType
    stepVersion?: IntFilter<"StepDefinition"> | number
    display?: XOR<StepDisplayCompositeFilter, StepDisplayObjectEqualityInput>
    createdAt?: DateTimeFilter<"StepDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"StepDefinition"> | Date | string
    step?: XOR<RegistrationStepScalarRelationFilter, RegistrationStepWhereInput>
  }, "id" | "stepId" | "stepId_type_stepVersion">

  export type StepDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    stepId?: SortOrder
    type?: SortOrder
    stepVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StepDefinitionCountOrderByAggregateInput
    _avg?: StepDefinitionAvgOrderByAggregateInput
    _max?: StepDefinitionMaxOrderByAggregateInput
    _min?: StepDefinitionMinOrderByAggregateInput
    _sum?: StepDefinitionSumOrderByAggregateInput
  }

  export type StepDefinitionScalarWhereWithAggregatesInput = {
    AND?: StepDefinitionScalarWhereWithAggregatesInput | StepDefinitionScalarWhereWithAggregatesInput[]
    OR?: StepDefinitionScalarWhereWithAggregatesInput[]
    NOT?: StepDefinitionScalarWhereWithAggregatesInput | StepDefinitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StepDefinition"> | string
    stepId?: StringWithAggregatesFilter<"StepDefinition"> | string
    type?: EnumStepTypeWithAggregatesFilter<"StepDefinition"> | $Enums.StepType
    stepVersion?: IntWithAggregatesFilter<"StepDefinition"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StepDefinition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StepDefinition"> | Date | string
  }

  export type RegistrationProgressWhereInput = {
    AND?: RegistrationProgressWhereInput | RegistrationProgressWhereInput[]
    OR?: RegistrationProgressWhereInput[]
    NOT?: RegistrationProgressWhereInput | RegistrationProgressWhereInput[]
    id?: StringFilter<"RegistrationProgress"> | string
    driverId?: StringFilter<"RegistrationProgress"> | string
    country?: StringFilter<"RegistrationProgress"> | string
    currentStepId?: StringFilter<"RegistrationProgress"> | string
    completedSteps?: StringNullableListFilter<"RegistrationProgress">
    createdAt?: DateTimeFilter<"RegistrationProgress"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationProgress"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type RegistrationProgressOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    country?: SortOrder
    currentStepId?: SortOrder
    completedSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type RegistrationProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driverId?: string
    AND?: RegistrationProgressWhereInput | RegistrationProgressWhereInput[]
    OR?: RegistrationProgressWhereInput[]
    NOT?: RegistrationProgressWhereInput | RegistrationProgressWhereInput[]
    country?: StringFilter<"RegistrationProgress"> | string
    currentStepId?: StringFilter<"RegistrationProgress"> | string
    completedSteps?: StringNullableListFilter<"RegistrationProgress">
    createdAt?: DateTimeFilter<"RegistrationProgress"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationProgress"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id" | "driverId">

  export type RegistrationProgressOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    country?: SortOrder
    currentStepId?: SortOrder
    completedSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistrationProgressCountOrderByAggregateInput
    _max?: RegistrationProgressMaxOrderByAggregateInput
    _min?: RegistrationProgressMinOrderByAggregateInput
  }

  export type RegistrationProgressScalarWhereWithAggregatesInput = {
    AND?: RegistrationProgressScalarWhereWithAggregatesInput | RegistrationProgressScalarWhereWithAggregatesInput[]
    OR?: RegistrationProgressScalarWhereWithAggregatesInput[]
    NOT?: RegistrationProgressScalarWhereWithAggregatesInput | RegistrationProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrationProgress"> | string
    driverId?: StringWithAggregatesFilter<"RegistrationProgress"> | string
    country?: StringWithAggregatesFilter<"RegistrationProgress"> | string
    currentStepId?: StringWithAggregatesFilter<"RegistrationProgress"> | string
    completedSteps?: StringNullableListFilter<"RegistrationProgress">
    createdAt?: DateTimeWithAggregatesFilter<"RegistrationProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegistrationProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedOneWithoutUserInput
    driver?: DriverCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderUncheckedCreateNestedOneWithoutUserInput
    driver?: DriverUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneWithoutUserNestedInput
    driver?: DriverUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUncheckedUpdateOneWithoutUserNestedInput
    driver?: DriverUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderCreateInput = {
    id?: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
    user: UserCreateNestedOneWithoutRiderInput
    rideHistory?: RideCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateInput = {
    id?: string
    userId: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
    rideHistory?: RideUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderUpdateInput = {
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRiderNestedInput
    rideHistory?: RideUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    rideHistory?: RideUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateManyInput = {
    id?: string
    userId: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
  }

  export type RiderUpdateManyMutationInput = {
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
  }

  export type RiderUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
  }

  export type DriverCreateInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverUpdateInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaCreateInput = {
    id?: string
    name: string
    type?: string
    coordinates: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverCreateNestedManyWithoutServiceAreaInput
  }

  export type ServiceAreaUncheckedCreateInput = {
    id?: string
    name: string
    type?: string
    coordinates: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverUncheckedCreateNestedManyWithoutServiceAreaInput
  }

  export type ServiceAreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUpdateManyWithoutServiceAreaNestedInput
  }

  export type ServiceAreaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUncheckedUpdateManyWithoutServiceAreaNestedInput
  }

  export type ServiceAreaCreateManyInput = {
    id?: string
    name: string
    type?: string
    coordinates: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    model: string
    year: number
    color: string
    licensePlate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    driverId: string
    model: string
    year: number
    color: string
    licensePlate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyInput = {
    id?: string
    driverId: string
    model: string
    year: number
    color: string
    licensePlate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    imageUrl: XOR<DocumentImageCreateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    driverId: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    imageUrl: XOR<DocumentImageCreateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    driverId: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    imageUrl: XOR<DocumentImageCreateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsCreateInput = {
    id?: string
    totalEarnings?: number
    currentBalance?: number
    driver: DriverCreateNestedOneWithoutEarningsInput
  }

  export type EarningsUncheckedCreateInput = {
    id?: string
    driverId: string
    totalEarnings?: number
    currentBalance?: number
  }

  export type EarningsUpdateInput = {
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    driver?: DriverUpdateOneRequiredWithoutEarningsNestedInput
  }

  export type EarningsUncheckedUpdateInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type EarningsCreateManyInput = {
    id?: string
    driverId: string
    totalEarnings?: number
    currentBalance?: number
  }

  export type EarningsUpdateManyMutationInput = {
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type EarningsUncheckedUpdateManyInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type RideCreateInput = {
    id?: string
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRideHistoryInput
    driver?: DriverCreateNestedOneWithoutRideInput
  }

  export type RideUncheckedCreateInput = {
    id?: string
    riderId: string
    driverId?: string | null
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateInput = {
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRideHistoryNestedInput
    driver?: DriverUpdateOneWithoutRideNestedInput
  }

  export type RideUncheckedUpdateInput = {
    riderId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyInput = {
    id?: string
    riderId: string
    driverId?: string | null
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateManyMutationInput = {
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyInput = {
    riderId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    phonenumber: string
    phoneCountryCode: string
    email: string
    role: $Enums.Role
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    phonenumber: string
    phoneCountryCode: string
    email: string
    role: $Enums.Role
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    phoneCountryCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    phoneCountryCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    phonenumber: string
    phoneCountryCode: string
    email: string
    role: $Enums.Role
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    phoneCountryCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    phoneCountryCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationTemplateCreateInput = {
    id?: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: RegistrationStepCreateNestedManyWithoutTemplateInput
  }

  export type RegistrationTemplateUncheckedCreateInput = {
    id?: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: RegistrationStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type RegistrationTemplateUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: RegistrationStepUpdateManyWithoutTemplateNestedInput
  }

  export type RegistrationTemplateUncheckedUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: RegistrationStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type RegistrationTemplateCreateManyInput = {
    id?: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationTemplateUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationTemplateUncheckedUpdateManyInput = {
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStepCreateInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    definition?: StepDefinitionCreateNestedOneWithoutStepInput
    template: RegistrationTemplateCreateNestedOneWithoutStepsInput
  }

  export type RegistrationStepUncheckedCreateInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId: string
    definition?: StepDefinitionUncheckedCreateNestedOneWithoutStepInput
  }

  export type RegistrationStepUpdateInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    definition?: StepDefinitionUpdateOneWithoutStepNestedInput
    template?: RegistrationTemplateUpdateOneRequiredWithoutStepsNestedInput
  }

  export type RegistrationStepUncheckedUpdateInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: StringFieldUpdateOperationsInput | string
    definition?: StepDefinitionUncheckedUpdateOneWithoutStepNestedInput
  }

  export type RegistrationStepCreateManyInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId: string
  }

  export type RegistrationStepUpdateManyMutationInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationStepUncheckedUpdateManyInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type StepDefinitionCreateInput = {
    id?: string
    type: $Enums.StepType
    stepVersion: number
    display: XOR<StepDisplayCreateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
    step: RegistrationStepCreateNestedOneWithoutDefinitionInput
  }

  export type StepDefinitionUncheckedCreateInput = {
    id?: string
    stepId: string
    type: $Enums.StepType
    stepVersion: number
    display: XOR<StepDisplayCreateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StepDefinitionUpdateInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    stepVersion?: IntFieldUpdateOperationsInput | number
    display?: XOR<StepDisplayUpdateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: RegistrationStepUpdateOneRequiredWithoutDefinitionNestedInput
  }

  export type StepDefinitionUncheckedUpdateInput = {
    stepId?: StringFieldUpdateOperationsInput | string
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    stepVersion?: IntFieldUpdateOperationsInput | number
    display?: XOR<StepDisplayUpdateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepDefinitionCreateManyInput = {
    id?: string
    stepId: string
    type: $Enums.StepType
    stepVersion: number
    display: XOR<StepDisplayCreateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StepDefinitionUpdateManyMutationInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    stepVersion?: IntFieldUpdateOperationsInput | number
    display?: XOR<StepDisplayUpdateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepDefinitionUncheckedUpdateManyInput = {
    stepId?: StringFieldUpdateOperationsInput | string
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    stepVersion?: IntFieldUpdateOperationsInput | number
    display?: XOR<StepDisplayUpdateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationProgressCreateInput = {
    id?: string
    country: string
    currentStepId: string
    completedSteps?: RegistrationProgressCreatecompletedStepsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutRegistrationProgressInput
  }

  export type RegistrationProgressUncheckedCreateInput = {
    id?: string
    driverId: string
    country: string
    currentStepId: string
    completedSteps?: RegistrationProgressCreatecompletedStepsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationProgressUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    currentStepId?: StringFieldUpdateOperationsInput | string
    completedSteps?: RegistrationProgressUpdatecompletedStepsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutRegistrationProgressNestedInput
  }

  export type RegistrationProgressUncheckedUpdateInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currentStepId?: StringFieldUpdateOperationsInput | string
    completedSteps?: RegistrationProgressUpdatecompletedStepsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationProgressCreateManyInput = {
    id?: string
    driverId: string
    country: string
    currentStepId: string
    completedSteps?: RegistrationProgressCreatecompletedStepsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationProgressUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    currentStepId?: StringFieldUpdateOperationsInput | string
    completedSteps?: RegistrationProgressUpdatecompletedStepsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationProgressUncheckedUpdateManyInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currentStepId?: StringFieldUpdateOperationsInput | string
    completedSteps?: RegistrationProgressUpdatecompletedStepsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type LocationNullableCompositeFilter = {
    equals?: LocationObjectEqualityInput | null
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
    isSet?: boolean
  }

  export type LocationObjectEqualityInput = {
    type: string
    coordinates?: number[]
    address?: string | null
    city: string
    state: string
    country: string
    postalCode: string
    placeId: string
    updatedAt: Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RiderNullableScalarRelationFilter = {
    is?: RiderWhereInput | null
    isNot?: RiderWhereInput | null
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type LocationOrderByInput = {
    type?: SortOrder
    coordinates?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    placeId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isVerifiedPhonenumber?: SortOrder
    profileURL?: SortOrder
    socketId?: SortOrder
    lastLocationUpdate?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    lockoutUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isVerifiedPhonenumber?: SortOrder
    profileURL?: SortOrder
    socketId?: SortOrder
    lastLocationUpdate?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    lockoutUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isVerifiedPhonenumber?: SortOrder
    profileURL?: SortOrder
    socketId?: SortOrder
    lastLocationUpdate?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    lockoutUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EmergencyContactsCompositeListFilter = {
    equals?: emergencyContactsObjectEqualityInput[]
    every?: emergencyContactsWhereInput
    some?: emergencyContactsWhereInput
    none?: emergencyContactsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type emergencyContactsObjectEqualityInput = {
    name: string
    phone: string
    isActive: boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RideListRelationFilter = {
    every?: RideWhereInput
    some?: RideWhereInput
    none?: RideWhereInput
  }

  export type emergencyContactsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type RideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
  }

  export type RiderAvgOrderByAggregateInput = {
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
  }

  export type RiderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
  }

  export type RiderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
  }

  export type RiderSumOrderByAggregateInput = {
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
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

  export type EnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type EnumVehicleTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVehicleTypeNullableFilter<$PrismaModel> | $Enums.VehicleType | null
    isSet?: boolean
  }

  export type AvailabilityNullableCompositeFilter = {
    equals?: AvailabilityObjectEqualityInput | null
    is?: AvailabilityWhereInput | null
    isNot?: AvailabilityWhereInput | null
    isSet?: boolean
  }

  export type AvailabilityObjectEqualityInput = {
    isAvailable: boolean
    workingHours?: ScheduleObjectEqualityInput[]
    currentShift?: ShiftObjectEqualityInput | null
    breakEndTime?: Date | string | null
    breakStartTime?: Date | string | null
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type EarningsNullableScalarRelationFilter = {
    is?: EarningsWhereInput | null
    isNot?: EarningsWhereInput | null
  }

  export type RegistrationProgressNullableScalarRelationFilter = {
    is?: RegistrationProgressWhereInput | null
    isNot?: RegistrationProgressWhereInput | null
  }

  export type ServiceAreaNullableScalarRelationFilter = {
    is?: ServiceAreaWhereInput | null
    isNot?: ServiceAreaWhereInput | null
  }

  export type AvailabilityOrderByInput = {
    isAvailable?: SortOrder
    workingHours?: ScheduleOrderByCompositeAggregateInput
    currentShift?: ShiftOrderByInput
    breakEndTime?: SortOrder
    breakStartTime?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    vehicleType?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    isVerified?: SortOrder
    isRegistrationComplete?: SortOrder
    serviceAreaId?: SortOrder
    isInServiceArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    vehicleType?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    isVerified?: SortOrder
    isRegistrationComplete?: SortOrder
    serviceAreaId?: SortOrder
    isInServiceArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    vehicleType?: SortOrder
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
    isVerified?: SortOrder
    isRegistrationComplete?: SortOrder
    serviceAreaId?: SortOrder
    isInServiceArea?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    rating?: SortOrder
    totalRides?: SortOrder
    cancelledRides?: SortOrder
  }

  export type EnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type EnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceAreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    licensePlate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type EnumStepTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StepType | EnumStepTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStepTypeFilter<$PrismaModel> | $Enums.StepType
  }

  export type DocumentImageCompositeFilter = {
    equals?: DocumentImageObjectEqualityInput
    is?: DocumentImageWhereInput
    isNot?: DocumentImageWhereInput
  }

  export type DocumentImageObjectEqualityInput = {
    front: string
    back?: string | null
  }

  export type DocumentImageOrderByInput = {
    front?: SortOrder
    back?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    type?: SortOrder
    documentId?: SortOrder
    name?: SortOrder
    number?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStepTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StepType | EnumStepTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStepTypeWithAggregatesFilter<$PrismaModel> | $Enums.StepType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStepTypeFilter<$PrismaModel>
    _max?: NestedEnumStepTypeFilter<$PrismaModel>
  }

  export type EarningsCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
  }

  export type EarningsAvgOrderByAggregateInput = {
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
  }

  export type EarningsMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
  }

  export type EarningsMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
  }

  export type EarningsSumOrderByAggregateInput = {
    totalEarnings?: SortOrder
    currentBalance?: SortOrder
  }

  export type LocationCompositeFilter = {
    equals?: LocationObjectEqualityInput
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type LocationCompositeListFilter = {
    equals?: LocationObjectEqualityInput[]
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type RiderScalarRelationFilter = {
    is?: RiderWhereInput
    isNot?: RiderWhereInput
  }

  export type LocationOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type RideCountOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    promoCodeId?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideAvgOrderByAggregateInput = {
    distance?: SortOrder
    duration?: SortOrder
  }

  export type RideMaxOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    promoCodeId?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideMinOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    promoCodeId?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideSumOrderByAggregateInput = {
    distance?: SortOrder
    duration?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    phoneCountryCode?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationStepListRelationFilter = {
    every?: RegistrationStepWhereInput
    some?: RegistrationStepWhereInput
    none?: RegistrationStepWhereInput
  }

  export type RegistrationStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type RegistrationStepDisplayCompositeFilter = {
    equals?: RegistrationStepDisplayObjectEqualityInput
    is?: RegistrationStepDisplayWhereInput
    isNot?: RegistrationStepDisplayWhereInput
  }

  export type RegistrationStepDisplayObjectEqualityInput = {
    title: string
    subtitle?: string | null
  }

  export type RegistrationStepOptionsCompositeFilter = {
    equals?: RegistrationStepOptionsObjectEqualityInput
    is?: RegistrationStepOptionsWhereInput
    isNot?: RegistrationStepOptionsWhereInput
  }

  export type RegistrationStepOptionsObjectEqualityInput = {
    isRecommended: boolean
    isDisabled: boolean
    redirectURL?: string | null
    isUpcoming: boolean
    isOptional: boolean
  }

  export type StepDefinitionNullableScalarRelationFilter = {
    is?: StepDefinitionWhereInput | null
    isNot?: StepDefinitionWhereInput | null
  }

  export type RegistrationTemplateScalarRelationFilter = {
    is?: RegistrationTemplateWhereInput
    isNot?: RegistrationTemplateWhereInput
  }

  export type RegistrationStepDisplayOrderByInput = {
    title?: SortOrder
    subtitle?: SortOrder
  }

  export type RegistrationStepOptionsOrderByInput = {
    isRecommended?: SortOrder
    isDisabled?: SortOrder
    redirectURL?: SortOrder
    isUpcoming?: SortOrder
    isOptional?: SortOrder
  }

  export type RegistrationStepCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type RegistrationStepMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type RegistrationStepMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type StepDisplayCompositeFilter = {
    equals?: StepDisplayObjectEqualityInput
    is?: StepDisplayWhereInput
    isNot?: StepDisplayWhereInput
  }

  export type StepDisplayObjectEqualityInput = {
    StepTitle: string
    StepPreviewTopInstruction?: string | null
    StepPreviewBottomInstruction?: string | null
    StepPreviewInstructionsList?: string[]
    StepPreviewImageURL?: string | null
    StepUploadActionText?: string | null
    StepUseMyPhoneText?: string | null
  }

  export type RegistrationStepScalarRelationFilter = {
    is?: RegistrationStepWhereInput
    isNot?: RegistrationStepWhereInput
  }

  export type StepDisplayOrderByInput = {
    StepTitle?: SortOrder
    StepPreviewTopInstruction?: SortOrder
    StepPreviewBottomInstruction?: SortOrder
    StepPreviewInstructionsList?: SortOrder
    StepPreviewImageURL?: SortOrder
    StepUploadActionText?: SortOrder
    StepUseMyPhoneText?: SortOrder
  }

  export type StepDefinitionStepIdTypeStepVersionCompoundUniqueInput = {
    stepId: string
    type: $Enums.StepType
    stepVersion: number
  }

  export type StepDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    type?: SortOrder
    stepVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepDefinitionAvgOrderByAggregateInput = {
    stepVersion?: SortOrder
  }

  export type StepDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    type?: SortOrder
    stepVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    type?: SortOrder
    stepVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StepDefinitionSumOrderByAggregateInput = {
    stepVersion?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RegistrationProgressCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    country?: SortOrder
    currentStepId?: SortOrder
    completedSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    country?: SortOrder
    currentStepId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationProgressMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    country?: SortOrder
    currentStepId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationNullableCreateEnvelopeInput = {
    set?: LocationCreateInput | null
  }

  export type LocationCreateInput = {
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    address?: string | null
    city: string
    state: string
    country: string
    postalCode: string
    placeId: string
    updatedAt?: Date | string
  }

  export type RiderCreateNestedOneWithoutUserInput = {
    create?: XOR<RiderCreateWithoutUserInput, RiderUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiderCreateOrConnectWithoutUserInput
    connect?: RiderWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutUserInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput
    connect?: DriverWhereUniqueInput
  }

  export type RiderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RiderCreateWithoutUserInput, RiderUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiderCreateOrConnectWithoutUserInput
    connect?: RiderWhereUniqueInput
  }

  export type DriverUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput
    connect?: DriverWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type LocationNullableUpdateEnvelopeInput = {
    set?: LocationCreateInput | null
    upsert?: LocationUpsertInput
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RiderUpdateOneWithoutUserNestedInput = {
    create?: XOR<RiderCreateWithoutUserInput, RiderUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiderCreateOrConnectWithoutUserInput
    upsert?: RiderUpsertWithoutUserInput
    disconnect?: RiderWhereInput | boolean
    delete?: RiderWhereInput | boolean
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutUserInput, RiderUpdateWithoutUserInput>, RiderUncheckedUpdateWithoutUserInput>
  }

  export type DriverUpdateOneWithoutUserNestedInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput
    upsert?: DriverUpsertWithoutUserInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutUserInput, DriverUpdateWithoutUserInput>, DriverUncheckedUpdateWithoutUserInput>
  }

  export type RiderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RiderCreateWithoutUserInput, RiderUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiderCreateOrConnectWithoutUserInput
    upsert?: RiderUpsertWithoutUserInput
    disconnect?: RiderWhereInput | boolean
    delete?: RiderWhereInput | boolean
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutUserInput, RiderUpdateWithoutUserInput>, RiderUncheckedUpdateWithoutUserInput>
  }

  export type DriverUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput
    upsert?: DriverUpsertWithoutUserInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutUserInput, DriverUpdateWithoutUserInput>, DriverUncheckedUpdateWithoutUserInput>
  }

  export type emergencyContactsListCreateEnvelopeInput = {
    set?: emergencyContactsCreateInput | emergencyContactsCreateInput[]
  }

  export type emergencyContactsCreateInput = {
    name: string
    phone: string
    isActive: boolean
  }

  export type UserCreateNestedOneWithoutRiderInput = {
    create?: XOR<UserCreateWithoutRiderInput, UserUncheckedCreateWithoutRiderInput>
    connectOrCreate?: UserCreateOrConnectWithoutRiderInput
    connect?: UserWhereUniqueInput
  }

  export type RideCreateNestedManyWithoutRiderInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type emergencyContactsListUpdateEnvelopeInput = {
    set?: emergencyContactsCreateInput | emergencyContactsCreateInput[]
    push?: emergencyContactsCreateInput | emergencyContactsCreateInput[]
    updateMany?: emergencyContactsUpdateManyInput
    deleteMany?: emergencyContactsDeleteManyInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRiderNestedInput = {
    create?: XOR<UserCreateWithoutRiderInput, UserUncheckedCreateWithoutRiderInput>
    connectOrCreate?: UserCreateOrConnectWithoutRiderInput
    upsert?: UserUpsertWithoutRiderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRiderInput, UserUpdateWithoutRiderInput>, UserUncheckedUpdateWithoutRiderInput>
  }

  export type RideUpdateManyWithoutRiderNestedInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutRiderInput | RideUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutRiderInput | RideUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: RideUpdateManyWithWhereWithoutRiderInput | RideUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutRiderInput | RideUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutRiderInput | RideUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: RideUpdateManyWithWhereWithoutRiderInput | RideUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type AvailabilityNullableCreateEnvelopeInput = {
    set?: AvailabilityCreateInput | null
  }

  export type AvailabilityCreateInput = {
    isAvailable?: boolean
    workingHours?: ScheduleCreateInput | ScheduleCreateInput[]
    currentShift?: ShiftCreateInput | null
    breakEndTime?: Date | string | null
    breakStartTime?: Date | string | null
  }

  export type UserCreateNestedOneWithoutDriverInput = {
    create?: XOR<UserCreateWithoutDriverInput, UserUncheckedCreateWithoutDriverInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutDriverInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type VehicleCreateNestedOneWithoutDriverInput = {
    create?: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDriverInput
    connect?: VehicleWhereUniqueInput
  }

  export type EarningsCreateNestedOneWithoutDriverInput = {
    create?: XOR<EarningsCreateWithoutDriverInput, EarningsUncheckedCreateWithoutDriverInput>
    connectOrCreate?: EarningsCreateOrConnectWithoutDriverInput
    connect?: EarningsWhereUniqueInput
  }

  export type RideCreateNestedManyWithoutDriverInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RegistrationProgressCreateNestedOneWithoutDriverInput = {
    create?: XOR<RegistrationProgressCreateWithoutDriverInput, RegistrationProgressUncheckedCreateWithoutDriverInput>
    connectOrCreate?: RegistrationProgressCreateOrConnectWithoutDriverInput
    connect?: RegistrationProgressWhereUniqueInput
  }

  export type ServiceAreaCreateNestedOneWithoutDriversInput = {
    create?: XOR<ServiceAreaCreateWithoutDriversInput, ServiceAreaUncheckedCreateWithoutDriversInput>
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutDriversInput
    connect?: ServiceAreaWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDriverInput
    connect?: VehicleWhereUniqueInput
  }

  export type EarningsUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<EarningsCreateWithoutDriverInput, EarningsUncheckedCreateWithoutDriverInput>
    connectOrCreate?: EarningsCreateOrConnectWithoutDriverInput
    connect?: EarningsWhereUniqueInput
  }

  export type RideUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<RegistrationProgressCreateWithoutDriverInput, RegistrationProgressUncheckedCreateWithoutDriverInput>
    connectOrCreate?: RegistrationProgressCreateOrConnectWithoutDriverInput
    connect?: RegistrationProgressWhereUniqueInput
  }

  export type EnumDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriverStatus
  }

  export type NullableEnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType | null
    unset?: boolean
  }

  export type AvailabilityNullableUpdateEnvelopeInput = {
    set?: AvailabilityCreateInput | null
    upsert?: AvailabilityUpsertInput
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutDriverNestedInput = {
    create?: XOR<UserCreateWithoutDriverInput, UserUncheckedCreateWithoutDriverInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverInput
    upsert?: UserUpsertWithoutDriverInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriverInput, UserUpdateWithoutDriverInput>, UserUncheckedUpdateWithoutDriverInput>
  }

  export type DocumentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDriverInput | DocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDriverInput | DocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDriverInput | DocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type VehicleUpdateOneWithoutDriverNestedInput = {
    create?: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDriverInput
    upsert?: VehicleUpsertWithoutDriverInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDriverInput, VehicleUpdateWithoutDriverInput>, VehicleUncheckedUpdateWithoutDriverInput>
  }

  export type EarningsUpdateOneWithoutDriverNestedInput = {
    create?: XOR<EarningsCreateWithoutDriverInput, EarningsUncheckedCreateWithoutDriverInput>
    connectOrCreate?: EarningsCreateOrConnectWithoutDriverInput
    upsert?: EarningsUpsertWithoutDriverInput
    disconnect?: EarningsWhereInput | boolean
    delete?: EarningsWhereInput | boolean
    connect?: EarningsWhereUniqueInput
    update?: XOR<XOR<EarningsUpdateToOneWithWhereWithoutDriverInput, EarningsUpdateWithoutDriverInput>, EarningsUncheckedUpdateWithoutDriverInput>
  }

  export type RideUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput | RideUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutDriverInput | RideUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput | RideUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RegistrationProgressUpdateOneWithoutDriverNestedInput = {
    create?: XOR<RegistrationProgressCreateWithoutDriverInput, RegistrationProgressUncheckedCreateWithoutDriverInput>
    connectOrCreate?: RegistrationProgressCreateOrConnectWithoutDriverInput
    upsert?: RegistrationProgressUpsertWithoutDriverInput
    disconnect?: RegistrationProgressWhereInput | boolean
    delete?: RegistrationProgressWhereInput | boolean
    connect?: RegistrationProgressWhereUniqueInput
    update?: XOR<XOR<RegistrationProgressUpdateToOneWithWhereWithoutDriverInput, RegistrationProgressUpdateWithoutDriverInput>, RegistrationProgressUncheckedUpdateWithoutDriverInput>
  }

  export type ServiceAreaUpdateOneWithoutDriversNestedInput = {
    create?: XOR<ServiceAreaCreateWithoutDriversInput, ServiceAreaUncheckedCreateWithoutDriversInput>
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutDriversInput
    upsert?: ServiceAreaUpsertWithoutDriversInput
    disconnect?: boolean
    delete?: ServiceAreaWhereInput | boolean
    connect?: ServiceAreaWhereUniqueInput
    update?: XOR<XOR<ServiceAreaUpdateToOneWithWhereWithoutDriversInput, ServiceAreaUpdateWithoutDriversInput>, ServiceAreaUncheckedUpdateWithoutDriversInput>
  }

  export type DocumentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDriverInput | DocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDriverInput | DocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDriverInput | DocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDriverInput
    upsert?: VehicleUpsertWithoutDriverInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDriverInput, VehicleUpdateWithoutDriverInput>, VehicleUncheckedUpdateWithoutDriverInput>
  }

  export type EarningsUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<EarningsCreateWithoutDriverInput, EarningsUncheckedCreateWithoutDriverInput>
    connectOrCreate?: EarningsCreateOrConnectWithoutDriverInput
    upsert?: EarningsUpsertWithoutDriverInput
    disconnect?: EarningsWhereInput | boolean
    delete?: EarningsWhereInput | boolean
    connect?: EarningsWhereUniqueInput
    update?: XOR<XOR<EarningsUpdateToOneWithWhereWithoutDriverInput, EarningsUpdateWithoutDriverInput>, EarningsUncheckedUpdateWithoutDriverInput>
  }

  export type RideUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput | RideUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutDriverInput | RideUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput | RideUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<RegistrationProgressCreateWithoutDriverInput, RegistrationProgressUncheckedCreateWithoutDriverInput>
    connectOrCreate?: RegistrationProgressCreateOrConnectWithoutDriverInput
    upsert?: RegistrationProgressUpsertWithoutDriverInput
    disconnect?: RegistrationProgressWhereInput | boolean
    delete?: RegistrationProgressWhereInput | boolean
    connect?: RegistrationProgressWhereUniqueInput
    update?: XOR<XOR<RegistrationProgressUpdateToOneWithWhereWithoutDriverInput, RegistrationProgressUpdateWithoutDriverInput>, RegistrationProgressUncheckedUpdateWithoutDriverInput>
  }

  export type DriverCreateNestedManyWithoutServiceAreaInput = {
    create?: XOR<DriverCreateWithoutServiceAreaInput, DriverUncheckedCreateWithoutServiceAreaInput> | DriverCreateWithoutServiceAreaInput[] | DriverUncheckedCreateWithoutServiceAreaInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutServiceAreaInput | DriverCreateOrConnectWithoutServiceAreaInput[]
    createMany?: DriverCreateManyServiceAreaInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutServiceAreaInput = {
    create?: XOR<DriverCreateWithoutServiceAreaInput, DriverUncheckedCreateWithoutServiceAreaInput> | DriverCreateWithoutServiceAreaInput[] | DriverUncheckedCreateWithoutServiceAreaInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutServiceAreaInput | DriverCreateOrConnectWithoutServiceAreaInput[]
    createMany?: DriverCreateManyServiceAreaInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type DriverUpdateManyWithoutServiceAreaNestedInput = {
    create?: XOR<DriverCreateWithoutServiceAreaInput, DriverUncheckedCreateWithoutServiceAreaInput> | DriverCreateWithoutServiceAreaInput[] | DriverUncheckedCreateWithoutServiceAreaInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutServiceAreaInput | DriverCreateOrConnectWithoutServiceAreaInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutServiceAreaInput | DriverUpsertWithWhereUniqueWithoutServiceAreaInput[]
    createMany?: DriverCreateManyServiceAreaInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutServiceAreaInput | DriverUpdateWithWhereUniqueWithoutServiceAreaInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutServiceAreaInput | DriverUpdateManyWithWhereWithoutServiceAreaInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutServiceAreaNestedInput = {
    create?: XOR<DriverCreateWithoutServiceAreaInput, DriverUncheckedCreateWithoutServiceAreaInput> | DriverCreateWithoutServiceAreaInput[] | DriverUncheckedCreateWithoutServiceAreaInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutServiceAreaInput | DriverCreateOrConnectWithoutServiceAreaInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutServiceAreaInput | DriverUpsertWithWhereUniqueWithoutServiceAreaInput[]
    createMany?: DriverCreateManyServiceAreaInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutServiceAreaInput | DriverUpdateWithWhereUniqueWithoutServiceAreaInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutServiceAreaInput | DriverUpdateManyWithWhereWithoutServiceAreaInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type DriverCreateNestedOneWithoutVehicleInput = {
    create?: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleInput
    upsert?: DriverUpsertWithoutVehicleInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutVehicleInput, DriverUpdateWithoutVehicleInput>, DriverUncheckedUpdateWithoutVehicleInput>
  }

  export type DocumentImageCreateEnvelopeInput = {
    set?: DocumentImageCreateInput
  }

  export type DocumentImageCreateInput = {
    front: string
    back?: string | null
  }

  export type DriverCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDocumentsInput
    connect?: DriverWhereUniqueInput
  }

  export type EnumStepTypeFieldUpdateOperationsInput = {
    set?: $Enums.StepType
  }

  export type DocumentImageUpdateEnvelopeInput = {
    set?: DocumentImageCreateInput
    update?: DocumentImageUpdateInput
  }

  export type DriverUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDocumentsInput
    upsert?: DriverUpsertWithoutDocumentsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutDocumentsInput, DriverUpdateWithoutDocumentsInput>, DriverUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverCreateNestedOneWithoutEarningsInput = {
    create?: XOR<DriverCreateWithoutEarningsInput, DriverUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutEarningsInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutEarningsNestedInput = {
    create?: XOR<DriverCreateWithoutEarningsInput, DriverUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutEarningsInput
    upsert?: DriverUpsertWithoutEarningsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutEarningsInput, DriverUpdateWithoutEarningsInput>, DriverUncheckedUpdateWithoutEarningsInput>
  }

  export type LocationCreateEnvelopeInput = {
    set?: LocationCreateInput
  }

  export type LocationListCreateEnvelopeInput = {
    set?: LocationCreateInput | LocationCreateInput[]
  }

  export type RiderCreateNestedOneWithoutRideHistoryInput = {
    create?: XOR<RiderCreateWithoutRideHistoryInput, RiderUncheckedCreateWithoutRideHistoryInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRideHistoryInput
    connect?: RiderWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutRideInput = {
    create?: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRideInput
    connect?: DriverWhereUniqueInput
  }

  export type LocationUpdateEnvelopeInput = {
    set?: LocationCreateInput
    update?: LocationUpdateInput
  }

  export type LocationListUpdateEnvelopeInput = {
    set?: LocationCreateInput | LocationCreateInput[]
    push?: LocationCreateInput | LocationCreateInput[]
    updateMany?: LocationUpdateManyInput
    deleteMany?: LocationDeleteManyInput
  }

  export type RiderUpdateOneRequiredWithoutRideHistoryNestedInput = {
    create?: XOR<RiderCreateWithoutRideHistoryInput, RiderUncheckedCreateWithoutRideHistoryInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRideHistoryInput
    upsert?: RiderUpsertWithoutRideHistoryInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutRideHistoryInput, RiderUpdateWithoutRideHistoryInput>, RiderUncheckedUpdateWithoutRideHistoryInput>
  }

  export type DriverUpdateOneWithoutRideNestedInput = {
    create?: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRideInput
    upsert?: DriverUpsertWithoutRideInput
    disconnect?: boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRideInput, DriverUpdateWithoutRideInput>, DriverUncheckedUpdateWithoutRideInput>
  }

  export type RegistrationStepCreateNestedManyWithoutTemplateInput = {
    create?: XOR<RegistrationStepCreateWithoutTemplateInput, RegistrationStepUncheckedCreateWithoutTemplateInput> | RegistrationStepCreateWithoutTemplateInput[] | RegistrationStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RegistrationStepCreateOrConnectWithoutTemplateInput | RegistrationStepCreateOrConnectWithoutTemplateInput[]
    createMany?: RegistrationStepCreateManyTemplateInputEnvelope
    connect?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
  }

  export type RegistrationStepUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<RegistrationStepCreateWithoutTemplateInput, RegistrationStepUncheckedCreateWithoutTemplateInput> | RegistrationStepCreateWithoutTemplateInput[] | RegistrationStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RegistrationStepCreateOrConnectWithoutTemplateInput | RegistrationStepCreateOrConnectWithoutTemplateInput[]
    createMany?: RegistrationStepCreateManyTemplateInputEnvelope
    connect?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
  }

  export type RegistrationStepUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<RegistrationStepCreateWithoutTemplateInput, RegistrationStepUncheckedCreateWithoutTemplateInput> | RegistrationStepCreateWithoutTemplateInput[] | RegistrationStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RegistrationStepCreateOrConnectWithoutTemplateInput | RegistrationStepCreateOrConnectWithoutTemplateInput[]
    upsert?: RegistrationStepUpsertWithWhereUniqueWithoutTemplateInput | RegistrationStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: RegistrationStepCreateManyTemplateInputEnvelope
    set?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    disconnect?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    delete?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    connect?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    update?: RegistrationStepUpdateWithWhereUniqueWithoutTemplateInput | RegistrationStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: RegistrationStepUpdateManyWithWhereWithoutTemplateInput | RegistrationStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: RegistrationStepScalarWhereInput | RegistrationStepScalarWhereInput[]
  }

  export type RegistrationStepUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<RegistrationStepCreateWithoutTemplateInput, RegistrationStepUncheckedCreateWithoutTemplateInput> | RegistrationStepCreateWithoutTemplateInput[] | RegistrationStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: RegistrationStepCreateOrConnectWithoutTemplateInput | RegistrationStepCreateOrConnectWithoutTemplateInput[]
    upsert?: RegistrationStepUpsertWithWhereUniqueWithoutTemplateInput | RegistrationStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: RegistrationStepCreateManyTemplateInputEnvelope
    set?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    disconnect?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    delete?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    connect?: RegistrationStepWhereUniqueInput | RegistrationStepWhereUniqueInput[]
    update?: RegistrationStepUpdateWithWhereUniqueWithoutTemplateInput | RegistrationStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: RegistrationStepUpdateManyWithWhereWithoutTemplateInput | RegistrationStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: RegistrationStepScalarWhereInput | RegistrationStepScalarWhereInput[]
  }

  export type RegistrationStepDisplayCreateEnvelopeInput = {
    set?: RegistrationStepDisplayCreateInput
  }

  export type RegistrationStepDisplayCreateInput = {
    title: string
    subtitle?: string | null
  }

  export type RegistrationStepOptionsCreateEnvelopeInput = {
    set?: RegistrationStepOptionsCreateInput
  }

  export type RegistrationStepOptionsCreateInput = {
    isRecommended: boolean
    isDisabled: boolean
    redirectURL?: string | null
    isUpcoming: boolean
    isOptional: boolean
  }

  export type StepDefinitionCreateNestedOneWithoutStepInput = {
    create?: XOR<StepDefinitionCreateWithoutStepInput, StepDefinitionUncheckedCreateWithoutStepInput>
    connectOrCreate?: StepDefinitionCreateOrConnectWithoutStepInput
    connect?: StepDefinitionWhereUniqueInput
  }

  export type RegistrationTemplateCreateNestedOneWithoutStepsInput = {
    create?: XOR<RegistrationTemplateCreateWithoutStepsInput, RegistrationTemplateUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RegistrationTemplateCreateOrConnectWithoutStepsInput
    connect?: RegistrationTemplateWhereUniqueInput
  }

  export type StepDefinitionUncheckedCreateNestedOneWithoutStepInput = {
    create?: XOR<StepDefinitionCreateWithoutStepInput, StepDefinitionUncheckedCreateWithoutStepInput>
    connectOrCreate?: StepDefinitionCreateOrConnectWithoutStepInput
    connect?: StepDefinitionWhereUniqueInput
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type RegistrationStepDisplayUpdateEnvelopeInput = {
    set?: RegistrationStepDisplayCreateInput
    update?: RegistrationStepDisplayUpdateInput
  }

  export type RegistrationStepOptionsUpdateEnvelopeInput = {
    set?: RegistrationStepOptionsCreateInput
    update?: RegistrationStepOptionsUpdateInput
  }

  export type StepDefinitionUpdateOneWithoutStepNestedInput = {
    create?: XOR<StepDefinitionCreateWithoutStepInput, StepDefinitionUncheckedCreateWithoutStepInput>
    connectOrCreate?: StepDefinitionCreateOrConnectWithoutStepInput
    upsert?: StepDefinitionUpsertWithoutStepInput
    disconnect?: StepDefinitionWhereInput | boolean
    delete?: StepDefinitionWhereInput | boolean
    connect?: StepDefinitionWhereUniqueInput
    update?: XOR<XOR<StepDefinitionUpdateToOneWithWhereWithoutStepInput, StepDefinitionUpdateWithoutStepInput>, StepDefinitionUncheckedUpdateWithoutStepInput>
  }

  export type RegistrationTemplateUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<RegistrationTemplateCreateWithoutStepsInput, RegistrationTemplateUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RegistrationTemplateCreateOrConnectWithoutStepsInput
    upsert?: RegistrationTemplateUpsertWithoutStepsInput
    connect?: RegistrationTemplateWhereUniqueInput
    update?: XOR<XOR<RegistrationTemplateUpdateToOneWithWhereWithoutStepsInput, RegistrationTemplateUpdateWithoutStepsInput>, RegistrationTemplateUncheckedUpdateWithoutStepsInput>
  }

  export type StepDefinitionUncheckedUpdateOneWithoutStepNestedInput = {
    create?: XOR<StepDefinitionCreateWithoutStepInput, StepDefinitionUncheckedCreateWithoutStepInput>
    connectOrCreate?: StepDefinitionCreateOrConnectWithoutStepInput
    upsert?: StepDefinitionUpsertWithoutStepInput
    disconnect?: StepDefinitionWhereInput | boolean
    delete?: StepDefinitionWhereInput | boolean
    connect?: StepDefinitionWhereUniqueInput
    update?: XOR<XOR<StepDefinitionUpdateToOneWithWhereWithoutStepInput, StepDefinitionUpdateWithoutStepInput>, StepDefinitionUncheckedUpdateWithoutStepInput>
  }

  export type StepDisplayCreateEnvelopeInput = {
    set?: StepDisplayCreateInput
  }

  export type StepDisplayCreateInput = {
    StepTitle: string
    StepPreviewTopInstruction?: string | null
    StepPreviewBottomInstruction?: string | null
    StepPreviewInstructionsList?: StepDisplayCreateStepPreviewInstructionsListInput | string[]
    StepPreviewImageURL?: string | null
    StepUploadActionText?: string | null
    StepUseMyPhoneText?: string | null
  }

  export type RegistrationStepCreateNestedOneWithoutDefinitionInput = {
    create?: XOR<RegistrationStepCreateWithoutDefinitionInput, RegistrationStepUncheckedCreateWithoutDefinitionInput>
    connectOrCreate?: RegistrationStepCreateOrConnectWithoutDefinitionInput
    connect?: RegistrationStepWhereUniqueInput
  }

  export type StepDisplayUpdateEnvelopeInput = {
    set?: StepDisplayCreateInput
    update?: StepDisplayUpdateInput
  }

  export type RegistrationStepUpdateOneRequiredWithoutDefinitionNestedInput = {
    create?: XOR<RegistrationStepCreateWithoutDefinitionInput, RegistrationStepUncheckedCreateWithoutDefinitionInput>
    connectOrCreate?: RegistrationStepCreateOrConnectWithoutDefinitionInput
    upsert?: RegistrationStepUpsertWithoutDefinitionInput
    connect?: RegistrationStepWhereUniqueInput
    update?: XOR<XOR<RegistrationStepUpdateToOneWithWhereWithoutDefinitionInput, RegistrationStepUpdateWithoutDefinitionInput>, RegistrationStepUncheckedUpdateWithoutDefinitionInput>
  }

  export type RegistrationProgressCreatecompletedStepsInput = {
    set: string[]
  }

  export type DriverCreateNestedOneWithoutRegistrationProgressInput = {
    create?: XOR<DriverCreateWithoutRegistrationProgressInput, DriverUncheckedCreateWithoutRegistrationProgressInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRegistrationProgressInput
    connect?: DriverWhereUniqueInput
  }

  export type RegistrationProgressUpdatecompletedStepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DriverUpdateOneRequiredWithoutRegistrationProgressNestedInput = {
    create?: XOR<DriverCreateWithoutRegistrationProgressInput, DriverUncheckedCreateWithoutRegistrationProgressInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRegistrationProgressInput
    upsert?: DriverUpsertWithoutRegistrationProgressInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRegistrationProgressInput, DriverUpdateWithoutRegistrationProgressInput>, DriverUncheckedUpdateWithoutRegistrationProgressInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    type?: StringFilter<"Location"> | string
    coordinates?: FloatNullableListFilter<"Location">
    address?: StringNullableFilter<"Location"> | string | null
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    placeId?: StringFilter<"Location"> | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type emergencyContactsWhereInput = {
    AND?: emergencyContactsWhereInput | emergencyContactsWhereInput[]
    OR?: emergencyContactsWhereInput[]
    NOT?: emergencyContactsWhereInput | emergencyContactsWhereInput[]
    name?: StringFilter<"emergencyContacts"> | string
    phone?: StringFilter<"emergencyContacts"> | string
    isActive?: BoolFilter<"emergencyContacts"> | boolean
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

  export type NestedEnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type NestedEnumVehicleTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVehicleTypeNullableFilter<$PrismaModel> | $Enums.VehicleType | null
    isSet?: boolean
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    isAvailable?: BoolFilter<"Availability"> | boolean
    workingHours?: ScheduleCompositeListFilter | ScheduleObjectEqualityInput[]
    currentShift?: XOR<ShiftNullableCompositeFilter, ShiftObjectEqualityInput> | null
    breakEndTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    breakStartTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
  }

  export type ScheduleObjectEqualityInput = {
    dayOfWeek: number
    startTime: string
    endTime: string
    isActive: boolean
  }

  export type ShiftObjectEqualityInput = {
    StartTime: Date | string
    endTime: Date | string
    status: $Enums.ShiftStatus
  }

  export type ScheduleOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftOrderByInput = {
    StartTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedEnumStepTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StepType | EnumStepTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStepTypeFilter<$PrismaModel> | $Enums.StepType
  }

  export type DocumentImageWhereInput = {
    AND?: DocumentImageWhereInput | DocumentImageWhereInput[]
    OR?: DocumentImageWhereInput[]
    NOT?: DocumentImageWhereInput | DocumentImageWhereInput[]
    front?: StringFilter<"DocumentImage"> | string
    back?: StringNullableFilter<"DocumentImage"> | string | null
  }

  export type NestedEnumStepTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StepType | EnumStepTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepType[] | ListEnumStepTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStepTypeWithAggregatesFilter<$PrismaModel> | $Enums.StepType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStepTypeFilter<$PrismaModel>
    _max?: NestedEnumStepTypeFilter<$PrismaModel>
  }

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type RegistrationStepDisplayWhereInput = {
    AND?: RegistrationStepDisplayWhereInput | RegistrationStepDisplayWhereInput[]
    OR?: RegistrationStepDisplayWhereInput[]
    NOT?: RegistrationStepDisplayWhereInput | RegistrationStepDisplayWhereInput[]
    title?: StringFilter<"RegistrationStepDisplay"> | string
    subtitle?: StringNullableFilter<"RegistrationStepDisplay"> | string | null
  }

  export type RegistrationStepOptionsWhereInput = {
    AND?: RegistrationStepOptionsWhereInput | RegistrationStepOptionsWhereInput[]
    OR?: RegistrationStepOptionsWhereInput[]
    NOT?: RegistrationStepOptionsWhereInput | RegistrationStepOptionsWhereInput[]
    isRecommended?: BoolFilter<"RegistrationStepOptions"> | boolean
    isDisabled?: BoolFilter<"RegistrationStepOptions"> | boolean
    redirectURL?: StringNullableFilter<"RegistrationStepOptions"> | string | null
    isUpcoming?: BoolFilter<"RegistrationStepOptions"> | boolean
    isOptional?: BoolFilter<"RegistrationStepOptions"> | boolean
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type StepDisplayWhereInput = {
    AND?: StepDisplayWhereInput | StepDisplayWhereInput[]
    OR?: StepDisplayWhereInput[]
    NOT?: StepDisplayWhereInput | StepDisplayWhereInput[]
    StepTitle?: StringFilter<"StepDisplay"> | string
    StepPreviewTopInstruction?: StringNullableFilter<"StepDisplay"> | string | null
    StepPreviewBottomInstruction?: StringNullableFilter<"StepDisplay"> | string | null
    StepPreviewInstructionsList?: StringNullableListFilter<"StepDisplay">
    StepPreviewImageURL?: StringNullableFilter<"StepDisplay"> | string | null
    StepUploadActionText?: StringNullableFilter<"StepDisplay"> | string | null
    StepUseMyPhoneText?: StringNullableFilter<"StepDisplay"> | string | null
  }

  export type LocationCreatecoordinatesInput = {
    set: number[]
  }

  export type RiderCreateWithoutUserInput = {
    id?: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
    rideHistory?: RideCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutUserInput = {
    id?: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
    rideHistory?: RideUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutUserInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutUserInput, RiderUncheckedCreateWithoutUserInput>
  }

  export type DriverCreateWithoutUserInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutUserInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
  }

  export type LocationUpsertInput = {
    set: LocationCreateInput | null
    update: LocationUpdateInput
  }

  export type RiderUpsertWithoutUserInput = {
    update: XOR<RiderUpdateWithoutUserInput, RiderUncheckedUpdateWithoutUserInput>
    create: XOR<RiderCreateWithoutUserInput, RiderUncheckedCreateWithoutUserInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutUserInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutUserInput, RiderUncheckedUpdateWithoutUserInput>
  }

  export type RiderUpdateWithoutUserInput = {
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    rideHistory?: RideUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutUserInput = {
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    rideHistory?: RideUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type DriverUpsertWithoutUserInput = {
    update: XOR<DriverUpdateWithoutUserInput, DriverUncheckedUpdateWithoutUserInput>
    create: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutUserInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutUserInput, DriverUncheckedUpdateWithoutUserInput>
  }

  export type DriverUpdateWithoutUserInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutUserInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type UserCreateWithoutRiderInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRiderInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRiderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRiderInput, UserUncheckedCreateWithoutRiderInput>
  }

  export type RideCreateWithoutRiderInput = {
    id?: string
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutRideInput
  }

  export type RideUncheckedCreateWithoutRiderInput = {
    id?: string
    driverId?: string | null
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutRiderInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput>
  }

  export type RideCreateManyRiderInputEnvelope = {
    data: RideCreateManyRiderInput | RideCreateManyRiderInput[]
  }

  export type emergencyContactsUpdateManyInput = {
    where: emergencyContactsWhereInput
    data: emergencyContactsUpdateInput
  }

  export type emergencyContactsDeleteManyInput = {
    where: emergencyContactsWhereInput
  }

  export type UserUpsertWithoutRiderInput = {
    update: XOR<UserUpdateWithoutRiderInput, UserUncheckedUpdateWithoutRiderInput>
    create: XOR<UserCreateWithoutRiderInput, UserUncheckedCreateWithoutRiderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRiderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRiderInput, UserUncheckedUpdateWithoutRiderInput>
  }

  export type UserUpdateWithoutRiderInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRiderInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RideUpsertWithWhereUniqueWithoutRiderInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutRiderInput, RideUncheckedUpdateWithoutRiderInput>
    create: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput>
  }

  export type RideUpdateWithWhereUniqueWithoutRiderInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutRiderInput, RideUncheckedUpdateWithoutRiderInput>
  }

  export type RideUpdateManyWithWhereWithoutRiderInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutRiderInput>
  }

  export type RideScalarWhereInput = {
    AND?: RideScalarWhereInput | RideScalarWhereInput[]
    OR?: RideScalarWhereInput[]
    NOT?: RideScalarWhereInput | RideScalarWhereInput[]
    id?: StringFilter<"Ride"> | string
    riderId?: StringFilter<"Ride"> | string
    driverId?: StringNullableFilter<"Ride"> | string | null
    distance?: FloatFilter<"Ride"> | number
    duration?: IntFilter<"Ride"> | number
    promoCodeId?: StringNullableFilter<"Ride"> | string | null
    cancelReason?: StringNullableFilter<"Ride"> | string | null
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
  }

  export type ScheduleCreateInput = {
    dayOfWeek: number
    startTime: string
    endTime: string
    isActive?: boolean
  }

  export type ShiftCreateInput = {
    StartTime: Date | string
    endTime: Date | string
    status?: $Enums.ShiftStatus
  }

  export type UserCreateWithoutDriverInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDriverInput = {
    id?: string
    role: $Enums.Role
    firstname: string
    lastname?: string | null
    email?: string | null
    phonenumber?: string | null
    phoneCountryCode?: string | null
    isVerifiedEmail?: boolean | null
    isVerifiedPhonenumber?: boolean | null
    profileURL?: string | null
    socketId?: string | null
    location?: XOR<LocationNullableCreateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: Date | string | null
    isActive?: boolean
    lastLoginAt?: Date | string | null
    lockoutUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDriverInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriverInput, UserUncheckedCreateWithoutDriverInput>
  }

  export type DocumentCreateWithoutDriverInput = {
    id?: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    imageUrl: XOR<DocumentImageCreateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutDriverInput = {
    id?: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    imageUrl: XOR<DocumentImageCreateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput>
  }

  export type DocumentCreateManyDriverInputEnvelope = {
    data: DocumentCreateManyDriverInput | DocumentCreateManyDriverInput[]
  }

  export type VehicleCreateWithoutDriverInput = {
    id?: string
    model: string
    year: number
    color: string
    licensePlate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUncheckedCreateWithoutDriverInput = {
    id?: string
    model: string
    year: number
    color: string
    licensePlate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutDriverInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
  }

  export type EarningsCreateWithoutDriverInput = {
    id?: string
    totalEarnings?: number
    currentBalance?: number
  }

  export type EarningsUncheckedCreateWithoutDriverInput = {
    id?: string
    totalEarnings?: number
    currentBalance?: number
  }

  export type EarningsCreateOrConnectWithoutDriverInput = {
    where: EarningsWhereUniqueInput
    create: XOR<EarningsCreateWithoutDriverInput, EarningsUncheckedCreateWithoutDriverInput>
  }

  export type RideCreateWithoutDriverInput = {
    id?: string
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRideHistoryInput
  }

  export type RideUncheckedCreateWithoutDriverInput = {
    id?: string
    riderId: string
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutDriverInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput>
  }

  export type RideCreateManyDriverInputEnvelope = {
    data: RideCreateManyDriverInput | RideCreateManyDriverInput[]
  }

  export type RegistrationProgressCreateWithoutDriverInput = {
    id?: string
    country: string
    currentStepId: string
    completedSteps?: RegistrationProgressCreatecompletedStepsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationProgressUncheckedCreateWithoutDriverInput = {
    id?: string
    country: string
    currentStepId: string
    completedSteps?: RegistrationProgressCreatecompletedStepsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationProgressCreateOrConnectWithoutDriverInput = {
    where: RegistrationProgressWhereUniqueInput
    create: XOR<RegistrationProgressCreateWithoutDriverInput, RegistrationProgressUncheckedCreateWithoutDriverInput>
  }

  export type ServiceAreaCreateWithoutDriversInput = {
    id?: string
    name: string
    type?: string
    coordinates: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAreaUncheckedCreateWithoutDriversInput = {
    id?: string
    name: string
    type?: string
    coordinates: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceAreaCreateOrConnectWithoutDriversInput = {
    where: ServiceAreaWhereUniqueInput
    create: XOR<ServiceAreaCreateWithoutDriversInput, ServiceAreaUncheckedCreateWithoutDriversInput>
  }

  export type AvailabilityUpsertInput = {
    set: AvailabilityCreateInput | null
    update: AvailabilityUpdateInput
  }

  export type UserUpsertWithoutDriverInput = {
    update: XOR<UserUpdateWithoutDriverInput, UserUncheckedUpdateWithoutDriverInput>
    create: XOR<UserCreateWithoutDriverInput, UserUncheckedCreateWithoutDriverInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriverInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriverInput, UserUncheckedUpdateWithoutDriverInput>
  }

  export type UserUpdateWithoutDriverInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDriverInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCountryCode?: NullableStringFieldUpdateOperationsInput | string | null
    isVerifiedEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVerifiedPhonenumber?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileURL?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: XOR<LocationNullableUpdateEnvelopeInput, LocationCreateInput> | null
    lastLocationUpdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockoutUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutDriverInput, DocumentUncheckedUpdateWithoutDriverInput>
    create: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutDriverInput, DocumentUncheckedUpdateWithoutDriverInput>
  }

  export type DocumentUpdateManyWithWhereWithoutDriverInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutDriverInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    driverId?: StringFilter<"Document"> | string
    type?: EnumStepTypeFilter<"Document"> | $Enums.StepType
    documentId?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    number?: StringFilter<"Document"> | string
    isVerified?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type VehicleUpsertWithoutDriverInput = {
    update: XOR<VehicleUpdateWithoutDriverInput, VehicleUncheckedUpdateWithoutDriverInput>
    create: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDriverInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDriverInput, VehicleUncheckedUpdateWithoutDriverInput>
  }

  export type VehicleUpdateWithoutDriverInput = {
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateWithoutDriverInput = {
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsUpsertWithoutDriverInput = {
    update: XOR<EarningsUpdateWithoutDriverInput, EarningsUncheckedUpdateWithoutDriverInput>
    create: XOR<EarningsCreateWithoutDriverInput, EarningsUncheckedCreateWithoutDriverInput>
    where?: EarningsWhereInput
  }

  export type EarningsUpdateToOneWithWhereWithoutDriverInput = {
    where?: EarningsWhereInput
    data: XOR<EarningsUpdateWithoutDriverInput, EarningsUncheckedUpdateWithoutDriverInput>
  }

  export type EarningsUpdateWithoutDriverInput = {
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type EarningsUncheckedUpdateWithoutDriverInput = {
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type RideUpsertWithWhereUniqueWithoutDriverInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutDriverInput, RideUncheckedUpdateWithoutDriverInput>
    create: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput>
  }

  export type RideUpdateWithWhereUniqueWithoutDriverInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutDriverInput, RideUncheckedUpdateWithoutDriverInput>
  }

  export type RideUpdateManyWithWhereWithoutDriverInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutDriverInput>
  }

  export type RegistrationProgressUpsertWithoutDriverInput = {
    update: XOR<RegistrationProgressUpdateWithoutDriverInput, RegistrationProgressUncheckedUpdateWithoutDriverInput>
    create: XOR<RegistrationProgressCreateWithoutDriverInput, RegistrationProgressUncheckedCreateWithoutDriverInput>
    where?: RegistrationProgressWhereInput
  }

  export type RegistrationProgressUpdateToOneWithWhereWithoutDriverInput = {
    where?: RegistrationProgressWhereInput
    data: XOR<RegistrationProgressUpdateWithoutDriverInput, RegistrationProgressUncheckedUpdateWithoutDriverInput>
  }

  export type RegistrationProgressUpdateWithoutDriverInput = {
    country?: StringFieldUpdateOperationsInput | string
    currentStepId?: StringFieldUpdateOperationsInput | string
    completedSteps?: RegistrationProgressUpdatecompletedStepsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationProgressUncheckedUpdateWithoutDriverInput = {
    country?: StringFieldUpdateOperationsInput | string
    currentStepId?: StringFieldUpdateOperationsInput | string
    completedSteps?: RegistrationProgressUpdatecompletedStepsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUpsertWithoutDriversInput = {
    update: XOR<ServiceAreaUpdateWithoutDriversInput, ServiceAreaUncheckedUpdateWithoutDriversInput>
    create: XOR<ServiceAreaCreateWithoutDriversInput, ServiceAreaUncheckedCreateWithoutDriversInput>
    where?: ServiceAreaWhereInput
  }

  export type ServiceAreaUpdateToOneWithWhereWithoutDriversInput = {
    where?: ServiceAreaWhereInput
    data: XOR<ServiceAreaUpdateWithoutDriversInput, ServiceAreaUncheckedUpdateWithoutDriversInput>
  }

  export type ServiceAreaUpdateWithoutDriversInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUncheckedUpdateWithoutDriversInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateWithoutServiceAreaInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutServiceAreaInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutServiceAreaInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutServiceAreaInput, DriverUncheckedCreateWithoutServiceAreaInput>
  }

  export type DriverCreateManyServiceAreaInputEnvelope = {
    data: DriverCreateManyServiceAreaInput | DriverCreateManyServiceAreaInput[]
  }

  export type DriverUpsertWithWhereUniqueWithoutServiceAreaInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutServiceAreaInput, DriverUncheckedUpdateWithoutServiceAreaInput>
    create: XOR<DriverCreateWithoutServiceAreaInput, DriverUncheckedCreateWithoutServiceAreaInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutServiceAreaInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutServiceAreaInput, DriverUncheckedUpdateWithoutServiceAreaInput>
  }

  export type DriverUpdateManyWithWhereWithoutServiceAreaInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutServiceAreaInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: StringFilter<"Driver"> | string
    userId?: StringFilter<"Driver"> | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    vehicleType?: EnumVehicleTypeNullableFilter<"Driver"> | $Enums.VehicleType | null
    rating?: FloatFilter<"Driver"> | number
    totalRides?: IntFilter<"Driver"> | number
    cancelledRides?: IntFilter<"Driver"> | number
    isVerified?: BoolFilter<"Driver"> | boolean
    isRegistrationComplete?: BoolFilter<"Driver"> | boolean
    serviceAreaId?: StringNullableFilter<"Driver"> | string | null
    isInServiceArea?: BoolFilter<"Driver"> | boolean
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
  }

  export type DriverCreateWithoutVehicleInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutVehicleInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
  }

  export type DriverUpsertWithoutVehicleInput = {
    update: XOR<DriverUpdateWithoutVehicleInput, DriverUncheckedUpdateWithoutVehicleInput>
    create: XOR<DriverCreateWithoutVehicleInput, DriverUncheckedCreateWithoutVehicleInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutVehicleInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutVehicleInput, DriverUncheckedUpdateWithoutVehicleInput>
  }

  export type DriverUpdateWithoutVehicleInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutVehicleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type DriverCreateWithoutDocumentsInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutDocumentsInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutDocumentsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentImageUpdateInput = {
    front?: StringFieldUpdateOperationsInput | string
    back?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverUpsertWithoutDocumentsInput = {
    update: XOR<DriverUpdateWithoutDocumentsInput, DriverUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutDocumentsInput, DriverUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverUpdateWithoutDocumentsInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutDocumentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type DriverCreateWithoutEarningsInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutEarningsInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutEarningsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutEarningsInput, DriverUncheckedCreateWithoutEarningsInput>
  }

  export type DriverUpsertWithoutEarningsInput = {
    update: XOR<DriverUpdateWithoutEarningsInput, DriverUncheckedUpdateWithoutEarningsInput>
    create: XOR<DriverCreateWithoutEarningsInput, DriverUncheckedCreateWithoutEarningsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutEarningsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutEarningsInput, DriverUncheckedUpdateWithoutEarningsInput>
  }

  export type DriverUpdateWithoutEarningsInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutEarningsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type RiderCreateWithoutRideHistoryInput = {
    id?: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
    user: UserCreateNestedOneWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutRideHistoryInput = {
    id?: string
    userId: string
    emergencyContacts?: XOR<emergencyContactsListCreateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: number
    totalRides?: number
    cancelledRides?: number
  }

  export type RiderCreateOrConnectWithoutRideHistoryInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutRideHistoryInput, RiderUncheckedCreateWithoutRideHistoryInput>
  }

  export type DriverCreateWithoutRideInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    registrationProgress?: RegistrationProgressCreateNestedOneWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutRideInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    registrationProgress?: RegistrationProgressUncheckedCreateNestedOneWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutRideInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
  }

  export type LocationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateManyInput = {
    where: LocationWhereInput
    data: LocationUpdateInput
  }

  export type LocationDeleteManyInput = {
    where: LocationWhereInput
  }

  export type RiderUpsertWithoutRideHistoryInput = {
    update: XOR<RiderUpdateWithoutRideHistoryInput, RiderUncheckedUpdateWithoutRideHistoryInput>
    create: XOR<RiderCreateWithoutRideHistoryInput, RiderUncheckedCreateWithoutRideHistoryInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutRideHistoryInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutRideHistoryInput, RiderUncheckedUpdateWithoutRideHistoryInput>
  }

  export type RiderUpdateWithoutRideHistoryInput = {
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutRideHistoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    emergencyContacts?: XOR<emergencyContactsListUpdateEnvelopeInput, emergencyContactsCreateInput> | emergencyContactsCreateInput[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
  }

  export type DriverUpsertWithoutRideInput = {
    update: XOR<DriverUpdateWithoutRideInput, DriverUncheckedUpdateWithoutRideInput>
    create: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRideInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRideInput, DriverUncheckedUpdateWithoutRideInput>
  }

  export type DriverUpdateWithoutRideInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutRideInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type RegistrationStepCreateWithoutTemplateInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    definition?: StepDefinitionCreateNestedOneWithoutStepInput
  }

  export type RegistrationStepUncheckedCreateWithoutTemplateInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    definition?: StepDefinitionUncheckedCreateNestedOneWithoutStepInput
  }

  export type RegistrationStepCreateOrConnectWithoutTemplateInput = {
    where: RegistrationStepWhereUniqueInput
    create: XOR<RegistrationStepCreateWithoutTemplateInput, RegistrationStepUncheckedCreateWithoutTemplateInput>
  }

  export type RegistrationStepCreateManyTemplateInputEnvelope = {
    data: RegistrationStepCreateManyTemplateInput | RegistrationStepCreateManyTemplateInput[]
  }

  export type RegistrationStepUpsertWithWhereUniqueWithoutTemplateInput = {
    where: RegistrationStepWhereUniqueInput
    update: XOR<RegistrationStepUpdateWithoutTemplateInput, RegistrationStepUncheckedUpdateWithoutTemplateInput>
    create: XOR<RegistrationStepCreateWithoutTemplateInput, RegistrationStepUncheckedCreateWithoutTemplateInput>
  }

  export type RegistrationStepUpdateWithWhereUniqueWithoutTemplateInput = {
    where: RegistrationStepWhereUniqueInput
    data: XOR<RegistrationStepUpdateWithoutTemplateInput, RegistrationStepUncheckedUpdateWithoutTemplateInput>
  }

  export type RegistrationStepUpdateManyWithWhereWithoutTemplateInput = {
    where: RegistrationStepScalarWhereInput
    data: XOR<RegistrationStepUpdateManyMutationInput, RegistrationStepUncheckedUpdateManyWithoutTemplateInput>
  }

  export type RegistrationStepScalarWhereInput = {
    AND?: RegistrationStepScalarWhereInput | RegistrationStepScalarWhereInput[]
    OR?: RegistrationStepScalarWhereInput[]
    NOT?: RegistrationStepScalarWhereInput | RegistrationStepScalarWhereInput[]
    id?: StringFilter<"RegistrationStep"> | string
    status?: EnumRegistrationStatusFilter<"RegistrationStep"> | $Enums.RegistrationStatus
    isActive?: BoolFilter<"RegistrationStep"> | boolean
    createdAt?: DateTimeFilter<"RegistrationStep"> | Date | string
    updatedAt?: DateTimeFilter<"RegistrationStep"> | Date | string
    templateId?: StringFilter<"RegistrationStep"> | string
  }

  export type StepDefinitionCreateWithoutStepInput = {
    id?: string
    type: $Enums.StepType
    stepVersion: number
    display: XOR<StepDisplayCreateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StepDefinitionUncheckedCreateWithoutStepInput = {
    id?: string
    type: $Enums.StepType
    stepVersion: number
    display: XOR<StepDisplayCreateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StepDefinitionCreateOrConnectWithoutStepInput = {
    where: StepDefinitionWhereUniqueInput
    create: XOR<StepDefinitionCreateWithoutStepInput, StepDefinitionUncheckedCreateWithoutStepInput>
  }

  export type RegistrationTemplateCreateWithoutStepsInput = {
    id?: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationTemplateUncheckedCreateWithoutStepsInput = {
    id?: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationTemplateCreateOrConnectWithoutStepsInput = {
    where: RegistrationTemplateWhereUniqueInput
    create: XOR<RegistrationTemplateCreateWithoutStepsInput, RegistrationTemplateUncheckedCreateWithoutStepsInput>
  }

  export type RegistrationStepDisplayUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistrationStepOptionsUpdateInput = {
    isRecommended?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    redirectURL?: NullableStringFieldUpdateOperationsInput | string | null
    isUpcoming?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StepDefinitionUpsertWithoutStepInput = {
    update: XOR<StepDefinitionUpdateWithoutStepInput, StepDefinitionUncheckedUpdateWithoutStepInput>
    create: XOR<StepDefinitionCreateWithoutStepInput, StepDefinitionUncheckedCreateWithoutStepInput>
    where?: StepDefinitionWhereInput
  }

  export type StepDefinitionUpdateToOneWithWhereWithoutStepInput = {
    where?: StepDefinitionWhereInput
    data: XOR<StepDefinitionUpdateWithoutStepInput, StepDefinitionUncheckedUpdateWithoutStepInput>
  }

  export type StepDefinitionUpdateWithoutStepInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    stepVersion?: IntFieldUpdateOperationsInput | number
    display?: XOR<StepDisplayUpdateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepDefinitionUncheckedUpdateWithoutStepInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    stepVersion?: IntFieldUpdateOperationsInput | number
    display?: XOR<StepDisplayUpdateEnvelopeInput, StepDisplayCreateInput>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationTemplateUpsertWithoutStepsInput = {
    update: XOR<RegistrationTemplateUpdateWithoutStepsInput, RegistrationTemplateUncheckedUpdateWithoutStepsInput>
    create: XOR<RegistrationTemplateCreateWithoutStepsInput, RegistrationTemplateUncheckedCreateWithoutStepsInput>
    where?: RegistrationTemplateWhereInput
  }

  export type RegistrationTemplateUpdateToOneWithWhereWithoutStepsInput = {
    where?: RegistrationTemplateWhereInput
    data: XOR<RegistrationTemplateUpdateWithoutStepsInput, RegistrationTemplateUncheckedUpdateWithoutStepsInput>
  }

  export type RegistrationTemplateUpdateWithoutStepsInput = {
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationTemplateUncheckedUpdateWithoutStepsInput = {
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepDisplayCreateStepPreviewInstructionsListInput = {
    set: string[]
  }

  export type RegistrationStepCreateWithoutDefinitionInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: RegistrationTemplateCreateNestedOneWithoutStepsInput
  }

  export type RegistrationStepUncheckedCreateWithoutDefinitionInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId: string
  }

  export type RegistrationStepCreateOrConnectWithoutDefinitionInput = {
    where: RegistrationStepWhereUniqueInput
    create: XOR<RegistrationStepCreateWithoutDefinitionInput, RegistrationStepUncheckedCreateWithoutDefinitionInput>
  }

  export type StepDisplayUpdateInput = {
    StepTitle?: StringFieldUpdateOperationsInput | string
    StepPreviewTopInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    StepPreviewBottomInstruction?: NullableStringFieldUpdateOperationsInput | string | null
    StepPreviewInstructionsList?: StepDisplayUpdateStepPreviewInstructionsListInput | string[]
    StepPreviewImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    StepUploadActionText?: NullableStringFieldUpdateOperationsInput | string | null
    StepUseMyPhoneText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistrationStepUpsertWithoutDefinitionInput = {
    update: XOR<RegistrationStepUpdateWithoutDefinitionInput, RegistrationStepUncheckedUpdateWithoutDefinitionInput>
    create: XOR<RegistrationStepCreateWithoutDefinitionInput, RegistrationStepUncheckedCreateWithoutDefinitionInput>
    where?: RegistrationStepWhereInput
  }

  export type RegistrationStepUpdateToOneWithWhereWithoutDefinitionInput = {
    where?: RegistrationStepWhereInput
    data: XOR<RegistrationStepUpdateWithoutDefinitionInput, RegistrationStepUncheckedUpdateWithoutDefinitionInput>
  }

  export type RegistrationStepUpdateWithoutDefinitionInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: RegistrationTemplateUpdateOneRequiredWithoutStepsNestedInput
  }

  export type RegistrationStepUncheckedUpdateWithoutDefinitionInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type DriverCreateWithoutRegistrationProgressInput = {
    id?: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutDriverInput
    earnings?: EarningsCreateNestedOneWithoutDriverInput
    Ride?: RideCreateNestedManyWithoutDriverInput
    serviceArea?: ServiceAreaCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutRegistrationProgressInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    serviceAreaId?: string | null
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutDriverInput
    earnings?: EarningsUncheckedCreateNestedOneWithoutDriverInput
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutRegistrationProgressInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRegistrationProgressInput, DriverUncheckedCreateWithoutRegistrationProgressInput>
  }

  export type DriverUpsertWithoutRegistrationProgressInput = {
    update: XOR<DriverUpdateWithoutRegistrationProgressInput, DriverUncheckedUpdateWithoutRegistrationProgressInput>
    create: XOR<DriverCreateWithoutRegistrationProgressInput, DriverUncheckedCreateWithoutRegistrationProgressInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRegistrationProgressInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRegistrationProgressInput, DriverUncheckedUpdateWithoutRegistrationProgressInput>
  }

  export type DriverUpdateWithoutRegistrationProgressInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    serviceArea?: ServiceAreaUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutRegistrationProgressInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    serviceAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ScheduleCompositeListFilter = {
    equals?: ScheduleObjectEqualityInput[]
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ShiftNullableCompositeFilter = {
    equals?: ShiftObjectEqualityInput | null
    is?: ShiftWhereInput | null
    isNot?: ShiftWhereInput | null
    isSet?: boolean
  }

  export type RideCreateManyRiderInput = {
    id?: string
    driverId?: string | null
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type emergencyContactsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RideUpdateWithoutRiderInput = {
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutRiderInput = {
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyWithoutRiderInput = {
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyDriverInput = {
    id?: string
    type: $Enums.StepType
    documentId: string
    name: string
    number: string
    imageUrl: XOR<DocumentImageCreateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateManyDriverInput = {
    id?: string
    riderId: string
    source: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    destination: XOR<LocationCreateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListCreateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance: number
    duration: number
    promoCodeId?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    workingHours?: XOR<ScheduleListUpdateEnvelopeInput, ScheduleCreateInput> | ScheduleCreateInput[]
    currentShift?: XOR<ShiftNullableUpdateEnvelopeInput, ShiftCreateInput> | null
    breakEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    breakStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUpdateWithoutDriverInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutDriverInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutDriverInput = {
    type?: EnumStepTypeFieldUpdateOperationsInput | $Enums.StepType
    documentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    imageUrl?: XOR<DocumentImageUpdateEnvelopeInput, DocumentImageCreateInput>
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUpdateWithoutDriverInput = {
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRideHistoryNestedInput
  }

  export type RideUncheckedUpdateWithoutDriverInput = {
    riderId?: StringFieldUpdateOperationsInput | string
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyWithoutDriverInput = {
    riderId?: StringFieldUpdateOperationsInput | string
    source?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    destination?: XOR<LocationUpdateEnvelopeInput, LocationCreateInput>
    waypoints?: XOR<LocationListUpdateEnvelopeInput, LocationCreateInput> | LocationCreateInput[]
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    promoCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateManyServiceAreaInput = {
    id?: string
    userId: string
    status?: $Enums.DriverStatus
    vehicleType?: $Enums.VehicleType | null
    rating?: number
    totalRides?: number
    cancelledRides?: number
    isVerified?: boolean
    isRegistrationComplete?: boolean
    isInServiceArea?: boolean
    availability?: XOR<AvailabilityNullableCreateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateWithoutServiceAreaInput = {
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUpdateOneWithoutDriverNestedInput
    Ride?: RideUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUpdateOneWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutServiceAreaInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutDriverNestedInput
    earnings?: EarningsUncheckedUpdateOneWithoutDriverNestedInput
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
    registrationProgress?: RegistrationProgressUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutServiceAreaInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    vehicleType?: NullableEnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType | null
    rating?: FloatFieldUpdateOperationsInput | number
    totalRides?: IntFieldUpdateOperationsInput | number
    cancelledRides?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isRegistrationComplete?: BoolFieldUpdateOperationsInput | boolean
    isInServiceArea?: BoolFieldUpdateOperationsInput | boolean
    availability?: XOR<AvailabilityNullableUpdateEnvelopeInput, AvailabilityCreateInput> | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdatecoordinatesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type RegistrationStepCreateManyTemplateInput = {
    id?: string
    status: $Enums.RegistrationStatus
    display: XOR<RegistrationStepDisplayCreateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options: XOR<RegistrationStepOptionsCreateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationStepUpdateWithoutTemplateInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    definition?: StepDefinitionUpdateOneWithoutStepNestedInput
  }

  export type RegistrationStepUncheckedUpdateWithoutTemplateInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    definition?: StepDefinitionUncheckedUpdateOneWithoutStepNestedInput
  }

  export type RegistrationStepUncheckedUpdateManyWithoutTemplateInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    display?: XOR<RegistrationStepDisplayUpdateEnvelopeInput, RegistrationStepDisplayCreateInput>
    options?: XOR<RegistrationStepOptionsUpdateEnvelopeInput, RegistrationStepOptionsCreateInput>
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepDisplayUpdateStepPreviewInstructionsListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    dayOfWeek?: IntFilter<"Schedule"> | number
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    isActive?: BoolFilter<"Schedule"> | boolean
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    StartTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeFilter<"Shift"> | Date | string
    status?: EnumShiftStatusFilter<"Shift"> | $Enums.ShiftStatus
  }

  export type ScheduleListUpdateEnvelopeInput = {
    set?: ScheduleCreateInput | ScheduleCreateInput[]
    push?: ScheduleCreateInput | ScheduleCreateInput[]
    updateMany?: ScheduleUpdateManyInput
    deleteMany?: ScheduleDeleteManyInput
  }

  export type ShiftNullableUpdateEnvelopeInput = {
    set?: ShiftCreateInput | null
    upsert?: ShiftUpsertInput
    unset?: boolean
  }

  export type EnumShiftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftStatusFilter<$PrismaModel> | $Enums.ShiftStatus
  }

  export type ScheduleUpdateManyInput = {
    where: ScheduleWhereInput
    data: ScheduleUpdateInput
  }

  export type ScheduleDeleteManyInput = {
    where: ScheduleWhereInput
  }

  export type ShiftUpsertInput = {
    set: ShiftCreateInput | null
    update: ShiftUpdateInput
  }

  export type NestedEnumShiftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftStatus | EnumShiftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftStatus[] | ListEnumShiftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftStatusFilter<$PrismaModel> | $Enums.ShiftStatus
  }

  export type ScheduleUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftUpdateInput = {
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumShiftStatusFieldUpdateOperationsInput | $Enums.ShiftStatus
  }

  export type EnumShiftStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShiftStatus
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