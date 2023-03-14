import {supabase} from '../db'

const getModels = async () => {
  try {
    const { data, error } = await supabase
      .rpc('list_public_tables')
      .select('table_name')
      
    if (error) {
      throw Error(error.message)
    }

    return data
  } catch (ex: any) {
    console.error(ex)
  }
}

export default { getModels }