import {tables} from '../db'

const getModels = async () => {
  try {
    const { data, error } = await tables
      .from('tables')
      .select()
      .eq('table_schema', 'public')
      .like('table_name', 'content_%')
      
    if (error) {
      throw Error(error.message)
    }

    return data
  } catch (ex: any) {
    console.error(ex)
  }
}

export default { getModels }