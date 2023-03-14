import { supabase } from '../db'

const getUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('user')
      .select()
  
    if (error)
      throw Error(error.message)

    return data
  } catch (err: any) {
    console.error(err)
  }
}

export default { getUsers }