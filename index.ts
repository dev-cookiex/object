export const omit = <O, K extends string | number | symbol>( object: O, ...keys: K[] ): Omit<O, K> => {
  return Object.fromEntries(
    Object.entries( object )
      .filter( ( [ key ] ) => !keys.includes( key as K ) )
  ) as Omit<O, K>
}

export const pick = <O, K extends keyof O>( object: O, ...keys: K[] ): Pick<O, K> =>
  keys.reduce( ( data, key ) => ( { ...data, [key]: object[key] } ), {} as Pick<O, K> )