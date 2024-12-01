import pool from '../configs/connectDB.js'

const getAllProducts = async () => {
  const [rows, fields] = await pool.execute('SELECT * FROM product')
  return rows
}

export default {getAllProducts}
