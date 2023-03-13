import db from '../db'

const getUsers = async () => {
  try {
    const { data, error } = await db
      .from('user')
      .select('first_name')
  
    if (error)
      throw Error(error.message)

    return data
  } catch (err: any) {
    console.error(err)
  }
}

export default { getUsers }