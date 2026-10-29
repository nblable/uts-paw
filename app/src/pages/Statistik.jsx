import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items } = useKoleksi()

  const perKategori = items.reduce(
    (hitung, { kategori }) => ({
      ...hitung,
      [kategori]: (hitung[kategori] ?? 0) + 1,
    }),
    {},
  )

  return (
    <section id="statistik-halaman">
      <h1 id="statistik-judul">Statistik</h1>

      <div className="tabel-gulir">
        <table id="statistik-tabel" className="tabel-data">
          <thead>
            <tr>
              <th scope="col">Kategori</th>
              <th scope="col">Jumlah</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
              <tr key={kategori}>
                <td>{kategori}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}