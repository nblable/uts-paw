
import { useNavigate } from 'react-router-dom'

export default function Tambah() {
  const navigate = useNavigate()

  return (
    <section>
      <h1>Tambah</h1>
      <button type="button" onClick={() => navigate('/koleksi')}>
        Kembali ke Koleksi
      </button>
    </section>
  )
}
