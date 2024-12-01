import pool from '../configs/connectDB.js'

const getAllProducts = async () => {
  const [rows, fields] = await pool.execute('SELECT * FROM product')
  return rows
}

const getDetailsProduct = async (id) => {
  const [row, fields] = await pool.execute(
    `SELECT * FROM product WHERE id = ${id}`
  )
  return row[0]
}

const addProduct = async (productname, price, description) => {
  try {
    // Sử dụng câu lệnh INSERT INTO để thêm sản phẩm
    const [result] = await pool.execute(
      'INSERT INTO product (productname, price, description) VALUES (?, ?, ?)',
      [productname, price, description]
    )
    return result.affectedRows > 0
  } catch (error) {
    console.error('Lỗi khi thêm sản phẩm:', error)
    return false // Trả về `false` nếu có lỗi
  }
}

export default { getAllProducts, getDetailsProduct, addProduct }
