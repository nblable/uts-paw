
import { Link, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const { items, hapus } = useKoleksi()

  const item = items.find((data) => String(data.id) === String(id))

  if (!item) {
    return (
      <section>
        <h1>Data tidak ditemukan</h1>
        <p>Kegiatan tidak ditemukan.</p>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  function handleHapus() {
    hapus(item.id)
    window.history.replaceState(null, '', '/koleksi')
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <section>
      <h1>{item.judul}</h1>
      <p>Kategori: {item.kategori}</p>
      <p>Tanggal: {item.tanggal}</p>
      <p>Lokasi: {item.lokasi}</p>
      <p>Penyelenggara: {item.penyelenggara}</p>

      <button type="button" onClick={handleHapus}>
        Hapus
      </button>

      <p>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </p>
    </section>
  )
}