import { StorageKey } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types'

export class StorageManager {
  private constructor() {}
  public static shared = new StorageManager()

  /**
   * @title 存储一个key的值
   * @description 用于存储单个存储的值
   * @param key
   * @param value
   */
  async set<T>(key: StorageKey | string, value: T) {
    await AsyncStorage.setItem(key, JSON.stringify(value)).catch((e) => {
      console.error('saving storage error:', e)
      throw Error('saving storage error')
    })
  }
  /**
   * @title 获取一个key的值
   * @description 用于获取单个存储的值
   * @param key
   */
  async get<T>(key: StorageKey | string) {
    const value = await AsyncStorage.getItem(key).catch((e) => {
      console.error('get storage error:', e)
      throw Error('get storage error')
    })
    if (value !== null) {
      return JSON.parse(value) as T
    }
    return null
  }
  /**
   * @title 删除一个键值对
   * @description 用于删除单个存储的值
   * @param key
   */
  async remove(key: StorageKey | string) {
    await AsyncStorage.removeItem(key).catch((e) => {
      console.error('remove storage error:', e)
      throw Error('remove storage error')
    })
  }
  /**
   * @title 获取所有的key
   * @description 用于获取全部的key值
   */
  async keys() {
    return await AsyncStorage.getAllKeys().catch((e) => {
      console.error('get storage keys error:', e)
      throw Error('get storage keys error')
    })
  }

  /**
   * @title 获取批量的值
   * @description 用与获取多个值
   * @example getMultiple = async () => {
   *
   *   let values
   *   try {
   *     values = await AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key'])
   *   } catch(e) {
   *     // read error
   *   }
   *   console.log(values)
   *
   *   // example console.log output:
   *   // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
   * }
   * @param keys
   */
  async getMultiple(keys: string[]) {
    return await AsyncStorage.multiGet(keys).catch((e) => {
      console.error('get multiple storage error:', e)
      throw Error('get multiple storage error')
    })
  }
  async setMultiple(keyValuePairs: Array<[string, string]>) {
    await AsyncStorage.multiSet(keyValuePairs).catch((e) => {
      console.error('set multiple storage error:', e)
      throw Error('set multiple storage error')
    })
  }
  async removeMultiple(keys: string[]) {
    await AsyncStorage.multiRemove(keys).catch((e) => {
      console.error('remove multiple storage error:', e)
      throw Error('remove multiple storage error')
    })
  }
  async clear() {
    await AsyncStorage.clear().catch((e) => {
      console.error('clear storage error:', e)
      throw Error('clear storage error')
    })
  }
}
